import { AI_DIFFICULTY, GAME_MODE, SCREEN, SPLASH_DURATION_MS } from "./constants.js?v=11803ac";
import { loadPreferences, savePreferences } from "./storage.js?v=11803ac";
import { playCoinToss, setMuted } from "./audioEngine.js?v=11803ac";
import { getState, resetSession, updateState } from "./gameState.js?v=11803ac";
import { initInputHandlers } from "../ui/inputHandlers.js?v=11803ac";
import { initRenderers } from "../ui/renderers.js?v=11803ac";
import { initScreenManager } from "../ui/screenManager.js?v=11803ac";
import { animateCoinToss, initCoinTilt } from "../levels/coinGate.js?v=11803ac";

const history = [];
const goTo = (screen, direction = "forward") => {
  const current = getState().app.screen;
  if (screen === current) return;
  if (direction === "back") history.pop(); else history.push(current);
  updateState((state) => ({ ...state, app: { ...state.app, screen, transitionDirection: direction } }));
};
const goBack = () => {
  const previous = history.at(-1);
  if (previous) goTo(previous, "back");
  else if (getState().app.screen !== SCREEN.MAIN_MENU) goTo(SCREEN.MAIN_MENU, "back");
};
const setSession = (patch) => updateState((state) => ({ ...state, session: { ...state.session, ...patch } }));

const previewCoinToss = () => {
  // Preview sementara; gameplay nanti memasok hasil dari mathEngine.
  animateCoinToss([Math.random() < 0.5 ? "A" : "G"]);
};

const handleAction = (action) => {
  if (action === "skip-splash") return goTo(SCREEN.MAIN_MENU);
  if (action === "go-main-menu" || action === "go-back") return goBack();
  if (action === "go-mode-select") return goTo(SCREEN.MODE_SELECT);
  if (action === "go-level-select") {
    goTo(SCREEN.LEVEL_SELECT);
    window.setTimeout(() => {
      const dialog = document.getElementById("level-info");
      if (getState().app.screen === SCREEN.LEVEL_SELECT && dialog && !dialog.open) dialog.showModal();
    }, 250);
    return;
  }
  if (action === "show-level-info") {
    const dialog = document.getElementById("level-info");
    if (dialog && !dialog.open) dialog.showModal();
    return;
  }
  if (action === "go-formula-book") return goTo(SCREEN.FORMULA_BOOK);
  if (action === "go-credits") return goTo(SCREEN.CREDITS);
  if (action === "go-coin-gate") return goTo(SCREEN.COIN_GATE);
  if (action === "preview-coin") return previewCoinToss();
  if (action === "show-preview-hint") {
    const arena = document.querySelector("[data-coin-arena]");
    if (!arena) return;
    let hint = arena.querySelector("[data-preview-hint]");
    if (!hint) {
      hint = document.createElement("p");
      hint.dataset.previewHint = "true";
      hint.className = "arena-hint-note";
      hint.textContent = "Hint dan ruang sampel lengkap akan tersedia saat gameplay Level 1 diimplementasikan.";
      arena.append(hint);
    } else hint.remove();
    return;
  }
  if (action === "toggle-mute") {
    const isMuted = !getState().app.isMuted;
    setMuted(isMuted);
    savePreferences({ isMuted });
    return updateState((state) => ({ ...state, app: { ...state.app, isMuted } }));
  }
  if (action === "pilih-mode-solo") return setSession({ mode: GAME_MODE.SOLO_AI, aiDifficulty: AI_DIFFICULTY.NORMAL });
  if (action === "pilih-mode-pass") return setSession({ mode: GAME_MODE.PASS_AND_PLAY, aiDifficulty: null });
  if (action.startsWith("pilih-ai-")) return setSession({ aiDifficulty: action.replace("pilih-ai-", "") });
};

const startSplash = () => {
  window.setTimeout(() => {
    if (getState().app.screen !== SCREEN.SPLASH_UNIPMA) return;
    goTo(SCREEN.SPLASH_GAME);
    window.setTimeout(() => {
      if (getState().app.screen === SCREEN.SPLASH_GAME) goTo(SCREEN.MAIN_MENU);
    }, SPLASH_DURATION_MS);
  }, SPLASH_DURATION_MS);
};

const init = () => {
  const preferences = loadPreferences();
  setMuted(preferences.isMuted);
  updateState((state) => ({ ...state, app: { ...state.app, isMuted: preferences.isMuted } }));
  initScreenManager();
  initRenderers();
  initInputHandlers(handleAction);
  initCoinTilt();
  window.addEventListener("beforeunload", () => savePreferences({ isMuted: getState().app.isMuted }));
  startSplash();
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
else init();

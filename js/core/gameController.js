import { AI_DIFFICULTY, GAME_MODE, SCREEN, SPLASH_DURATION_MS } from "./constants.js";
import { loadPreferences, savePreferences } from "./storage.js";
import { playCoinToss, setMuted } from "./audioEngine.js";
import { getState, resetSession, updateState } from "./gameState.js";
import { initInputHandlers } from "../ui/inputHandlers.js";
import { initRenderers } from "../ui/renderers.js";
import { initScreenManager } from "../ui/screenManager.js";

const goTo = (screen) => updateState((state) => ({ ...state, app: { ...state.app, screen } }));
const setSession = (patch) => updateState((state) => ({ ...state, session: { ...state.session, ...patch } }));

const previewCoinToss = () => {
  const arena = document.querySelector("[data-coin-arena]");
  if (!arena) return;
  const result = Math.random() < 0.5 ? "a" : "g";
  arena.classList.remove("is-tossing", "result-a", "result-g");
  void arena.offsetWidth;
  arena.classList.add(`result-${result}`, "is-tossing");
  playCoinToss();
  window.setTimeout(() => arena.classList.remove("is-tossing"), 1750);
};

const handleAction = (action) => {
  if (action === "skip-splash") return goTo(SCREEN.MAIN_MENU);
  if (action === "go-main-menu") { resetSession(); return goTo(SCREEN.MAIN_MENU); }
  if (action === "go-mode-select") return goTo(SCREEN.MODE_SELECT);
  if (action === "go-level-select") return goTo(SCREEN.LEVEL_SELECT);
  if (action === "go-formula-book") return goTo(SCREEN.FORMULA_BOOK);
  if (action === "go-credits") return goTo(SCREEN.CREDITS);
  if (action === "go-coin-gate") return goTo(SCREEN.COIN_GATE);
  if (action === "preview-coin") return previewCoinToss();
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
  window.addEventListener("beforeunload", () => savePreferences({ isMuted: getState().app.isMuted }));
  startSplash();
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
else init();

import { getState, subscribe } from "../core/gameState.js?v=nw1";

let currentScreen = null;
let transitionTimer = null;
let pendingFinish = null;
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const showScreen = (screenId, direction = "forward") => {
  const next = document.querySelector(`[data-screen="${screenId}"]`);
  if (!next || screenId === currentScreen) return;
  if (pendingFinish) {
    clearTimeout(transitionTimer);
    pendingFinish();
  }
  const previous = currentScreen && document.querySelector(`[data-screen="${currentScreen}"]`);
  const finish = () => {
    document.querySelectorAll("[data-screen]").forEach((screen) => {
      const active = screen === next;
      screen.hidden = !active;
      screen.classList.toggle("is-active", active);
      screen.classList.remove("is-entering-forward", "is-entering-back", "is-exiting-forward", "is-exiting-back");
      screen.setAttribute("aria-hidden", String(!active));
    });
    currentScreen = screenId;
    pendingFinish = null;
    transitionTimer = null;
  };
  pendingFinish = finish;
  next.hidden = false;
  next.classList.add("is-active");
  next.setAttribute("aria-hidden", "false");
  const duration = reducedMotion() ? 130 : 220;
  next.classList.add(direction === "back" ? "is-entering-back" : "is-entering-forward");
  if (previous) previous.classList.add(direction === "back" ? "is-exiting-back" : "is-exiting-forward");
  transitionTimer = window.setTimeout(finish, duration);
};

export const initScreenManager = () => {
  currentScreen = getState().app.screen;
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const active = screen.dataset.screen === currentScreen;
    screen.hidden = !active; screen.classList.toggle("is-active", active); screen.setAttribute("aria-hidden", String(!active));
  });
  return subscribe((state) => showScreen(state.app.screen, state.app.transitionDirection || "forward"));
};

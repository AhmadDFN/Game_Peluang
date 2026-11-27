import { getState, subscribe } from "../core/gameState.js";

let currentScreen = null;
let locked = false;
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const showScreen = (screenId, direction = "forward") => {
  const next = document.querySelector(`[data-screen="${screenId}"]`);
  if (!next || screenId === currentScreen || locked) return;
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
    locked = false;
  };
  locked = true;
  next.hidden = false;
  next.classList.add("is-active");
  next.setAttribute("aria-hidden", "false");
  if (reducedMotion()) {
    if (previous) previous.classList.add(direction === "back" ? "is-exiting-back" : "is-exiting-forward");
    next.classList.add(direction === "back" ? "is-entering-back" : "is-entering-forward");
    window.setTimeout(finish, 130);
    return;
  }
  next.classList.add(direction === "back" ? "is-entering-back" : "is-entering-forward");
  if (previous) previous.classList.add(direction === "back" ? "is-exiting-back" : "is-exiting-forward");
  window.setTimeout(finish, 220);
};

export const initScreenManager = () => {
  currentScreen = getState().app.screen;
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const active = screen.dataset.screen === currentScreen;
    screen.hidden = !active; screen.classList.toggle("is-active", active); screen.setAttribute("aria-hidden", String(!active));
  });
  return subscribe((state) => showScreen(state.app.screen, state.app.transitionDirection || "forward"));
};

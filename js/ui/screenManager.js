import { getState, subscribe } from "../core/gameState.js";

export const showScreen = (screenId) => {
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const active = screen.dataset.screen === screenId;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });
  const activeScreen = document.querySelector(`[data-screen="${screenId}"]`);
  if (activeScreen) activeScreen.scrollTo({ top: 0, behavior: "smooth" });
};

export const initScreenManager = () => { showScreen(getState().app.screen); return subscribe((state) => showScreen(state.app.screen)); };

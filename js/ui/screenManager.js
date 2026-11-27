import { getState, subscribe } from "../core/gameState.js";

export const showScreen = (screenId) => {
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const active = screen.dataset.screen === screenId;
    screen.hidden = !active;
    screen.setAttribute("aria-hidden", String(!active));
  });
};

export const initScreenManager = () => { showScreen(getState().app.screen); return subscribe((state) => showScreen(state.app.screen)); };

import { playClick } from "../core/audioEngine.js";

export const initInputHandlers = (handler) => {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    playClick();
    handler(target.dataset.action);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") handler("go-main-menu");
  });
};

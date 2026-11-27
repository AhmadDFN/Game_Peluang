import { playClick, playHover } from "../core/audioEngine.js";

export const initInputHandlers = (handler) => {
  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("button, .choice-card");
    if (target && !target.contains(event.relatedTarget)) playHover();
  });
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

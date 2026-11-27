export const GAME_TITLE = "Probify";
export const GAME_TAGLINE = "Probability + Simplify";
export const CAMPUS_NAME = "Universitas PGRI Madiun (UNIPMA)";
export const CAMPUS_LOGO_PATH = "./assets/images/logo-unipma.webp";
export const AUTHOR_TEXT = "Coming Soon";

export const SCREEN = Object.freeze({
  SPLASH_UNIPMA: "splash-unipma",
  SPLASH_GAME: "splash-game",
  MAIN_MENU: "main-menu",
  MODE_SELECT: "mode-select",
  LEVEL_SELECT: "level-select",
  COIN_GATE: "coin-gate",
  FORMULA_BOOK: "formula-book",
  CREDITS: "credits"
});

export const GAME_MODE = Object.freeze({ SOLO_AI: "solo-ai", PASS_AND_PLAY: "pass-and-play" });
export const AI_DIFFICULTY = Object.freeze({ EASY: "easy", NORMAL: "normal", HARD: "hard" });
export const ROUND_CONFIG = Object.freeze([
  Object.freeze({ round: 1, coinCount: 1, sampleCount: 2 }),
  Object.freeze({ round: 2, coinCount: 1, sampleCount: 2 }),
  Object.freeze({ round: 3, coinCount: 2, sampleCount: 4 }),
  Object.freeze({ round: 4, coinCount: 2, sampleCount: 4 }),
  Object.freeze({ round: 5, coinCount: 3, sampleCount: 8 })
]);
export const TOTAL_ROUNDS = ROUND_CONFIG.length;
export const SPLASH_DURATION_MS = 2000;

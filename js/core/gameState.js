import { ROUND_CONFIG, SCREEN, TOTAL_ROUNDS } from "./constants.js?v=11803ac";

const createInitialState = () => ({
  app: { screen: SCREEN.SPLASH_UNIPMA, splashStartedAt: Date.now(), isMuted: false },
  session: { mode: null, aiDifficulty: null, activeLevel: null, round: 1, totalRounds: TOTAL_ROUNDS, phase: "idle", hintUsed: false },
  round: { coinCount: ROUND_CONFIG[0].coinCount, sampleSpace: [], playerOneOptionId: null, playerTwoOptionId: null, outcome: null, evaluation: null },
  players: { playerOne: { score: 0 }, playerTwo: { score: 0 } }
});

let state = createInitialState();
const listeners = new Set();

export const getState = () => state;
export const subscribe = (listener) => { listeners.add(listener); return () => listeners.delete(listener); };
export const updateState = (updater) => {
  const nextState = typeof updater === "function" ? updater(state) : updater;
  state = nextState;
  listeners.forEach((listener) => listener(state));
  return state;
};
export const resetSession = () => updateState(() => createInitialState());

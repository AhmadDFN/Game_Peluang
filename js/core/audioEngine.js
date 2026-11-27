let audioContext = null;
let muted = false;

const getAudioContext = () => {
  if (audioContext) return audioContext;
  const Context = window.AudioContext || window.webkitAudioContext;
  if (!Context) return null;
  try { audioContext = new Context(); return audioContext; } catch { return null; }
};

export const setMuted = (value) => { muted = Boolean(value); };
export const isMuted = () => muted;
export function playCoinPhase(phase) {
  if (muted) return;
  const options = { coinCharge: ["sine", 220, 520], coinLaunch: ["triangle", 600, 1900], coinApex: ["sine", 2400, 3200], coinImpact: ["triangle", 180, 55] };
  if (!options[phase]) return;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume().catch(() => {});
  const [type, start, end] = options[phase];
  const osc = context.createOscillator(), gain = context.createGain(), t = context.currentTime;
  osc.type = type; osc.frequency.setValueAtTime(start, t); osc.frequency.exponentialRampToValueAtTime(end, t + .22);
  gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(.08, t + .01); gain.gain.exponentialRampToValueAtTime(.0001, t + .3);
  osc.connect(gain).connect(context.destination); osc.start(t); osc.stop(t + .31);
}
export const playHover = () => {
  if (muted || !audioContext) return;
  const t = audioContext.currentTime, o = audioContext.createOscillator(), g = audioContext.createGain();
  o.frequency.value = 900; g.gain.setValueAtTime(0.025, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
  o.connect(g).connect(audioContext.destination); o.start(t); o.stop(t + 0.05);
};
export const playClick = () => {
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume().catch(() => {});
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(520, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(760, context.currentTime + 0.06);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.09);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.1);
};

export const playCoinToss = () => {
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume().catch(() => {});
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(360, now);
  oscillator.frequency.exponentialRampToValueAtTime(1100, now + 0.24);
  oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.9);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.14, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 1);
  window.setTimeout(() => playMetalPing(), 820);
};

const playMetalPing = () => {
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(1500, now);
  oscillator.frequency.exponentialRampToValueAtTime(540, now + 0.42);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.46);
};

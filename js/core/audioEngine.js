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
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume().catch(() => {});
  const t = context.currentTime;
  // Tangga nada Gamelan Slendro: Ji=528Hz, Ro=594Hz, Lu=660Hz, Ma=792Hz, Nem=880Hz
  if (phase === "coinCharge") {
    const osc = context.createOscillator(), gain = context.createGain();
    osc.type = "sine"; osc.frequency.setValueAtTime(220, t); osc.frequency.exponentialRampToValueAtTime(520, t + .22);
    gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(.06, t + .01); gain.gain.exponentialRampToValueAtTime(.0001, t + .3);
    osc.connect(gain).connect(context.destination); osc.start(t); osc.stop(t + .31);
    return;
  }
  if (phase === "coinLaunch") {
    // Sapuan nada Ji (528Hz naik ke 1056Hz) — sentilan dalang
    const osc = context.createOscillator(), gain = context.createGain();
    osc.type = "triangle"; osc.frequency.setValueAtTime(528, t); osc.frequency.exponentialRampToValueAtTime(1056, t + .25);
    gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(.18, t + .01); gain.gain.exponentialRampToValueAtTime(.0001, t + .32);
    osc.connect(gain).connect(context.destination); osc.start(t); osc.stop(t + .34);
    return;
  }
  if (phase === "coinApex") {
    // Denting Bonang Slendro Ma→Nem (792Hz→880Hz) — puncak lemparan
    const osc = context.createOscillator(), gain = context.createGain();
    osc.type = "sine"; osc.frequency.setValueAtTime(792, t); osc.frequency.setValueAtTime(880, t + .09);
    gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(.16, t + .01); gain.gain.exponentialRampToValueAtTime(.0001, t + .36);
    osc.connect(gain).connect(context.destination); osc.start(t); osc.stop(t + .38);
    return;
  }
  if (phase === "coinImpact") {
    // Dengung Gong Kempul (145Hz turun ke 66Hz) — koin mendarat
    const osc = context.createOscillator(), gain = context.createGain();
    osc.type = "sine"; osc.frequency.setValueAtTime(145, t); osc.frequency.exponentialRampToValueAtTime(66, t + .45);
    gain.gain.setValueAtTime(.0001, t); gain.gain.exponentialRampToValueAtTime(.32, t + .01); gain.gain.exponentialRampToValueAtTime(.0001, t + .52);
    osc.connect(gain).connect(context.destination); osc.start(t); osc.stop(t + .54);
  }
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

export function playSlendroSfx(stage) {
  const map = { launch: "coinLaunch", apex: "coinApex", impact: "coinImpact", charge: "coinCharge" };
  playCoinPhase(map[stage] || stage);
}

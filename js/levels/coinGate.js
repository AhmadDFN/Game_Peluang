import { playCoinPhase } from "../core/audioEngine.js";

function burst(canvas, count, yRatio) {
  const ctx = canvas?.getContext("2d");
  if (!ctx) return;
  const { width, height } = canvas.getBoundingClientRect();
  if (!width || !height) return;
  canvas.width = width; canvas.height = height;
  const color = getComputedStyle(canvas).getPropertyValue("--color-gold-bright").trim();
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = 2 * Math.PI * i / count;
    return { x: width / 2, y: height * yRatio, vx: Math.cos(angle) * (2 + Math.random() * 3), vy: Math.sin(angle) * (2 + Math.random() * 3) - 2, life: 1 };
  });
  function frame() {
    if (!canvas.isConnected) return;
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) { p.x += p.vx; p.y += p.vy; p.vy += .15; p.life -= .035; ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    if (particles.some((p) => p.life > 0)) requestAnimationFrame(frame); else ctx.clearRect(0, 0, width, height);
  }
  requestAnimationFrame(frame);
}

export function animateCoinToss(outcomes) {
  if (!Array.isArray(outcomes) || outcomes.length < 1 || outcomes.length > 3 || outcomes.some(v => v !== "A" && v !== "G")) throw new TypeError("Hasil harus berupa array 1–3 simbol A/G.");
  const arena = document.querySelector("[data-coin-arena]");
  if (!arena || arena.classList.contains("is-tossing")) return false;
  const row = arena.querySelector("[data-coin-row]"), first = row?.querySelector(".coin-stage");
  if (!first) return false;
  const template = first.cloneNode(true); row.replaceChildren();
  outcomes.forEach((v) => { const coin = template.cloneNode(true); coin.style.setProperty("--coin-final-turn", v === "G" ? "900deg" : "720deg"); coin.style.setProperty("--coin-face-angle", v === "G" ? "180deg" : "0deg"); row.append(coin); });
  const label = arena.querySelector("[data-coin-result]"), reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  arena.classList.add("is-tossing", "is-charging"); label.textContent = "Koin sedang dilempar…"; playCoinPhase("coinCharge");
  const later = (ms, fn) => window.setTimeout(() => { if (arena.isConnected) fn(); }, reduced ? Math.min(ms, 120) : ms);
  later(220, () => { arena.classList.remove("is-charging"); arena.classList.add("is-launched"); arena.querySelector(".hand-rig")?.classList.add("is-flicking"); playCoinPhase("coinLaunch"); });
  later(620, () => { arena.classList.add("is-apex"); playCoinPhase("coinApex"); if (!reduced) burst(arena.querySelector("canvas"), 16, .25); });
  later(1200, () => { arena.classList.add("is-impact"); playCoinPhase("coinImpact"); if (!reduced) burst(arena.querySelector("canvas"), 32, .7); });
  later(1520, () => { arena.classList.remove("is-tossing", "is-launched", "is-apex", "is-impact", "is-charging"); arena.querySelector(".hand-rig")?.classList.remove("is-flicking"); label.textContent = `Hasil: ${outcomes.map(v => v === "A" ? "Angka (A)" : "Gambar (G)").join(" • ")}`; });
  return true;
}

export function initCoinTilt() {
  document.addEventListener("pointermove", (event) => {
    const arena = event.target.closest("[data-coin-arena]");
    if (!arena || arena.classList.contains("is-tossing") || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = arena.getBoundingClientRect();
    const x = Math.max(-22, Math.min(22, (event.clientX - rect.left - rect.width / 2) / rect.width * 44));
    const y = Math.max(-22, Math.min(22, -(event.clientY - rect.top - rect.height / 2) / rect.height * 44));
    arena.style.setProperty("--tilt-x", `${y}deg`); arena.style.setProperty("--tilt-y", `${x}deg`); arena.classList.add("is-tilting");
  });
  document.addEventListener("pointerout", (event) => { const arena = event.target.closest("[data-coin-arena]"); if (arena && !arena.contains(event.relatedTarget)) arena.classList.remove("is-tilting"); });
  document.addEventListener("pointerup", (event) => event.target.closest("[data-coin-arena]")?.classList.remove("is-tilting"));
}

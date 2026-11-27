import { playCoinToss } from "../core/audioEngine.js";

/** Memvisualisasikan hasil engine berupa 'A', 'G', 'AG', atau array simbol. */
export function triggerCoinToss(outcome) {
  const values = Array.isArray(outcome) ? outcome : typeof outcome === "string" ? [...outcome] : [];
  if (values.length < 1 || values.length > 3 || values.some((value) => value !== "A" && value !== "G")) {
    throw new TypeError("Hasil harus berisi 1–3 simbol A atau G.");
  }
  const arena = document.querySelector("[data-coin-arena]");
  if (!arena || arena.classList.contains("is-tossing")) return false;
  const first = arena.querySelector(".coin-stage");
  if (!first) return false;
  arena.querySelectorAll(".coin-stage:not(:first-of-type)").forEach((coin) => coin.remove());
  const row = arena.querySelector("[data-coin-row]");
  row.replaceChildren();
  values.forEach((value) => {
    const coin = first.cloneNode(true);
    coin.style.setProperty("--coin-final-turn", value === "G" ? "900deg" : "720deg");
    coin.querySelector(".coin-3d").style.transform = `rotateY(${value === "G" ? 180 : 0}deg)`;
    row.append(coin);
  });
  arena.classList.remove("is-tossing");
  void arena.offsetWidth;
  arena.classList.add("is-tossing");
  const label = arena.querySelector("[data-coin-result]");
  label.textContent = "Koin sedang dilempar…";
  playCoinToss();
  window.setTimeout(() => {
    arena.classList.remove("is-tossing");
    label.textContent = `Hasil: ${values.map((value) => value === "A" ? "Angka (A)" : "Gambar (G)").join(" • ")}`;
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 1750);
  return true;
}

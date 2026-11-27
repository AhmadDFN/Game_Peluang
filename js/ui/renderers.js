import { AI_DIFFICULTY, AUTHOR_TEXT, CAMPUS_NAME, GAME_MODE, GAME_TAGLINE, GAME_TITLE, SCREEN } from "../core/constants.js?v=nw1";
import { getState, subscribe } from "../core/gameState.js?v=nw1";

const button = (label, action, className = "button-secondary") =>
  `<button class="button ${className}" type="button" data-action="${action}">${label}</button>`;
const header = (eyebrow, title, description) =>
  `<p class="eyebrow">${eyebrow}</p><h1 class="title">${title}</h1><p class="subtitle">${description}</p>`;
const backButton = () =>
  `<button class="floating-icon screen-back" type="button" data-action="go-back" aria-label="Kembali"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7M8 12h11"/></svg></button>`;
const probifyLogo = () =>
  `<svg class="probify-emblem" viewBox="0 0 160 160" role="img" aria-label="Emblem Probify"><defs><linearGradient id="menu-gold" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#F5D061"/><stop offset="1" stop-color="#D4AF37"/></linearGradient></defs><circle cx="80" cy="80" r="67" fill="#131A2A" stroke="url(#menu-gold)" stroke-width="5"/><circle cx="80" cy="80" r="51" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="3 8"/><path d="M48 94c15-26 30-39 48-39 10 0 18 3 26 9" fill="none" stroke="#F5D061" stroke-linecap="round" stroke-width="6"/><path d="M111 62l11 2-7 9" fill="none" stroke="#F5D061" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/><text x="80" y="106" fill="#F8FAFC" font-family="Georgia, serif" font-size="38" font-weight="700" text-anchor="middle">P</text></svg>`;

// ─── SVG Tangan Sang Dalang (Beskap Hitam + Batik Parang Emas) ───────────────
const handIllustration = () => `<svg class="hand-rig dalang-hand" aria-hidden="true" viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skinDalang" x1="80" y1="60" x2="185" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F7C9A9"/><stop offset="55%" stop-color="#DDA07B"/><stop offset="100%" stop-color="#A86B49"/>
    </linearGradient>
    <linearGradient id="skinShadow" x1="110" y1="70" x2="170" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#C4825E"/><stop offset="100%" stop-color="#8A5032"/>
    </linearGradient>
    <linearGradient id="thumbGrad" x1="75" y1="70" x2="125" y2="130" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFE3CC"/><stop offset="50%" stop-color="#E5A985"/><stop offset="100%" stop-color="#B07250"/>
    </linearGradient>
    <!-- Beskap Hitam Beludru -->
    <linearGradient id="beskapBlack" x1="85" y1="145" x2="195" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E2433"/><stop offset="55%" stop-color="#0B0E17"/><stop offset="100%" stop-color="#05070C"/>
    </linearGradient>
    <!-- Batik Parang Emas Manset -->
    <linearGradient id="parangGold" x1="80" y1="145" x2="185" y2="175" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF0A6"/><stop offset="50%" stop-color="#D4AF37"/><stop offset="100%" stop-color="#7A5608"/>
    </linearGradient>
    <filter id="softDropDalang" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
  </defs>
  <g filter="url(#softDropDalang)">
    <!-- Jari Manis & Kelingking (terlipat) -->
    <rect x="136" y="96" width="38" height="17" rx="8.5" transform="rotate(14 136 96)" fill="url(#skinShadow)" stroke="#754126" stroke-width="1.2"/>
    <rect x="134" y="112" width="33" height="16" rx="8" transform="rotate(18 134 112)" fill="url(#skinShadow)" stroke="#754126" stroke-width="1.2"/>
    <!-- Jari Tengah -->
    <rect x="132" y="79" width="44" height="18" rx="9" transform="rotate(8 132 79)" fill="url(#skinDalang)" stroke="#8A5032" stroke-width="1.2"/>
    <!-- Telapak & Punggung Tangan -->
    <path d="M98 156 L104 94 C106 76 124 68 144 74 L164 82 C175 87 179 101 174 115 L162 162 Z" fill="url(#skinDalang)" stroke="#8A5032" stroke-width="1.4"/>
    <path d="M118 104 C126 116 126 134 116 148" stroke="#9C6040" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    <!-- Telunjuk (Landasan Koin) -->
    <g class="index-joint">
      <path d="M114 78 C114 67 125 60 138 61 L166 64 C175 65 180 72 179 80 C178 88 171 92 162 91 L126 88 Z" fill="url(#skinDalang)" stroke="#FFE3CC" stroke-width="1.2"/>
      <path d="M144 65 L143 86 M159 67 L158 87" stroke="#A86B49" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
    </g>
    <!-- Ibu Jari (Sentilan Koin) -->
    <g class="thumb-joint">
      <path d="M112 132 C94 122 80 102 82 84 C83 72 93 67 103 73 C112 79 118 94 124 110 L130 128 Z" fill="url(#thumbGrad)" stroke="#FFE999" stroke-width="1.5"/>
      <path d="M86 83 C87 75 93 72 99 76 C101 81 98 87 92 88 C88 88 86 86 86 83 Z" fill="#FFF4EA" opacity="0.85"/>
      <path d="M98 102 C104 99 109 100 113 103" stroke="#9C6040" stroke-width="1.5" stroke-linecap="round" opacity="0.65"/>
    </g>
    <!-- Manset Batik Parang Emas -->
    <path d="M92 156 L168 164 L166 175 L90 167 Z" fill="url(#parangGold)" stroke="#5C3F05" stroke-width="1"/>
    <!-- Motif Parang diagonal -->
    <path d="M100 158 L110 170 M114 160 L124 172 M128 161 L138 173 M142 162 L150 172" stroke="#3D2802" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Lengan Beskap Hitam Beludru -->
    <path d="M84 164 L174 173 L188 245 L70 245 Z" fill="url(#beskapBlack)" stroke="url(#parangGold)" stroke-width="2.5"/>
    <!-- Bordir Emas Ganda -->
    <path d="M82 174 L176 183" stroke="url(#parangGold)" stroke-width="2"/>
    <!-- Kancing Manset Emas (Cufflink) -->
    <circle cx="155" cy="194" r="6.5" fill="url(#parangGold)" stroke="#5C3F05" stroke-width="1.5"/>
    <circle cx="155" cy="194" r="2.5" fill="#FFF6C7"/>
  </g>
</svg>`;

// ─── SVG Siluet Gunungan (Kayon) — Latar Arena Blencong ─────────────────────
const gununganBackdrop = () => `<svg class="gunungan-backdrop" viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="gununganGrad" x1="120" y1="12" x2="120" y2="274" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFE680"/><stop offset="100%" stop-color="#8A640F"/>
    </linearGradient>
  </defs>
  <!-- Siluet Kayon -->
  <path d="M120 12 C145 55 198 115 206 185 C210 218 190 245 165 256 L165 274 L75 274 L75 256 C50 245 30 218 34 185 C42 115 95 55 120 12 Z" fill="url(#gununganGrad)" stroke="#FFE680" stroke-width="2.5"/>
  <!-- Pohon Hayat -->
  <path d="M120 42 L120 245 M120 95 C95 82 78 96 68 112 M120 95 C145 82 162 96 172 112 M120 140 C88 126 66 144 56 164 M120 140 C152 126 174 144 184 164" stroke="#070A12" stroke-width="3" stroke-linecap="round"/>
  <!-- Gerbang Candi -->
  <rect x="92" y="196" width="56" height="58" rx="4" fill="#070A12"/>
  <polygon points="120,174 86,198 154,198" fill="#070A12"/>
</svg>`;

// ─── SVG Koin Neo-Wayang: Sisi A (Probify Wayang) ──────────────────────────
const coinFrontSvgRaw = (idx = 0) => `<svg viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="goldA-${idx}" cx="32%" cy="28%" r="72%">
      <stop offset="0%" stop-color="#FFF8CC"/>
      <stop offset="42%" stop-color="#F2C94C"/>
      <stop offset="100%" stop-color="#7A5608"/>
    </radialGradient>
    <path id="arcTopA-${idx}" d="M 32,100 A 68,68 0 1,1 168,100" />
    <path id="arcBotA-${idx}" d="M 168,100 A 68,68 0 1,1 32,100" />
  </defs>
  <circle cx="100" cy="100" r="98" fill="url(#goldA-${idx})" stroke="#FFE680" stroke-width="4"/>
  <circle cx="100" cy="100" r="85" fill="none" stroke="#5C3F05" stroke-width="2" stroke-dasharray="3 2.5"/>
  <!-- Ornamen Sumping & Garuda Mungkur Wayang di Kiri-Kanan -->
  <g fill="#4A3204" opacity="0.35">
    <path d="M44 100 C36 82 46 66 60 64 C52 78 54 90 62 100 C54 110 52 122 60 136 C46 134 36 118 44 100 Z"/>
    <path d="M156 100 C164 82 154 66 140 64 C148 78 146 90 138 100 C146 110 148 122 140 136 C154 134 164 118 156 100 Z"/>
  </g>
  <text fill="#3D2802" font-size="11" font-weight="900" letter-spacing="3.5">
    <textPath href="#arcTopA-${idx}" startOffset="50%" text-anchor="middle">• SISI ANGKA •</textPath>
  </text>
  <text fill="#4A3204" font-size="9.5" font-weight="800" letter-spacing="2.5">
    <textPath href="#arcBotA-${idx}" startOffset="50%" text-anchor="middle">PROBIFY WAYANG</textPath>
  </text>
  <text x="100" y="131" text-anchor="middle" fill="#FFF7C2" font-size="92" font-weight="900" font-family="Georgia, serif" opacity="0.65" transform="translate(1.5,2)">A</text>
  <text x="100" y="131" text-anchor="middle" fill="#2E1E01" font-size="92" font-weight="900" font-family="Georgia, serif">A</text>
</svg>`;

// ─── SVG Koin Neo-Wayang: Sisi G (Ukiran Relief Tokoh Wayang) ────────────────
const coinBackSvgRaw = (idx = 0) => `<svg viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="goldG-${idx}" cx="32%" cy="28%" r="72%">
      <stop offset="0%" stop-color="#FFF5BD"/>
      <stop offset="42%" stop-color="#E5B83B"/>
      <stop offset="100%" stop-color="#6B4C07"/>
    </radialGradient>
    <path id="arcTopG-${idx}" d="M 32,100 A 68,68 0 1,1 168,100" />
    <path id="arcBotG-${idx}" d="M 168,100 A 68,68 0 1,1 32,100" />
  </defs>
  <circle cx="100" cy="100" r="98" fill="url(#goldG-${idx})" stroke="#FFE680" stroke-width="4"/>
  <circle cx="100" cy="100" r="85" fill="none" stroke="#5C3F05" stroke-width="2" stroke-dasharray="3 2.5"/>
  <text fill="#3D2802" font-size="11" font-weight="900" letter-spacing="3.5">
    <textPath href="#arcTopG-${idx}" startOffset="50%" text-anchor="middle">• SISI GAMBAR •</textPath>
  </text>
  <text fill="#2E1E01" font-size="11.5" font-weight="900" letter-spacing="2.5">
    <textPath href="#arcBotG-${idx}" startOffset="50%" text-anchor="middle">WAYANG ( G )</textPath>
  </text>

  <!-- Ukiran Relief Tokoh Wayang (Gelung Supit Urang, Profil Wajah & Praba) -->
  <g transform="translate(2, 4)">
    <!-- Gelung Supit Urang (Mahkota Melengkung Khas Wayang) -->
    <path d="M84 82 C62 76 54 54 70 42 C82 33 98 42 94 56 C91 64 81 62 82 54 C83 49 89 49 90 53"
          fill="none" stroke="#3D2802" stroke-width="7" stroke-linecap="round"/>
    <!-- Jamang & Hiasan Dahi -->
    <path d="M82 78 L114 68 L112 80 L84 88 Z" fill="#3D2802"/>
    <!-- Profil Wajah Wayang Menghadap Kanan (Hidung Mancung Khas Wayang Kulit) -->
    <path d="M90 84 L114 78 L116 92 L127 98 L115 103 L117 109 L111 112 L114 118 L104 121 L94 114 Z"
          fill="#3D2802"/>
    <!-- Mata Liyeupan & Alis -->
    <path d="M103 89 Q109 87 113 90 Q108 92 103 89 Z" fill="#FFE680"/>
    <!-- Sumping (Hiasan Telinga) & Garuda Mungkur Belakang -->
    <path d="M86 84 C74 88 70 102 78 112 C82 104 84 96 90 92 Z" fill="#3D2802"/>
    <!-- Bahu, Kalung Ulur-Ulur & Sayap Praba -->
    <path d="M72 138 C74 122 86 116 102 118 C118 120 128 128 130 142 L68 142 Z" fill="#3D2802"/>
    <!-- Detail Tatah Sungging (Garis Ukiran Emas di Dalam Siluet) -->
    <path d="M86 125 Q100 134 116 126 M92 132 Q101 139 111 132" fill="none" stroke="#FFE680" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>`;

const coinSideSvg = (side, idx = 0) => side === "front" ? coinFrontSvgRaw(idx) : coinBackSvgRaw(idx);

// ─── Render Functions ─────────────────────────────────────────────────────────
const renderMainMenu = () => `<div class="hero-grid"><div class="hero-brand">${probifyLogo()}<p class="game-wordmark">${GAME_TITLE}</p>${header("Game Edukasi Teori Peluang", "Probability + Simplify", "Pelajari peluang dengan cara yang sederhana dan menyenangkan.")}</div><div class="card menu-card"><div class="actions">${button("Mulai Bermain", "go-mode-select", "button-primary")}${button("Buku Rumus Koin", "go-formula-book")}${button("Kredit", "go-credits")}</div></div></div>`;

const renderModeSelect = (state) => `<div class="mode-select-content">${backButton()}${header("Langkah 1 dari 2", "Pilih Mode", "Tentukan cara bermain sebelum memasuki gerbang koin.")}<div class="card-grid">${[
  [GAME_MODE.SOLO_AI, "Solo vs AI", "Uji pemahamanmu melawan lawan komputer dengan tingkat kesulitan pilihanmu.", "pilih-mode-solo"],
  [GAME_MODE.PASS_AND_PLAY, "1v1 Pass & Play", "Bermain berdua pada satu perangkat secara bergantian.", "pilih-mode-pass"]
].map(([mode, title, description, action]) => `<article class="card choice-card ${state.session.mode === mode ? "is-selected" : ""}"><span class="badge">Mode</span><h2>${title}</h2><p>${description}</p>${button("Pilih Mode", action, state.session.mode === mode ? "button-primary" : "button-secondary")}</article>`).join("")}</div>${state.session.mode === GAME_MODE.SOLO_AI ? `<div class="card stack ai-difficulty-panel"><h2>Pilih Tingkat AI</h2><div class="actions">${[[AI_DIFFICULTY.EASY,"Mudah"],[AI_DIFFICULTY.NORMAL,"Normal"],[AI_DIFFICULTY.HARD,"Sulit"]].map(([id,label]) => button(label, `pilih-ai-${id}`, state.session.aiDifficulty === id ? "button-primary" : "button-secondary")).join("")}</div></div>` : ""}<div class="actions mode-select-actions">${state.session.mode ? button("Lanjut Pilih Level", "go-level-select", "button-primary") : ""}</div></div>`;

const renderLevelSelect = () => `<div>${backButton()}<button class="floating-icon level-info-button" type="button" data-action="show-level-info" aria-label="Buka informasi pilih level">i</button><p class="eyebrow">Langkah 2 dari 2</p><h1 class="title" id="level-select-title">Pilih Level</h1><div class="card-grid"><article class="card choice-card"><span class="badge">Level 1 • Aktif</span><h2>Gerbang Koin</h2><p>Lima ronde progresif dengan notasi Angka (A) dan Gambar (G).</p>${button("Mulai Level 1", "go-coin-gate", "button-primary")}</article><article class="card choice-card locked"><span class="badge badge-locked">Terkunci</span><h2>Level 2: Arena Dadu</h2><p>Eksplorasi peluang dadu akan segera tersedia.</p><span class="badge badge-locked">Coming Soon</span></article><article class="card choice-card locked"><span class="badge badge-locked">Terkunci</span><h2>Level 3: Misteri Kartu</h2><p>Rahasia peluang kartu sedang dipersiapkan.</p><span class="badge badge-locked">Coming Soon</span></article></div></div>`;

const renderFormulaBook = () => `<div>${backButton()}<div class="two-column"><div>${header("Buku Rumus Koin", "Peluang, dibuat sederhana.", "Kenali ruang sampel sebelum menentukan peluang sebuah kejadian.")}<div class="card"><ul class="formula-list"><li><strong>Ruang sampel</strong><br /><span class="formula">n(S) = 2<sup>n</sup></span><br /><span class="muted">n adalah banyaknya koin.</span></li><li><strong>Peluang kejadian A</strong><br /><span class="formula">P(A) = n(A) / n(S)</span><br /><span class="muted">n(A) adalah banyak titik sampel yang cocok.</span></li></ul></div></div><div class="card"><h2>Notasi Koin</h2><p><strong>A</strong> berarti Angka, sedangkan <strong>G</strong> berarti Gambar.</p><p class="muted">Satu koin memiliki ruang sampel {A, G}. Dua koin memiliki {AA, AG, GA, GG}. Urutan tetap diperhitungkan.</p></div></div></div>`;

const renderCredits = () => `<div>${backButton()}<div class="hero-grid"><div>${header("Tentang Probify", "Dibuat untuk belajar.", "Sebuah proyek individu untuk menghadirkan teori peluang SMA dalam pengalaman interaktif.")}</div><div class="card stack"><p><strong>Institusi</strong><br />${CAMPUS_NAME}</p><p><strong>Pengembang</strong><br />${AUTHOR_TEXT}</p><p><strong>Teknologi</strong><br />HTML5, CSS3, dan Vanilla JavaScript ES6 Modules.</p></div></div></div>`;

const renderCoinGate = (state) => {
  const muteIcon = state.app.isMuted
    ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;

  return `<div class="coin-gate-shell">
  <header class="coin-gate-header">
    <div class="header-topline">
      <button class="floating-icon screen-back" type="button" data-action="go-back" aria-label="Kembali">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7M8 12h11"/></svg>
      </button>
      <div class="header-titles">
        <p class="eyebrow">Level 1 • Arena Koin</p>
        <h1 class="title">Gerbang Koin</h1>
      </div>
    </div>
    <div class="arena-status">
      <div class="status-chip"><strong>1 / 5</strong><span>Ronde</span></div>
      <div class="status-chip"><strong>0</strong><span>Skor</span></div>
      <div class="status-chip"><strong>•</strong><span>Giliran</span></div>
    </div>
  </header>

  <div class="coin-arena kelir-stage" data-coin-arena>
    ${gununganBackdrop()}
    <canvas class="fx-canvas" aria-hidden="true"></canvas>
    <div class="apex-flash"></div>
    <div class="shockwave-ring"></div>
    <span class="arena-label">Arena Lempar Koin</span>
    <p class="coin-result-badge" data-coin-result aria-live="polite">Siap dilempar</p>

    <div class="pedestal"></div>
    <div class="coin-shadow"></div>

    <div class="coin-row" data-coin-row>
      <div class="coin-stage">
        <div class="coin-3d coin-body" data-coin>
          <div class="coin-layer layer-1"></div>
          <div class="coin-layer layer-2"></div>
          <div class="coin-layer layer-3"></div>
          <div class="coin-layer layer-4"></div>
          <div class="coin-layer layer-5"></div>
          <div class="coin-face coin-front">${coinSideSvg("front")}<span class="coin-glare"></span></div>
          <div class="coin-face coin-back">${coinSideSvg("back")}<span class="coin-glare"></span></div>
          <div class="coin-edge"></div>
        </div>
      </div>
    </div>

    ${handIllustration()}
    <div class="arena-floor"></div>

    <div class="arena-controls-float">
      ${button("Lempar Koin", "preview-coin", "button-primary")}
      ${button("Hint", "show-preview-hint")}
      ${button(muteIcon, "toggle-mute", "button-secondary")}
    </div>
  </div>
</div>`;
};

export const renderAll = (state) => {
  const views = {
    [SCREEN.MAIN_MENU]: renderMainMenu(),
    [SCREEN.MODE_SELECT]: renderModeSelect(state),
    [SCREEN.LEVEL_SELECT]: renderLevelSelect(),
    [SCREEN.FORMULA_BOOK]: renderFormulaBook(),
    [SCREEN.CREDITS]: renderCredits(),
    [SCREEN.COIN_GATE]: renderCoinGate(state)
  };
  Object.entries(views).forEach(([screen, html]) => {
    const target = document.querySelector(`[data-screen="${screen}"] [data-render]`);
    if (target) target.innerHTML = html;
  });
};

export const initRenderers = () => { renderAll(getState()); return subscribe(renderAll); };

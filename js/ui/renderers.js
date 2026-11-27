import { AI_DIFFICULTY, AUTHOR_TEXT, CAMPUS_NAME, GAME_MODE, GAME_TAGLINE, GAME_TITLE, SCREEN } from "../core/constants.js?v=nw1";
import { getState, subscribe } from "../core/gameState.js?v=nw1";

const button = (label, action, className = "button-secondary") =>
  `<button class="button ${className}" type="button" data-action="${action}">${label}</button>`;
const header = (eyebrow, title, description) =>
  `<p class="eyebrow">${eyebrow}</p><h1 class="title">${title}</h1><p class="subtitle">${description}</p>`;
const backButton = () =>
  `<button class="btn-icon btn-back screen-back" type="button" data-action="go-back" aria-label="Kembali"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>`;
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

// ─── SVG Koin Neo-Wayang: Sisi A (Wayang Arjuna — Lencana A) ────────────────
const coinFrontSvgRaw = (idx = 0) => `<svg viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="wayangBgA-${idx}" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF4B8"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#5C3F05"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="98" fill="url(#wayangBgA-${idx})" stroke="#FFE680" stroke-width="4"/>
  <circle cx="100" cy="100" r="88" fill="#141A29" stroke="#D4AF37" stroke-width="2"/>
  <!-- Ilustrasi Wayang Ksatria (Arjuna) Full Body Khas Wayang Kulit -->
  <g transform="translate(0, -4)">
    <!-- Gelung Supit Urang -->
    <path d="M90 54 C68 48 64 26 80 18 C92 12 106 22 100 34 C96 41 88 38 90 31" fill="none" stroke="#FFE680" stroke-width="6" stroke-linecap="round"/>
    <!-- Mahkota & Profil Wajah Wayang -->
    <path d="M88 52 L114 44 L115 56 L126 62 L114 67 L116 73 L108 77 L94 72 Z" fill="#F5D061"/>
    <path d="M103 54 Q108 52 112 55" stroke="#141A29" stroke-width="2" fill="none"/>
    <!-- Badan Ramping & Bahu Wayang -->
    <path d="M84 76 L116 76 L110 112 L90 112 Z" fill="#D4AF37"/>
    <!-- Tangan Wayang Panjang Khas Kulit -->
    <path d="M84 78 L66 108 L74 128 M116 78 L134 106 L128 126" fill="none" stroke="#FFE680" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Kain Dodot / Jarik Batik -->
    <path d="M88 112 L112 112 L122 146 L78 146 Z" fill="#F5D061"/>
    <path d="M86 122 L114 132 M83 134 L117 142" stroke="#5C3F05" stroke-width="2.5"/>
  </g>
  <!-- Lencana Penanda Angka (A) -->
  <rect x="64" y="150" width="72" height="24" rx="12" fill="#D4AF37" stroke="#FFF4B8" stroke-width="1.5"/>
  <text x="100" y="166" text-anchor="middle" fill="#0B0F19" font-size="13" font-weight="900">ANGKA (A)</text>
</svg>`;

// ─── SVG Koin Neo-Wayang: Sisi G (Gunungan Kayon — Lencana G) ────────────────
const coinBackSvgRaw = (idx = 0) => `<svg viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="wayangBgG-${idx}" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF4B8"/>
      <stop offset="50%" stop-color="#C99A22"/>
      <stop offset="100%" stop-color="#5C3F05"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="98" fill="url(#wayangBgG-${idx})" stroke="#FFE680" stroke-width="4"/>
  <circle cx="100" cy="100" r="88" fill="#1A1208" stroke="#F5D061" stroke-width="2"/>
  <!-- Ilustrasi Gunungan Kayon Wayang Kulit Detail -->
  <g transform="translate(0, -4)">
    <path d="M100 18 C118 46 148 78 152 114 C154 130 142 142 126 146 L74 146 C58 142 46 130 48 114 C52 78 82 46 100 18 Z" fill="#D4AF37" stroke="#FFF4B8" stroke-width="2"/>
    <path d="M100 34 L100 142 M100 66 L78 80 M100 66 L122 80 M100 92 L68 110 M100 92 L132 110" stroke="#1A1208" stroke-width="3" stroke-linecap="round"/>
    <rect x="82" y="116" width="36" height="28" rx="3" fill="#1A1208"/>
    <polygon points="100,102 78,118 122,118" fill="#1A1208"/>
  </g>
  <!-- Lencana Penanda Gambar (G) -->
  <rect x="60" y="150" width="80" height="24" rx="12" fill="#FFE680" stroke="#5C3F05" stroke-width="1.5"/>
  <text x="100" y="166" text-anchor="middle" fill="#0B0F19" font-size="13" font-weight="900">GAMBAR (G)</text>
</svg>`;

const coinSideSvg = (side, idx = 0) => side === "front" ? coinFrontSvgRaw(idx) : coinBackSvgRaw(idx);

// ─── Render Functions ─────────────────────────────────────────────────────────
const renderMainMenu = () => `<div class="hero-grid"><div class="hero-brand">${probifyLogo()}<p class="game-wordmark">${GAME_TITLE}</p>${header("Game Edukasi Teori Peluang", "Probability + Simplify", "Pelajari peluang dengan cara yang sederhana dan menyenangkan.")}</div><div class="card menu-card"><div class="actions">${button("Mulai Bermain", "go-mode-select", "button-primary")}${button("Buku Rumus Koin", "go-formula-book")}${button("Kredit", "go-credits")}</div></div></div>`;

const renderModeSelect = (state) => `<div class="mode-select-content">
  <div class="header-topline">
    ${backButton()}
    <div class="header-titles">
      <p class="eyebrow">Langkah 1 dari 2</p>
      <h1 class="title" id="mode-select-title">Pilih Mode</h1>
    </div>
    <div class="header-spacer"></div>
  </div>
  <p class="subtitle">Tentukan cara bermain sebelum memasuki gerbang koin.</p>
  <div class="card-grid">${[
  [GAME_MODE.SOLO_AI, "Solo vs AI", "Uji pemahamanmu melawan lawan komputer dengan tingkat kesulitan pilihanmu.", "pilih-mode-solo"],
  [GAME_MODE.PASS_AND_PLAY, "1v1 Pass & Play", "Bermain berdua pada satu perangkat secara bergantian.", "pilih-mode-pass"]
].map(([mode, title, description, action]) => `<article class="card choice-card ${state.session.mode === mode ? "is-selected" : ""}"><span class="badge">Mode</span><h2>${title}</h2><p>${description}</p>${button("Pilih Mode", action, state.session.mode === mode ? "button-primary" : "button-secondary")}</article>`).join("")}</div>${state.session.mode === GAME_MODE.SOLO_AI ? `<div class="card stack ai-difficulty-panel"><h2>Pilih Tingkat AI</h2><div class="actions">${[[AI_DIFFICULTY.EASY,"Mudah"],[AI_DIFFICULTY.NORMAL,"Normal"],[AI_DIFFICULTY.HARD,"Sulit"]].map(([id,label]) => button(label, `pilih-ai-${id}`, state.session.aiDifficulty === id ? "button-primary" : "button-secondary")).join("")}</div></div>` : ""}<div class="actions mode-select-actions">${state.session.mode ? button("Lanjut Pilih Level", "go-level-select", "button-primary") : ""}</div></div>`;

const renderLevelSelect = () => `<div class="level-select-content">
  <div class="header-topline">
    ${backButton()}
    <div class="header-titles">
      <p class="eyebrow">Langkah 2 dari 2</p>
      <h1 class="title" id="level-select-title">Pilih Level</h1>
    </div>
    <button class="btn-icon btn-hint level-info-button" type="button" data-action="show-level-info" aria-label="Buka petunjuk level" title="Petunjuk">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/>
      </svg>
    </button>
  </div>
  <div class="card-grid"><article class="card choice-card"><span class="badge">Level 1 • Aktif</span><h2>Gerbang Koin</h2><p>Lima ronde progresif dengan notasi Angka (A) dan Gambar (G).</p>${button("Mulai Level 1", "go-coin-gate", "button-primary")}</article><article class="card choice-card locked"><span class="badge badge-locked">Terkunci</span><h2>Level 2: Arena Dadu</h2><p>Eksplorasi peluang dadu akan segera tersedia.</p><span class="badge badge-locked">Coming Soon</span></article><article class="card choice-card locked"><span class="badge badge-locked">Terkunci</span><h2>Level 3: Misteri Kartu</h2><p>Rahasia peluang kartu sedang dipersiapkan.</p><span class="badge badge-locked">Coming Soon</span></article></div></div>`;

const renderFormulaBook = () => `<div class="formula-book-content">
  <div class="header-topline">
    ${backButton()}
    <div class="header-titles">
      <p class="eyebrow">Buku Rumus Koin</p>
      <h1 class="title">Teori Peluang</h1>
    </div>
    <div class="header-spacer"></div>
  </div>
  <div class="two-column"><div><div class="card"><ul class="formula-list"><li><strong>Ruang sampel</strong><br /><span class="formula">n(S) = 2<sup>n</sup></span><br /><span class="muted">n adalah banyaknya koin.</span></li><li><strong>Peluang kejadian A</strong><br /><span class="formula">P(A) = n(A) / n(S)</span><br /><span class="muted">n(A) adalah banyak titik sampel yang cocok.</span></li></ul></div></div><div class="card"><h2>Notasi Koin</h2><p><strong>A</strong> berarti Angka, sedangkan <strong>G</strong> berarti Gambar.</p><p class="muted">Satu koin memiliki ruang sampel {A, G}. Dua koin memiliki {AA, AG, GA, GG}. Urutan tetap diperhitungkan.</p></div></div></div>`;

const renderCredits = () => `<div class="credits-content">
  <div class="header-topline">
    ${backButton()}
    <div class="header-titles">
      <p class="eyebrow">Tentang Probify</p>
      <h1 class="title">Kredit Game</h1>
    </div>
    <div class="header-spacer"></div>
  </div>
  <div class="hero-grid"><div><p class="subtitle">Sebuah proyek individu untuk menghadirkan teori peluang SMA dalam pengalaman interaktif.</p></div><div class="card stack"><p><strong>Institusi</strong><br />${CAMPUS_NAME}</p><p><strong>Pengembang</strong><br />${AUTHOR_TEXT}</p><p><strong>Teknologi</strong><br />HTML5, CSS3, dan Vanilla JavaScript ES6 Modules.</p></div></div></div>`;

const renderCoinGate = (state) => {
  const muteIcon = state.app.isMuted
    ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;

  return `<div class="coin-gate-shell">
  <header class="coin-gate-header">
    <div class="header-topline">
      <button type="button" class="btn-icon btn-back" data-action="go-back" aria-label="Kembali" id="btn-back-coin">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="header-titles">
        <p class="eyebrow">Level 1 • Arena Koin</p>
        <h1 class="title">Gerbang Koin</h1>
      </div>
      <button type="button" class="btn-icon btn-hint" data-action="show-preview-hint" aria-label="Bantuan Ruang Sampel" title="Hint">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/>
        </svg>
      </button>
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
          <div class="coin-face coin-front face-a">${coinSideSvg("front")}<span class="coin-glare"></span></div>
          <div class="coin-face coin-back face-g">${coinSideSvg("back")}<span class="coin-glare"></span></div>
          <div class="coin-edge"></div>
        </div>
      </div>
    </div>

    ${handIllustration()}
    <div class="arena-floor"></div>

    <div class="arena-controls-float">
      ${button("Lempar Koin", "preview-coin", "button-primary")}
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

# Probify — Arsitektur dan Struktur Proyek

## 1. Prinsip Arsitektur

Probify menggunakan arsitektur frontend modular tanpa framework: HTML sebagai shell aplikasi, CSS sebagai sistem visual, dan JavaScript ES6 Modules sebagai domain, state, UI, serta orkestrasi layar.

Aliran dependensi satu arah:

`Input/UI → Game Controller → Domain Engine + Game State → UI Renderer`

`mathEngine.js` tidak boleh mengetahui DOM, event browser, audio, atau state global. Modul UI tidak boleh menghitung peluang sendiri.

## 2. Struktur Direktori Target

```text
Project Game/
├── assets/
│   └── images/
│       └── logo-unipma.webp
├── css/
│   ├── theme.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── core/
│   │   ├── constants.js
│   │   ├── gameState.js
│   │   ├── gameController.js
│   │   ├── mathEngine.js
│   │   ├── aiEngine.js
│   │   ├── audioEngine.js
│   │   └── storage.js
│   ├── levels/
│   │   └── coinGate.js
│   └── ui/
│       ├── screenManager.js
│       ├── renderers.js
│       ├── modalManager.js
│       └── inputHandlers.js
├── CONCEPT_GDD.md
├── ARCHITECTURE.md
├── RULES.md
└── TODO.md
```

Catatan: struktur folder diminta dibuat sekarang, tetapi file kode di dalamnya belum dibuat pada tahap dokumentasi ini.

## 3. Tanggung Jawab Modul

### Core

- `constants.js`: identitas proyek, palet, label layar, konfigurasi ronde, mode, dan status permainan terpusat.
- `gameState.js`: definisi state, initial state, reducer/update terkontrol, dan reset sesi.
- `gameController.js`: orkestrasi alur layar, pergantian fase, validasi aksi, dan koordinasi engine/UI.
- `mathEngine.js`: pure functions untuk ruang sampel, enumerasi hasil, filter kejadian, pecahan, persentase, dan perhitungan skor.
- `aiEngine.js`: pemilihan kartu AI berdasarkan kesulitan dan data peluang dari `mathEngine.js`.
- `audioEngine.js`: efek suara prosedural melalui Web Audio API; tidak memuat berkas audio eksternal.
- `storage.js`: hanya jika diperlukan untuk preferensi lokal non-esensial, misalnya pengaturan suara.

### Levels

- `coinGate.js`: konfigurasi dan orkestrasi aturan khusus Level 1, termasuk lima ronde, hasil lemparan, dan transisi evaluasi. Perhitungan tetap didelegasikan ke `mathEngine.js`.

### UI

- `screenManager.js`: menampilkan dan menyembunyikan layar berdasarkan state.
- `renderers.js`: merender data state menjadi elemen antarmuka tanpa membuat aturan peluang baru.
- `modalManager.js`: membuka, mengisi, dan menutup modal Hint serta evaluasi akhir ronde.
- `inputHandlers.js`: menghubungkan klik/keyboard dengan command controller dan validasi input dasar.

### CSS

- `theme.css`: seluruh custom properties warna, tipografi, spacing, radius, shadow, dan z-index.
- `base.css`: reset, elemen HTML dasar, aksesibilitas fokus, dan aturan global.
- `layout.css`: grid/flex, container, responsivitas, dan susunan layar.
- `components.css`: kartu, tombol, badge, modal, scoreboard, coin area, dan kartu opsi.
- `animations.css`: transisi layar, loading, flip koin, dan state visual; tidak menentukan hasil matematika.

## 4. Skema GameState Terpusat

State konseptual yang akan digunakan:

```text
GameState {
  app: {
    screen: 'splash-unipma' | 'splash-game' | 'main-menu' | 'mode-select' |
            'level-select' | 'coin-gate' | 'formula-book' | 'credits',
    splashStartedAt,
    isMuted
  },
  session: {
    mode: 'solo-ai' | 'pass-and-play' | null,
    aiDifficulty: 'easy' | 'normal' | 'hard' | null,
    activeLevel: 1 | 2 | 3 | null,
    round: 1,
    totalRounds: 5,
    phase: 'idle' | 'choosing-p1' | 'choosing-p2' | 'flipping' |
           'evaluation' | 'complete',
    hintUsed: false
  },
  round: {
    coinCount: 1 | 2 | 3,
    sampleSpace: [],
    playerOneOptionId: null,
    playerTwoOptionId: null,
    outcome: null,
    evaluation: null
  },
  players: {
    playerOne: { score: 0 },
    playerTwo: { score: 0 }
  }
}
```

State hanya diubah melalui aksi yang dikenali controller. Renderer membaca state; renderer tidak mengubah state secara langsung. `sampleSpace`, `outcome`, dan `evaluation` harus berasal dari engine domain.

## 5. Kontrak Data Domain

Konfigurasi opsi tebakan minimal memuat `id`, `label`, `description`, dan predikat kejadian atau representasi kejadian yang dapat dievaluasi. Hasil evaluasi minimal memuat `outcome`, `matchingSamples`, `nA`, `nS`, `fraction`, `percentage`, dan skor tiap pemain.

## 6. Strategi Pengujian

- Unit test manual/otomatis untuk seluruh fungsi pure di `mathEngine.js`.
- Skenario ronde 1–5 dengan ruang sampel dan `n(S)` yang tepat.
- Skenario validasi pilihan berbeda pada mode AI dan pass & play.
- Uji state transition dari splash sampai evaluasi ronde.
- Uji visual responsif dan fokus keyboard setelah implementasi UI.


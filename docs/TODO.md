# Probify — Roadmap Implementasi

Checklist ini menjaga urutan kerja dan mencegah context drift. Jangan melompati fase tanpa meninjau hasil fase sebelumnya.

## Fase 1 — Fondasi, Tema Dark-Gold & Navigasi Layar

- [ ] Tetapkan konstanta identitas proyek di `js/core/constants.js`.
- [ ] Siapkan HTML shell dengan seluruh container layar yang dibutuhkan.
- [ ] Implementasikan variabel tema di `css/theme.css`.
- [ ] Implementasikan reset, layout responsif, komponen tombol/kartu/modal.
- [ ] Pastikan logo UNIPMA dirujuk dari `./assets/images/logo-unipma.webp`.
- [ ] Buat alur Splash: logo UNIPMA 2 detik → placeholder logo game 2 detik.
- [ ] Tambahkan tombol `Lewati` pada splash.
- [ ] Implementasikan navigasi Menu Utama.
- [ ] Implementasikan Buku Rumus Koin dan Kredit sebagai layar informasi.
- [ ] Implementasikan Pilih Mode: Solo vs AI dan 1v1 Pass & Play.
- [ ] Implementasikan pilihan kesulitan AI: Mudah, Normal, Sulit.
- [ ] Implementasikan Pilih Level dengan Level 1 aktif.
- [ ] Tampilkan Level 2 dan 3 sebagai kartu terkunci berlabel `Coming Soon`.
- [ ] Pastikan kartu Level 2 dan 3 tidak memiliki handler gameplay.
- [ ] Siapkan `GameState` dan transisi layar dasar.
- [ ] Uji navigasi keyboard, fokus, responsivitas, dan tombol kembali.

## Fase 2 — Engine Matematika Koin & Logika AI

- [ ] Implementasikan pure functions pembangkit ruang sampel koin.
- [ ] Validasi ruang sampel ronde 1–2: `n(S)=2`, `{A, G}`.
- [ ] Validasi ruang sampel ronde 3–4: `n(S)=4`, `{AA, AG, GA, GG}`.
- [ ] Validasi ruang sampel ronde 5: `n(S)=8`, seluruh urutan tiga koin.
- [ ] Implementasikan pembentukan opsi tebakan per ronde.
- [ ] Implementasikan filter titik sampel yang cocok dengan suatu kejadian.
- [ ] Implementasikan `n(A)`, `n(S)`, penyederhanaan pecahan, dan persentase.
- [ ] Implementasikan perhitungan skor ronde tanpa akses DOM.
- [ ] Implementasikan validasi pilihan dua pemain harus berbeda.
- [ ] Implementasikan AI Mudah, Normal, dan Sulit.
- [ ] Pastikan AI hanya memilih opsi legal yang belum dipilih Pemain 1.
- [ ] Tambahkan pengujian untuk edge case: semua/nihil titik sampel cocok, seri, dan pilihan invalid.
- [ ] Dokumentasikan kontrak input/output engine bila ada perubahan.

## Fase 3 — Arena Lempar Koin, Animasi 3D Flip, Hint & Evaluasi Ronde

- [ ] Bangun layout arena Level 1 dan scoreboard dua pemain.
- [ ] Render tiga kartu opsi tebakan sesuai ronde aktif.
- [ ] Implementasikan alur giliran Pemain 1 lalu Pemain 2/AI.
- [ ] Kunci pilihan pertama dan cegah kartu yang sama dipilih Pemain 2.
- [ ] Buat animasi 3D flip koin dengan label A/G.
- [ ] Hubungkan animasi ke hasil yang sudah ditentukan engine.
- [ ] Tambahkan efek suara prosedural Web Audio API.
- [ ] Tambahkan tombol mute dan fallback jika AudioContext tidak tersedia.
- [ ] Implementasikan tombol Hint.
- [ ] Tampilkan ruang sampel lengkap dan `n(S)` untuk ronde aktif.
- [ ] Implementasikan modal evaluasi setelah animasi selesai.
- [ ] Tampilkan hasil, titik sampel cocok, rumus, pecahan, persentase, dan skor.
- [ ] Terapkan bonus dan aturan skor dari GDD.
- [ ] Implementasikan transisi ronde 1 → 5.
- [ ] Implementasikan ringkasan selesai Level 1 dan aksi kembali ke Pilih Level.
- [ ] Uji seluruh sesi dari splash hingga selesai ronde 5.
- [ ] Lakukan audit aksesibilitas, reduced-motion, mobile layout, dan konsistensi Bahasa Indonesia.

## Gate Review Sebelum Fase Berikutnya

- [ ] Dokumentasi fase sebelumnya telah ditinjau.
- [ ] Tidak ada scope Level 2/3 yang masuk tanpa persetujuan.
- [ ] Tidak ada logika matematika di DOM/UI.
- [ ] Tidak ada dependency eksternal.
- [ ] Semua guardrail `RULES.md` tetap terpenuhi.


# Probify — Catatan Progres

## Area aman arena

- Menambahkan ruang untuk notch dan inset perangkat, serta jarak kiri-kanan responsif pada arena koin.

## Tata letak arena responsif

- Menempatkan tombol kembali, judul, dan status ronde di bagian atas layar.
- Membuat panggung koin mengisi sisa ruang dengan batas tinggi responsif; layar sangat pendek tetap dapat digulir agar kontrol dapat dijangkau.

## Perbaikan tampilan Royal Mint

- Memperbaiki format referensi gradasi SVG yang menyebabkan modul renderer gagal dimuat.
- Memberi versi pada URL CSS dan modul agar cache browser tidak mencampur file lama dan baru.

## Koin Royal Mint

- Mengganti kedua sisi koin dengan SVG relief Royal Mint dan memberi ID SVG unik untuk setiap koin.
- Memperbaiki gerigi tepi, orientasi akhir A/G, dan lapisan tangan agar tombol arena tetap terlihat.

## Tangan Royal Strategist

- Mengintegrasikan SVG tangan dengan sendi jempol dan telunjuk yang bergerak saat fase peluncuran koin.

## Pro 3D Coin Juice

- Menambahkan pengendali `animateCoinToss(outcomes)` pada `js/levels/coinGate.js`, audio empat fase, tilt, kilatan, gelombang, dan partikel canvas.
- Preview tetap satu koin; engine matematika belum diintegrasikan dan dapat memasok array A/G saat tersedia.

## Komponen lempar koin 3D

- Mengadaptasi ilustrasi tangan dengan jempol bergerak, lintasan koin, bayangan, serta label hasil.
- `js/ui/coinAnimation.js` menyediakan `triggerCoinToss(outcome)` untuk 1–3 simbol A/G; hasil disediakan pemanggil dan tidak dihitung oleh UI.
- Tombol yang tersedia saat ini masih preview acak satu koin; engine matematika dan alur ronde belum dipasang.

## Perbaikan sisi Gambar

- Memisahkan posisi sisi depan dan belakang pada sumbu kedalaman agar tepi koin tidak menutupi ilustrasi Gambar saat hasilnya G.

## Penyempurnaan arena koin

- Panel kontrol menggunakan tiga kolom agar tombol tetap berada dalam bingkai dan dapat disentuh pada layar kecil.
- Desain sisi Angka dan Gambar diperbarui dengan ornamen emas serta simbol obor dan sayap.
- Putaran koin kini berakhir menghadap sisi hasil yang dipilih; klik berulang saat animasi berjalan diabaikan.

## Splash dan informasi level

- Menghapus tombol Lewati pada splash dan memperbaiki posisi logo agar terpusat.
- Mengubah tombol Kembali menjadi ikon melayang di kiri atas.
- Menambahkan informasi Pilih Level sebagai dialog yang dapat ditutup dan dibuka kembali melalui ikon informasi.

## Responsivitas ponsel — Pilih Mode

- Menambahkan tata letak ponsel berdasarkan lebar layar, termasuk viewport tinggi yang sebelumnya luput dari aturan tinggi 720px.
- Menempatkan dua kartu mode berdampingan dan tiga tingkat AI dalam satu baris, dengan tombol minimal 44px.
- Menambahkan penyesuaian layar pendek, area aman perangkat, dan fallback gulir konten bila ruang sangat terbatas atau teks diperbesar.

## Perbaikan live test — Pilih Mode

- Menghapus tombol Kembali duplikat di bagian bawah layar Pilih Mode.
- Memadatkan kartu mode dan panel tingkat AI pada viewport dengan tinggi terbatas.
- Menjaga Back di posisi atas dan aksi lanjut sebagai satu kontrol bawah.

## 2026-11-27 — Navigasi ringkas dan kontrol arena

- Menyederhanakan pergantian stage menjadi fade singkat agar alur pilih mode/AI/level terasa langsung.
- Memusatkan kontrol Lempar Koin, Hint, dan audio sebagai panel mengambang di bawah arena/tangan.
- Menambahkan gerak idle halus pada tangan serta pesan preview Hint.
- Back tetap konsisten melalui tombol arena dan Escape.

## Pembaruan game feel

- Membersihkan latar kotak logo menggunakan flood-fill dan menyimpan PNG transparan.
- Mengunci gulir halaman, memusatkan panggung, dan menambahkan bingkai serta vignette.
- Menambah tombol bertekan, nada hover, bayangan koin, kilau dan getaran meja.

## 2026-11-27 — Penyempurnaan dan Finalisasi Fase 1

- Menetapkan durasi splash penuh 4 detik (2 detik logo UNIPMA + 2 detik logo Probify) tanpa tombol lewati untuk pengalaman intro sinematik yang utuh.
- Memperbaiki riwayat navigasi (`history`) pada `gameController.js`: membersihkan tumpukan saat masuk ke `MAIN_MENU` sehingga aksi `Escape` atau tombol kembali tidak dapat mundur ke layar splash.
- Memperbaiki transisi layar di `screenManager.js` agar dapat menangani pergantian layar secara mulus tanpa terkunci (*freeze*) jika terjadi klik cepat.
- Memperbarui dokumentasi `CONCEPT_GDD.md` dan menandai checklist `Fase 1` di `TODO.md` sebagai tuntas (100% sempurna).
- Mempertahankan batasan ketat: tidak menyentuh kode Fase 2 dan Fase 3.

## 2026-11-27 — Integrasi Identitas Neo-Wayang (Level 1: Gerbang Koin)

- Mengintegrasikan estetika budaya Nusantara **Neo-Wayang (Dark & Gold)** ke dalam arena Level 1 (`coin-gate`).
- **Panggung Kelir & Siluet Gunungan**: Memasang SVG Gunungan (Kayon) lengkap dengan Pohon Hayat dan Gerbang Candi (`.gunungan-backdrop`) serta efek cahaya *Blencong* (`.blencong-glow`) saat koin melayang di udara.
- **Koin 3D Edisi Batik Kawung & Gunungan**:
  - Sisi Depan (`A` — Angka): Relief emas dengan latar motif **Batik Kawung**, teks melingkar `• SISI ANGKA •` dan `BATIK KAWUNG`, serta huruf serif **`A`**.
  - Sisi Belakang (`G` — Gambar): Ukiran ikonik **Gunungan Wayang** dengan Pohon Hayat, teks melingkar `• SISI GAMBAR •`, dan simbol **`( G )`**.
  - **Mekanisme Anti-Konflik Multi-Koin**: Mengisolasi seluruh referensi atribut SVG `id`, `href`, `fill`, dan `stroke` dengan prefix unik `nw-{index}-` agar tidak saling menimpa saat melempar 2 atau 3 koin sekaligus.
- **Tangan Sang Dalang**: Mengganti ilustrasi tangan menjadi tangan Dalang terartikulasi mengenakan **lengan Beskap hitam beludru** dengan kancing emas dan **manset Batik Parang Emas**, lengkap dengan animasi sabetan sentil koin (`armThrust`, `thumbFlickUp`, `indexRecoil`).
- **Audio Pentatonik Gamelan Slendro**: Memperbarui efek audio prosedural Web Audio API mengikuti laras Slendro:
  - *Launch*: sapuan nada Ji (`528Hz` naik ke `1056Hz`).
  - *Apex*: denting Bonang Slendro Ma $\rightarrow$ Nem (`792Hz` $\rightarrow$ `880Hz`).
  - *Impact*: dengung Gong Kempul (`145Hz` turun ke `66Hz`).

## 2026-11-27 — Perbaikan Bug Pemilihan Mode (Normalisasi Versi Modul ES)

- **Masalah**: Layar *Pilih Mode* tidak merespons klik pemain saat memilih *Solo vs AI* atau *1v1 Pass & Play*.
- **Penyebab (Root Cause)**: Perbedaan query string versi cache-buster antara file (`renderers.js` mengimpor dengan `?v=nw-wayang-1` sedangkan file core lainnya mengimpor dengan `?v=11803ac`). Browser memperlakukan file yang sama dengan parameter versi berbeda sebagai instance ES Module yang terpisah. Akibatnya, `gameState` yang di-*subscribe* oleh renderer berbeda dengan `gameState` yang diubah oleh controller.
- **Solusi**: Menyeragamkan seluruh parameter query string import di semua file JavaScript dan link tag di `index.html` ke satu versi standar `?v=nw1`. Seluruh sistem state dan UI renderer kini tersambung 100% pada satu instance terpusat.

- Menstandarkan seluruh pembungkus layar ke layout flex vertikal dengan alignment center dan responsivitas mobile.
- Menambahkan identitas splash UNIPMA lengkap dengan nama universitas dan fakultas.
- Memindahkan tombol `Lewati` ke pojok kanan atas splash.
- Mengganti koin preview menjadi koin SVG dua sisi dengan ornamen Angka/Probify dan Gambar/UNIPMA.
- Menambahkan shell 3D, ketebalan rim, highlight specular, toss vertikal, spin X/Y, dan bounce landing.
- Memusatkan ilustrasi tangan di bawah koin dengan gerakan flick/toss.
- Menambahkan status ronde, skor, giliran, tombol lempar, mute, dan kembali pada arena.
- Memindahkan dokumentasi fondasi ke folder `docs/`.
- Gameplay ronde, engine peluang, AI, Hint, dan evaluasi tetap ditunda sesuai batas Fase 1.

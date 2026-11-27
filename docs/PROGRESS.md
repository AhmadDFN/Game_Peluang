# Probify — Catatan Progres

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

## 2026-11-27 — Fase 1 Visual & Layout Upgrade

- Menstandarkan seluruh pembungkus layar ke layout flex vertikal dengan alignment center dan responsivitas mobile.
- Menambahkan identitas splash UNIPMA lengkap dengan nama universitas dan fakultas.
- Memindahkan tombol `Lewati` ke pojok kanan atas splash.
- Mengganti koin preview menjadi koin SVG dua sisi dengan ornamen Angka/Probify dan Gambar/UNIPMA.
- Menambahkan shell 3D, ketebalan rim, highlight specular, toss vertikal, spin X/Y, dan bounce landing.
- Memusatkan ilustrasi tangan di bawah koin dengan gerakan flick/toss.
- Menambahkan status ronde, skor, giliran, tombol lempar, mute, dan kembali pada arena.
- Memindahkan dokumentasi fondasi ke folder `docs/`.
- Gameplay ronde, engine peluang, AI, Hint, dan evaluasi tetap ditunda sesuai batas Fase 1.

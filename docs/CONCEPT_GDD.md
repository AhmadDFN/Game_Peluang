# Probify — Game Design Document (MVP)

## 1. Ringkasan Proyek

**Probify** adalah web game edukasi matematika untuk jenjang SMA dengan tagline **Probability + Simplify**. Game membantu pemain memahami teori peluang melalui keputusan, visualisasi ruang sampel, dan evaluasi per ronde.

### Identitas Produk

| Elemen | Nilai |
|---|---|
| Nama game | Probify |
| Tagline | Probability + Simplify |
| Institusi | Universitas PGRI Madiun (UNIPMA) |
| Logo institusi | `./assets/images/logo-unipma.webp` |
| Pengembang | Proyek Individu |
| Status kredit | Coming Soon |
| Tema | Dark & Gold elegan |
| Teknologi | HTML5, CSS3, Vanilla JavaScript ES6 Modules |
| Suara | Web Audio API secara prosedural; tanpa file audio eksternal |

### Palet Visual

- Latar: `#0B0F19`
- Permukaan kartu: `#131A2A`
- Emas utama: `#D4AF37`
- Emas terang: `#F5D061`
- Teks terang: `#F8FAFC`

## 2. Batasan MVP Tahap 1

MVP hanya mencakup alur splash, menu utama, pemilihan mode, pemilihan level, dan gameplay **Level 1: Gerbang Koin**. Level 2 dan Level 3 hanya tampil sebagai kartu terkunci berlabel **Coming Soon**.

Tidak termasuk dalam MVP ini: gameplay dadu, gameplay kartu, akun pengguna, penyimpanan cloud, leaderboard online, backend, library eksternal, dan sistem audio berbasis berkas.

## 3. Alur Layar

1. **Splash Screen**
   - Tampilkan logo UNIPMA selama 2 detik.
   - Lanjut ke placeholder logo Probify selama 2 detik.
   - Sediakan tombol **Lewati** agar pemain dapat langsung menuju menu utama.
2. **Menu Utama**
   - **Mulai Bermain**: menuju pilih mode.
   - **Buku Rumus Koin**: membuka materi ringkas teori peluang koin.
   - **Kredit**: menampilkan identitas proyek dan status pengembang `Coming Soon`.
3. **Pilih Mode**
   - **Solo vs AI** dengan tingkat AI: Mudah, Normal, Sulit.
   - **1v1 Pass & Play** untuk dua pemain pada satu perangkat.
4. **Pilih Level**
   - Level 1: Gerbang Koin — aktif.
   - Level 2: Arena Dadu — terkunci, label `Coming Soon`.
   - Level 3: Misteri Kartu — terkunci, label `Coming Soon`.
5. **Level 1: Gerbang Koin**
   - Menampilkan ronde aktif, skor, giliran pemain, kartu opsi tebakan, tombol Hint, dan arena koin.
   - Setelah lemparan selesai, tampilkan modal evaluasi akhir ronde.

## 4. Mekanik Level 1 — Gerbang Koin

### Notasi dan Ruang Sampel

Gunakan notasi SMA Indonesia:

- **A** = Angka
- **G** = Gambar

Jumlah koin dan ruang sampel per ronde:

| Ronde | Koin | `n(S)` | Ruang sampel kanonik |
|---|---:|---:|---|
| 1 | 1 | 2 | `{A, G}` |
| 2 | 1 | 2 | `{A, G}` |
| 3 | 2 | 4 | `{AA, AG, GA, GG}` |
| 4 | 2 | 4 | `{AA, AG, GA, GG}` |
| 5 | 3 | 8 | `{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG}` |

Urutan koin dipertahankan. Karena itu `AG` dan `GA` adalah titik sampel berbeda, walaupun keduanya memiliki satu Angka dan satu Gambar.

### Kartu Opsi Tebakan

Pada setiap ronde tersedia tiga kartu opsi peluang yang valid untuk ruang sampel ronde tersebut. Contoh opsi yang dapat digunakan:

- Ronde 1–2: `P(Angka)`, `P(Gambar)`, `P(hasil tertentu)`.
- Ronde 3–4: `P(2 Angka)`, `P(1 Angka)`, `P(0 Angka)`.
- Ronde 5: `P(3 Angka)`, `P(tepat 2 Angka)`, `P(0 Angka)`.

Opsi harus diterjemahkan menjadi himpunan titik sampel yang cocok agar dapat dievaluasi secara matematis. Teks kartu harus tetap menggunakan bahasa yang mudah dipahami siswa.

### Aturan Duel

1. Pemain 1 memilih satu dari tiga kartu opsi tebakan.
2. Pilihan Pemain 1 dikunci dan tidak dapat dipilih ulang.
3. Pemain 2 atau AI wajib memilih salah satu dari dua opsi yang berbeda.
4. Koin baru dilempar setelah kedua pilihan sah.
5. Hasil lemparan dibandingkan dengan tebakan masing-masing pemain.
6. Dalam mode 1v1, perangkat memberi jeda atau tampilan pergantian giliran agar pilihan pemain berikutnya tidak terlihat.
7. Dalam mode Solo, AI memilih sesuai tingkat kesulitan yang ditetapkan.

### Perilaku AI

- **Mudah**: memilih opsi legal secara acak dengan kecenderungan tidak optimal.
- **Normal**: memilih opsi legal dengan mempertimbangkan peluang, tetapi tetap memiliki variasi keputusan.
- **Sulit**: memilih opsi legal dengan peluang tertinggi berdasarkan analisis ruang sampel.

AI tidak boleh memilih kartu yang telah dipilih Pemain 1. Tie-break harus deterministik atau menggunakan randomisasi yang dapat diuji.

### Animasi Lemparan

Animasi koin berjalan setelah kedua tebakan terkunci. Hasil final harus ditentukan oleh engine matematika sebelum atau pada awal animasi, sedangkan animasi hanya memvisualisasikan proses. Evaluasi tidak boleh bergantung pada timing DOM atau hasil acak dari animasi.

## 5. Evaluasi dan Skor

Setelah koin berhenti berputar, tampilkan **Modal Evaluasi Akhir Ronde** berisi:

1. Hasil lemparan aktual, misalnya `A-G`.
2. Daftar titik sampel yang cocok dengan kejadian tebakan.
3. Rumus `P(A) = n(A) / n(S)`.
4. Pecahan peluang yang disederhanakan.
5. Persentase peluang.
6. Status tebakan setiap pemain: benar atau belum tepat.
7. Perolehan skor ronde dan skor total.
8. Tombol lanjut ke ronde berikutnya atau kembali ke pilih level setelah ronde 5.

Skor MVP yang direkomendasikan:

- Tebakan benar: `+100` poin.
- Tebakan salah: `0` poin.
- Bonus edukasi: `+25` poin jika pemain membuka Hint dan tetap menjawab benar.
- Bonus duel: `+25` poin untuk pemain yang benar ketika lawan salah.
- Skor tidak boleh negatif.

Jika kedua pemain benar, keduanya memperoleh skor dasar dan tidak ada bonus duel. Jika keduanya salah, ronde tetap memberikan evaluasi edukatif tanpa penalti.

## 6. Fitur Edukasi

### Hint Opsional

Tombol **Hint** menampilkan ruang sampel lengkap untuk ronde aktif, jumlah `n(S)`, serta penjelasan singkat cara menghitung titik sampel yang cocok. Hint tidak mengubah peluang atau hasil lemparan.

### Prinsip Evaluasi

Evaluasi harus menjawab tiga hal: apa hasil percobaannya, kejadian mana yang cocok, dan bagaimana pecahan peluang terbentuk. Gunakan istilah `Angka (A)` dan `Gambar (G)` secara konsisten.

## 7. Kriteria Selesai MVP

- Semua layar dalam alur utama dapat dinavigasi tanpa dead end.
- Level 2 dan 3 terlihat terkunci dan tidak memiliki gameplay.
- Lima ronde Level 1 memakai ruang sampel yang benar.
- Pemilihan dua pemain tidak pernah menerima kartu yang sama.
- Hint, animasi, modal evaluasi, pecahan, dan persentase tampil sesuai ronde.
- Perhitungan matematika dapat diuji tanpa DOM.
- Antarmuka dan pesan utama menggunakan Bahasa Indonesia.


# Probify — Aturan Pengembangan dan Guardrails

Dokumen ini adalah kontrak teknis yang wajib dipatuhi pada setiap sesi coding.

## 1. Batas Scope

1. Prioritaskan MVP Level 1: Gerbang Koin.
2. Level 2: Arena Dadu dan Level 3: Misteri Kartu hanya boleh tampil sebagai kartu terkunci `Coming Soon` sampai ada instruksi perluasan scope.
3. Jangan menambahkan backend, akun, leaderboard online, library/framework, bundler, atau sistem monetisasi tanpa persetujuan eksplisit.
4. Jangan mengubah identitas, palet, notasi, atau alur utama tanpa memperbarui GDD dan meminta peninjauan.

## 2. Pemisahan Domain dan DOM

1. Semua fungsi matematika peluang harus berada di `js/core/mathEngine.js`.
2. Fungsi matematika wajib pure: input eksplisit, output deterministik, tanpa akses DOM, `window`, `document`, audio, timer, atau state global.
3. UI hanya menampilkan hasil engine. Jangan menghitung `n(A)`, `n(S)`, pecahan, atau persentase di template/renderer.
4. `mathEngine.js` tidak boleh mengimpor modul UI.
5. Hasil acak harus diisolasi melalui dependency atau fungsi random yang dapat diganti saat pengujian.

## 3. State dan Alur

1. Gunakan satu `GameState` terpusat; hindari variabel state permainan yang tersebar di DOM.
2. Setiap transisi layar dan fase ronde harus memiliki aksi yang jelas dan tervalidasi.
3. Hasil lemparan ditentukan oleh domain sebelum animasi; animasi tidak boleh menentukan hasil.
4. Pemain 2/AI wajib memilih opsi berbeda dari Pemain 1 sebelum lemparan.
5. Ronde hanya boleh maju setelah evaluasi selesai atau pemain memilih aksi lanjut.

## 4. Visual dan CSS

1. Semua warna, ukuran tema, radius, shadow, dan nilai desain bersama harus menggunakan variabel CSS di `css/theme.css`.
2. Jangan menanamkan warna tema berulang di file komponen.
3. Pertahankan tema Dark & Gold: `#0B0F19`, `#131A2A`, `#D4AF37`, `#F5D061`, `#F8FAFC`.
4. Pastikan kontras, fokus keyboard, label tombol, dan tampilan mobile tetap layak.
5. Animasi harus memiliki fallback reduced-motion dan tidak boleh menghalangi akses ke hasil evaluasi.

## 5. Audio

1. Gunakan Web Audio API untuk efek suara prosedural.
2. Jangan menambahkan file audio eksternal atau dependensi audio pihak ketiga.
3. Audio harus dimulai setelah interaksi pengguna sesuai kebijakan browser.
4. Sediakan kontrol mute dan jangan menganggap audio tersedia di semua perangkat.

## 6. Bahasa dan Edukasi

1. Antarmuka, tombol, pesan error, hint, dan evaluasi menggunakan Bahasa Indonesia.
2. Gunakan notasi `Angka (A)` dan `Gambar (G)`, bukan penggantian istilah yang membingungkan.
3. Tampilkan ruang sampel lengkap pada Hint untuk ronde aktif.
4. Modal evaluasi wajib menampilkan hasil, titik sampel cocok, `P(A) = n(A)/n(S)`, pecahan, persentase, dan skor.
5. Konten edukasi tidak boleh mengorbankan ketepatan matematika demi animasi.

## 7. Aset dan File

1. Logo UNIPMA dirujuk sebagai `./assets/images/logo-unipma.webp`.
2. Jangan mengganti atau mengoptimalkan aset pengguna tanpa instruksi.
3. Gunakan nama file dan modul yang konsisten dengan `ARCHITECTURE.md`.
4. Jangan membuat kode HTML, CSS, atau JS sebelum fase yang sesuai di `TODO.md` disetujui.

## 8. Definition of Done Perubahan

Setiap perubahan harus menyatakan scope, memperbarui dokumentasi bila kontrak berubah, menguji jalur normal dan edge case, serta memastikan Level 2–3 tetap tidak memiliki gameplay sebelum fase ekspansi disetujui.


# 03 - Execution Process

## Step 1 — Generate Awal dengan AI
- Menggunakan AI untuk membuat struktur HTML & CSS awal
- AI digunakan sebagai starting point

---

## Step 2 — Refactoring Struktur
- Mengganti tag non-semantic dengan semantic HTML
- Menyederhanakan struktur DOM
- Mengurangi nesting yang tidak perlu

---

## Step 3 — Optimasi Styling
- Menghapus CSS yang tidak diperlukan
- Menjaga konsistensi layout dan spacing
- Fokus pada keterbacaan

---

## Step 4 — Pengembangan Backend
- Membuat REST API menggunakan Express
- Endpoint: GET /projects
- Data disimpan dalam file JSON

---

## Step 5 — Integrasi Frontend & Backend
- Menggunakan fetch() untuk mengambil data dari API
- Menampilkan data project secara dinamis
- Menghapus hardcoded content

---

## 🧠 Keputusan Engineering
- Menggunakan arsitektur terpisah (frontend & backend)
- Menghindari coupling antara UI dan data
- Menyiapkan struktur agar mudah dikembangkan ke database

---

## 🔗 Alur Sistem
Client → API → Data
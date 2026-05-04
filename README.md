# 🚀 Fullstack Portfolio — Backend-Oriented (AI-Assisted)

## 📌 Overview
Project ini merupakan aplikasi portfolio berbasis fullstack yang dibangun untuk menampilkan profil dan project secara dinamis menggunakan REST API.

Aplikasi ini tidak hanya berfokus pada tampilan (frontend), tetapi juga menekankan pendekatan backend-oriented seperti pemisahan struktur, modularitas, dan penggunaan API.

This project demonstrates backend-oriented thinking and API-driven development.

---

## 🧠 Pendekatan Engineering

Meskipun tampilan UI dibuat sederhana, pendekatan pengembangan yang digunakan mencerminkan prinsip backend:

- Separation of concerns (UI, logic, data)
- Modular structure
- API-driven architecture
- AI-assisted development dengan proses refactoring manual

AI digunakan untuk mempercepat proses development awal, namun seluruh output tetap dianalisis dan disederhanakan agar maintainable.

---

## 🏗️ Arsitektur Sistem

Client (Frontend) → API (Express Server) → Data (JSON)

### Frontend
- HTML5 (semantic structure)
- CSS3 (responsive & clean UI)
- JavaScript (fetch API untuk mengambil data)

### Backend
- Node.js + Express
- REST API (`/projects`)
- Data disimpan dalam file JSON (sebagai database sederhana)

---

## ⚙️ Fitur

### Frontend
- Tampilan portfolio responsive
- Data project ditampilkan secara dinamis
- Struktur UI clean dan mudah dibaca

### Backend
- GET `/projects` → mengambil data project
- POST `/projects` → menambahkan data project
- Arsitektur terpisah antara frontend dan backend

---

## 📂 Struktur Project

```bash
portfolio-fullstack/
├── client/
├── server/
├── plan/
└── README.md
```

---

## ▶️ Cara Menjalankan

### 1. Jalankan Backend

```bash
cd server
npm install
node server.js
```

### 2. Jalankan Frontend

Buka file `client/index.html` menggunakan browser atau Live Server.

---

## 🧪 Proses Pengembangan

Project ini dikembangkan melalui beberapa tahapan:

1. Brainstorming & perencanaan  
2. Penyusunan RTCC-O  
3. Generate awal menggunakan AI  
4. Refactoring manual  
5. Integrasi backend (API)  

Detail lengkap terdapat pada folder `/plan`.

---

## 🧠 Insight

- AI membantu mempercepat development, tetapi tidak menggantikan pemahaman developer  
- Struktur dan maintainability lebih penting dibanding hanya menghasilkan output cepat  
- Pendekatan backend dapat diterapkan bahkan pada project sederhana  

---

## 🚀 Pengembangan Selanjutnya

- Integrasi database (MongoDB / PostgreSQL)
- Menambahkan authentication (JWT)
- Implementasi CRUD lengkap
- Deployment ke cloud (Render / Railway)
- Dokumentasi API (Swagger)

---

## 🎯 Tentang Saya

Saya merupakan lulusan Informatika dengan fokus pada Data Science, yang saat ini sedang berfokus pada pengembangan backend.

Saya tertarik pada:
- pembangunan sistem backend yang scalable  
- desain API yang clean dan efisien  
- pendekatan problem-solving yang terstruktur  

---

## 💡 Catatan Akhir

Project ini tidak ditujukan untuk menampilkan kompleksitas visual, melainkan:
> bagaimana sebuah sistem sederhana dapat dibangun dengan pendekatan engineering yang tepat.

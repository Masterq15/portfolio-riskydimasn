# 🚀 Panduan Setup Portfolio dengan Firebase + Vercel

## 📦 File yang Sudah Dibuat:
- ✅ **index.html** - Portfolio utama dengan tema Liquid Marble Ocean Wave
- ✅ **admin.html** - Dashboard untuk kelola project
- ✅ **style.css** - Style portfolio (responsive)
- ✅ **admin-style.css** - Style admin panel
- ✅ **script.js** - JavaScript untuk animasi

---

## 🔥 STEP 1: Setup Firebase (Database Gratis)

### 1.1 Buat Firebase Project

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik **"Add project"** atau **"Create a project"**
3. Nama project: **"portfolio-risky"** (atau terserah)
4. Google Analytics: **Aktifkan** (recommended) atau skip
5. Klik **"Create project"**

### 1.2 Setup Realtime Database

1. Di sidebar kiri, pilih **"Build"** → **"Realtime Database"**
2. Klik **"Create Database"**
3. Pilih lokasi: **United States (us-central1)** atau yang terdekat
4. Security rules: Pilih **"Start in test mode"** (nanti kita ubah)
5. Klik **"Enable"**

### 1.3 Konfigurasi Security Rules

1. Di tab **"Rules"**, ganti dengan kode ini:

```json
{
  "rules": {
    "projects": {
      ".read": true,
      ".write": true
    }
  }
}
```

2. Klik **"Publish"**

> ⚠️ **PENTING**: Rules ini untuk testing. Nanti bisa tambahkan authentication untuk keamanan lebih baik.

### 1.4 Dapatkan Firebase Config

1. Klik ⚙️ (Settings) di sidebar → **"Project settings"**
2. Scroll ke bawah, di bagian **"Your apps"**
3. Klik icon **</>** (Web)
4. Nama app: **"Portfolio Web"**
5. **JANGAN** centang Firebase Hosting (kita pakai Vercel)
6. Klik **"Register app"**
7. **COPY** bagian `firebaseConfig` yang muncul

Contoh yang akan kamu copy:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "portfolio-risky-xxxxx.firebaseapp.com",
  databaseURL: "https://portfolio-risky-xxxxx.firebaseio.com",
  projectId: "portfolio-risky-xxxxx",
  storageBucket: "portfolio-risky-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

### 1.5 Pasang Config ke Website

1. Buka file **index.html**
2. Cari baris yang ada tulisan `YOUR_API_KEY` (sekitar baris 192)
3. **GANTI SEMUA** bagian firebaseConfig dengan config yang kamu copy tadi
4. Lakukan hal yang sama di **admin.html** (sekitar baris 112)

**SEBELUM:**
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    // ...
};
```

**SESUDAH:**
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "portfolio-risky-xxxxx.firebaseapp.com",
    databaseURL: "https://portfolio-risky-xxxxx.firebaseio.com",
    projectId: "portfolio-risky-xxxxx",
    storageBucket: "portfolio-risky-xxxxx.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

5. **Save** kedua file!

---

## 🌐 STEP 2: Deploy ke Vercel (Hosting Gratis)

### 2.1 Persiapan File

Pastikan struktur folder kamu seperti ini:
```
Porto web/
├── index.html
├── admin.html
├── style.css
├── admin-style.css
├── script.js
└── SETUP-GUIDE.md (file ini)
```

### 2.2 Install Git (Kalau belum ada)

1. Download Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Install dengan pengaturan default (Next terus)
3. Restart komputer

### 2.3 Bikin GitHub Repository

1. Buka [GitHub](https://github.com/)
2. Login atau Sign Up (gratis)
3. Klik tombol **"+"** pojok kanan atas → **"New repository"**
4. Repository name: **"portfolio-web"**
5. Atur **Public** (biar gratis)
6. **JANGAN** centang "Add a README file"
7. Klik **"Create repository"**

### 2.4 Upload ke GitHub

1. **Buka Command Prompt** atau **PowerShell**
2. Pindah ke folder project:
```bash
cd "d:\Porto web"
```

3. Jalankan perintah ini **SATU PER SATU**:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio setup"
```

```bash
git branch -M main
```

4. **GANTI** link di bawah dengan link repository GitHub kamu, lalu jalankan:
```bash
git remote add origin https://github.com/Masterq15/portfolio-web.git
```

5. Push ke GitHub:
```bash
git push -u origin main
```

> 💡 **Tips**: Kalau diminta login, masukkan username & password GitHub kamu

### 2.5 Deploy ke Vercel

1. Buka [Vercel](https://vercel.com/)
2. Klik **"Sign Up"** → Pilih **"Continue with GitHub"**
3. Authorize Vercel
4. Di dashboard, klik **"Add New..."** → **"Project"**
5. Klik **"Import"** di repository **"portfolio-web"**
6. **JANGAN UBAH** apapun (biarkan default)
7. Klik **"Deploy"**

⏳ **Tunggu 1-2 menit...**

### 2.6 Website LIVE! 🎉

Setelah selesai, kamu akan dapat:
- ✅ **Domain gratis**: `portfolio-web-xxxxx.vercel.app`
- ✅ **SSL otomatis** (HTTPS)
- ✅ **Auto deploy** (push ke GitHub = otomatis update website)

---

## 🎨 STEP 3: Cara Pakai Admin Panel

### 3.1 Buka Admin Panel

1. Buka website kamu: `https://portfolio-web-xxxxx.vercel.app`
2. Scroll ke paling bawah
3. Klik link **"Admin Panel"**

ATAU langsung ke: `https://portfolio-web-xxxxx.vercel.app/admin.html`

### 3.2 Tambah Project Pertama

1. Isi form:
   - **Project Title**: Contoh: "Mobile App Design"
   - **Description**: "UI/UX design untuk aplikasi e-commerce"
   - **Image URL**: Paste link gambar (dari Google Drive, Imgur, dll) ATAU kosongkan untuk placeholder
   - **Project Link**: Link demo (opsional)

2. Klik **"Add Project"**
3. Project langsung muncul di **portfolio utama**! 🔥

### 3.3 Edit/Hapus Project

- **Edit**: Klik icon ✏️ (pensil)
- **Hapus**: Klik icon 🗑️ (tong sampah)

---

## 📸 Cara Upload Foto Profil

### Opsi 1: Ganti Placeholder dengan HTML (Mudah)

1. Upload foto kamu ke **Google Drive** atau **Imgur**
2. Dapatkan link public gambar
3. Buka **index.html**
4. Cari baris ini (sekitar baris 79):
```html
<div class="image-placeholder">
    <i class="fas fa-user"></i>
    <p>Your Photo Here</p>
</div>
```

5. **GANTI** dengan:
```html
<img src="LINK_FOTO_KAMU" alt="Risky Dimas Nugroho" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

6. Save & push ke GitHub (otomatis deploy)

---

## 🔄 Cara Update Website Setelah Edit File

Setiap kali kamu edit file (HTML/CSS/JS):

```bash
cd "d:\Porto web"
git add .
git commit -m "Update portfolio"
git push
```

**Vercel otomatis deploy!** Tunggu 30 detik - 1 menit, website terupdate! ✨

---

## 🎯 Checklist Setup

- [ ] Firebase project dibuat
- [ ] Realtime Database aktif
- [ ] Firebase config dipasang di index.html & admin.html
- [ ] Repository GitHub dibuat
- [ ] File di-upload ke GitHub
- [ ] Project di-deploy ke Vercel
- [ ] Website bisa dibuka
- [ ] Admin panel berfungsi
- [ ] Tambah project test berhasil

---

## ❓ Troubleshooting

### Problem: "Firebase config error"
**Solusi**: Cek lagi config di index.html & admin.html, pastikan semua field terisi dengan benar

### Problem: "Projects tidak muncul"
**Solusi**: Buka Console Browser (F12), cek error di tab Console

### Problem: "Admin panel tidak bisa tambah project"
**Solusi**: Cek Firebase Rules, pastikan `.write: true`

### Problem: "Website tidak update setelah push"
**Solusi**: Tunggu 1-2 menit, atau cek Vercel Dashboard apakah deployment berhasil

---

## 💡 Tips & Trick

### Upload Gambar Project
**GRATIS & MUDAH:**
1. **Imgur**: Upload → Right click → Copy image address
2. **Google Drive**: Upload → Share → Anyone with link → Copy link (butuh konversi format)
3. **GitHub**: Upload ke folder `images/` di repo, pakai link raw

### Custom Domain
Kalau mau pakai domain sendiri (misalnya `riskyportfolio.com`):
1. Beli domain di Niagahoster/Hostinger
2. Vercel Dashboard → Project Settings → Domains
3. Add domain & ikuti instruksi DNS

### Protect Admin Panel
Tambahkan password sederhana:
1. Buka **admin.html**
2. Tambahkan ini di awal tag `<script>`:
```javascript
const password = prompt("Enter admin password:");
if (password !== "risky123") {
    window.location.href = "index.html";
}
```

---

## 🎓 Belajar Lebih Lanjut

- **Firebase**: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **Vercel**: [https://vercel.com/docs](https://vercel.com/docs)
- **Git**: [https://git-scm.com/doc](https://git-scm.com/doc)

---

## 📧 Butuh Bantuan?

Kalau ada error atau bingung, screenshot error-nya dan tanya lagi! 😊

**GOOD LUCK! 🚀**

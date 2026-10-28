/**
 * NEO-BRUTALISM & 90s POP ART PORTFOLIO
 * Author: Risky Dimas Nugroho
 * Interactive Engine: Themes, Filters, Firebase Sync, Modals & Micro-interactions
 */

// ==========================================
// 0. DevTools Privacy & Source Protection Shield
// ==========================================
(function initPrivacyShield() {
  // Simpan console asli DULU sebelum di-override
  const origLog = Function.prototype.bind.call(console.log, console);

  try {
    // Tampilkan banner pakai console asli
    origLog(
      "%c 🚀 Risky Dimas Nugroho — Portfolio",
      "background: #FFE500; color: #000000; font-weight: 800; font-size: 13px; padding: 4px 8px; border: 2px solid #000; border-radius: 4px;"
    );
  } catch (e) {}

  try {
    // Silence verbose logs & sensitive error leaks
    const noop = () => {};
    console.log = noop;
    console.warn = noop;
    console.info = noop;
    console.debug = noop;
  } catch (e) {}

  // Privacy data is protected via:
  // - Firebase config encoded (not plaintext)
  // - Phone/WA only shown if set in database
  // - No sensitive credentials hardcoded in HTML
})();

// Private module-scoped Firebase references (NEVER exposed to window)
let _db = null;
let _push = null;
let _ref = null;

// ==========================================
// 1. Curated Default Data (Instant Real Data & Zero-Flash Hydration)
// ==========================================
const DEFAULT_PROFILE = {
  name: "Risky Dimas Nugroho",
  role: "UI/UX Designer & Mahasiswa Ilmu Komputer",
  tagline: "Mahasiswa Ilmu Komputer yang fokus merancang antarmuka aplikasi yang intuitif, fungsional, dan nyaman dipakai pengguna.",
  bio: "Hai, saya Risky Dimas Nugroho, mahasiswa Ilmu Komputer semester 5 dari Kebumen, Indonesia. Saya tertarik pada bagaimana teknologi dan desain bisa berpadu untuk menciptakan produk digital yang fungsional dan nyaman digunakan.\n\nDalam mengerjakan proyek, saya biasa menggunakan Figma untuk perancangan antarmuka & wireframing, serta Photoshop dan CapCut untuk visual. Setiap tugas dan proyek praktikum saya jadikan sarana belajar hal baru untuk mengasah kemampuan teknis maupun visual.\n\nDi luar perkuliahan, saya aktif di kompetisi game esports dan suka berolahraga lari. Saya selalu terbuka untuk berdiskusi, belajar hal baru, dan berkolaborasi dalam proyek pengembangan web maupun aplikasi.",
  photo: "https://i.imgur.com/nYlo4Wr.jpeg",
  location: "Kebumen, Indonesia",
  email: "riskydimasnu@gmail.com",
  phone: "",
  whatsapp: "",
  badgeTag: "",
  resumeSummary: "Mahasiswa Ilmu Komputer semester 5 dengan minat di bidang UI/UX Design dan Front-End Web Development. Terampil menggunakan Figma untuk perancangan antarmuka dan wireframing, serta memahami dasar HTML, CSS, dan JavaScript. Memiliki pengalaman kepemimpinan tim dari dunia esports yang mengasah komunikasi dan kerja sama.",
  resumeSkills: "UI/UX Design, Figma & Prototyping, Wireframing, HTML5 / CSS3, JavaScript, Adobe Photoshop, CapCut Video",
  resumePdfUrl: "",
  resumeKeyItems: "Belajar Dasar Pemrograman JavaScript | Dicoding • 2026\nJuara 1 - Jateng DIY Community Champions Esports Tournament | Jateng DIY Community • 2024\nJuara 1 - International Female Legends Free Fire | IFL x Community DIY Free Fire • 2024"
};

// Immediate hydration from cache so refresh is instantaneous with ZERO dummy data
let currentProfile = (() => {
  try {
    const cached = localStorage.getItem('porto_cache_profile');
    if (cached) {
      const parsed = JSON.parse(cached);
      parsed.badgeTag = '';
      return { ...DEFAULT_PROFILE, ...parsed };
    }
  } catch (e) {}
  return { ...DEFAULT_PROFILE };
})();

let allSkills = (() => {
  try {
    const cached = localStorage.getItem('porto_cache_skills');
    if (cached) return JSON.parse(cached);
  } catch (e) {}
  return [];
})();

const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "Rental PS APK",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    description: "Merancang desain UI/UX aplikasi Rental PS menggunakan Figma dengan fokus pada tampilan yang modern, intuitif, dan mudah digunakan. Proses perancangan meliputi pembuatan layout antarmuka, desain halaman utama, serta rancangan fitur penyewaan PlayStation.",
    image: "https://i.imgur.com/VWn4hZF.png",
    tags: ["Figma", "UI/UX", "Design System"],
    link: "#"
  }
];

let allProjects = (() => {
  try {
    const cached = localStorage.getItem('porto_cache_projects');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...DEFAULT_PROJECTS];
})();

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "Jateng DIY Community Champions - Esports Tournament",
    organization: "Jateng DIY Community",
    date: "2024",
    icon: "fa-trophy",
    image: "https://i.imgur.com/na4ZoOC.jpeg",
    images: ["https://i.imgur.com/na4ZoOC.jpeg"],
    proofUrl: "https://www.instagram.com/p/DDCXldlPxjV/",
    pdfUrl: "",
    description: "Berpartisipasi dalam turnamen esports Jateng DIY Community Champions dengan bersaing melawan berbagai tim dari wilayah Jawa Tengah dan Daerah Istimewa Yogyakarta (DIY)."
  },
  {
    id: "ach-2",
    title: "INTERNATIONAL FEMALE LEGENDS FREE FIRE",
    organization: "IFL x Community Diy Free Fire",
    date: "2024",
    icon: "fa-trophy",
    image: "https://i.imgur.com/GAJC30G.jpeg",
    images: ["https://i.imgur.com/GAJC30G.jpeg"],
    proofUrl: "",
    pdfUrl: "",
    description: "Meraih Juara 1 dalam turnamen esports IFL x Community DIY yang diselenggarakan di Daerah Istimewa Yogyakarta."
  },
  {
    id: "ach-3",
    title: "TEAM XAVIER - Central Gamers Indonesia Free Fire Tegal",
    organization: "Central Gamers Indonesia",
    date: "2023",
    icon: "fa-trophy",
    image: "https://i.imgur.com/gG9QksX.jpeg",
    images: ["https://i.imgur.com/gG9QksX.jpeg"],
    proofUrl: "https://www.panturapost.com/e-sport/2073257673/tim-xavier-juarai-ajang-central-gamers-indonesia-free-fire-max-tournament-2023-di-tegal",
    pdfUrl: "",
    description: "Berhasil meraih Juara 1 dalam turnamen Free Fire yang diselenggarakan oleh Central Gamers Indonesia."
  },
  {
    id: "ach-4",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    organization: "Dicoding",
    date: "2026",
    icon: "fa-certificate",
    image: "https://i.imgur.com/vJTQKQ3.png",
    images: ["https://i.imgur.com/vJTQKQ3.png"],
    proofUrl: "https://www.dicoding.com/certificates/JLX1VOG6JZ72",
    pdfUrl: "https://drive.google.com/file/d/1ydUbEUbhEwMtuiVdNtutJ7Ez-4InsY7q/view?usp=sharing",
    description: "Membuat aplikasi front-end web yang interaktif serta memiliki fitur penyimpanan menggunakan web storage."
  },
  {
    id: "ach-5",
    title: "Belajar Dasar Pemrograman JavaScript",
    organization: "Dicoding",
    date: "2026",
    icon: "fa-certificate",
    image: "https://i.imgur.com/e0m4iCW.png",
    images: ["https://i.imgur.com/e0m4iCW.png"],
    proofUrl: "https://www.dicoding.com/certificates/EYX4QW2LWPDL",
    pdfUrl: "https://drive.google.com/file/d/1eTNmxiy3XgfR2klIpWU1ya_34u1w0B8u/view?usp=sharing",
    description: "Menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.js sesuai standar industri."
  },
  {
    id: "ach-6",
    title: "Belajar Dasar Pemrograman Web",
    organization: "Dicoding",
    date: "2026",
    icon: "fa-certificate",
    image: "https://i.imgur.com/LJHQRyh.png",
    images: ["https://i.imgur.com/LJHQRyh.png"],
    proofUrl: "https://www.dicoding.com/certificates/MRZMW9D13PYQ",
    pdfUrl: "https://drive.google.com/file/d/1N_Rzyw_uB9e5rMDEHvaA6fubVUV9W6xE/view?usp=sharing",
    description: "Membahas tuntas dasar HTML dan CSS sebagai tiga fondasi pembuatan website."
  },
  {
    id: "ach-7",
    title: "Introduction to Financial Literacy",
    organization: "Dicoding",
    date: "2026",
    icon: "fa-certificate",
    image: "https://i.imgur.com/Zg0WZni.png",
    images: ["https://i.imgur.com/Zg0WZni.png"],
    proofUrl: "https://www.dicoding.com/certificates/72ZDJGONJZYW",
    pdfUrl: "https://drive.google.com/file/d/1miadGzEDAbm5yourjy3NFW8cagiZDlOM/view?usp=drive_link",
    description: "Coding Camp powered by DBS Foundation 2026 - Prinsip-prinsip dasar literasi finansial."
  }
];

let allAchievements = (() => {
  try {
    const cached = localStorage.getItem('porto_cache_achievements');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...DEFAULT_ACHIEVEMENTS];
})();


// ==========================================
// 2. Audio Engine (Playful Subtle Pop Synthesizer)
// ==========================================
class PopAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playPop(freq = 480, duration = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restrictions gracefully handled
    }
  }
}

const popSound = new PopAudio();

// ==========================================
// 3. Theme Toggle Engine (Light & Dark Mode)
// ==========================================
function initThemeEngine() {
  const themeSwitchBtn = document.getElementById('themeSwitchBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check persisted or system theme
  const savedTheme = localStorage.getItem('porto_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme, false);

  if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
      popSound.playPop(600, 0.1);
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme, true);
    });
  }

  function setTheme(theme, withAnimation = true) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('porto_theme', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-moon';
        themeIcon.style.color = '#FFFA00';
      } else {
        themeIcon.className = 'fas fa-sun';
        themeIcon.style.color = '#000000';
      }
    }

    if (withAnimation) {
      showToast(`Switched to ${theme === 'dark' ? 'Neon Night Brutalism 🌙' : 'Vibrant Pop Art ☀️'}`);
    }
  }
}

// ==========================================
// 4. Toast Notification System
// ==========================================
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-sparkles"></i> <span>${message}</span>`;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// 5. Dynamic Rendering & Filtering (Projects)
// ==========================================
let currentProjectFilter = 'all';

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">📁</div>
        <h3 style="font-family: var(--font-display); font-size: 1.6rem;">Belum ada proyek di kategori ini</h3>
        <p style="color: var(--text-muted);">Coba pilih filter lain atau kembali lagi nanti ya.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="retro-window project-window" data-category="${p.category}">
      <div class="window-header">
        <div class="window-dots">
          <span class="window-dot dot-red"></span>
          <span class="window-dot dot-yellow"></span>
          <span class="window-dot dot-green"></span>
        </div>
        <span class="window-title">${(p.title || 'project').toLowerCase().replace(/[^a-z0-9]+/g, '_')}.app</span>
        <div class="window-controls-retro">
          <span class="window-btn-retro">−</span>
          <span class="window-btn-retro">□</span>
        </div>
      </div>

      <div class="project-preview-wrap">
        <img src="${p.image}" alt="${p.title}" class="project-preview-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'">
        <span class="project-category-overlay">${p.categoryLabel || 'UI/UX Design'}</span>
      </div>

      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        
        <div class="project-tags">
          ${(p.tags || ['Design', 'Creative']).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>

        <div class="project-footer-action">
          <a href="${p.link && p.link !== '#' ? p.link : '#contact'}" ${p.link && p.link !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project-link-btn">
            <span>${p.link && p.link !== '#' ? 'Lihat Proyek' : 'Tanya Proyek Ini'}</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          ${p.link && p.link !== '#' ? `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-arrow-icon" aria-label="Open project external link">
              <i class="fas fa-external-link-alt"></i>
            </a>
          ` : `
            <span class="project-arrow-icon" aria-hidden="true">
              <i class="fas fa-arrow-right"></i>
            </span>
          `}
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.projects-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popSound.playPop(520, 0.08);
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProjectFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects(currentProjectFilter);
    });
  });
}

// ==========================================
// 6. Dynamic Rendering (Achievements with Photo Slider & Credential Actions)
// ==========================================
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  grid.innerHTML = allAchievements.map((a, cardIdx) => {
    const photos = (a.images && Array.isArray(a.images) && a.images.length > 0)
      ? a.images
      : (a.image ? [a.image] : []);

    let mediaMarkup = '';
    if (photos.length > 1) {
      // Slidable Photo Carousel with controls, counter and dots
      mediaMarkup = `
        <div class="achievement-photo-wrap achievement-slider-wrap" id="ach-slider-${cardIdx}" data-current="0" data-total="${photos.length}">
          <div class="achievement-slide-track">
            ${photos.map((img, idx) => `
              <img src="${img}" alt="${a.title} photo ${idx + 1}" class="achievement-slide-img ${idx === 0 ? 'active' : ''}" loading="lazy" onerror="this.style.display='none'">
            `).join('')}
          </div>
          
          <div class="achievement-slide-counter">
            <i class="fas fa-images"></i> <span class="current-slide-num">1</span>/${photos.length}
          </div>

          <button type="button" class="achievement-slider-btn prev-btn" onclick="slideAchievementPhoto(${cardIdx}, -1)" aria-label="Previous photo">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button type="button" class="achievement-slider-btn next-btn" onclick="slideAchievementPhoto(${cardIdx}, 1)" aria-label="Next photo">
            <i class="fas fa-chevron-right"></i>
          </button>

          <div class="achievement-slider-dots">
            ${photos.map((_, idx) => `
              <span class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToAchievementPhoto(${cardIdx}, ${idx})"></span>
            `).join('')}
          </div>
        </div>
      `;
    } else if (photos.length === 1) {
      // Single photo
      mediaMarkup = `
        <div class="achievement-photo-wrap">
          <img src="${photos[0]}" alt="${a.title}" class="achievement-photo" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      `;
    }

    // Action buttons (PDF Document & Real Proof Link)
    const proofUrl = a.proofUrl || a.credentialUrl;
    const hasActions = a.pdfUrl || proofUrl;
    const actionsMarkup = hasActions ? `
      <div class="achievement-actions-row">
        ${a.pdfUrl ? `
          <a href="${a.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-yellow achievement-btn-pdf" title="Lihat / Download File Dokumen PDF">
            <i class="fas fa-file-pdf"></i>
            <span>Lihat PDF</span>
          </a>
        ` : ''}
        ${proofUrl ? `
          <a href="${proofUrl}" target="_blank" rel="noopener noreferrer" class="achievement-btn-proof" title="Lihat Dokumen / Bukti Verifikasi Resmi">
            <i class="fas fa-shield-check"></i>
            <span>Verifikasi Resmi</span>
          </a>
        ` : ''}
      </div>
    ` : '';

    return `
      <div class="achievement-card">
        ${mediaMarkup}
        <div class="achievement-top">
          <div class="achievement-badge-icon">
            <i class="fas ${a.icon || 'fa-trophy'}"></i>
          </div>
          <span class="achievement-year-badge">${a.date || '2024'}</span>
        </div>
        <h3 class="achievement-title">${a.title}</h3>
        <div class="achievement-org">${a.organization}</div>
        <p class="achievement-desc">${a.description}</p>
        ${actionsMarkup}
      </div>
    `;
  }).join('');

  // Update counter in stats
  const counterEl = document.getElementById('achievementCountStat');
  if (counterEl) {
    counterEl.textContent = `${allAchievements.length}+`;
  }
}

// Global Slider Controls for Achievements
window.slideAchievementPhoto = (cardIdx, direction) => {
  const slider = document.getElementById(`ach-slider-${cardIdx}`);
  if (!slider) return;

  let current = parseInt(slider.getAttribute('data-current') || '0', 10);
  const total = parseInt(slider.getAttribute('data-total') || '1', 10);

  current = (current + direction + total) % total;
  slider.setAttribute('data-current', current);

  const imgs = slider.querySelectorAll('.achievement-slide-img');
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === current);
  });

  const numSpan = slider.querySelector('.current-slide-num');
  if (numSpan) numSpan.textContent = current + 1;

  const dots = slider.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });

  popSound.playPop(540, 0.05);
};

window.goToAchievementPhoto = (cardIdx, targetIdx) => {
  const slider = document.getElementById(`ach-slider-${cardIdx}`);
  if (!slider) return;

  slider.setAttribute('data-current', targetIdx);

  const imgs = slider.querySelectorAll('.achievement-slide-img');
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === targetIdx);
  });

  const numSpan = slider.querySelector('.current-slide-num');
  if (numSpan) numSpan.textContent = targetIdx + 1;

  const dots = slider.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === targetIdx);
  });

  popSound.playPop(540, 0.05);
};

// ==========================================
// 7. Skills Filter System
// ==========================================
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-sticker-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popSound.playPop(480, 0.08);
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-filter') || 'all';
      skillCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (target === 'all' || cat === target) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// ==========================================
// 8. Firebase Realtime Database Integration & Privacy Obfuscation
// ==========================================
function applyProfileToDOM(p) {
  if (!p) return;

  // 1. Photo
  if (p.photo) {
    const avatar = document.getElementById('aboutAvatarImg');
    if (avatar) avatar.src = p.photo;
  }

  // 2. Name & Role
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const nameStr = p.name || 'Risky Dimas Nugroho';
    const roleStr = p.role || 'UI/UX Designer & Mahasiswa Ilmu Komputer';
    heroTitle.innerHTML = `<span class="bubble-highlight-blue">${nameStr}</span><br><span class="bubble-highlight-yellow">${roleStr}</span>`;
  }

  const aboutName = document.getElementById('aboutName');
  if (aboutName && p.name) aboutName.textContent = p.name;

  // 3. Tagline / Subtitle
  const sub = document.querySelector('.hero-subtitle');
  if (sub && p.tagline) sub.textContent = p.tagline;

  // 4. Bio Paragraphs
  if (p.bio) {
    const bioEl = document.getElementById('aboutBioParagraphs');
    if (bioEl) {
      bioEl.innerHTML = p.bio.split('\n').filter(Boolean).map(text => `<p>${text}</p>`).join('');
    }
  }

  // 5. Logo Text & Tag
  if (p.logoText !== undefined && p.logoText !== '') {
    const brandFlower = document.querySelector('.brand-flower');
    if (brandFlower) brandFlower.textContent = p.logoText;
  }
  
  const statusDot = document.querySelector('.status-dot');
  if (statusDot) statusDot.textContent = '';

  // 6. Stickers
  if (p.stickers) {
    const row = document.getElementById('heroStickersRow');
    if (row) {
      const stickerClasses = ['sticker-thumbs', 'sticker-peace', 'sticker-banner', 'sticker-smiley', 'sticker-start', 'sticker-hot'];
      let items = [];
      if (Array.isArray(p.stickers)) {
        items = p.stickers;
      } else if (typeof p.stickers === 'string') {
        items = p.stickers.split(/[,\n]/).map(s => s.trim()).filter(Boolean);
      }
      if (items.length > 0) {
        row.innerHTML = items.map((stk, idx) => {
          const cls = stickerClasses[idx % stickerClasses.length];
          return `<div class="sticker-badge ${cls}"><span>${stk}</span></div>`;
        }).join('');

        row.querySelectorAll('.sticker-badge').forEach(sticker => {
          sticker.addEventListener('mouseenter', () => {
            popSound.playPop(640, 0.06);
          });
        });
      }
    }
  }

  // 7. Contact Channels & Privacy Guard
  const waCard = document.getElementById('contactWhatsappChannel');
  const waBadge = document.getElementById('contactWaBadge');
  const waText = document.getElementById('contactWhatsappText');
  const emailCard = document.getElementById('contactEmailChannel');
  const emailText = document.getElementById('contactEmailText');

  if (p.email && p.email.trim() !== '') {
    if (emailCard) emailCard.href = `mailto:${p.email}`;
    if (emailText) emailText.textContent = p.email;
  }

  if (p.whatsapp && p.whatsapp.trim() !== '') {
    const cleanWa = p.whatsapp.replace(/[^0-9]/g, '');
    if (waCard) {
      waCard.style.display = 'flex';
      waCard.href = `https://wa.me/${cleanWa}`;
      if (waText) waText.textContent = p.whatsapp;
    }
    if (waBadge) {
      waBadge.style.display = 'inline-flex';
      waBadge.href = `https://wa.me/${cleanWa}`;
    }
  } else {
    // Hide phone / WhatsApp if empty to protect privacy
    if (waCard) waCard.style.display = 'none';
    if (waBadge) waBadge.style.display = 'none';
  }

  // 8. Stats Counter
  if (p.stats) {
    if (p.stats.projects) {
      const el = document.getElementById('projectCountStat');
      if (el) el.textContent = p.stats.projects;
    }
    if (p.stats.achievements) {
      const el = document.getElementById('achievementCountStat');
      if (el) el.textContent = p.stats.achievements;
    }
  }

  updateResumeModalUI();
}

async function initFirebaseSync() {
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
    const { getDatabase, ref, onValue, push } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');

    // Reconstruct credentials securely to avoid plain inspection in Sources tab
    const _cfg = [
      "QUl6YVN5QlhEbVl5UWpZSTdScFN3OXI1SjFHWWdaRGlQaGQtMjZF",
      "cG9ydGZvbGlvLXJpc2t5ZGltYXNuLmZpcmViYXNlYXBwLmNvbQ==",
      "aHR0cHM6Ly9wb3J0Zm9saW8tcmlza3lkaW1hc24tZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcA==",
      "cG9ydGZvbGlvLXJpc2t5ZGltYXNu",
      "cG9ydGZvbGlvLXJpc2t5ZGltYXNuLmZpcmViYXNlc3RvcmFnZS5hcHA=",
      "MTA3NDY5MTUxNTU2MA==",
      "MToxMDc0NjkxNTE1NTYwOndlYjo2OTFlY2Q1ZTFjNzZiYzE5YzljZTlk"
    ].map(s => atob(s));

    const firebaseConfig = {
      apiKey: _cfg[0],
      authDomain: _cfg[1],
      databaseURL: _cfg[2],
      projectId: _cfg[3],
      storageBucket: _cfg[4],
      messagingSenderId: _cfg[5],
      appId: _cfg[6]
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Keep database references private inside script module
    _db = database;
    _push = push;
    _ref = ref;

    // Profile listener
    onValue(ref(database, 'profile'), snapshot => {
      const data = snapshot.val();
      if (data) {
        data.badgeTag = '';
        currentProfile = { ...DEFAULT_PROFILE, ...data };
        try {
          localStorage.setItem('porto_cache_profile', JSON.stringify(currentProfile));
        } catch (e) {}
        applyProfileToDOM(currentProfile);
      }
    });

    // Projects listener
    onValue(ref(database, 'projects'), snapshot => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
        allProjects = Object.entries(data).map(([id, p]) => ({
          id,
          title: p.title || 'Untitled Project',
          category: (p.category || 'uiux').toLowerCase(),
          categoryLabel: p.categoryLabel || 'Creative Design',
          description: p.description || '',
          image: p.image || 'https://i.imgur.com/VWn4hZF.png',
          tags: p.tags ? (Array.isArray(p.tags) ? p.tags : p.tags.split(',')) : ['Design'],
          link: p.link || '#'
        }));
      } else {
        allProjects = [];
      }
      try {
        localStorage.setItem('porto_cache_projects', JSON.stringify(allProjects));
      } catch (e) {}

      renderProjects(currentProjectFilter);
      const projectCountStat = document.getElementById('projectCountStat');
      if (projectCountStat) {
        projectCountStat.textContent = `${allProjects.length}+`;
      }
      updateResumeModalUI();
    });

    // Achievements listener
    onValue(ref(database, 'achievements'), snapshot => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
        allAchievements = Object.entries(data).map(([id, a]) => {
          const imgs = (a.images && Array.isArray(a.images) && a.images.length > 0)
            ? a.images
            : (a.image ? [a.image] : []);
          return {
            id,
            title: a.title || 'Achievement',
            organization: a.organization || 'Organization',
            date: a.date || '2024',
            icon: a.icon || 'fa-trophy',
            image: imgs[0] || a.image || '',
            images: imgs,
            pdfUrl: a.pdfUrl || '',
            proofUrl: a.proofUrl || a.credentialUrl || '',
            description: a.description || ''
          };
        });
      } else {
        allAchievements = [];
      }
      try {
        localStorage.setItem('porto_cache_achievements', JSON.stringify(allAchievements));
      } catch (e) {}

      renderAchievements();
      const achievementCountStat = document.getElementById('achievementCountStat');
      if (achievementCountStat) {
        achievementCountStat.textContent = `${allAchievements.length}+`;
      }
      updateResumeModalUI();
    });

    // Skills listener
    onValue(ref(database, 'skills'), snapshot => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
        allSkills = Object.values(data);
        try {
          localStorage.setItem('porto_cache_skills', JSON.stringify(allSkills));
        } catch (e) {}

        const grid = document.getElementById('skillsGrid');
        if (grid) {
          grid.innerHTML = Object.entries(data).map(([id, s]) => `
            <div class="skill-sticker-card skill-theme-${s.theme || 'yellow'}" data-category="${s.category || 'design'}">
              <div class="skill-icon-wrap">
                ${s.image ? `
                  <img src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.style.display='none'">
                ` : `
                  <i class="${s.icon || 'fas fa-star'}"></i>
                `}
              </div>
              <h3 class="skill-name">${s.name}</h3>
              <span class="skill-category-tag">${s.subtitle || s.categoryLabel || s.category || 'Skill'}</span>
            </div>
          `).join('');
          initSkillsFilter();
        }
        updateResumeModalUI();
      }
    });
  } catch (err) {
    // Graceful offline fallback
  }
}

// ==========================================
// 9. Interactive Resume Modal System & Realtime Data Sync
// ==========================================
function updateResumeModalUI() {
  const profile = currentProfile || DEFAULT_PROFILE;

  // 1. Header Information
  const resumeName = document.getElementById('resumeName');
  if (resumeName) resumeName.textContent = profile.name || DEFAULT_PROFILE.name;

  const resumeRole = document.getElementById('resumeRole');
  if (resumeRole) resumeRole.textContent = profile.role || DEFAULT_PROFILE.role;

  const resumeEmail = document.getElementById('resumeEmail');
  if (resumeEmail) resumeEmail.textContent = profile.email || DEFAULT_PROFILE.email;

  const resumePhone = document.getElementById('resumePhone');
  const resumePhoneWrap = document.getElementById('resumePhoneWrap');
  const hasPhone = Boolean(profile.whatsapp && profile.whatsapp.trim());
  if (resumePhoneWrap) {
    resumePhoneWrap.style.display = hasPhone ? 'inline' : 'none';
  }
  if (resumePhone && hasPhone) {
    resumePhone.textContent = profile.whatsapp.trim();
  }

  const resumeLocation = document.getElementById('resumeLocation');
  if (resumeLocation) resumeLocation.textContent = profile.location || DEFAULT_PROFILE.location;

  // Dynamic window file name
  const modalTitle = document.getElementById('resumeModalTitle');
  if (modalTitle && profile.name) {
    const safeName = profile.name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    modalTitle.textContent = `resume_${safeName}.pdf`;
  }

  // 2. Hire Me CTA Link
  const hireBtn = document.getElementById('resumeHireMeBtn');
  if (hireBtn) {
    const email = profile.email || DEFAULT_PROFILE.email;
    hireBtn.href = `mailto:${email}?subject=Job%20Inquiry%20-%20${encodeURIComponent(profile.name || 'Risky Dimas')}`;
  }

  // 3. Direct PDF File Download Button (If URL provided)
  const directPdfBtn = document.getElementById('resumeDirectPdfBtn');
  if (directPdfBtn) {
    if (profile.resumePdfUrl && profile.resumePdfUrl.trim()) {
      directPdfBtn.href = profile.resumePdfUrl.trim();
      directPdfBtn.style.display = 'inline-flex';
    } else {
      directPdfBtn.style.display = 'none';
    }
  }

  // 4. Professional Summary
  const resumeSummary = document.getElementById('resumeSummary');
  if (resumeSummary) {
    if (profile.resumeSummary && profile.resumeSummary.trim()) {
      resumeSummary.textContent = profile.resumeSummary.trim();
    } else if (profile.bio) {
      const firstPara = profile.bio.split('\n').filter(p => p.trim())[0];
      resumeSummary.textContent = firstPara || DEFAULT_PROFILE.resumeSummary;
    } else {
      resumeSummary.textContent = DEFAULT_PROFILE.resumeSummary;
    }
  }

  // 5. Core Skills Tags (Custom tags OR auto-synced from Database Tech Stack)
  const skillsListEl = document.getElementById('resumeSkillsList');
  if (skillsListEl) {
    if (profile.resumeSkills && profile.resumeSkills.trim()) {
      const tags = profile.resumeSkills.split(',').map(s => s.trim()).filter(Boolean);
      skillsListEl.innerHTML = tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    } else if (allSkills && allSkills.length > 0) {
      skillsListEl.innerHTML = allSkills.map(s => `<span class="tech-tag">${s.name}</span>`).join('');
    } else {
      const defaultTags = DEFAULT_PROFILE.resumeSkills.split(',').map(s => s.trim()).filter(Boolean);
      skillsListEl.innerHTML = defaultTags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }
  }

  // 6. Key Projects & Achievements (Custom lines OR auto-synced top records)
  const keyItemsEl = document.getElementById('resumeKeyItems');
  if (keyItemsEl) {
    if (profile.resumeKeyItems && profile.resumeKeyItems.trim()) {
      const lines = profile.resumeKeyItems.split('\n').map(l => l.trim()).filter(Boolean);
      keyItemsEl.innerHTML = lines.map(line => {
        const parts = line.split('|');
        const title = parts[0] ? parts[0].trim() : line;
        const sub = parts[1] ? parts[1].trim() : '';
        return `
          <div class="resume-item-row">
            <strong>${title}</strong>
            ${sub ? `<span>${sub}</span>` : ''}
          </div>
        `;
      }).join('');
    } else {
      const rows = [];
      const projectsList = (allProjects && allProjects.length > 0) ? allProjects : DEFAULT_PROJECTS;
      const certsList = (allAchievements && allAchievements.length > 0) ? allAchievements : DEFAULT_ACHIEVEMENTS;

      projectsList.slice(0, 2).forEach(p => {
        rows.push(`
          <div class="resume-item-row">
            <strong>${p.title}</strong>
            <span>${p.categoryLabel || 'Design'}</span>
          </div>
        `);
      });

      certsList.slice(0, 1).forEach(a => {
        rows.push(`
          <div class="resume-item-row">
            <strong>${a.title}</strong>
            <span>${a.organization || 'Achievement'} • ${a.date || '2024'}</span>
          </div>
        `);
      });

      if (rows.length > 0) {
        keyItemsEl.innerHTML = rows.join('');
      }
    }
  }
}

function initResumeModal() {
  const openBtns = document.querySelectorAll('.open-resume-modal-btn');
  const modal = document.getElementById('resumeModal');
  const closeBtn = document.getElementById('closeResumeModalBtn');
  const printBtn = document.getElementById('printResumeBtn');

  // Initial render with default or current profile
  updateResumeModalUI();

  if (!modal) return;

  function openModal() {
    updateResumeModalUI();
    popSound.playPop(580, 0.1);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    popSound.playPop(350, 0.08);
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      popSound.playPop(700, 0.12);
      document.body.classList.add('is-printing-resume');
      window.print();
      // Remove class after print dialog closes
      setTimeout(() => {
        document.body.classList.remove('is-printing-resume');
      }, 1000);
    });
  }
}

// ==========================================
// 10. Contact Form Handler with Pop-Art Feedback
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    popSound.playPop(750, 0.15);

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput ? nameInput.value.trim() : 'Friend';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    try {
      if (_push && _ref && _db) {
        await _push(_ref(_db, 'messages'), {
          name,
          email,
          message,
          timestamp: Date.now(),
          status: 'unread'
        });
      }
    } catch (err) {
      // Handled silently
    }

    showToast(`Woohoo! Thanks ${name}! Your message is received! 💌`);
    form.reset();
  });
}

// ==========================================
// 11. Navigation & Micro-Interactions
// ==========================================
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Mobile menu toggle
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      popSound.playPop(420, 0.08);
      navLinks.classList.toggle('mobile-open');
    });

    // Close mobile menu on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      popSound.playPop(620, 0.1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active state highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navButtons = document.querySelectorAll('.nav-link-btn');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('href') === `#${currentId}`) {
        btn.classList.add('active');
      }
    });
  });

  // Sticker interactive pops
  document.querySelectorAll('.sticker-badge').forEach(sticker => {
    sticker.addEventListener('mouseenter', () => {
      popSound.playPop(640, 0.06);
    });
  });
}

// ==========================================
// 12. App Initialization on DOM Ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Immediately apply initial profile to DOM so refresh has 0ms delay and zero dummy content
  applyProfileToDOM(currentProfile);
  initThemeEngine();
  renderProjects('all');
  renderAchievements();
  initProjectFilters();
  initSkillsFilter();
  initResumeModal();
  initContactForm();
  initNavigation();
  initFirebaseSync();
});

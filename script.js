/**
 * NEO-BRUTALISM & 90s POP ART PORTFOLIO
 * Author: Risky Dimas Nugroho
 * Interactive Engine: Themes, Filters, Firebase Sync, Modals & Micro-interactions
 */

// ==========================================
// 1. Curated Default Data (Instant WOW & Fallback)
// ==========================================
const DEFAULT_PROFILE = {
  name: "Risky Dimas Nugroho",
  role: "Creative UI/UX Designer & Frontend Explorer",
  tagline: "Designing bold, playful & intuitive digital experiences that make people say 'WOW!'",
  bio: "Hey there! I'm Risky Dimas Nugroho, a passionate UI/UX Designer and creative frontend enthusiast. I thrive on blending 90s Pop Art energy with modern Neo-Brutalism to craft interfaces that are not just functional, but genuinely fun to interact with.\n\nWhen I'm not in Figma fine-tuning vector curves or experimenting with playful CSS animations, you can catch me editing hype video reels on CapCut or competing in esports gaming tournaments.",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  location: "Indonesia",
  email: "riskydimasnu@gmail.com",
  phone: "+62 813-2895-9495"
};

const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "Neon Pulse - Music Streaming App",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    description: "A cyberpunk-infused, neo-brutalist mobile interface designed for Gen-Z audio enthusiasts. Features haptic visual waveforms and custom sticker playlists.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "UI/UX", "Design System", "Mobile App"],
    link: "https://www.figma.com"
  },
  {
    id: "proj-2",
    title: "PixelCraft - Retro Game Studio Web",
    category: "web",
    categoryLabel: "Web Development",
    description: "An interactive studio portfolio featuring isometric 90s arcade mockups, fluid scroll physics, and custom pop-art stickers.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Animation"],
    link: "https://github.com/Masterq15"
  },
  {
    id: "proj-3",
    title: "BiteBox - Pop Food Delivery Brand",
    category: "branding",
    categoryLabel: "Branding & Identity",
    description: "Comprehensive visual branding, vector mascots, packaging designs, and high-conversion mobile onboarding screens for a viral street-food startup.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    tags: ["Illustrator", "Photoshop", "Brand Book", "Merch"],
    link: "https://www.instagram.com/ig.masterq"
  },
  {
    id: "proj-4",
    title: "Vortex - Esports Tournament Dashboard",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    description: "High-adrenaline gamer stats dashboard tracking real-time match analytics, kill feeds, and tournament leaderboards with custom dark mode brutalism.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "Design System", "Gaming UX", "Data Viz"],
    link: "https://github.com/Masterq15"
  },
  {
    id: "proj-5",
    title: "ChromaKit - Neo-Brutalist UI Kit",
    category: "branding",
    categoryLabel: "UI/UX & Branding",
    description: "Open-source Figma component system with 120+ modular stickers, buttons, OS dialogs, and brutalist color palettes downloaded by 4,000+ designers.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma Community", "Tokens", "UI Kit", "Vector Art"],
    link: "https://www.figma.com"
  },
  {
    id: "proj-6",
    title: "KopiSenja - Artisan Cafe E-Commerce",
    category: "web",
    categoryLabel: "Web Design",
    description: "A warm, aesthetic digital storefront for Indonesian specialty beans with an interactive brew calculator and seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    tags: ["UI/UX", "Responsive Web", "Vanilla JS", "Micro-copy"],
    link: "https://github.com/Masterq15"
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "1st Place Winner - Regional Esports Championship",
    organization: "National Youth Gaming League",
    date: "2024",
    icon: "fa-trophy",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    description: "Led team tactics, communication strategy, and game-sense execution to triumph over 64 competing teams in the grand final."
  },
  {
    id: "ach-2",
    title: "Top UI/UX Design Showcase Award",
    organization: "Creative Digital Creators Expo",
    date: "2023",
    icon: "fa-award",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    description: "Recognized for high-impact visual design innovation and accessible component architecture in student portfolio competition."
  },
  {
    id: "ach-3",
    title: "Certified Professional in UX Research & Design",
    organization: "Digital Skill Academy",
    date: "2023",
    icon: "fa-certificate",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description: "Completed intensive design sprint covering wireframing, heuristic evaluation, usability testing, and interactive prototyping."
  },
  {
    id: "ach-4",
    title: "CapCut Creator Milestone - 100K+ Video Views",
    organization: "Social Media Creative Community",
    date: "2022",
    icon: "fa-fire",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    description: "Produced aesthetic design breakdown reels and editing tutorials reaching over 100,000 organic impressions across TikTok and Instagram."
  }
];

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
let allProjects = [...DEFAULT_PROJECTS];
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
        <h3 style="font-family: var(--font-display); font-size: 1.6rem;">No projects found in this category!</h3>
        <p style="color: var(--text-muted);">Try selecting another filter or check back later.</p>
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
        <span class="window-title">${p.category}.app</span>
        <div class="window-controls-retro">
          <span class="window-btn-retro">−</span>
          <span class="window-btn-retro">□</span>
        </div>
      </div>

      <div class="project-preview-wrap">
        <img src="${p.image}" alt="${p.title}" class="project-preview-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'">
        <span class="project-category-overlay">${p.categoryLabel || p.category.toUpperCase()}</span>
      </div>

      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        
        <div class="project-tags">
          ${(p.tags || ['Design', 'Creative']).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>

        <div class="project-footer-action">
          <a href="${p.link || '#'}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
            <span>Explore Details</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="${p.link || '#'}" target="_blank" rel="noopener noreferrer" class="project-arrow-icon" aria-label="Open project">
            <i class="fas fa-external-link-alt"></i>
          </a>
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
// 6. Dynamic Rendering (Achievements)
// ==========================================
let allAchievements = [...DEFAULT_ACHIEVEMENTS];

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;

  grid.innerHTML = allAchievements.map(a => `
    <div class="achievement-card">
      ${a.image ? `
        <div class="achievement-photo-wrap">
          <img src="${a.image}" alt="${a.title}" class="achievement-photo" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      ` : ''}
      <div class="achievement-top">
        <div class="achievement-badge-icon">
          <i class="fas ${a.icon || 'fa-trophy'}"></i>
        </div>
        <span class="achievement-year-badge">${a.date || '2024'}</span>
      </div>
      <h3 class="achievement-title">${a.title}</h3>
      <div class="achievement-org">${a.organization}</div>
      <p class="achievement-desc">${a.description}</p>
    </div>
  `).join('');

  // Update counter in stats
  const counterEl = document.getElementById('achievementCountStat');
  if (counterEl) {
    counterEl.textContent = `${allAchievements.length}+`;
  }
}

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
// 8. Firebase Realtime Database Integration
// ==========================================
async function initFirebaseSync() {
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
    const { getDatabase, ref, onValue, push } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');

    const firebaseConfig = {
      apiKey: "AIzaSyBXDmYyQjYI7RpSw9r5J1GYgZDiPhd-26E",
      authDomain: "portfolio-riskydimasn.firebaseapp.com",
      databaseURL: "https://portfolio-riskydimasn-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "portfolio-riskydimasn",
      storageBucket: "portfolio-riskydimasn.firebasestorage.app",
      messagingSenderId: "1074691515560",
      appId: "1:1074691515560:web:691ecd5e1c76bc19c9ce9d"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Expose for contact form
    window.firebaseDatabase = database;
    window.firebasePush = push;
    window.firebaseRef = ref;

    // Profile listener
    onValue(ref(database, 'profile'), snapshot => {
      const data = snapshot.val();
      if (data) {
        if (data.photo) {
          const avatar = document.getElementById('aboutAvatarImg');
          if (avatar) avatar.src = data.photo;
        }
        if (data.bio) {
          const bioEl = document.getElementById('aboutBioParagraphs');
          if (bioEl) {
            bioEl.innerHTML = data.bio.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('');
          }
        }
        if (data.name) {
          const heroTitle = document.querySelector('.hero-title');
          if (heroTitle && data.role) {
            heroTitle.innerHTML = `<span class="bubble-highlight-blue">${data.name}</span> is a<br><span class="bubble-highlight-yellow">${data.role}</span>`;
          }
        }
        if (data.tagline) {
          const sub = document.querySelector('.hero-subtitle');
          if (sub) sub.textContent = data.tagline;
        }
        if (data.logoText !== undefined && data.logoText !== '') {
          const brandFlower = document.querySelector('.brand-flower');
          if (brandFlower) brandFlower.textContent = data.logoText;
        }
        if (data.badgeTag) {
          const badgeSpan = document.querySelector('.hero-badge-tag span');
          if (badgeSpan) badgeSpan.textContent = data.badgeTag;
        }
        if (data.stickers) {
          const row = document.getElementById('heroStickersRow');
          if (row) {
            const stickerClasses = ['sticker-thumbs', 'sticker-peace', 'sticker-banner', 'sticker-smiley', 'sticker-start', 'sticker-hot'];
            let items = [];
            if (Array.isArray(data.stickers)) {
              items = data.stickers;
            } else if (typeof data.stickers === 'string') {
              items = data.stickers.split(/[,\n]/).map(s => s.trim()).filter(Boolean);
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
        if (data.stats) {
          if (data.stats.projects) {
            const el = document.getElementById('projectCountStat');
            if (el) el.textContent = data.stats.projects;
          }
          if (data.stats.achievements) {
            const el = document.getElementById('achievementCountStat');
            if (el) el.textContent = data.stats.achievements;
          }
        }
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
          image: p.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
          tags: p.tags ? (Array.isArray(p.tags) ? p.tags : p.tags.split(',')) : ['Design'],
          link: p.link || '#'
        }));
        renderProjects(currentProjectFilter);

        const projectCountStat = document.getElementById('projectCountStat');
        if (projectCountStat) {
          projectCountStat.textContent = `${allProjects.length}+`;
        }
      }
    });

    // Achievements listener
    onValue(ref(database, 'achievements'), snapshot => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
        allAchievements = Object.entries(data).map(([id, a]) => ({
          id,
          title: a.title || 'Achievement',
          organization: a.organization || 'Organization',
          date: a.date || '2024',
          icon: a.icon || 'fa-trophy',
          image: a.image || '',
          description: a.description || ''
        }));
        renderAchievements();
      }
    });

    // Skills listener
    onValue(ref(database, 'skills'), snapshot => {
      const data = snapshot.val();
      if (data && Object.keys(data).length > 0) {
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
      }
    });
  } catch (err) {
    console.warn('Firebase sync offline or deferred. Running beautifully with curated fallback data.', err);
  }
}

// ==========================================
// 9. Interactive Resume Modal System
// ==========================================
function initResumeModal() {
  const openBtns = document.querySelectorAll('.open-resume-modal-btn');
  const modal = document.getElementById('resumeModal');
  const closeBtn = document.getElementById('closeResumeModalBtn');
  const printBtn = document.getElementById('printResumeBtn');

  if (!modal) return;

  function openModal() {
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
      window.print();
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
      if (window.firebasePush && window.firebaseRef && window.firebaseDatabase) {
        await window.firebasePush(window.firebaseRef(window.firebaseDatabase, 'messages'), {
          name,
          email,
          message,
          timestamp: Date.now(),
          status: 'unread'
        });
      }
    } catch (err) {
      console.log('Firebase message saving error:', err);
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
  initThemeEngine();
  renderProjects('all');
  renderAchievements();
  initProjectFilters();
  initSkillsFilter();
  initResumeModal();
  initContactForm();
  initNavigation();
  initFirebaseSync();

  console.log('%c🎨 Playful Neo-Brutalism Portfolio Active! Built for Risky Dimas Nugroho 🚀', 
    'background: #FFE500; color: #000000; font-weight: bold; font-size: 14px; padding: 6px 12px; border: 2px solid #000;'
  );
});

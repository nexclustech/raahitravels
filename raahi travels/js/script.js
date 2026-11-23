/* ============================================
   INIT LUCIDE ICONS
============================================ */
lucide.createIcons();

/* ============================================
   NAVBAR SCROLL
============================================ */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);
  backToTop.classList.toggle('show', window.scrollY > 400);
});

/* ============================================
   BACK TO TOP
============================================ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   SIDEBAR
============================================ */
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('.sidebar-link, .sidebar-cta a');

function openSidebar() {
  sidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  sidebar.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  sidebar.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) closeSidebar();
  else openSidebar();
});

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (sidebar.classList.contains('active')) closeSidebar();
    if (lightbox.classList.contains('active')) closeLightbox();
  }
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

/* ============================================
   ACTIVE NAV LINK ON SCROLL
============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

/* ============================================
   GSAP HERO ANIMATIONS
============================================ */
gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('.hero-bg img', {
    scale: 1.2,
    duration: 2,
    ease: 'power2.out'
  })
  .from('[data-hero-el]', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=1.2')
  .from('.title-line', {
    y: '100%',
    duration: 1.2,
    stagger: 0.15,
    ease: 'power4.out'
  }, '-=1.8')
  .from('.hero-search', {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8');

// Floating elements parallax
gsap.to('.floating-el-1', {
  y: -30,
  x: 20,
  duration: 4,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('.floating-el-2', {
  y: 25,
  x: -15,
  duration: 5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('.floating-el-3', {
  y: -20,
  x: 15,
  duration: 6,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

// Hero parallax on scroll
gsap.to('.hero-bg img', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

gsap.to('.hero-content', {
  y: -50,
  opacity: 0.3,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

/* ============================================
   SCROLL REVEAL ANIMATIONS (GSAP + ScrollTrigger)
============================================ */
// Section headers
gsap.utils.toArray('.section-header').forEach(header => {
  gsap.from(header.children, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: header,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Destination cards
gsap.utils.toArray('.dest-card').forEach((card, i) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: (i % 4) * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Package cards
gsap.utils.toArray('.pkg-card').forEach((card, i) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: (i % 3) * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Why cards
gsap.utils.toArray('.why-card').forEach((card, i) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Experience cards
gsap.utils.toArray('.exp-card').forEach((card, i) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: (i % 5) * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Gallery items
gsap.utils.toArray('.gallery-item').forEach((item, i) => {
  gsap.from(item, {
    y: 40,
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    delay: (i % 4) * 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  });
});

// About section
gsap.from('.about-img-main', {
  x: -60,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%',
    toggleActions: 'play none none none'
  }
});

gsap.from('.about-content', {
  x: 60,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%',
    toggleActions: 'play none none none'
  }
});

// Inquiry section
gsap.from('.inquiry-info', {
  x: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.inquiry',
    start: 'top 70%',
    toggleActions: 'play none none none'
  }
});

gsap.from('.inquiry-form', {
  x: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.inquiry',
    start: 'top 70%',
    toggleActions: 'play none none none'
  }
});

/* ============================================
   ANIMATED COUNTERS
============================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const obj = { val: 0 };

  gsap.to(obj, {
    val: target,
    duration: 2.5,
    ease: 'power2.out',
    onUpdate: () => {
      const value = Math.floor(obj.val);
      el.textContent = value.toLocaleString() + suffix;
    }
  });
}

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* ============================================
   TESTIMONIALS SLIDER
============================================ */
const track = document.getElementById('testimonialsTrack');
const slides = track.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const dotsContainer = document.getElementById('testimonialsDots');
let currentSlide = 0;
let autoSlideInterval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.testimonial-dot');

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

startAutoSlide();

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

track.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
    resetAutoSlide();
  }
});

/* ============================================
   LIGHTBOX
============================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = galleryItems[index];
  const src = item.dataset.src;
  const caption = item.querySelector('.gallery-overlay span').textContent;

  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
  openLightbox(currentLightboxIndex);
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentLightboxIndex);
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextLightbox);
lightboxPrev.addEventListener('click', prevLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
});

/* ============================================
   SEARCH FORM
============================================ */
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inquirySection = document.getElementById('inquiry');
  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: 'smooth' });
  }
});

/* ============================================
   INQUIRY FORM VALIDATION
============================================ */
const form = document.getElementById('inquiryForm');
const formSuccess = document.getElementById('formSuccess');
const dateInput = document.getElementById('travelDate');

// Set min date to today
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

function validateField(field) {
  const group = field.closest('.form-group');
  if (!group) return true;

  let isValid = true;

  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
  }

  if (field.type === 'tel' && field.value.trim()) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
    isValid = phoneRegex.test(field.value.replace(/\s/g, '')) && field.value.replace(/\D/g, '').length >= 9;
  }

  if (field.type === 'date' && field.value) {
    const selectedDate = new Date(field.value);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    if (selectedDate < todayDate) isValid = false;
  }

  group.classList.toggle('error', !isValid);
  return isValid;
}

// Real-time validation
form.querySelectorAll('.form-control').forEach(field => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    const group = field.closest('.form-group');
    if (group && group.classList.contains('error')) {
      validateField(field);
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const requiredFields = form.querySelectorAll('[required]');
  let allValid = true;

  requiredFields.forEach(field => {
    if (!validateField(field)) allValid = false;
  });

  if (allValid) {
    const submitBtn = form.querySelector('.form-submit');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader-2" style="animation:spin 1s linear infinite;"></i> Submitting...';
    submitBtn.disabled = true;
    lucide.createIcons();

    setTimeout(() => {
      formSuccess.classList.add('show');
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      lucide.createIcons();

      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => {
        form.reset();
        formSuccess.classList.remove('show');
      }, 8000);
    }, 1200);
  } else {
    const firstError = form.querySelector('.form-group.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length < 2) return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

/* ============================================
   INITIAL LOAD
============================================ */
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
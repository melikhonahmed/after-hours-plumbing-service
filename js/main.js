/**
 * After Hours Plumbing Services - Core Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Helper
  const toastContainer = document.getElementById('toast-container');
  
  function showToast(message, type = 'info', icon = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    const isError = type === 'error';
    
    toast.className = `toast ${isSuccess ? 'bg-slate-900 text-white' : isError ? 'bg-red-600 text-white' : 'bg-sky-900 text-white'}`;
    toast.innerHTML = `
      <span class="material-symbols-outlined text-lg ${isSuccess ? 'text-emerald-400' : isError ? 'text-white' : 'text-sky-300'}">${icon}</span>
      <span class="flex-1">${message}</span>
      <button class="text-white/60 hover:text-white text-xs font-bold ml-2">✕</button>
    `;
    
    toast.querySelector('button').addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    });
    
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // 2. Modals: Booking / Estimate Modal
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');
  const bookTriggers = document.querySelectorAll('[data-open-booking]');
  const bookingForm = document.getElementById('booking-modal-form');
  const serviceSelect = document.getElementById('modal-service');
  const scheduleSelect = document.getElementById('modal-schedule');
  const zipInput = document.getElementById('modal-zip');

  function openBookingModal(initialService = '', initialSchedule = '', initialZip = '') {
    if (!bookingModal) return;
    if (initialService && serviceSelect) serviceSelect.value = initialService;
    if (initialSchedule && scheduleSelect) scheduleSelect.value = initialSchedule;
    if (initialZip && zipInput) zipInput.value = initialZip;
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  bookTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      const schedule = btn.getAttribute('data-schedule') || '';
      const zip = btn.getAttribute('data-zip') || '77013';
      openBookingModal(service, schedule, zip);
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeBookingModal);
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Hero Quick Selector "Get price" Button
  const heroGetPriceBtn = document.getElementById('hero-get-price-btn');
  const heroService = document.getElementById('hero-service-select');
  const heroSchedule = document.getElementById('hero-schedule-select');
  const heroZip = document.getElementById('hero-zip-input');

  if (heroGetPriceBtn) {
    heroGetPriceBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const sVal = heroService ? heroService.value : 'Water Heater / Leak';
      const schVal = heroSchedule ? heroSchedule.value : 'Immediate (24/7)';
      const zVal = heroZip ? heroZip.value : '77013';
      openBookingModal(sVal, schVal, zVal);
    });
  }

  // Handle Booking Form Submit
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name')?.value || 'Neighbor';
      const phone = document.getElementById('modal-phone')?.value || '';
      const service = serviceSelect?.value || 'General Plumbing';
      
      closeBookingModal();
      showToast(`Emergency dispatch alerted for ${name} (${phone}). Our Houston dispatcher will call in 90 seconds!`, 'success', 'check_circle');
      bookingForm.reset();
    });
  }

  // 3. Neighbor $50 Voucher Claim Form
  const voucherForm = document.getElementById('voucher-form');
  if (voucherForm) {
    voucherForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneInput = voucherForm.querySelector('input[type="tel"]');
      if (phoneInput && phoneInput.value.trim()) {
        showToast(`$50 Voucher Code #TX-AH50 saved for ${phoneInput.value}! Applied to your next call.`, 'success', 'redeem');
        phoneInput.value = '';
      } else {
        showToast('Please enter your phone number to redeem your $50 voucher.', 'error', 'error');
      }
    });
  }

  // 4. Video Walkthrough Modal
  const videoPlayBtn = document.getElementById('video-play-btn');
  const videoModal = document.getElementById('video-modal');
  if (videoPlayBtn && videoModal) {
    videoPlayBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.hasAttribute('data-close-video')) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Customer Review Slider Controller
  const reviewCards = document.querySelectorAll('.review-card-item');
  const reviewCounter = document.getElementById('review-counter');
  const reviewPrevBtn = document.getElementById('review-prev-btn');
  const reviewNextBtn = document.getElementById('review-next-btn');
  let currentReviewIndex = 0;

  function updateReviews(index) {
    if (!reviewCards.length) return;
    currentReviewIndex = (index + reviewCards.length) % reviewCards.length;
    if (reviewCounter) {
      reviewCounter.textContent = `0${currentReviewIndex + 1} / 0${reviewCards.length}`;
    }
    
    reviewCards.forEach((card, idx) => {
      if (idx === currentReviewIndex) {
        card.classList.remove('opacity-40', 'scale-[0.98]');
        card.classList.add('ring-2', 'ring-[#0284C7]', 'shadow-2xl');
      } else {
        card.classList.remove('ring-2', 'ring-[#0284C7]', 'shadow-2xl');
        card.classList.add('opacity-80', 'scale-[0.98]');
      }
    });
  }

  if (reviewPrevBtn && reviewNextBtn && reviewCards.length) {
    reviewPrevBtn.addEventListener('click', () => updateReviews(currentReviewIndex - 1));
    reviewNextBtn.addEventListener('click', () => updateReviews(currentReviewIndex + 1));
  }

  // 6. Copy Phone to Clipboard Helper
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('8327156441').then(() => {
        showToast('Phone number (832) 715-6441 copied to clipboard!', 'info', 'content_copy');
      });
    });
  });

  // 7. Mobile Navigation Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.contains('translate-x-0');
      if (isOpen) {
        mobileNavDrawer.classList.remove('translate-x-0');
        mobileNavDrawer.classList.add('translate-x-full');
      } else {
        mobileNavDrawer.classList.remove('translate-x-full');
        mobileNavDrawer.classList.add('translate-x-0');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('translate-x-0');
        mobileNavDrawer.classList.add('translate-x-full');
      });
    });
  }

  // 8. Live Standby Dispatch Arrival Rate Simulator
  const liveArrivalEl = document.getElementById('live-arrival-time');
  if (liveArrivalEl) {
    const arrivalIntervals = ['18–35 mins', '15–28 mins', '20–32 mins', '22–38 mins'];
    let arrivalIndex = 0;
    setInterval(() => {
      arrivalIndex = (arrivalIndex + 1) % arrivalIntervals.length;
      liveArrivalEl.textContent = arrivalIntervals[arrivalIndex];
    }, 15000);
  }

  // 9. Scroll reveal animation for the custom design system
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -30px 0px'
    });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  console.log('After Hours Plumbing Services application initialized successfully.');
});

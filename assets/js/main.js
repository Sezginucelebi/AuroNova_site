(function() {
  "use strict";

  /**
   * Universal Preloader Fix
   */
  const removePreloader = () => {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 500);
    }
  };
  window.addEventListener('load', removePreloader);
  setTimeout(removePreloader, 1500); // Absolute fallback

  /**
   * Header Scrolled
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const toggleScrolled = () => {
      window.scrollY > 100 ? document.body.classList.add('scrolled') : document.body.classList.remove('scrolled');
    };
    window.addEventListener('load', toggleScrolled);
    document.addEventListener('scroll', toggleScrolled);
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', function() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  /**
   * AOS Animation
   */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }

  /**
   * GLightbox
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  /**
   * Swiper
   */
  if (typeof Swiper !== 'undefined') {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let configEl = swiperElement.querySelector(".swiper-config");
      if (configEl) {
        let config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement, config);
      }
    });
  }

  /**
   * FAQ Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Auth UI & Logout
   */
  const updateAuthUI = () => {
    const user = JSON.parse(localStorage.getItem('auro_user'));
    const authBtn = document.getElementById('nav-auth-btn');
    if (user && user.isLoggedIn && authBtn) {
      authBtn.innerHTML = `<i class="bi bi-person-circle"></i> ${user.name} (${user.code})`;
      authBtn.href = "javascript:void(0)";
      authBtn.removeAttribute('data-bs-toggle');
      authBtn.onclick = () => {
        if(confirm('Çıkış yapılsın mı?')) { localStorage.removeItem('auro_user'); location.reload(); }
      };
    }
  };
  window.addEventListener('load', updateAuthUI);

  /**
   * Global Contact/Newsletter Form Handler
   */
  window.handleContactSubmit = async function(e) {
    if (e) e.preventDefault();
    const form = e && e.target;
    if (!form) return false;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonHtml = submitButton ? submitButton.innerHTML : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `<span>Gönderiliyor...</span><i class="bi bi-hourglass-split"></i>`;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method || 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      const contentType = response.headers.get('content-type') || '';
      const result = contentType.includes('application/json')
        ? await response.json()
        : { status: 'error', message: await response.text() };

      if (!response.ok || result.status !== 'success') {
        throw new Error(result.message || 'Mesaj gönderilemedi.');
      }

      const successModalEl = document.getElementById('successModal');
      if (successModalEl && typeof bootstrap !== 'undefined') {
        new bootstrap.Modal(successModalEl).show();
      } else {
        alert("Mesajınız iletildi!");
      }
      form.reset();
    } catch (error) {
      alert(error.message || 'Mesaj gönderilirken bir hata oluştu.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonHtml;
      }
    }

    return false;
  };

  /**
   * Service Modal Dynamic Text
   */
  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    serviceModal.addEventListener('show.bs.modal', function(event) {
      const btn = event.relatedTarget;
      const id = btn.getAttribute('data-service');
      const lang = localStorage.getItem('preferredLang') || 'tr';
      const title = serviceModal.querySelector('#serviceModalTitle');
      const body = serviceModal.querySelector('#serviceModalBody');
      if (translations[lang]) {
        if (title) title.textContent = translations[lang][`services_${id}_title`];
        if (body) body.textContent = translations[lang][`services_${id}_full`];
      }
    });
  }

  /**
   * Domain Search Simulation
   */
  const searchBtn = document.querySelector('[data-i18n="domain_search_btn"]');
  const searchInput = document.querySelector('[data-i18n="domain_search_placeholder"]');
  const resultBox = document.querySelector('.domain-result-box');
  const searchedDomain = document.getElementById('searched-domain');

  if (searchBtn && searchInput && resultBox) {
    searchBtn.addEventListener('click', () => {
      const domain = searchInput.value.trim();
      if (domain && searchedDomain) {
        searchedDomain.textContent = domain;
        resultBox.style.display = 'block';
        if (typeof AOS !== 'undefined') AOS.refresh();
      }
    });
  }

})();

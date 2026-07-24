(function () {
  'use strict';

  var WHATSAPP_BASE = 'https://api.whatsapp.com/send/?phone=905316996346&type=phone_number&app_absent=0';

  /* Mobile navigation */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', expanded ? 'Menüyü aç' : 'Menüyü kapat');
    });

    mainNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-label', 'Menüyü aç');
      });
    });
  }

  /* Header shadow on scroll */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 4px 24px rgba(0,0,0,0.3)' : 'none';
    }, { passive: true });
  }

  /* WhatsApp form — opens WhatsApp with encoded message (no URL params with user data in address bar until submit) */
  var waForm = document.getElementById('whatsapp-form');
  if (waForm) {
    waForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var nameInput = document.getElementById('wa-name');
      var messageInput = document.getElementById('wa-message');
      var name = nameInput && nameInput.value.trim();
      var message = messageInput && messageInput.value.trim();

      var parts = ['Merhaba'];
      if (name) {
        parts.push('ben ' + name + '.');
      }
      if (message) {
        parts.push(message);
      } else {
        parts.push('IPTV test yayını hakkında bilgi almak istiyorum.');
      }

      var text = encodeURIComponent(parts.join(' '));
      window.open(WHATSAPP_BASE + '&text=' + text, '_blank', 'noopener,noreferrer');
    });
  }

  /* Close mobile menu on Escape */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mainNav && mainNav.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-label', 'Menüyü aç');
      navToggle.focus();
    }
  });
})();

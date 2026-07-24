(function () {
  'use strict';

  var TELEGRAM_URL = 'https://t.me/teknoiptv1';

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

  /* Telegram form — opens Telegram chat */
  var tgForm = document.getElementById('telegram-form');
  if (tgForm) {
    tgForm.addEventListener('submit', function (event) {
      event.preventDefault();
      window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');
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

/* ==========================================================================
   Red Flag Calculator - Direct Zero-Delay Navigation & Interaction Engine
   ========================================================================== */

// Global Fail-Safe Mobile Menu Toggle
window.toggleNavMenu = function(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  const btn = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');
  if (btn && links) {
    btn.classList.toggle('active');
    links.classList.toggle('mobile-open');
  }
};

function initAppEngine() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.onclick = window.toggleNavMenu;

    // Close mobile menu when clicking any nav link
    const navItems = navLinks.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        if (navLinks) navLinks.classList.remove('mobile-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenuBtn && navLinks && !mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('mobile-open');
      }
    });
  }

  // Home Page Mode Selection Listeners
  const quizModeCard = document.getElementById('quiz-mode-card');
  const calcModeCard = document.getElementById('calc-mode-card');
  const takeQuizBtn = document.getElementById('take-quiz-btn');
  const calcMatchBtn = document.getElementById('calc-match-btn');

  function handleQuizSelection(e) {
    if (e) e.preventDefault();
    window.location.href = 'quiz-setup.html';
  }

  function handleCalcSelection(e) {
    if (e) e.preventDefault();
    window.location.href = 'calc-setup.html';
  }

  if (takeQuizBtn) takeQuizBtn.addEventListener('click', handleQuizSelection);
  if (calcMatchBtn) calcMatchBtn.addEventListener('click', handleCalcSelection);
  if (quizModeCard) quizModeCard.addEventListener('click', (e) => {
    if (e.target !== takeQuizBtn && !takeQuizBtn.contains(e.target)) {
      handleQuizSelection(e);
    }
  });
  if (calcModeCard) calcModeCard.addEventListener('click', (e) => {
    if (e.target !== calcMatchBtn && !calcMatchBtn.contains(e.target)) {
      handleCalcSelection(e);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAppEngine);
} else {
  initAppEngine();
}

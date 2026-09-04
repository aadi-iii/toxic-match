/* ==========================================================================
   Red Flag Calculator - Direct Zero-Delay Navigation Engine (landing.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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
});

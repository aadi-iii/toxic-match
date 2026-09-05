/* ==========================================================================
   Red Flag Calculator - Direct Zero-Delay Solo Setup Engine (quiz-setup.js)
   ========================================================================== */

function capitalize(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const quizSetupForm = document.getElementById('quiz-setup-form');
  const targetNameInput = document.getElementById('target-name');
  const startQuizBtn = document.getElementById('start-quiz-btn');

  function showWarning(inputElement, message) {
    inputElement.style.borderColor = '#ff334b';
    inputElement.style.boxShadow = '0 0 14px rgba(255, 51, 75, 0.6)';
    inputElement.focus();

    let errorMsg = inputElement.parentElement.querySelector('.error-msg');
    if (!errorMsg) {
      errorMsg = document.createElement('span');
      errorMsg.className = 'error-msg';
      errorMsg.style.color = '#ff6666';
      errorMsg.style.fontSize = '0.78rem';
      errorMsg.style.marginTop = '4px';
      errorMsg.style.display = 'block';
      inputElement.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;

    setTimeout(() => {
      inputElement.style.borderColor = '';
      inputElement.style.boxShadow = '';
      if (errorMsg) errorMsg.remove();
    }, 1500);
  }

  function handleSetupSubmit(e) {
    if (e) e.preventDefault();

    const name = targetNameInput.value.trim();
    if (!name) {
      showWarning(targetNameInput, "Please enter target's name!");
      return;
    }

    const targetName = capitalize(name);
    sessionStorage.setItem('targetName', targetName);

    // Instant zero-delay redirection
    window.location.href = 'quiz.html';
  }

  if (quizSetupForm) quizSetupForm.addEventListener('submit', handleSetupSubmit);
  if (startQuizBtn) startQuizBtn.addEventListener('click', handleSetupSubmit);
});

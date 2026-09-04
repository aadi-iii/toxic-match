/* ==========================================================================
   Red Flag Calculator - Direct Zero-Delay Duo Setup Engine (calc-setup.js)
   ========================================================================== */

function capitalize(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const calcSetupForm = document.getElementById('calc-setup-form');
  const playerNameInput = document.getElementById('player-name');
  const partnerNameInput = document.getElementById('partner-name');
  const startCalcBtn = document.getElementById('start-calc-btn');

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

  function handleCalcSetupSubmit(e) {
    if (e) e.preventDefault();

    const name1 = playerNameInput.value.trim();
    const name2 = partnerNameInput.value.trim();

    if (!name1) {
      showWarning(playerNameInput, "Please enter your name!");
      return;
    }

    if (!name2) {
      showWarning(partnerNameInput, "Please enter your partner's name!");
      return;
    }

    const p1 = capitalize(name1);
    const p2 = capitalize(name2);

    sessionStorage.setItem('playerName', p1);
    sessionStorage.setItem('partnerName', p2);

    // Instant zero-delay redirection
    window.location.href = 'calculator.html';
  }

  if (calcSetupForm) calcSetupForm.addEventListener('submit', handleCalcSetupSubmit);
  if (startCalcBtn) startCalcBtn.addEventListener('click', handleCalcSetupSubmit);
});

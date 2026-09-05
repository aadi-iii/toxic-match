/* ==========================================================================
   Red Flag Calculator - Duo Toxicity Match Engine (calculator.js)
   ========================================================================== */

let playerName = "";
let partnerName = "";
let currentToxicityIndex = 0;
let toxicityTotalScore = 0;
let toxicityQuestions = [];

/**
 * Polynomial Hash Algorithm combining name metrics with duo questionnaire responses
 */
function calculateDuoToxicityScore(name1, name2, quizScore) {
  const n1 = name1.trim().toLowerCase();
  const n2 = name2.trim().toLowerCase();

  let asciiSum = 0;
  for (let i = 0; i < n1.length; i++) asciiSum += n1.charCodeAt(i);
  for (let j = 0; j < n2.length; j++) asciiSum += n2.charCodeAt(j);

  const lenDiff = Math.abs(n1.length - n2.length);
  const lenProduct = n1.length * n2.length;

  const combined = n1 + "#flag#" + n2;
  let hash = 5381;
  for (let k = 0; k < combined.length; k++) {
    hash = ((hash << 5) + hash) + combined.charCodeAt(k);
    hash |= 0;
  }

  const baseHashScore = 25 + (Math.abs(hash + asciiSum * 7 + lenProduct * 3 + lenDiff * 11) % 51);
  const finalScore = Math.min(99, Math.max(15, Math.round((baseHashScore * 0.4) + (quizScore * 0.6))));
  return finalScore;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedP1 = sessionStorage.getItem('playerName');
  const savedP2 = sessionStorage.getItem('partnerName');

  if (!savedP1 || !savedP2) {
    window.location.href = 'calc-setup.html';
    return;
  }

  playerName = savedP1;
  partnerName = savedP2;

  const calcQuizScreen = document.getElementById('calc-quiz-screen');
  const calcQuestionCounter = document.getElementById('calc-question-counter');
  const calcProgressFill = document.getElementById('calc-progress-fill');
  const calcQuestionText = document.getElementById('calc-question-text');
  const calcOptionsContainer = document.getElementById('calc-options-container');

  const calcResultScreen = document.getElementById('calc-result-screen');
  const calcResultScore = document.getElementById('calc-result-score');
  const calcResultBadgeText = document.getElementById('calc-result-badge-text');
  const calcResultRoast = document.getElementById('calc-result-roast');
  const recalcBtn = document.getElementById('recalc-btn');

  function initDuoSession() {
    currentToxicityIndex = 0;
    toxicityTotalScore = 0;

    // Fresh Fisher-Yates shuffle every single session!
    if (typeof window.getRandomDuoQuestions === 'function') {
      toxicityQuestions = window.getRandomDuoQuestions(10);
    } else if (window.duoQuestionBank) {
      const shuffled = [...window.duoQuestionBank];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      toxicityQuestions = shuffled.slice(0, 10);
    }

    if (calcResultScreen) {
      calcResultScreen.style.display = 'none';
      calcResultScreen.classList.add('hidden');
    }

    if (calcQuizScreen) {
      calcQuizScreen.style.display = 'block';
      calcQuizScreen.classList.remove('hidden');
      calcQuizScreen.classList.add('fade-in');
    }

    loadToxicityQuestion();
  }

  function loadToxicityQuestion() {
    if (currentToxicityIndex >= toxicityQuestions.length) {
      finishToxicityQuizAndCalculate();
      return;
    }

    const currentQ = toxicityQuestions[currentToxicityIndex];

    if (calcQuestionCounter) {
      calcQuestionCounter.textContent = `Question ${currentToxicityIndex + 1} of ${toxicityQuestions.length}`;
    }
    if (calcProgressFill) {
      const progressPercent = ((currentToxicityIndex + 1) / toxicityQuestions.length) * 100;
      calcProgressFill.style.width = `${progressPercent}%`;
    }

    if (calcQuestionText) {
      calcQuestionText.textContent = currentQ.text;
    }

    if (calcOptionsContainer) {
      calcOptionsContainer.innerHTML = '';

      currentQ.options.forEach((option) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';

        let optText = option.text.replace(/\[P1\]/g, playerName).replace(/\[P2\]/g, partnerName);
        btn.textContent = optText;

        btn.addEventListener('click', () => {
          toxicityTotalScore += (option.p1Score + option.p2Score);
          currentToxicityIndex++;

          calcQuizScreen.classList.remove('fade-in');
          void calcQuizScreen.offsetWidth;
          calcQuizScreen.classList.add('fade-in');

          loadToxicityQuestion();
        });

        calcOptionsContainer.appendChild(btn);
      });
    }
  }

  function finishToxicityQuizAndCalculate() {
    if (calcQuizScreen) {
      calcQuizScreen.style.display = 'none';
      calcQuizScreen.classList.add('hidden');
    }

    // Instant zero-delay result presentation
    showToxicityResults();
  }

  function showToxicityResults() {
    if (calcResultScreen) {
      calcResultScreen.style.display = 'block';
      calcResultScreen.classList.remove('hidden');
      calcResultScreen.classList.add('fade-in');
    }

    const maxPossible = toxicityQuestions.length * 20;
    const normalizedQuizScore = Math.round((toxicityTotalScore / maxPossible) * 100);
    const percentage = calculateDuoToxicityScore(playerName, partnerName, normalizedQuizScore);

    if (calcResultScore) {
      calcResultScore.textContent = `${percentage}%`;
    }

    let badgeText = "";
    let roastText = "";

    if (percentage <= 25) {
      badgeText = "🟢 Surprisingly Healthy Match";
      roastText = `Shockingly, ${playerName} and ${partnerName} have a relatively low toxicity rating! Either you two are genuinely soulmates with healthy communication, or one of you is a criminal mastermind hiding the red flags. Stay vigilant!`;
    } else if (percentage <= 55) {
      badgeText = "⚠️ Chaotic Neutral Chemistry";
      roastText = `${playerName} and ${partnerName}, you two are walking a fine line between 'couple goals' and 'mutual destruction'. You might survive, but keep your therapist on speed dial and stop double-texting at 3 AM!`;
    } else if (percentage <= 80) {
      badgeText = "⚠️ High Toxicity Hazard";
      roastText = `${playerName} and ${partnerName}, your combined energy could cause a blackout in a small city! One of you is definitely leaving the other on read right now while reading this roast. Proceed with extreme caution!`;
    } else {
      badgeText = "BH Critical Nuclear Toxicity Match";
      roastText = `${playerName} and ${partnerName}... RUN FOR THE HILLS! Putting you two together is like mixing mentos with diet coke inside a volcano. Change your legal names, fake your identities, and flee the country separately!`;
    }

    if (calcResultBadgeText) calcResultBadgeText.textContent = badgeText;
    if (calcResultRoast) calcResultRoast.textContent = roastText;
  }

  if (recalcBtn) {
    recalcBtn.addEventListener('click', initDuoSession);
  }

  // Start duo quiz session immediately on page load!
  initDuoSession();
});

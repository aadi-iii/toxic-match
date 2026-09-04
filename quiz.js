/* ==========================================================================
   Red Flag Calculator - Solo Quiz Gameplay Engine (quiz.js)
   ========================================================================== */

let targetName = "";
let currentRedFlagIndex = 0;
let redFlagTotalScore = 0;
let redFlagQuestions = [];

document.addEventListener('DOMContentLoaded', () => {
  const savedName = sessionStorage.getItem('targetName');
  if (!savedName) {
    window.location.href = 'quiz-setup.html';
    return;
  }

  targetName = savedName;

  const quizScreen = document.getElementById('quiz-screen');
  const questionCounter = document.getElementById('question-counter');
  const progressFill = document.getElementById('progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  const resultScreen = document.getElementById('result-screen');
  const resultScore = document.getElementById('result-score');
  const resultBadgeText = document.getElementById('result-badge-text');
  const resultRoast = document.getElementById('result-roast');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');

  function initQuizSession() {
    currentRedFlagIndex = 0;
    redFlagTotalScore = 0;

    // Fresh Fisher-Yates shuffle every single session!
    if (typeof window.getRandomSoloQuestions === 'function') {
      redFlagQuestions = window.getRandomSoloQuestions(10);
    } else if (window.questionBank) {
      const shuffled = [...window.questionBank];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      redFlagQuestions = shuffled.slice(0, 10);
    }

    if (resultScreen) {
      resultScreen.style.display = 'none';
      resultScreen.classList.add('hidden');
    }

    if (quizScreen) {
      quizScreen.style.display = 'block';
      quizScreen.classList.remove('hidden');
      quizScreen.classList.add('fade-in');
    }

    loadRedFlagQuestion();
  }

  function loadRedFlagQuestion() {
    if (currentRedFlagIndex >= redFlagQuestions.length) {
      showRedFlagResults();
      return;
    }

    const currentQ = redFlagQuestions[currentRedFlagIndex];

    if (questionCounter) {
      questionCounter.textContent = `Question ${currentRedFlagIndex + 1} of ${redFlagQuestions.length}`;
    }
    if (progressFill) {
      const progressPercent = ((currentRedFlagIndex + 1) / redFlagQuestions.length) * 100;
      progressFill.style.width = `${progressPercent}%`;
    }

    if (questionText) {
      questionText.textContent = currentQ.text.replace(/\[TARGET\]/g, targetName);
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';

      currentQ.options.forEach((option) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.textContent = option.text.replace(/\[TARGET\]/g, targetName);

        btn.addEventListener('click', () => {
          redFlagTotalScore += option.score;
          currentRedFlagIndex++;

          quizScreen.classList.remove('fade-in');
          void quizScreen.offsetWidth;
          quizScreen.classList.add('fade-in');

          loadRedFlagQuestion();
        });

        optionsContainer.appendChild(btn);
      });
    }
  }

  function showRedFlagResults() {
    if (quizScreen) {
      quizScreen.style.display = 'none';
      quizScreen.classList.add('hidden');
    }

    if (resultScreen) {
      resultScreen.style.display = 'block';
      resultScreen.classList.remove('hidden');
      resultScreen.classList.add('fade-in');
    }

    const maxPossible = redFlagQuestions.length * 10;
    const percentage = Math.min(100, Math.round((redFlagTotalScore / maxPossible) * 100));

    if (resultScore) {
      resultScore.textContent = `${percentage}%`;
    }

    let badgeText = "";
    let roastText = "";

    if (percentage <= 25) {
      badgeText = "🟢 Surprisingly Green Flag";
      roastText = `${targetName} seems shockingly normal! Either you found a rare non-toxic gem, or ${targetName} is an absolute criminal mastermind hiding the evidence. Stay vigilant!`;
    } else if (percentage <= 55) {
      badgeText = "⚠️ Mild Toxicity Caution";
      roastText = `${targetName} definitely has some red flags brewing under the surface. Not full-blown nuclear yet, but keep your eyes open before you end up on a 3 AM rant to your best friends.`;
    } else if (percentage <= 80) {
      badgeText = "🚩 High Toxicity Danger";
      roastText = `${targetName} has enough toxic energy to power a small city. Pack your bags, block their number, and change your Netflix password immediately!`;
    } else {
      badgeText = "BH Critical Nuclear Toxicity";
      roastText = `RUN FOR YOUR LIFE! Change your legal name and fake your identity. ${targetName} is not just a red flag—they are the entire flag factory!`;
    }

    if (resultBadgeText) resultBadgeText.textContent = badgeText;
    if (resultRoast) resultRoast.textContent = roastText;
  }

  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', initQuizSession);
  }

  // Start quiz session immediately on page load!
  initQuizSession();
});

/* ==========================================================================
   Red Flag Calculator - Complete Game Engine (script.js)
   ========================================================================== */

// 1. Global State Variables
let p1Name = "";
let p2Name = "";
let currentQuestionIndex = 0;
let totalRedFlags = 0;

// 2. Humorous Witty Roasting Statuses for External Loading
const funnyRoastingLines = [
  "Digging through past group chats...",
  "Calculating emotional damage...",
  "Zero green flags detected...",
  "Consulting toxic exes for verification..."
];

// 3. Question Bank Array
const questions = [
  {
    text: "How does [PARTNER] react when you ask to see their phone screen?",
    options: [
      { text: "Hands it over unlocked without hesitation.", score: 0 },
      { text: "Tilts the screen 45 degrees away and quickly clears notifications.", score: 10 },
      { text: "Throws the phone out the window and changes the subject instantly.", score: 20 }
    ]
  },
  {
    text: "When you text [PARTNER] 'we need to talk', how long do they take to reply?",
    options: [
      { text: "Instant reply: 'Is everything okay??'", score: 0 },
      { text: "3 hours later: 'My bad, was sleeping' (at 2 PM).", score: 10 },
      { text: "Leaves you on read for 2 days, then posts an IG story at a party.", score: 20 }
    ]
  },
  {
    text: "What is [PARTNER]'s relationship status with their ex?",
    options: [
      { text: "Polite acquaintances or zero contact.", score: 0 },
      { text: "'Best friends' who still talk on Snapchat at 1 AM.", score: 12 },
      { text: "They still share a Netflix account and 'hang out for closure'.", score: 20 }
    ]
  },
  {
    text: "When [PARTNER] messes up, how do they apologize to you?",
    options: [
      { text: "Genuine apology and actually changes their behavior.", score: 0 },
      { text: "'I'm sorry you feel that way' (Classic Gaslight).", score: 12 },
      { text: "Somehow makes it YOUR fault and expects an apology from you.", score: 20 }
    ]
  },
  {
    text: "How does [PARTNER] handle plans on Friday night?",
    options: [
      { text: "Confirms in advance and shows up on time.", score: 0 },
      { text: "Flakes last minute: 'Feeling super drained tonight...'", score: 10 },
      { text: "Disappears until 4 AM, then sends a 'wyd' text.", score: 20 }
    ]
  }
];

// Helper: Capitalizes the first letter of a name
function capitalize(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements Selection
  const setupForm = document.getElementById('setup-form');
  const playerNameInput = document.getElementById('player-name');
  const partnerNameInput = document.getElementById('partner-name');
  const startBtn = document.getElementById('start-btn') || document.getElementById('analyze-btn');
  const mainCard = document.getElementById('main-card');
  const cardLeft = document.querySelector('.card-left');
  const cardRight = document.querySelector('.card-right');
  const statusMessage = document.getElementById('status-message');
  const statusText = document.getElementById('status-text');
  
  // Quiz DOM Elements
  const quizScreen = document.getElementById('quiz-screen');
  const questionCounter = document.getElementById('question-counter');
  const progressFill = document.getElementById('progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  // Result DOM Elements
  const resultScreen = document.getElementById('result-screen');
  const resultScore = document.getElementById('result-score');
  const resultBadgeText = document.getElementById('result-badge-text');
  const resultRoast = document.getElementById('result-roast');
  const restartBtn = document.getElementById('restart-btn');

  /**
   * Displays an inline warning if input validation fails
   */
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
    }, 2500);
  }

  /**
   * Handles setup submission:
   * Validation -> Immediate Crossover Swipe -> External Loading Roasts -> Quiz Launch
   */
  function handleSetupSubmit(e) {
    if (e) e.preventDefault();

    const name1 = playerNameInput.value.trim();
    const name2 = partnerNameInput.value.trim();

    // 1. Validation
    if (!name1) {
      showWarning(playerNameInput, 'Please enter your name!');
      return;
    }

    if (!name2) {
      showWarning(partnerNameInput, "Please enter your partner's name!");
      return;
    }

    // Capture state globally
    p1Name = capitalize(name1);
    p2Name = capitalize(name2);
    currentQuestionIndex = 0;
    totalRedFlags = 0;
    console.log(`[Red Flag Calculator] Started for P1: "${p1Name}", P2: "${p2Name}"`);

    // Lock inputs immediately
    playerNameInput.disabled = true;
    partnerNameInput.disabled = true;
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.style.opacity = '0.6';
    }

    // STEP 1 (Immediate Crossover Swipe): Trigger 1.0s pane crossover transition
    if (cardLeft) cardLeft.classList.add('swipe-crossover-left');
    if (cardRight) cardRight.classList.add('swipe-crossover-right');
    if (mainCard) mainCard.classList.add('dimmed-pane');

    // STEP 2 (External Loading): Reveal #status-message below the card immediately
    if (statusMessage) {
      statusMessage.style.display = 'flex';
      statusMessage.classList.remove('hidden');
      statusMessage.classList.add('fade-in');
    }

    if (statusText) {
      statusText.textContent = funnyRoastingLines[0];
    }

    // Cycle roasting lines every 750ms
    let lineIndex = 0;
    const intervalId = setInterval(() => {
      lineIndex = (lineIndex + 1) % funnyRoastingLines.length;
      if (statusText) {
        statusText.textContent = funnyRoastingLines[lineIndex];
      }
    }, 750);

    // STEP 3 (Quiz Launch): After 2.2 seconds loading duration
    setTimeout(() => {
      clearInterval(intervalId);

      // Hide setup card and external status message
      if (mainCard) {
        mainCard.style.display = 'none';
        mainCard.classList.add('hidden');
      }

      if (statusMessage) {
        statusMessage.style.display = 'none';
        statusMessage.classList.add('hidden');
      }

      // Show Quiz Screen and render first question
      if (quizScreen) {
        quizScreen.style.display = 'block';
        quizScreen.classList.remove('hidden');
        quizScreen.classList.add('fade-in');
      }

      loadQuestion();
    }, 2200);
  }

  /**
   * Dynamically renders the current question with personalized name placeholders
   */
  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showResults();
      return;
    }

    const currentQ = questions[currentQuestionIndex];

    // Update Counter & Progress Fill Bar
    if (questionCounter) {
      questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }
    if (progressFill) {
      const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
      progressFill.style.width = `${progressPercent}%`;
    }

    // Inject personalized partner name into question text
    if (questionText) {
      const formattedQText = currentQ.text.replace(/\[PARTNER\]/g, p2Name);
      questionText.textContent = formattedQText;
    }

    // Render Option Buttons dynamically
    if (optionsContainer) {
      optionsContainer.innerHTML = ''; // Clear previous options

      currentQ.options.forEach((option) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        
        // Personalize option text if needed
        btn.textContent = option.text.replace(/\[PARTNER\]/g, p2Name);

        // Option Click Event
        btn.addEventListener('click', () => {
          totalRedFlags += option.score;
          currentQuestionIndex++;
          
          // Animate transition between questions
          quizScreen.classList.remove('fade-in');
          void quizScreen.offsetWidth; // Trigger reflow
          quizScreen.classList.add('fade-in');

          loadQuestion();
        });

        optionsContainer.appendChild(btn);
      });
    }
  }

  /**
   * Calculates toxicity percentage and renders savage customized verdict
   */
  function showResults() {
    // Hide Quiz Screen and Show Result Screen
    if (quizScreen) {
      quizScreen.style.display = 'none';
      quizScreen.classList.add('hidden');
    }

    if (resultScreen) {
      resultScreen.style.display = 'block';
      resultScreen.classList.remove('hidden');
      resultScreen.classList.add('fade-in');
    }

    // Calculate Percentage based on max score (max possible score per question is 20)
    const maxScore = questions.length * 20;
    const percentage = Math.min(100, Math.round((totalRedFlags / maxScore) * 100));

    // Update Percentage Score Heading
    if (resultScore) {
      resultScore.textContent = `${percentage}%`;
    }

    // Determine Savage Verdict & Badge based on percentage tier
    let badgeText = "";
    let roastText = "";

    if (percentage <= 25) {
      badgeText = "🟢 Surprisingly Green Flag";
      roastText = `Well ${p1Name}, ${p2Name} seems shockingly normal! Either you found a rare non-toxic gem, or ${p2Name} is an absolute criminal mastermind hiding the evidence. Stay vigilant!`;
    } else if (percentage <= 55) {
      badgeText = "⚠️ Mild Toxicity Caution";
      roastText = `Listen ${p1Name}, ${p2Name} definitely has some red flags brewing under the surface. Not full-blown nuclear yet, but keep your eyes wide open before you end up on a 3 AM rant to your group chat.`;
    } else if (percentage <= 80) {
      badgeText = "🚩 High Toxicity Danger";
      roastText = `${p1Name}, you are swimming in a sea of red flags! ${p2Name} has enough toxic energy to power a small city. Pack your bags, block their number, and change your Netflix password immediately!`;
    } else {
      badgeText = "☣️ Critical Nuclear Toxicity";
      roastText = `${p1Name}... RUN FOR YOUR LIFE! Change your legal name, move to another continent, and fake your own identity. ${p2Name} is not just a red flag—they are the entire flag factory!`;
    }

    if (resultBadgeText) {
      resultBadgeText.textContent = badgeText;
    }
    if (resultRoast) {
      resultRoast.textContent = roastText;
    }
  }

  /**
   * Resets all game state and restores initial setup view
   */
  function handleRestart() {
    // Reset State Variables
    p1Name = "";
    p2Name = "";
    currentQuestionIndex = 0;
    totalRedFlags = 0;

    // Reset Form Inputs
    playerNameInput.value = "";
    partnerNameInput.value = "";
    playerNameInput.disabled = false;
    partnerNameInput.disabled = false;
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.style.opacity = '1';
    }

    // Reset Card Animations & Classes
    if (cardLeft) cardLeft.classList.remove('swipe-crossover-left');
    if (cardRight) cardRight.classList.remove('swipe-crossover-right');
    if (mainCard) {
      mainCard.classList.remove('dimmed-pane');
      mainCard.style.display = 'flex';
      mainCard.classList.remove('hidden');
      mainCard.classList.add('fade-in');
    }

    // Hide Result & Quiz Screens & Status Message
    if (resultScreen) {
      resultScreen.style.display = 'none';
      resultScreen.classList.add('hidden');
    }
    if (quizScreen) {
      quizScreen.style.display = 'none';
      quizScreen.classList.add('hidden');
    }
    if (statusMessage) {
      statusMessage.style.display = 'none';
      statusMessage.classList.add('hidden');
    }
  }

  // Event Listeners
  if (setupForm) {
    setupForm.addEventListener('submit', handleSetupSubmit);
  }
  if (startBtn) {
    startBtn.addEventListener('click', handleSetupSubmit);
  }
  if (restartBtn) {
    restartBtn.addEventListener('click', handleRestart);
  }
});

/* ==========================================================================
   Red Flag Calculator - Solo Quiz Data Bank (questions.js)
   Curated Elite Savage Gen-Z Relationship Questions Pool
   ========================================================================== */

const questionBank = [
  // --- Group 1: Toxic Texting & Communication ---
  {
    text: "How long does [TARGET] take to reply to your afternoon text message?",
    options: [
      { text: "Replies within minutes or lets you know if they're busy.", score: 0 },
      { text: "Takes 4 hours to reply, but is actively posting on Instagram/Twitter.", score: 6 },
      { text: "Leaves you on read for 3 business days, then texts 'wyd' at 3 AM like nothing happened.", score: 10 }
    ]
  },
  {
    text: "When [TARGET] gets slightly annoyed during a text chat, what is their signature response?",
    options: [
      { text: "Communicates calmly and explains what bothered them.", score: 0 },
      { text: "Hits you with cold one-word answers: 'Fine.', 'K.', 'Whatever.'", score: 6 },
      { text: "Leaves the typing bubble visible for 15 minutes then hits you with a sarcastic 'lol okay'.", score: 10 }
    ]
  },
  {
    text: "What happens when you send [TARGET] a long, heartfelt paragraph explaining your feelings?",
    options: [
      { text: "Sends a sweet, thoughtful reply addressing every single point.", score: 0 },
      { text: "Replies with 'Damn that's crazy' or 'I ain't reading all that'.", score: 7 },
      { text: "Leaves you on read for 6 hours, then sends a random meme without acknowledging it.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you text them 'we need to talk'?",
    options: [
      { text: "Instantly replies: 'Is everything okay? Calling you right now.'", score: 0 },
      { text: "Waits 3 hours then texts: 'My bad was sleeping' at 4 PM.", score: 6 },
      { text: "Turns off read receipts, posts an IG story at a party, and ghosts for 24 hours.", score: 10 }
    ]
  },
  {
    text: "When you don't reply to [TARGET] for 20 minutes because you're busy, how do they react?",
    options: [
      { text: "Patiently waits or sends a lighthearted check-in.", score: 0 },
      { text: "Spams '???' and accuses you of ignoring them on purpose.", score: 6 },
      { text: "Posts a spicy thirst trap on their IG story to see if you'll view it.", score: 10 }
    ]
  },

  // --- Group 2: Social Media, Soft-Launching & Orbiters ---
  {
    text: "How does [TARGET] handle posting you on their social media accounts?",
    options: [
      { text: "Hard-launches you on main feed with cute pictures and tags.", score: 0 },
      { text: "Soft-launches only an aesthetic photo of your arm, watch, or drinks.", score: 5 },
      { text: "Refuses to post you at all claiming 'social media is toxic energy for relationships'.", score: 10 }
    ]
  },
  {
    text: "What happens when you tag [TARGET] in a romantic couple reel or TikTok?",
    options: [
      { text: "Comments something sweet immediately and reposts to their story.", score: 0 },
      { text: "Likes the comment but hides the tagged photo from their main profile grid.", score: 6 },
      { text: "Ignores the tag completely and posts a solo mirror selfie 5 minutes later.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s Instagram Close Friends story situation?",
    options: [
      { text: "You're on it, and it's mostly unhinged funny memes.", score: 0 },
      { text: "You found out after 6 months of dating that you weren't even added.", score: 6 },
      { text: "Has a Close Friends story meant exclusively for 45 flirty orbiters and exes.", score: 10 }
    ]
  },
  {
    text: "What does [TARGET]'s social media bio look like during a minor disagreement?",
    options: [
      { text: "Stays completely normal and untouched.", score: 0 },
      { text: "Removes matching initial/emoji and posts cryptic song lyrics on story.", score: 7 },
      { text: "Wipes bio, archives all your photos, and unfollows your best friends instantly.", score: 10 }
    ]
  },
  {
    text: "How fast does [TARGET] view Instagram stories posted by their exes?",
    options: [
      { text: "Doesn't follow their exes or watch their content.", score: 0 },
      { text: "Within 2 hours of posting, 'just out of curiosity'.", score: 5 },
      { text: "Within 30 seconds at 2 AM from a secret burner account.", score: 10 }
    ]
  },

  // --- Group 3: Phone Privacy & Stealth Habits ---
  {
    text: "How does [TARGET] position their phone screen when sitting right next to you?",
    options: [
      { text: "Lays it flat face-up on the table without a care in the world.", score: 0 },
      { text: "Tilts the screen 45 degrees away and turns off lock-screen notification previews.", score: 6 },
      { text: "Flips it face-down instantly whenever you glance in their direction.", score: 10 }
    ]
  },
  {
    text: "What happens if you casually pick up [TARGET]'s phone to check the time or change the song?",
    options: [
      { text: "Doesn't care at all and tells you the passcode.", score: 0 },
      { text: "Watches your fingers like a hawk until you put it down.", score: 6 },
      { text: "Snatches it out of your hand like you just grabbed a live grenade.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s phone passcode policy?",
    options: [
      { text: "Shared passcodes or face ID registered.", score: 0 },
      { text: "Changes passcode every 3 weeks 'for digital security'.", score: 6 },
      { text: "Uses a 12-digit military-grade passcode and hides apps inside a calculator vault.", score: 10 }
    ]
  },
  {
    text: "What is stored in [TARGET]'s phone photo gallery or hidden album?",
    options: [
      { text: "Memes, pets, screenshots, and cute pictures of you.", score: 0 },
      { text: "A hidden folder titled 'Memories' containing 500 photos of their ex.", score: 7 },
      { text: "Screenshots of flirty Snapchat chats with people they claim are 'just homies'.", score: 10 }
    ]
  },

  // --- Group 4: Emotional Gaslighting & Deflection ---
  {
    text: "When you bring up a issue or something that hurt your feelings, how does [TARGET] react?",
    options: [
      { text: "Listens attentively, apologizes, and validates your emotions.", score: 0 },
      { text: "Gets defensive and accuses you of 'overthinking' or 'creating drama'.", score: 6 },
      { text: "Brings up an argument from 8 months ago during a casual chat to deflect responsibility.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] describe all of their ex-partners to you?",
    options: [
      { text: "Respectfully acknowledges past relationships ended mutually.", score: 0 },
      { text: "Avoids talking about them or acts indifferent.", score: 5 },
      { text: "Claims literally EVERY SINGLE ex was 'psycho and crazy' while keeping secret snap streaks with them.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s go-to excuse when they get caught making a questionable move?",
    options: [
      { text: "Takes full accountability and apologizes sincerely.", score: 0 },
      { text: "Blames Mercury retrograde or says 'I was just really stressed'.", score: 6 },
      { text: "Hits you with 'I guess I'm just a horrible person then' so you end up comforting THEM.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] treat boundaries you explicitly set in the relationship?",
    options: [
      { text: "Respects them completely without question.", score: 0 },
      { text: "Pushes the line occasionally and asks 'Is it really that big of a deal?'", score: 6 },
      { text: "Calls your boundaries 'controlling' while enforcing strict rules on YOU.", score: 10 }
    ]
  },

  // --- Group 5: Relationship Tropes & Public Vibe Checks ---
  {
    text: "How does [TARGET] treat waitstaff, baristas, or retail workers when you're out together?",
    options: [
      { text: "Extremely polite, says please/thank you, and tips generously.", score: 0 },
      { text: "Slightly impatient and sighs loudly when there's a small delay.", score: 6 },
      { text: "Rude, condescending, and snaps fingers to get the waiter's attention.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s definition of 'we're taking things slow'?",
    options: [
      { text: "Building a genuine connection step-by-step before committing.", score: 0 },
      { text: "Acting like a full married couple in private, but single in public.", score: 7 },
      { text: "Dating 4 other people simultaneously while keeping you on standby as option B.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] act when you introduce them to your closest friends?",
    options: [
      { text: "Friendly, engaging, and makes a great effort to get along.", score: 0 },
      { text: "Sits on their phone the entire night and gives one-word answers.", score: 6 },
      { text: "Trash-talks your best friends in the car on the ride home.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you like a photo of a celebrity or creator online?",
    options: [
      { text: "Laughs and agrees the person is attractive.", score: 0 },
      { text: "Sulkily asks 'So I guess I'm not good enough for you?'", score: 7 },
      { text: "Goes on a spree liking 50 pictures of their ex's best friend.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle playing competitive board games or video games with you?",
    options: [
      { text: "Has fun and encourages you regardless of who wins.", score: 0 },
      { text: "Gets overly competitive and trash-talks your skills.", score: 6 },
      { text: "Rage-quits, throws the controller, and refuses to speak to you for hours.", score: 10 }
    ]
  },
  {
    text: "When [TARGET] goes out to a party or club without you, what is their communication like?",
    options: [
      { text: "Sends cute updates and texts you when they get home safely.", score: 0 },
      { text: "Disappears for 7 hours, then texts 'battery was 1%' at 5 AM.", score: 7 },
      { text: "Completely turns off location and posts stories with attractive strangers.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response when you mention future plans like a trip next summer?",
    options: [
      { text: "Gets excited and starts looking up hotels or activities with you.", score: 0 },
      { text: "Nods vaguely and says 'Yeah maybe, let's see how things go'.", score: 6 },
      { text: "Panics and says 'Whoa, let's not put labels or timelines on anything'.", score: 10 }
    ]
  }
];

/**
 * Fisher-Yates Randomizer for Solo Red Flag Questions
 * Shuffles the entire curated elite question pool on every session start!
 */
function getRandomSoloQuestions(count = 10) {
  const shuffled = [...questionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Expose globally
window.questionBank = questionBank;
window.getRandomSoloQuestions = getRandomSoloQuestions;

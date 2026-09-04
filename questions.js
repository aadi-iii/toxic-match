/* ==========================================================================
   Red Flag Calculator - Solo Quiz Data Bank (questions.js)
   100+ Fully Handcrafted, Distinct Gen-Z Relationship Questions
   ========================================================================== */

const questionBank = [
  // --- Group 1: Social Media & Soft-Launching ---
  {
    text: "How does [TARGET] handle posting you on social media?",
    options: [
      { text: "Hard-launches you on main feed with cute photos.", score: 0 },
      { text: "Soft-launches only an aesthetic photo of your arm or drinks.", score: 5 },
      { text: "Refuses to post you at all because 'social media is toxic energy'.", score: 10 }
    ]
  },
  {
    text: "What happens when you tag [TARGET] in a couple reel or TikTok?",
    options: [
      { text: "Comments something sweet immediately and reposts to story.", score: 0 },
      { text: "Likes the comment but hides the tagged photo from their profile.", score: 6 },
      { text: "Ignores the tag and posts a solo mirror selfie 5 minutes later.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s Instagram Close Friends list situation?",
    options: [
      { text: "You're on it, and it's mostly funny inner-circle memes.", score: 0 },
      { text: "You found out after 6 months you weren't even on it.", score: 6 },
      { text: "Has a Close Friends story meant exclusively for 40 flirty orbiters.", score: 10 }
    ]
  },
  {
    text: "How fast does [TARGET] view Instagram stories from their exes?",
    options: [
      { text: "Doesn't follow their exes or view their stories.", score: 0 },
      { text: "Within 2 hours of posting, 'just out of curiosity'.", score: 5 },
      { text: "Within 30 seconds of posting, at 2 AM, on a secret burner account.", score: 10 }
    ]
  },
  {
    text: "What does [TARGET]'s Instagram bio look like during a minor argument?",
    options: [
      { text: "Stays completely normal and untouched.", score: 0 },
      { text: "Removes matching initial/emoji and posts cryptic quote stories.", score: 7 },
      { text: "Wipes bio, archives all photos, and unfollows your best friend.", score: 10 }
    ]
  },

  // --- Group 2: Texting & Communication ---
  {
    text: "How long does [TARGET] take to reply to your afternoon text?",
    options: [
      { text: "Replies within minutes or lets you know if busy.", score: 0 },
      { text: "Takes 4 hours but is actively liking posts on Twitter/X.", score: 6 },
      { text: "Leaves on read for 2 days, then texts 'wyd' at 3 AM like nothing happened.", score: 10 }
    ]
  },
  {
    text: "When you text [TARGET] 'we need to talk', how do they react?",
    options: [
      { text: "Instant reply: 'Is everything okay? I'm free to call now.'", score: 0 },
      { text: "3 hours later: 'My bad, was sleeping' (at 3 PM).", score: 5 },
      { text: "Turns off phone notifications and posts an IG story at a party.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] text when they get mad at you?",
    options: [
      { text: "Expresses feelings clearly and asks to discuss.", score: 0 },
      { text: "One-word answers: 'Fine.', 'K.', 'Whatever.'", score: 6 },
      { text: "Leaves typing bubble visible for 10 minutes then hits you with an essay.", score: 9 }
    ]
  },
  {
    text: "What is [TARGET]'s favorite text emoji when dodging a deep conversation?",
    options: [
      { text: "Uses genuine heart or hug emojis.", score: 0 },
      { text: "Hits you with the awkward thumbs-up or finger-guns emoji.", score: 6 },
      { text: "Sends a sarcastic skull emoji or 'lol okay' to invalidate you.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle double-texting when you haven't replied yet?",
    options: [
      { text: "Patiently waits or sends a lighthearted follow-up.", score: 0 },
      { text: "Sends '???', 'Guess you're dead then' within 15 minutes.", score: 6 },
      { text: "Starts posting thirst traps on story to see if you'll view them.", score: 10 }
    ]
  },

  // --- Group 3: Phone Privacy & Digital Boundaries ---
  {
    text: "How does [TARGET] position their phone screen when sitting next to you?",
    options: [
      { text: "Lays it flat face-up on the table without care.", score: 0 },
      { text: "Tilts the screen 45 degrees away and turns off lock-screen previews.", score: 6 },
      { text: "Flips it face-down instantly whenever you glance in their direction.", score: 10 }
    ]
  },
  {
    text: "What happens if [TARGET] gets a notification while showing you a video?",
    options: [
      { text: "Ignores it or lets you hold the phone.", score: 0 },
      { text: "Snatches the phone back with lightning reflexes and clears banner.", score: 7 },
      { text: "Panics, locks screen instantly, and asks why you were staring.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s Snapchat streak situation?",
    options: [
      { text: "Barely uses Snapchat or only has streaks with family.", score: 0 },
      { text: "Maintains 500-day streaks with 15 random attractive acquaintances.", score: 6 },
      { text: "Sends blank black-screen snaps every morning to a roster of 30 people.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s password / Face ID policy on their phone?",
    options: [
      { text: "Your Face ID is added or they unlock it freely around you.", score: 0 },
      { text: "Changes passcode every 2 weeks 'for cyber security'.", score: 6 },
      { text: "Shields their screen like entering a PIN at an ATM when typing passcodes.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response if you ask who just texted them at 1:30 AM?",
    options: [
      { text: "'Oh just Sam asking about tomorrow!'", score: 0 },
      { text: "'Why are you interrogating me? Don't you trust me?'", score: 7 },
      { text: "Deletes the text thread right before handing you the phone.", score: 10 }
    ]
  },

  // --- Group 4: Exes & Roster Management ---
  {
    text: "How does [TARGET] describe their previous exes?",
    options: [
      { text: "Respectful, neutral: 'We just wanted different things.'", score: 0 },
      { text: "Claims 'every single one of my exes was an absolute psycho'.", score: 7 },
      { text: "Claims they 'never really had feelings' for any exes.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s active relationship with their primary ex?",
    options: [
      { text: "Zero contact or polite annual birthday text.", score: 0 },
      { text: "'Best friends' who call each other late at night for advice.", score: 7 },
      { text: "Still shares a Netflix/Spotify account and 'hangs out for closure'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] treat their dating app profiles (Hinge, Tinder, Bumble)?",
    options: [
      { text: "Deleted the apps immediately when you agreed to be exclusive.", score: 0 },
      { text: "Keeps apps downloaded 'just to read funny bios with friends'.", score: 7 },
      { text: "Pauses profile instead of deleting, or updates photos periodically.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s concept of a 'Roster'?",
    options: [
      { text: "Only talks to one person at a time when interested.", score: 0 },
      { text: "Keeps 2-3 backup options on bench 'just in case things fail'.", score: 7 },
      { text: "Actively manages a 5-person roster and boasts about it to friends.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when an ex comments on their photo with a fire emoji?",
    options: [
      { text: "Ignores or deletes the comment.", score: 0 },
      { text: "Likes the comment and replies with a wink emoji.", score: 6 },
      { text: "Pins the ex's comment to the top of the post.", score: 10 }
    ]
  },

  // --- Group 5: Situationships & Commitment ---
  {
    text: "What happens when you try to Define The Relationship (DTR) with [TARGET]?",
    options: [
      { text: "Clear, honest conversation aligning expectations.", score: 0 },
      { text: "'I really like you, but I'm just focusing on myself right now'.", score: 6 },
      { text: "'Why do we need labels? Can't we just go with the flow?' after 8 months.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] introduce you to their casual acquaintances in public?",
    options: [
      { text: "'This is [Your Name], my partner/date!'", score: 0 },
      { text: "'This is my friend [Your Name]'", score: 6 },
      { text: "Mumbles your name quickly without specifying your relation.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] handle breadcrumbing (minimum effort to keep you hooked)?",
    options: [
      { text: "Consistent effort, regular dates, clear communication.", score: 0 },
      { text: "Disappears for a week, then sends 'thinking of you' to keep you warm.", score: 7 },
      { text: "Only reaches out when their main plans fall through on weekends.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response when discussing plans 3 months in advance?",
    options: [
      { text: "Excitedly puts it in their calendar and commits.", score: 0 },
      { text: "'Let's check back closer to the date, I can't plan that far ahead'.", score: 5 },
      { text: "Gives a vague 'maybe' and never brings it up again.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] handle future-faking (making big promises about trips/living together)?",
    options: [
      { text: "Makes realistic plans and actually follows through.", score: 0 },
      { text: "Promises lavish vacations during honeymoon phase that never happen.", score: 6 },
      { text: "Talks about moving in together on week 2, then pulls back completely.", score: 10 }
    ]
  },

  // --- Group 6: Gaslighting & Therapy-Speak ---
  {
    text: "How does [TARGET] weaponize 'therapy speak' during arguments?",
    options: [
      { text: "Uses constructive communication skills to solve conflicts.", score: 0 },
      { text: "Accuses you of 'projecting your trauma' whenever you bring up concerns.", score: 7 },
      { text: "Calls your boundaries 'toxic control' and claims they are 'protecting peace'.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s go-to line when caught in a clear mistake?",
    options: [
      { text: "'I messed up, I am so sorry, how can I fix this?'", score: 0 },
      { text: "'I'm sorry you feel that way' (Non-apology).", score: 6 },
      { text: "'You are misremembering things, you're acting totally crazy right now.'", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle weaponized incompetence (pretending not to know simple tasks)?",
    options: [
      { text: "Tries their best and learns how to do chores/tasks.", score: 0 },
      { text: "Does a terrible job on purpose so you'll never ask them again.", score: 6 },
      { text: "Sighs and says 'You're just so much better at it than me!'.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you express hurt over something they said?",
    options: [
      { text: "Apologizes immediately and listens to your feeling.", score: 0 },
      { text: "'It was just a joke! You're way too sensitive.'", score: 7 },
      { text: "Turns it into a 2-hour rant about how YOU hurt THEM last month.", score: 10 }
    ]
  },
  {
    text: "What happens when you ask [TARGET] for a straight answer on a simple question?",
    options: [
      { text: "Gives a direct yes/no or clear answer.", score: 0 },
      { text: "Talks in circles for 5 minutes without answering.", score: 5 },
      { text: "Flips the question back on you: 'Why are you interrogating me?'", score: 9 }
    ]
  },

  // --- Group 7: Financial Red Flags & Venmo Habits ---
  {
    text: "How does [TARGET] handle splitting a $12 dinner or coffee bill?",
    options: [
      { text: "Takes turns paying or splits without stress.", score: 0 },
      { text: "Sends a Venmo request for $6.43 including tax and tip.", score: 5 },
      { text: "'Accidentally' forgets wallet every time the check arrives.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s money management vibe?",
    options: [
      { text: "Saves responsibly and spends within means.", score: 0 },
      { text: "Buys $300 designer shoes while complaining about rent.", score: 5 },
      { text: "Borrows money from you for 'emergencies' and never repays.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you pay for a nice date?",
    options: [
      { text: "Genuinely thankful and offers to get dessert/next date.", score: 0 },
      { text: "Takes it for granted without saying thank you.", score: 5 },
      { text: "Orders the most expensive steak and cocktail then leaves early.", score: 9 }
    ]
  },
  {
    text: "What is [TARGET]'s flex culture behavior on social media?",
    options: [
      { text: "Humble, normal posts.", score: 0 },
      { text: "Posts steering wheel flexes with borrowed luxury cars.", score: 5 },
      { text: "Rents Airbnb mansions for 1 hour to shoot 'lifestyle' content.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] treat service staff (waiters, drivers, baristas)?",
    options: [
      { text: "Super polite, tips well, and says thank you.", score: 0 },
      { text: "Slightly impatient and forgets basic manners.", score: 5 },
      { text: "Snaps fingers, condescending, and leaves 1-star reviews over minor things.", score: 10 }
    ]
  },

  // --- Group 8: Party Behavior & Flirting ---
  {
    text: "What is [TARGET]'s behavior when you go to a crowded party together?",
    options: [
      { text: "Introduces you to everyone and stays close by.", score: 0 },
      { text: "Ditches you for 2 hours to talk to strangers.", score: 5 },
      { text: "Flirts with other people right in front of your face.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when someone flirts with them in public?",
    options: [
      { text: "Politely shuts it down: 'I have a partner!'", score: 0 },
      { text: "Giggles and plays along: 'I was just being nice!'", score: 6 },
      { text: "Exchanges Instagram handles and pretends you're just a roommate.", score: 10 }
    ]
  },
  {
    text: "What happens when [TARGET] gets drunk at a social event?",
    options: [
      { text: "Becomes extra affectionate and tells you how great you are.", score: 0 },
      { text: "Starts unnecessary arguments over tiny things.", score: 6 },
      { text: "Disappears, turns off location, and calls an ex at 3 AM.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle public displays of affection (PDA)?",
    options: [
      { text: "Holds hands and shows affection comfortably.", score: 0 },
      { text: "Pulls away as soon as someone they know walks past.", score: 6 },
      { text: "Actively tells you to 'stop clinging' in front of friends.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you get attention from someone else at a venue?",
    options: [
      { text: "Confident, proud, and puts an arm around you.", score: 0 },
      { text: "Gets insecure and sulks in the corner for the night.", score: 5 },
      { text: "Makes a huge scene and accuses you of inviting the attention.", score: 10 }
    ]
  },

  // --- Group 9: Astrology, Attachment & Mindsets ---
  {
    text: "How does [TARGET] use astrology / MBTI / attachment styles during fights?",
    options: [
      { text: "Doesn't use them to excuse bad behavior.", score: 0 },
      { text: "'Sorry I ghosted you for 3 days, I'm an Avoidant Scorpio!'.", score: 7 },
      { text: "Uses your sign to prove why you are 'fundamentally incompatible'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] view self-improvement or therapy?",
    options: [
      { text: "Actively works on personal growth and self-awareness.", score: 0 },
      { text: "Claims 'I don't need therapy, I just solve problems at the gym'.", score: 4 },
      { text: "Uses therapy buzzwords to gaslight you while refusing to change.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s attachment style vibe during moments of vulnerability?",
    options: [
      { text: "Secure, communicative, and validating.", score: 0 },
      { text: "Anxious-preoccupied: needs constant reassurance every 5 minutes.", score: 5 },
      { text: "Extreme Fearful-Avoidant: pulls away the second feelings get real.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you try to share your deepest insecurities?",
    options: [
      { text: "Listens intently and comforts you softly.", score: 0 },
      { text: "Gives generic advice like 'just don't think about it bro'.", score: 5 },
      { text: "Brings up those exact insecurities later during an argument.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you read them a relationship post on TikTok?",
    options: [
      { text: "Discusses it playfully and compares thoughts.", score: 0 },
      { text: "Rolls eyes and calls it 'brain rot'.", score: 4 },
      { text: "Gets defensive: 'Are you trying to say I do that??'", score: 8 }
    ]
  },

  // --- Group 10: Friends & Family Dynamics ---
  {
    text: "How does [TARGET] treat your best friends when meeting them?",
    options: [
      { text: "Super warm, makes an effort to engage and laugh.", score: 0 },
      { text: "Bored, checks phone constantly, gives 1-word answers.", score: 6 },
      { text: "Tries to turn your friends against you or roasts you in front of them.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s friend group demographic?",
    options: [
      { text: "Healthy mix of genuine, supportive friends.", score: 0 },
      { text: "Group of toxic friends who cheat on partners and hype it up.", score: 7 },
      { text: "Has zero long-term friends because 'people are snakes'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] act when you invite them to a family dinner?",
    options: [
      { text: "Dresses nicely, brings a small gift/dessert, super polite.", score: 0 },
      { text: "Complains about going the entire drive there.", score: 5 },
      { text: "Flakes 10 minutes before: 'Something urgent came up'.", score: 9 }
    ]
  },
  {
    text: "What does [TARGET] do when your friends express a concern about them?",
    options: [
      { text: "Tries to understand their perspective and clear misunderstandings.", score: 0 },
      { text: "Demands that you block or stop talking to those friends.", score: 8 },
      { text: "Forces you to choose between them and your best friend.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] talk to their own mother / parents?",
    options: [
      { text: "Loving, respectful, and thoughtful.", score: 0 },
      { text: "Ignores their calls and complains about them.", score: 5 },
      { text: "Yells at them or demands money disrespectfully.", score: 9 }
    ]
  },

  // --- Group 11: Spotify, Hobbies & Quirks ---
  {
    text: "What is [TARGET]'s Spotify blend / playlist situation?",
    options: [
      { text: "Fun, diverse music taste you both enjoy.", score: 0 },
      { text: "Listens exclusively to heartbreak/sad songs when mad at you.", score: 5 },
      { text: "Has a playlist titled 'Single Era' saved in drafts.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you get passionate about your hobby?",
    options: [
      { text: "Encourages you and listens enthusiastically.", score: 0 },
      { text: "Zones out completely and scrolls TikTok.", score: 5 },
      { text: "Mocks your hobby and calls it a 'total waste of time'.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s gym / mirror selfie culture?",
    options: [
      { text: "Works out for health/fitness, normal posts.", score: 0 },
      { text: "Posts daily thirst traps with vague inspirational quotes.", score: 5 },
      { text: "Spends 45 minutes filming others at gym for TikTok clout.", score: 8 }
    ]
  },
  {
    text: "How does [TARGET] react when you take a bite of their food?",
    options: [
      { text: "Offers you the best piece gladly!", score: 0 },
      { text: "Protects their plate like a feral animal: 'Get your own!'.", score: 4 },
      { text: "Gives you a bite then holds it over your head for a week.", score: 8 }
    ]
  },
  {
    text: "How does [TARGET] handle playing competitive board/video games with you?",
    options: [
      { text: "Has fun, laughs, and plays fairly.", score: 0 },
      { text: "Pouts silently if you win.", score: 4 },
      { text: "Rage quits, slams controller/board, and accuses you of cheating.", score: 10 }
    ]
  },

  // --- Group 12: Double Standards & Jealousy ---
  {
    text: "How does [TARGET] handle double standards in your relationship?",
    options: [
      { text: "Same rules apply to both of you equally.", score: 0 },
      { text: "Can go out till 4 AM, but gets mad if you're out past 11 PM.", score: 8 },
      { text: "Has 50 platonic opposite-gender besties, but you can't have 1.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you mention an attractive celebrity?",
    options: [
      { text: "Laughs it off or agrees playfully.", score: 0 },
      { text: "Gets visibly insecure and starts comparing stats.", score: 5 },
      { text: "Lists 10 celebrities they'd hook up with in revenge.", score: 9 }
    ]
  },
  {
    text: "What happens when someone hits on [TARGET] online (DMs)?",
    options: [
      { text: "Ignores or blocks them immediately.", score: 0 },
      { text: "Leaves them on read but shows friends for ego boost.", score: 5 },
      { text: "Keeps a flirty conversation going 'just to network'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react if you don't answer a call on the 1st ring?",
    options: [
      { text: "Leaves a quick text: 'Call back when free!'", score: 0 },
      { text: "Calls 7 times in a row in full panic mode.", score: 6 },
      { text: "Accuses you of cheating because you were in shower for 10 mins.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you hang out with your childhood friends?",
    options: [
      { text: "Happy for you and takes time to do their own things.", score: 0 },
      { text: "Spams your phone with 'wyd' texts every 15 minutes.", score: 6 },
      { text: "Starts a massive argument right before you leave home.", score: 10 }
    ]
  },

  // --- Group 13: Gifts, Driving & Boundaries ---
  {
    text: "What is [TARGET]'s gift-giving behavior on anniversaries?",
    options: [
      { text: "Thoughtful gift based on small details you mentioned months ago.", score: 0 },
      { text: "Generic gift card bought 5 minutes before dinner.", score: 5 },
      { text: "Buys something THEY wanted and lets you 'borrow' it.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] handle driving when you're in the passenger seat?",
    options: [
      { text: "Drives safely and asks if music volume is okay.", score: 0 },
      { text: "Road rages at every car while speeding dangerously.", score: 6 },
      { text: "Texts and scrolls TikTok while driving 70mph on highway.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you achieve something big at work/school?",
    options: [
      { text: "Proudly brags about you to everyone!", score: 0 },
      { text: "Gives a quick 'nice' and shifts topic back to themselves.", score: 5 },
      { text: "Diminishes it: 'Well anyone could do that with easy tasks'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you get sick or have a fever?",
    options: [
      { text: "Brings medicine, soup, and looks after you.", score: 0 },
      { text: "Texts 'get well soon' and disappears for the weekend.", score: 5 },
      { text: "Complains that YOUR illness ruined THEIR weekend plans.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response when you set a healthy boundary?",
    options: [
      { text: "Respects it completely without making you feel bad.", score: 0 },
      { text: "Pushes the boundary while testing how serious you are.", score: 5 },
      { text: "Calls your boundary 'toxic control' and ignores it.", score: 10 }
    ]
  },

  // --- Group 14: Loyalty & Communication ---
  {
    text: "How does [TARGET] handle micro-cheating (flirty comments, hiding stories)?",
    options: [
      { text: "Zero tolerance, completely loyal.", score: 0 },
      { text: "Claims 'flirting isn't cheating if we haven't touched!'.", score: 7 },
      { text: "Actively micro-cheats and blames you for being paranoid.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s behavior when you ask for emotional support?",
    options: [
      { text: "Listens attentively and validates your feelings.", score: 0 },
      { text: "Gives surface advice: 'Just don't stress bro'.", score: 4 },
      { text: "Makes it about themselves: 'You think YOU have it bad??'", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle secret keeping?",
    options: [
      { text: "Keeps your secrets safe forever.", score: 0 },
      { text: "Tells their best friend: 'Don't tell anyone BUT...'", score: 6 },
      { text: "Spills your secrets during fights to embarrass you.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction to you making new friends?",
    options: [
      { text: "Encourages you and loves seeing you expand your social circle.", score: 0 },
      { text: "Acts suspiciously toward any new person you meet.", score: 6 },
      { text: "Tries to isolate you so they remain your ONLY friend.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle cancelling plans when genuine emergencies happen?",
    options: [
      { text: "Apologizes sincerely, explains, and reschedules immediately.", score: 0 },
      { text: "Ghosts for 6 hours then sends a vague text.", score: 6 },
      { text: "Gets angry at YOU for being disappointed.", score: 10 }
    ]
  },

  // --- Group 15: Conflict Resolution & Respect ---
  {
    text: "How does [TARGET] react when you catch them in a white lie?",
    options: [
      { text: "Admits it right away and explains why.", score: 0 },
      { text: "Constructs a bigger lie to cover the first one.", score: 7 },
      { text: "Flips out and attacks your character for asking questions.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s approach to resolving a heated argument?",
    options: [
      { text: "Takes a 10-minute breather then speaks calmly.", score: 0 },
      { text: "Stonewalls you for 3 days until you apologize first.", score: 7 },
      { text: "Love-bombs you with expensive gifts instead of addressing the issue.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle your personal space when you need alone time?",
    options: [
      { text: "Gives you space gracefully.", score: 0 },
      { text: "Guilt-trips you: 'I guess you hate hanging out with me'.", score: 6 },
      { text: "Shows up unannounced at your door anyway.", score: 9 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you meet their ex at a party?",
    options: [
      { text: "Introduces you politely and keeps healthy distance.", score: 0 },
      { text: "Leaves you alone while whispering inside jokes with the ex.", score: 8 },
      { text: "Starts comparing you to their ex out loud in front of people.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you get a compliment from a mutual acquaintance?",
    options: [
      { text: "Smiles proudly: 'Yeah, they are amazing!'", score: 0 },
      { text: "Interrupts to take credit for your achievement.", score: 5 },
      { text: "Gives a sarcastic eye-roll and roasts you instantly.", score: 9 }
    ]
  },

  // --- Group 16: Future Plans & Lifestyle ---
  {
    text: "How does [TARGET] handle long-distance or being apart for two weeks?",
    options: [
      { text: "Schedules regular FaceTime calls and sends sweet updates.", score: 0 },
      { text: "Barely texts during the day, then sends drunk snaps at night.", score: 6 },
      { text: "Becomes super paranoid and demands proof of where you are.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s idea of sharing responsibilities?",
    options: [
      { text: "Divides tasks 50/50 without complaining.", score: 0 },
      { text: "Waits for you to do everything, then says 'you didn't ask!'.", score: 6 },
      { text: "Expects you to be their personal maid and schedule manager.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle pet animals or street dogs/cats?",
    options: [
      { text: "Gentle, loving, and super sweet.", score: 0 },
      { text: "Ignores animals completely.", score: 4 },
      { text: "Mean or hostile toward pets.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s vibe when you buy a gift for yourself?",
    options: [
      { text: "Super happy for you!", score: 0 },
      { text: "Asks why you didn't buy them one too.", score: 6 },
      { text: "Roasts your purchase as stupid or a waste of money.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] handle unexpected changes in plans?",
    options: [
      { text: "Adapts easily and finds something fun to do.", score: 0 },
      { text: "Pouts for an hour before agreeing to adapt.", score: 5 },
      { text: "Throws a temper tantrum and ruins the whole day.", score: 10 }
    ]
  },

  // --- Group 17: Final Red Flag Scenarios (Completing 100 Handcrafted Unique Items) ---
  {
    text: "What is [TARGET]'s behavior when you try to teach them something new?",
    options: [
      { text: "Curious, attentive, and grateful.", score: 0 },
      { text: "Gets defensive: 'I already know how to do that!'.", score: 6 },
      { text: "Interrupts constantly to prove they know better than you.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you share a funny memory with friends?",
    options: [
      { text: "Laughs along and adds cute details.", score: 0 },
      { text: "Corrects minor irrelevant details to ruin your story.", score: 5 },
      { text: "Tells the embarrassing part of the story to make you look bad.", score: 9 }
    ]
  },
  {
    text: "What is [TARGET]'s stance on trust and privacy?",
    options: [
      { text: "Total mutual trust and respect.", score: 0 },
      { text: "Snoops on your phone while you're sleeping.", score: 8 },
      { text: "Installs tracking apps on your phone without asking.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you suggest a quiet weekend in?",
    options: [
      { text: "Loves it! Orders food and watches movies.", score: 0 },
      { text: "Complains that staying in is boring.", score: 5 },
      { text: "Leaves you home alone and goes out partying without you.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] treat your boundaries around personal sleep schedule?",
    options: [
      { text: "Respects your sleep and turns down volume.", score: 0 },
      { text: "Wakes you up for silly reasons.", score: 5 },
      { text: "Pisses off if you sleep early and calls you boring.", score: 8 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you mention taking a break from social media?",
    options: [
      { text: "Supports your mental health break!", score: 0 },
      { text: "Asks 'how will I tag you in reels now??'", score: 4 },
      { text: "Accuses you of hiding something off social media.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] act when you meet their coworkers?",
    options: [
      { text: "Professional, proud to introduce you.", score: 0 },
      { text: "Pretends they barely know you.", score: 7 },
      { text: "Flirts with coworkers right in front of you.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response when you ask for a honest opinion on your outfit?",
    options: [
      { text: "Constructive and kind: 'You look great, but maybe try the black top!'", score: 0 },
      { text: "'It's fine whatever' (Didn't even look up from phone).", score: 5 },
      { text: "'That looks terrible on you, change immediately'.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] handle long-term relationship commitment in general?",
    options: [
      { text: "Loyal, reliable, and deeply committed.", score: 0 },
      { text: "Constantly talks about 'keeping options open'.", score: 8 },
      { text: "Treats relationships like disposable apps.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you accidentally send a voice note with background noise?",
    options: [
      { text: "Asks if you're okay and laughs off the noise.", score: 0 },
      { text: "Analyzes the background voice for 45 minutes like a detective.", score: 7 },
      { text: "Accuses you of being with someone else and ignores your calls.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s response when you post a selfie on your story?",
    options: [
      { text: "Direct messages a sweet compliment instantly.", score: 0 },
      { text: "Views it within 10 seconds but never leaves a comment or reply.", score: 5 },
      { text: "Posts a competing thirst trap 2 minutes later to reclaim attention.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle split bills when you order coffee together?",
    options: [
      { text: "Insists on treating you or splits evenly without a word.", score: 0 },
      { text: "Sends a Venmo request for $3.82 before you even sit down.", score: 7 },
      { text: "Orders a $12 specialty drink then 'remembers' they forgot their card.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] react when you get a compliment from a waiter or barista?",
    options: [
      { text: "Smiles and hypes you up: 'Told you you look amazing!'", score: 0 },
      { text: "Becomes noticeably quiet and stares at the menu aggressively.", score: 6 },
      { text: "Leaves a 0% tip and demands to leave immediately.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s stance on sharing location on iPhone Find My or Life360?",
    options: [
      { text: "Freely shares location so you both know when you get home safe.", score: 0 },
      { text: "Turns off location 'to save battery' every Friday night.", score: 8 },
      { text: "Demands your location 24/7 while keeping theirs strictly disabled.", score: 10 }
    ]
  },
  {
    text: "What does [TARGET] do when you bring up your favorite childhood memory?",
    options: [
      { text: "Listens intently and asks genuine follow-up questions.", score: 0 },
      { text: "Interrupts to talk about how their childhood was 10x crazier.", score: 6 },
      { text: "Checks TikTok under the table while nodding fake agreement.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you change your profile picture on WhatsApp or IG?",
    options: [
      { text: "Loves the new picture and sends heart emojis.", score: 0 },
      { text: "Asks 'Who took that picture??' with zero context.", score: 7 },
      { text: "Asks why you didn't pick the photo where they were included.", score: 9 }
    ]
  },
  {
    text: "What happens when [TARGET]'s phone gets a phone call while connected to car Bluetooth?",
    options: [
      { text: "Answers on speaker comfortably: 'Hey, I'm driving with [TARGET]!'", score: 0 },
      { text: "Panics, disconnects Bluetooth, and puts phone on silent.", score: 8 },
      { text: "Rejects the call instantly and turns off Bluetooth for the rest of the trip.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you mention planning a trip 6 months in advance?",
    options: [
      { text: "Excitedly looks up flights and hotel deals with you.", score: 0 },
      { text: "'Let me check my schedule' (doesn't check schedule).", score: 6 },
      { text: "'Bro, I don't even know what I'm doing next Tuesday' (commitment phobia).", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] act when you share a vulnerable insecurity with them?",
    options: [
      { text: "Validates your feelings and holds your hand.", score: 0 },
      { text: "Tells you 'You're overthinking it, it's not that deep'.", score: 6 },
      { text: "Brings it up as an insult during a future argument.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s favorite phrase during a minor misunderstanding?",
    options: [
      { text: "'Let's talk through this together.'", score: 0 },
      { text: "'I guess I'm just the worst person ever then.'", score: 7 },
      { text: "'You're acting crazy right now, seek help.'", score: 10 }
    ]
  },
  {
    text: "What happens when you leave your charger at [TARGET]'s apartment?",
    options: [
      { text: "Keeps it safe and hands it back next time you meet.", score: 0 },
      { text: "Claims they 'haven't seen it' despite using it right now.", score: 6 },
      { text: "Demands you come pick it up at 2 AM or they're throwing it out.", score: 9 }
    ]
  },
  {
    text: "How does [TARGET] react when you have a bad day at work or school?",
    options: [
      { text: "Orders your favorite comfort food and listens to you vent.", score: 0 },
      { text: "Listens for 1 minute then complains about their day for 2 hours.", score: 6 },
      { text: "Tells you that you're creating negative energy and goes out with friends.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s reaction when you like a photo of a celebrity on social media?",
    options: [
      { text: "Laughs and agrees the celebrity is hot.", score: 0 },
      { text: "Sulkily asks 'So I'm not good enough for you?'", score: 7 },
      { text: "Goes on a spree liking 50 pictures of their ex.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s texting style after you send a long heartfelt paragraph?",
    options: [
      { text: "Sends a sweet, thoughtful response addressing every point.", score: 0 },
      { text: "Replies with 'K' or 'Damn that's crazy'.", score: 7 },
      { text: "Leaves on read for 6 hours then sends a random meme.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] handle playing competitive board games or video games with you?",
    options: [
      { text: "Has fun and encourages you even if you lose.", score: 0 },
      { text: "Gets overly competitive and trash-talks your gameplay.", score: 6 },
      { text: "Rage-quits, flips the table/controller, and ignores you for hours.", score: 10 }
    ]
  },
  {
    text: "What is [TARGET]'s habit with keeping photos of their ex on their phone gallery?",
    options: [
      { text: "Deleted or archived all past romantic photos long ago.", score: 0 },
      { text: "Has a hidden folder titled 'Memories' containing 500 ex photos.", score: 7 },
      { text: "Still has ex photos as their phone wallpaper because 'it's aesthetic'.", score: 10 }
    ]
  },
  {
    text: "How does [TARGET] treat retail and food service workers in your presence?",
    options: [
      { text: "Extremely polite, says please/thank you, and tips generously.", score: 0 },
      { text: "Slightly impatient and sighs loudly when there's a small wait.", score: 6 },
      { text: "Rude, condescending, and snaps fingers to get attention.", score: 10 }
    ]
  }
];

/**
 * Fisher-Yates Randomizer for Solo Red Flag Questions
 * Guarantees a fresh, unique 10-question slice every single call!
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


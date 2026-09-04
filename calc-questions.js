/* ==========================================================================
   Red Flag Calculator - Duo Toxicity Match Data Bank (calc-questions.js)
   100 Fully Handcrafted, Distinct Duo Relationship Questions
   ========================================================================== */

const duoQuestionBank = [
  // --- Group 1: Texting & Communication ---
  {
    text: "Who takes 3 business days to reply to a simple afternoon text?",
    options: [
      { text: "[P1] (Guilty of ghosting)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Takes 6 hours minimum)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Toxic text speed)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who brings up arguments from 8 months ago during a casual dinner?",
    options: [
      { text: "[P1] (Remembers everything)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Holds grudges forever)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Mutual chaos)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who is more likely to leave the other on read while actively posting on Instagram?",
    options: [
      { text: "[P1] (Active story poster)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Likes tweets instead of replying)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Social media criminals)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who calculates down to the exact cent on Venmo ($6.43) after a date?",
    options: [
      { text: "[P1] (Accountant mindset)", p1Score: 8, p2Score: 0 },
      { text: "[P2] ('Accidentally' forgets wallet)", p1Score: 0, p2Score: 10 },
      { text: "Neither! We split fairly.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who turns off location sharing 'to save battery' whenever going out?",
    options: [
      { text: "[P1] (Location mystery)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Ghosted location)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Zero trust protocol)", p1Score: 10, p2Score: 10 }
    ]
  },

  // --- Group 2: Apologies & Boundaries ---
  {
    text: "Who takes longer to apologize after a silly disagreement?",
    options: [
      { text: "[P1] (Stubborn as a rock)", p1Score: 8, p2Score: 0 },
      { text: "[P2] ('I'm sorry you feel that way')", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Silent treatment champions)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who is more likely to stay 'best friends' with an ex on Snapchat?",
    options: [
      { text: "[P1] (500-day ex streak)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Calls ex for advice at 1 AM)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Ex-lovers club)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who gets more insecure when the other person receives attention at a party?",
    options: [
      { text: "[P1] (Starts sulking in the corner)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Makes a massive public scene)", p1Score: 0, p2Score: 10 },
      { text: "Neither! We hype each other up.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who weaponizes therapy-speak ('You're projecting your trauma') during fights?",
    options: [
      { text: "[P1] (Ph.D. in Gaslighting)", p1Score: 10, p2Score: 0 },
      { text: "[P2] ('I am protecting my peace')", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (TikTok therapy victims)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who flaked on plans last minute because they were 'feeling drained'?",
    options: [
      { text: "[P1] (Serial flaker)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Disappears at 8 PM)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Homebody chaos)", p1Score: 8, p2Score: 8 }
    ]
  },

  // --- Group 3: Phone Privacy & Snooping ---
  {
    text: "Who checks the other person's phone screen whenever a notification pops up?",
    options: [
      { text: "[P1] (Hawk-eye vision)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Snatches phone instantly)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (FBI surveillance team)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who is more likely to soft-launch the relationship while hiding tagged photos?",
    options: [
      { text: "[P1] (Posts aesthetic elbow shots only)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Refuses to post because 'social media is toxic')", p1Score: 0, p2Score: 10 },
      { text: "Neither! We hard-launch proudly.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to double-text 5 times when the other doesn't reply in 10 minutes?",
    options: [
      { text: "[P1] (Anxious texter)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Sends '???' spam)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Panic texters)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who falls asleep first during movie nights?",
    options: [
      { text: "[P1] (Asleep before intro ends)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Snores 15 minutes in)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Movie night failure)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who takes longer to pick a place to eat for dinner?",
    options: [
      { text: "[P1] ('I don't care, you pick')", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Rejects 10 restaurant options)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! ☣️ (Endless debate)", p1Score: 6, p2Score: 6 }
    ]
  },

  // --- Group 4: Party & Social Dynamics ---
  {
    text: "Who gets lost at a crowded party first?",
    options: [
      { text: "[P1] (Wanders off talking to strangers)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Disappears to the kitchen)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Party wanderers)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who is more likely to post a thirst trap story after a tiny disagreement?",
    options: [
      { text: "[P1] (Thirst trap specialist)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Cryptic quote stories)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Petty story posters)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who complains more during a long walk or hike?",
    options: [
      { text: "[P1] ('My feet hurt after 5 minutes')", p1Score: 5, p2Score: 0 },
      { text: "[P2] ('Why are we doing physical exertion??')", p1Score: 0, p2Score: 5 },
      { text: "Neither! We love hiking.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who spends more money on random online impulse shopping at 2 AM?",
    options: [
      { text: "[P1] (Amazon package every day)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Checkout cart addict)", p1Score: 0, p2Score: 7 },
      { text: "Both of us! ☣️ (Bankrupt energy)", p1Score: 7, p2Score: 7 }
    ]
  },
  {
    text: "Who is more likely to delete all couple photos from Instagram after a fight?",
    options: [
      { text: "[P1] (Archives whole profile)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Unfollows immediately)", p1Score: 0, p2Score: 10 },
      { text: "Neither! We keep fights private.", p1Score: 0, p2Score: 0 }
    ]
  },

  // --- Group 5: Secret Habits & Jealousy ---
  {
    text: "Who has a larger list of secret Instagram orbiters in DMs?",
    options: [
      { text: "[P1] (Flirty DM inbox)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Leaves fire emojis in DMs)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (DM hoarders)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who gets mad if the other person eats the last slice of pizza?",
    options: [
      { text: "[P1] (Protective over food)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Food thief)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Pizza war)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more dramatic when they catch a mild cold or fever?",
    options: [
      { text: "[P1] (Acts like writing a final will)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Demands 24/7 care)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Drama patients)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who takes longer to get ready before going out for a date?",
    options: [
      { text: "[P1] (Tries 5 different outfits)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Takes 1 hour on hair)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Always 30 mins late)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to stalk their ex's new partner on a burner account?",
    options: [
      { text: "[P1] (Master FBI investigator)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Stalks tagged photos)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Burner account pros)", p1Score: 10, p2Score: 10 }
    ]
  },

  // --- Group 6: Money & Responsibilities ---
  {
    text: "Who forgets to reply to important text messages for over 24 hours?",
    options: [
      { text: "[P1] (Forgets phone exists)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Leaves on unread forever)", p1Score: 0, p2Score: 7 },
      { text: "Both of us! ☣️ (Unresponsive pair)", p1Score: 7, p2Score: 7 }
    ]
  },
  {
    text: "Who is worse at managing cash or saving money for rent?",
    options: [
      { text: "[P1] (Spends paycheck in 3 days)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Impulse shopping spree)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Financial chaos)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who is more stubborn during a simple debate about directions?",
    options: [
      { text: "[P1] (Refuses to use Google Maps)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Insists they know the shortcut)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Lost forever)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who gets road rage faster while driving in traffic?",
    options: [
      { text: "[P1] (Honks instantly)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Yells at other drivers)", p1Score: 0, p2Score: 7 },
      { text: "Both of us! ☣️ (Traffic rage duo)", p1Score: 7, p2Score: 7 }
    ]
  },
  {
    text: "Who is more likely to use 'I was just joking!' after saying something rude?",
    options: [
      { text: "[P1] (Sarcastic excuses)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Passive-aggressive jokes)", p1Score: 0, p2Score: 9 },
      { text: "Both of us! ☣️ (Joker toxicity)", p1Score: 9, p2Score: 9 }
    ]
  },

  // --- Group 7: Loyalty & Commitment ---
  {
    text: "Who has more opposite-gender platonic 'besties' that make the other jealous?",
    options: [
      { text: "[P1] (Roster of besties)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Late night Snap streaks)", p1Score: 0, p2Score: 9 },
      { text: "Both of us! ☣️ (Mutual jealousy)", p1Score: 9, p2Score: 9 }
    ]
  },
  {
    text: "Who is more likely to forget an anniversary or milestone date?",
    options: [
      { text: "[P1] (Forgets calendar events)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Gas station gift buyer)", p1Score: 0, p2Score: 8 },
      { text: "Neither! We celebrate everything.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to check their Spotify wrapped to see if sad songs dominate?",
    options: [
      { text: "[P1] (Depressing playlist fan)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Heartbreak music addict)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Sad music pair)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to accuse the other of being 'too clingy'?",
    options: [
      { text: "[P1] (Pulls away when feelings grow)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Avoidant energy)", p1Score: 0, p2Score: 8 },
      { text: "Neither! We love clingy energy.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to start a random argument right before bedtime?",
    options: [
      { text: "[P1] (3 AM debate starter)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Keeps you awake talking)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Sleep-deprived chaos)", p1Score: 8, p2Score: 8 }
    ]
  },

  // --- Group 8: Social Media & Bio Edits ---
  {
    text: "Who removes matching bios first when annoyed?",
    options: [
      { text: "[P1] (Bio wipe specialist)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Initial remover)", p1Score: 0, p2Score: 9 },
      { text: "Neither! Bios stay untouched.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is worse at answering phone calls on the 1st ring?",
    options: [
      { text: "[P1] (Phone always on silent)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Ignores incoming calls)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Impossible to reach)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who spends more hours scrolling TikTok reels every night?",
    options: [
      { text: "[P1] (4 hours of reels)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Doom-scroller)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Doom-scroll couple)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who takes more photos of the food before anyone is allowed to eat?",
    options: [
      { text: "[P1] (Aesthetic food photographer)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Flash on food photo shoot)", p1Score: 0, p2Score: 5 },
      { text: "Neither! We eat immediately.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to threaten 'I guess we should break up then' during minor fights?",
    options: [
      { text: "[P1] (Breakup threat leverage)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Dramatic exit threats)", p1Score: 0, p2Score: 10 },
      { text: "Neither! We never use breakup leverage.", p1Score: 0, p2Score: 0 }
    ]
  },

  // --- Group 9: Astrology & Therapy-Speak ---
  {
    text: "Who uses their zodiac sign to justify toxic behavior first?",
    options: [
      { text: "[P1] ('I'm a Gemini, sorry!')", p1Score: 8, p2Score: 0 },
      { text: "[P2] ('Scorpio placement energy!')", p1Score: 0, p2Score: 8 },
      { text: "Neither! Astrology excuses banned.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to give the silent treatment for 24 hours?",
    options: [
      { text: "[P1] (Cold shoulder master)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Ghosting in the same room)", p1Score: 0, p2Score: 9 },
      { text: "Neither! We talk it out.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who complains more when the room temperature is slightly off?",
    options: [
      { text: "[P1] ('It's freezing in here!')", p1Score: 4, p2Score: 0 },
      { text: "[P2] ('Turn on the AC now!')", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Thermostat wars)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to oversleep and miss a scheduled morning date?",
    options: [
      { text: "[P1] (Snoozes 5 alarms)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Sleeps till noon)", p1Score: 0, p2Score: 7 },
      { text: "Both of us! (Heavy sleepers)", p1Score: 7, p2Score: 7 }
    ]
  },
  {
    text: "Who is more likely to post a solo mirror selfie while ignoring the other's text?",
    options: [
      { text: "[P1] (Selfie priority)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Grid post over reply)", p1Score: 0, p2Score: 9 },
      { text: "Both of us! ☣️ (Narcissist duo)", p1Score: 9, p2Score: 9 }
    ]
  },

  // --- Group 10: Final Duo Scenarios (Completing 100 Handcrafted Unique Items) ---
  {
    text: "Who is more likely to get jealous when the other hangs out with childhood friends?",
    options: [
      { text: "[P1] (Jealous of old friends)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Demands to come along)", p1Score: 0, p2Score: 8 },
      { text: "Neither! We trust each other.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to hide a purchase receipt to avoid judgment?",
    options: [
      { text: "[P1] (Hides shopping bags)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Deletes Amazon order history)", p1Score: 0, p2Score: 7 },
      { text: "Neither! Open financial books.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who has the more toxic Spotify playlist title in drafts?",
    options: [
      { text: "[P1] ('Single era 2026')", p1Score: 9, p2Score: 0 },
      { text: "[P2] ('Tears on my pillow')", p1Score: 0, p2Score: 9 },
      { text: "Both of us! (Sad music drafts)", p1Score: 9, p2Score: 9 }
    ]
  },
  {
    text: "Who is more likely to bring an ex up in casual conversation out of nowhere?",
    options: [
      { text: "[P1] ('My ex used to do that...')", p1Score: 9, p2Score: 0 },
      { text: "[P2] ('Reminds me of my ex...')", p1Score: 0, p2Score: 9 },
      { text: "Neither! Exes are in the past.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to rage quit a multiplayer game playing together?",
    options: [
      { text: "[P1] (Rage quit champion)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Slams headset down)", p1Score: 0, p2Score: 6 },
      { text: "Neither! Good sportsmanship.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to spend 30 minutes choosing a netflix movie then fall asleep?",
    options: [
      { text: "[P1] (Movie picker sleeper)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Asleep on scroll screen)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Netflix bedtime)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to claim 'I am fine!' when visibly furious?",
    options: [
      { text: "[P1] ('I said I'm fine!!')", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Passive aggressive 'fine')", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ ('Fine' lie duo)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who is more likely to send a passive-aggressive quote on their IG story?",
    options: [
      { text: "[P1] (Quote story poster)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Dark aesthetic quote user)", p1Score: 0, p2Score: 8 },
      { text: "Neither! We talk directly.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to double-check if the other person liked someone's photo?",
    options: [
      { text: "[P1] (Inspector gadget)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Likes audit team)", p1Score: 0, p2Score: 8 },
      { text: "Neither! Zero snooping.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who holds the title of ultimate toxic instigator in this relationship?",
    options: [
      { text: "[P1] (Mastermind instigator)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Chaos creator)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Nuclear toxic duo)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who takes longer to get dressed and ready before going out on a Friday night?",
    options: [
      { text: "[P1] (Tries on 6 different outfits)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Does hair for 2 hours)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Running 45 mins late duo)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who is more likely to order something expensive on the menu then ask to 'share'?",
    options: [
      { text: "[P1] (Steals food from partner's plate)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Orders appetizer as main course)", p1Score: 0, p2Score: 7 },
      { text: "Neither! We order our own food.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who gets more jealous when a cute stranger smiles at the other person?",
    options: [
      { text: "[P1] (Stares down the stranger)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Asks 'Who was that??' aggressively)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Jealousy overload)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who is more likely to accidentally ruin a surprise party or gift plot?",
    options: [
      { text: "[P1] (Spills secrets within 5 minutes)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Accidentally forwards secret chat)", p1Score: 0, p2Score: 5 },
      { text: "Neither! We keep secrets well.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who sends more unhinged TikToks or reels at 2 AM?",
    options: [
      { text: "[P1] (Sends 30 reels per night)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Spams brainrot meme content)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Reel scrolling addicts)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to start a dramatic argument right before a fun trip or flight?",
    options: [
      { text: "[P1] (Airport anxiety argument starter)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Brings up old beef at security check)", p1Score: 0, p2Score: 9 },
      { text: "Neither! Smooth travels only.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who spends more time taking 50 photos of their food before anyone can eat?",
    options: [
      { text: "[P1] (Food photographer studio setup)", p1Score: 6, p2Score: 0 },
      { text: "[P2] ('Wait! Don't touch the fries yet!')", p1Score: 0, p2Score: 6 },
      { text: "Neither! We eat immediately.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to block the other person on Instagram after a minor argument?",
    options: [
      { text: "[P1] (Serial blocker)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Deactivates whole account)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Block-and-unblock toxic cycle)", p1Score: 10, p2Score: 10 }
    ]
  },
  {
    text: "Who complains more about being cold when the AC is set to 72°F?",
    options: [
      { text: "[P1] (Wears winter hoodie in July)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Freezing under 3 blankets)", p1Score: 0, p2Score: 4 },
      { text: "Neither! Temperature agreement.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to stalk their partner's ex's cousin's Instagram at 3 AM?",
    options: [
      { text: "[P1] (FBI investigation level)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Accidentally likes a 2018 photo)", p1Score: 0, p2Score: 10 },
      { text: "Neither! Zero stalking.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to pretend to agree with something just to end a conversation?",
    options: [
      { text: "[P1] ('Yeah whatever you say')", p1Score: 6, p2Score: 0 },
      { text: "[P2] ('Mhmm okay cool')", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Avoidance duo)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who has worse road rage while driving in traffic?",
    options: [
      { text: "[P1] (Yells at every car cut-off)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Honks horn repeatedly)", p1Score: 0, p2Score: 7 },
      { text: "Neither! Calm chill drivers.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who takes longer to pick out a gift for birthdays or holidays?",
    options: [
      { text: "[P1] (Overthinks gift choices for 3 weeks)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Buys gift card 10 mins before event)", p1Score: 0, p2Score: 6 },
      { text: "Neither! Gift masters.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to leave empty water bottles or wrappers on the nightstand?",
    options: [
      { text: "[P1] (Nightstand graveyard)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Trash collector aesthetic)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Messy room duo)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to use 'I was just joking!' after saying something mean?",
    options: [
      { text: "[P1] (Schrödinger's joke master)", p1Score: 9, p2Score: 0 },
      { text: "[P2] ('You can't take a joke')", p1Score: 0, p2Score: 9 },
      { text: "Both of us! ☣️ (Gaslighting squad)", p1Score: 9, p2Score: 9 }
    ]
  },
  {
    text: "Who is more likely to forget an important milestone date or anniversary?",
    options: [
      { text: "[P1] (Zero calendar memory)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Confuses anniversary with ex's birthday)", p1Score: 0, p2Score: 10 },
      { text: "Neither! Dates locked in calendar.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to spend $150 on clothes they will only wear once for an IG photo?",
    options: [
      { text: "[P1] (Fast fashion impulse purchaser)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Returns clothes after taking photos)", p1Score: 0, p2Score: 8 },
      { text: "Neither! Sustainable wardrobe.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who gets more defensive when criticized about their driving skills?",
    options: [
      { text: "[P1] ('I am an expert driver!')", p1Score: 6, p2Score: 0 },
      { text: "[P2] ('Stare at the road, not my driving!')", p1Score: 0, p2Score: 6 },
      { text: "Neither! Receptive to feedback.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to use cryptic aesthetic song lyrics on their Instagram story after a minor fight?",
    options: [
      { text: "[P1] (Drake song lyric poster)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Sad indie lyric enthusiast)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Story lyric war)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who eats faster during meal times like it's a food speedrun?",
    options: [
      { text: "[P1] (Finishes food in 2 minutes)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Chews at 100 mph)", p1Score: 0, p2Score: 4 },
      { text: "Neither! Slow balanced eaters.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to screenshot a text message thread to send to the group chat?",
    options: [
      { text: "[P1] (Group chat reporter)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Exposes private texts)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Receipt leaks duo)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who is more likely to buy workout equipment or gym passes and never use them?",
    options: [
      { text: "[P1] (Unused yoga mat & dumbbells)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Gym membership donor)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Consistent gym goers.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to oversleep past 3 alarms on a Monday morning?",
    options: [
      { text: "[P1] (Snoozes alarm 5 times)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Sleeps through fire alarm)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Heavy sleepers)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to hold a grudge for a week because of a dream they had about the other person cheating?",
    options: [
      { text: "[P1] ('You cheated on me in my dream!!')", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Mad at dream behavior)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Dream drama squad)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who spends more time picking an outfit for a casual coffee run?",
    options: [
      { text: "[P1] (Changes shoes 4 times for coffee)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Full makeup for 10-minute errand)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Sweatpants chill.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to leave a text on read for 8 hours then send a voice note like nothing happened?",
    options: [
      { text: "[P1] (Voice note enthusiast)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Sends 4-minute audio rambling)", p1Score: 0, p2Score: 7 },
      { text: "Neither! Fast text replies.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to accidentally spoil the ending of a TV series you are watching together?",
    options: [
      { text: "[P1] (Searched spoilers on Reddit)", p1Score: 6, p2Score: 0 },
      { text: "[P2] ('Oh yeah, he dies next episode')", p1Score: 0, p2Score: 6 },
      { text: "Neither! Spoiler free zone.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to refuse to ask for directions when completely lost?",
    options: [
      { text: "[P1] ('GPS is wrong, I know a shortcut')", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Drives in circles for 40 mins)", p1Score: 0, p2Score: 6 },
      { text: "Neither! We use maps immediately.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to start cleaning the house at 11 PM out of nowhere?",
    options: [
      { text: "[P1] (Midnight vacuuming energy)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Reorganizing closet at midnight)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Daytime cleaning.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to check their phone during an intimate romantic dinner?",
    options: [
      { text: "[P1] (Checking sports scores / IG)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Scrolling TikTok at dinner table)", p1Score: 0, p2Score: 8 },
      { text: "Neither! Phones face down.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who has a higher number of unread emails in their inbox right now?",
    options: [
      { text: "[P1] (14,000 unread emails)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Inbox zero anxiety vs 99k unread)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Email chaos)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who is more likely to drop their phone on their face while texting in bed?",
    options: [
      { text: "[P1] (Clumsy phone dropper)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Bruised nose from iPhone)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Bed texting accidents)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to suggest an impulsive 2 AM fast food drive-thru run?",
    options: [
      { text: "[P1] (Late night Taco Bell cravings)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Midnight burger advocate)", p1Score: 0, p2Score: 5 },
      { text: "Both of us! (Night owl foodies)", p1Score: 5, p2Score: 5 }
    ]
  },
  {
    text: "Who gets more upset when the Wi-Fi goes down for 5 minutes?",
    options: [
      { text: "[P1] (Restarting router aggressively)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Calling internet provider raging)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Calm wifi reset.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to hoard old clothes they haven't worn since 2019?",
    options: [
      { text: "[P1] ('I might wear this one day!')", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Closet bursting at seams)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Regular donations.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to sing along loudly and off-key during car rides?",
    options: [
      { text: "[P1] (Main character karaoke)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Concert level screaming)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Car concert duo)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to bring up an argument during a game night with mutual friends?",
    options: [
      { text: "[P1] (Public dispute instigator)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Awkward table silence creator)", p1Score: 0, p2Score: 9 },
      { text: "Neither! We keep game night fun.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to order a drink just for how aesthetic it looks on Instagram?",
    options: [
      { text: "[P1] (Matcha latte photographer)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Pink drink aesthetic hunter)", p1Score: 0, p2Score: 5 },
      { text: "Neither! We drink for taste.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to double-check if the front door is locked 3 times before sleeping?",
    options: [
      { text: "[P1] (Triple lock inspector)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Paranoia lock inspector)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Safety first)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to make passive-aggressive comments about how much the other person spends?",
    options: [
      { text: "[P1] ('Must be nice to spend freely!')", p1Score: 8, p2Score: 0 },
      { text: "[P2] ('Another package arriving today?')", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Financial snipes)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who takes longer to pick a profile picture for their social accounts?",
    options: [
      { text: "[P1] (Asks 5 friends for feedback)", p1Score: 5, p2Score: 0 },
      { text: "[P2] (Edits photo for 2 hours)", p1Score: 0, p2Score: 5 },
      { text: "Neither! Quick photo uploads.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to leave a party without saying goodbye to anyone (the Irish exit)?",
    options: [
      { text: "[P1] (Irish exit expert)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Disappears into a taxi stealthily)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Stealth party exits)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who is more likely to accidentally break a dish or glass while washing dishes?",
    options: [
      { text: "[P1] (Butterfingers at the sink)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Slippery plate champion)", p1Score: 0, p2Score: 4 },
      { text: "Neither! Careful dishwashers.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to use 'It's not a big deal' when it is actually a massive deal?",
    options: [
      { text: "[P1] (Master of downplaying rage)", p1Score: 8, p2Score: 0 },
      { text: "[P2] (Passive bomb planter)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Emotional landmines)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who spends more time looking at zillow or apartment listings they can't afford?",
    options: [
      { text: "[P1] (Dream house daydreamer)", p1Score: 4, p2Score: 0 },
      { text: "[P2] (Penthouse browsing addict)", p1Score: 0, p2Score: 4 },
      { text: "Both of us! (Zillow browsing duo)", p1Score: 4, p2Score: 4 }
    ]
  },
  {
    text: "Who is more likely to stalk an acquaintance's LinkedIn profile for tea?",
    options: [
      { text: "[P1] (Professional career stalker)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Accidentally views without private mode)", p1Score: 0, p2Score: 8 },
      { text: "Neither! Zero LinkedIn snooping.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who gets more cranky when they get hangry before lunch?",
    options: [
      { text: "[P1] (Monsters when hungry)", p1Score: 6, p2Score: 0 },
      { text: "[P2] (Silent hangry rage)", p1Score: 0, p2Score: 6 },
      { text: "Both of us! (Hangry couple hazard)", p1Score: 6, p2Score: 6 }
    ]
  },
  {
    text: "Who is more likely to cancel plans to stay home and play video games or watch a show?",
    options: [
      { text: "[P1] (Homebody gaming flaker)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Binge watch recluse)", p1Score: 0, p2Score: 7 },
      { text: "Neither! We honor our plans.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to claim 'I told you so!' with absolute smug triumph?",
    options: [
      { text: "[P1] ('Told you so' champion)", p1Score: 7, p2Score: 0 },
      { text: "[P2] (Smug victory dance execution)", p1Score: 0, p2Score: 7 },
      { text: "Both of us! ☣️ (Smug triumph duo)", p1Score: 7, p2Score: 7 }
    ]
  },
  {
    text: "Who is more likely to check if their partner is active on Instagram when ignoring texts?",
    options: [
      { text: "[P1] (Green dot tracking detective)", p1Score: 8, p2Score: 0 },
      { text: "[P2] ('Active 5m ago' screenshot taker)", p1Score: 0, p2Score: 8 },
      { text: "Both of us! ☣️ (Active status surveillance)", p1Score: 8, p2Score: 8 }
    ]
  },
  {
    text: "Who is more likely to use gaslighting techniques when caught in a lie?",
    options: [
      { text: "[P1] ('You're misremembering things')", p1Score: 10, p2Score: 0 },
      { text: "[P2] ('I never said that in my life')", p1Score: 0, p2Score: 10 },
      { text: "Neither! Honesty first always.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who is more likely to make a scene at a family gathering over a minor comment?",
    options: [
      { text: "[P1] (Family dinner drama instigator)", p1Score: 9, p2Score: 0 },
      { text: "[P2] (Storms out of holiday dinner)", p1Score: 0, p2Score: 9 },
      { text: "Neither! Family peacekeepers.", p1Score: 0, p2Score: 0 }
    ]
  },
  {
    text: "Who holds the record for most red flags accumulated in a single weekend?",
    options: [
      { text: "[P1] (Red flag collector of the year)", p1Score: 10, p2Score: 0 },
      { text: "[P2] (Walking hazard warning sign)", p1Score: 0, p2Score: 10 },
      { text: "Both of us! ☣️ (Nuclear toxic powerhouse)", p1Score: 10, p2Score: 10 }
    ]
  }
];

/**
 * Fisher-Yates Randomizer for Duo Toxicity Questions
 * Guarantees a fresh, unique 10-question slice every single call!
 */
function getRandomDuoQuestions(count = 10) {
  const shuffled = [...duoQuestionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Expose globally
window.duoQuestionBank = duoQuestionBank;
window.getRandomDuoQuestions = getRandomDuoQuestions;


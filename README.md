# GoJapan.gg - Japanese Learning Platform

A gamified web-based platform to learn Japanese up to N5 level, built with HTML, CSS, JavaScript, and Tailwind CSS.

## 🌟 Features

### 1. **Learning Path** 🗺️
- Complete structured learning path from absolute beginner to N5 level
- 10 units covering basics, numbers, daily life, verbs, adjectives, location, particles, weather, and advanced expressions
- Interactive lessons with vocabulary, grammar explanations, and examples
- Progress tracking with XP rewards

### 2. **Kana Dojo** 🥋
- Complete Hiragana and Katakana character charts (46 characters each)
- Interactive flip cards to practice reading
- Smart practice game with spaced repetition algorithm
- Tracks your mastery level for each character
- Adapts difficulty based on your performance

### 3. **Vocabulary** 📚
- 200+ N5 vocabulary words organized by category:
  - Nouns (70+ words)
  - Verbs (40+ words)
  - Adjectives (30+ words)
  - Adverbs (15+ words)
  - Particles (14 words)
  - Katakana Words (20+ words)
- Browse mode with English and German translations
- Flashcard practice game
- Multiple-choice quiz game
- Progress tracking for learned words

### 4. **Grammar Rules** 📝
- 20+ essential N5 grammar patterns organized by topic:
  - Basic Structures (です, は, が)
  - Verb Forms (ます, ました, ません, て-form)
  - Particles (を, に, で, と, の, か)
  - Adjectives (い-adjectives, な-adjectives)
  - Existence and Location (います, あります)
  - Comparison (より, いちばん)
  - Expressing Desire (ほしい, たい)
- Detailed explanations with examples
- Conjugation rules and tips

### 5. **Achievements** 🏆
- 15 achievements across multiple categories:
  - Milestone achievements
  - Kana mastery achievements
  - Vocabulary achievements
  - Grammar achievements
  - Streak achievements
  - Quest achievements
- Progress tracking for locked achievements
- XP rewards for unlocking achievements

### 6. **Quests** ⚔️
- 5+ repeatable quests for earning XP
- Daily, weekly, and repeatable quest types
- Progress tracking with visual indicators
- Automatic completion detection

### 7. **Daily Missions** 📆
- 4 daily missions to complete each day
- Streak tracking system
- Reset at midnight each day
- Bonus achievements for consistency

### 8. **User Profile** 👤
- Level and XP system
- Comprehensive progress tracking:
  - Hiragana mastery percentage
  - Katakana mastery percentage
  - Vocabulary progress
  - Grammar progress
- Streak counter
- Achievement display
- Join date and statistics

## 🎨 Design Features

- Modern, high-quality dashboard design
- Gradient color scheme with pink (sakura) and indigo
- Smooth animations and transitions
- Responsive layout (mobile, tablet, desktop)
- Custom scrollbar styling
- Glassmorphism effects
- Interactive hover states
- Progress bars with shimmer effects

## 🚀 Getting Started

### Local Development

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser (Chrome, Firefox, Safari, Edge)
3. **That's it!** No build process required - it's pure HTML/CSS/JavaScript

### File Structure

```
gojapan-gg/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom CSS styles
├── js/
│   ├── app.js              # Main application controller
│   ├── user-data.js        # User data management & localStorage
│   ├── learning-path.js    # Learning path UI
│   ├── kana-dojo.js        # Kana practice system
│   ├── vocabulary.js       # Vocabulary learning games
│   ├── grammar.js          # Grammar rules display
│   ├── achievements.js     # Achievement tracking
│   ├── quests.js           # Quest system
│   └── daily-missions.js   # Daily mission tracking
└── data/
    ├── kana-data.js        # Hiragana & Katakana data
    ├── learning-path-data.js # Complete N5 curriculum
    └── vocabulary-data.js  # N5 vocabulary database
```

## 🌐 Deployment to GitHub Pages

1. **Create a GitHub repository**
   - Go to GitHub and create a new repository
   - Name it (e.g., `gojapan-gg`)

2. **Upload files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - GoJapan.gg"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gojapan-gg.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/gojapan-gg/`

## 💾 Data Storage

All user progress is stored in the browser's `localStorage`:
- Learning progress
- Completed lessons
- Vocabulary mastered
- Kana knowledge
- Achievements unlocked
- Quest progress
- Daily mission completion
- Streak counter

**Note:** Data is stored locally in your browser. Clearing browser data will reset progress.

## 🎯 Learning Path Overview

### Unit 1: Getting Started
- Introduction to Japanese
- Basic greetings
- Self introduction

### Unit 2: Numbers and Counting
- Numbers 1-100
- Time expressions

### Unit 3: Daily Life
- Family members
- Food and drinks
- Shopping phrases

### Unit 4: Verbs and Actions
- Present tense verbs
- Past tense
- Negative forms

### Unit 5: Adjectives
- I-adjectives
- Na-adjectives
- Comparing things

### Unit 6: Location and Existence
- Location words
- Existence verbs (います/あります)
- Places and buildings

### Unit 7: Particles Mastery
- は, が, を particles
- に, で, と particles
- の, か, よ particles

### Unit 8: Weather and Seasons
- Seasons
- Weather expressions
- Days and months

### Unit 9: Advanced Expressions
- Wanting something (ほしい/たい)
- Can and cannot
- Making requests

### Unit 10: N5 Mastery
- Comprehensive review
- Vocabulary challenge
- Final test

## 🎮 Gamification System

### XP & Levels
- Earn XP by completing lessons, learning vocabulary, practicing kana
- Level up as you accumulate XP
- XP requirements increase with each level

### Streaks
- Daily login tracking
- Streak counter encourages consistency
- Achievements for 7-day and 30-day streaks

### Achievements
- 15 unique achievements to unlock
- Progress indicators for locked achievements
- XP rewards for each achievement

### Quests
- Daily, weekly, and repeatable quests
- Automatic progress tracking
- XP rewards for completion

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with custom animations
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)** - Interactive functionality
- **LocalStorage API** - Data persistence
- **Google Fonts** - Noto Sans JP & Outfit fonts

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔮 Future Enhancements (Ideas)

- User accounts with cloud sync
- Speaking practice with speech recognition
- Writing practice for kana
- More advanced grammar (N4, N3)
- Community features and leaderboards
- Mobile app version
- Offline mode with service workers
- More vocabulary categories
- Kanji learning module
- Sentence building exercises

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Credits

Created with ❤️ for Japanese language learners worldwide.

---

**Start your Japanese learning journey today! がんばって！(Ganbatte - Good luck!)**

// Vocabulary Learning Module
window.Vocabulary = {
    currentCategory: 'nouns',
    currentView: 'browse',
    gameMode: null,
    currentWord: null,
    gameStats: { correct: 0, incorrect: 0, streak: 0 },
    practiceQueue: [],

    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('vocabularyContainer');
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Category Selector -->
                <div class="card">
                    <h3 class="text-xl font-bold mb-4">📚 Vocabulary Categories</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                        ${this.renderCategoryButtons()}
                    </div>
                </div>

                <!-- View Selector -->
                <div class="card">
                    <div class="flex gap-3">
                        <button onclick="Vocabulary.setView('browse')" 
                                class="btn ${this.currentView === 'browse' ? 'btn-primary' : 'btn-secondary'} flex-1">
                            📖 Browse Words
                        </button>
                        <button onclick="Vocabulary.setView('flashcards')" 
                                class="btn ${this.currentView === 'flashcards' ? 'btn-primary' : 'btn-secondary'} flex-1">
                            🎴 Flashcard Game
                        </button>
                        <button onclick="Vocabulary.setView('quiz')" 
                                class="btn ${this.currentView === 'quiz' ? 'btn-primary' : 'btn-secondary'} flex-1">
                            🎯 Quiz Game
                        </button>
                    </div>
                </div>

                <!-- Content Area -->
                <div id="vocabContent">
                    ${this.renderContent()}
                </div>
            </div>
        `;
    },

    renderCategoryButtons() {
        const categories = [
            { id: 'nouns', name: 'Nouns', icon: '🏷️', count: VocabularyData.nouns.length },
            { id: 'verbs', name: 'Verbs', icon: '⚡', count: VocabularyData.verbs.length },
            { id: 'adjectives', name: 'Adjectives', icon: '🎨', count: VocabularyData.adjectives.length },
            { id: 'adverbs', name: 'Adverbs', icon: '🔄', count: VocabularyData.adverbs.length },
            { id: 'particles', name: 'Particles', icon: '🔗', count: VocabularyData.particles.length },
            { id: 'katakanaWords', name: 'Katakana', icon: '🌐', count: VocabularyData.katakanaWords.length }
        ];

        return categories.map(cat => `
            <button onclick="Vocabulary.setCategory('${cat.id}')" 
                    class="category-btn ${this.currentCategory === cat.id ? 'active' : ''}">
                <div class="text-3xl mb-1">${cat.icon}</div>
                <div class="font-semibold text-sm">${cat.name}</div>
                <div class="text-xs text-gray-500">${cat.count} words</div>
            </button>
        `).join('');
    },

    renderContent() {
        switch(this.currentView) {
            case 'browse':
                return this.renderBrowse();
            case 'flashcards':
                return this.renderFlashcards();
            case 'quiz':
                return this.renderQuiz();
            default:
                return '';
        }
    },

    renderBrowse() {
        const words = VocabularyData[this.currentCategory];
        const userData = UserData.getData();
        
        return `
            <div class="card">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl font-bold text-gray-800">
                        ${this.getCategoryTitle(this.currentCategory)}
                    </h3>
                    <div class="flex items-center gap-3">
                        <span class="badge badge-purple">${words.length} words total</span>
                        <span class="badge badge-green">${userData.vocabularyMastered.length} mastered</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${words.map(word => {
                        const isMastered = userData.vocabularyMastered.includes(word.japanese);
                        return `
                            <div class="vocab-browse-card ${isMastered ? 'mastered' : ''}" 
                                 onclick="Vocabulary.markAsLearned('${word.japanese}')">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="font-japanese text-2xl font-bold text-sakura-600">
                                        ${word.japanese}
                                    </div>
                                    ${isMastered ? '<div class="text-2xl">✅</div>' : '<div class="text-2xl opacity-30">⭕</div>'}
                                </div>
                                <div class="text-gray-600 mb-3">${word.romaji}</div>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-2 text-sm">
                                        <span>🇬🇧</span>
                                        <span class="text-gray-700">${word.english}</span>
                                    </div>
                                    <div class="flex items-center gap-2 text-sm">
                                        <span>🇩🇪</span>
                                        <span class="text-gray-700">${word.german}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-100">
                    <div class="flex items-center gap-3 text-indigo-700">
                        <span class="text-2xl">💡</span>
                        <div>
                            <p class="font-semibold">Tip: Click on any word to mark it as learned!</p>
                            <p class="text-sm">Use the games to practice and reinforce your learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderFlashcards() {
        if (!this.currentWord) {
            return this.renderGameStart('flashcards');
        }

        const isFlipped = this.gameMode === 'flashcards-flipped';
        
        return `
            <div class="card">
                <!-- Stats Bar -->
                <div class="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <div class="flex items-center gap-6">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${this.gameStats.correct}</div>
                            <div class="text-xs text-gray-600">Correct</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-sakura-600">${this.gameStats.streak}</div>
                            <div class="text-xs text-gray-600">Streak 🔥</div>
                        </div>
                    </div>
                    <button onclick="Vocabulary.endGame()" class="btn btn-secondary">
                        End Practice
                    </button>
                </div>

                <!-- Flashcard -->
                <div class="text-center mb-8">
                    <div class="flashcard-container mx-auto" style="max-width: 500px;" onclick="Vocabulary.flipCard()">
                        <div class="flashcard ${isFlipped ? 'flipped' : ''}">
                            <div class="flashcard-front">
                                <div class="font-japanese text-7xl font-bold text-gradient mb-4">
                                    ${this.currentWord.japanese}
                                </div>
                                <div class="text-xl text-gray-600">${this.currentWord.romaji}</div>
                                <div class="mt-8 text-gray-500">
                                    Click to reveal answer
                                </div>
                            </div>
                            <div class="flashcard-back">
                                <div class="text-4xl font-bold text-gray-800 mb-4">
                                    ${this.currentWord.english}
                                </div>
                                <div class="text-2xl text-gray-600">
                                    ${this.currentWord.german}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Answer Buttons -->
                ${isFlipped ? `
                    <div class="flex gap-4 justify-center">
                        <button onclick="Vocabulary.flashcardAnswer(false)" 
                                class="btn bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                            ❌ I didn't know
                        </button>
                        <button onclick="Vocabulary.flashcardAnswer(true)" 
                                class="btn bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
                            ✅ I knew it!
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    renderQuiz() {
        if (!this.currentWord) {
            return this.renderGameStart('quiz');
        }

        const options = this.generateQuizOptions();
        
        return `
            <div class="card">
                <!-- Stats Bar -->
                <div class="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <div class="flex items-center gap-6">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${this.gameStats.correct}</div>
                            <div class="text-xs text-gray-600">Correct</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-red-600">${this.gameStats.incorrect}</div>
                            <div class="text-xs text-gray-600">Incorrect</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-sakura-600">${this.gameStats.streak}</div>
                            <div class="text-xs text-gray-600">Streak 🔥</div>
                        </div>
                    </div>
                    <button onclick="Vocabulary.endGame()" class="btn btn-secondary">
                        End Quiz
                    </button>
                </div>

                <!-- Question -->
                <div class="text-center mb-8">
                    <p class="text-gray-600 mb-6">What does this word mean?</p>
                    <div class="inline-flex flex-col items-center justify-center p-12 bg-gradient-to-br from-sakura-100 to-indigo-100 rounded-3xl border-4 border-sakura-300 shadow-xl mb-8">
                        <div class="font-japanese text-7xl font-bold text-gradient mb-3">
                            ${this.currentWord.japanese}
                        </div>
                        <div class="text-2xl text-gray-600">${this.currentWord.romaji}</div>
                    </div>
                </div>

                <!-- Options -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    ${options.map(option => `
                        <button onclick="Vocabulary.checkQuizAnswer('${option}')" 
                                class="quiz-option p-6 text-xl font-semibold rounded-2xl border-3 border-gray-300 bg-white hover:border-sakura-500 hover:bg-sakura-50 transition-all duration-200 hover:scale-105">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderGameStart(gameType) {
        const words = VocabularyData[this.currentCategory];
        const userData = UserData.getData();
        const masteredCount = words.filter(w => userData.vocabularyMastered.includes(w.japanese)).length;
        
        return `
            <div class="card">
                <div class="text-center mb-8">
                    <div class="text-6xl mb-4">${gameType === 'flashcards' ? '🎴' : '🎯'}</div>
                    <h3 class="text-3xl font-bold text-gradient mb-2">
                        ${gameType === 'flashcards' ? 'Flashcard Practice' : 'Quiz Game'}
                    </h3>
                    <p class="text-gray-600">
                        ${gameType === 'flashcards' ? 'Test yourself with flashcards' : 'Multiple choice quiz'}
                    </p>
                </div>

                <div class="grid grid-cols-3 gap-6 mb-8">
                    <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                        <div class="text-4xl font-bold text-indigo-600 mb-2">${words.length}</div>
                        <div class="text-sm text-gray-600">Total Words</div>
                    </div>
                    <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                        <div class="text-4xl font-bold text-green-600 mb-2">${masteredCount}</div>
                        <div class="text-sm text-gray-600">Mastered</div>
                    </div>
                    <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                        <div class="text-4xl font-bold text-sakura-600 mb-2">${words.length - masteredCount}</div>
                        <div class="text-sm text-gray-600">To Learn</div>
                    </div>
                </div>

                <div class="text-center">
                    <button onclick="Vocabulary.startGame('${gameType}')" class="btn btn-primary text-lg px-12 py-4">
                        🚀 Start ${gameType === 'flashcards' ? 'Practice' : 'Quiz'}
                    </button>
                </div>
            </div>
        `;
    },

    setCategory(category) {
        this.currentCategory = category;
        this.endGame();
        this.render();
    },

    setView(view) {
        this.currentView = view;
        this.endGame();
        this.render();
    },

    getCategoryTitle(category) {
        const titles = {
            nouns: '🏷️ Nouns',
            verbs: '⚡ Verbs',
            adjectives: '🎨 Adjectives',
            adverbs: '🔄 Adverbs',
            particles: '🔗 Particles',
            katakanaWords: '🌐 Katakana Words'
        };
        return titles[category] || category;
    },

    markAsLearned(wordJapanese) {
        UserData.learnVocabulary(wordJapanese);
        this.render();
    },

    startGame(gameType) {
        this.gameMode = gameType;
        this.gameStats = { correct: 0, incorrect: 0, streak: 0 };
        this.generatePracticeQueue();
        this.nextWord();
    },

    generatePracticeQueue() {
        const words = VocabularyData[this.currentCategory];
        const userData = UserData.getData();
        
        // Prioritize unmastered words
        const weightedList = [];
        words.forEach(word => {
            const isMastered = userData.vocabularyMastered.includes(word.japanese);
            const weight = isMastered ? 1 : 5; // Unmastered words appear 5x more
            
            for (let i = 0; i < weight; i++) {
                weightedList.push(word);
            }
        });
        
        this.practiceQueue = this.shuffle(weightedList);
    },

    nextWord() {
        if (this.practiceQueue.length === 0) {
            this.generatePracticeQueue();
        }
        
        this.currentWord = this.practiceQueue.pop();
        if (this.gameMode === 'flashcards') {
            this.gameMode = 'flashcards'; // Reset flip state
        }
        this.render();
    },

    flipCard() {
        if (this.gameMode === 'flashcards') {
            this.gameMode = 'flashcards-flipped';
            this.render();
        }
    },

    flashcardAnswer(knew) {
        if (knew) {
            this.gameStats.correct++;
            this.gameStats.streak++;
            UserData.addXP(3);
            UserData.learnVocabulary(this.currentWord.japanese);
        } else {
            this.gameStats.streak = 0;
        }
        
        setTimeout(() => {
            this.gameMode = 'flashcards';
            this.nextWord();
        }, 300);
    },

    generateQuizOptions() {
        const words = VocabularyData[this.currentCategory];
        const correctAnswer = this.currentWord.english;
        
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            if (randomWord.english !== correctAnswer && !wrongAnswers.includes(randomWord.english)) {
                wrongAnswers.push(randomWord.english);
            }
        }
        
        return this.shuffle([correctAnswer, ...wrongAnswers]);
    },

    checkQuizAnswer(selectedAnswer) {
        const isCorrect = selectedAnswer === this.currentWord.english;
        
        if (isCorrect) {
            this.gameStats.correct++;
            this.gameStats.streak++;
            UserData.addXP(5);
            UserData.learnVocabulary(this.currentWord.japanese);
            this.showFeedback(true);
        } else {
            this.gameStats.incorrect++;
            this.gameStats.streak = 0;
            this.showFeedback(false, this.currentWord.english);
        }
        
        setTimeout(() => {
            this.nextWord();
        }, 1200);
    },

    showFeedback(isCorrect, correctAnswer = null) {
        const feedback = document.createElement('div');
        feedback.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-8 rounded-3xl text-center ${
            isCorrect ? 'bg-green-500' : 'bg-red-500'
        } text-white text-3xl font-bold shadow-2xl`;
        feedback.style.animation = 'fadeIn 0.3s ease';
        
        if (isCorrect) {
            feedback.innerHTML = '✅ Correct!<br><span class="text-lg">+5 XP</span>';
        } else {
            feedback.innerHTML = `❌ Incorrect<br><span class="text-lg">Correct: ${correctAnswer}</span>`;
        }
        
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 1100);
    },

    endGame() {
        this.currentWord = null;
        this.gameMode = null;
        this.practiceQueue = [];
        this.render();
    },

    shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
};

// Add vocabulary styles
const style = document.createElement('style');
style.textContent = `
    .category-btn {
        padding: 16px 12px;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        background: white;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
    }
    
    .category-btn:hover {
        border-color: #f9408a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(249, 64, 138, 0.2);
    }
    
    .category-btn.active {
        border-color: #f9408a;
        background: linear-gradient(135deg, rgba(249, 64, 138, 0.1), rgba(99, 102, 241, 0.1));
    }
    
    .vocab-browse-card {
        padding: 20px;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        background: white;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .vocab-browse-card:hover {
        border-color: #f9408a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(249, 64, 138, 0.2);
    }
    
    .vocab-browse-card.mastered {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
        border-color: #10b981;
    }
    
    .flashcard-container {
        perspective: 1000px;
        height: 400px;
        cursor: pointer;
    }
    
    .flashcard {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    
    .flashcard.flipped {
        transform: rotateY(180deg);
    }
    
    .flashcard-front,
    .flashcard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        padding: 40px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
    
    .flashcard-front {
        background: linear-gradient(135deg, #ffffff, #f8fafc);
        border: 3px solid #e2e8f0;
    }
    
    .flashcard-back {
        background: linear-gradient(135deg, #f9408a, #6366f1);
        color: white;
        transform: rotateY(180deg);
    }
    
    .quiz-option {
        position: relative;
        overflow: hidden;
    }
    
    .quiz-option:active {
        transform: scale(0.95) !important;
    }
`;
document.head.appendChild(style);

// Kana Dojo Module
window.KanaDojo = {
    currentMode: 'hiragana',
    currentView: 'chart',
    practiceQueue: [],
    currentKana: null,
    practiceStats: { correct: 0, incorrect: 0, streak: 0 },

    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('kanaDojoContainer');
        
        if (!container) {
            console.error('KanaDojo container not found!');
            return;
        }
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Mode Selector -->
                <div class="card">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800">Kana Practice Mode</h3>
                            <p class="text-gray-600">Select which kana system to practice</p>
                        </div>
                        <div class="flex gap-3">
                            <button onclick="KanaDojo.setMode('hiragana')" 
                                    class="btn ${this.currentMode === 'hiragana' ? 'btn-primary' : 'btn-secondary'}">
                                ひらがな Hiragana
                            </button>
                            <button onclick="KanaDojo.setMode('katakana')" 
                                    class="btn ${this.currentMode === 'katakana' ? 'btn-primary' : 'btn-secondary'}">
                                カタカナ Katakana
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="KanaDojo.setView('chart')" 
                                class="btn ${this.currentView === 'chart' ? 'btn-primary' : 'btn-secondary'} flex-1">
                            📋 Kana Chart
                        </button>
                        <button onclick="KanaDojo.setView('practice')" 
                                class="btn ${this.currentView === 'practice' ? 'btn-primary' : 'btn-secondary'} flex-1">
                            🎮 Practice Game
                        </button>
                    </div>
                </div>

                <!-- Content Area -->
                <div id="kanaContent">
                    ${this.currentView === 'chart' ? this.renderChart() : this.renderPractice()}
                </div>
            </div>
        `;
    },

    renderChart() {
        const kanaList = this.currentMode === 'hiragana' ? KanaData.hiragana : KanaData.katakana;
        const userData = UserData.getData();
        const kanaKnowledge = userData.kanaKnowledge[this.currentMode] || {};
        
        return `
            <div class="card">
                <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>${this.currentMode === 'hiragana' ? 'ひらがな' : 'カタカナ'}</span>
                    <span>Chart</span>
                    <span class="badge badge-purple ml-auto">${kanaList.length} Characters</span>
                </h3>
                
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
                    ${kanaList.map(item => {
                        const knowledge = kanaKnowledge[item.kana] || { attempts: 0, correct: 0 };
                        const mastery = knowledge.attempts > 0 ? Math.round((knowledge.correct / knowledge.attempts) * 100) : 0;
                        const isMastered = knowledge.attempts >= 5 && mastery >= 80;
                        
                        return `
                            <div class="flip-card" onclick="this.classList.toggle('flipped')" data-kana="${item.kana}">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div class="font-japanese">${item.kana}</div>
                                        ${isMastered ? '<div class="absolute top-2 right-2 text-xl">✅</div>' : ''}
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="text-2xl mb-2">${item.romaji}</div>
                                        ${knowledge.attempts > 0 ? `<div class="text-sm">${mastery}% mastery</div>` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="mt-6 p-4 bg-indigo-50 rounded-xl border-2 border-indigo-200">
                    <div class="flex items-center gap-3 text-indigo-700">
                        <span class="text-2xl">💡</span>
                        <div>
                            <p class="font-semibold">Tip: Click on any card to flip it and see the romaji!</p>
                            <p class="text-sm">Practice with the game mode to improve your mastery.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderPractice() {
        if (!this.currentKana) {
            return this.renderPracticeStart();
        }
        
        return this.renderPracticeQuestion();
    },

    renderPracticeStart() {
        const userData = UserData.getData();
        const kanaKnowledge = userData.kanaKnowledge[this.currentMode] || {};
        const kanaList = this.currentMode === 'hiragana' ? KanaData.hiragana : KanaData.katakana;
        
        // Calculate stats
        const totalKana = kanaList.length;
        const practicedKana = Object.keys(kanaKnowledge).length;
        const masteredKana = Object.values(kanaKnowledge).filter(k => 
            k.attempts >= 5 && (k.correct / k.attempts) >= 0.8
        ).length;
        
        return `
            <div class="card">
                <div class="text-center mb-8">
                    <div class="text-6xl mb-4">🥋</div>
                    <h3 class="text-3xl font-bold text-gradient mb-2">Kana Dojo Training</h3>
                    <p class="text-gray-600">Smart practice system that adapts to your learning</p>
                </div>
                
                <div class="grid grid-cols-3 gap-6 mb-8">
                    <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                        <div class="text-4xl font-bold text-indigo-600 mb-2">${totalKana}</div>
                        <div class="text-sm text-gray-600">Total Kana</div>
                    </div>
                    <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                        <div class="text-4xl font-bold text-sakura-600 mb-2">${practicedKana}</div>
                        <div class="text-sm text-gray-600">Practiced</div>
                    </div>
                    <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                        <div class="text-4xl font-bold text-green-600 mb-2">${masteredKana}</div>
                        <div class="text-sm text-gray-600">Mastered</div>
                    </div>
                </div>
                
                <div class="space-y-4 mb-8">
                    <div class="p-6 bg-gradient-to-r from-sakura-50 to-indigo-50 rounded-2xl border-2 border-sakura-200">
                        <h4 class="font-bold text-lg mb-3 flex items-center gap-2">
                            <span>🎯</span>
                            <span>How It Works</span>
                        </h4>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-start gap-2">
                                <span class="text-sakura-500">•</span>
                                <span>The system analyzes which kana you need to practice most</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-sakura-500">•</span>
                                <span>Characters you struggle with appear more frequently</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-sakura-500">•</span>
                                <span>Practice until you master all ${totalKana} characters!</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="text-center">
                    <button onclick="KanaDojo.startPractice()" class="btn btn-primary text-lg px-12 py-4">
                        🚀 Start Practice Session
                    </button>
                </div>
            </div>
        `;
    },

    renderPracticeQuestion() {
        const options = this.generateOptions();
        
        return `
            <div class="card">
                <!-- Stats Bar -->
                <div class="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <div class="flex items-center gap-6">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${this.practiceStats.correct}</div>
                            <div class="text-xs text-gray-600">Correct</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-red-600">${this.practiceStats.incorrect}</div>
                            <div class="text-xs text-gray-600">Incorrect</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-sakura-600">${this.practiceStats.streak}</div>
                            <div class="text-xs text-gray-600">Streak 🔥</div>
                        </div>
                    </div>
                    <button onclick="KanaDojo.endPractice()" class="btn btn-secondary">
                        End Practice
                    </button>
                </div>
                
                <!-- Question -->
                <div class="text-center mb-12">
                    <p class="text-gray-600 mb-6">What is the romaji for this kana?</p>
                    <div class="inline-flex items-center justify-center w-48 h-48 bg-gradient-to-br from-sakura-100 to-indigo-100 rounded-3xl border-4 border-sakura-300 shadow-xl mb-8">
                        <div class="font-japanese text-8xl font-bold text-gradient">${this.currentKana.kana}</div>
                    </div>
                </div>
                
                <!-- Options -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    ${options.map((option, index) => `
                        <button onclick="KanaDojo.checkAnswer('${option}')" 
                                class="option-button p-6 text-2xl font-bold rounded-2xl border-3 border-gray-300 bg-white hover:border-sakura-500 hover:bg-sakura-50 transition-all duration-200 hover:scale-105">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    setMode(mode) {
        this.currentMode = mode;
        this.endPractice();
        this.render();
    },

    setView(view) {
        this.currentView = view;
        if (view === 'practice') {
            this.endPractice();
        }
        this.render();
    },

    startPractice() {
        this.practiceStats = { correct: 0, incorrect: 0, streak: 0 };
        this.generatePracticeQueue();
        this.nextQuestion();
    },

    generatePracticeQueue() {
        const userData = UserData.getData();
        const kanaKnowledge = userData.kanaKnowledge[this.currentMode] || {};
        const kanaList = this.currentMode === 'hiragana' ? KanaData.hiragana : KanaData.katakana;
        
        // Create weighted list based on performance
        const weightedList = [];
        
        kanaList.forEach(kana => {
            const knowledge = kanaKnowledge[kana.kana] || { attempts: 0, correct: 0 };
            let weight = 5; // Default weight for new kana
            
            if (knowledge.attempts > 0) {
                const accuracy = knowledge.correct / knowledge.attempts;
                if (accuracy < 0.5) weight = 10; // Struggling - practice more
                else if (accuracy < 0.7) weight = 7; // Needs work
                else if (accuracy < 0.9) weight = 3; // Pretty good
                else weight = 1; // Mastered - occasional review
            }
            
            // Add to weighted list
            for (let i = 0; i < weight; i++) {
                weightedList.push(kana);
            }
        });
        
        // Shuffle
        this.practiceQueue = this.shuffle(weightedList);
    },

    nextQuestion() {
        if (this.practiceQueue.length === 0) {
            this.generatePracticeQueue();
        }
        
        this.currentKana = this.practiceQueue.pop();
        this.render();
    },

    generateOptions() {
        const kanaList = this.currentMode === 'hiragana' ? KanaData.hiragana : KanaData.katakana;
        const correctAnswer = this.currentKana.romaji;
        
        // Get 3 random wrong answers
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const randomKana = kanaList[Math.floor(Math.random() * kanaList.length)];
            if (randomKana.romaji !== correctAnswer && !wrongAnswers.includes(randomKana.romaji)) {
                wrongAnswers.push(randomKana.romaji);
            }
        }
        
        // Combine and shuffle
        const allOptions = [correctAnswer, ...wrongAnswers];
        return this.shuffle(allOptions);
    },

    checkAnswer(selectedAnswer) {
        const isCorrect = selectedAnswer === this.currentKana.romaji;
        
        // Update user data
        UserData.updateKanaProgress(this.currentMode, this.currentKana.kana, isCorrect);
        
        // Update stats
        if (isCorrect) {
            this.practiceStats.correct++;
            this.practiceStats.streak++;
            UserData.addXP(5);
            this.showFeedback(true);
        } else {
            this.practiceStats.incorrect++;
            this.practiceStats.streak = 0;
            this.showFeedback(false, this.currentKana.romaji);
        }
        
        // Next question after delay
        setTimeout(() => {
            this.nextQuestion();
        }, 1000);
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
            feedback.innerHTML = `❌ Incorrect<br><span class="text-lg">Correct answer: ${correctAnswer}</span>`;
        }
        
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 900);
    },

    endPractice() {
        this.currentKana = null;
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

// Add option button styles
(function() {
    const style = document.createElement('style');
    style.textContent += `
    .option-button {
        transition: all 0.2s ease;
    }
    
    .option-button:active {
        transform: scale(0.95) !important;
    }
    
    .flip-card {
        position: relative;
    }
    
    .flip-card .absolute {
        position: absolute;
    }
`;
document.head.appendChild(style);
})();

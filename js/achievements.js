// Achievements Module
const Achievements = {
    currentFilter: 'all',

    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('achievementsContainer');
        const userData = UserData.getData();
        
        const achievements = userData.achievements;
        const unlocked = achievements.filter(a => a.unlocked);
        const locked = achievements.filter(a => !a.unlocked);
        
        // Group by category
        const categories = {
            all: achievements,
            milestone: achievements.filter(a => a.category === 'milestone'),
            kana: achievements.filter(a => a.category === 'kana'),
            vocabulary: achievements.filter(a => a.category === 'vocabulary'),
            grammar: achievements.filter(a => a.category === 'grammar'),
            streak: achievements.filter(a => a.category === 'streak'),
            quests: achievements.filter(a => a.category === 'quests'),
            daily: achievements.filter(a => a.category === 'daily'),
            special: achievements.filter(a => a.category === 'special')
        };
        
        const currentAchievements = categories[this.currentFilter];
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Stats Banner -->
                <div class="card bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-3xl font-bold mb-2">🏆 Achievement Hunter</h3>
                            <p class="text-white/90 text-lg">You've unlocked ${unlocked.length} out of ${achievements.length} achievements!</p>
                        </div>
                        <div class="text-center">
                            <div class="text-6xl font-bold mb-2">${unlocked.length}</div>
                            <div class="text-xl">Unlocked</div>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <div class="flex justify-between text-sm mb-2">
                            <span>Overall Progress</span>
                            <span>${Math.round((unlocked.length / achievements.length) * 100)}%</span>
                        </div>
                        <div class="h-4 bg-white/20 rounded-full overflow-hidden">
                            <div class="h-full bg-white rounded-full" style="width: ${(unlocked.length / achievements.length) * 100}%"></div>
                        </div>
                    </div>
                </div>

                <!-- Category Filter -->
                <div class="card">
                    <h3 class="text-lg font-bold mb-4">Filter by Category</h3>
                    <div class="flex flex-wrap gap-2">
                        ${this.renderFilterButtons(categories)}
                    </div>
                </div>

                <!-- Achievements Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${currentAchievements.map(achievement => this.renderAchievementCard(achievement, userData)).join('')}
                </div>
            </div>
        `;
    },

    renderFilterButtons(categories) {
        const filters = [
            { id: 'all', label: 'All', icon: '🌟' },
            { id: 'milestone', label: 'Milestones', icon: '🎯' },
            { id: 'kana', label: 'Kana', icon: '📝' },
            { id: 'vocabulary', label: 'Vocabulary', icon: '📚' },
            { id: 'grammar', label: 'Grammar', icon: '✍️' },
            { id: 'streak', label: 'Streaks', icon: '🔥' },
            { id: 'quests', label: 'Quests', icon: '⚔️' },
            { id: 'daily', label: 'Daily', icon: '📆' },
            { id: 'special', label: 'Special', icon: '⭐' }
        ];

        return filters.map(filter => {
            const count = categories[filter.id].length;
            return `
                <button onclick="Achievements.setFilter('${filter.id}')" 
                        class="filter-btn ${this.currentFilter === filter.id ? 'active' : ''}">
                    <span>${filter.icon}</span>
                    <span>${filter.label}</span>
                    <span class="badge badge-purple text-xs ml-2">${count}</span>
                </button>
            `;
        }).join('');
    },

    renderAchievementCard(achievement, userData) {
        const isUnlocked = achievement.unlocked;
        const unlockedDate = achievement.unlockedDate ? new Date(achievement.unlockedDate).toLocaleDateString() : '';
        
        // Calculate progress for locked achievements
        let progress = 0;
        let progressText = '';
        
        if (!isUnlocked) {
            switch(achievement.id) {
                case 'kana_beginner':
                    const hiraganaCount = Object.keys(userData.kanaKnowledge.hiragana || {}).length;
                    progress = Math.min((hiraganaCount / 10) * 100, 100);
                    progressText = `${hiraganaCount}/10 Hiragana learned`;
                    break;
                case 'vocab_novice':
                    progress = Math.min((userData.wordsLearned / 50) * 100, 100);
                    progressText = `${userData.wordsLearned}/50 words learned`;
                    break;
                case 'vocab_apprentice':
                    progress = Math.min((userData.wordsLearned / 200) * 100, 100);
                    progressText = `${userData.wordsLearned}/200 words learned`;
                    break;
                case 'vocab_expert':
                    progress = Math.min((userData.wordsLearned / 500) * 100, 100);
                    progressText = `${userData.wordsLearned}/500 words learned`;
                    break;
                case 'dedicated_learner':
                    progress = Math.min((userData.streak / 7) * 100, 100);
                    progressText = `${userData.streak}/7 day streak`;
                    break;
                case 'consistency_king':
                    progress = Math.min((userData.streak / 30) * 100, 100);
                    progressText = `${userData.streak}/30 day streak`;
                    break;
            }
        }
        
        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="flex items-start gap-4 mb-4">
                    <div class="text-6xl">${achievement.icon}</div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">${achievement.name}</h3>
                        <p class="text-sm text-gray-600 mb-2">${achievement.description}</p>
                        ${isUnlocked ? `
                            <div class="flex items-center gap-2 text-xs text-green-600">
                                <span>✅</span>
                                <span>Unlocked ${unlockedDate}</span>
                            </div>
                        ` : `
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span>🔒</span>
                                <span>Locked</span>
                            </div>
                        `}
                    </div>
                </div>
                
                ${!isUnlocked && progress > 0 ? `
                    <div class="mb-4">
                        <div class="flex justify-between text-xs text-gray-600 mb-1">
                            <span>${progressText}</span>
                            <span>${Math.round(progress)}%</span>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-sakura-500 to-indigo-500 rounded-full" style="width: ${progress}%"></div>
                        </div>
                    </div>
                ` : ''}
                
                <div class="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    <span class="badge badge-gold">+${achievement.xpReward} XP</span>
                    <span class="badge badge-purple">${achievement.category}</span>
                </div>
            </div>
        `;
    },

    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }
};

// Add achievement styles
const style = document.createElement('style');
style.textContent = `
    .filter-btn {
        padding: 8px 16px;
        border-radius: 12px;
        border: 2px solid #e2e8f0;
        background: white;
        cursor: pointer;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 500;
    }
    
    .filter-btn:hover {
        border-color: #f9408a;
        background: linear-gradient(135deg, rgba(249, 64, 138, 0.05), rgba(99, 102, 241, 0.05));
    }
    
    .filter-btn.active {
        border-color: #f9408a;
        background: linear-gradient(135deg, rgba(249, 64, 138, 0.15), rgba(99, 102, 241, 0.15));
        font-weight: 600;
    }
`;
document.head.appendChild(style);

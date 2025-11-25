// Main Application Controller
class GoJapanApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadPage('dashboard');
        this.updateUserDisplay();
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
    }

    navigateTo(page) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === page) {
                item.classList.add('active');
            }
        });

        // Load page content
        this.loadPage(page);
        this.currentPage = page;
    }

    loadPage(page) {
        const pageContent = document.getElementById('pageContent');
        const pageTitle = document.getElementById('pageTitle');
        const pageSubtitle = document.getElementById('pageSubtitle');

        // Clear current content with fade out
        pageContent.style.opacity = '0';
        
        setTimeout(() => {
            switch(page) {
                case 'dashboard':
                    pageTitle.textContent = 'Dashboard';
                    pageSubtitle.textContent = 'Welcome back! Ready to continue your Japanese journey?';
                    pageContent.innerHTML = this.getDashboardHTML();
                    break;
                case 'learning-path':
                    pageTitle.textContent = 'Learning Path';
                    pageSubtitle.textContent = 'Follow the path from beginner to N5 mastery';
                    pageContent.innerHTML = this.getLearningPathHTML();
                    setTimeout(() => {
                        if (window.LearningPath && document.getElementById('learningPathContainer')) {
                            window.LearningPath.init();
                        }
                    }, 250);
                    break;
                case 'kana-dojo':
                    pageTitle.textContent = 'Kana Dojo';
                    pageSubtitle.textContent = 'Master Hiragana and Katakana';
                    pageContent.innerHTML = this.getKanaDojoHTML();
                    setTimeout(() => {
                        if (window.KanaDojo && document.getElementById('kanaDojoContainer')) {
                            window.KanaDojo.init();
                        }
                    }, 250);
                    break;
                case 'vocabulary':
                    pageTitle.textContent = 'Vocabulary';
                    pageSubtitle.textContent = 'Learn all N5 vocabulary words';
                    pageContent.innerHTML = this.getVocabularyHTML();
                    setTimeout(() => {
                        if (window.Vocabulary && document.getElementById('vocabularyContainer')) {
                            window.Vocabulary.init();
                        }
                    }, 250);
                    break;
                case 'grammar':
                    pageTitle.textContent = 'Grammar Rules';
                    pageSubtitle.textContent = 'Master essential N5 grammar patterns';
                    pageContent.innerHTML = this.getGrammarHTML();
                    setTimeout(() => {
                        if (window.Grammar && document.getElementById('grammarContainer')) {
                            window.Grammar.init();
                        }
                    }, 250);
                    break;
                case 'achievements':
                    pageTitle.textContent = 'Achievements';
                    pageSubtitle.textContent = 'Track your learning milestones';
                    pageContent.innerHTML = this.getAchievementsHTML();
                    setTimeout(() => {
                        if (window.Achievements && document.getElementById('achievementsContainer')) {
                            window.Achievements.init();
                        }
                    }, 250);
                    break;
                case 'quests':
                    pageTitle.textContent = 'Quests';
                    pageSubtitle.textContent = 'Complete quests to earn XP and rewards';
                    pageContent.innerHTML = this.getQuestsHTML();
                    setTimeout(() => {
                        if (window.Quests && document.getElementById('questsContainer')) {
                            window.Quests.init();
                        }
                    }, 250);
                    break;
                case 'daily-missions':
                    pageTitle.textContent = 'Daily Missions';
                    pageSubtitle.textContent = 'Complete daily challenges to maintain your streak';
                    pageContent.innerHTML = this.getDailyMissionsHTML();
                    setTimeout(() => {
                        if (window.DailyMissions && document.getElementById('dailyMissionsContainer')) {
                            window.DailyMissions.init();
                        }
                    }, 250);
                    break;
                case 'profile':
                    pageTitle.textContent = 'Profile';
                    pageSubtitle.textContent = 'View your progress and statistics';
                    pageContent.innerHTML = this.getProfileHTML();
                    break;
                default:
                    pageContent.innerHTML = '<p>Page not found</p>';
            }

            // Fade in new content
            setTimeout(() => {
                pageContent.style.opacity = '1';
            }, 50);
        }, 200);
    }

    getDashboardHTML() {
        const userData = UserData.getData();
        const dailyMissions = userData.dailyMissions || [];
        const recentAchievements = userData.achievements.filter(a => a.unlocked).slice(0, 3);

        return `
            <div class="space-y-6">
                <!-- Welcome Banner -->
                <div class="card bg-gradient-to-br from-sakura-500 to-indigo-600 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold mb-2">おはよう！ (Good morning!)</h3>
                            <p class="text-white/90 mb-4">You're on a ${userData.streak} day streak! Keep it going!</p>
                            <button class="btn bg-white text-sakura-600 hover:bg-gray-50">
                                Start Today's Lesson →
                            </button>
                        </div>
                        <div class="text-6xl">🎌</div>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="card text-center hover-lift">
                        <div class="text-4xl mb-3">📊</div>
                        <div class="text-3xl font-bold text-sakura-600">${userData.level}</div>
                        <div class="text-sm text-gray-500">Current Level</div>
                    </div>
                    <div class="card text-center hover-lift">
                        <div class="text-4xl mb-3">⚡</div>
                        <div class="text-3xl font-bold text-indigo-600">${userData.xp}</div>
                        <div class="text-sm text-gray-500">Total XP</div>
                    </div>
                    <div class="card text-center hover-lift">
                        <div class="text-4xl mb-3">📚</div>
                        <div class="text-3xl font-bold text-purple-600">${userData.wordsLearned}</div>
                        <div class="text-sm text-gray-500">Words Learned</div>
                    </div>
                    <div class="card text-center hover-lift">
                        <div class="text-4xl mb-3">🏆</div>
                        <div class="text-3xl font-bold text-yellow-600">${recentAchievements.length}</div>
                        <div class="text-sm text-gray-500">Achievements</div>
                    </div>
                </div>

                <!-- Two Column Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Daily Missions -->
                    <div class="card">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="card-header">📆 Today's Missions</h3>
                            <span class="badge badge-purple">${dailyMissions.filter(m => m.completed).length}/${dailyMissions.length}</span>
                        </div>
                        <div class="space-y-3">
                            ${dailyMissions.slice(0, 3).map(mission => `
                                <div class="flex items-center gap-3 p-3 rounded-lg ${mission.completed ? 'bg-green-50' : 'bg-gray-50'}">
                                    <div class="text-2xl">${mission.completed ? '✅' : '⭕'}</div>
                                    <div class="flex-1">
                                        <p class="font-semibold text-sm ${mission.completed ? 'line-through text-gray-500' : 'text-gray-800'}">${mission.title}</p>
                                        <div class="flex items-center gap-2 mt-1">
                                            <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div class="h-full bg-gradient-to-r from-sakura-500 to-indigo-500" style="width: ${mission.progress}%"></div>
                                            </div>
                                            <span class="text-xs text-gray-500">${mission.progress}%</span>
                                        </div>
                                    </div>
                                    <span class="badge badge-gold">+${mission.xpReward} XP</span>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-secondary w-full mt-4" onclick="app.navigateTo('daily-missions')">
                            View All Missions
                        </button>
                    </div>

                    <!-- Recent Achievements -->
                    <div class="card">
                        <h3 class="card-header">🏆 Recent Achievements</h3>
                        <div class="space-y-3">
                            ${recentAchievements.length > 0 ? recentAchievements.map(achievement => `
                                <div class="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
                                    <div class="text-3xl">${achievement.icon}</div>
                                    <div class="flex-1">
                                        <p class="font-semibold text-sm text-gray-800">${achievement.name}</p>
                                        <p class="text-xs text-gray-600">${achievement.description}</p>
                                    </div>
                                    <span class="badge badge-gold">+${achievement.xpReward} XP</span>
                                </div>
                            `).join('') : '<p class="text-gray-500 text-center py-8">No achievements yet. Keep learning!</p>'}
                        </div>
                        <button class="btn btn-secondary w-full mt-4" onclick="app.navigateTo('achievements')">
                            View All Achievements
                        </button>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="card">
                    <h3 class="card-header">🚀 Quick Actions</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button class="btn btn-secondary flex-col h-24" onclick="app.navigateTo('learning-path')">
                            <span class="text-2xl">🗺️</span>
                            <span>Continue Path</span>
                        </button>
                        <button class="btn btn-secondary flex-col h-24" onclick="app.navigateTo('kana-dojo')">
                            <span class="text-2xl">🥋</span>
                            <span>Practice Kana</span>
                        </button>
                        <button class="btn btn-secondary flex-col h-24" onclick="app.navigateTo('vocabulary')">
                            <span class="text-2xl">📚</span>
                            <span>Study Vocab</span>
                        </button>
                        <button class="btn btn-secondary flex-col h-24" onclick="app.navigateTo('grammar')">
                            <span class="text-2xl">📝</span>
                            <span>Review Grammar</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getLearningPathHTML() {
        return '<div id="learningPathContainer"></div>';
    }

    getKanaDojoHTML() {
        return '<div id="kanaDojoContainer"></div>';
    }

    getVocabularyHTML() {
        return '<div id="vocabularyContainer"></div>';
    }

    getGrammarHTML() {
        return '<div id="grammarContainer"></div>';
    }

    getAchievementsHTML() {
        return '<div id="achievementsContainer"></div>';
    }

    getQuestsHTML() {
        return '<div id="questsContainer"></div>';
    }

    getDailyMissionsHTML() {
        return '<div id="dailyMissionsContainer"></div>';
    }

    getProfileHTML() {
        const userData = UserData.getData();
        const totalAchievements = userData.achievements.length;
        const unlockedAchievements = userData.achievements.filter(a => a.unlocked).length;
        
        return `
            <div class="space-y-6">
                <!-- Profile Header -->
                <div class="card bg-gradient-to-br from-sakura-500 to-indigo-600 text-white">
                    <div class="flex items-center gap-6">
                        <div class="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white/50">
                            ${userData.name.charAt(0).toUpperCase()}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h2 class="text-3xl font-bold">${userData.name}</h2>
                                <button onclick="app.showEditUsernameModal()" class="btn bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 backdrop-blur-xl" title="Edit username">
                                    ✏️ Edit
                                </button>
                            </div>
                            <div class="flex gap-4 text-white/90">
                                <span>Level ${userData.level}</span>
                                <span>•</span>
                                <span>Member since ${new Date(userData.joinedDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="card text-center">
                        <div class="text-4xl mb-2">🔥</div>
                        <div class="text-2xl font-bold text-sakura-600">${userData.streak}</div>
                        <div class="text-sm text-gray-500">Day Streak</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-4xl mb-2">⚡</div>
                        <div class="text-2xl font-bold text-indigo-600">${userData.xp}</div>
                        <div class="text-sm text-gray-500">Total XP</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-4xl mb-2">📚</div>
                        <div class="text-2xl font-bold text-purple-600">${userData.wordsLearned}</div>
                        <div class="text-sm text-gray-500">Words Learned</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-4xl mb-2">🏆</div>
                        <div class="text-2xl font-bold text-yellow-600">${unlockedAchievements}/${totalAchievements}</div>
                        <div class="text-sm text-gray-500">Achievements</div>
                    </div>
                </div>

                <!-- Progress Overview -->
                <div class="card">
                    <h3 class="card-header">📊 Learning Progress</h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="font-semibold">Hiragana Mastery</span>
                                <span class="text-gray-600">${userData.hiraganaProgress}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${userData.hiraganaProgress}%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="font-semibold">Katakana Mastery</span>
                                <span class="text-gray-600">${userData.katakanaProgress}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${userData.katakanaProgress}%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="font-semibold">Vocabulary</span>
                                <span class="text-gray-600">${Math.round((userData.wordsLearned / 800) * 100)}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${(userData.wordsLearned / 800) * 100}%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="font-semibold">Grammar Patterns</span>
                                <span class="text-gray-600">${userData.grammarProgress}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${userData.grammarProgress}%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Danger Zone -->
                <div class="card bg-red-50 border-2 border-red-200">
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">⚠️</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-red-800 mb-2">Danger Zone</h3>
                            <p class="text-red-700 mb-4">Resetting your progress will permanently delete all your learning data. This action cannot be undone!</p>
                            <button onclick="UserData.resetAllData()" class="btn bg-red-600 hover:bg-red-700 text-white">
                                🗑️ Reset All Progress
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Japan Trip Countdown -->
                <div class="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-indigo-200">
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">✈️</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-indigo-800 mb-2">Japan Trip Countdown</h3>
                            <p class="text-indigo-700 mb-4">Set your next trip date to Japan and track your countdown!</p>
                            
                            ${userData.japanTripDate ? `
                                <div class="mb-4 p-4 bg-white rounded-lg border-2 border-indigo-300">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-sm text-gray-600 mb-1">Your trip date:</p>
                                            <p class="text-xl font-bold text-indigo-600">${new Date(userData.japanTripDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-3xl font-bold text-sakura-600">${Math.ceil((new Date(userData.japanTripDate) - new Date()) / (1000 * 60 * 60 * 24))}</p>
                                            <p class="text-sm text-gray-600">Days left</p>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            
                            <div class="flex gap-3">
                                <button onclick="app.showJapanTripModal()" class="btn btn-primary">
                                    ${userData.japanTripDate ? '📅 Change Date' : '📅 Set Trip Date'}
                                </button>
                                ${userData.japanTripDate ? `
                                    <button onclick="app.clearJapanTripDate()" class="btn btn-secondary">
                                        ❌ Clear Date
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    updateUserDisplay() {
        const userData = UserData.getData();
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userLevel').textContent = userData.level;
        document.getElementById('userInitial').textContent = userData.name.charAt(0).toUpperCase();
        document.getElementById('currentXP').textContent = userData.xp;
        document.getElementById('maxXP').textContent = userData.xpToNextLevel;
        document.getElementById('streak').textContent = userData.streak;
        document.getElementById('totalWords').textContent = userData.wordsLearned;
        
        const xpPercentage = (userData.xp / userData.xpToNextLevel) * 100;
        document.getElementById('xpBar').style.width = `${xpPercentage}%`;
        
        // Update Japan countdown
        this.updateJapanCountdown();
    }

    updateJapanCountdown() {
        const userData = UserData.getData();
        const countdownElement = document.getElementById('japanCountdown');
        const countdownHeader = document.getElementById('japanCountdownHeader');
        
        if (userData.japanTripDate) {
            const daysLeft = Math.ceil((new Date(userData.japanTripDate) - new Date()) / (1000 * 60 * 60 * 24));
            
            if (daysLeft >= 0) {
                countdownElement.textContent = daysLeft;
                countdownHeader.style.display = 'block';
            } else {
                // Trip date has passed
                countdownHeader.style.display = 'none';
            }
        } else {
            countdownHeader.style.display = 'none';
        }
    }

    showJapanTripModal() {
        const userData = UserData.getData();
        const currentDate = userData.japanTripDate ? userData.japanTripDate.split('T')[0] : '';
        const today = new Date().toISOString().split('T')[0];
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'japanTripModal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h2 class="text-2xl font-bold text-gradient">✈️ Set Japan Trip Date</h2>
                    <button onclick="app.closeJapanTripModal()" class="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
                </div>
                
                <div class="modal-body">
                    <div class="mb-4">
                        <label for="tripDate" class="block text-sm font-semibold text-gray-700 mb-2">When are you flying to Japan?</label>
                        <input type="date" 
                               id="tripDate" 
                               class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sakura-500 focus:outline-none"
                               min="${today}"
                               value="${currentDate}">
                        <p class="text-xs text-gray-500 mt-1">Select your trip date to see the countdown</p>
                    </div>
                    
                    <div class="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">💡</span>
                            <div>
                                <p class="font-semibold text-blue-900 mb-1">Tip:</p>
                                <p class="text-blue-800 text-sm">Set your Japan trip date to stay motivated! The countdown will appear in the header.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button onclick="app.closeJapanTripModal()" class="btn btn-secondary">
                        Cancel
                    </button>
                    <button onclick="app.saveJapanTripDate()" class="btn btn-primary">
                        ✈️ Save Date
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus on input
        setTimeout(() => {
            const input = document.getElementById('tripDate');
            input.focus();
            
            // Allow Enter key to save
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveJapanTripDate();
                }
            });
        }, 100);
    }

    saveJapanTripDate() {
        const input = document.getElementById('tripDate');
        const tripDate = input.value;
        
        if (!tripDate) {
            this.showNotification('Please select a date!', 'error');
            input.focus();
            return;
        }
        
        const selectedDate = new Date(tripDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            this.showNotification('Please select a future date!', 'error');
            input.focus();
            return;
        }
        
        // Save the date
        UserData.updateData({ japanTripDate: tripDate });
        this.updateUserDisplay();
        this.closeJapanTripModal();
        
        const daysLeft = Math.ceil((selectedDate - new Date()) / (1000 * 60 * 60 * 24));
        this.showNotification(`Japan trip set! ${daysLeft} days to go! 🎌`, 'success');
        
        // Reload profile page if currently on it
        if (this.currentPage === 'profile') {
            this.loadPage('profile');
        }
    }

    clearJapanTripDate() {
        if (confirm('Are you sure you want to clear your Japan trip date?')) {
            UserData.updateData({ japanTripDate: null });
            this.updateUserDisplay();
            this.showNotification('Japan trip date cleared', 'success');
            
            // Reload profile page
            if (this.currentPage === 'profile') {
                this.loadPage('profile');
            }
        }
    }

    closeJapanTripModal() {
        const modal = document.getElementById('japanTripModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    showNotification(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="text-2xl">${type === 'success' ? '✅' : '⚠️'}</div>
            <div>
                <p class="font-semibold text-sm">${message}</p>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    showEditUsernameModal() {
        const userData = UserData.getData();
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'usernameModal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h2 class="text-2xl font-bold text-gradient">Edit Username</h2>
                    <button onclick="app.closeUsernameModal()" class="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
                </div>
                
                <div class="modal-body">
                    <div class="mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Current Username</label>
                        <div class="p-3 bg-gray-100 rounded-lg text-gray-700">${userData.name}</div>
                    </div>
                    
                    <div class="mb-4">
                        <label for="newUsername" class="block text-sm font-semibold text-gray-700 mb-2">New Username</label>
                        <input type="text" 
                               id="newUsername" 
                               class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-sakura-500 focus:outline-none"
                               placeholder="Enter new username"
                               value="${userData.name}"
                               maxlength="20">
                        <p class="text-xs text-gray-500 mt-1">Maximum 20 characters</p>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button onclick="app.closeUsernameModal()" class="btn btn-secondary">
                        Cancel
                    </button>
                    <button onclick="app.updateUsername()" class="btn btn-primary">
                        💾 Save Username
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus on input and select text
        setTimeout(() => {
            const input = document.getElementById('newUsername');
            input.focus();
            input.select();
            
            // Allow Enter key to save
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.updateUsername();
                }
            });
        }, 100);
    }

    updateUsername() {
        const input = document.getElementById('newUsername');
        const newUsername = input.value.trim();
        
        if (!newUsername) {
            this.showNotification('Username cannot be empty!', 'error');
            input.focus();
            return;
        }
        
        if (newUsername.length < 2) {
            this.showNotification('Username must be at least 2 characters!', 'error');
            input.focus();
            return;
        }
        
        if (newUsername.length > 20) {
            this.showNotification('Username must be 20 characters or less!', 'error');
            input.focus();
            return;
        }
        
        // Update username
        UserData.updateData({ name: newUsername });
        this.updateUserDisplay();
        this.closeUsernameModal();
        this.showNotification('Username updated successfully! 🎉', 'success');
        
        // Reload profile page if currently on it
        if (this.currentPage === 'profile') {
            this.loadPage('profile');
        }
    }

    closeUsernameModal() {
        const modal = document.getElementById('usernameModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new GoJapanApp();
});

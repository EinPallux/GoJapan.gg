// Daily Missions Module
const DailyMissions = {
    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('dailyMissionsContainer');
        const userData = UserData.getData();
        
        const missions = userData.dailyMissions;
        const completedCount = missions.filter(m => m.completed).length;
        const totalCount = missions.length;
        const allCompleted = completedCount === totalCount;
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Daily Banner -->
                <div class="card bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-3xl font-bold mb-2">📆 Daily Missions</h3>
                            <p class="text-white/90 text-lg">Complete all missions to maintain your streak!</p>
                        </div>
                        <div class="text-center">
                            <div class="text-6xl font-bold mb-2">${completedCount}/${totalCount}</div>
                            <div class="text-xl">Completed</div>
                        </div>
                    </div>
                    
                    <div>
                        <div class="flex justify-between text-sm mb-2">
                            <span>Daily Progress</span>
                            <span>${Math.round((completedCount / totalCount) * 100)}%</span>
                        </div>
                        <div class="h-4 bg-white/20 rounded-full overflow-hidden">
                            <div class="h-full bg-white rounded-full transition-all duration-500" 
                                 style="width: ${(completedCount / totalCount) * 100}%"></div>
                        </div>
                    </div>
                </div>

                ${allCompleted ? `
                    <div class="card bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                        <div class="flex items-center gap-4">
                            <div class="text-6xl">🎉</div>
                            <div>
                                <h3 class="text-2xl font-bold text-green-800 mb-2">All Missions Completed!</h3>
                                <p class="text-green-700">Amazing work! You've completed all daily missions. Come back tomorrow for new challenges!</p>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Mission List -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${missions.map(mission => this.renderMissionCard(mission)).join('')}
                </div>

                <!-- Streak Info -->
                <div class="card">
                    <div class="flex items-center gap-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                            🔥
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Current Streak</h3>
                            <p class="text-4xl font-bold text-gradient mb-2">${userData.streak} Days</p>
                            <p class="text-gray-600">Keep completing daily missions to maintain your streak!</p>
                        </div>
                    </div>
                </div>

                <!-- Tips -->
                <div class="card bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">💡</div>
                        <div>
                            <h4 class="font-bold text-lg text-purple-900 mb-2">Daily Mission Tips</h4>
                            <ul class="space-y-2 text-purple-800">
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Missions reset every day at midnight (local time)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Complete all missions to earn bonus XP and achievements</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Missing a day will break your streak - stay consistent!</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Daily missions are designed to take 10-15 minutes total</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderMissionCard(mission) {
        const isCompleted = mission.completed;
        const progress = mission.progress || 0;
        
        return `
            <div class="mission-card ${isCompleted ? 'completed' : ''}">
                <div class="flex items-start gap-4">
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${
                        isCompleted 
                            ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                            : 'bg-gradient-to-br from-gray-200 to-gray-300'
                    } shadow-lg">
                        ${isCompleted ? '✅' : '⭕'}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <h4 class="text-xl font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}">
                                    ${mission.title}
                                </h4>
                                <p class="text-sm text-gray-600">${mission.description}</p>
                            </div>
                            <span class="badge badge-gold text-sm whitespace-nowrap ml-4">
                                +${mission.xpReward} XP
                            </span>
                        </div>
                        
                        ${!isCompleted ? `
                            <div class="mt-4">
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-gray-600">Progress</span>
                                    <span class="font-semibold text-sakura-600">${progress}%</span>
                                </div>
                                <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-sakura-500 to-indigo-500 rounded-full transition-all duration-500" 
                                         style="width: ${progress}%"></div>
                                </div>
                            </div>
                        ` : `
                            <div class="mt-3 flex items-center gap-2">
                                <span class="badge badge-green text-xs">
                                    ✓ Completed
                                </span>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
};

// Add mission styles
const style = document.createElement('style');
style.textContent = `
    .mission-card {
        padding: 24px;
        border-radius: 20px;
        border: 2px solid #e2e8f0;
        background: white;
        transition: all 0.3s ease;
    }
    
    .mission-card:not(.completed):hover {
        border-color: #f9408a;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(249, 64, 138, 0.15);
    }
    
    .mission-card.completed {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(5, 150, 105, 0.05));
        border-color: #10b981;
    }
`;
document.head.appendChild(style);

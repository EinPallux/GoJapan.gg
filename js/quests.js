// Quests Module
window.Quests = {
    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('questsContainer');
        const userData = UserData.getData();
        
        const activeQuests = userData.quests.filter(q => !q.completed);
        const completedQuests = userData.quests.filter(q => q.completed);
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Quest Banner -->
                <div class="card bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-3xl font-bold mb-2">⚔️ Quest Board</h3>
                            <p class="text-white/90 text-lg">Complete quests to earn XP and level up!</p>
                        </div>
                        <div class="text-center">
                            <div class="text-6xl font-bold mb-2">${completedQuests.length}</div>
                            <div class="text-xl">Completed</div>
                        </div>
                    </div>
                </div>

                <!-- Active Quests -->
                <div class="card">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-bold text-gray-800">📋 Active Quests</h3>
                        <span class="badge badge-purple">${activeQuests.length} active</span>
                    </div>
                    
                    ${activeQuests.length > 0 ? `
                        <div class="space-y-4">
                            ${activeQuests.map(quest => this.renderQuestCard(quest)).join('')}
                        </div>
                    ` : `
                        <div class="text-center py-12">
                            <div class="text-6xl mb-4">🎉</div>
                            <p class="text-gray-600 text-lg">All quests completed! Great job!</p>
                        </div>
                    `}
                </div>

                <!-- Completed Quests -->
                ${completedQuests.length > 0 ? `
                    <div class="card">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-2xl font-bold text-gray-800">✅ Completed Quests</h3>
                            <span class="badge badge-green">${completedQuests.length} completed</span>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${completedQuests.map(quest => this.renderCompletedQuest(quest)).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Quest Info -->
                <div class="card bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
                    <div class="flex items-start gap-4">
                        <div class="text-4xl">💡</div>
                        <div>
                            <h4 class="font-bold text-lg text-indigo-900 mb-2">About Quests</h4>
                            <ul class="space-y-2 text-indigo-800">
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Complete quests to earn XP and level up faster</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Some quests are repeatable - complete them multiple times!</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Daily quests reset every 24 hours</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-sakura-500">•</span>
                                    <span>Weekly quests reset every Monday</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderQuestCard(quest) {
        const progressPercent = quest.target > 0 ? (quest.progress / quest.target) * 100 : 0;
        const typeColors = {
            daily: 'from-blue-500 to-indigo-500',
            weekly: 'from-purple-500 to-pink-500',
            repeatable: 'from-green-500 to-emerald-500'
        };
        const typeColor = typeColors[quest.type] || 'from-gray-500 to-gray-600';
        
        return `
            <div class="quest-card">
                <div class="flex items-start gap-4">
                    <div class="w-16 h-16 bg-gradient-to-br ${typeColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        ${quest.type === 'daily' ? '📆' : quest.type === 'weekly' ? '📅' : '🔄'}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <h4 class="text-xl font-bold text-gray-800">${quest.title}</h4>
                                <p class="text-sm text-gray-600">${quest.description}</p>
                            </div>
                            <span class="badge badge-gold text-sm whitespace-nowrap ml-4">+${quest.xpReward} XP</span>
                        </div>
                        
                        <div class="mt-4">
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-gray-600">Progress: ${quest.progress}/${quest.target}</span>
                                <span class="font-semibold text-sakura-600">${Math.round(progressPercent)}%</span>
                            </div>
                            <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-sakura-500 to-indigo-500 rounded-full transition-all duration-500" 
                                     style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                        
                        <div class="mt-3 flex items-center gap-2">
                            <span class="badge badge-${quest.type === 'daily' ? 'purple' : quest.type === 'weekly' ? 'pink' : 'green'} text-xs">
                                ${quest.type.charAt(0).toUpperCase() + quest.type.slice(1)}
                            </span>
                            ${progressPercent >= 100 ? `
                                <button onclick="Quests.claimQuest('${quest.id}')" 
                                        class="btn btn-success text-xs px-4 py-1">
                                    🎉 Claim Reward
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderCompletedQuest(quest) {
        return `
            <div class="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <div class="flex items-center gap-3 mb-2">
                    <div class="text-3xl">✅</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-gray-800">${quest.title}</h4>
                        <p class="text-xs text-gray-600">${quest.description}</p>
                    </div>
                    <span class="badge badge-gold text-xs">+${quest.xpReward} XP</span>
                </div>
            </div>
        `;
    },

    claimQuest(questId) {
        UserData.completeQuest(questId);
        this.render();
    }
};

// User Data Management System
window.UserData = {
    defaultData: {
        name: 'Guest User',
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        streak: 0,
        lastVisit: new Date().toISOString(),
        joinedDate: new Date().toISOString(),
        wordsLearned: 0,
        hiraganaProgress: 0,
        katakanaProgress: 0,
        grammarProgress: 0,
        
        // Learning Progress
        completedLessons: [],
        vocabularyMastered: [],
        kanaKnowledge: {
            hiragana: {},
            katakana: {}
        },
        grammarMastered: [],
        
        // Gamification
        achievements: [
            {
                id: 'first_steps',
                name: 'First Steps',
                description: 'Complete your first lesson',
                icon: '🌱',
                unlocked: false,
                unlockedDate: null,
                xpReward: 50,
                category: 'milestone'
            },
            {
                id: 'kana_beginner',
                name: 'Kana Beginner',
                description: 'Learn 10 Hiragana characters',
                icon: '📝',
                unlocked: false,
                unlockedDate: null,
                xpReward: 100,
                category: 'kana'
            },
            {
                id: 'hiragana_master',
                name: 'Hiragana Master',
                description: 'Master all Hiragana characters',
                icon: '🎌',
                unlocked: false,
                unlockedDate: null,
                xpReward: 500,
                category: 'kana'
            },
            {
                id: 'katakana_master',
                name: 'Katakana Master',
                description: 'Master all Katakana characters',
                icon: '🎯',
                unlocked: false,
                unlockedDate: null,
                xpReward: 500,
                category: 'kana'
            },
            {
                id: 'vocab_novice',
                name: 'Vocabulary Novice',
                description: 'Learn 50 vocabulary words',
                icon: '📚',
                unlocked: false,
                unlockedDate: null,
                xpReward: 200,
                category: 'vocabulary'
            },
            {
                id: 'vocab_apprentice',
                name: 'Vocabulary Apprentice',
                description: 'Learn 200 vocabulary words',
                icon: '📖',
                unlocked: false,
                unlockedDate: null,
                xpReward: 400,
                category: 'vocabulary'
            },
            {
                id: 'vocab_expert',
                name: 'Vocabulary Expert',
                description: 'Learn 500 vocabulary words',
                icon: '🎓',
                unlocked: false,
                unlockedDate: null,
                xpReward: 800,
                category: 'vocabulary'
            },
            {
                id: 'grammar_rookie',
                name: 'Grammar Rookie',
                description: 'Master 10 grammar patterns',
                icon: '✍️',
                unlocked: false,
                unlockedDate: null,
                xpReward: 300,
                category: 'grammar'
            },
            {
                id: 'dedicated_learner',
                name: 'Dedicated Learner',
                description: 'Maintain a 7-day streak',
                icon: '🔥',
                unlocked: false,
                unlockedDate: null,
                xpReward: 250,
                category: 'streak'
            },
            {
                id: 'consistency_king',
                name: 'Consistency King',
                description: 'Maintain a 30-day streak',
                icon: '👑',
                unlocked: false,
                unlockedDate: null,
                xpReward: 1000,
                category: 'streak'
            },
            {
                id: 'quest_hunter',
                name: 'Quest Hunter',
                description: 'Complete 10 quests',
                icon: '⚔️',
                unlocked: false,
                unlockedDate: null,
                xpReward: 300,
                category: 'quests'
            },
            {
                id: 'daily_warrior',
                name: 'Daily Warrior',
                description: 'Complete all daily missions in one day',
                icon: '⭐',
                unlocked: false,
                unlockedDate: null,
                xpReward: 200,
                category: 'daily'
            },
            {
                id: 'level_up',
                name: 'Level Up!',
                description: 'Reach Level 5',
                icon: '🎮',
                unlocked: false,
                unlockedDate: null,
                xpReward: 300,
                category: 'milestone'
            },
            {
                id: 'n5_ready',
                name: 'N5 Ready',
                description: 'Complete all N5 lessons',
                icon: '🏆',
                unlocked: false,
                unlockedDate: null,
                xpReward: 2000,
                category: 'milestone'
            },
            {
                id: 'speed_learner',
                name: 'Speed Learner',
                description: 'Complete 5 lessons in one day',
                icon: '⚡',
                unlocked: false,
                unlockedDate: null,
                xpReward: 400,
                category: 'special'
            }
        ],
        
        quests: [
            {
                id: 'daily_practice',
                title: 'Daily Practice',
                description: 'Complete one lesson today',
                xpReward: 50,
                progress: 0,
                target: 1,
                completed: false,
                type: 'daily'
            },
            {
                id: 'vocab_master',
                title: 'Vocabulary Master',
                description: 'Learn 20 new vocabulary words',
                xpReward: 100,
                progress: 0,
                target: 20,
                completed: false,
                type: 'repeatable'
            },
            {
                id: 'kana_practice',
                title: 'Kana Practice',
                description: 'Practice 30 kana characters',
                xpReward: 75,
                progress: 0,
                target: 30,
                completed: false,
                type: 'repeatable'
            },
            {
                id: 'grammar_study',
                title: 'Grammar Study',
                description: 'Study 5 grammar patterns',
                xpReward: 80,
                progress: 0,
                target: 5,
                completed: false,
                type: 'repeatable'
            },
            {
                id: 'path_progress',
                title: 'Path Progress',
                description: 'Complete 3 lessons on the learning path',
                xpReward: 150,
                progress: 0,
                target: 3,
                completed: false,
                type: 'weekly'
            }
        ],
        
        dailyMissions: [
            {
                id: 'daily_login',
                title: 'Daily Login',
                description: 'Log in to GoJapan.gg',
                xpReward: 10,
                progress: 100,
                completed: true
            },
            {
                id: 'practice_kana',
                title: 'Practice 10 Kana',
                description: 'Review 10 kana characters',
                xpReward: 25,
                progress: 0,
                completed: false
            },
            {
                id: 'learn_vocab',
                title: 'Learn 5 Words',
                description: 'Study 5 new vocabulary words',
                xpReward: 30,
                progress: 0,
                completed: false
            },
            {
                id: 'complete_lesson',
                title: 'Complete a Lesson',
                description: 'Finish one lesson on the learning path',
                xpReward: 50,
                progress: 0,
                completed: false
            }
        ]
    },

    init() {
        // Check if user data exists in localStorage
        const stored = localStorage.getItem('goJapanUserData');
        if (!stored) {
            this.saveData(this.defaultData);
        } else {
            // Check if it's a new day and reset daily missions
            this.checkDailyReset();
        }
    },

    getData() {
        const stored = localStorage.getItem('goJapanUserData');
        return stored ? JSON.parse(stored) : this.defaultData;
    },

    saveData(data) {
        localStorage.setItem('goJapanUserData', JSON.stringify(data));
    },

    updateData(updates) {
        const currentData = this.getData();
        const newData = { ...currentData, ...updates };
        this.saveData(newData);
        return newData;
    },

    addXP(amount) {
        const data = this.getData();
        data.xp += amount;
        
        // Check for level up
        while (data.xp >= data.xpToNextLevel) {
            data.xp -= data.xpToNextLevel;
            data.level += 1;
            data.xpToNextLevel = Math.floor(data.xpToNextLevel * 1.5);
            
            // Show level up notification
            if (window.app) {
                window.app.showNotification(`🎉 Level Up! You are now Level ${data.level}!`, 'success');
            }
            
            // Check level achievements
            if (data.level === 5) {
                this.unlockAchievement('level_up');
            }
        }
        
        this.saveData(data);
        if (window.app) {
            window.app.updateUserDisplay();
        }
        return data;
    },

    unlockAchievement(achievementId) {
        const data = this.getData();
        const achievement = data.achievements.find(a => a.id === achievementId);
        
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            achievement.unlockedDate = new Date().toISOString();
            
            // Award XP
            this.addXP(achievement.xpReward);
            
            // Show notification
            if (window.app) {
                window.app.showNotification(
                    `🏆 Achievement Unlocked: ${achievement.name}! +${achievement.xpReward} XP`,
                    'success'
                );
            }
            
            this.saveData(data);
        }
    },

    completeQuest(questId) {
        const data = this.getData();
        const quest = data.quests.find(q => q.id === questId);
        
        if (quest && !quest.completed) {
            quest.completed = true;
            this.addXP(quest.xpReward);
            
            // Check quest achievements
            const completedQuests = data.quests.filter(q => q.completed).length;
            if (completedQuests >= 10) {
                this.unlockAchievement('quest_hunter');
            }
            
            this.saveData(data);
            
            if (window.app) {
                window.app.showNotification(
                    `✅ Quest Completed: ${quest.title}! +${quest.xpReward} XP`,
                    'success'
                );
            }
        }
    },

    updateQuestProgress(questId, progress) {
        const data = this.getData();
        const quest = data.quests.find(q => q.id === questId);
        
        if (quest) {
            quest.progress = Math.min(progress, quest.target);
            
            if (quest.progress >= quest.target && !quest.completed) {
                this.completeQuest(questId);
            } else {
                this.saveData(data);
            }
        }
    },

    completeDailyMission(missionId) {
        const data = this.getData();
        const mission = data.dailyMissions.find(m => m.id === missionId);
        
        if (mission && !mission.completed) {
            mission.completed = true;
            mission.progress = 100;
            this.addXP(mission.xpReward);
            
            // Check if all daily missions are completed
            const allCompleted = data.dailyMissions.every(m => m.completed);
            if (allCompleted) {
                this.unlockAchievement('daily_warrior');
            }
            
            this.saveData(data);
            
            if (window.app) {
                window.app.showNotification(
                    `✅ Daily Mission Completed! +${mission.xpReward} XP`,
                    'success'
                );
            }
        }
    },

    updateDailyMissionProgress(missionId, progress) {
        const data = this.getData();
        const mission = data.dailyMissions.find(m => m.id === missionId);
        
        if (mission) {
            mission.progress = Math.min(progress, 100);
            
            if (mission.progress >= 100 && !mission.completed) {
                this.completeDailyMission(missionId);
            } else {
                this.saveData(data);
            }
        }
    },

    checkDailyReset() {
        const data = this.getData();
        const lastVisit = new Date(data.lastVisit);
        const now = new Date();
        
        // Check if it's a new day
        if (lastVisit.toDateString() !== now.toDateString()) {
            // Update streak
            const dayDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
            if (dayDiff === 1) {
                data.streak += 1;
                
                // Check streak achievements
                if (data.streak === 7) {
                    this.unlockAchievement('dedicated_learner');
                } else if (data.streak === 30) {
                    this.unlockAchievement('consistency_king');
                }
            } else if (dayDiff > 1) {
                data.streak = 0;
            }
            
            // Reset daily missions
            data.dailyMissions = data.dailyMissions.map(mission => ({
                ...mission,
                completed: mission.id === 'daily_login',
                progress: mission.id === 'daily_login' ? 100 : 0
            }));
            
            data.lastVisit = now.toISOString();
            this.saveData(data);
        }
    },

    completeLesson(lessonId) {
        const data = this.getData();
        
        if (!data.completedLessons.includes(lessonId)) {
            data.completedLessons.push(lessonId);
            
            // Check first lesson achievement
            if (data.completedLessons.length === 1) {
                this.unlockAchievement('first_steps');
            }
            
            // Update daily mission progress
            const lessonMission = data.dailyMissions.find(m => m.id === 'complete_lesson');
            if (lessonMission && !lessonMission.completed) {
                this.completeDailyMission('complete_lesson');
            }
            
            // Update quest progress
            this.updateQuestProgress('daily_practice', 1);
            
            const pathQuest = data.quests.find(q => q.id === 'path_progress');
            if (pathQuest) {
                this.updateQuestProgress('path_progress', pathQuest.progress + 1);
            }
            
            // Check for speed learner achievement
            const today = new Date().toDateString();
            const todayLessons = data.completedLessons.filter(id => {
                // This is simplified - in production, you'd store completion dates
                return true;
            });
            
            this.saveData(data);
        }
    },

    learnVocabulary(wordId) {
        const data = this.getData();
        
        if (!data.vocabularyMastered.includes(wordId)) {
            data.vocabularyMastered.push(wordId);
            data.wordsLearned += 1;
            
            // Update daily mission
            const vocabMission = data.dailyMissions.find(m => m.id === 'learn_vocab');
            if (vocabMission && !vocabMission.completed) {
                const newProgress = (data.vocabularyMastered.length % 5) * 20;
                this.updateDailyMissionProgress('learn_vocab', newProgress);
            }
            
            // Update quest
            const vocabQuest = data.quests.find(q => q.id === 'vocab_master');
            if (vocabQuest) {
                this.updateQuestProgress('vocab_master', vocabQuest.progress + 1);
            }
            
            // Check vocabulary achievements
            if (data.wordsLearned === 50) {
                this.unlockAchievement('vocab_novice');
            } else if (data.wordsLearned === 200) {
                this.unlockAchievement('vocab_apprentice');
            } else if (data.wordsLearned === 500) {
                this.unlockAchievement('vocab_expert');
            }
            
            this.saveData(data);
            
            if (window.app) {
                window.app.updateUserDisplay();
            }
        }
    },

    updateKanaProgress(type, kana, correct) {
        const data = this.getData();
        
        if (!data.kanaKnowledge[type]) {
            data.kanaKnowledge[type] = {};
        }
        
        if (!data.kanaKnowledge[type][kana]) {
            data.kanaKnowledge[type][kana] = { attempts: 0, correct: 0, lastPracticed: null };
        }
        
        data.kanaKnowledge[type][kana].attempts += 1;
        if (correct) {
            data.kanaKnowledge[type][kana].correct += 1;
        }
        data.kanaKnowledge[type][kana].lastPracticed = new Date().toISOString();
        
        // Calculate progress
        const totalKana = type === 'hiragana' ? 46 : 46;
        const masteredKana = Object.values(data.kanaKnowledge[type]).filter(
            k => k.attempts >= 5 && (k.correct / k.attempts) >= 0.8
        ).length;
        
        const progress = Math.round((masteredKana / totalKana) * 100);
        
        if (type === 'hiragana') {
            data.hiraganaProgress = progress;
            
            // Check achievements
            if (masteredKana === 10) {
                this.unlockAchievement('kana_beginner');
            } else if (progress === 100) {
                this.unlockAchievement('hiragana_master');
            }
        } else {
            data.katakanaProgress = progress;
            
            if (progress === 100) {
                this.unlockAchievement('katakana_master');
            }
        }
        
        // Update daily mission
        const kanaMission = data.dailyMissions.find(m => m.id === 'practice_kana');
        if (kanaMission && !kanaMission.completed) {
            const practiced = Object.keys(data.kanaKnowledge.hiragana).length + 
                            Object.keys(data.kanaKnowledge.katakana).length;
            this.updateDailyMissionProgress('practice_kana', (practiced % 10) * 10);
        }
        
        // Update quest
        const kanaQuest = data.quests.find(q => q.id === 'kana_practice');
        if (kanaQuest) {
            this.updateQuestProgress('kana_practice', kanaQuest.progress + 1);
        }
        
        this.saveData(data);
    },

    resetAllData() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
            this.saveData(this.defaultData);
            location.reload();
        }
    }
};

// Initialize on load
UserData.init();

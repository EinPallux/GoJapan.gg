// Learning Path Module
const LearningPath = {
    currentLesson: null,

    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('learningPathContainer');
        const userData = UserData.getData();
        
        let html = '<div class="space-y-8">';
        
        LearningPathData.units.forEach((unit, unitIndex) => {
            const unitProgress = this.calculateUnitProgress(unit.id, userData);
            const isUnlocked = unitIndex === 0 || this.isUnitUnlocked(unitIndex, userData);
            
            html += `
                <div class="card ${!isUnlocked ? 'opacity-50' : ''}">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-4">
                            <div class="text-5xl">${unit.icon}</div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-800">${unit.title}</h3>
                                <p class="text-gray-600">${unit.description}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-3xl font-bold text-sakura-600">${unitProgress}%</div>
                            <div class="text-sm text-gray-500">Complete</div>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${unitProgress}%"></div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${unit.lessons.map((lesson, lessonIndex) => {
                            const isCompleted = userData.completedLessons.includes(lesson.id);
                            const isAvailable = lessonIndex === 0 || userData.completedLessons.includes(unit.lessons[lessonIndex - 1].id);
                            const isLocked = !isUnlocked || !isAvailable;
                            
                            return `
                                <div class="lesson-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} ${isAvailable && !isCompleted ? 'available' : ''}"
                                     onclick="${!isLocked ? `LearningPath.openLesson('${lesson.id}')` : ''}">
                                    <div class="flex items-start gap-3">
                                        <div class="lesson-icon">
                                            ${isCompleted ? '✅' : isLocked ? '🔒' : '📘'}
                                        </div>
                                        <div class="flex-1">
                                            <h4 class="font-semibold text-gray-800 mb-1">${lesson.title}</h4>
                                            <p class="text-sm text-gray-600 mb-2">${lesson.description}</p>
                                            <div class="flex items-center justify-between">
                                                <span class="badge badge-gold text-xs">+${lesson.xpReward} XP</span>
                                                ${isCompleted ? '<span class="badge badge-green text-xs">✓ Done</span>' : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },

    calculateUnitProgress(unitId, userData) {
        const unit = LearningPathData.units.find(u => u.id === unitId);
        if (!unit) return 0;
        
        const completedLessons = unit.lessons.filter(lesson => 
            userData.completedLessons.includes(lesson.id)
        ).length;
        
        return Math.round((completedLessons / unit.lessons.length) * 100);
    },

    isUnitUnlocked(unitIndex, userData) {
        if (unitIndex === 0) return true;
        
        const previousUnit = LearningPathData.units[unitIndex - 1];
        const allPreviousCompleted = previousUnit.lessons.every(lesson =>
            userData.completedLessons.includes(lesson.id)
        );
        
        return allPreviousCompleted;
    },

    openLesson(lessonId) {
        const lesson = this.findLesson(lessonId);
        if (!lesson) return;
        
        this.currentLesson = lesson;
        this.renderLessonModal(lesson);
    },

    findLesson(lessonId) {
        for (const unit of LearningPathData.units) {
            const lesson = unit.lessons.find(l => l.id === lessonId);
            if (lesson) return lesson;
        }
        return null;
    },

    renderLessonModal(lesson) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content lesson-modal">
                <div class="modal-header">
                    <h2 class="text-3xl font-bold text-gradient">${lesson.title}</h2>
                    <button onclick="LearningPath.closeLesson()" class="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
                </div>
                
                <div class="modal-body">
                    ${this.renderLessonContent(lesson)}
                </div>
                
                <div class="modal-footer">
                    <button onclick="LearningPath.closeLesson()" class="btn btn-secondary">
                        Close
                    </button>
                    <button onclick="LearningPath.completeLesson('${lesson.id}')" class="btn btn-primary">
                        Complete Lesson (+${lesson.xpReward} XP)
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);
    },

    renderLessonContent(lesson) {
        let html = '';
        
        // Text content
        if (lesson.content && lesson.content.sections) {
            html += '<div class="space-y-4 mb-6">';
            lesson.content.sections.forEach(section => {
                if (section.type === 'text') {
                    html += `<p class="text-gray-700 leading-relaxed">${section.content}</p>`;
                }
            });
            html += '</div>';
        }
        
        // Vocabulary
        if (lesson.vocabulary && lesson.vocabulary.length > 0) {
            html += `
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📚</span>
                        <span>Vocabulary</span>
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${lesson.vocabulary.map(word => `
                            <div class="vocab-card">
                                <div class="vocab-japanese font-japanese text-2xl font-bold text-sakura-600">
                                    ${word.japanese}
                                </div>
                                <div class="vocab-romaji text-gray-600 text-sm mb-2">
                                    ${word.romaji}
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-700">🇬🇧 ${word.english}</span>
                                    <span class="text-gray-700">🇩🇪 ${word.german}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Grammar
        if (lesson.grammar) {
            html += `
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                        <span>📝</span>
                        <span>Grammar Pattern</span>
                    </h3>
                    <div class="grammar-card">
                        <div class="grammar-pattern font-japanese text-xl font-bold text-indigo-600 mb-3">
                            ${lesson.grammar.pattern}
                        </div>
                        <div class="grammar-explanation text-gray-700 mb-4">
                            ${lesson.grammar.explanation}
                        </div>
                        ${lesson.grammar.examples ? `
                            <div class="grammar-examples space-y-3">
                                <h4 class="font-semibold text-gray-800">Examples:</h4>
                                ${lesson.grammar.examples.map(example => `
                                    <div class="example-card">
                                        <div class="font-japanese text-lg text-sakura-600">${example.japanese}</div>
                                        <div class="text-sm text-gray-600">${example.romaji}</div>
                                        <div class="text-sm text-gray-700">→ ${example.english}</div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        // Practice Exercise
        html += `
            <div class="practice-section">
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>✍️</span>
                    <span>Quick Practice</span>
                </h3>
                <div class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100">
                    <p class="text-gray-700 mb-4">Review the vocabulary and grammar above, then click "Complete Lesson" when you're ready to continue!</p>
                    <div class="flex items-center gap-2 text-sm text-indigo-700">
                        <span>💡</span>
                        <span>Tip: Practice writing the vocabulary to help memorization!</span>
                    </div>
                </div>
            </div>
        `;
        
        return html;
    },

    completeLesson(lessonId) {
        const userData = UserData.getData();
        
        if (!userData.completedLessons.includes(lessonId)) {
            UserData.completeLesson(lessonId);
            
            const lesson = this.findLesson(lessonId);
            if (lesson) {
                UserData.addXP(lesson.xpReward);
                
                // Add vocabulary to user's learned words
                if (lesson.vocabulary) {
                    lesson.vocabulary.forEach(word => {
                        UserData.learnVocabulary(word.japanese);
                    });
                }
            }
            
            this.closeLesson();
            this.render();
            
            window.app.showNotification('🎉 Lesson completed! Great job!', 'success');
        }
    },

    closeLesson() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
};

// Add modal styles
const style = document.createElement('style');
style.textContent = `
    .lesson-card {
        padding: 16px;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        background: white;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .lesson-card.available {
        border-color: #f9408a;
        background: linear-gradient(135deg, rgba(249, 64, 138, 0.05), rgba(99, 102, 241, 0.05));
    }
    
    .lesson-card.available:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(249, 64, 138, 0.2);
    }
    
    .lesson-card.completed {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
        border-color: #10b981;
    }
    
    .lesson-card.locked {
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    .lesson-icon {
        font-size: 28px;
        min-width: 40px;
        text-align: center;
    }
    
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .modal-overlay.active {
        opacity: 1;
    }
    
    .modal-content {
        background: white;
        border-radius: 24px;
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .modal-overlay.active .modal-content {
        transform: scale(1);
    }
    
    .modal-header {
        padding: 24px 32px;
        border-bottom: 2px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-body {
        padding: 32px;
        overflow-y: auto;
        flex: 1;
    }
    
    .modal-footer {
        padding: 24px 32px;
        border-top: 2px solid #e2e8f0;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }
    
    .vocab-card {
        padding: 16px;
        border-radius: 12px;
        background: linear-gradient(135deg, #fef1f7, #fee5f0);
        border: 2px solid #ffcce3;
        transition: all 0.2s ease;
    }
    
    .vocab-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(249, 64, 138, 0.2);
    }
    
    .grammar-card {
        padding: 24px;
        border-radius: 16px;
        background: linear-gradient(135deg, #eef2ff, #e0e7ff);
        border: 2px solid #c7d2fe;
    }
    
    .example-card {
        padding: 12px 16px;
        border-radius: 8px;
        background: white;
        border-left: 4px solid #6366f1;
    }
    
    .practice-section {
        margin-top: 32px;
        padding-top: 32px;
        border-top: 2px solid #e2e8f0;
    }
`;
document.head.appendChild(style);

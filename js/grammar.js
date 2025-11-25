// Grammar Module
window.Grammar = {
    currentCategory: 'basics',

    grammarData: {
        basics: {
            title: '🌱 Basic Structures',
            rules: [
                {
                    id: 'desu',
                    title: 'です (desu) - To be',
                    pattern: '[Noun] です',
                    explanation: 'です is the polite form of "to be". It\'s used to identify or describe something.',
                    examples: [
                        { japanese: 'わたしはがくせいです', romaji: 'watashi wa gakusei desu', english: 'I am a student' },
                        { japanese: 'これはほんです', romaji: 'kore wa hon desu', english: 'This is a book' },
                        { japanese: 'きれいです', romaji: 'kirei desu', english: 'It is beautiful' }
                    ],
                    negation: 'To make negative, use じゃありません (ja arimasen) or ではありません (dewa arimasen)',
                    negativeExample: { japanese: 'がくせいじゃありません', romaji: 'gakusei ja arimasen', english: 'I am not a student' }
                },
                {
                    id: 'wa-particle',
                    title: 'は (wa) - Topic Particle',
                    pattern: '[Topic] は [Comment]',
                    explanation: 'The particle は (pronounced "wa") marks the topic of the sentence - what you\'re talking about.',
                    examples: [
                        { japanese: 'わたしはたなかです', romaji: 'watashi wa tanaka desu', english: 'As for me, I am Tanaka / I am Tanaka' },
                        { japanese: 'これはペンです', romaji: 'kore wa pen desu', english: 'This is a pen' },
                        { japanese: 'きょうはあついです', romaji: 'kyou wa atsui desu', english: 'Today is hot' }
                    ],
                    note: 'は is written as "ha" but pronounced "wa" when used as a particle.'
                },
                {
                    id: 'ga-particle',
                    title: 'が (ga) - Subject Particle',
                    pattern: '[Subject] が [Predicate]',
                    explanation: 'が marks the grammatical subject, especially when introducing new information or in subordinate clauses.',
                    examples: [
                        { japanese: 'ねこがいます', romaji: 'neko ga imasu', english: 'There is a cat' },
                        { japanese: 'だれがきましたか', romaji: 'dare ga kimashita ka', english: 'Who came?' },
                        { japanese: 'にほんごがすきです', romaji: 'nihongo ga suki desu', english: 'I like Japanese' }
                    ],
                    note: 'With certain verbs and adjectives (like すき/きらい), the object takes が instead of を.'
                }
            ]
        },
        verbs: {
            title: '⚡ Verb Forms',
            rules: [
                {
                    id: 'masu-form',
                    title: 'ます (masu) Form - Polite Present/Future',
                    pattern: '[Verb stem] + ます',
                    explanation: 'The ます form is the polite present/future tense. Remove ます to get the stem.',
                    examples: [
                        { japanese: 'たべます', romaji: 'tabemasu', english: 'eat / will eat' },
                        { japanese: 'いきます', romaji: 'ikimasu', english: 'go / will go' },
                        { japanese: 'のみます', romaji: 'nomimasu', english: 'drink / will drink' }
                    ],
                    verbTypes: 'There are three verb types: う-verbs (Group 1), る-verbs (Group 2), and irregular verbs (する、くる).'
                },
                {
                    id: 'mashita',
                    title: 'ました (mashita) - Polite Past',
                    pattern: '[Verb stem] + ました',
                    explanation: 'Change ます to ました to express the past tense.',
                    examples: [
                        { japanese: 'たべました', romaji: 'tabemashita', english: 'ate' },
                        { japanese: 'いきました', romaji: 'ikimashita', english: 'went' },
                        { japanese: 'のみました', romaji: 'nomimashita', english: 'drank' }
                    ]
                },
                {
                    id: 'masen',
                    title: 'ません (masen) - Polite Negative',
                    pattern: '[Verb stem] + ません',
                    explanation: 'Change ます to ません to make the verb negative.',
                    examples: [
                        { japanese: 'たべません', romaji: 'tabemasen', english: 'do not eat / will not eat' },
                        { japanese: 'いきません', romaji: 'ikimasen', english: 'do not go / will not go' },
                        { japanese: 'のみません', romaji: 'nomimasen', english: 'do not drink / will not drink' }
                    ]
                },
                {
                    id: 'masen-deshita',
                    title: 'ませんでした (masen deshita) - Negative Past',
                    pattern: '[Verb stem] + ませんでした',
                    explanation: 'Negative past tense combines ません with でした.',
                    examples: [
                        { japanese: 'たべませんでした', romaji: 'tabemasen deshita', english: 'did not eat' },
                        { japanese: 'いきませんでした', romaji: 'ikimasen deshita', english: 'did not go' },
                        { japanese: 'のみませんでした', romaji: 'nomimasen deshita', english: 'did not drink' }
                    ]
                },
                {
                    id: 'te-form',
                    title: 'て-form (te-form)',
                    pattern: '[Verb] → て-form',
                    explanation: 'The て-form is used for making requests, connecting actions, and progressive tense.',
                    examples: [
                        { japanese: 'たべてください', romaji: 'tabete kudasai', english: 'Please eat' },
                        { japanese: 'いってきます', romaji: 'itte kimasu', english: 'I\'m going (and will return)' },
                        { japanese: 'のんでいます', romaji: 'nonde imasu', english: 'is drinking (now)' }
                    ],
                    note: 'て-form conjugation rules vary by verb type. This is one of the most important verb forms!'
                }
            ]
        },
        particles: {
            title: '🔗 Particles',
            rules: [
                {
                    id: 'wo-particle',
                    title: 'を (wo/o) - Direct Object',
                    pattern: '[Object] を [Verb]',
                    explanation: 'を marks the direct object of a transitive verb.',
                    examples: [
                        { japanese: 'りんごをたべます', romaji: 'ringo wo tabemasu', english: 'I eat an apple' },
                        { japanese: 'みずをのみます', romaji: 'mizu wo nomimasu', english: 'I drink water' },
                        { japanese: 'ほんをよみます', romaji: 'hon wo yomimasu', english: 'I read a book' }
                    ],
                    note: 'を is written as "wo" but pronounced as "o".'
                },
                {
                    id: 'ni-particle',
                    title: 'に (ni) - Direction/Time/Location',
                    pattern: 'Multiple uses',
                    explanation: 'に has several uses: destination (to), specific time (at), location of existence (at/in).',
                    examples: [
                        { japanese: 'がっこうにいきます', romaji: 'gakkou ni ikimasu', english: 'I go to school' },
                        { japanese: 'ごじにおきます', romaji: 'goji ni okimasu', english: 'I wake up at 5 o\'clock' },
                        { japanese: 'つくえのうえにほんがあります', romaji: 'tsukue no ue ni hon ga arimasu', english: 'There is a book on the desk' }
                    ]
                },
                {
                    id: 'de-particle',
                    title: 'で (de) - Location of Action/Means',
                    pattern: 'Multiple uses',
                    explanation: 'で marks: (1) location where action occurs, (2) means/method, (3) reason.',
                    examples: [
                        { japanese: 'としょかんでべんきょうします', romaji: 'toshokan de benkyou shimasu', english: 'I study at the library' },
                        { japanese: 'バスでいきます', romaji: 'basu de ikimasu', english: 'I go by bus' },
                        { japanese: 'はしでたべます', romaji: 'hashi de tabemasu', english: 'I eat with chopsticks' }
                    ]
                },
                {
                    id: 'to-particle',
                    title: 'と (to) - With/And',
                    pattern: '[Noun] と [Noun] / [Person] と [Verb]',
                    explanation: 'と means "and" (complete list) or "with" (accompaniment).',
                    examples: [
                        { japanese: 'ともだちといきます', romaji: 'tomodachi to ikimasu', english: 'I go with a friend' },
                        { japanese: 'りんごとみかん', romaji: 'ringo to mikan', english: 'apples and oranges' },
                        { japanese: 'たなかさんとはなします', romaji: 'tanaka-san to hanashimasu', english: 'I speak with Tanaka' }
                    ]
                },
                {
                    id: 'no-particle',
                    title: 'の (no) - Possessive/Modification',
                    pattern: '[Modifier] の [Noun]',
                    explanation: 'の connects nouns to show possession or modification relationships.',
                    examples: [
                        { japanese: 'わたしのほん', romaji: 'watashi no hon', english: 'my book' },
                        { japanese: 'にほんのくるま', romaji: 'nihon no kuruma', english: 'Japanese car' },
                        { japanese: 'せんせいのかばん', romaji: 'sensei no kaban', english: 'teacher\'s bag' }
                    ]
                },
                {
                    id: 'ka-particle',
                    title: 'か (ka) - Question Marker',
                    pattern: '[Statement] か',
                    explanation: 'か at the end of a sentence makes it a question.',
                    examples: [
                        { japanese: 'がくせいですか', romaji: 'gakusei desu ka', english: 'Are you a student?' },
                        { japanese: 'いきますか', romaji: 'ikimasu ka', english: 'Will you go?' },
                        { japanese: 'おいしいですか', romaji: 'oishii desu ka', english: 'Is it delicious?' }
                    ],
                    note: 'In casual speech, か is often omitted and the question is shown only by intonation.'
                }
            ]
        },
        adjectives: {
            title: '🎨 Adjectives',
            rules: [
                {
                    id: 'i-adjectives',
                    title: 'い-adjectives (i-adjectives)',
                    pattern: '[Adjective ending in い]',
                    explanation: 'い-adjectives end in い and can directly modify nouns or be used as predicates.',
                    examples: [
                        { japanese: 'おおきいいぬ', romaji: 'ookii inu', english: 'big dog' },
                        { japanese: 'あついです', romaji: 'atsui desu', english: 'It is hot' },
                        { japanese: 'たかいやま', romaji: 'takai yama', english: 'high mountain' }
                    ],
                    conjugation: 'Past: remove い, add かった (e.g., あつかった). Negative: remove い, add くない (e.g., あつくない).'
                },
                {
                    id: 'na-adjectives',
                    title: 'な-adjectives (na-adjectives)',
                    pattern: '[Adjective] な [Noun]',
                    explanation: 'な-adjectives need な when modifying nouns directly. Use with です for predicates.',
                    examples: [
                        { japanese: 'きれいなはな', romaji: 'kirei na hana', english: 'beautiful flower' },
                        { japanese: 'しずかです', romaji: 'shizuka desu', english: 'It is quiet' },
                        { japanese: 'べんりなみせ', romaji: 'benri na mise', english: 'convenient store' }
                    ],
                    conjugation: 'Past: [adj] + でした. Negative: [adj] + じゃありません / ではありません.'
                },
                {
                    id: 'i-adj-negative',
                    title: 'い-adjective Negative Form',
                    pattern: '[Adjective stem] + くない',
                    explanation: 'Remove the final い and add くない to make い-adjectives negative.',
                    examples: [
                        { japanese: 'あつくないです', romaji: 'atsukunai desu', english: 'It is not hot' },
                        { japanese: 'おおきくないです', romaji: 'ookikunai desu', english: 'It is not big' },
                        { japanese: 'よくないです', romaji: 'yokunai desu', english: 'It is not good' }
                    ],
                    note: 'いい (good) becomes よくない in negative form, not いくない.'
                },
                {
                    id: 'i-adj-past',
                    title: 'い-adjective Past Form',
                    pattern: '[Adjective stem] + かった',
                    explanation: 'Remove the final い and add かった to make past tense.',
                    examples: [
                        { japanese: 'あつかったです', romaji: 'atsukatta desu', english: 'It was hot' },
                        { japanese: 'おおきかったです', romaji: 'ookikatta desu', english: 'It was big' },
                        { japanese: 'よかったです', romaji: 'yokatta desu', english: 'It was good' }
                    ]
                }
            ]
        },
        existence: {
            title: '📍 Existence and Location',
            rules: [
                {
                    id: 'imasu-arimasu',
                    title: 'います vs あります',
                    pattern: '[Thing] が います / あります',
                    explanation: 'います is for animate things (people, animals). あります is for inanimate things.',
                    examples: [
                        { japanese: 'ねこがいます', romaji: 'neko ga imasu', english: 'There is a cat' },
                        { japanese: 'ほんがあります', romaji: 'hon ga arimasu', english: 'There is a book' },
                        { japanese: 'せんせいがいます', romaji: 'sensei ga imasu', english: 'There is a teacher' }
                    ]
                },
                {
                    id: 'location-existence',
                    title: 'Location + に + います/あります',
                    pattern: '[Thing] は [Place] に います/あります',
                    explanation: 'Use に to mark the location where something exists.',
                    examples: [
                        { japanese: 'ねこはにわにいます', romaji: 'neko wa niwa ni imasu', english: 'The cat is in the garden' },
                        { japanese: 'ほんはつくえのうえにあります', romaji: 'hon wa tsukue no ue ni arimasu', english: 'The book is on the desk' },
                        { japanese: 'がっこうはとうきょうにあります', romaji: 'gakkou wa toukyou ni arimasu', english: 'The school is in Tokyo' }
                    ]
                }
            ]
        },
        comparison: {
            title: '⚖️ Comparison',
            rules: [
                {
                    id: 'yori',
                    title: 'より (yori) - Comparison',
                    pattern: 'A は B より [Adjective]',
                    explanation: 'Use より to compare two things: "A is more [adjective] than B".',
                    examples: [
                        { japanese: 'りんごはみかんよりおおきい', romaji: 'ringo wa mikan yori ookii', english: 'Apples are bigger than oranges' },
                        { japanese: 'にほんごはえいごよりむずかしい', romaji: 'nihongo wa eigo yori muzukashii', english: 'Japanese is more difficult than English' },
                        { japanese: 'きょうはきのうよりあつい', romaji: 'kyou wa kinou yori atsui', english: 'Today is hotter than yesterday' }
                    ]
                },
                {
                    id: 'ichiban',
                    title: 'いちばん (ichiban) - Superlative',
                    pattern: '[Group] で いちばん [Adjective]',
                    explanation: 'Use いちばん to express "most" or "best".',
                    examples: [
                        { japanese: 'クラスでいちばんたかい', romaji: 'kurasu de ichiban takai', english: 'The tallest in the class' },
                        { japanese: 'にほんでいちばんゆうめい', romaji: 'nihon de ichiban yuumei', english: 'Most famous in Japan' },
                        { japanese: 'なにがいちばんすきですか', romaji: 'nani ga ichiban suki desu ka', english: 'What do you like the most?' }
                    ]
                }
            ]
        },
        desire: {
            title: '💭 Expressing Desire',
            rules: [
                {
                    id: 'hoshii',
                    title: 'ほしい (hoshii) - Want (object)',
                    pattern: '[Noun] が ほしい',
                    explanation: 'Use ほしい when you want an object or thing.',
                    examples: [
                        { japanese: 'みずがほしいです', romaji: 'mizu ga hoshii desu', english: 'I want water' },
                        { japanese: 'あたらしいくるまがほしい', romaji: 'atarashii kuruma ga hoshii', english: 'I want a new car' },
                        { japanese: 'なにがほしいですか', romaji: 'nani ga hoshii desu ka', english: 'What do you want?' }
                    ]
                },
                {
                    id: 'tai',
                    title: 'たい (tai) - Want to (do)',
                    pattern: '[Verb stem] + たい',
                    explanation: 'Use たい when you want to do an action. Conjugates like an い-adjective.',
                    examples: [
                        { japanese: 'いきたいです', romaji: 'ikitai desu', english: 'I want to go' },
                        { japanese: 'たべたいです', romaji: 'tabetai desu', english: 'I want to eat' },
                        { japanese: 'にほんごをべんきょうしたい', romaji: 'nihongo wo benkyou shitai', english: 'I want to study Japanese' }
                    ],
                    note: 'The object can be marked with が or を, but が is more common.'
                }
            ]
        }
    },

    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('grammarContainer');
        
        container.innerHTML = `
            <div class="space-y-6">
                <!-- Category Selector -->
                <div class="card">
                    <h3 class="text-xl font-bold mb-4">📝 Grammar Categories</h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        ${this.renderCategoryButtons()}
                    </div>
                </div>

                <!-- Grammar Rules -->
                <div class="space-y-4">
                    ${this.renderGrammarRules()}
                </div>
            </div>
        `;
    },

    renderCategoryButtons() {
        const categories = Object.keys(this.grammarData);
        
        return categories.map(cat => {
            const data = this.grammarData[cat];
            return `
                <button onclick="Grammar.setCategory('${cat}')" 
                        class="category-btn ${this.currentCategory === cat ? 'active' : ''}">
                    <div class="font-semibold text-sm mb-1">${data.title}</div>
                    <div class="text-xs text-gray-500">${data.rules.length} rules</div>
                </button>
            `;
        }).join('');
    },

    renderGrammarRules() {
        const categoryData = this.grammarData[this.currentCategory];
        
        return categoryData.rules.map(rule => `
            <div class="card grammar-rule-card">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">${rule.title}</h3>
                        <div class="inline-block px-4 py-2 bg-gradient-to-r from-sakura-100 to-indigo-100 rounded-lg border-2 border-sakura-200">
                            <span class="font-japanese text-lg font-bold text-indigo-700">${rule.pattern}</span>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <p class="text-gray-700 leading-relaxed">${rule.explanation}</p>
                </div>

                ${rule.examples ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-800 mb-3">Examples:</h4>
                        <div class="space-y-3">
                            ${rule.examples.map(example => `
                                <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-sakura-500">
                                    <div class="font-japanese text-xl text-sakura-600 mb-1">${example.japanese}</div>
                                    <div class="text-sm text-gray-600 mb-1">${example.romaji}</div>
                                    <div class="text-sm text-gray-700">→ ${example.english}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${rule.note ? `
                    <div class="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">💡</span>
                            <div>
                                <p class="font-semibold text-blue-900 mb-1">Note:</p>
                                <p class="text-blue-800 text-sm">${rule.note}</p>
                            </div>
                        </div>
                    </div>
                ` : ''}

                ${rule.negation ? `
                    <div class="mt-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                        <p class="font-semibold text-orange-900 mb-2">Negation:</p>
                        <p class="text-orange-800 text-sm mb-2">${rule.negation}</p>
                        ${rule.negativeExample ? `
                            <div class="p-3 bg-white rounded-lg">
                                <div class="font-japanese text-lg text-sakura-600">${rule.negativeExample.japanese}</div>
                                <div class="text-sm text-gray-600">${rule.negativeExample.romaji}</div>
                                <div class="text-sm text-gray-700">→ ${rule.negativeExample.english}</div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                ${rule.conjugation ? `
                    <div class="mt-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                        <p class="font-semibold text-green-900 mb-1">Conjugation:</p>
                        <p class="text-green-800 text-sm">${rule.conjugation}</p>
                    </div>
                ` : ''}

                ${rule.verbTypes ? `
                    <div class="mt-4 p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
                        <p class="font-semibold text-purple-900 mb-1">Verb Types:</p>
                        <p class="text-purple-800 text-sm">${rule.verbTypes}</p>
                    </div>
                ` : ''}
            </div>
        `).join('');
    },

    setCategory(category) {
        this.currentCategory = category;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// Add grammar styles
const style = document.createElement('style');
style.textContent = `
    .grammar-rule-card {
        background: white;
        transition: all 0.3s ease;
    }
    
    .grammar-rule-card:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);

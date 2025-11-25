// Complete N5 Learning Path Data
window.LearningPathData = {
    units: [
        {
            id: 'unit-1',
            title: 'Getting Started',
            description: 'Introduction to Japanese basics',
            icon: '🌱',
            lessons: [
                {
                    id: 'lesson-1-1',
                    title: 'Introduction to Japanese',
                    description: 'Learn about the Japanese writing systems and basic pronunciation',
                    xpReward: 50,
                    content: {
                        sections: [
                            {
                                type: 'text',
                                content: 'Welcome to Japanese! Japanese uses three writing systems: Hiragana (ひらがな), Katakana (カタカナ), and Kanji (漢字). In this course, we\'ll focus on Hiragana and Katakana.'
                            },
                            {
                                type: 'text',
                                content: 'Hiragana is used for native Japanese words, while Katakana is used for foreign words and names. Don\'t worry - we\'ll learn them step by step!'
                            }
                        ]
                    }
                },
                {
                    id: 'lesson-1-2',
                    title: 'Basic Greetings',
                    description: 'Learn essential Japanese greetings',
                    xpReward: 75,
                    vocabulary: [
                        { japanese: 'こんにちは', romaji: 'konnichiwa', english: 'Hello', german: 'Hallo' },
                        { japanese: 'おはよう', romaji: 'ohayou', english: 'Good morning', german: 'Guten Morgen' },
                        { japanese: 'こんばんは', romaji: 'konbanwa', english: 'Good evening', german: 'Guten Abend' },
                        { japanese: 'ありがとう', romaji: 'arigatou', english: 'Thank you', german: 'Danke' },
                        { japanese: 'すみません', romaji: 'sumimasen', english: 'Excuse me/Sorry', german: 'Entschuldigung' }
                    ]
                },
                {
                    id: 'lesson-1-3',
                    title: 'Self Introduction',
                    description: 'Introduce yourself in Japanese',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'わたし', romaji: 'watashi', english: 'I/me', german: 'ich' },
                        { japanese: 'なまえ', romaji: 'namae', english: 'name', german: 'Name' },
                        { japanese: 'です', romaji: 'desu', english: 'to be (polite)', german: 'sein' },
                        { japanese: 'はじめまして', romaji: 'hajimemashite', english: 'Nice to meet you', german: 'Schön Sie kennenzulernen' }
                    ],
                    grammar: {
                        pattern: 'わたしは [name] です',
                        explanation: 'This is the basic pattern for introducing yourself. は (wa) marks the topic, and です (desu) is the polite "to be" verb.',
                        examples: [
                            { japanese: 'わたしは たなかです', romaji: 'watashi wa tanaka desu', english: 'I am Tanaka' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'unit-2',
            title: 'Numbers and Counting',
            description: 'Learn Japanese numbers and counters',
            icon: '🔢',
            lessons: [
                {
                    id: 'lesson-2-1',
                    title: 'Numbers 1-10',
                    description: 'Master basic numbers',
                    xpReward: 75,
                    vocabulary: [
                        { japanese: 'いち', romaji: 'ichi', english: 'one', german: 'eins' },
                        { japanese: 'に', romaji: 'ni', english: 'two', german: 'zwei' },
                        { japanese: 'さん', romaji: 'san', english: 'three', german: 'drei' },
                        { japanese: 'し/よん', romaji: 'shi/yon', english: 'four', german: 'vier' },
                        { japanese: 'ご', romaji: 'go', english: 'five', german: 'fünf' },
                        { japanese: 'ろく', romaji: 'roku', english: 'six', german: 'sechs' },
                        { japanese: 'しち/なな', romaji: 'shichi/nana', english: 'seven', german: 'sieben' },
                        { japanese: 'はち', romaji: 'hachi', english: 'eight', german: 'acht' },
                        { japanese: 'きゅう/く', romaji: 'kyuu/ku', english: 'nine', german: 'neun' },
                        { japanese: 'じゅう', romaji: 'juu', english: 'ten', german: 'zehn' }
                    ]
                },
                {
                    id: 'lesson-2-2',
                    title: 'Numbers 11-100',
                    description: 'Expand your number knowledge',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'じゅういち', romaji: 'juuichi', english: 'eleven', german: 'elf' },
                        { japanese: 'にじゅう', romaji: 'nijuu', english: 'twenty', german: 'zwanzig' },
                        { japanese: 'さんじゅう', romaji: 'sanjuu', english: 'thirty', german: 'dreißig' },
                        { japanese: 'ひゃく', romaji: 'hyaku', english: 'hundred', german: 'hundert' }
                    ]
                },
                {
                    id: 'lesson-2-3',
                    title: 'Time Expressions',
                    description: 'Learn to tell time in Japanese',
                    xpReward: 125,
                    vocabulary: [
                        { japanese: 'いま', romaji: 'ima', english: 'now', german: 'jetzt' },
                        { japanese: 'じ', romaji: 'ji', english: "o'clock", german: 'Uhr' },
                        { japanese: 'ふん/ぷん', romaji: 'fun/pun', english: 'minute', german: 'Minute' },
                        { japanese: 'なんじ', romaji: 'nanji', english: 'what time', german: 'wie spät' }
                    ]
                }
            ]
        },
        {
            id: 'unit-3',
            title: 'Daily Life',
            description: 'Essential vocabulary for everyday situations',
            icon: '🏠',
            lessons: [
                {
                    id: 'lesson-3-1',
                    title: 'Family Members',
                    description: 'Learn family vocabulary',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'かぞく', romaji: 'kazoku', english: 'family', german: 'Familie' },
                        { japanese: 'ちち', romaji: 'chichi', english: 'father (my)', german: 'Vater (mein)' },
                        { japanese: 'はは', romaji: 'haha', english: 'mother (my)', german: 'Mutter (meine)' },
                        { japanese: 'あに', romaji: 'ani', english: 'older brother (my)', german: 'älterer Bruder (mein)' },
                        { japanese: 'あね', romaji: 'ane', english: 'older sister (my)', german: 'ältere Schwester (meine)' },
                        { japanese: 'おとうと', romaji: 'otouto', english: 'younger brother', german: 'jüngerer Bruder' },
                        { japanese: 'いもうと', romaji: 'imouto', english: 'younger sister', german: 'jüngere Schwester' }
                    ]
                },
                {
                    id: 'lesson-3-2',
                    title: 'Food and Drinks',
                    description: 'Common food vocabulary',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'たべもの', romaji: 'tabemono', english: 'food', german: 'Essen' },
                        { japanese: 'のみもの', romaji: 'nomimono', english: 'drink', german: 'Getränk' },
                        { japanese: 'みず', romaji: 'mizu', english: 'water', german: 'Wasser' },
                        { japanese: 'おちゃ', romaji: 'ocha', english: 'tea', german: 'Tee' },
                        { japanese: 'ごはん', romaji: 'gohan', english: 'rice/meal', german: 'Reis/Essen' },
                        { japanese: 'パン', romaji: 'pan', english: 'bread', german: 'Brot' },
                        { japanese: 'にく', romaji: 'niku', english: 'meat', german: 'Fleisch' },
                        { japanese: 'さかな', romaji: 'sakana', english: 'fish', german: 'Fisch' }
                    ]
                },
                {
                    id: 'lesson-3-3',
                    title: 'Shopping Phrases',
                    description: 'Essential phrases for shopping',
                    xpReward: 125,
                    vocabulary: [
                        { japanese: 'かう', romaji: 'kau', english: 'to buy', german: 'kaufen' },
                        { japanese: 'うる', romaji: 'uru', english: 'to sell', german: 'verkaufen' },
                        { japanese: 'いくら', romaji: 'ikura', english: 'how much', german: 'wie viel' },
                        { japanese: 'たかい', romaji: 'takai', english: 'expensive', german: 'teuer' },
                        { japanese: 'やすい', romaji: 'yasui', english: 'cheap', german: 'günstig' },
                        { japanese: 'ください', romaji: 'kudasai', english: 'please (give me)', german: 'bitte (geben Sie mir)' }
                    ]
                }
            ]
        },
        {
            id: 'unit-4',
            title: 'Verbs and Actions',
            description: 'Learn common verbs and how to use them',
            icon: '🎯',
            lessons: [
                {
                    id: 'lesson-4-1',
                    title: 'Present Tense Verbs',
                    description: 'Basic verb conjugation',
                    xpReward: 150,
                    vocabulary: [
                        { japanese: 'たべる', romaji: 'taberu', english: 'to eat', german: 'essen' },
                        { japanese: 'のむ', romaji: 'nomu', english: 'to drink', german: 'trinken' },
                        { japanese: 'いく', romaji: 'iku', english: 'to go', german: 'gehen' },
                        { japanese: 'くる', romaji: 'kuru', english: 'to come', german: 'kommen' },
                        { japanese: 'みる', romaji: 'miru', english: 'to see/watch', german: 'sehen' },
                        { japanese: 'きく', romaji: 'kiku', english: 'to listen/ask', german: 'hören/fragen' }
                    ],
                    grammar: {
                        pattern: '[verb stem] + ます',
                        explanation: 'To make verbs polite, use the -masu form. This is the present/future tense.',
                        examples: [
                            { japanese: 'たべます', romaji: 'tabemasu', english: 'eat/will eat' },
                            { japanese: 'のみます', romaji: 'nomimasu', english: 'drink/will drink' }
                        ]
                    }
                },
                {
                    id: 'lesson-4-2',
                    title: 'Past Tense',
                    description: 'Talking about past actions',
                    xpReward: 150,
                    grammar: {
                        pattern: '[verb stem] + ました',
                        explanation: 'To express past tense, change -masu to -mashita.',
                        examples: [
                            { japanese: 'たべました', romaji: 'tabemashita', english: 'ate' },
                            { japanese: 'のみました', romaji: 'nomimashita', english: 'drank' }
                        ]
                    }
                },
                {
                    id: 'lesson-4-3',
                    title: 'Negative Forms',
                    description: 'How to make negative sentences',
                    xpReward: 150,
                    grammar: {
                        pattern: '[verb stem] + ません',
                        explanation: 'To make verbs negative, change -masu to -masen.',
                        examples: [
                            { japanese: 'たべません', romaji: 'tabemasen', english: 'do not eat' },
                            { japanese: 'いきません', romaji: 'ikimasen', english: 'do not go' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'unit-5',
            title: 'Adjectives',
            description: 'Describe people, places, and things',
            icon: '🎨',
            lessons: [
                {
                    id: 'lesson-5-1',
                    title: 'I-Adjectives',
                    description: 'Adjectives ending in い',
                    xpReward: 125,
                    vocabulary: [
                        { japanese: 'おおきい', romaji: 'ookii', english: 'big', german: 'groß' },
                        { japanese: 'ちいさい', romaji: 'chiisai', english: 'small', german: 'klein' },
                        { japanese: 'あたらしい', romaji: 'atarashii', english: 'new', german: 'neu' },
                        { japanese: 'ふるい', romaji: 'furui', english: 'old', german: 'alt' },
                        { japanese: 'いい/よい', romaji: 'ii/yoi', english: 'good', german: 'gut' },
                        { japanese: 'わるい', romaji: 'warui', english: 'bad', german: 'schlecht' },
                        { japanese: 'たかい', romaji: 'takai', english: 'high/expensive', german: 'hoch/teuer' },
                        { japanese: 'ひくい', romaji: 'hikui', english: 'low', german: 'niedrig' }
                    ]
                },
                {
                    id: 'lesson-5-2',
                    title: 'Na-Adjectives',
                    description: 'Adjectives using な',
                    xpReward: 125,
                    vocabulary: [
                        { japanese: 'きれい', romaji: 'kirei', english: 'beautiful/clean', german: 'schön/sauber' },
                        { japanese: 'しずか', romaji: 'shizuka', english: 'quiet', german: 'ruhig' },
                        { japanese: 'にぎやか', romaji: 'nigiyaka', english: 'lively', german: 'lebhaft' },
                        { japanese: 'ゆうめい', romaji: 'yuumei', english: 'famous', german: 'berühmt' },
                        { japanese: 'べんり', romaji: 'benri', english: 'convenient', german: 'praktisch' },
                        { japanese: 'すき', romaji: 'suki', english: 'like', german: 'mögen' }
                    ]
                },
                {
                    id: 'lesson-5-3',
                    title: 'Comparing Things',
                    description: 'Making comparisons',
                    xpReward: 150,
                    grammar: {
                        pattern: 'A は B より [adjective]',
                        explanation: 'Use より (yori) to compare two things. "A is more [adjective] than B".',
                        examples: [
                            { japanese: 'りんごはみかんよりおおきい', romaji: 'ringo wa mikan yori ookii', english: 'Apples are bigger than oranges' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'unit-6',
            title: 'Location and Existence',
            description: 'Expressing where things are',
            icon: '📍',
            lessons: [
                {
                    id: 'lesson-6-1',
                    title: 'Location Words',
                    description: 'Vocabulary for positions',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'うえ', romaji: 'ue', english: 'above/on', german: 'oben/auf' },
                        { japanese: 'した', romaji: 'shita', english: 'below/under', german: 'unten/unter' },
                        { japanese: 'まえ', romaji: 'mae', english: 'front', german: 'vorne' },
                        { japanese: 'うしろ', romaji: 'ushiro', english: 'behind', german: 'hinten' },
                        { japanese: 'となり', romaji: 'tonari', english: 'next to', german: 'nebenan' },
                        { japanese: 'なか', romaji: 'naka', english: 'inside', german: 'innen' },
                        { japanese: 'そと', romaji: 'soto', english: 'outside', german: 'außen' }
                    ]
                },
                {
                    id: 'lesson-6-2',
                    title: 'Existence Verbs',
                    description: 'います and あります',
                    xpReward: 125,
                    grammar: {
                        pattern: '[animate] は [place] に います',
                        explanation: 'Use います (imasu) for living things and あります (arimasu) for non-living things.',
                        examples: [
                            { japanese: 'ねこがいます', romaji: 'neko ga imasu', english: 'There is a cat' },
                            { japanese: 'ほんがあります', romaji: 'hon ga arimasu', english: 'There is a book' }
                        ]
                    }
                },
                {
                    id: 'lesson-6-3',
                    title: 'Places and Buildings',
                    description: 'Common location vocabulary',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'がっこう', romaji: 'gakkou', english: 'school', german: 'Schule' },
                        { japanese: 'びょういん', romaji: 'byouin', english: 'hospital', german: 'Krankenhaus' },
                        { japanese: 'えき', romaji: 'eki', english: 'station', german: 'Bahnhof' },
                        { japanese: 'ぎんこう', romaji: 'ginkou', english: 'bank', german: 'Bank' },
                        { japanese: 'としょかん', romaji: 'toshokan', english: 'library', german: 'Bibliothek' },
                        { japanese: 'レストラン', romaji: 'resutoran', english: 'restaurant', german: 'Restaurant' }
                    ]
                }
            ]
        },
        {
            id: 'unit-7',
            title: 'Particles Mastery',
            description: 'Master essential Japanese particles',
            icon: '🔗',
            lessons: [
                {
                    id: 'lesson-7-1',
                    title: 'は, が, を Particles',
                    description: 'The most important particles',
                    xpReward: 175,
                    grammar: {
                        pattern: 'Multiple patterns',
                        explanation: 'は (wa) marks the topic, が (ga) marks the subject, を (wo/o) marks the direct object.',
                        examples: [
                            { japanese: 'わたしはがくせいです', romaji: 'watashi wa gakusei desu', english: 'I am a student' },
                            { japanese: 'ねこがいます', romaji: 'neko ga imasu', english: 'There is a cat' },
                            { japanese: 'りんごをたべます', romaji: 'ringo wo tabemasu', english: 'I eat an apple' }
                        ]
                    }
                },
                {
                    id: 'lesson-7-2',
                    title: 'に, で, と Particles',
                    description: 'Location and action particles',
                    xpReward: 175,
                    grammar: {
                        pattern: 'Multiple patterns',
                        explanation: 'に (ni) for destination/time, で (de) for location of action, と (to) for "with" or "and".',
                        examples: [
                            { japanese: 'がっこうにいきます', romaji: 'gakkou ni ikimasu', english: 'I go to school' },
                            { japanese: 'としょかんでべんきょうします', romaji: 'toshokan de benkyou shimasu', english: 'I study at the library' },
                            { japanese: 'ともだちといきます', romaji: 'tomodachi to ikimasu', english: 'I go with a friend' }
                        ]
                    }
                },
                {
                    id: 'lesson-7-3',
                    title: 'の, か, よ Particles',
                    description: 'Possession and questions',
                    xpReward: 150,
                    grammar: {
                        pattern: 'Multiple patterns',
                        explanation: 'の (no) shows possession, か (ka) makes questions, よ (yo) adds emphasis.',
                        examples: [
                            { japanese: 'わたしのほん', romaji: 'watashi no hon', english: 'my book' },
                            { japanese: 'がくせいですか', romaji: 'gakusei desu ka', english: 'Are you a student?' },
                            { japanese: 'おいしいですよ', romaji: 'oishii desu yo', english: 'It\'s delicious!' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'unit-8',
            title: 'Weather and Seasons',
            description: 'Talk about weather and time',
            icon: '🌤️',
            lessons: [
                {
                    id: 'lesson-8-1',
                    title: 'Seasons',
                    description: 'The four seasons',
                    xpReward: 100,
                    vocabulary: [
                        { japanese: 'はる', romaji: 'haru', english: 'spring', german: 'Frühling' },
                        { japanese: 'なつ', romaji: 'natsu', english: 'summer', german: 'Sommer' },
                        { japanese: 'あき', romaji: 'aki', english: 'autumn', german: 'Herbst' },
                        { japanese: 'ふゆ', romaji: 'fuyu', english: 'winter', german: 'Winter' }
                    ]
                },
                {
                    id: 'lesson-8-2',
                    title: 'Weather Expressions',
                    description: 'Describe the weather',
                    xpReward: 125,
                    vocabulary: [
                        { japanese: 'てんき', romaji: 'tenki', english: 'weather', german: 'Wetter' },
                        { japanese: 'あめ', romaji: 'ame', english: 'rain', german: 'Regen' },
                        { japanese: 'ゆき', romaji: 'yuki', english: 'snow', german: 'Schnee' },
                        { japanese: 'くもり', romaji: 'kumori', english: 'cloudy', german: 'bewölkt' },
                        { japanese: 'はれ', romaji: 'hare', english: 'sunny', german: 'sonnig' },
                        { japanese: 'あつい', romaji: 'atsui', english: 'hot', german: 'heiß' },
                        { japanese: 'さむい', romaji: 'samui', english: 'cold', german: 'kalt' }
                    ]
                },
                {
                    id: 'lesson-8-3',
                    title: 'Days and Months',
                    description: 'Calendar vocabulary',
                    xpReward: 150,
                    vocabulary: [
                        { japanese: 'きょう', romaji: 'kyou', english: 'today', german: 'heute' },
                        { japanese: 'きのう', romaji: 'kinou', english: 'yesterday', german: 'gestern' },
                        { japanese: 'あした', romaji: 'ashita', english: 'tomorrow', german: 'morgen' },
                        { japanese: 'まいにち', romaji: 'mainichi', english: 'every day', german: 'jeden Tag' },
                        { japanese: 'げつようび', romaji: 'getsuyoubi', english: 'Monday', german: 'Montag' },
                        { japanese: 'かようび', romaji: 'kayoubi', english: 'Tuesday', german: 'Dienstag' }
                    ]
                }
            ]
        },
        {
            id: 'unit-9',
            title: 'Advanced Expressions',
            description: 'Express desires, abilities, and requests',
            icon: '🎭',
            lessons: [
                {
                    id: 'lesson-9-1',
                    title: 'Wanting Something',
                    description: 'ほしい and たい forms',
                    xpReward: 175,
                    grammar: {
                        pattern: '[noun] が ほしい / [verb stem] たい',
                        explanation: 'Use ほしい for wanting objects and -tai for wanting to do actions.',
                        examples: [
                            { japanese: 'みずがほしい', romaji: 'mizu ga hoshii', english: 'I want water' },
                            { japanese: 'いきたい', romaji: 'ikitai', english: 'I want to go' }
                        ]
                    }
                },
                {
                    id: 'lesson-9-2',
                    title: 'Can and Cannot',
                    description: 'Expressing ability',
                    xpReward: 175,
                    grammar: {
                        pattern: '[verb] ことができます',
                        explanation: 'Use this pattern to express ability to do something.',
                        examples: [
                            { japanese: 'およぐことができます', romaji: 'oyogu koto ga dekimasu', english: 'I can swim' }
                        ]
                    }
                },
                {
                    id: 'lesson-9-3',
                    title: 'Making Requests',
                    description: 'Polite requests with ください',
                    xpReward: 150,
                    grammar: {
                        pattern: '[verb て-form] ください',
                        explanation: 'Use て-form + ください to make polite requests.',
                        examples: [
                            { japanese: 'まってください', romaji: 'matte kudasai', english: 'Please wait' },
                            { japanese: 'きいてください', romaji: 'kiite kudasai', english: 'Please listen' }
                        ]
                    }
                }
            ]
        },
        {
            id: 'unit-10',
            title: 'N5 Mastery',
            description: 'Final review and practice',
            icon: '🏆',
            lessons: [
                {
                    id: 'lesson-10-1',
                    title: 'Comprehensive Review',
                    description: 'Review all grammar patterns',
                    xpReward: 200
                },
                {
                    id: 'lesson-10-2',
                    title: 'Vocabulary Challenge',
                    description: 'Test your vocabulary knowledge',
                    xpReward: 200
                },
                {
                    id: 'lesson-10-3',
                    title: 'N5 Final Test',
                    description: 'Complete the final challenge',
                    xpReward: 500
                }
            ]
        }
    ]
};

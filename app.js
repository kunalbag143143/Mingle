// Mingle App JavaScript - Fixed Version
class MingleApp {
    constructor() {
        this.currentLanguage = 'english';
        this.currentScreen = 'feed';
        this.currentVideoIndex = 0;
        this.isPlaying = true;
        this.userFollowing = new Set();
        this.videoLikes = new Map();
        this.videoMingles = new Map();
        this.uploadMode = 'regular';
        
        this.currentUser = {
            username: '@yourname',
            displayName: 'Your Name',
            bio: 'Content Creator | Ready to Mingle | 🇮🇳',
            followers: '1.2M',
            following: '234',
            likes: '5.6M',
            mingles: '892',
            videos: '156',
            verified: false,
            mingleScore: 4.8,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face'
        };
        
        this.sampleVideos = [
            {
                id: 1,
                title: "Amazing Bollywood Dance Moves! 💃 #BollywoodDance #MingleMoves",
                username: "@priyaDancer",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1583944419103-4d6d2e4b12a0?w=400&h=600&fit=crop",
                likes: "12.5K",
                comments: 234,
                shares: 89,
                mingles: 45,
                duration: "0:45",
                verified: true,
                following: false,
                description: "Classic Bharatanatyam fusion with modern beats! Mingle with me for more dance content 🎵✨",
                hashtags: ["#BollywoodDance", "#MingleMoves", "#Dance", "#Fusion"],
                language: "hindi",
                location: "Mumbai, India"
            },
            {
                id: 2,
                title: "Sambalpuri Folk Dance Tutorial 🎭 #SambalPuriDance #MingleTradition",
                username: "@odishaTradition",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1594736797933-d0df3d372d8b?w=400&h=600&fit=crop",
                likes: "8.2K",
                comments: 156,
                shares: 67,
                mingles: 23,
                duration: "1:20",
                verified: false,
                following: false,
                description: "Learn traditional Sambalpuri dance steps! Mingle with our culture 🇮🇳",
                hashtags: ["#SambalPuriDance", "#MingleTradition", "#FolkDance", "#India"],
                language: "sambalpuri",
                location: "Balangir, Odisha"
            },
            {
                id: 3,
                title: "Street Food Challenge: Pani Puri Edition! 🥟 #StreetFood #MingleChallenge",
                username: "@foodieRavi",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=600&fit=crop",
                likes: "25.8K",
                comments: 445,
                shares: 178,
                mingles: 89,
                duration: "0:30",
                verified: true,
                following: true,
                description: "Can you eat 20 pani puris in 2 minutes? Mingle and tag your friends! 🤤",
                hashtags: ["#StreetFood", "#MingleChallenge", "#Challenge", "#Food"],
                language: "hindi",
                location: "Delhi, India"
            },
            {
                id: 4,
                title: "C++ Programming Tips for Mobile Apps 💻 #Programming #MingleTech",
                username: "@techGuru",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=600&fit=crop",
                likes: "15.6K",
                comments: 298,
                shares: 234,
                mingles: 67,
                duration: "2:15",
                verified: true,
                following: false,
                description: "Quick C++ optimization tricks for mobile development. Mingle with tech community! 🚀",
                hashtags: ["#Programming", "#MingleTech", "#CPlusPlus", "#Mobile"],
                language: "english",
                location: "Bangalore, India"
            },
            {
                id: 5,
                title: "Ganesh Chaturthi Celebration 2025! 🙏 #GaneshChaturthi #MingleFestival",
                username: "@festivalVibes",
                avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
                likes: "32.1K",
                comments: 567,
                shares: 289,
                mingles: 123,
                duration: "1:45",
                verified: false,
                following: true,
                description: "Ganpati Bappa Morya! Best moments from our community celebration. Mingle with the festivities! 🎉",
                hashtags: ["#GaneshChaturthi", "#MingleFestival", "#Celebration", "#Community"],
                language: "hindi",
                location: "Pune, India"
            },
            {
                id: 6,
                title: "Make Friends Through Cooking! 👫 #FriendshipGoals #MingleConnect",
                username: "@socialChef",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616c6e90b8d?w=100&h=100&fit=crop&crop=face",
                videoThumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
                likes: "18.9K",
                comments: 423,
                shares: 156,
                mingles: 234,
                duration: "1:10",
                verified: true,
                following: false,
                description: "Cooking together brings people closer! Join our Mingle cooking sessions 🍳👨‍🍳",
                hashtags: ["#FriendshipGoals", "#MingleConnect", "#Cooking", "#Community"],
                language: "english",
                location: "Chennai, India"
            }
        ];

        this.trendingHashtags = [
            "#MingleMoves", "#MingleTech", "#MingleChallenge", "#MingleFestival", "#MingleTradition", 
            "#MingleConnect", "#BollywoodDance", "#TechTips", "#StreetFood", "#GaneshChaturthi", 
            "#Programming", "#FriendshipGoals"
        ];

        this.mingleChallenges = [
            {
                title: "30-Day Dance Challenge",
                description: "Learn a new dance style and mingle with dancers worldwide",
                participants: "1.2M",
                icon: "💃"
            },
            {
                title: "Cultural Exchange",
                description: "Share your local traditions and learn from others",
                participants: "850K",
                icon: "🌍"
            },
            {
                title: "Tech Collaboration",
                description: "Build projects together with developers globally",
                participants: "450K",
                icon: "💻"
            },
            {
                title: "Food Fusion",
                description: "Create fusion recipes with international friends",
                participants: "720K",
                icon: "🍛"
            }
        ];

        this.categories = [
            "Dance", "Comedy", "Food", "Technology", "Music", "Education", "Travel", 
            "Fashion", "Sports", "Mingle", "Friends", "Gaming", "Art", "Lifestyle"
        ];

        this.translations = {
            hindi: {
                name: "हिंदी",
                code: "hi",
                translations: {
                    home: "होम", search: "खोजें", upload: "अपलोड", profile: "प्रोफ़ाइल", settings: "सेटिंग",
                    likes: "पसंद", comments: "टिप्पणी", share: "शेयर", follow: "फॉलो", following: "फॉलो किया गया",
                    trending: "ट्रेंडिंग", foryou: "आपके लिए", discover: "खोजें", mingle: "मिंगल", connect: "जुड़ें",
                    tagline: "मिंगल करो, धमाल मचाओ", followers: "फॉलोअर्स", mingles: "मिंगल्स", videos: "वीडियो",
                    create_video: "नया वीडियो बनाएं", caption: "कैप्शन", hashtags: "हैशटैग", privacy: "गोपनीयता",
                    public: "सार्वजनिक", friends: "केवल मित्र", private: "निजी", post_video: "वीडियो पोस्ट करें",
                    edit_profile: "प्रोफ़ाइल संपादित करें", language: "भाषा और क्षेत्र", select_language: "भाषा चुनें",
                    notifications: "सूचनाएं", push_notifications: "पुश सूचनाएं", mingle_notifications: "मिंगल अनुरोध",
                    private_account: "निजी खाता", allow_comments: "टिप्पणियों की अनुमति दें", allow_mingles: "मिंगल की अनुमति दें",
                    copy_link: "लिंक कॉपी करें", add_comment: "एक टिप्पणी जोड़ें...", post: "पोस्ट", categories: "श्रेणियां",
                    mingle_match: "मिंगल मैच", mingle_moments: "मिंगल क्षण", local_mingle: "स्थानीय मिंगल",
                    mingle_challenges: "मिंगल चुनौतियां", trending_hashtags: "ट्रेंडिंग हैशटैग", local: "स्थानीय",
                    challenges: "चुनौतियां", match_description: "समान रुचियों वाले लोगों को ढूंढें और मिंगल करना शुरू करें!",
                    regular_mode: "नियमित", mingle_mode: "मिंगल मोड", collaborate_mode: "सहयोग", no_music: "कोई संगीत नहीं",
                    music: "संगीत जोड़ें", mingle_settings: "मिंगल सेटिंग्स", auto_mingle: "ऑटो मिंगल सुझाव",
                    location_mingle: "स्थान-आधारित मिंगल", interest_match: "रुचि मिलान", mingle_request: "मिंगल अनुरोध",
                    mingle_message: "जुड़ने और सहयोग करने के लिए मिंगल अनुरोध भेजें!", send_mingle: "मिंगल भेजें",
                    cancel: "रद्द करें", search_placeholder: "वीडियो, यूजर्स, हैशटैग खोजें...",
                    upload_instruction: "वीडियो अपलोड करने के लिए टैप करें या ड्रैग एंड ड्रॉप करें",
                    caption_placeholder: "एक कैप्शन लिखें...", hashtags_placeholder: "#MingleMoves #मजेदार #वायरल",
                    mingle_message_placeholder: "एक व्यक्तिगत संदेश जोड़ें..."
                }
            },
            english: {
                name: "English",
                code: "en",
                translations: {
                    home: "Home", search: "Search", upload: "Upload", profile: "Profile", settings: "Settings",
                    likes: "Likes", comments: "Comments", share: "Share", follow: "Follow", following: "Following",
                    trending: "Trending", foryou: "For You", discover: "Discover", mingle: "Mingle", connect: "Connect",
                    tagline: "Mingle Karo, Dhamal Machao", followers: "Followers", mingles: "Mingles", videos: "Videos",
                    create_video: "Create New Video", caption: "Caption", hashtags: "Hashtags", privacy: "Privacy",
                    public: "Public", friends: "Friends Only", private: "Private", post_video: "Post Video",
                    edit_profile: "Edit Profile", language: "Language & Region", select_language: "Select Language",
                    notifications: "Notifications", push_notifications: "Push Notifications", mingle_notifications: "Mingle Requests",
                    private_account: "Private Account", allow_comments: "Allow Comments", allow_mingles: "Allow Mingles",
                    copy_link: "Copy Link", add_comment: "Add a comment...", post: "Post", categories: "Categories",
                    mingle_match: "Mingle Match", mingle_moments: "Mingle Moments", local_mingle: "Local Mingle",
                    mingle_challenges: "Mingle Challenges", trending_hashtags: "Trending Hashtags", local: "Local",
                    challenges: "Challenges", match_description: "Find people with similar interests and start mingling!",
                    regular_mode: "Regular", mingle_mode: "Mingle Mode", collaborate_mode: "Collaborate", no_music: "No Music",
                    music: "Add Music", mingle_settings: "Mingle Settings", auto_mingle: "Auto Mingle Suggestions",
                    location_mingle: "Location-based Mingle", interest_match: "Interest Matching", mingle_request: "Mingle Request",
                    mingle_message: "Send a Mingle request to connect and collaborate!", send_mingle: "Send Mingle",
                    cancel: "Cancel", search_placeholder: "Search videos, users, hashtags...",
                    upload_instruction: "Tap to upload video or drag & drop",
                    caption_placeholder: "Write a caption...", hashtags_placeholder: "#MingleMoves #fun #viral",
                    mingle_message_placeholder: "Add a personal message..."
                }
            },
            sambalpuri: {
                name: "ସମ୍ବଲପୁରୀ",
                code: "sbl",
                translations: {
                    home: "ଘର", search: "ଖୋଜ", upload: "ଅପଲୋଡ଼", profile: "ପ୍ରୋଫାଇଲ", settings: "ସେଟିଂ",
                    likes: "ପସନ୍ଦ", comments: "ମତାମତ", share: "ସାଝା", follow: "ଅନୁସରଣ", following: "ଅନୁସରଣ କରୁଛି",
                    trending: "ଟ୍ରେଣ୍ଡିଂ", foryou: "ଆପଣଙ୍କ ପାଇଁ", discover: "ଆବିଷ୍କାର", mingle: "ମିଙ୍ଗଲ", connect: "ସଂଯୋଗ",
                    tagline: "ମିଙ୍ଗଲ କରନ୍ତୁ, ଧମାଲ ମଚାନ୍ତୁ", followers: "ଫଲୋଅର୍ସ", mingles: "ମିଙ୍ଗଲ୍ସ", videos: "ଭିଡିଓ",
                    create_video: "ନୂଆ ଭିଡିଓ ତିଆରି କରନ୍ତୁ", caption: "କ୍ୟାପସନ୍", hashtags: "ହ୍ୟାସଟ୍ୟାଗ", privacy: "ଗୋପନୀୟତା",
                    public: "ସାର୍ବଜନୀନ", friends: "କେବଳ ବନ୍ଧୁ", private: "ବ୍ୟକ୍ତିଗତ", post_video: "ଭିଡିଓ ପୋଷ୍ଟ କରନ୍ତୁ",
                    edit_profile: "ପ୍ରୋଫାଇଲ ସମ୍ପାଦନା", language: "ଭାଷା ଏବଂ ଅଞ୍ଚଳ", select_language: "ଭାଷା ବାଛନ୍ତୁ",
                    notifications: "ବିଜ୍ଞପ୍ତି", push_notifications: "ପୁସ୍ ବିଜ୍ଞପ୍ତି", mingle_notifications: "ମିଙ୍ଗଲ ଅନୁରୋଧ",
                    private_account: "ବ୍ୟକ୍ତିଗତ ଖାତା", allow_comments: "ମତାମତର ଅନୁମତି", allow_mingles: "ମିଙ୍ଗଲର ଅନୁମତି",
                    copy_link: "ଲିଙ୍କ କପି କରନ୍ତୁ", add_comment: "ଏକ ମତାମତ ଯୋଗ କରନ୍ତୁ...", post: "ପୋଷ୍ଟ",
                    categories: "ବର୍ଗ", mingle_match: "ମିଙ୍ଗଲ ମ୍ୟାଚ୍", mingle_moments: "ମିଙ୍ଗଲ କ୍ଷଣ",
                    local_mingle: "ସ୍ଥାନୀୟ ମିଙ୍ଗଲ", mingle_challenges: "ମିଙ୍ଗଲ ଚ୍ୟାଲେଞ୍ଜ", trending_hashtags: "ଟ୍ରେଣ୍ଡିଂ ହ୍ୟାସଟ୍ୟାଗ",
                    local: "ସ୍ଥାନୀୟ", challenges: "ଚ୍ୟାଲେଞ୍ଜ", match_description: "ସମାନ ରୁଚି ଥିବା ଲୋକଙ୍କୁ ଖୋଜନ୍ତୁ!",
                    regular_mode: "ନିୟମିତ", mingle_mode: "ମିଙ୍ଗଲ ମୋଡ୍", collaborate_mode: "ସହଯୋଗ", no_music: "ସଙ୍ଗୀତ ନାହିଁ",
                    music: "ସଙ୍ଗୀତ ଯୋଗ କରନ୍ତୁ", mingle_settings: "ମିଙ୍ଗଲ ସେଟିଂ", auto_mingle: "ଅଟୋ ମିଙ୍ଗଲ ସୁଝାବ",
                    location_mingle: "ସ୍ଥାନ-ଆଧାରିତ ମିଙ୍ଗଲ", interest_match: "ରୁଚି ମେଳ", mingle_request: "ମିଙ୍ଗଲ ଅନୁରୋଧ",
                    mingle_message: "ସଂଯୋଗ ଏବଂ ସହଯୋଗ ପାଇଁ ମିଙ୍ଗଲ ଅନୁରୋଧ ପଠାନ୍ତୁ!", send_mingle: "ମିଙ୍ଗଲ ପଠାନ୍ତୁ",
                    cancel: "ବାତିଲ୍", search_placeholder: "ଭିଡିଓ, ଉପଯୋଗକର୍ତ୍ତା, ହ୍ୟାସଟ୍ୟାଗ ଖୋଜନ୍ତୁ...",
                    upload_instruction: "ଭିଡିଓ ଅପଲୋଡ଼ ପାଇଁ ଟ୍ୟାପ କରନ୍ତୁ", caption_placeholder: "ଏକ କ୍ୟାପସନ୍ ଲେଖନ୍ତୁ...",
                    hashtags_placeholder: "#ମିଙ୍ଗଲମୁଭ୍ସ #ମଜା #ଭାଇରାଲ", mingle_message_placeholder: "ବ୍ୟକ୍ତିଗତ ବାର୍ତ୍ତା ଯୋଗ କରନ୍ତୁ..."
                }
            }
        };

        this.matchUsers = [
            {
                username: "@cultureLover",
                name: "Ravi Kumar",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                interests: ["Dance", "Culture", "Music"],
                location: "Mumbai, India",
                mingleScore: 4.9
            },
            {
                username: "@techEnthusiast",
                name: "Priya Singh",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616c6e90b8d?w=80&h=80&fit=crop&crop=face",
                interests: ["Technology", "Programming", "AI"],
                location: "Bangalore, India",
                mingleScore: 4.7
            },
            {
                username: "@foodExplorer",
                name: "Arjun Patel",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                interests: ["Food", "Cooking", "Travel"],
                location: "Delhi, India",
                mingleScore: 4.6
            },
            {
                username: "@traditionalArt",
                name: "Meera Das",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                interests: ["Art", "Tradition", "Handicrafts"],
                location: "Bhubaneswar, Odisha",
                mingleScore: 4.8
            }
        ];
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        console.log('Initializing Mingle App...');
        
        // Ensure all content is rendered first
        setTimeout(() => {
            this.setupEventListeners();
            this.renderVideoFeed();
            this.renderSearchContent();
            this.renderMingleMatch();
            this.renderProfileContent();
            this.updateLanguage();
            this.startVideoProgressSimulation();
            console.log('Mingle App initialized successfully!');
        }, 100);
    }

    setupEventListeners() {
        console.log('Setting up Mingle event listeners...');
        
        // Menu toggle - Fixed with proper error handling
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Menu button clicked');
                this.toggleSideNav();
            });
        } else {
            console.warn('Menu button not found');
        }

        // Mingle button in header
        const mingleBtn = document.getElementById('mingleBtn');
        if (mingleBtn) {
            mingleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Header Mingle button clicked');
                this.navigateToScreen('mingle-match');
                this.showNotification('🤝 Ready to Mingle!');
            });
        }

        // Side nav overlay
        const sideNavOverlay = document.getElementById('sideNavOverlay');
        if (sideNavOverlay) {
            sideNavOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeSideNav();
            });
        }

        // Navigation - Enhanced with better error handling
        document.querySelectorAll('[data-screen]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const screen = btn.getAttribute('data-screen');
                console.log('Navigating to screen:', screen);
                this.navigateToScreen(screen);
            });
        });

        // Upload mode selection - Fixed
        setTimeout(() => {
            document.querySelectorAll('.mode-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Mode button clicked:', btn.getAttribute('data-mode'));
                    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.uploadMode = btn.getAttribute('data-mode');
                    
                    if (this.uploadMode === 'mingle') {
                        this.showNotification('🤝 Mingle Mode activated! Perfect for collaborative content!');
                    } else if (this.uploadMode === 'collaborate') {
                        this.showNotification('👫 Collaboration Mode activated! Let\'s create together!');
                    }
                });
            });
        }, 500);

        // Search tabs - Fixed
        setTimeout(() => {
            document.querySelectorAll('.search-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Search tab clicked:', tab.getAttribute('data-tab'));
                    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const tabType = tab.getAttribute('data-tab');
                    this.handleSearchTab(tabType);
                });
            });
        }, 500);

        // Profile tabs - Fixed
        setTimeout(() => {
            document.querySelectorAll('.profile-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const tabType = tab.getAttribute('data-tab');
                    this.handleProfileTab(tabType);
                });
            });
        }, 500);

        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.currentLanguage = e.target.value;
                this.updateLanguage();
                this.showNotification(`Language changed to ${this.translations[this.currentLanguage].name}`);
            });
        }

        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Search button clicked');
                this.navigateToScreen('search');
            });
        }

        // Modal handlers
        this.setupModalHandlers();
        
        // Upload functionality
        this.setupUploadHandlers();

        // Feature items in side nav - Fixed with timeout
        setTimeout(() => {
            document.querySelectorAll('.feature-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    const feature = item.getAttribute('data-feature');
                    this.handleFeatureClick(feature);
                });
            });
        }, 500);

        console.log('Mingle event listeners setup complete');
    }

    handleFeatureClick(feature) {
        switch(feature) {
            case 'mingle-moments':
                this.showNotification('✨ Mingle Moments - Create special posts to meet new people!');
                break;
            case 'local-mingle':
                this.showNotification('📍 Local Mingle - Discovering people nearby for real meetups!');
                break;
            default:
                this.showNotification('🚀 Feature coming soon!');
        }
        this.closeSideNav();
    }

    handleSearchTab(tabType) {
        console.log('Search tab changed to:', tabType);
        switch(tabType) {
            case 'trending':
                this.showNotification('📈 Showing trending content');
                break;
            case 'mingle':
                this.showNotification('🤝 Showing Mingle-focused content');
                break;
            case 'local':
                this.showNotification('📍 Showing local content near you');
                break;
            case 'challenges':
                this.showNotification('🎯 Showing active Mingle challenges');
                break;
        }
    }

    handleProfileTab(tabType) {
        console.log('Profile tab changed to:', tabType);
        switch(tabType) {
            case 'videos':
                this.showNotification('🎬 Showing your videos');
                break;
            case 'mingles':
                this.showNotification('🤝 Showing your Mingle connections');
                break;
            case 'liked':
                this.showNotification('❤️ Showing liked videos');
                break;
        }
    }

    setupModalHandlers() {
        // Comment modal
        const commentModalOverlay = document.getElementById('commentModalOverlay');
        const closeCommentModal = document.getElementById('closeCommentModal');

        if (commentModalOverlay) {
            commentModalOverlay.addEventListener('click', () => {
                this.closeModal('commentModal');
            });
        }

        if (closeCommentModal) {
            closeCommentModal.addEventListener('click', () => {
                this.closeModal('commentModal');
            });
        }

        // Share modal
        const shareModalOverlay = document.getElementById('shareModalOverlay');
        const closeShareModal = document.getElementById('closeShareModal');

        if (shareModalOverlay) {
            shareModalOverlay.addEventListener('click', () => {
                this.closeModal('shareModal');
            });
        }

        if (closeShareModal) {
            closeShareModal.addEventListener('click', () => {
                this.closeModal('shareModal');
            });
        }

        // Mingle modal - Fixed
        setTimeout(() => {
            const mingleRequestOverlay = document.getElementById('mingleRequestOverlay');
            const closeMingleModal = document.getElementById('closeMingleModal');
            const cancelMingle = document.getElementById('cancelMingle');
            const sendMingle = document.getElementById('sendMingle');

            if (mingleRequestOverlay) {
                mingleRequestOverlay.addEventListener('click', () => {
                    this.closeModal('mingleRequestModal');
                });
            }

            if (closeMingleModal) {
                closeMingleModal.addEventListener('click', () => {
                    this.closeModal('mingleRequestModal');
                });
            }

            if (cancelMingle) {
                cancelMingle.addEventListener('click', () => {
                    this.closeModal('mingleRequestModal');
                });
            }

            if (sendMingle) {
                sendMingle.addEventListener('click', () => {
                    this.showNotification('🤝 Mingle request sent successfully!');
                    this.closeModal('mingleRequestModal');
                });
            }
        }, 500);

        // Copy link functionality
        const copyLinkBtn = document.getElementById('copyLinkBtn');
        if (copyLinkBtn) {
            copyLinkBtn.addEventListener('click', () => {
                this.showNotification('🔗 Link copied to clipboard!');
                this.closeModal('shareModal');
            });
        }

        // Share options
        document.querySelectorAll('.share-option').forEach(btn => {
            if (!btn.id) {
                btn.addEventListener('click', (e) => {
                    const platform = e.target.textContent || e.target.closest('.share-option').textContent;
                    this.showNotification(`📱 Shared to ${platform.trim()}!`);
                    this.closeModal('shareModal');
                });
            }
        });
    }

    setupUploadHandlers() {
        setTimeout(() => {
            const uploadZone = document.getElementById('uploadZone');
            const videoInput = document.getElementById('videoInput');

            if (uploadZone && videoInput) {
                uploadZone.addEventListener('click', () => {
                    console.log('Upload zone clicked');
                    videoInput.click();
                });

                videoInput.addEventListener('change', (e) => {
                    if (e.target.files.length > 0) {
                        console.log('File selected for upload');
                        this.handleVideoUpload(e.target.files[0]);
                    }
                });

                // Drag and drop
                uploadZone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    uploadZone.style.background = 'rgba(147, 51, 234, 0.2)';
                });

                uploadZone.addEventListener('dragleave', () => {
                    uploadZone.style.background = '';
                });

                uploadZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    uploadZone.style.background = '';
                    const files = e.dataTransfer.files;
                    if (files.length > 0 && files[0].type.startsWith('video/')) {
                        this.handleVideoUpload(files[0]);
                    } else {
                        this.showNotification('⚠️ Please upload a video file');
                    }
                });
            } else {
                console.warn('Upload elements not found');
            }
        }, 500);
    }

    toggleSideNav() {
        const sideNav = document.getElementById('sideNav');
        if (sideNav) {
            const isHidden = sideNav.classList.contains('hidden');
            console.log('Toggling side nav, currently hidden:', isHidden);
            if (isHidden) {
                sideNav.classList.remove('hidden');
            } else {
                sideNav.classList.add('hidden');
            }
        } else {
            console.warn('Side nav element not found');
        }
    }

    closeSideNav() {
        const sideNav = document.getElementById('sideNav');
        if (sideNav) {
            sideNav.classList.add('hidden');
        }
    }

    navigateToScreen(screenName) {
        console.log('Navigating to screen:', screenName);
        
        this.currentScreen = screenName;
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenName + 'Screen');
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Successfully activated screen:', screenName);
        } else {
            console.error('Screen not found:', screenName + 'Screen');
        }
        
        // Update bottom navigation
        document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-screen') === screenName) {
                item.classList.add('active');
            }
        });
        
        this.closeSideNav();

        // Screen-specific actions
        if (screenName === 'mingle-match') {
            this.showNotification('🤝 Welcome to Mingle Match! Find your perfect collaboration partners!');
        }
    }

    renderVideoFeed() {
        console.log('Rendering Mingle video feed...');
        const videoFeed = document.getElementById('videoFeed');
        if (!videoFeed) {
            console.error('Video feed element not found');
            return;
        }
        
        // Clear existing content
        videoFeed.innerHTML = '';

        this.sampleVideos.forEach((video, index) => {
            const videoElement = this.createVideoElement(video, index);
            videoFeed.appendChild(videoElement);
        });
        
        console.log('Mingle video feed rendered with', this.sampleVideos.length, 'videos');
    }

    createVideoElement(video, index) {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video-item';
        videoDiv.dataset.videoId = video.id;
        videoDiv.dataset.index = index;

        videoDiv.innerHTML = `
            <div class="video-background" style="background-image: url(${video.videoThumb})"></div>
            <img src="${video.videoThumb}" alt="${video.title}" class="video-thumbnail">
            <div class="video-overlay">
                <div class="video-user">
                    <img src="${video.avatar}" alt="${video.username}">
                    <div class="video-user-info">
                        <div class="video-username">
                            ${video.username}
                            ${video.verified ? '<span class="verified-badge">✓</span>' : ''}
                        </div>
                        <div class="video-location">${video.location}</div>
                    </div>
                </div>
                <div class="video-description">${video.description}</div>
                <div class="video-hashtags">
                    ${video.hashtags.map(tag => `<a href="#" class="hashtag">${tag}</a>`).join(' ')}
                </div>
            </div>
            <div class="video-actions">
                <button class="action-btn like-btn ${this.videoLikes.has(video.id) ? 'liked' : ''}" data-video-id="${video.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <div class="action-count">${video.likes}</div>
                </button>
                <button class="action-btn comment-btn" data-video-id="${video.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                    </svg>
                    <div class="action-count">${video.comments}</div>
                </button>
                <button class="action-btn share-btn" data-video-id="${video.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16,6 12,2 8,6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    <div class="action-count">${video.shares}</div>
                </button>
                <button class="action-btn mingle-btn-action ${this.videoMingles.has(video.id) ? 'mingled' : ''}" data-video-id="${video.id}" title="Mingle with this creator">
                    🤝
                    <div class="action-count">${video.mingles}</div>
                </button>
                <button class="action-btn follow-btn ${video.following || this.userFollowing.has(video.username) ? 'following' : ''}" data-username="${video.username}">
                    ${video.following || this.userFollowing.has(video.username) ? '✓' : '+'}
                </button>
            </div>
            <div class="video-progress">
                <div class="video-progress-bar" style="width: ${Math.random() * 50}%"></div>
            </div>
        `;

        // Setup interactions after a slight delay to ensure DOM is ready
        setTimeout(() => {
            this.setupVideoInteractions(videoDiv, video);
        }, 100);

        // Double-tap to like functionality
        let tapTimeout;
        let tapCount = 0;
        videoDiv.addEventListener('click', (e) => {
            if (e.target.closest('.video-actions') || e.target.closest('.hashtag')) return;
            
            tapCount++;
            if (tapCount === 1) {
                tapTimeout = setTimeout(() => {
                    tapCount = 0;
                    this.toggleVideoPlayPause(video.id);
                }, 300);
            } else if (tapCount === 2) {
                clearTimeout(tapTimeout);
                tapCount = 0;
                this.likeVideo(video.id, true);
                this.createFloatingHeart(e);
            }
        });

        return videoDiv;
    }

    setupVideoInteractions(videoElement, video) {
        const likeBtn = videoElement.querySelector('.like-btn');
        const commentBtn = videoElement.querySelector('.comment-btn');
        const shareBtn = videoElement.querySelector('.share-btn');
        const mingleBtn = videoElement.querySelector('.mingle-btn-action');
        const followBtn = videoElement.querySelector('.follow-btn');

        if (likeBtn) {
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.likeVideo(video.id);
            });
        }

        if (commentBtn) {
            commentBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openCommentModal(video.id);
            });
        }

        if (shareBtn) {
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openShareModal(video.id);
            });
        }

        if (mingleBtn) {
            mingleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('Mingle button clicked for video:', video.id);
                this.mingleWithVideo(video.id);
            });
        }

        if (followBtn) {
            followBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFollow(video.username);
            });
        }
    }

    mingleWithVideo(videoId) {
        console.log('Mingling with video:', videoId);
        const mingleBtn = document.querySelector(`.mingle-btn-action[data-video-id="${videoId}"]`);
        if (!mingleBtn) {
            console.error('Mingle button not found for video:', videoId);
            return;
        }
        
        const isMingled = this.videoMingles.has(videoId);

        if (!isMingled) {
            this.videoMingles.set(videoId, true);
            mingleBtn.classList.add('mingled');
            mingleBtn.classList.add('mingle-glow');
            
            // Update mingle count
            const countElement = mingleBtn.querySelector('.action-count');
            if (countElement) {
                let currentCount = this.parseLikeCount(countElement.textContent);
                countElement.textContent = this.formatLikeCount(currentCount + 1);
            }
            
            setTimeout(() => {
                mingleBtn.classList.remove('mingle-glow');
            }, 2000);
            
            this.showNotification('🤝 Mingled! Ready to collaborate!');
            
            // Show mingle request modal for more interaction
            setTimeout(() => {
                this.showModal('mingleRequestModal');
            }, 1000);
        } else {
            this.videoMingles.delete(videoId);
            mingleBtn.classList.remove('mingled');
            
            const countElement = mingleBtn.querySelector('.action-count');
            if (countElement) {
                let currentCount = this.parseLikeCount(countElement.textContent);
                countElement.textContent = this.formatLikeCount(currentCount - 1);
            }
            
            this.showNotification('Mingle removed');
        }
    }

    likeVideo(videoId, isDoubleTap = false) {
        const likeBtn = document.querySelector(`.like-btn[data-video-id="${videoId}"]`);
        if (!likeBtn) return;
        
        const isLiked = this.videoLikes.has(videoId);

        if (!isLiked) {
            this.videoLikes.set(videoId, true);
            likeBtn.classList.add('liked');
            likeBtn.classList.add('animate-like');
            
            const countElement = likeBtn.querySelector('.action-count');
            if (countElement) {
                let currentCount = this.parseLikeCount(countElement.textContent);
                countElement.textContent = this.formatLikeCount(currentCount + 1);
            }

            setTimeout(() => {
                likeBtn.classList.remove('animate-like');
            }, 300);
            
            this.showNotification('❤️ Liked!');
        } else if (!isDoubleTap) {
            this.videoLikes.delete(videoId);
            likeBtn.classList.remove('liked');
            
            const countElement = likeBtn.querySelector('.action-count');
            if (countElement) {
                let currentCount = this.parseLikeCount(countElement.textContent);
                countElement.textContent = this.formatLikeCount(currentCount - 1);
            }
            
            this.showNotification('Unliked');
        }
    }

    toggleFollow(username) {
        const followBtn = document.querySelector(`.follow-btn[data-username="${username}"]`);
        if (!followBtn) return;
        
        const isFollowing = this.userFollowing.has(username);

        if (!isFollowing) {
            this.userFollowing.add(username);
            followBtn.classList.add('following');
            followBtn.innerHTML = '✓';
            this.showNotification(`✅ Now following ${username}`);
        } else {
            this.userFollowing.delete(username);
            followBtn.classList.remove('following');
            followBtn.innerHTML = '+';
            this.showNotification(`Unfollowed ${username}`);
        }
    }

    createFloatingHeart(event) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = (event.clientX - 12) + 'px';
        heart.style.top = (event.clientY - 12) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        document.body.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1000);
    }

    renderSearchContent() {
        console.log('Rendering Mingle search content...');
        
        // Render trending hashtags with delay to ensure DOM is ready
        setTimeout(() => {
            const hashtagGrid = document.getElementById('hashtagGrid');
            if (hashtagGrid) {
                hashtagGrid.innerHTML = '';
                
                this.trendingHashtags.forEach((hashtag, index) => {
                    const hashtagElement = document.createElement('a');
                    hashtagElement.className = 'hashtag-item';
                    hashtagElement.href = '#';
                    hashtagElement.textContent = hashtag;
                    hashtagElement.style.background = `var(--color-bg-${(index % 8) + 1})`;
                    hashtagElement.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.searchHashtag(hashtag);
                    });
                    hashtagGrid.appendChild(hashtagElement);
                });
                console.log('Hashtags rendered:', this.trendingHashtags.length);
            } else {
                console.warn('Hashtag grid not found');
            }

            // Render Mingle challenges
            const challengesGrid = document.getElementById('challengesGrid');
            if (challengesGrid) {
                challengesGrid.innerHTML = '';
                
                this.mingleChallenges.forEach((challenge, index) => {
                    const challengeElement = document.createElement('div');
                    challengeElement.className = 'challenge-item';
                    challengeElement.style.background = `var(--color-bg-${(index % 8) + 1})`;
                    challengeElement.innerHTML = `
                        <div style="font-size: 24px; margin-bottom: 8px;">${challenge.icon}</div>
                        <div style="font-weight: bold; margin-bottom: 4px;">${challenge.title}</div>
                        <div style="font-size: 12px; opacity: 0.8; margin-bottom: 8px;">${challenge.description}</div>
                        <div style="font-size: 11px; color: #9333EA;">${challenge.participants} participants</div>
                    `;
                    challengeElement.addEventListener('click', () => {
                        this.joinChallenge(challenge.title);
                    });
                    challengesGrid.appendChild(challengeElement);
                });
                console.log('Challenges rendered:', this.mingleChallenges.length);
            }

            // Render categories
            const categoryGrid = document.getElementById('categoryGrid');
            if (categoryGrid) {
                categoryGrid.innerHTML = '';
                
                this.categories.forEach((category, index) => {
                    const categoryElement = document.createElement('div');
                    categoryElement.className = 'category-item';
                    categoryElement.textContent = category;
                    categoryElement.style.background = `var(--color-bg-${(index % 8) + 1})`;
                    categoryElement.addEventListener('click', () => {
                        this.searchCategory(category);
                    });
                    categoryGrid.appendChild(categoryElement);
                });
                console.log('Categories rendered:', this.categories.length);
            }
        }, 300);

        this.setupSearchFunctionality();
    }

    renderMingleMatch() {
        console.log('Rendering Mingle Match content...');
        setTimeout(() => {
            const matchCards = document.getElementById('matchCards');
            if (!matchCards) {
                console.warn('Match cards container not found');
                return;
            }
            
            matchCards.innerHTML = '';

            this.matchUsers.forEach(user => {
                const matchCard = document.createElement('div');
                matchCard.className = 'match-card';
                matchCard.innerHTML = `
                    <img src="${user.avatar}" alt="${user.name}" class="match-avatar">
                    <div class="match-name">${user.name}</div>
                    <div class="match-username">${user.username}</div>
                    <div class="match-location" style="font-size: 12px; color: #666; margin-bottom: 12px;">${user.location}</div>
                    <div class="match-score" style="margin-bottom: 12px;">⭐ ${user.mingleScore}</div>
                    <div class="match-interests">
                        ${user.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
                    </div>
                    <div class="match-actions">
                        <button class="btn btn--outline" onclick="mingleApp.skipMatch('${user.username}')">Skip</button>
                        <button class="btn mingle-btn-primary" onclick="mingleApp.sendMingleRequest('${user.username}')">Mingle</button>
                    </div>
                `;
                matchCards.appendChild(matchCard);
            });
            console.log('Match cards rendered:', this.matchUsers.length);
        }, 300);
    }

    sendMingleRequest(username) {
        this.showNotification(`🤝 Mingle request sent to ${username}!`);
        // Remove the card with animation
        const cards = document.querySelectorAll('.match-card');
        cards.forEach(card => {
            if (card.innerHTML.includes(username)) {
                card.style.transform = 'translateX(100px)';
                card.style.opacity = '0';
                setTimeout(() => {
                    if (card.parentNode) {
                        card.parentNode.removeChild(card);
                    }
                }, 300);
            }
        });
    }

    skipMatch(username) {
        this.showNotification(`Skipped ${username}`);
        // Remove the card with animation
        const cards = document.querySelectorAll('.match-card');
        cards.forEach(card => {
            if (card.innerHTML.includes(username)) {
                card.style.transform = 'translateX(-100px)';
                card.style.opacity = '0';
                setTimeout(() => {
                    if (card.parentNode) {
                        card.parentNode.removeChild(card);
                    }
                }, 300);
            }
        });
    }

    joinChallenge(challengeTitle) {
        this.showNotification(`🎯 Joined ${challengeTitle}! Start creating content!`);
        this.navigateToScreen('upload');
    }

    setupSearchFunctionality() {
        setTimeout(() => {
            const searchInput = document.querySelector('.search-input');
            const searchSubmit = document.querySelector('.search-submit');
            
            if (searchSubmit && searchInput) {
                searchSubmit.addEventListener('click', () => {
                    this.performSearch(searchInput.value);
                });
                
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.performSearch(searchInput.value);
                    }
                });
            }
        }, 500);
    }

    renderProfileContent() {
        setTimeout(() => {
            const profileVideoGrid = document.getElementById('profileVideoGrid');
            if (!profileVideoGrid) return;
            
            profileVideoGrid.innerHTML = '';

            this.sampleVideos.slice(0, 6).forEach(video => {
                const gridItem = document.createElement('div');
                gridItem.className = 'video-grid-item';
                gridItem.innerHTML = `
                    <img src="${video.videoThumb}" alt="${video.title}">
                `;
                gridItem.addEventListener('click', () => {
                    this.navigateToVideo(video.id);
                });
                profileVideoGrid.appendChild(gridItem);
            });
        }, 300);
    }

    navigateToVideo(videoId) {
        const videoIndex = this.sampleVideos.findIndex(v => v.id === videoId);
        if (videoIndex !== -1) {
            this.currentVideoIndex = videoIndex;
            this.navigateToScreen('feed');
            setTimeout(() => {
                this.scrollToVideo(videoIndex);
            }, 300);
        }
    }

    scrollToVideo(index) {
        const videoFeed = document.getElementById('videoFeed');
        if (videoFeed) {
            const targetVideo = videoFeed.children[index];
            if (targetVideo) {
                targetVideo.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    searchHashtag(hashtag) {
        this.showNotification(`🔍 Searching for ${hashtag}...`);
    }

    searchCategory(category) {
        this.showNotification(`📂 Browsing ${category} videos...`);
    }

    performSearch(query) {
        if (query.trim()) {
            this.showNotification(`🔍 Searching for "${query}"...`);
        }
    }

    handleVideoUpload(file) {
        let modeMessage = '';
        switch(this.uploadMode) {
            case 'mingle':
                modeMessage = ' in Mingle Mode - perfect for finding collaborators!';
                break;
            case 'collaborate':
                modeMessage = ' in Collaboration Mode - ready to work together!';
                break;
            default:
                modeMessage = '';
        }
        
        this.showNotification(`📤 Uploading ${file.name}${modeMessage}`);
        
        // Simulate upload progress
        let progress = 0;
        const uploadInterval = setInterval(() => {
            progress += 10;
            
            if (progress >= 100) {
                clearInterval(uploadInterval);
                this.showNotification('🎉 Video uploaded successfully to Mingle!');
                
                // Add new video to feed
                const newVideo = {
                    id: Date.now(),
                    title: `New Mingle Video - ${file.name.substring(0, 20)}...`,
                    username: this.currentUser.username,
                    avatar: this.currentUser.avatar,
                    videoThumb: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?w=400&h=600&fit=crop',
                    likes: '0',
                    comments: 0,
                    shares: 0,
                    mingles: 0,
                    duration: '1:00',
                    verified: false,
                    following: false,
                    description: `Check out my latest ${this.uploadMode} video! 🚀 #NewVideo #Mingle`,
                    hashtags: ['#NewVideo', '#Mingle', '#MingleContent'],
                    language: this.currentLanguage,
                    location: 'My Location'
                };
                
                this.sampleVideos.unshift(newVideo);
                this.renderVideoFeed();
                this.navigateToScreen('feed');
            }
        }, 200);
    }

    openCommentModal(videoId) {
        this.generateComments(videoId);
        this.showModal('commentModal');
    }

    openShareModal(videoId) {
        this.showModal('shareModal');
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    generateComments(videoId) {
        const commentList = document.getElementById('commentList');
        if (!commentList) return;
        
        const sampleComments = [
            {
                username: '@mingleDancer',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6e90b8d?w=32&h=32&fit=crop&crop=face',
                text: 'Amazing Mingle content! 🤝💃 Let\'s collaborate!',
                time: '2h'
            },
            {
                username: '@cultureFan',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
                text: 'This is why I love Mingle! Such authentic cultural content! 🇮🇳',
                time: '1h'
            },
            {
                username: '@techMingle',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
                text: 'Perfect example of how Mingle brings people together! ✨',
                time: '45m'
            }
        ];

        commentList.innerHTML = '';
        sampleComments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.innerHTML = `
                <img src="${comment.avatar}" alt="${comment.username}" class="comment-avatar">
                <div class="comment-content">
                    <div class="comment-username">${comment.username}</div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-time">${comment.time}</div>
                </div>
            `;
            commentList.appendChild(commentDiv);
        });

        this.setupCommentSubmission();
    }

    setupCommentSubmission() {
        const commentSubmit = document.querySelector('.comment-submit');
        const commentInput = document.querySelector('.comment-input');
        
        if (commentSubmit && commentInput) {
            commentSubmit.replaceWith(commentSubmit.cloneNode(true));
            const newCommentSubmit = document.querySelector('.comment-submit');
            
            newCommentSubmit.addEventListener('click', () => {
                if (commentInput.value.trim()) {
                    this.addComment(commentInput.value.trim());
                    commentInput.value = '';
                }
            });

            commentInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && commentInput.value.trim()) {
                    this.addComment(commentInput.value.trim());
                    commentInput.value = '';
                }
            });
        }
    }

    addComment(text) {
        const commentList = document.getElementById('commentList');
        if (!commentList) return;
        
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <img src="${this.currentUser.avatar}" alt="${this.currentUser.username}" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-username">${this.currentUser.username}</div>
                <div class="comment-text">${text}</div>
                <div class="comment-time">now</div>
            </div>
        `;
        commentList.insertBefore(newComment, commentList.firstChild);
        this.showNotification('💬 Comment posted!');
    }

    toggleVideoPlayPause(videoId) {
        this.isPlaying = !this.isPlaying;
        this.showNotification(this.isPlaying ? '▶️ Playing' : '⏸️ Paused');
    }

    startVideoProgressSimulation() {
        setInterval(() => {
            if (this.isPlaying) {
                const progressBars = document.querySelectorAll('.video-progress-bar');
                progressBars.forEach((bar, index) => {
                    if (index === this.currentVideoIndex) {
                        const currentWidth = parseFloat(bar.style.width) || 0;
                        if (currentWidth < 100) {
                            bar.style.width = (currentWidth + 0.3) + '%';
                        } else {
                            bar.style.width = '0%';
                        }
                    }
                });
            }
        }, 200);
    }

    updateLanguage() {
        const lang = this.translations[this.currentLanguage];
        if (!lang) return;

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (lang.translations[key]) {
                element.textContent = lang.translations[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (lang.translations[key]) {
                element.placeholder = lang.translations[key];
            }
        });

        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = this.currentLanguage;
        }
        
        document.documentElement.lang = lang.code;
    }

    showNotification(message) {
        // Remove existing notifications
        const existingToasts = document.querySelectorAll('.mingle-toast');
        existingToasts.forEach(toast => toast.remove());
        
        // Create new toast notification
        const toast = document.createElement('div');
        toast.className = 'mingle-toast';
        toast.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #9333EA, #EC4899);
            color: white;
            padding: 12px 24px;
            border-radius: 24px;
            font-size: 14px;
            font-weight: 500;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
            max-width: 300px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Show toast
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);

        // Hide and remove toast
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    parseLikeCount(countStr) {
        if (countStr.includes('K')) {
            return parseFloat(countStr.replace('K', '')) * 1000;
        } else if (countStr.includes('M')) {
            return parseFloat(countStr.replace('M', '')) * 1000000;
        }
        return parseInt(countStr) || 0;
    }

    formatLikeCount(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    }
}

// Initialize the Mingle app
console.log('Mingle App script loaded - Enhanced version');

// Create global app instance
window.mingleApp = new MingleApp();
window.mingleApp.init();
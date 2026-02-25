// ============================================
// ============================================

const CONFIG = {
    // Name
    valentineName: "MOHINUR 7AYATI INTI",

    // The title that appears in the browser tab
    // Use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will you be happy and not mad anymore???? 💕 💕 💕",

    // Floating emojis that appear in the background
    // More emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻', '🐱', '🐱', '🐱', '🐱', '🐱']                       // Cute bear and cat emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you love me? P.S: Take your time and dont rush, go with the flow of the music!", 
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't only love you, you are my 7beebi! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me? P.S: Drag the slider slowly",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be happy and not mad or upset because I am listening and understanding you wallahi 😢", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "AND BEYOND THE WHOLE UNIVERSEEEE! 💕🥰💋",              // Shows when they go past 1000%
        normal: "FOREVERR AND ALWAYSSS AND TO INFINITYYYYYY AND BEYOOONDDD! 🚀💕💝"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest man in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss, after a long day",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#F2CBE0",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#F3A5C0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#E42165",     // Button color (should stand out against the background)
        buttonHover: "#F26A8D",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#E40094"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "60px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 2.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/djnsppudm/video/upload/v1772002610/256612-d9ba459e-e75e-4a91-ab8d-ba95e97e46dd_JTMIKnbr_iof4x5.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.8                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

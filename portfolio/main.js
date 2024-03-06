const typewriterText = document.getElementById('typewriter-text');
const words = ["Creator", "Programmer", "Artist", "Photographer"];
let currentWordIndex = 0;

function typeWord(word, callback) {
    let i = 0;
    const typingInterval = setInterval(() => {
        typewriterText.textContent += word[i];
        i++;
        if (i === word.length) {
            clearInterval(typingInterval);
            setTimeout(() => { // Wait for a bit before erasing and moving to the next word
                eraseWord(callback);
            }, 1500);
        }
    }, 200); // Typing speed in milliseconds
}

function eraseWord(callback) {
    const erasingInterval = setInterval(() => {
        typewriterText.textContent = typewriterText.textContent.slice(0, -1);
        if (typewriterText.textContent.length === 0) {
            clearInterval(erasingInterval);
            callback(); // Move on to the next word
        }
    }, 100); // Erasing speed in milliseconds
}

function cycleWords() {
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0; // Reset to loop again
    }
    typeWord(words[currentWordIndex], () => {
        currentWordIndex++;
        cycleWords();
    });
}

// Start the cycle of words
cycleWords();

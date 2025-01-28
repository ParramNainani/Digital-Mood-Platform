const moodQuotes = {
    happy: "Happiness is not by chance, but by choice.",
    sad: "Tears come from the heart and not from the brain.",
    angry: "Anger is one letter short of danger.",
    motivated: "The only way to do great work is to love what you do.",
    calm: "Calmness is the cradle of power."
};

const moodBackgrounds = {
    happy: 'happy-bg',
    sad: 'sad-bg',
    angry: 'angry-bg',
    motivated: 'motivated-bg',
    calm: 'calm-bg'
};

function updateMood() {
    const mood = document.getElementById("moodSelect").value;
    const quoteDisplay = document.getElementById("quoteDisplay");
    const body = document.body;

    // Change background
    body.className = moodBackgrounds[mood];

    // Show quote
    quoteDisplay.innerHTML = `<p>${moodQuotes[mood]}</p>`;
    quoteDisplay.style.opacity = 1;

    // Apply animation on quote
    quoteDisplay.classList.add('fadeIn');

    // Reset animation after quote is shown
    setTimeout(() => {
        quoteDisplay.classList.remove('fadeIn');
    }, 600);
}

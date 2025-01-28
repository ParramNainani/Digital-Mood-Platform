const moodQuotes = {
    happy: "Happiness is not by chance, but by choice.",
    sad: "Tears come from the heart and not from the brain.",
    angry: "Anger is one letter short of danger.",
    motivated: "The only way to do great work is to love what you do.",
    calm: "Calmness is the cradle of power."
};

const moodColors = {
    happy: 'happy',
    sad: 'sad',
    angry: 'angry',
    motivated: 'motivated',
    calm: 'calm'
};

const moodLog = {}; // To store the mood log (date -> mood)
const allMoods = [];

// Initialize Calendar for current month
const calendarContainer = document.getElementById('calendarView');

function generateCalendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    
    // Clear previous calendar
    calendarContainer.innerHTML = '';

    // Generate days
    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        // Check if mood is logged for this day
        const dateString = `${currentYear}-${currentMonth + 1}-${day}`;
        if (moodLog[dateString]) {
            dayElement.classList.add('mood-logged', moodLog[dateString]);
        }

        calendarContainer.appendChild(dayElement);
    }
}

function logMood() {
    const selectedMood = document.getElementById('moodSelect').value;
    const currentDate = new Date();
    const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    // Log the mood for today
    moodLog[dateString] = selectedMood;
    allMoods.push(selectedMood);
    
    // Re-render the calendar
    generateCalendar();
    
    // Update analytics
    updateAnalytics();
}

function updateAnalytics() {
    const moodCount = {
        happy: 0,
        sad: 0,
        angry: 0,
        motivated: 0,
        calm: 0
    };

    allMoods.forEach(mood => {
        moodCount[mood]++;
    });

    const mostCommonMood = Object.keys(moodCount).reduce((a, b) => moodCount[a] > moodCount[b] ? a : b);
    
    // Display most common mood
    document.getElementById('mostCommonMood').innerHTML = `<p><strong>Most Common Mood:</strong> ${mostCommonMood}</p>`;

    // Display mood trends (basic)
    const trends = Object.entries(moodCount).map(([mood, count]) => `<p>${mood.charAt(0).toUpperCase() + mood.slice(1)}: ${count}</p>`).join('');
    document.getElementById('moodTrends').innerHTML = `<p><strong>Mood Trends:</strong></p>${trends}`;
}

// Initialize calendar on page load
generateCalendar();

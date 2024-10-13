document.addEventListener('DOMContentLoaded', () => {
    const dailyQuotes = [
        "Believe you can and you're halfway there.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Don’t watch the clock; do what it does. Keep going.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "You are never too old to set another goal or to dream a new dream.",
        "The only way to do great work is to love what you do.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Dream big and dare to fail.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Act as if what you do makes a difference. It does."
    ];
    
    const quoteElement = document.getElementById('daily-quote');
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const notes = document.getElementById('notes');
    
    // Function to display a random motivational quote
    const displayRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
        const selectedQuote = dailyQuotes[randomIndex];
        quoteElement.textContent = selectedQuote;
    };
    
    displayRandomQuote(); // Call the function to display a random quote when the page loads

    // Add task to the list
    addTaskButton.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskInput.value;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Pomodoro Timer
    let timer;
    let timeLeft = 1500; // 25 minutes

    const timerDisplay = document.getElementById('timer-display');
    const startTimerButton = document.getElementById('start-timer');
    const stopTimerButton = document.getElementById('stop-timer');

    startTimerButton.addEventListener('click', () => {
        clearInterval(timer);
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else {
                clearInterval(timer);
                alert('Time is up! Take a break!');
                timeLeft = 1500; // Reset to 25 minutes
                timerDisplay.textContent = '25:00';
            }
        }, 1000);
    });

    stopTimerButton.addEventListener('click', () => {
        clearInterval(timer);
        timeLeft = 1500; // Reset to 25 minutes
        timerDisplay.textContent = '25:00';
    });
});

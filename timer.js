document.addEventListener('DOMContentLoaded', () => {
    const customMinutesInput = document.getElementById('custom-minutes');
    const customSecondsInput = document.getElementById('custom-seconds');
    const setTimerButton = document.getElementById('set-timer');
    const customTimerDisplay = document.getElementById('custom-timer-display');
    const stopTimerButton = document.getElementById('stop-custom-timer');

    let countdown;
    let timeLeft;

    setTimerButton.addEventListener('click', () => {
        const minutes = parseInt(customMinutesInput.value) || 0;
        const seconds = parseInt(customSecondsInput.value) || 0;

        timeLeft = minutes * 60 + seconds; // Convert to total seconds
        customTimerDisplay.textContent = formatTime(timeLeft);

        if (countdown) {
            clearInterval(countdown); // Clear any existing timer
        }

        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("Time's up!");
            } else {
                timeLeft--;
                customTimerDisplay.textContent = formatTime(timeLeft);
            }
        }, 1000);
    });

    stopTimerButton.addEventListener('click', () => {
        clearInterval(countdown);
        customTimerDisplay.textContent = '00:00';
        customMinutesInput.value = '';
        customSecondsInput.value = '';
    });

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});

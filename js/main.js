// DestinyGuessr - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get start game button and timer toggle
    const startGameBtn = document.getElementById('start-game');
    const timerToggle = document.getElementById('timer-toggle');

    // Load saved preference if available
    if (timerToggle) {
        const savedTimerPreference = localStorage.getItem('destinyGuessr_timerEnabled');
        if (savedTimerPreference !== null) {
            timerToggle.checked = savedTimerPreference === 'true';
        }

        // Save preference when toggle is changed
        timerToggle.addEventListener('change', function() {
            localStorage.setItem('destinyGuessr_timerEnabled', timerToggle.checked);
        });
    }

    // Add event listener to start game button
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            // Save timer preference before starting game
            if (timerToggle) {
                localStorage.setItem('destinyGuessr_timerEnabled', timerToggle.checked);
            }

            // Redirect to game page
            window.location.href = 'game.html';
        });
    }
});

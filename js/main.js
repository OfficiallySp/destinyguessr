// DestinyGuessr - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const startGameBtn = document.getElementById('start-game');
    const timerToggle = document.getElementById('timer-toggle');
    const normalModeBtn = document.getElementById('normal-mode');
    const infiniteModeBtn = document.getElementById('infinite-mode');

    // Initialize selected mode
    let selectedMode = 'normal';

    // Load saved preferences if available
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

    // Set up mode selection
    if (normalModeBtn && infiniteModeBtn) {
        // Load saved mode preference if available
        const savedModePreference = localStorage.getItem('destinyGuessr_infiniteModeEnabled');
        if (savedModePreference === 'true') {
            selectedMode = 'infinite';
            infiniteModeBtn.classList.add('selected');
        } else {
            normalModeBtn.classList.add('selected');
        }

        // Add click handlers for mode selection
        normalModeBtn.addEventListener('click', function() {
            normalModeBtn.classList.add('selected');
            infiniteModeBtn.classList.remove('selected');
            selectedMode = 'normal';
        });

        infiniteModeBtn.addEventListener('click', function() {
            infiniteModeBtn.classList.add('selected');
            normalModeBtn.classList.remove('selected');
            selectedMode = 'infinite';
        });
    }

    // Add event listener to start game button
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            // Save timer preference before starting game
            if (timerToggle) {
                localStorage.setItem('destinyGuessr_timerEnabled', timerToggle.checked);
            }

            // Save mode preference before starting game
            const isInfiniteMode = selectedMode === 'infinite';
            localStorage.setItem('destinyGuessr_infiniteModeEnabled', isInfiniteMode);

            // Redirect to game page
            window.location.href = 'game.html';
        });
    }

    // Add some visual flair on hover for infinite mode
    if (infiniteModeBtn) {
        const badge = infiniteModeBtn.querySelector('.mode-badge');
        infiniteModeBtn.addEventListener('mouseover', function() {
            if (badge) {
                badge.style.transform = 'rotate(-5deg) scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = 'rotate(5deg) scale(1.1)';
                }, 200);
            }
        });

        infiniteModeBtn.addEventListener('mouseout', function() {
            if (badge) {
                badge.style.transform = 'rotate(5deg)';
            }
        });
    }
});

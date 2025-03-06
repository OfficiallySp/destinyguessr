// DestinyGuessr - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get start game button
    const startGameBtn = document.getElementById('start-game');

    // Add event listener to start game button
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            // Redirect to game page
            window.location.href = 'game.html';
        });
    }

    // Check if there's a stored game in progress
    const gameInProgress = localStorage.getItem('destinyGuessr_gameInProgress');

    // If there's a game in progress, add a resume button
    if (gameInProgress) {
        const gameIntroDiv = document.querySelector('.game-intro');

        // Create resume button
        const resumeButton = document.createElement('button');
        resumeButton.textContent = 'Resume Game';
        resumeButton.className = 'btn btn-secondary';
        resumeButton.style.marginLeft = '1rem';

        // Add event listener to resume button
        resumeButton.addEventListener('click', function() {
            window.location.href = 'game.html?resume=true';
        });

        // Insert resume button after start game button
        startGameBtn.parentNode.insertBefore(resumeButton, startGameBtn.nextSibling);
    }
});

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
});

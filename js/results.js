// DestinyGuessr - Results Page Logic

// DOM Elements
const finalScoreElement = document.getElementById('final-score');
const rankTitleElement = document.getElementById('rank-title');
const rankDescriptionElement = document.getElementById('rank-description');
const roundsContainer = document.getElementById('rounds-container');
const playAgainButton = document.getElementById('play-again');
const shareResultsButton = document.getElementById('share-results');
const timeInfoElement = document.getElementById('time-info');
const timeRemainingElement = document.getElementById('time-remaining-display');

// Initialize the results page
function initResultsPage() {
    // Get final score and results from localStorage
    const finalScore = localStorage.getItem('destinyGuessr_finalScore');
    const resultsJson = localStorage.getItem('destinyGuessr_results');
    const results = resultsJson ? JSON.parse(resultsJson) : [];

    // Check if timer was enabled for this game
    const timerEnabled = localStorage.getItem('destinyGuessr_timerEnabled') === 'true';

    // Display time remaining if timer was enabled
    if (timerEnabled) {
        const timeTaken = localStorage.getItem('destinyGuessr_timeTaken');
        const timeRemaining = localStorage.getItem('destinyGuessr_timeRemaining');

        if (timeRemaining) {
            timeRemainingElement.textContent = timeRemaining;
            timeInfoElement.classList.remove('hidden');
        }
    }

    // Display final score
    finalScoreElement.textContent = finalScore;

    // Display guardian rank
    displayGuardianRank(finalScore);

    // Display round results
    displayRoundResults(results);

    // Clear any game in progress state
    localStorage.removeItem('destinyGuessr_gameInProgress');
    localStorage.removeItem('destinyGuessr_gameState');
}

// Display the guardian rank based on score
function displayGuardianRank(score) {
    const rank = guardianRanks.reduce((highest, current) => {
        if (score >= current.minScore && current.minScore >= highest.minScore) {
            return current;
        }
        return highest;
    }, guardianRanks[0]);

    rankTitleElement.textContent = rank.title;
    rankDescriptionElement.textContent = rank.description;
}

// Display round-by-round results
function displayRoundResults(results) {
    if (!results || results.length === 0) {
        roundsContainer.innerHTML = '<p>No round data available.</p>';
        return;
    }

    // Clear the container
    roundsContainer.innerHTML = '';

    // Create a result element for each round
    results.forEach((result, index) => {
        const roundElement = document.createElement('div');
        roundElement.className = 'round-result';

        let statusClass = '';
        let statusText = '';

        if (result.actual.destination === result.guess.destination &&
            result.actual.area === result.guess.area) {
            statusClass = 'correct';
            statusText = 'Perfect match!';
        } else if (result.actual.destination === result.guess.destination) {
            statusClass = 'correct';
            statusText = 'Correct destination';
        } else {
            statusClass = 'incorrect';
            statusText = 'Incorrect';
        }

        roundElement.innerHTML = `
            <div class="round-info">
                <span class="round-number">Round ${index + 1}</span>
                <span class="status ${statusClass}">${statusText}</span>
            </div>
            <div class="round-score">+${result.points} points</div>
        `;

        roundsContainer.appendChild(roundElement);
    });
}

// Play again
function playAgain() {
    window.location.href = 'game.html';
}

// Share results
function shareResults() {
    const score = finalScoreElement.textContent;
    const rank = rankTitleElement.textContent;

    let shareText = `I just scored ${score} points in DestinyGuessr and earned the rank of "${rank}"!`;

    // Add time remaining info if available
    if (!timeInfoElement.classList.contains('hidden')) {
        const timeRemaining = timeRemainingElement.textContent;
        shareText += ` With ${timeRemaining} seconds remaining!`;
    }

    shareText += " Can you beat my score? #DestinyGuessr";

    // Use clipboard copy for sharing
    copyToClipboard(shareText);
}

// Copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Results copied to clipboard!');
}

// Event Listeners
if (playAgainButton) {
    playAgainButton.addEventListener('click', playAgain);
}

if (shareResultsButton) {
    shareResultsButton.addEventListener('click', shareResults);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initResultsPage);

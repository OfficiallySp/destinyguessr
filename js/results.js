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

// Define ranks for infinite mode separately
const infiniteRanks = [
    { minScore: 0, title: "New Light", description: "You're just starting to explore Destiny 2 locations. Keep going!" },
    { minScore: 10, title: "Guardian", description: "Your exploration of Destiny 2 has begun in earnest." },
    { minScore: 25, title: "Seasoned Explorer", description: "You've visited many corners of the Solar System." },
    { minScore: 50, title: "Wayfinder", description: "Few locations in the system remain unknown to you." },
    { minScore: 100, title: "Cartographer", description: "Your mental map of Destiny 2 locations is impressive." },
    { minScore: 150, title: "Master Navigator", description: "You can find your way around the Sol system blindfolded." },
    { minScore: 180, title: "Legendary Scout", description: "The Vanguard could use your keen eye for locations." },
    { minScore: 199, title: "The Wayfarer", description: "Congratulations! You've mastered every location in Destiny 2!" },
    { minScore: 200, title: "The Omniscient", description: "You've achieved the impossible - perfect knowledge of Destiny's universe!" }
];

// Initialize the results page
function initResultsPage() {
    // Get game results using the new format
    const gameResultsJson = localStorage.getItem('destinyGuessr_lastGameResults');

    if (!gameResultsJson) {
        // Fall back to old format for backward compatibility
        const finalScore = localStorage.getItem('destinyGuessr_finalScore');
        const resultsJson = localStorage.getItem('destinyGuessr_results');
        const results = resultsJson ? JSON.parse(resultsJson) : [];

        // Display results with old format
        finalScoreElement.textContent = finalScore || 0;
        displayGuardianRank(Number(finalScore) || 0, false);
        displayRoundResults(results, false);

        // Display time remaining if timer was enabled
        const timerEnabled = localStorage.getItem('destinyGuessr_timerEnabled') === 'true';
        if (timerEnabled) {
            const timeRemaining = localStorage.getItem('destinyGuessr_timeRemaining');
            if (timeRemaining) {
                timeRemainingElement.textContent = timeRemaining;
                timeInfoElement.classList.remove('hidden');
            }
        }
    } else {
        // New format with enhanced information
        const gameResults = JSON.parse(gameResultsJson);

        // Display score
        finalScoreElement.textContent = gameResults.score;

        // Display rank using appropriate rank thresholds
        displayGuardianRank(gameResults.score, gameResults.infiniteMode);

        // Display round results
        displayRoundResults(gameResults.results || [], gameResults.infiniteMode);

        // Handle time display
        if (gameResults.infiniteMode) {
            // For infinite mode, show elapsed time
            timeInfoElement.querySelector('p').innerHTML = `Total Time: <span id="time-remaining-display">${formatTime(gameResults.timeElapsed)}</span>`;
            timeRemainingElement = document.getElementById('time-remaining-display'); // Re-assign after changing innerHTML
            timeInfoElement.classList.remove('hidden');

            // Update heading with locations completed
            if (gameResults.completedAllLocations && gameResults.perfectRun) {
                finalScoreElement.parentElement.innerHTML = `
                    <p>Perfect Infinite Mode Run!</p>
                    <p>You successfully identified all ${gameResults.totalRounds} locations without a mistake!</p>
                `;
            } else if (gameResults.completedAllLocations) {
                finalScoreElement.parentElement.innerHTML = `
                    <p>Infinite Mode Complete!</p>
                    <p>You completed all ${gameResults.totalRounds} locations with ${gameResults.correctGuesses} correct</p>
                    <p>First mistake at location #${gameResults.lastIncorrectRound || 'N/A'}</p>
                `;
            } else {
                finalScoreElement.parentElement.innerHTML = `
                    <p>Infinite Mode Score: <span id="final-score">${gameResults.score}</span> points</p>
                    <p>You correctly identified ${gameResults.correctGuesses} out of ${gameResults.totalRounds} locations</p>
                    <p>First mistake at location #${gameResults.lastIncorrectRound || 'N/A'}</p>
                `;
                finalScoreElement = document.getElementById('final-score'); // Re-assign after changing innerHTML
            }
        } else {
            // For normal mode, show regular score info and time remaining
            if (gameResults.gameTime) {
                timeRemainingElement.textContent = formatTime(gameResults.gameTime);
                timeInfoElement.querySelector('p').innerHTML = `Total Time: <span id="time-remaining-display">${formatTime(gameResults.gameTime)}</span>`;
                timeRemainingElement = document.getElementById('time-remaining-display'); // Re-assign after changing innerHTML
                timeInfoElement.classList.remove('hidden');
            }
        }
    }

    // Clear any game in progress state
    localStorage.removeItem('destinyGuessr_gameInProgress');
    localStorage.removeItem('destinyGuessr_gameState');
    localStorage.removeItem('destinyGuessr_lastGameResults');
}

// Format time in seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Display the guardian rank based on score
function displayGuardianRank(score, isInfiniteMode) {
    // Choose the appropriate rank thresholds
    const rankThresholds = isInfiniteMode ? infiniteRanks : guardianRanks;

    const rank = rankThresholds.reduce((highest, current) => {
        if (score >= current.minScore && current.minScore >= highest.minScore) {
            return current;
        }
        return highest;
    }, rankThresholds[0]);

    rankTitleElement.textContent = rank.title;
    rankDescriptionElement.textContent = rank.description;
}

// Display round-by-round results
function displayRoundResults(results, isInfiniteMode) {
    if (!results || results.length === 0) {
        roundsContainer.innerHTML = '<p>No round data available.</p>';
        return;
    }

    // Clear the container
    roundsContainer.innerHTML = '';

    // Limit the display to a reasonable number for infinite mode
    const displayResults = isInfiniteMode && results.length > 20
        ? [...results.slice(0, 10), null, ...results.slice(results.length - 10)]
        : results;

    // Create a result element for each round
    displayResults.forEach((result, index) => {
        if (result === null) {
            // Add a separator for truncated results
            const separatorElement = document.createElement('div');
            separatorElement.className = 'round-separator';
            separatorElement.innerHTML = `<p>... ${results.length - 20} more locations ...</p>`;
            roundsContainer.appendChild(separatorElement);
            return;
        }

        const actualIndex = isInfiniteMode && index >= 10 && displayResults.includes(null)
            ? results.length - 20 + index
            : index;

        const roundElement = document.createElement('div');
        roundElement.className = 'round-result';

        let statusClass = '';
        let statusText = '';

        if (result.timedOut) {
            statusClass = 'incorrect';
            statusText = 'Timed Out';
        } else if (result.isCorrect) {
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
                <span class="round-number">Location ${actualIndex + 1}</span>
                <span class="status ${statusClass}">${statusText}</span>
            </div>
            <div class="round-score">+${result.points} point${result.points !== 1 ? 's' : ''}</div>
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

    // Get time information
    const timeInfo = !timeInfoElement.classList.contains('hidden') ?
        timeInfoElement.querySelector('p').textContent : '';

    // Check if it was infinite mode (based on heading text)
    const isInfiniteMode = finalScoreElement.parentElement.textContent.includes('Infinite Mode') ||
                           finalScoreElement.parentElement.textContent.includes('Perfect Infinite');

    let shareText = '';

    if (isInfiniteMode) {
        if (finalScoreElement.parentElement.textContent.includes('Perfect Infinite')) {
            shareText = `I perfectly completed DestinyGuessr's Infinite Mode without a single mistake! ${timeInfo}`;
        } else if (finalScoreElement.parentElement.textContent.includes('Complete')) {
            shareText = `I completed DestinyGuessr's Infinite Mode! ${timeInfo}`;
        } else {
            const correctLocations = finalScoreElement.parentElement.textContent.match(/(\d+) out of (\d+)/);
            if (correctLocations && correctLocations.length >= 3) {
                shareText = `I correctly identified ${correctLocations[1]} out of ${correctLocations[2]} locations in DestinyGuessr's Infinite Mode! ${timeInfo}`;
            } else {
                shareText = `I scored ${score} points in DestinyGuessr's Infinite Mode! ${timeInfo}`;
            }
        }
    } else {
        shareText = `I scored ${score} points in DestinyGuessr and earned the rank of "${rank}"!`;
        if (timeInfo) {
            shareText += ` ${timeInfo}`;
        }
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

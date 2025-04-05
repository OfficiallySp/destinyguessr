// DestinyGuessr - Game Logic

// Game state
let gameState = {
    currentRound: 1,
    totalRounds: 5,
    score: 0,
    currentLocation: null,
    guess: {
        destination: null,
        area: null
    },
    results: [],
    isRoundComplete: false,
    timer: null,
    timeRemaining: 15
};

// DOM Elements
const locationImage = document.getElementById('location-image');
const currentRoundElement = document.getElementById('current-round');
const currentScoreElement = document.getElementById('current-score');
const destinationOptionsContainer = document.querySelector('.destination-options');
const areaOptionsContainer = document.querySelector('.area-options');
const step1Container = document.getElementById('step-1');
const step2Container = document.getElementById('step-2');
const submitGuessButton = document.getElementById('submit-guess');
const nextRoundButton = document.getElementById('next-round');
const resultFeedback = document.getElementById('result-feedback');
const locationIdElement = document.getElementById('location-id');
const difficultyBadgeElement = document.getElementById('difficulty-badge');

// Create timer element
const gameStatsDiv = document.querySelector('.game-stats');
const timerElement = document.createElement('div');
timerElement.className = 'timer';
timerElement.innerHTML = 'Time: <span id="time-remaining">15</span>s';
gameStatsDiv.appendChild(timerElement);
const timeRemainingElement = document.getElementById('time-remaining');

// Initialize the game
function initGame() {
    try {
        // Start a new game
        resetGame();
        startNewRound();
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

// Reset the game to initial state
function resetGame() {
    gameState = {
        currentRound: 1,
        totalRounds: 5,
        score: 0,
        currentLocation: null,
        guess: {
            destination: null,
            area: null
        },
        results: [],
        isRoundComplete: false,
        timer: null,
        timeRemaining: 20
    };
}

// Start a new round
function startNewRound() {
    // Reset round state
    gameState.guess.destination = null;
    gameState.guess.area = null;
    gameState.isRoundComplete = false;
    gameState.timeRemaining = 20;

    // Show image info
    document.querySelector('.image-info').classList.remove('hidden');

    // Get a random location that hasn't been used yet
    gameState.currentLocation = getRandomLocation();

    // Update UI
    updateUI();

    // Start the timer
    startTimer();
}

// Start the timer
function startTimer() {
    // Clear any existing timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Reset time remaining
    gameState.timeRemaining = 20;
    timeRemainingElement.textContent = gameState.timeRemaining;

    // Reset timer visual state
    timerElement.setAttribute('data-time', 'normal');

    // Start a new timer
    gameState.timer = setInterval(function() {
        try {
            // Decrease time remaining
            gameState.timeRemaining--;

            // Update timer display
            timeRemainingElement.textContent = gameState.timeRemaining;

            // Update timer visual state based on time remaining
            if (gameState.timeRemaining <= 5) {
                timerElement.setAttribute('data-time', 'danger');
            } else if (gameState.timeRemaining <= 10) {
                timerElement.setAttribute('data-time', 'warning');
            } else {
                timerElement.setAttribute('data-time', 'normal');
            }

            // If time is up, auto-submit with current selection (or no selection)
            if (gameState.timeRemaining <= 0) {
                clearInterval(gameState.timer);
                gameState.timer = null;

                // If round is not complete, force timeout
                if (!gameState.isRoundComplete) {
                    timeOut();
                }
            }

            // Save game state
            saveGameState();
        } catch (error) {
            console.error('Error in timer function:', error);
            clearInterval(gameState.timer);
            gameState.timer = null;
        }
    }, 1000);
}

// Handle timeout (time is up)
function timeOut() {
    // Create a timeout result
    gameState.results.push({
        locationId: gameState.currentLocation.id,
        actual: {
            destination: gameState.currentLocation.destination,
            area: gameState.currentLocation.area
        },
        guess: {
            destination: gameState.guess.destination || null,
            area: gameState.guess.area || null
        },
        points: 0,
        isCorrect: false,
        timedOut: true
    });

    // Mark round as complete
    gameState.isRoundComplete = true;

    // Show timeout result
    showTimeoutResult();
}

// Show timeout result
function showTimeoutResult() {
    // Hide image info during result display
    document.querySelector('.image-info').classList.add('hidden');

    // Get actual destination and area names
    const actualDestination = getDestinationName(gameState.currentLocation.destination);
    const actualArea = getAreaName(gameState.currentLocation.destination, gameState.currentLocation.area);

    // Create timeout feedback HTML
    const feedbackHtml = `
        <h3 class="incorrect">Time's Up!</h3>
        <p>You ran out of time to make a guess.</p>
        <p>Actual location: ${actualDestination} - ${actualArea}</p>
        <p>You've earned 0 points for this round.</p>
    `;

    // Display feedback
    resultFeedback.innerHTML = feedbackHtml;
    resultFeedback.classList.remove('hidden');

    // Update button states
    updateButtonStates();
}

// Get a random location that hasn't been used yet
function getRandomLocation() {
    // Get all used location IDs in current game
    const usedLocationIds = gameState.results.map(result => result.locationId);

    // Filter out used locations
    const availableLocations = locations.locationData.filter(location => !usedLocationIds.includes(location.id));

    // If we've used all locations, reset the pool
    let locationPool = availableLocations.length > 0 ? availableLocations : locations.locationData;

    // Pick a random location
    return locationPool[Math.floor(Math.random() * locationPool.length)];
}

// Update UI based on current game state
function updateUI() {
    // Update round counter
    currentRoundElement.textContent = gameState.currentRound;

    // Update score
    currentScoreElement.textContent = gameState.score;

    // Set location image
    if (gameState.currentLocation) {
        locationImage.src = gameState.currentLocation.imageUrl;

        // Update location ID and difficulty
        locationIdElement.textContent = gameState.currentLocation.id;
        difficultyBadgeElement.textContent = gameState.currentLocation.difficulty;

        // Set appropriate class for difficulty
        difficultyBadgeElement.className = 'image-difficulty';
        difficultyBadgeElement.classList.add('difficulty-' + gameState.currentLocation.difficulty);

        // Fallback if image can't be loaded
        locationImage.onerror = function() {
            locationImage.src = 'assets/location_placeholder.avif';
        };
    }

    // Generate destination options
    generateDestinationOptions();

    // Update button states
    updateButtonStates();

    // Hide result feedback
    resultFeedback.classList.add('hidden');
}

// Generate destination options
function generateDestinationOptions() {
    // Clear existing options
    destinationOptionsContainer.innerHTML = '';

    // Create a destination option for each destination
    locations.destinations.forEach(destination => {
        const option = document.createElement('div');
        option.className = 'destination-option';
        option.dataset.id = destination.id;
        option.textContent = destination.name;

        // If this destination is already selected, add selected class
        if (gameState.guess.destination === destination.id) {
            option.classList.add('selected');
            generateAreaOptions(destination.id);
            step2Container.classList.remove('hidden');
        }

        // Add click event listener
        option.addEventListener('click', function() {
            // Deselect all destinations
            document.querySelectorAll('.destination-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Select this destination
            this.classList.add('selected');

            // Update game state
            gameState.guess.destination = destination.id;
            gameState.guess.area = null; // Reset area selection

            // Generate area options for this destination
            generateAreaOptions(destination.id);

            // Show step 2
            step2Container.classList.remove('hidden');

            // Update button states
            updateButtonStates();

            // Save game state
            saveGameState();
        });

        destinationOptionsContainer.appendChild(option);
    });
}

// Generate area options for a destination
function generateAreaOptions(destinationId) {
    // Clear existing options
    areaOptionsContainer.innerHTML = '';

    // Find destination
    const destination = locations.destinations.find(dest => dest.id === destinationId);

    // Create an area option for each area
    destination.areas.forEach(area => {
        const option = document.createElement('div');
        option.className = 'area-option';
        option.dataset.id = area.id;
        option.textContent = area.name;

        // If this area is already selected, add selected class
        if (gameState.guess.area === area.id) {
            option.classList.add('selected');
        }

        // Add click event listener
        option.addEventListener('click', function() {
            // Deselect all areas
            document.querySelectorAll('.area-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Select this area
            this.classList.add('selected');

            // Update game state
            gameState.guess.area = area.id;

            // Update button states
            updateButtonStates();

            // Save game state
            saveGameState();
        });

        areaOptionsContainer.appendChild(option);
    });
}

// Update button states
function updateButtonStates() {
    // Submit button is enabled only if both destination and area are selected
    submitGuessButton.disabled = !(gameState.guess.destination && gameState.guess.area);

    // Next round button is visible only if round is complete
    if (gameState.isRoundComplete) {
        submitGuessButton.classList.add('hidden');
        nextRoundButton.classList.remove('hidden');
    } else {
        submitGuessButton.classList.remove('hidden');
        nextRoundButton.classList.add('hidden');
    }
}

// Submit guess
function submitGuess() {
    // Clear the timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }

    if (!gameState.guess.destination || !gameState.guess.area) {
        return;
    }

    // Calculate score for this round
    let roundScore = 0;
    let isCorrect = false;

    const correctDestination = gameState.currentLocation.destination;
    const correctArea = gameState.currentLocation.area;
    const guessedDestination = gameState.guess.destination;
    const guessedArea = gameState.guess.area;

    if (guessedDestination === correctDestination && guessedArea === correctArea) {
        // Perfect match
        roundScore = 1000;
        isCorrect = true;
    } else if (guessedDestination === correctDestination) {
        // Correct destination, wrong area
        roundScore = 500;
        isCorrect = false;
    } else {
        // Wrong destination
        roundScore = 0;
        isCorrect = false;
    }

    // Update score
    gameState.score += roundScore;

    // Save result
    gameState.results.push({
        locationId: gameState.currentLocation.id,
        actual: {
            destination: correctDestination,
            area: correctArea
        },
        guess: {
            destination: guessedDestination,
            area: guessedArea
        },
        points: roundScore,
        isCorrect: isCorrect
    });

    // Mark round as complete
    gameState.isRoundComplete = true;

    // Update UI
    currentScoreElement.textContent = gameState.score;

    // Show round result
    showRoundResult();

    // Save game state
    saveGameState();
}

// Start next round or end game
function nextRound() {
    if (gameState.currentRound >= gameState.totalRounds) {
        // End game
        endGame();
    } else {
        // Increment round
        gameState.currentRound++;

        // Start new round
        startNewRound();
    }
}

// End game
function endGame() {
    // Save final score
    localStorage.setItem('destinyGuessr_finalScore', gameState.score);
    localStorage.setItem('destinyGuessr_results', JSON.stringify(gameState.results));

    // Remove game in progress flag
    localStorage.removeItem('destinyGuessr_gameInProgress');
    localStorage.removeItem('destinyGuessr_gameState');

    // Redirect to results page
    window.location.href = 'results.html';
}

// Helper function to get destination name
function getDestinationName(destinationId) {
    const destination = locations.destinations.find(dest => dest.id === destinationId);
    return destination ? destination.name : 'Unknown Destination';
}

// Helper function to get area name
function getAreaName(destinationId, areaId) {
    const destination = locations.destinations.find(dest => dest.id === destinationId);
    if (!destination) return 'Unknown Area';

    const area = destination.areas.find(a => a.id === areaId);
    return area ? area.name : 'Unknown Area';
}

// Show the result of the round
function showRoundResult() {
    if (!gameState.isRoundComplete) return;

    // Clear timer if active
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    const lastResult = gameState.results[gameState.results.length - 1];

    // Hide image info during result display
    document.querySelector('.image-info').classList.add('hidden');

    // If this was a timeout, show the timeout result instead
    if (lastResult.timedOut) {
        showTimeoutResult();
        return;
    }

    // Get destination and area names
    const guessedDestination = getDestinationName(lastResult.guess.destination);
    const guessedArea = getAreaName(lastResult.guess.destination, lastResult.guess.area);
    const actualDestination = getDestinationName(lastResult.actual.destination);
    const actualArea = getAreaName(lastResult.actual.destination, lastResult.actual.area);

    // Create feedback HTML
    let feedbackHtml = '';
    if (lastResult.isCorrect) {
        feedbackHtml = `
            <h3 class="correct">Correct!</h3>
            <p>You've earned ${lastResult.points} points.</p>
            <p>This is indeed ${actualDestination} - ${actualArea}.</p>
        `;
    } else if (lastResult.guess.destination === lastResult.actual.destination) {
        feedbackHtml = `
            <h3 class="correct">Correct Destination!</h3>
            <p>You identified the correct destination, but wrong area.</p>
            <p>You guessed: ${guessedDestination} - ${guessedArea}</p>
            <p>Actual location: ${actualDestination} - ${actualArea}</p>
            <p>You've earned ${lastResult.points} points.</p>
        `;
    } else {
        feedbackHtml = `
            <h3 class="incorrect">Not Quite!</h3>
            <p>You guessed: ${guessedDestination} - ${guessedArea}</p>
            <p>Actual location: ${actualDestination} - ${actualArea}</p>
            <p>You've earned ${lastResult.points} points.</p>
        `;
    }

    // Display feedback
    resultFeedback.innerHTML = feedbackHtml;
    resultFeedback.classList.remove('hidden');

    // Update button states
    updateButtonStates();
}

// Save game state to localStorage
function saveGameState() {
    try {
        // Prepare a sanitized version of gameState for storage
        const stateToSave = { ...gameState };

        // Don't save the timer reference as it can't be serialized properly
        if (stateToSave.timer) {
            delete stateToSave.timer;
        }

        // Save to localStorage
        localStorage.setItem('destinyGuessr_gameState', JSON.stringify(stateToSave));
    } catch (error) {
        console.error('Error saving game state:', error);
        // Don't throw the error further to prevent page crashes
    }
}

// Event Listeners
if (submitGuessButton) {
    submitGuessButton.addEventListener('click', submitGuess);
}

if (nextRoundButton) {
    nextRoundButton.addEventListener('click', nextRound);
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

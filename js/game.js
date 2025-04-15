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
    timeRemaining: 60,
    totalTimeLimit: 300, // 5 minutes total for all rounds (60 seconds × 5 rounds)
    gameStartTime: null,
    timerEnabled: true, // Default timer setting
    infiniteMode: false, // Default infinite mode setting
    usedLocationIds: [], // Track used locations for infinite mode
    timeElapsed: 0, // For upward timer in infinite mode
    availableLocations: [], // For storing all locations in infinite mode
    lastIncorrectRound: null // Track when first mistake happens
};

// DOM Elements
const locationImage = document.getElementById('location-image');
let currentRoundElement = document.getElementById('current-round');
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
const submittedByElement = document.getElementById('submitted-by');

// Create timer element
const gameStatsDiv = document.querySelector('.game-stats');
const timerElement = document.createElement('div');
timerElement.className = 'timer';
timerElement.innerHTML = 'Time: <span id="time-remaining">300</span>s';
gameStatsDiv.appendChild(timerElement);
let timeRemainingElement = document.getElementById('time-remaining');

// Initialize the game
function initGame() {
    try {
        // Load preferences
        const timerPreference = localStorage.getItem('destinyGuessr_timerEnabled');
        const infiniteModePreference = localStorage.getItem('destinyGuessr_infiniteModeEnabled');

        // Start a new game
        resetGame();

        // Set preferences
        if (timerPreference !== null) {
            gameState.timerEnabled = timerPreference === 'true';
        }

        if (infiniteModePreference !== null) {
            gameState.infiniteMode = infiniteModePreference === 'true';
        }

        // Hide timer if disabled
        if (!gameState.timerEnabled) {
            timerElement.style.display = 'none';
        }

        // Update round display for infinite mode
        if (gameState.infiniteMode) {
            // Set total rounds to number of locations for infinite mode
            gameState.totalRounds = locations.locationData.length;
            // Update round display format
            const roundDisplay = currentRoundElement.parentElement;
            roundDisplay.innerHTML = `Location: <span id="current-round">1</span>/${gameState.totalRounds}`;
            currentRoundElement = document.getElementById('current-round');
        }

        startNewRound();
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

// Reset the game to initial state
function resetGame() {
    // Load preferences
    const timerPreference = localStorage.getItem('destinyGuessr_timerEnabled');
    const timerEnabled = timerPreference !== null ? timerPreference === 'true' : true;

    const infiniteModePreference = localStorage.getItem('destinyGuessr_infiniteModeEnabled');
    const infiniteMode = infiniteModePreference !== null ? infiniteModePreference === 'true' : false;

    gameState = {
        currentRound: 1,
        totalRounds: infiniteMode ? locations.locationData.length : 5,
        score: 0,
        currentLocation: null,
        guess: {
            destination: null,
            area: null
        },
        results: [],
        isRoundComplete: false,
        timer: null,
        timeRemaining: 300, // Start with full time for normal mode
        totalTimeLimit: 300,
        gameStartTime: new Date(),
        timerEnabled: timerEnabled,
        infiniteMode: infiniteMode,
        usedLocationIds: [],
        timeElapsed: 0,
        availableLocations: infiniteMode ? [...locations.locationData] : [],
        lastIncorrectRound: null // Track when first mistake happens
    };

    // For infinite mode, shuffle the available locations
    if (infiniteMode) {
        gameState.availableLocations = shuffleArray(gameState.availableLocations);
    }
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start a new round
function startNewRound() {
    // Reset round state
    gameState.guess.destination = null;
    gameState.guess.area = null;
    gameState.isRoundComplete = false;

    // Show image info
    document.querySelector('.image-info').classList.remove('hidden');

    // Get a location based on game mode
    if (gameState.infiniteMode) {
        // In infinite mode, get the next location from our shuffled array
        if (gameState.availableLocations.length > 0) {
            gameState.currentLocation = gameState.availableLocations.pop();
            gameState.usedLocationIds.push(gameState.currentLocation.id);
        } else {
            // Should never happen, but just in case
            endGame();
            return;
        }
    } else {
        // Normal mode - get a random location
        gameState.currentLocation = getRandomLocation();
    }

    // Update UI
    updateUI();

    // Handle timer based on mode
    if (gameState.timerEnabled) {
        if (gameState.infiniteMode) {
            startUpwardTimer();
        } else if (!gameState.timer) {
            startTimer();
        }
    }
}

// Start upward timer for infinite mode
function startUpwardTimer() {
    // Only start timer if enabled
    if (!gameState.timerEnabled) return;

    // Clear any existing timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Make sure timer is visible
    timerElement.style.display = '';

    // Update timer text to show it's counting up
    timerElement.innerHTML = 'Time: <span id="time-remaining">0</span>s';
    timeRemainingElement = document.getElementById('time-remaining');

    // Start a new timer that counts up
    gameState.timer = setInterval(function() {
        try {
            // Increase time elapsed
            gameState.timeElapsed++;

            // Update timer display
            timeRemainingElement.textContent = gameState.timeElapsed;

            // Save game state
            saveGameState();
        } catch (error) {
            console.error('Error in timer function:', error);
            clearInterval(gameState.timer);
            gameState.timer = null;
        }
    }, 1000);
}

// Start the timer (for normal mode)
function startTimer() {
    // Only start timer if enabled
    if (!gameState.timerEnabled) return;

    // Clear any existing timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Start a new timer
    gameState.timer = setInterval(function() {
        try {
            // Decrease time remaining
            gameState.timeRemaining--;

            // Update timer display
            timeRemainingElement.textContent = gameState.timeRemaining;

            // Update timer visual state based on time remaining
            const timePercentage = (gameState.timeRemaining / gameState.totalTimeLimit) * 100;

            if (timePercentage <= 10) {
                timerElement.setAttribute('data-time', 'danger');
            } else if (timePercentage <= 30) {
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

// Get a random location (for normal mode)
function getRandomLocation() {
    // Find locations that haven't been used in this game
    const unusedLocations = locations.locationData.filter(
        loc => !gameState.usedLocationIds.includes(loc.id)
    );

    // If there are no more unused locations, use any location
    const availableLocations = unusedLocations.length > 0 ? unusedLocations : locations.locationData;

    // Pick a random location from available ones
    const randomIndex = Math.floor(Math.random() * availableLocations.length);
    const location = availableLocations[randomIndex];

    // Add to used locations
    gameState.usedLocationIds.push(location.id);

    return location;
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

        // Update submittedBy element
        submittedByElement.textContent = gameState.currentLocation.submittedBy;
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
    // If round is already complete, do nothing
    if (gameState.isRoundComplete) return;

    // Mark round as complete
    gameState.isRoundComplete = true;

    // Stop timer
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Calculate score based on game mode
    let points = 0;
    let isCorrect = false;

    if (gameState.infiniteMode) {
        // Infinite mode scoring - 1 point per correct location
        if (gameState.guess.destination === gameState.currentLocation.destination &&
            gameState.guess.area === gameState.currentLocation.area) {
            points = 1;
            isCorrect = true;
        } else {
            // Record mistake for final results
            gameState.lastIncorrectRound = gameState.currentRound;
        }
    } else {
        // Normal mode scoring - original values
        if (gameState.guess.destination === gameState.currentLocation.destination &&
            gameState.guess.area === gameState.currentLocation.area) {
            points = 1000;
            isCorrect = true;
        } else if (gameState.guess.destination === gameState.currentLocation.destination) {
            points = 500;
        }
    }

    // Add result to the results array
    gameState.results.push({
        locationId: gameState.currentLocation.id,
        actual: {
            destination: gameState.currentLocation.destination,
            area: gameState.currentLocation.area
        },
        guess: {
            destination: gameState.guess.destination,
            area: gameState.guess.area
        },
        points: points,
        isCorrect: isCorrect,
        timedOut: false
    });

    // Update score
    gameState.score += points;

    // Show result
    showRoundResult();

    // If in infinite mode and answer was wrong or timed out, end the game immediately
    if (gameState.infiniteMode && !isCorrect) {
        endGame();
    }
}

// Show round result
function showRoundResult() {
    // Hide image info during result display
    document.querySelector('.image-info').classList.add('hidden');

    // Get the most recent result
    const result = gameState.results[gameState.results.length - 1];

    // If this was a timeout, show the timeout result
    if (result.timedOut) {
        showTimeoutResult();
        return;
    }

    // Get destination and area names
    const guessedDestination = getDestinationName(result.guess.destination);
    const guessedArea = getAreaName(result.guess.destination, result.guess.area);
    const actualDestination = getDestinationName(result.actual.destination);
    const actualArea = getAreaName(result.actual.destination, result.actual.area);

    // Create feedback HTML - consistent for both modes
    let feedbackHtml = '';
    if (result.isCorrect) {
        feedbackHtml = `
            <h3 class="correct">Correct!</h3>
            <p>You've earned ${result.points} point${result.points !== 1 ? 's' : ''}.</p>
            <p>This is indeed ${actualDestination} - ${actualArea}.</p>
        `;
    } else if (result.guess.destination === result.actual.destination) {
        feedbackHtml = `
            <h3 class="correct">Correct Destination!</h3>
            <p>You identified the correct destination, but wrong area.</p>
            <p>You guessed: ${guessedDestination} - ${guessedArea}</p>
            <p>Actual location: ${actualDestination} - ${actualArea}</p>
            <p>You've earned ${result.points} point${result.points !== 1 ? 's' : ''}.</p>
        `;
    } else {
        feedbackHtml = `
            <h3 class="incorrect">Not Quite!</h3>
            <p>You guessed: ${guessedDestination} - ${guessedArea}</p>
            <p>Actual location: ${actualDestination} - ${actualArea}</p>
            <p>You've earned ${result.points} point${result.points !== 1 ? 's' : ''}.</p>
        `;
    }

    // Display feedback
    resultFeedback.innerHTML = feedbackHtml;
    resultFeedback.classList.remove('hidden');

    // Add the report problem container
    const reportContainer = document.createElement('div');
    reportContainer.className = 'report-problem-container';
    reportContainer.innerHTML = `
        <button id="report-problem-btn" class="btn btn-small">Report Problem</button>
        <div id="report-problem-form" class="report-form hidden">
            <h4>Report an Issue with this Image</h4>
            <form name="problemReport" method="POST" netlify>
                <input type="hidden" name="form-name" value="problemReport" />
                <input type="hidden" name="imageId" value="${gameState.currentLocation.id}" />

                <p>
                    <span>What's wrong with this image?</span>
                    <div class="radio-options" style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
                        <label>
                            <input type="radio" name="issueType" value="wrong-location" required>
                            Incorrect location label
                        </label>
                        <label>
                            <input type="radio" name="issueType" value="not-loading" required>
                            Picture not loading
                        </label>
                    </div>
                </p>
                <p>
                    <label>
                        <span>Additional details:</span>
                        <textarea name="details" rows="2" placeholder="Please provide more information..."></textarea>
                    </label>
                </p>
                <div class="form-buttons">
                    <button type="submit" class="btn btn-small btn-primary">Submit Report</button>
                    <button type="button" id="cancel-report" class="btn btn-small btn-secondary">Cancel</button>
                </div>
            </form>
            <p class="report-result"></p>
        </div>
    `;
    resultFeedback.appendChild(reportContainer);

    // Add problem report container only if needed
    setupReportProblem();

    // Update button states
    updateButtonStates();
}

// Show timeout result
function showTimeoutResult() {
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

    // Add the report problem container
    const reportContainer = document.createElement('div');
    reportContainer.className = 'report-problem-container';
    reportContainer.innerHTML = `
        <button id="report-problem-btn" class="btn btn-small">Report Problem</button>
        <div id="report-problem-form" class="report-form hidden">
            <h4>Report an Issue with this Image</h4>
            <form name="problemReport" method="POST" netlify>
                <input type="hidden" name="form-name" value="problemReport" />
                <input type="hidden" name="imageId" value="${gameState.currentLocation.id}" />

                <p>
                    <span>What's wrong with this image?</span>
                    <div class="radio-options" style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
                        <label>
                            <input type="radio" name="issueType" value="wrong-location" required>
                            Incorrect location label
                        </label>
                        <label>
                            <input type="radio" name="issueType" value="not-loading" required>
                            Picture not loading
                        </label>
                    </div>
                </p>
                <p>
                    <label>
                        <span>Additional details:</span>
                        <textarea name="details" rows="2" placeholder="Please provide more information..."></textarea>
                    </label>
                </p>
                <div class="form-buttons">
                    <button type="submit" class="btn btn-small btn-primary">Submit Report</button>
                    <button type="button" id="cancel-report" class="btn btn-small btn-secondary">Cancel</button>
                </div>
            </form>
            <p class="report-result"></p>
        </div>
    `;
    resultFeedback.appendChild(reportContainer);

    // Setup report problem functionality
    setupReportProblem();
}

// Format time in seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Next round
function nextRound() {
    // If all rounds are complete, end the game
    if (gameState.currentRound >= gameState.totalRounds) {
        endGame();
        return;
    }

    // Hide result feedback
    resultFeedback.classList.add('hidden');

    // Increment round counter
    gameState.currentRound++;

    // Start new round
    startNewRound();
}

// End the game
function endGame() {
    // Stop the timer if it's still running
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Calculate end time
    const gameEndTime = new Date();
    const gameTimeInSeconds = Math.floor((gameEndTime - gameState.gameStartTime) / 1000);

    // Calculate accuracy
    const totalRoundsPlayed = gameState.results.length;
    const correctGuesses = gameState.results.filter(result => result.isCorrect).length;
    const accuracy = Math.round((correctGuesses / totalRoundsPlayed) * 100);

    // Determine results for infinite mode
    let perfectRun = true;
    if (gameState.infiniteMode) {
        perfectRun = !gameState.lastIncorrectRound;
    }

    // Store final results in local storage
    localStorage.setItem('destinyGuessr_lastGameResults', JSON.stringify({
        score: gameState.score,
        totalRounds: totalRoundsPlayed,
        correctGuesses: correctGuesses,
        accuracy: accuracy,
        gameTime: gameTimeInSeconds,
        infiniteMode: gameState.infiniteMode,
        timeElapsed: gameState.timeElapsed,
        completedAllLocations: gameState.currentRound >= gameState.totalRounds,
        perfectRun: perfectRun,
        lastIncorrectRound: gameState.lastIncorrectRound || null
    }));

    // Redirect to results page
    window.location.href = "results.html";
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

// Setup report problem functionality
function setupReportProblem() {
    const reportProblemBtn = document.getElementById('report-problem-btn');
    const reportProblemForm = document.getElementById('report-problem-form');
    const cancelReportBtn = document.getElementById('cancel-report');
    const reportForm = document.querySelector('form[name="problemReport"]');
    const reportResult = document.querySelector('.report-result');

    if (reportProblemBtn && reportProblemForm && cancelReportBtn && reportForm) {
        // Toggle the report form visibility
        reportProblemBtn.addEventListener('click', () => {
            reportProblemForm.classList.toggle('hidden');
            reportProblemBtn.classList.toggle('hidden');
        });

        // Hide the form when cancel is clicked
        cancelReportBtn.addEventListener('click', () => {
            reportProblemForm.classList.add('hidden');
            reportProblemBtn.classList.remove('hidden');
            reportForm.reset();
            reportResult.textContent = '';
        });

        // Handle form submission
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show a loading message
            reportResult.textContent = 'Submitting report...';
            reportResult.style.color = 'var(--primary-color)';

            // Get form data
            const formData = new FormData(reportForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Submit the form using fetch
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formObject).toString()
            })
            .then(() => {
                // Success message
                reportResult.textContent = 'Thank you for reporting this issue!';
                reportResult.style.color = 'var(--success-color)';

                // Reset the form
                reportForm.reset();

                // Hide the form after 3 seconds
                setTimeout(() => {
                    reportProblemForm.classList.add('hidden');
                    reportProblemBtn.classList.remove('hidden');
                    reportResult.textContent = '';
                }, 3000);
            })
            .catch((error) => {
                // Error message
                console.error('Error submitting report:', error);
                reportResult.textContent = 'Something went wrong. Please try again.';
                reportResult.style.color = 'var(--error-color)';
            });
        });
    }
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

// Handle timeout (time is up)
function timeOut() {
    // Only process timeout if timer is enabled
    if (!gameState.timerEnabled) return;

    // Record mistake for infinite mode
    if (gameState.infiniteMode) {
        gameState.lastIncorrectRound = gameState.currentRound;
    }

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

    // Show result with timeout
    showRoundResult();

    // If in infinite mode, end the game immediately on timeout
    if (gameState.infiniteMode) {
        endGame();
    }
}

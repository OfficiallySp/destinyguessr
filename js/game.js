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
    gameStartTime: null
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
const submittedByElement = document.getElementById('submitted-by');

// Create timer element
const gameStatsDiv = document.querySelector('.game-stats');
const timerElement = document.createElement('div');
timerElement.className = 'timer';
timerElement.innerHTML = 'Time: <span id="time-remaining">300</span>s';
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
        timeRemaining: 300, // Start with full time
        totalTimeLimit: 300,
        gameStartTime: new Date()
    };
}

// Start a new round
function startNewRound() {
    // Reset round state
    gameState.guess.destination = null;
    gameState.guess.area = null;
    gameState.isRoundComplete = false;

    // Don't reset timeRemaining here to allow it to persist between rounds

    // Show image info
    document.querySelector('.image-info').classList.remove('hidden');

    // Get a random location that hasn't been used yet
    gameState.currentLocation = getRandomLocation();

    // Update UI
    updateUI();

    // If timer is not running, start it
    if (!gameState.timer) {
        startTimer();
    }
}

// Start the timer
function startTimer() {
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

        // Hide step 2 (area selection)
        step2Container.classList.add('hidden');

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Start new round
        startNewRound();
    }
}

// End game
function endGame() {
    // Clear timer if active
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }

    // Calculate total time taken
    const totalTimeTaken = gameState.totalTimeLimit - gameState.timeRemaining;

    // Save final score and time taken
    localStorage.setItem('destinyGuessr_finalScore', gameState.score);
    localStorage.setItem('destinyGuessr_results', JSON.stringify(gameState.results));
    localStorage.setItem('destinyGuessr_timeTaken', totalTimeTaken);

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

    // Add the report problem container after setting the feedback HTML
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

    // Update button states
    updateButtonStates();
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

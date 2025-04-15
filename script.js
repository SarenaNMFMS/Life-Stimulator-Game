// Game state
const state = {
    age: 0,
    health: 100,
    happiness: 100,
    wealth: 50,
    intelligence: 50,
    alive: true,
    events: [
        {
            age: 0,
            text: "You are born into the world. Your parents are excited to meet you.",
            choices: [
                { text: "Cry loudly", health: 0, happiness: 5, wealth: 0, intelligence: 0, nextEvent: "infant_1" },
                { text: "Sleep peacefully", health: 5, happiness: 0, wealth: 0, intelligence: 0, nextEvent: "infant_1" }
            ]
        },
        {
            id: "infant_1",
            age: 1,
            text: "As a baby, you're learning about the world. What do you focus on?",
            choices: [
                { text: "Try to walk early", health: -5, happiness: 0, wealth: 0, intelligence: 10, nextEvent: "toddler_1" },
                { text: "Play with toys", health: 0, happiness: 10, wealth: 0, intelligence: 5, nextEvent: "toddler_1" },
                { text: "Observe everything quietly", health: 5, happiness: 5, wealth: 0, intelligence: 15, nextEvent: "toddler_1" }
            ]
        },
        {
            id: "toddler_1",
            age: 3,
            text: "Now a toddler, you're starting to develop your personality. What's your approach?",
            choices: [
                { text: "Be curious and ask many questions", health: 0, happiness: 5, wealth: 0, intelligence: 15, nextEvent: "child_1" },
                { text: "Make friends at the playground", health: 5, happiness: 15, wealth: 0, intelligence: 0, nextEvent: "child_1" },
                { text: "Throw tantrums when you don't get your way", health: -5, happiness: -10, wealth: 0, intelligence: -5, nextEvent: "child_1" }
            ]
        },
        {
            id: "child_1",
            age: 6,
            text: "Starting school! How do you approach your education?",
            choices: [
                { text: "Study hard and do all your homework", health: -5, happiness: -5, wealth: 0, intelligence: 20, nextEvent: "child_2" },
                { text: "Balance school and play", health: 5, happiness: 10, wealth: 0, intelligence: 10, nextEvent: "child_2" },
                { text: "Skip school to play video games", health: -10, happiness: 15, wealth: 0, intelligence: -10, nextEvent: "child_2" }
            ]
        },
        {
            id: "child_2",
            age: 10,
            text: "You're developing hobbies. What interests you?",
            choices: [
                { text: "Sports and physical activities", health: 15, happiness: 10, wealth: -5, intelligence: 0, nextEvent: "teen_1" },
                { text: "Reading and learning", health: 0, happiness: 5, wealth: 0, intelligence: 20, nextEvent: "teen_1" },
                { text: "Video games and TV", health: -10, happiness: 15, wealth: -10, intelligence: -5, nextEvent: "teen_1" }
            ]
        },
        {
            id: "teen_1",
            age: 14,
            text: "Teenage years bring new challenges. How do you handle them?",
            choices: [
                { text: "Focus on academics and future", health: -5, happiness: -5, wealth: 0, intelligence: 20, nextEvent: "teen_2" },
                { text: "Enjoy social life and parties", health: -10, happiness: 20, wealth: -10, intelligence: -10, nextEvent: "teen_2" },
                { text: "Try to balance both", health: 5, happiness: 10, wealth: -5, intelligence: 10, nextEvent: "teen_2" }
            ]
        },
        {
            id: "teen_2",
            age: 17,
            text: "Thinking about your future. What path do you consider?",
            choices: [
                { text: "Go to college/university", health: 0, happiness: 0, wealth: -20, intelligence: 30, nextEvent: "adult_1" },
                { text: "Start working right away", health: 0, happiness: 5, wealth: 10, intelligence: 5, nextEvent: "adult_1" },
                { text: "Travel and explore the world", health: 10, happiness: 20, wealth: -30, intelligence: 15, nextEvent: "adult_1" }
            ]
        },
        {
            id: "adult_1",
            age: 21,
            text: "You're officially an adult. How do you establish yourself?",
            choices: [
                { text: "Pursue a career in your field", health: 0, happiness: 5, wealth: 30, intelligence: 10, nextEvent: "adult_2" },
                { text: "Start your own business", health: -10, happiness: 10, wealth: -10, intelligence: 20, nextEvent: "adult_2" },
                { text: "Work multiple jobs to save money", health: -20, happiness: -10, wealth: 40, intelligence: 0, nextEvent: "adult_2" }
            ]
        },
        {
            id: "adult_2",
            age: 25,
            text: "Time to think about relationships. What's your priority?",
            choices: [
                { text: "Focus on career for now", health: -5, happiness: -10, wealth: 20, intelligence: 5, nextEvent: "adult_3" },
                { text: "Look for a life partner", health: 10, happiness: 20, wealth: -10, intelligence: 0, nextEvent: "adult_3" },
                { text: "Enjoy being single", health: 5, happiness: 15, wealth: 10, intelligence: 5, nextEvent: "adult_3" }
            ]
        },
        {
            id: "adult_3",
            age: 30,
            text: "Your 30s approach. How do you want to live?",
            choices: [
                { text: "Settle down and start a family", health: 10, happiness: 20, wealth: -20, intelligence: 0, nextEvent: "adult_4" },
                { text: "Focus on personal growth", health: 5, happiness: 10, wealth: 0, intelligence: 20, nextEvent: "adult_4" },
                { text: "Take risks and chase dreams", health: -10, happiness: 15, wealth: -30, intelligence: 10, nextEvent: "adult_4" }
            ]
        },
        {
            id: "adult_4",
            age: 40,
            text: "Mid-life crisis time! How do you handle it?",
            choices: [
                { text: "Buy an expensive sports car", health: 5, happiness: 20, wealth: -40, intelligence: -5, nextEvent: "adult_5" },
                { text: "Re-evaluate life choices", health: -5, happiness: -10, wealth: 0, intelligence: 20, nextEvent: "adult_5" },
                { text: "Take up a new hobby", health: 10, happiness: 15, wealth: -10, intelligence: 10, nextEvent: "adult_5" }
            ]
        },
        {
            id: "adult_5",
            age: 50,
            text: "You're entering your 50s. How do you prepare for the future?",
            choices: [
                { text: "Focus on retirement savings", health: 0, happiness: -5, wealth: 30, intelligence: 5, nextEvent: "senior_1" },
                { text: "Travel while you still can", health: 5, happiness: 20, wealth: -20, intelligence: 10, nextEvent: "senior_1" },
                { text: "Start a second career", health: -10, happiness: 10, wealth: 10, intelligence: 15, nextEvent: "senior_1" }
            ]
        },
        {
            id: "senior_1",
            age: 65,
            text: "Retirement age! How do you spend your golden years?",
            choices: [
                { text: "Relax and enjoy grandchildren", health: 10, happiness: 20, wealth: -5, intelligence: 0, nextEvent: "senior_2" },
                { text: "Volunteer and give back", health: 5, happiness: 15, wealth: -10, intelligence: 10, nextEvent: "senior_2" },
                { text: "Keep working part-time", health: -5, happiness: 5, wealth: 15, intelligence: 5, nextEvent: "senior_2" }
            ]
        },
        {
            id: "senior_2",
            age: 75,
            text: "As you enter your late years, what brings you joy?",
            choices: [
                { text: "Sharing wisdom with younger generations", health: 0, happiness: 15, wealth: 0, intelligence: 10, nextEvent: "end" },
                { text: "Enjoying simple pleasures", health: 5, happiness: 20, wealth: 0, intelligence: 0, nextEvent: "end" },
                { text: "Reflecting on your life", health: -5, happiness: 10, wealth: 0, intelligence: 15, nextEvent: "end" }
            ]
        },
        {
            id: "senior_3",
            age: 85,
            text: "Now that you are OLD, do you have any regrets?",
            choices: [
                { text: "I regret some", health: 0, happiness: -2, wealth: 0, intelligence: 0, nextEvent: "end_regretful" },
                { text: "I regret nothing", health: 0, happiness: -10, wealth: 0, intelligence: -1, nextEvent: "end_happy" },
            ]
        },
        {
            id: "end_regretful",
            age: 100,
            text: "You've lived a long and fulfilling life. Would you like to try another path this time?",
            choices: []
        },
        {
            id: "end_happy",
            age: 95,
            text: "You've lived a long life. BUT DID YOU LEARN NOTHING?",
            choices: []
        }
    ],
    currentEvent: 0,
    deathReasons: [
        "Your health deteriorated too much.",
        "You became too unhappy and lost the will to live.",
        "You ran out of money and couldn't survive.",
        "Your body couldn't keep up with age."
    ]
};

// DOM elements
const ageDisplay = document.getElementById('age-display');
const healthDisplay = document.getElementById('health');
const happinessDisplay = document.getElementById('happiness');
const wealthDisplay = document.getElementById('wealth');
const intelligenceDisplay = document.getElementById('intelligence');
const healthBar = document.getElementById('health-bar');
const happinessBar = document.getElementById('happiness-bar');
const wealthBar = document.getElementById('wealth-bar');
const intelligenceBar = document.getElementById('intelligence-bar');
const eventDisplay = document.getElementById('event-display');
const choicesContainer = document.getElementById('choices');
const gameOverScreen = document.getElementById('game-over');
const deathReason = document.getElementById('death-reason');
const finalAge = document.getElementById('final-age');
const restartBtn = document.getElementById('restart-btn');

// Initialize the game
function initGame() {
    state.age = 0;
    state.health = 100;
    state.happiness = 100;
    state.wealth = 50;
    state.intelligence = 50;
    state.alive = true;
    state.currentEvent = 0;
    
    updateStats();
    showEvent(state.events[0]);
    gameOverScreen.style.display = 'none';
}

// Update all stat displays
function updateStats() {
    ageDisplay.textContent = `Age: ${state.age}`;
    healthDisplay.textContent = state.health;
    happinessDisplay.textContent = state.happiness;
    wealthDisplay.textContent = state.wealth;
    intelligenceDisplay.textContent = state.intelligence;
    
    healthBar.style.width = `${state.health}%`;
    happinessBar.style.width = `${state.happiness}%`;
    wealthBar.style.width = `${Math.min(state.wealth, 100)}%`;
    intelligenceBar.style.width = `${Math.min(state.intelligence, 100)}%`;
    
    // Change bar colors based on value
    healthBar.style.backgroundColor = state.health > 50 ? '#2ecc71' : state.health > 20 ? '#f39c12' : '#e74c3c';
    happinessBar.style.backgroundColor = state.happiness > 50 ? '#2ecc71' : state.happiness > 20 ? '#f39c12' : '#e74c3c';
    wealthBar.style.backgroundColor = state.wealth > 50 ? '#2ecc71' : state.wealth > 20 ? '#f39c12' : '#e74c3c';
    intelligenceBar.style.backgroundColor = state.intelligence > 50 ? '#2ecc71' : state.intelligence > 20 ? '#f39c12' : '#e74c3c';
}

// Show an event and its choices
function showEvent(event) {
    eventDisplay.textContent = event.text;
    choicesContainer.innerHTML = '';
    
    event.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => makeChoice(choice));
        choicesContainer.appendChild(button);
    });
    
    // If no choices, it's the end of the game
    if (event.choices.length === 0) {
        setTimeout(() => {
            endGame("You lived a full life and died of old age.", state.age);
        }, 2000);
    }
}

// Handle player choice
function makeChoice(choice) {
    // Apply choice effects
    state.health = Math.max(0, Math.min(100, state.health + choice.health));
    state.happiness = Math.max(0, Math.min(100, state.happiness + choice.happiness));
    state.wealth = Math.max(0, state.wealth + choice.wealth);
    state.intelligence = Math.max(0, state.intelligence + choice.intelligence);
    
    // Age up to next event
    const nextEvent = state.events.find(e => e.id === choice.nextEvent) || 
                     state.events.find(e => e.age > state.age);
    
    if (nextEvent) {
        state.age = nextEvent.age;
        state.currentEvent = state.events.indexOf(nextEvent);
        updateStats();
        
        // Check for death
        if (state.health <= 0) {
            endGame(state.deathReasons[0], state.age);
        } else if (state.happiness <= 0) {
            endGame(state.deathReasons[1], state.age);
        } else if (state.wealth <= 0) {
            endGame(state.deathReasons[2], state.age);
        } else {
            showEvent(nextEvent);
        }
    } else {
        endGame("You lived a full life and died of old age.", state.age);
    }
}

// End the game
function endGame(reason, age) {
    state.alive = false;
    deathReason.textContent = reason;
    finalAge.textContent = age;
    gameOverScreen.style.display = 'block';
}

// Event listeners
restartBtn.addEventListener('click', initGame);

// Start the game
initGame();
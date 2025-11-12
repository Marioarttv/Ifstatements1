// ========================================
// Tab Navigation
// ========================================

function showTab(tabName) {
    // Hide all tabs
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// ========================================
// Game 1: Real Life Decisions
// ========================================

const scenarios = [
    {
        title: "Scenario 1: Weather Check",
        text: "If the temperature is above 20°C, we say 'It's warm!'",
        condition: "if temperature > 20:",
        variable: "temperature",
        threshold: 20,
        comparison: ">",
        message: "It's warm outside! ☀️",
        sliderLabel: "Temperature (°C):",
        min: 0,
        max: 40,
        initial: 15
    },
    {
        title: "Scenario 2: Age Verification",
        text: "If someone is 13 years old or older, they are a teenager.",
        condition: "if age >= 13:",
        variable: "age",
        threshold: 13,
        comparison: ">=",
        message: "You are a teenager! 🧒",
        sliderLabel: "Age (years):",
        min: 0,
        max: 20,
        initial: 10
    },
    {
        title: "Scenario 3: Test Score",
        text: "If you score at least 50 points, you pass the test.",
        condition: "if score >= 50:",
        variable: "score",
        threshold: 50,
        comparison: ">=",
        message: "You passed the test! 🎉",
        sliderLabel: "Score (points):",
        min: 0,
        max: 100,
        initial: 45
    },
    {
        title: "Scenario 4: Game Level",
        text: "If you have more than 100 points, you level up!",
        condition: "if points > 100:",
        variable: "points",
        threshold: 100,
        comparison: ">",
        message: "Level Up! 🎮",
        sliderLabel: "Points:",
        min: 0,
        max: 200,
        initial: 95
    },
    {
        title: "Scenario 5: Speed Limit",
        text: "If you drive faster than 50 km/h, you're speeding.",
        condition: "if speed > 50:",
        variable: "speed",
        threshold: 50,
        comparison: ">",
        message: "You're speeding! 🚗💨",
        sliderLabel: "Speed (km/h):",
        min: 0,
        max: 100,
        initial: 40
    }
];

let currentScenarioIndex = 0;
let game1Score = 0;
let game1Total = 0;

function loadScenario() {
    const scenario = scenarios[currentScenarioIndex];

    document.getElementById('scenario-title').textContent = scenario.title;
    document.getElementById('scenario-text').textContent = scenario.text;
    document.getElementById('condition-text').textContent = scenario.condition;
    document.getElementById('slider-label').textContent = scenario.sliderLabel;

    const slider = document.getElementById('value-slider');
    slider.min = scenario.min;
    slider.max = scenario.max;
    slider.value = scenario.initial;
    document.getElementById('slider-value').textContent = scenario.initial;

    // Hide result box
    document.getElementById('result-box').classList.add('hidden');
}

// Update slider value display
document.getElementById('value-slider')?.addEventListener('input', function() {
    document.getElementById('slider-value').textContent = this.value;
});

function checkScenario() {
    const scenario = scenarios[currentScenarioIndex];
    const value = parseInt(document.getElementById('value-slider').value);

    let conditionMet = false;

    switch(scenario.comparison) {
        case '>':
            conditionMet = value > scenario.threshold;
            break;
        case '>=':
            conditionMet = value >= scenario.threshold;
            break;
        case '<':
            conditionMet = value < scenario.threshold;
            break;
        case '<=':
            conditionMet = value <= scenario.threshold;
            break;
        case '==':
            conditionMet = value == scenario.threshold;
            break;
    }

    game1Total++;

    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    const explanationText = document.getElementById('explanation-text');

    resultBox.classList.remove('hidden', 'success', 'failure');

    if (conditionMet) {
        game1Score++;
        resultBox.classList.add('success');
        resultText.textContent = `✅ ${scenario.message}`;
        explanationText.textContent = `The condition is TRUE: ${value} ${scenario.comparison} ${scenario.threshold}`;
    } else {
        resultBox.classList.add('failure');
        resultText.textContent = `❌ Nothing happens.`;
        explanationText.textContent = `The condition is FALSE: ${value} is not ${scenario.comparison} ${scenario.threshold}`;
    }

    updateScore('game1');
}

function nextScenario() {
    currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
    loadScenario();
}

function updateScore(game) {
    if (game === 'game1') {
        document.getElementById('game1-score').textContent = game1Score;
        document.getElementById('game1-total').textContent = game1Total;
    } else if (game === 'game2') {
        document.getElementById('game2-score').textContent = game2Score;
        document.getElementById('game2-total').textContent = game2Total;
    }
}

// ========================================
// Game 2: Code It!
// ========================================

const challenges = [
    {
        title: "Challenge 1: Age Check",
        description: "Complete the if-statement to check if someone can watch a movie rated 12+",
        template: `age = 14

if age _____ 12:
    print("You can watch this movie!")`,
        blanks: [">="],
        correctCode: `age = 14

if age >= 12:
    print("You can watch this movie!")`,
        output: "You can watch this movie!"
    },
    {
        title: "Challenge 2: Temperature Warning",
        description: "Write a condition to warn if temperature is above 30°C",
        template: `temperature = 35

if temperature _____ 30:
    print("It's very hot!")`,
        blanks: [">"],
        correctCode: `temperature = 35

if temperature > 30:
    print("It's very hot!")`,
        output: "It's very hot!"
    },
    {
        title: "Challenge 3: Password Check",
        description: "Check if the password is correct (use == for equal)",
        template: `password = "secret123"

if password _____ "secret123":
    print("Access granted!")`,
        blanks: ["=="],
        correctCode: `password = "secret123"

if password == "secret123":
    print("Access granted!")`,
        output: "Access granted!"
    },
    {
        title: "Challenge 4: Score Check",
        description: "Check if the score is at least 50 points",
        template: `score = 85

if _____ >= _____:
    print("You passed!")`,
        blanks: ["score", "50"],
        correctCode: `score = 85

if score >= 50:
    print("You passed!")`,
        output: "You passed!"
    }
];

let currentChallengeIndex = 0;
let game2Score = 0;
let game2Total = 0;
let userAnswers = [];

function loadChallenge() {
    const challenge = challenges[currentChallengeIndex];

    document.getElementById('challenge-title').textContent = challenge.title;
    document.getElementById('challenge-description').textContent = challenge.description;
    document.getElementById('code-template').textContent = challenge.template;

    // Create input fields for blanks
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';
    userAnswers = [];

    challenge.blanks.forEach((blank, index) => {
        const label = document.createElement('label');
        label.textContent = `Blank ${index + 1}: `;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `blank-${index}`;
        input.placeholder = 'Fill in...';
        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement('br'));
    });

    // Hide output
    document.getElementById('code-output').classList.add('hidden');
}

function checkCode() {
    const challenge = challenges[currentChallengeIndex];
    game2Total++;

    // Get user answers
    userAnswers = [];
    challenge.blanks.forEach((blank, index) => {
        const input = document.getElementById(`blank-${index}`);
        userAnswers.push(input.value.trim());
    });

    // Check if answers are correct
    let allCorrect = true;
    userAnswers.forEach((answer, index) => {
        if (answer.toLowerCase() !== challenge.blanks[index].toLowerCase()) {
            allCorrect = false;
        }
    });

    const outputBox = document.getElementById('code-output');
    const outputText = document.getElementById('output-text');
    const feedback = document.getElementById('code-feedback');

    outputBox.classList.remove('hidden');
    feedback.classList.remove('correct', 'incorrect');

    if (allCorrect) {
        game2Score++;
        outputText.textContent = challenge.output;
        feedback.textContent = "✅ Perfect! Your code works correctly!";
        feedback.classList.add('correct');
    } else {
        outputText.textContent = "❌ Error: Check your code!";
        feedback.textContent = `❌ Not quite right. Expected: ${challenge.blanks.join(', ')}`;
        feedback.classList.add('incorrect');
    }

    updateScore('game2');
}

function nextChallenge() {
    currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
    loadChallenge();
}

// ========================================
// Playground
// ========================================

const playgroundExamples = [
    {
        name: "Temperature Check",
        code: `temperature = 25

if temperature > 20:
    print("It's warm outside! ☀️")
    print("Temperature:", temperature, "°C")`
    },
    {
        name: "Age Verification",
        code: `age = 14

if age >= 13:
    print("You are a teenager! 🧒")
else:
    print("You are a child! 👶")`
    },
    {
        name: "Score Check",
        code: `score = 85

if score >= 90:
    print("Grade: A 🌟")
if score >= 50:
    print("You passed! ✅")`
    },
    {
        name: "Boolean Check",
        code: `is_raining = True
is_sunny = False

if is_raining:
    print("Take an umbrella! ☔")

if is_sunny:
    print("Wear sunglasses! 😎")`
    }
];

function loadExample(index) {
    document.getElementById('code-input').value = playgroundExamples[index].code;
}

function runPlaygroundCode() {
    const code = document.getElementById('code-input').value;
    const outputDiv = document.getElementById('playground-output');

    // Clear previous output
    outputDiv.innerHTML = '';

    // Create a custom print function
    let output = [];
    const customPrint = (...args) => {
        output.push(args.join(' '));
    };

    try {
        // Simple Python-to-JavaScript interpreter for basic if statements
        // This is a simplified version that handles basic cases

        let result = interpretPythonCode(code);

        if (result.length > 0) {
            result.forEach(line => {
                const p = document.createElement('p');
                p.textContent = line;
                p.style.color = '#4AF626';
                outputDiv.appendChild(p);
            });
        } else {
            const p = document.createElement('p');
            p.textContent = 'Code executed successfully (no output)';
            p.style.color = '#7F8C8D';
            p.style.fontStyle = 'italic';
            outputDiv.appendChild(p);
        }
    } catch (error) {
        const p = document.createElement('p');
        p.textContent = `❌ Error: ${error.message}`;
        p.style.color = '#E74C3C';
        outputDiv.appendChild(p);
    }
}

function interpretPythonCode(code) {
    const output = [];
    const lines = code.split('\n');
    const variables = {};
    let i = 0;

    while (i < lines.length) {
        let line = lines[i].trim();

        // Skip empty lines and comments
        if (line === '' || line.startsWith('#')) {
            i++;
            continue;
        }

        // Variable assignment
        if (line.includes('=') && !line.includes('==') && !line.includes('!=') && !line.includes('<=') && !line.includes('>=')) {
            const parts = line.split('=');
            const varName = parts[0].trim();
            let value = parts[1].trim();

            // Evaluate the value
            if (value === 'True') {
                variables[varName] = true;
            } else if (value === 'False') {
                variables[varName] = false;
            } else if (value.startsWith('"') || value.startsWith("'")) {
                variables[varName] = value.slice(1, -1);
            } else {
                variables[varName] = parseFloat(value);
            }
        }
        // If statement
        else if (line.startsWith('if ')) {
            const condition = line.slice(3, -1).trim(); // Remove 'if ' and ':'
            const conditionMet = evaluateCondition(condition, variables);

            if (conditionMet) {
                // Execute the if block
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].trim() === '')) {
                    const blockLine = lines[i].trim();
                    if (blockLine.startsWith('print(')) {
                        const printContent = blockLine.slice(6, -1);
                        output.push(evaluatePrint(printContent, variables));
                    }
                    i++;
                }
                continue;
            } else {
                // Skip the if block
                i++;
                while (i < lines.length && (lines[i].startsWith('    ') || lines[i].trim() === '')) {
                    i++;
                }
                continue;
            }
        }
        // Print statement
        else if (line.startsWith('print(')) {
            const printContent = line.slice(6, -1);
            output.push(evaluatePrint(printContent, variables));
        }

        i++;
    }

    return output;
}

function evaluateCondition(condition, variables) {
    // Replace variable names with their values
    let evalCondition = condition;

    for (const [varName, value] of Object.entries(variables)) {
        const regex = new RegExp(`\\b${varName}\\b`, 'g');
        if (typeof value === 'string') {
            evalCondition = evalCondition.replace(regex, `"${value}"`);
        } else {
            evalCondition = evalCondition.replace(regex, value);
        }
    }

    // Replace Python operators with JavaScript operators
    evalCondition = evalCondition.replace(/\band\b/g, '&&');
    evalCondition = evalCondition.replace(/\bor\b/g, '||');
    evalCondition = evalCondition.replace(/\bnot\b/g, '!');
    evalCondition = evalCondition.replace(/\bTrue\b/g, 'true');
    evalCondition = evalCondition.replace(/\bFalse\b/g, 'false');

    // Evaluate the condition
    try {
        return eval(evalCondition);
    } catch (e) {
        throw new Error(`Cannot evaluate condition: ${condition}`);
    }
}

function evaluatePrint(content, variables) {
    // Split by comma for multiple arguments
    const args = content.split(',').map(arg => arg.trim());
    const evaluated = args.map(arg => {
        // String literal
        if (arg.startsWith('"') || arg.startsWith("'")) {
            return arg.slice(1, -1);
        }
        // Variable
        else if (variables.hasOwnProperty(arg)) {
            return variables[arg];
        }
        // Literal value
        else {
            return arg;
        }
    });

    return evaluated.join(' ');
}

// ========================================
// Quiz
// ========================================

const quizQuestions = [
    {
        question: "What does an IF statement do?",
        answers: [
            "It repeats code multiple times",
            "It makes decisions based on conditions",
            "It stores data in variables",
            "It prints text to the screen"
        ],
        correct: 1
    },
    {
        question: "What goes at the end of an if-statement line in Python?",
        answers: [
            "A semicolon ;",
            "A period .",
            "A colon :",
            "An exclamation mark !"
        ],
        correct: 2
    },
    {
        question: "Which operator checks if two values are equal?",
        answers: [
            "=",
            "==",
            "!=",
            "==="
        ],
        correct: 1
    },
    {
        question: "What does 'age >= 13' mean?",
        answers: [
            "Age is greater than 13",
            "Age is less than 13",
            "Age is greater than or equal to 13",
            "Age is not equal to 13"
        ],
        correct: 2
    },
    {
        question: "What is indentation in Python?",
        answers: [
            "The space at the end of a line",
            "The spaces before code to show it's inside an if-block",
            "The punctuation marks in code",
            "The name of a variable"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let selectedAnswer = null;

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz-answer';
        radio.value = index;
        radio.addEventListener('change', () => {
            selectedAnswer = index;
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + answer));
        answersContainer.appendChild(label);
    });

    // Update progress bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    // Hide feedback
    document.getElementById('quiz-feedback').classList.add('hidden');

    // Hide next button initially
    document.getElementById('next-question-btn').style.display = 'none';
}

function checkQuizAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('quiz-feedback-text');

    feedbackBox.classList.remove('hidden');

    if (selectedAnswer === question.correct) {
        quizScore++;
        feedbackText.textContent = "✅ Correct! Well done!";
        feedbackBox.style.background = '#D4EDDA';
        feedbackBox.style.color = '#155724';
    } else {
        feedbackText.textContent = `❌ Incorrect. The correct answer is: ${question.answers[question.correct]}`;
        feedbackBox.style.background = '#F8D7DA';
        feedbackBox.style.color = '#721C24';
    }

    // Show next button
    document.getElementById('next-question-btn').style.display = 'inline-block';

    // Disable the check button
    event.target.disabled = true;
}

function nextQuestion() {
    currentQuestionIndex++;
    selectedAnswer = null;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        // Re-enable check button
        document.querySelector('.btn-check').disabled = false;
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('next-question-btn').style.display = 'none';

    const resultsBox = document.getElementById('quiz-results');
    resultsBox.classList.remove('hidden');

    document.getElementById('final-score').textContent = quizScore;

    const percentage = (quizScore / quizQuestions.length) * 100;
    const messageElem = document.getElementById('final-message');

    if (percentage === 100) {
        messageElem.textContent = "🌟 Perfect score! You're an IF statement expert!";
    } else if (percentage >= 80) {
        messageElem.textContent = "🎉 Great job! You understand IF statements well!";
    } else if (percentage >= 60) {
        messageElem.textContent = "👍 Good work! Keep practicing!";
    } else {
        messageElem.textContent = "📚 Keep learning! Practice makes perfect!";
    }

    // Update progress bar to 100%
    document.getElementById('progress-bar').style.width = '100%';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;

    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.querySelector('.btn-check').disabled = false;

    loadQuestion();
}

// ========================================
// Initialize on page load
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    // Load first scenario
    loadScenario();

    // Load first challenge
    loadChallenge();

    // Load first quiz question
    loadQuestion();

    // Set up slider listener
    const slider = document.getElementById('value-slider');
    if (slider) {
        slider.addEventListener('input', function() {
            document.getElementById('slider-value').textContent = this.value;
        });
    }
});

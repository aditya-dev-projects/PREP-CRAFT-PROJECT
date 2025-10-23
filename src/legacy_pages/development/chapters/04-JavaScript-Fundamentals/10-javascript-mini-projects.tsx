import React, { useState } from 'react';

const JavaScriptMiniProjects: React.FC = () => {
  const [copyState, setCopyState] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (key: string, text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            setCopyState({ ...copyState, [key]: true });
            setTimeout(() => setCopyState({ ...copyState, [key]: false }), 2000);
        });
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopyState({ ...copyState, [key]: true });
            setTimeout(() => setCopyState({ ...copyState, [key]: false }), 2000);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
  };

  const htmlCode = `<!-- index.html -->
<h2>User Score: <span id="user-score">0</span></h2>
<h2>Computer Score: <span id="computer-score">0</span></h2>

<div class="choices">
  <button id="stone">Stone</button>
  <button id="paper">Paper</button>
  <button id="scissors">Scissors</button>
</div>

<div id="result-display">
  <p>Make your move!</p>
</div>`;

  const cssCode = `/* styles.css */
.choices button {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
}

#result-display {
  margin-top: 20px;
  font-weight: bold;
}`;

  const jsPart1 = `// script.js
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.querySelector('#result-display p');
const choiceButtons = document.querySelectorAll('.choices button');

let userScore = 0;
let computerScore = 0;

// Add a click event listener to each button
choiceButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    playRound(userChoice);
  });
});`;

  const jsPart2 = `function getComputerChoice() {
  const choices = ['stone', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3); // Gets a random number: 0, 1, or 2
  return choices[randomIndex];
}`;

  const jsPart3 = `function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    // It's a draw
    updateUI('draw', userChoice, computerChoice);
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // User wins
    userScore++;
    updateUI('win', userChoice, computerChoice);
  } else {
    // Computer wins
    computerScore++;
    updateUI('lose', userChoice, computerChoice);
  }
}`;

  const jsPart4 = `function updateUI(result, userChoice, computerChoice) {
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;

  let message = \`You chose \${userChoice}, computer chose \${computerChoice}. \`;

  if (result === 'win') {
    message += 'You win!';
  } else if (result === 'lose') {
    message += 'You lose!';
  } else {
    message += "It's a draw!";
  }

  resultDisplay.textContent = message;
}`;
  
  const fullJsCode = `${jsPart1}\n\n${jsPart2}\n\n${jsPart3}\n\n${jsPart4}`;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.10: JavaScript Mini Projects (Stone, Paper, Scissors)</h1> */}

      <p className="mb-4 text-muted-foreground">
        Theory is essential, but the only way to truly learn programming is by building. This chapter will walk you through building a classic Stone, Paper, Scissors game from scratch, explaining the logic behind the code step-by-step.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: From Knowledge to Skill 🧠➡️💪
      </h2>
      <p className="mb-2 text-muted-foreground">
        Building this project will transform your theoretical knowledge into practical skill. It forces you to solve problems, debug errors, and make design decisions, which is the day-to-day reality of a web developer.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Our Game Plan */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Our Game Plan: The Project Workflow
      </h2>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li><strong>Define the Goal:</strong> Create an interactive game of Stone, Paper, Scissors against the computer.</li>
            <li><strong>Structure with HTML:</strong> Build the basic skeleton with scoreboards, choice buttons, and a result display area.</li>
            <li><strong>Style with CSS:</strong> Add basic styling to make the game usable.</li>
            <li><strong>Add Functionality with JavaScript:</strong> Break the logic into small, manageable functions for selecting elements, handling clicks, getting the computer's choice, determining the winner, and updating the UI.</li>
        </ol>
      </div>
      <p className="mt-4 text-primary font-semibold">Let's get started! We encourage you to create these files and code along step-by-step.</p>

      <hr className="my-6 border-border" />

      {/* 3. HTML Structure */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Step 1: The HTML Structure (The Game Board)
      </h2>
       <p className="mb-2 text-muted-foreground">
        First, create an `index.html` file. We give specific `id`s to the elements we need to manipulate with JavaScript (like the scores and buttons) so we can easily select them later.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">index.html</p>
            <button onClick={() => handleCopy('html', htmlCode)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['html'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{htmlCode}</code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. CSS Styling */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Step 2: Basic CSS Styling (The Look and Feel)
      </h2>
       <p className="mb-2 text-muted-foreground">
        Next, create a `styles.css` file. The `cursor: pointer` rule is important for usability as it turns the mouse cursor into a hand when hovering over the buttons, indicating they are clickable.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">styles.css</p>
            <button onClick={() => handleCopy('css', cssCode)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['css'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{cssCode}</code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. JS Logic Part 1 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Step 3 (JS): Selecting Elements & Handling User Input
      </h2>
       <p className="mb-2 text-muted-foreground">
        Create a `script.js` file. First, we get references to all our HTML elements. We then loop through each choice button and attach a `click` event listener. When a button is clicked, the code inside the listener runs, grabs the `id` of the button that was clicked (e.g., 'stone'), and passes it to our main `playRound` function.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">script.js (Part 1)</p>
            <button onClick={() => handleCopy('js1', jsPart1)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['js1'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{jsPart1}</code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 6. JS Logic Part 2 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Step 4 (JS): Generating the Computer's Choice
      </h2>
      <p className="mb-2 text-muted-foreground">
        To simulate an opponent, we need a function to make a random choice for the computer. We store the possible choices in an array. We then use `Math.random()` which gives a random decimal between 0 and 1. By multiplying by 3, we get a decimal between 0 and 2.99. `Math.floor()` rounds this down to a whole number (0, 1, or 2), which we use as a random index to pick an item from our choices array.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">script.js (Part 2)</p>
            <button onClick={() => handleCopy('js2', jsPart2)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['js2'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{jsPart2}</code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. JS Logic Part 3 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Step 5 (JS): The Core Game Logic
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the brain of our game. The `playRound` function first checks for a draw. If it's not a draw, it checks the three possible winning conditions for the user. If none of those are met, the only remaining possibility is that the user lost. Based on the outcome, it increments the correct score variable and then calls our `updateUI` function to show the results.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">script.js (Part 3)</p>
            <button onClick={() => handleCopy('js3', jsPart3)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['js3'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{jsPart3}</code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. JS Logic Part 4 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Step 6 (JS): Updating the UI
      </h2>
       <p className="mb-2 text-muted-foreground">
        A good practice is to separate your logic from your DOM manipulation. This function's only job is to update the webpage. It takes the result of the game and updates the `textContent` of the score and result elements to reflect the current state of our variables. We use template literals to easily construct the result message string.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">script.js (Part 4)</p>
            <button onClick={() => handleCopy('js4', jsPart4)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['js4'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{jsPart4}</code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 9. Full JS Code */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        9. Complete JavaScript Code (`script.js`)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Here is all the JavaScript code combined into a single block for your final `script.js` file.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center mb-2">
            <p className="text-secondary-foreground font-semibold">script.js (Complete)</p>
            <button onClick={() => handleCopy('jsFull', fullJsCode)} className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">{copyState['jsFull'] ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{fullJsCode}</code></pre>
      </div>

    </div>
  );
};

export default JavaScriptMiniProjects;


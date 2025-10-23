import React, { useState } from 'react';

// This component is a live, functional preview of the Stone, Paper, Scissors game.
const StonePaperScissorsGame: React.FC = () => {
  // State variables to hold the scores and the result message.
  // Using useState makes the UI automatically update when these values change.
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('Make your move!');
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);

  const choices = ['stone', 'paper', 'scissors'];

  // --- Core Game Logic ---

  // Function to get a random choice for the computer
  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  // Main function to play a round of the game
  const playRound = (playerChoice: string) => {
    const compChoice = getComputerChoice();
    setUserChoice(playerChoice);
    setComputerChoice(compChoice);
    let result = '';

    if (playerChoice === compChoice) {
      result = 'draw';
    } else if (
      (playerChoice === 'stone' && compChoice === 'scissors') ||
      (playerChoice === 'paper' && compChoice === 'stone') ||
      (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
      result = 'win';
      setUserScore(prevScore => prevScore + 1);
    } else {
      result = 'lose';
      setComputerScore(prevScore => prevScore + 1);
    }
    
    // Update the result message after determining the winner
    let message = `You chose ${playerChoice}, computer chose ${compChoice}. `;
    if (result === 'win') message += 'You win!';
    else if (result === 'lose') message += 'You lose!';
    else message += "It's a draw!";

    setResultMessage(message);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">Stone, Paper, Scissors</h1>
      
      <div className="p-6 mt-4 bg-muted rounded-lg border border-border shadow-lg">
        {/* Game UI */}
        <div className="flex justify-around text-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-primary-foreground">User Score</h2>
            <p className="text-4xl font-mono text-primary mt-2">{userScore}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-foreground">Computer Score</h2>
            <p className="text-4xl font-mono text-primary mt-2">{computerScore}</p>
          </div>
        </div>
        
        <div className="text-center my-8">
            <h3 className="text-lg font-semibold text-secondary-foreground">Your Choice: <span className="text-accent font-bold capitalize">{userChoice || '-'}</span></h3>
            <h3 className="text-lg font-semibold text-secondary-foreground">Computer's Choice: <span className="text-accent font-bold capitalize">{computerChoice || '-'}</span></h3>
        </div>

        <div id="result-display" className="text-center min-h-[50px] flex items-center justify-center">
          <p className="font-semibold text-lg text-primary">{resultMessage}</p>
        </div>

        <div className="choices text-center mt-6">
          <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Choose your weapon:</h3>
          <button onClick={() => playRound('stone')} className="py-2 px-4 m-2 text-lg bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors duration-200">Stone</button>
          <button onClick={() => playRound('paper')} className="py-2 px-4 m-2 text-lg bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors duration-200">Paper</button>
          <button onClick={() => playRound('scissors')} className="py-2 px-4 m-2 text-lg bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors duration-200">Scissors</button>
        </div>
      </div>
       <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">This is a live preview. Feel free to modify the design and functionality. If you need a refresher on the logic, please review the step-by-step notes provided earlier.</p>
        </div>
    </div>
  );
};

export default StonePaperScissorsGame;

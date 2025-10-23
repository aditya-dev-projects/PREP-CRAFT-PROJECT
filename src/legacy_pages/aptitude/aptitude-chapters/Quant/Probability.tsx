import React from 'react';
import ProbabilityQuiz from '../../Quizzes/ProbabilityQuiz';

const Probability: React.FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 11 Notes: Probability</h1>

      <p className="mb-4 text-muted-foreground">
        Probability is the branch of mathematics that measures the <strong>likelihood of an event occurring</strong>. It's a direct application of <strong>Permutations and Combinations</strong>, using the principles of counting to determine the chances of a specific outcome. In placement tests, probability questions test your logical reasoning and your ability to systematically count possibilities in scenarios involving dice, cards, coins, and real-world situations.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. Core Concepts & Terminology */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. Core Concepts & Terminology 🎲
      </h2>
      <p className="mb-2 text-muted-foreground">
        Before we can calculate chances, we need to understand the language of probability.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Experiment:</strong> Any action or process with an uncertain result (e.g., tossing a coin, rolling a die).</li>
        <li><strong>Outcome:</strong> A single possible result of an experiment (e.g., getting "Heads").</li>
        <li><strong>Sample Space (S):</strong> The set of <strong>all possible outcomes</strong> of an experiment. For a die roll, S = {"{1, 2, 3, 4, 5, 6}"}.</li>
        <li><strong>Event (E):</strong> A specific outcome or a set of outcomes that we are interested in. It's a <strong>subset</strong> of the sample space (e.g., getting an even number: E = {"{2, 4, 6}"}).</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. The Fundamental Probability Formula */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Fundamental Probability Formula
      </h2>
      <p className="mb-2 text-muted-foreground">
        The probability of any event is a number between 0 (impossible) and 1 (certain).
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `P(E) = (Number of Favorable Outcomes) / (Total Number of Outcomes)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Complement Rule</h4>
        <p className="mt-1 text-muted-foreground">The probability that an event <strong>will not</strong> happen is 1 minus the probability that it <strong>will</strong> happen.</p>
        <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Formula:</strong> `P(not E) = 1 - P(E)`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Rules of Probability */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Rules of Probability
      </h2>
      <p className="mb-2 text-muted-foreground">
        These rules help us calculate the probability of more complex events.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Addition Rule (for "OR" events)</h4>
        <p className="mt-1 text-muted-foreground"><strong>For Mutually Exclusive Events</strong> (cannot happen at the same time): `P(A or B) = P(A) + P(B)`</p>
        <p className="mt-2 text-muted-foreground"><strong>For Non-Mutually Exclusive Events</strong> (can happen at the same time): `P(A or B) = P(A) + P(B) - P(A and B)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Multiplication Rule (for "AND" events)</h4>
        <p className="mt-1 text-muted-foreground"><strong>For Independent Events</strong> (one event does not affect the other): `P(A and B) = P(A) × P(B)`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Conditional Probability */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Conditional Probability
      </h2>
      <p className="mb-2 text-muted-foreground">This is the probability of an event happening, <strong>given that another event has already occurred</strong>.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Notation:</strong> `P(A|B)` means "The probability of A, given B".</p>
        <p className="mt-2"><strong>Formula:</strong> `P(A|B) = P(A and B) / P(B)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: What is the probability that a card drawn is a King, given that we know it is a face card?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Event A:</strong> The card is a King. <strong>Event B:</strong> The card is a face card (12 total).</li>
            <li>The sample space is reduced to the 12 face cards.</li>
            <li>Within these 12 cards, there are 4 Kings.</li>
            <li className="text-primary"><strong>Probability</strong> = 4 / 12 = <strong>1/3</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Common Probability Scenarios */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Common Probability Scenarios
      </h2>
      <p className="mb-2 text-muted-foreground">These are the most frequently tested scenarios in aptitude exams.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Dice Problems</h4>
        <p className="mt-1 text-muted-foreground">When rolling <strong>two dice</strong>, the total number of outcomes is always 6 × 6 = <strong>36</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> What is the probability of getting a sum of 8 when rolling two dice?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Favorable outcomes: {"{(2,6), (3,5), (4,4), (5,3), (6,2)}"}. There are 5 ways.</li>
            <li className="text-primary">Probability = 5 / 36.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Coin Problems</h4>
        <p className="mt-1 text-muted-foreground">When tossing <strong>`n` coins</strong>, the total number of outcomes is <strong>2ⁿ</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> What is the probability of getting exactly two heads when tossing three coins?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Total outcomes = 2³ = 8.</li>
            <li>Favorable outcomes: {"{HHT, HTH, THH}"}. There are 3 ways.</li>
            <li className="text-primary">Probability = 3 / 8.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Playing Cards Problems</h4>
        <p className="mt-1 text-muted-foreground">A standard deck has <strong>52 cards</strong> (26 Red, 26 Black), 4 suits (Hearts, Diamonds, Clubs, Spades) with 13 cards each, and 12 Face Cards (4J, 4Q, 4K).</p>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> What is the probability of drawing a black face card from a deck?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Favorable outcomes: Jack/Queen/King of Clubs + Jack/Queen/King of Spades = 6 cards.</li>
            <li>Total outcomes = 52.</li>
            <li className="text-primary">Probability = 6 / 52 = <strong>3 / 26</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      <ProbabilityQuiz />
    </div>
  );
};


export default Probability;

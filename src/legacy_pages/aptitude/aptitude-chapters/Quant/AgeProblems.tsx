import React from 'react';
import AgeProblemss from '../../Quizzes/AgeProblemss';

const AgeProblems: React.FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 12 Notes: Age Problems</h1>

      <p className="mb-4 text-muted-foreground">
        Age problems are a specific type of algebra word problem that are very common in aptitude tests. They test your ability to form and solve linear equations based on relationships between the ages of different people at different points in time. The key to solving these problems is to correctly translate the word statements into mathematical equations.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Time Machine ⏳
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every age problem involves moving through time. The most important rule is that the <strong>difference in age between two people is always constant</strong>. To solve these problems, we always anchor ourselves to the <strong>present age</strong> and move forward or backward from there.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li>Let the present age be <strong>`x`</strong> years.</li>
        <li><strong>`n` years ago (in the past):</strong> The age was <strong>`x - n`</strong> years.</li>
        <li><strong>`n` years later (in the future):</strong> The age will be <strong>`x + n`</strong> years.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Setting Up Equations */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Setting Up Equations: Translating Words to Math
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most crucial skill. You need to break down the sentences and convert them into algebraic equations.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The sum of the present ages of a father and his son is 60 years. Six years ago, the father's age was five times the age of the son. What will be the son's age after 6 years?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Define Present Ages:</strong> Let Father's age = `F`, Son's age = `S`.</li>
          <li><strong>Form Equation 1:</strong> `F + S = 60`  (which means `F = 60 - S`).</li>
          <li><strong>Form Equation 2:</strong> Six years ago, Father was `F - 6` and Son was `S - 6`. The statement says `(F - 6) = 5 × (S - 6)`.</li>
          <li><strong>Solve the Equations:</strong> Substitute `F` into the second equation: `(60 - S - 6) = 5(S - 6)`.
            <ul className="list-circle ml-6">
              <li>`54 - S = 5S - 30`</li>
              <li>`84 = 6S`</li>
              <li>`S = 14`. The son's present age is 14.</li>
            </ul>
          </li>
          <li className="text-primary"><strong>Answer the Final Question:</strong> Son's age after 6 years = 14 + 6 = <strong>20 years</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Using Ratios to Solve */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Using Ratios to Solve Age Problems
      </h2>
      <p className="mb-2 text-muted-foreground">
        Many age problems are given in terms of ratios. The logic is very similar to standard ratio problems.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The ratio of the present ages of two brothers is 1 : 2. Five years back, the ratio was 1 : 3. What will be the ratio of their ages after 5 years?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Define Present Ages with Ratio:</strong> Let their ages be `x` and `2x`.</li>
          <li><strong>Form Equation from Past:</strong> Five years back, their ages were `x - 5` and `2x - 5`. The ratio was `(x - 5) / (2x - 5) = 1 / 3`.</li>
          <li><strong>Solve for x:</strong> Cross-multiply to get `3(x - 5) = 1(2x - 5)`, which gives `3x - 15 = 2x - 5`, so `x = 10`.</li>
          <li><strong>Find Present Ages:</strong> First brother is 10, second is 20.</li>
          <li className="text-primary"><strong>Answer the Final Question:</strong> After 5 years, their ages will be 15 and 25. The new ratio is `15 : 25`, which simplifies to <strong>3 : 5</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Average-Based Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Average-Based Age Problems
      </h2>
      <p className="mb-2 text-muted-foreground">
        These problems combine the concepts of Averages and Ages. The key is to use the <strong>Sum Formula</strong> from the Averages chapter: `Sum of Ages = Average Age × Number of People`.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The average age of a husband, wife, and their child 3 years ago was 27 years. The average age of the wife and child 5 years ago was 20 years. What is the present age of the husband?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Use Statement 1:</strong> 3 years ago, sum of ages of 3 people = 27 × 3 = 81. Sum of their present ages = 81 + (3×3) = 90. So, `H + W + C = 90`.</li>
          <li><strong>Use Statement 2:</strong> 5 years ago, sum of ages of 2 people = 20 × 2 = 40. Sum of their present ages = 40 + (2×5) = 50. So, `W + C = 50`.</li>
          <li className="text-primary"><strong>Find Husband's Age:</strong> Substitute `(W+C)` into the first equation: `H + 50 = 90`. This gives `H = 40`. The husband's present age is <strong>40 years</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify unknowns</strong> and assign variables to their <strong>present ages</strong> (e.g., `x`, `y`).</li>
        <li><strong>Translate</strong> each statement in the problem into a mathematical equation.</li>
        <li>Pay close attention to the timeline: "ago" means subtraction, "hence" or "after" means addition.</li>
        <li>If ratios are involved, express the present ages as multiples of a variable (e.g., `3x` and `5x`).</li>
        <li>If averages are involved, immediately calculate the <strong>sum of ages</strong>.</li>
        <li>Solve the system of equations to find the present ages.</li>
        <li><strong>Re-read the question</strong> to make sure you are answering what is being asked (e.g., future age, past age, ratio of future ages, etc.).</li>
      </ol>

      <hr className="my-6 border-border" />
      <AgeProblemss />
    </div>
  );
};

export default AgeProblems;

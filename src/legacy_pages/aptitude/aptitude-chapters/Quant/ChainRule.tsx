import React from 'react';
import ChainRuleQuiz from '../../Quizzes/ChainRuleQuiz';

const ChainRule: React.FC = () => {
 return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 15 Notes: Chain Rule</h1>

      <p className="mb-4 text-muted-foreground">
        The <strong>Chain Rule</strong> is a powerful and direct application of <strong>Ratio and Proportion</strong>, specifically dealing with problems that involve multiple dependent variables. Think of it as an extension of the "Man-Days" concept from the Time & Work chapter. It provides a single, master formula to solve complex problems where factors like the number of workers, working hours, and the amount of work all change simultaneously.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "Work Equation" ⚖️
      </h2>
      <p className="mb-2 text-muted-foreground">
        The fundamental idea behind the Chain Rule is that the amount of work done is directly proportional to the number of workers and the time they spend working. This relationship can be balanced in an equation.
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> If you hire <strong>more painters</strong>, the work will get done <strong>faster</strong>. If the painters work for <strong>more hours</strong> each day, the project will be finished in <strong>fewer days</strong>. The Chain Rule is a method to keep all these changing factors in proportion.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. The Master Formula */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Master Formula
      </h2>
      <p className="mb-2 text-muted-foreground">
        This single formula is the key to solving almost every Chain Rule problem. It connects two different situations.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p className="font-semibold text-center text-lg">` (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂ `</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>M:</strong> Number of <strong>Men</strong> (or workers, machines, pumps, etc.).</li>
            <li><strong>D:</strong> Number of <strong>Days</strong> taken.</li>
            <li><strong>H:</strong> Number of <strong>Hours</strong> worked per day.</li>
            <li><strong>W:</strong> Amount of <strong>Work</strong> done (e.g., walls painted, pages typed).</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">The subscript `₁` refers to the first situation (known case), and `₂` refers to the second situation (with an unknown value).</p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Understanding the Proportions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Understanding the Proportions
      </h2>
      <p className="mb-2 text-muted-foreground">
        The master formula is built on the principles of direct and inverse proportion.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Direct Proportion (Numerator vs. Denominator):</strong> More Men/Days/Hours lead to <strong>more Work</strong>. This is why `M, D, H` are in the numerator and `W` is in the denominator. `(M × D × H) ∝ W`.</li>
        <li><strong>Inverse Proportion (Among Numerator items):</strong> If you increase the number of <strong>Men (M)</strong>, you will need fewer <strong>Days (D)</strong> to do the same work. This is why `M` and `D` are multiplied together. `M ∝ 1/D`.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 4. Solving Problems Step-by-Step */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Solving Problems Step-by-Step
      </h2>
      <p className="mb-2 text-muted-foreground">Let's apply the formula to a classic problem.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: If 15 men can build a 35-meter long wall in 10 days, how many days will it take for 20 men to build a 14-meter long wall?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Identify variables for both situations:</strong>
            <ul className="list-circle ml-6">
                <li><strong>Situation 1:</strong> M₁ = 15, D₁ = 10, W₁ = 35.</li>
                <li><strong>Situation 2:</strong> M₂ = 20, D₂ = ?, W₂ = 14.</li>
            </ul>
          </li>
          <li><strong>Set up the simplified formula (no hours):</strong> `(M₁ × D₁) / W₁ = (M₂ × D₂) / W₂`</li>
          <li><strong>Plug in the known values:</strong> `(15 × 10) / 35 = (20 × D₂) / 14`</li>
          <li><strong>Solve for D₂:</strong>
            <ul className="list-circle ml-6">
                <li>Simplify both sides: `150 / 35 = (20 × D₂) / 14`  →  `30 / 7 = (10 × D₂) / 7`</li>
                <li>Equate numerators: `30 = 10 × D₂`</li>
            </ul>
          </li>
          <li className="text-primary"><strong>Answer:</strong> `D₂ = 3`. It will take <strong>3 days</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Read the problem carefully</strong> and break it down into two distinct situations or cases.</li>
        <li><strong>List all the variables</strong> (Men, Days, Hours, Work) for both Case 1 and Case 2. Write a "?" for the value you need to find.</li>
        <li><strong>Write down the master formula</strong> and cross out any variables that are not mentioned or are constant in both cases.</li>
        <li><strong>Substitute the known values</strong> into the simplified formula.</li>
        <li><strong>Solve the equation</strong> algebraically to find the unknown quantity.</li>
      </ol>

      <hr className="my-6 border-border" />
      <ChainRuleQuiz />
    </div>
  );
};


export default ChainRule;


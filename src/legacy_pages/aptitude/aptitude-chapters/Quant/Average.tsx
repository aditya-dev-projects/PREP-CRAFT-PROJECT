import React from 'react';
import AverageQuiz from '../../Quizzes/AverageQuiz';

const Average: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 9 Notes: Averages</h1>

      <p className="mb-4 text-muted-foreground">
        The concept of an <strong>average</strong> is one of the most fundamental ideas in quantitative aptitude. It provides a single, central value that represents a whole group of numbers. Questions on averages are very common in placement tests, often appearing in Data Interpretation sets, and are used to test your understanding of how to balance different values.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "Equal Distribution" Principle ⚖️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of an average as the result of <strong>fairly distributing</strong> a total amount among a group.
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> Imagine three friends have 2, 4, and 6 chocolates. The total is 12. If they share equally, each gets 12 ÷ 3 = 4 chocolates. This "equally distributed" value, 4, is the <strong>average</strong>.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. The Fundamental Average Formula */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Fundamental Average Formula
      </h2>
      <p className="mb-2 text-muted-foreground">
        Almost every basic problem can be solved by rearranging this single formula.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `Average = (Sum of all Observations) / (Number of Observations)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Sum Formula (Most Useful Variation):</h4>
        <p className="mt-1 text-muted-foreground">Whenever a problem gives you the average and the number of items, your first step should almost always be to calculate the total sum.</p>
        <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Formula:</strong> `Sum of all Observations = Average × Number of Observations`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Weighted Average */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Weighted Average: When Some Values Matter More
      </h2>
      <p className="mb-2 text-muted-foreground">
        A weighted average is used when some items in your data set have more "weight" or importance than others.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `(w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁ + w₂ + ... + wₙ)`</p>
        <p className="text-sm mt-1">(Where `x`'s are the values and `w`'s are their corresponding weights)</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Section A has 20 students with an average score of 80. Section B has 30 students with an average of 70. Find the class average.</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Values (x):</strong> 80 (A), 70 (B). <strong>Weights (w):</strong> 20 (A), 30 (B).</li>
          <li><strong>Sum of (w × x):</strong> (20 × 80) + (30 × 70) = 1600 + 2100 = 3700.</li>
          <li><strong>Sum of weights:</strong> 20 + 30 = 50.</li>
          <li className="text-primary"><strong>Weighted Average</strong> = 3700 / 50 = <strong>74</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Properties & Shortcuts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Properties & Shortcuts for Averages
      </h2>
      <p className="mb-2 text-muted-foreground">Understanding these properties can save you a lot of calculation time.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Effect of a Constant</h4>
        <p className="mt-1 text-muted-foreground">If you add, subtract, multiply, or divide every number in a set by a constant `k`, the average also gets added, subtracted, multiplied, or divided by `k`.</p>
        <p className="mt-2 text-sm text-muted-foreground"><strong>Example:</strong> The average of 5 numbers is 30. If you add 4 to each number, the new average will be 30 + 4 = 34.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Average of an Arithmetic Progression (AP)</h4>
        <p className="mt-1 text-muted-foreground">For a series with a constant difference (e.g., consecutive numbers), the average is the middle number OR `(First Term + Last Term) / 2`.</p>
        <p className="mt-2 text-sm text-muted-foreground"><strong>Example:</strong> Average of 11, 13, 15, 17, 19 is the middle number, <strong>15</strong>.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Common Problem Patterns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Common Problem Patterns
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">A New Person Joins/Leaves a Group</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> The average age of 30 students is 15 years. When a teacher joins, the average increases by 1 year. What is the teacher's age?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Initial Sum (students only):</strong> Sum = 15 × 30 = 450.</li>
            <li><strong>New Group:</strong> 31 people. <strong>New Average:</strong> 15 + 1 = 16 years.</li>
            <li><strong>New Sum (students + teacher):</strong> Sum = 16 × 31 = 496.</li>
            <li className="text-primary"><strong>Teacher's Age:</strong> New Sum - Initial Sum = 496 - 450 = <strong>46 years</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">A Value is Replaced</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> The average weight of 10 people is 50 kg. A person weighing 45 kg is replaced by a new person, and the average increases by 1 kg. Find the new person's weight.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Total increase in sum:</strong> (Increase in Average) × (Number of people) = 1 × 10 = 10 kg.</li>
            <li className="text-primary"><strong>Weight of New Person</strong> = Weight of Old Person + Total Increase = 45 + 10 = <strong>55 kg</strong>.</li>
        </ol>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Average Speed</h4>
        <p className="mt-2 text-muted-foreground"><strong>The Trap:</strong> You cannot take a simple average of the speeds. Use `Average Speed = Total Distance / Total Time`.</p>
         <p className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400"><strong>Special Case (Equal Distances):</strong> If a person travels a distance at speed `x` and returns the same distance at speed `y`, the average speed is: `(2xy) / (x + y)`</p>
      </div>

      <hr className="my-6 border-border" />
      <AverageQuiz />
    </div>
  );
};


export default Average;


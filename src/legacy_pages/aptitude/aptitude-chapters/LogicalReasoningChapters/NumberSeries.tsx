import React from 'react';
const NumberSeries: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 1: Number Series</h1>

      <p className="mb-4 text-muted-foreground">
        Number Series questions are one of the most common types of logic puzzles in placement tests. They are a pure test of your <strong>pattern recognition skills</strong>. A series is a sequence of numbers that follows a specific, logical rule. Your task is to decipher this rule and then use it to find a missing number or the next number in the sequence.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Finding the Hidden Pattern 🕵️‍♂️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every number series is a code. The numbers are not random; they are connected by a hidden mathematical pattern. The most effective starting point is to find the <strong>difference</strong> between consecutive terms. More often than not, the pattern lies in these differences.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: `2, 5, 8, 11, 14, ?`</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Difference between 5 and 2 is <strong>+3</strong>.</li>
            <li>Difference between 8 and 5 is <strong>+3</strong>.</li>
            <li><strong>Pattern Identified:</strong> A constant number (+3) is being added to each term.</li>
            <li className="text-primary"><strong>Solution:</strong> The next term will be 14 + 3 = <strong>17</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Common Patterns: Part 1 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Common Patterns: Part 1
      </h2>
      <p className="mb-2 text-muted-foreground">
        These are the most fundamental patterns that form the basis of many series problems.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Arithmetic Series (Constant Difference):</strong> The same number is added or subtracted. (e.g., `3, 7, 11, 15, ?` has a pattern of +4).</li>
            <li><strong>Geometric Series (Constant Ratio):</strong> Each term is multiplied or divided by the same number. (e.g., `2, 6, 18, 54, ?` has a pattern of ×3).</li>
            <li><strong>Series with Increasing/Decreasing Difference:</strong> The difference changes predictably. (e.g., In `1, 2, 4, 7, 11, ?`, the differences are `+1, +2, +3, +4, ...`).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Common Patterns: Part 2 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Common Patterns: Part 2
      </h2>
       <p className="mb-2 text-muted-foreground">
        These patterns involve squares, cubes, and prime numbers. It's helpful to be familiar with the first 15-20 squares and first 10-12 cubes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Perfect Square Series (`n²`):</strong> `1, 4, 9, 16, 25, ?` (The next term is 6² = 36).</li>
            <li><strong>`n² ± k` Series:</strong> `2, 5, 10, 17, ?` (This is `n² + 1`. The next term is 5² + 1 = 26).</li>
            <li><strong>Perfect Cube Series (`n³`):</strong> `1, 8, 27, 64, ?` (The next term is 5³ = 125).</li>
            <li><strong>Prime Number Series:</strong> `2, 3, 5, 7, 11, 13, ?` (The next prime is 17).</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Advanced Patterns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Advanced Patterns
      </h2>
      <p className="mb-2 text-muted-foreground">When the initial difference doesn't reveal a simple pattern, look for these more complex structures.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Two-Stage / Double Difference Series</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> `3, 9, 18, 32, 53, ?`</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>First Difference:</strong> `+6, +9, +14, +21`.</li>
            <li><strong>Second Difference:</strong> `+3, +5, +7`. (An arithmetic series of odd numbers).</li>
            <li>The next second difference is `+9`. The next first difference is `21 + 9 = 30`.</li>
            <li className="text-primary">The next term is 53 + 30 = <strong>83</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Mixed / Alternating Series</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> `4, 10, 9, 15, 16, 20, 25, ?`</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Series 1 (Odd positions):</strong> `4, 9, 16, 25` (This is 2², 3², 4², 5²).</li>
            <li><strong>Series 2 (Even positions):</strong> `10, 15, 20, ?` (This is a simple +5 series).</li>
            <li className="text-primary">The missing term is part of Series 2. So, 20 + 5 = <strong>25</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Fibonacci-style Series</h4>
        <p className="mt-2 text-muted-foreground">Each term is the sum of the two preceding terms.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> `1, 1, 2, 3, 5, 8, 13, ?`</p>
        <p className="text-primary mt-1">The next term is 8 + 13 = <strong>21</strong>.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Find the Differences:</strong> Always start by finding the difference between consecutive terms.</li>
        <li><strong>Look for Obvious Patterns:</strong> If differences don't help, check for squares, cubes, or primes.</li>
        <li><strong>Check for a Second Layer:</strong> Find the difference of the differences (the second stage).</li>
        <li><strong>Consider Multiplication/Division:</strong> If numbers change rapidly, the pattern is likely geometric.</li>
        <li><strong>Look for Alternating Series:</strong> If numbers fluctuate (up, down, up, down), look at every other term.</li>
        <li><strong>Practice, Practice, Practice:</strong> The ability to spot these patterns quickly comes from experience.</li>
      </ol>

     
    </div>
  );
};


export default NumberSeries;

//Create the notes for Word Pattern same like before 

// without changing the css just add the notes of word pattern line by line without missing anything and dont add quiz part in code
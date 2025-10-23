import React from 'react';
import PermutationsAndCombinationsQuiz from '../../Quizzes/PermutationsAndCombinationsQuiz';

const PermutationsAndCombinations: React.FC = () => {
  return (
   
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 10 Notes: Permutations and Combinations</h1>

      <p className="mb-4 text-muted-foreground">
        Permutations and Combinations (often called P&C) is the mathematics of <strong>counting</strong>. This chapter isn't about complex calculations, but about logical thinking and understanding how to count the number of possible <strong>arrangements</strong> and <strong>selections</strong>. It's a very important topic for placements because it forms the direct foundation for Probability and is frequently used in logical reasoning puzzles.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Fundamental Principle of Counting */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Fundamental Principle of Counting
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the bedrock of the entire chapter. It's a simple idea that scales up to solve complex problems.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Multiplication Rule</h4>
            <p className="text-sm text-muted-foreground mt-1">If you can do one task in <strong>`m`</strong> ways and a second, independent task in <strong>`n`</strong> ways, then you can do both tasks in <strong>`m × n`</strong> ways.</p>
            <p className="mt-2 text-xs text-muted-foreground"><strong>Analogy:</strong> 3 shirts and 2 pairs of pants give 3 × 2 = 6 outfits.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Addition Rule</h4>
            <p className="text-sm text-muted-foreground mt-1">If you can do one task in <strong>`m`</strong> ways OR a different task in <strong>`n`</strong> ways (not both), the total number of ways is <strong>`m + n`</strong>.</p>
             <p className="mt-2 text-xs text-muted-foreground"><strong>Analogy:</strong> Choosing from 2 train routes OR 3 bus routes gives 2 + 3 = 5 ways to travel.</p>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Factorial Notation */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Factorial Notation: The Building Block!
      </h2>
      <p className="mb-2 text-muted-foreground">
        The factorial symbol `!` means to multiply a number by every whole number smaller than it, down to 1. It's used to count the number of ways to arrange a set of distinct items.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `n! = n × (n-1) × (n-2) × ... × 1`</p>
        <p className="text-sm mt-1"><strong>Example:</strong> 5! = 5 × 4 × 3 × 2 × 1 = 120.</p>
        <p className="text-sm mt-1"><strong>Special Case:</strong> `0! = 1` (by definition).</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Permutations */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Permutations: When Order Matters (Arrangements)
      </h2>
      <p className="mb-2 text-muted-foreground">
        A <strong>permutation</strong> is an <strong>arrangement</strong> of objects in a specific order. The keyword here is <strong>ORDER</strong>. Changing the order creates a new permutation.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> The number of permutations of `r` objects from a set of `n` is:</p>
        <p className="font-semibold mt-1">`nPr = n! / (n-r)!`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: How many different 3-letter words can be formed from the letters of "MATHS"?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li>We have 5 distinct letters (n=5) and need to arrange 3 of them (r=3).</li>
          <li>Order matters ("MAT" is different from "TAM").</li>
          <li className="text-primary">5P3 = 5! / (5-3)! = 5! / 2! = 120 / 2 = <strong>60</strong>.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Special Case: Arrangements with Repeated Items</h4>
        <p className="mt-1 text-muted-foreground"><strong>Formula:</strong> `n! / (p! × q! × ...)` where `p`, `q` are counts of each repeated item.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example (arranging "APPLE"):</strong> Total letters n=5. 'P' is repeated twice (p=2). Arrangements = 5! / 2! = 120 / 2 = <strong>60</strong>.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Combinations */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Combinations: When Order Doesn't Matter (Selections)
      </h2>
      <p className="mb-2 text-muted-foreground">
         A <strong>combination</strong> is a <strong>selection</strong> of objects where the order does not matter.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> The number of combinations of `r` objects from a set of `n` is:</p>
        <p className="font-semibold mt-1">`nCr = n! / (r! × (n-r)!)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: From a group of 5 friends, how many ways can you choose 3 to go to the movies?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li>We have 5 friends (n=5) and need to select 3 of them (r=3).</li>
          <li>Order doesn't matter.</li>
          <li className="text-primary">5C3 = 5! / (3! × (5-3)!) = 5! / (3! × 2!) = 120 / 12 = <strong>10</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 5. Permutation vs. Combination */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Permutation vs. Combination: The Deciding Question
      </h2>
      <p className="mb-2 text-muted-foreground">To decide which one to use, always ask yourself: <strong>"Does the order of the items matter for this problem?"</strong></p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10">
          <h4 className="font-bold text-blue-700 dark:text-blue-400">Permutation (Arrangement)</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground text-sm">
            <li><strong>Order Matters</strong></li>
            <li><strong>Keywords:</strong> Arrange, Order, Rank, Position, Schedule, Word/Number formation</li>
            <li><strong>Example:</strong> Picking 1st, 2nd, and 3rd place winners in a race.</li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-purple-500 bg-purple-500/10">
          <h4 className="font-bold text-purple-700 dark:text-purple-400">Combination (Selection)</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground text-sm">
            <li><strong>Order Does NOT Matter</strong></li>
            <li><strong>Keywords:</strong> Select, Choose, Group, Committee, Team</li>
            <li><strong>Example:</strong> Picking 3 winners to receive the same prize.</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-border" />
      <PermutationsAndCombinationsQuiz />
    </div>
  );
};


export default PermutationsAndCombinations;

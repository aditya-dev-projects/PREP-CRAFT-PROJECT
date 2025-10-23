import React from 'react';
import RatioAndProportionQuiz from '../../Quizzes/RatioAndProportionQuiz';

const RatioAndProportion: React.FC = () => {
 return (
   
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 6 Notes: Ratio & Proportion</h1>

      <p className="mb-4 text-muted-foreground">
        Ratio and Proportion is a fundamental concept that helps us <strong>compare quantities</strong>. Think of it as the language we use to describe how different things relate to each other in size or amount. It's a critical topic for placements as it forms the backbone for solving problems in Partnerships, Mixtures, Ages, and Data Interpretation.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. Understanding Ratios */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. Understanding Ratios: The Art of Comparison 🍎🍊
      </h2>
      <p className="mb-2 text-muted-foreground">
        A <strong>ratio</strong> is a way to compare two or more quantities of the <strong>same unit</strong>. It tells you how much of one thing there is compared to another.
      </p>
       <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> Imagine you have a fruit basket with 8 apples and 12 oranges. The ratio is `8 : 12`, which simplifies to `2 : 3`. This means "for every 2 apples, there are 3 oranges."
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Key Rules of Ratio</h3>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
          <li><strong>Representation:</strong> A ratio between `a` and `b` is written as `a : b`, which is equivalent to the fraction `a/b`.</li>
          <li><strong>Unit Consistency:</strong> The quantities being compared <strong>must be in the same unit</strong>. (e.g., convert meters and centimeters to a common unit before comparing).</li>
          <li><strong>Combining Ratios (Crucial Shortcut):</strong> If you know `A : B` and `B : C`, you can find `A : B : C`.</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: If `A : B = 2 : 3` and `B : C = 4 : 5`, find `A : B : C`.</strong></p>
        <p className="mt-2 text-muted-foreground"><strong>Shortcut Method (Zig-Zag):</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Write the ratios: <br/> `A : B = 2 : 3` <br/> `B : C = &nbsp;&nbsp;&nbsp;&nbsp;4 : 5`</li>
            <li>Multiply in a 'Z' pattern:
                <ul className="list-circle ml-6">
                    <li>`A` = First numbers downward: 2 × 4 = 8</li>
                    <li>`B` = Diagonally: 3 × 4 = 12</li>
                    <li>`C` = Second numbers downward: 3 × 5 = 15</li>
                </ul>
            </li>
            <li className="text-primary">The combined ratio is <strong>`A : B : C = 8 : 12 : 15`</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Understanding Proportions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Understanding Proportions: The Equality Statement ⚖️
      </h2>
      <p className="mb-2 text-muted-foreground">
        A <strong>proportion</strong> is a statement that says two ratios are <strong>equal</strong>. If the ratio `a : b` is equal to the ratio `c : d`, we say they are in proportion, written as `a : b :: c : d`.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Golden Rule of Proportion:</strong> If `a, b, c, d` are in proportion, then the <strong>Product of Extremes = Product of Means</strong>.</p>
        <p className="font-semibold mt-1">`a × d = b × c`</p>
      </div>
       <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Types of Proportions</h3>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Fourth Proportional:</strong> Find `x` such that `a : b = c : x`. (Use rule: a × x = b × c)</li>
            <li><strong>Third Proportional:</strong> Find `x` such that `a : b = b : x`. (Use rule: a × x = b²)</li>
            <li><strong>Mean Proportional:</strong> Find `x` such that `a : x = x : b`. (Use rule: x² = a × b, so x = √a×b)</li>
        </ul>

      <hr className="my-6 border-border" />

      {/* 3. Direct & Inverse Variation */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Direct & Inverse Variation 📈📉
      </h2>
      <p className="mb-2 text-muted-foreground">This concept explains how a change in one quantity affects another.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Direct Proportion (Variation)</h4>
            <p className="text-sm text-muted-foreground mt-1">When two quantities move in the <strong>same direction</strong>. If one increases, the other increases.</p>
            <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400 text-sm"><strong>Formula:</strong> `A₁ / B₁ = A₂ / B₂`</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Inverse Proportion (Variation)</h4>
            <p className="text-sm text-muted-foreground mt-1">When two quantities move in <strong>opposite directions</strong>. If one increases, the other decreases.</p>
            <p className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400 text-sm"><strong>Formula:</strong> `A₁ × B₁ = A₂ × B₂`</p>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Common Applications of Ratio */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Common Applications of Ratio
      </h2>
      <p className="mb-2 text-muted-foreground">Ratios are used to solve many practical problems, especially those involving division of quantities.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Dividing a Quantity in a Ratio</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> Divide Rs. 1200 between two people in the ratio `2 : 3`.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Find the sum of the ratio parts: 2 + 3 = 5 parts.</li>
            <li>Find the value of one part: Rs. 1200 / 5 = Rs. 240.</li>
            <li>Distribute the shares:
                <ul className="list-circle ml-6">
                    {/* FIX: Removed invalid characters and simplified the text */}
                    <li>First person's share = 2 × 240 = Rs. 480.</li>
                    <li>Second person's share = 3 × 240 = Rs. 720.</li>
                </ul>
            </li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Coins Problems</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> A bag contains Rs. 1, 50p, and 25p coins in the ratio `5 : 6 : 8`. If the total amount is Rs. 210, find the number of each coin.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Convert the ratio of coins to a ratio of their values:</strong>
                <ul className="list-circle ml-6">
                    <li>Value of Re. 1 coins = 5x × 1 = 5x</li>
                    <li>Value of 50p coins = 6x × 0.50 = 3x</li>
                    <li>Value of 25p coins = 8x × 0.25 = 2x</li>
                </ul>
            </li>
            <li>The ratio of their values is `5x : 3x : 2x`.</li>
            <li><strong>Sum the values:</strong> 5x + 3x + 2x = 10x.</li>
            <li><strong>Equate to the total amount:</strong> 10x = 210, so x = 21.</li>
            <li className="text-primary"><strong>Find the number of each coin:</strong>
                 <ul className="list-circle ml-6">
                    <li>Re. 1 coins = 5x = 5 × 21 = 105.</li>
                    <li>50p coins = 6x = 6 × 21 = 126.</li>
                    <li>25p coins = 8x = 8 × 21 = 168.</li>
                </ul>
            </li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Partnership */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Partnership: Sharing Profits
      </h2>
      <p className="mb-2 text-muted-foreground">Partnership is a specific business application of ratios. When two or more people invest in a business, their profits are shared based on how much they invested and for how long.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Rule:</strong> Profits are shared in the ratio of the product of their <strong>(Investment × Time)</strong>.</p>
        <p className="font-semibold mt-1">`Profit₁ : Profit₂ = (Investment₁ × Time₁) : (Investment₂ × Time₂)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Simple Partnership</h4>
        <p className="mt-2 text-muted-foreground">If the time period is the <strong>same</strong> for all partners, the profit is simply shared in the ratio of their investments.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> A invests Rs. 4000 and B invests Rs. 6000 in a business for one year. The total profit is Rs. 5000.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Ratio of investments = `4000 : 6000 = 2 : 3`.</li>
            <li>Sum of ratio parts = 2 + 3 = 5.</li>
            <li>Value of one part = 5000 / 5 = 1000.</li>
            {/* FIX: Removed invalid characters and simplified the text */}
            <li className="text-primary">A's share = 2 × 1000 = Rs. 2000.</li>
            <li className="text-primary">B's share = 3 × 1000 = Rs. 3000.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />
      <RatioAndProportionQuiz />
    </div>
  );
};



export default RatioAndProportion;

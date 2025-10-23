import React from "react";
import NumberSystemQuiz from "../../Quizzes/NumberSystemQuiz";

export default function NumberSystem() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 1 Notes: Number System &amp; Sum of Series</h1>

      <p className="mb-4 text-muted-foreground">
        Let's break down the world of numbers into simple, bite-sized pieces. Think of this as the
        "family tree" of all the numbers you'll ever meet in aptitude tests.
      </p>
      
      <hr className="my-6 border-border" />

      {/* 1. Number Family Tree */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">1. The Number Family Tree 🌳</h2>
      <p className="mb-2 text-muted-foreground">Imagine a series of boxes, one inside the other. That's how our number system works.</p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li>
          <b>Natural Numbers (N):</b> These are your basic counting numbers. The first numbers you ever learned! When you count objects—apples, cars, people—you use them.
          <p className="text-sm text-muted-foreground">Set: {"{1, 2, 3, 4, 5, ...}"}</p>
          <p className="text-sm text-muted-foreground">(Note: Zero is not included. You don't start counting with zero.)</p>
        </li>
        <li>
          <b>Whole Numbers (W):</b> This is the Natural Numbers family, but they invited zero to the party. It represents the idea of "nothing."
          <p className="text-sm text-muted-foreground">Set: {"{0, 1, 2, 3, 4, ...}"}</p>
        </li>
        <li>
          <b>Integers (Z):</b> This group includes all the Whole Numbers, but also their negative opposites. Think of them as mirror images. They are useful for concepts like temperature below zero, being in debt, or floors in a basement.
          <p className="text-sm text-muted-foreground">Set: {"{..., -3, -2, -1, 0, 1, 2, 3, ...}"}</p>
        </li>
        <li>
          <b>Prime &amp; Composite Numbers:</b> These are special types of Natural Numbers.
          <div className="ml-4 mt-1">
            <p><b>Prime Numbers:</b> Think of these as the fundamental "building blocks" or "atoms" of numbers. A number is Prime if it's greater than 1 and can only be divided perfectly by 1 and itself. It has exactly two factors.</p>
            <p className="text-sm text-muted-foreground">Examples: 2, 3, 5, 7, 11, 13, 17...</p>
            <p className="text-sm text-muted-foreground font-semibold">Special Facts:</p>
            <ul className="list-circle ml-6 text-sm text-muted-foreground">
              <li>1 is NOT a prime number because it only has one factor (itself).</li>
              <li>2 is the ONLY even prime number. All other even numbers can be divided by 2.</li>
            </ul>
            <p className="mt-2"><b>Composite Numbers:</b> These are Natural numbers greater than 1 that are not prime. They have more than two factors. You can build them by multiplying prime numbers together.</p>
            <p className="text-sm text-muted-foreground">Examples: 4 (factors: 1, 2, 4), 6 (factors: 1, 2, 3, 6), 9 (factors: 1, 3, 9).</p>
            <p className="text-sm text-muted-foreground">Example of "building": The composite number 12 is built from primes: 2 × 2 × 3.</p>
          </div>
        </li>
        <li>
          <b>Rational Numbers (Q):</b> The name gives a hint: they can be written as a Ratio or a fraction (p/q), where the top and bottom are integers and the bottom is not zero.
          <p className="text-sm text-muted-foreground">Examples: 1/2, 3/4, 5 (which is just 5/1), -0.75 (which is just -3/4).</p>
          <p className="text-sm text-muted-foreground">Their decimal form either stops (like 0.5) or repeats a pattern (like 0.333... which is 1/3).</p>
        </li>
        <li>
          <b>Irrational Numbers:</b> These are the "wild" numbers. They cannot be written as a simple fraction. Their decimal form goes on forever without any repeating pattern.
          <p className="text-sm text-muted-foreground">Famous examples: π (3.14159...), √2 (1.41421...).</p>
        </li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Divisibility */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">2. Divisibility Rules: The Ultimate Cheatsheet</h2>
      <p className="mb-2 text-muted-foreground">These rules let you check if a number can be divided by another without leaving a remainder, all without a calculator!</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><b>By 2:</b> If the number is even, it's divisible by 2. Just check if the very last digit is 0, 2, 4, 6, or 8. <span className="text-muted-foreground text-sm block">Example: 5,496 ends in 6, so it's divisible by 2.</span></li>
            <li><b>By 3:</b> Sum up all the digits. If that sum is in the 3-times table, the original number is divisible by 3. <span className="text-muted-foreground text-sm block">Example: For 741, sum = 7+4+1=12. Since 12 is divisible by 3, so is 741.</span></li>
            <li><b>By 4:</b> Ignore the whole number. Just look at the last two digits. If the number formed by them is divisible by 4, the whole number is. <span className="text-muted-foreground text-sm block">Example: For 89,216, we only look at 16. Since 16÷4=4, the number 89,216 is divisible by 4.</span></li>
            <li><b>By 5:</b> The easiest rule! If the number ends in a 0 or a 5, it's divisible by 5. <span className="text-muted-foreground text-sm block">Example: 1,235 ends in 5. It's divisible by 5.</span></li>
            <li><b>By 6:</b> This is a 2-for-1 deal. The number must pass the test for both 2 and 3. <span className="text-muted-foreground text-sm block">Example: For 132. 1) Rule for 2: It ends in 2, so it's even. (✅ Check!) 2) Rule for 3: Sum = 1+3+2=6. 6 is divisible by 3. (✅ Check!). Since it passes both, 132 is divisible by 6.</span></li>
            <li><b>By 8:</b> Similar to the rule for 4, but bigger. Look at the last three digits. If that 3-digit number is divisible by 8, the original number is too. <span className="text-muted-foreground text-sm block">Example: For 54,120, we look at 120. Since 120÷8=15, the number 54,120 is divisible by 8.</span></li>
            <li><b>By 9:</b> Almost identical to the rule for 3. Sum up all the digits. If that sum is divisible by 9, the original number is. <span className="text-muted-foreground text-sm block">Example: For 486, sum = 4+8+6=18. Since 18 is divisible by 9, so is 486.</span></li>
            <li><b>By 11 (The "Hopscotch" Rule):</b> 1) Start from the right. Add up every second digit (the "odd" places). 2) Now add up the digits you skipped (the "even" places). 3) Find the difference between these two sums. 4) If the difference is 0 or a multiple of 11 (11, 22, 33...), the number is divisible by 11. <span className="text-muted-foreground text-sm block">Example: For 14574 → Odd places: 4+5+1=10. Even places: 7+4=11. Difference: |10-11|=1. Not divisible.</span></li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Cyclicity */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">3. Cyclicity of Unit Digits: Finding the Last Digit</h2>
      <p className="mb-2 text-muted-foreground">The "unit digit" is simply the last digit of a number. When you raise a number to a high power, like 3<sup>2025</sup>, the unit digit repeats in a predictable pattern (a cycle).</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><b>The "Always the Same" Club (Cycle length 1):</b> Any number ending in 0, 1, 5, or 6, when raised to any power, will have the same unit digit. <span className="text-muted-foreground text-sm block">Example: 5¹=5, 5²=25, 5³=125. The unit digit is always 5.</span></li>
            <li><b>The "Flip-Flop" Club (Cycle length 2):</b>
                <p>For 4: The pattern is 4, 6, 4, 6, ... (4<sup>odd power</sup> ends in 4, 4<sup>even power</sup> ends in 6).</p>
                <p>For 9: The pattern is 9, 1, 9, 1, ... (9<sup>odd power</sup> ends in 9, 9<sup>even power</sup> ends in 1).</p>
            </li>
            <li><b>The "Full Tour" Club (Cycle length 4):</b> These numbers go through four different unit digits before the pattern repeats.
                <p>For 2: The cycle is {"{2, 4, 8, 6}"}</p>
                <p>For 3: The cycle is {"{3, 9, 7, 1}"}</p>
                <p>For 7: The cycle is {"{7, 9, 3, 1}"}</p>
                <p>For 8: The cycle is {"{8, 4, 2, 6}"}</p>
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Remainders */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">4. Remainders: What's Left Over</h2>
      <p className="mb-2 text-muted-foreground">Imagine you have 17 cookies and you want to share them equally among 5 friends. Each friend gets 3 cookies (5×3=15), and you have 2 cookies left over. That leftover part is the remainder.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The formal rule is:</strong> `Dividend = Divisor × Quotient + Remainder`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>In our example: 17 = 5 × 3 + 2</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><b>Dividend:</b> The number being divided (17 cookies).</li>
            <li><b>Divisor:</b> The number you are dividing by (5 friends).</li>
            <li><b>Quotient:</b> The whole number result (3 cookies per friend).</li>
            <li><b>Remainder:</b> What's left (2 cookies).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Factorials */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">5. Factorials: The Exclamation Mark!</h2>
      <p className="mb-2 text-muted-foreground">The factorial symbol ! means to multiply a number by every whole number smaller than it, all the way down to 1.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border text-muted-foreground">
        <p>Example: 5! = 5 × 4 × 3 × 2 × 1 = 120.</p>
        <p>Example: 4! = 4 × 3 × 2 × 1 = 24.</p>
        <p>Special case: By definition, 0! = 1. This is a mathematical rule needed to make many other formulas in higher math work correctly.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 6. Sum of Series */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">6. Sum of Series: Quick Formulas 🔢</h2>
      <p className="mb-4 text-muted-foreground">These are powerful shortcuts that save a lot of time in placement exams.</p>

      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Model 1: Sums of Consecutive Natural Numbers</h3>
        <p className="mb-2 text-muted-foreground">This model deals with series that start from 1 and have no gaps.</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>
                <b>Sum of First 'n' Natural Numbers:</b> This is for a simple series like 1+2+3+... up to a number n.
                <p className="text-sm text-muted-foreground">Formula: Sum = n(n+1)/2</p>
                <p className="text-sm text-muted-foreground">Example: Find the sum of 1+2+3+...+40. Here, n = 40. Sum = 40×(40+1)/2 = 820.</p>
            </li>
            <li>
                <b>Sum of Squares of First 'n' Natural Numbers:</b> This is for a series of squares, like 1²+2²+3²+... up to n².
                <p className="text-sm text-muted-foreground">Formula: Sum = n(n+1)(2n+1)/6</p>
                <p className="text-sm text-muted-foreground">Example: Find the sum of 1²+2²+3²+...+10². Here, n = 10. Sum = 10×(10+1)×(2×10+1)/6 = 385.</p>
            </li>
            <li>
                <b>Sum of Cubes of First 'n' Natural Numbers:</b> This is for a series of cubes, like 1³+2³+3³+...+n³.
                <p className="text-sm text-muted-foreground">Formula: Sum = [n(n+1)/2]²</p>
                <p className="text-sm text-muted-foreground">Example: Find the sum of 1³+2³+3³+...+8³. Here, n = 8. First, find the sum of the base numbers: 8×(8+1)/2 = 36. Now, square the result: Sum = 36² = 1296.</p>
            </li>
        </ul>
      </div>
      
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Model 2: Sums of Odd &amp; Even Numbers</h3>
        <p className="mb-2 text-muted-foreground">This model deals with series that have a common difference of 2.</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>
                <b>Sum of First 'x' Odd Numbers:</b> This is for a series like 1+3+5+... The key here is that the formula depends on the count of numbers in the series, not the last digit itself.
                <p className="text-sm text-muted-foreground">Formula: Sum = x² (where x is the number of terms)</p>
                <p className="text-sm text-muted-foreground">How to find x: x = (Last Number + 1)/2</p>
                <p className="text-sm text-muted-foreground">Example: Find the sum of 1+3+5+...+33. Number of terms x = (33+1)/2 = 17. Sum = x² = 17² = 289. ✨</p>
            </li>
            <li>
                <b>Sum of First 'x' Even Numbers:</b> This is for a series like 2+4+6+... Again, the formula depends on the count of numbers.
                <p className="text-sm text-muted-foreground">Formula: Sum = x(x+1) (where x is the number of terms)</p>
                <p className="text-sm text-muted-foreground">How to find x: x = Last Number/2</p>
                <p className="text-sm text-muted-foreground">Example: Find the sum of 2+4+6+...+50. Number of terms x = 50/2 = 25. Sum = x(x+1) = 25×26 = 650.</p>
            </li>
        </ul>
      </div>

      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Case: When a Series Starts from the Middle</h3>
        <p className="mb-2 text-muted-foreground">This is a very common question pattern! The trick is to calculate the total sum and then subtract the part that's missing.</p>
        <p className="mb-2 text-muted-foreground"> Strategy: (Sum from the beginning to the end) - (Sum from the beginning to just before the start)</p>
        <p className="text-muted-foreground">Example: Find the sum of 51+53+55+...+65.</p>
        <ol className="list-decimal ml-6 space-y-1 text-muted-foreground">
            <li><b>Calculate the sum of the full series (1+3+...+65):</b> Number of terms (x₁) = (65+1)/2 = 33. Full Sum = x₁² = 33² = 1089.</li>
            <li><b>Calculate the sum of the missing part (1+3+...+49):</b> Number of terms (x₂) = (49+1)/2 = 25. Missing Sum = x₂² = 25² = 625.</li>
            <li><b>Subtract the missing sum from the full sum:</b> Required Sum = 1089 - 625 = 464.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />
      <NumberSystemQuiz />
    </div>
  );
}

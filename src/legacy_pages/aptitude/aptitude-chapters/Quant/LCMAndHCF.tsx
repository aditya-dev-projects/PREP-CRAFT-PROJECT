import React from "react";
import LCMAndHCFQuiz from "../../Quizzes/LCMAndHCFQuiz";

export default function LCMAndHCF() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Detailed Notes: LCM & HCF</h1>

      <p className="mb-4 text-muted-foreground">
        Think of LCM and HCF as two different tools for solving puzzles. HCF helps you find the        <strong>best way to share or divide</strong> things into equal pieces, while LCM helps you
        figure out <strong>when things will happen together again</strong>.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. HCF */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. HCF (Highest Common Factor): The "Greatest Sharer" 🤝
      </h2>
      <p className="mb-2 text-muted-foreground">
        The <strong>HCF</strong>, also known as the <strong>Greatest Common Divisor (GCD)</strong>,
        is the <strong>largest possible number</strong> that can divide a set of numbers without
        leaving any remainder.
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> Imagine you have two ribbons, one 12 meters long and the other 18
        meters long. You want to cut both ribbons into smaller pieces of <strong>equal length</strong>,
        but you want these pieces to be as <strong>long as possible</strong>. The length of the
        longest possible piece you can cut is the HCF of 12 and 18.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">How to Find the HCF</h3>
      <p className="mb-2 text-muted-foreground">The easiest and most reliable method is <strong>Prime Factorization</strong>.</p>
      <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
        <li>Break down each number into its prime factors (its "building blocks").</li>
        <li>List all the <strong>common prime factors</strong> that appear in every number.</li>
        <li>For each common factor, choose the one with the <strong>lowest power</strong>.</li>
        <li>Multiply these chosen factors together to get the HCF.</li>
      </ol>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Find the HCF of 24 and 36.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Step 1 (Factorize):</strong>
                <ul className="list-circle ml-6">
                    <li>$24 = 2 \times 12 = 2 \times 2 \times 6 = 2 \times 2 \times 2 \times 3 = 2^3 \times 3^1$</li>
                    <li>$36 = 2 \times 18 = 2 \times 2 \times 9 = 2 \times 2 \times 3 \times 3 = 2^2 \times 3^2$</li>
                </ul>
            </li>
            <li><strong>Step 2 (Find Commons):</strong> The common prime factors are <strong>2</strong> and <strong>3</strong>.</li>
            <li><strong>Step 3 (Pick Lowest Powers):</strong>
                <ul className="list-circle ml-6">
                    <li>The powers of 2 are $2^3$ and $2^2$. The lowest is $2^2$.</li>
                    <li>The powers of 3 are $3^1$ and $3^2$. The lowest is $3^1$.</li>
                </ul>
            </li>
            <li><strong>Step 4 (Multiply):</strong> HCF = $2^2 \times 3^1 = 4 \times 3 = 12$.</li>
        </ul>
        <p className="mt-2 text-sm text-primary">So, the largest piece you could cut from two ribbons of 24m and 36m would be <strong>12m</strong> long.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. LCM */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. LCM (Least Common Multiple): The "First Meeting Point" 🗓️
      </h2>
      <p className="mb-2 text-muted-foreground">
        The <strong>LCM</strong> is the <strong>smallest possible number</strong> that is a multiple
        of all the numbers in a set. In other words, it's the smallest number that all the given
        numbers can divide into perfectly.
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> Imagine two people are running around a circular track. Person A
        completes a lap in 3 minutes, and Person B completes a lap in 4 minutes. If they start at
        the same time, when will they be at the starting line <strong>together again for the first
        time</strong>? This "first meeting point" is the LCM of 3 and 4.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">How to Find the LCM</h3>
      <p className="mb-2 text-muted-foreground">We use Prime Factorization again, but with a slightly different rule.</p>
      <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
        <li>Break down each number into its prime factors.</li>
        <li>List <strong>ALL</strong> the prime factors that appear in <strong>any</strong> of the numbers.</li>
        <li>For each prime factor, choose the one with the <strong>highest power</strong>.</li>
        <li>Multiply these chosen factors together to get the LCM.</li>
      </ol>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Find the LCM of 24 and 36.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Step 1 (Factorize):</strong>
                <ul className="list-circle ml-6">
                    <li>$24 = 2^3 \times 3^1$</li>
                    <li>$36 = 2^2 \times 3^2$</li>
                </ul>
            </li>
            <li><strong>Step 2 (Find ALL Factors):</strong> The prime factors involved are <strong>2</strong> and <strong>3</strong>.</li>
            <li><strong>Step 3 (Pick Highest Powers):</strong>
                <ul className="list-circle ml-6">
                    <li>The powers of 2 are $2^3$ and $2^2$. The highest is $2^3$.</li>
                    <li>The powers of 3 are $3^1$ and $3^2$. The highest is $3^2$.</li>
                </ul>
            </li>
            <li><strong>Step 4 (Multiply):</strong> LCM = $2^3 \times 3^2 = 8 \times 9 = 72$.</li>
        </ul>
        <p className="mt-2 text-sm text-primary">So, two bells ringing at intervals of 24 and 36 seconds would ring together again after <strong>72 seconds</strong>.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Golden Rule */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Golden Rule: Connecting HCF and LCM ✨
      </h2>
      <p className="mb-2 text-muted-foreground">
        For any two positive numbers, `A` and `B`, there is a beautiful relationship between them
        and their HCF and LCM.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `HCF(A, B) \times LCM(A, B) = A \times B`</p>
      </div>
      <p className="mt-4 text-muted-foreground">
        <strong>Why it's useful:</strong> This is one of the most frequently tested concepts! If you
        are given any three of these values, you can instantly find the fourth.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example:</strong> For our numbers 24 and 36:</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>HCF = 12</li>
            <li>LCM = 72</li>
            <li>HCF \times LCM = $12 \times 72 = 864$</li>
            <li>Product of numbers = $24 \times 36 = 864$.</li>
            <li>They match perfectly!</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Fractions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">4. HCF and LCM of Fractions</h2>
      <p className="mb-2 text-muted-foreground">
        Yes, you can find the HCF and LCM for fractions too! The rules are simple and opposite to
        each other.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">LCM of Fractions</h4>
            <p className="text-muted-foreground">You want the final fraction to be as "large" as possible. So, you make the top (numerator) large and the bottom (denominator) small.</p>
            <p className="p-2 mt-2 bg-green-500/10 rounded text-green-700 dark:text-green-400">
                <strong>Formula:</strong> (LCM of Numerators) / (HCF of Denominators)
            </p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">HCF of Fractions</h4>
            <p className="text-muted-foreground">You want the final fraction to be as "small" as possible. So, you make the top small and the bottom large.</p>
            <p className="p-2 mt-2 bg-red-500/10 rounded text-red-700 dark:text-red-400">
                <strong>Formula:</strong> (HCF of Numerators) / (LCM of Denominators)
            </p>
        </div>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Find the LCM of 2/3 and 4/9.</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>LCM of Numerators:</strong> LCM of (2, 4) is 4.</li>
            <li><strong>HCF of Denominators:</strong> HCF of (3, 9) is 3.</li>
            <li><strong>Combine:</strong> The LCM is 4/3.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Word Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Word Problems: When to Use Which Tool? 🛠️
      </h2>
      <p className="mb-4 text-muted-foreground">
        This is the most important skill. Look for these keywords in placement questions to decide
        instantly whether to use HCF or LCM.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10">
            <h4 className="font-bold text-blue-700 dark:text-blue-400">Use HCF when the problem involves:</h4>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Splitting things into smaller sections.</li>
                <li>Finding the largest size for items (like tiles to pave a floor).</li>
                <li>Arranging things into rows or groups with an equal number of items.</li>
                <li><strong>Keywords:</strong> "Greatest", "Largest", "Maximum", "Highest", "Dividing equally".</li>
            </ul>
        </div>
        <div className="p-4 border-l-4 border-purple-500 bg-purple-500/10">
            <h4 className="font-bold text-purple-700 dark:text-purple-400">Use LCM when the problem involves:</h4>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
                <li>Finding a future point in time when events will happen together.</li>
                <li>Combining things that are in different cycles.</li>
                <li><strong>Keywords:</strong> "Least", "Smallest", "Minimum", "Together", "Simultaneously", "Next time".</li>
                <li><strong>Classic examples:</strong> Traffic lights changing, bells ringing, runners on a circular track.</li>
            </ul>
        </div>
      </div>
      <LCMAndHCFQuiz />
    </div>
  );
}
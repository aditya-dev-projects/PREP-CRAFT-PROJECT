import React from 'react';
import SimpleAndCompoundInterestQuiz from '../../Quizzes/SimpleAndCompoundInterestQuiz';

const SimpleAndCompoundInterest: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5 Notes: Simple & Compound Interest</h1>

      <p className="mb-4 text-muted-foreground">
        Simple Interest (SI) and Compound Interest (CI) are direct applications of <strong>Percentages</strong> that model how money grows over time through investments or how debt increases through loans. These are staple questions in placement tests because they assess your ability to work with percentage growth, both in a straight line (Simple Interest) and exponentially (Compound Interest).
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. Meet the Cast of Characters 💰
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every interest problem, simple or compound, involves the same set of characters. Understanding their roles is the first step.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Principal (P):</strong> This is the <strong>original sum of money</strong> that is borrowed or invested. It's the starting point of our story.</li>
        <li><strong>Rate of Interest (R):</strong> This is the <strong>percentage</strong> at which the interest is calculated on the principal. It is almost always specified as a "per annum" (p.a.) rate, which means "for one year".</li>
        <li><strong>Time (T):</strong> This is the <strong>duration</strong> for which the money is borrowed or invested. The time period must be in the same unit as the rate (usually years).</li>
        <li><strong>Interest (SI or CI):</strong> This is the <strong>extra money</strong> earned on the principal (for an investment) or the extra money paid back (for a loan). It's the "fee" for using the money.</li>
        <li><strong>Amount (A):</strong> This is the <strong>total sum</strong> at the end of the time period. It's the original principal plus all the interest earned. (Formula: `Amount = Principal + Interest`)</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Simple Interest */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Simple Interest (SI): The "Flat Rate" Growth 📏
      </h2>
      <p className="mb-2 text-muted-foreground">
        Simple Interest is the most basic form of interest. The key idea is that the interest is calculated <strong>only on the original principal amount</strong> for the entire duration. The interest earned is the <strong>same</strong> every single year.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Simple Interest Formulas</h3>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>To find Simple Interest:</strong> `SI = (P × R × T) / 100`</p>
        <p className="mt-2"><strong>To find Total Amount:</strong> `A = P + SI` or `A = P * (1 + (RT/100))`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: What is the simple interest on Rs. 5,000 for 3 years at a rate of 8% per annum?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li><strong>P</strong> = 5000, <strong>R</strong> = 8, <strong>T</strong> = 3</li>
          <li><strong>SI</strong> = (5000 × 8 × 3) / 100 = Rs. 1200</li>
          <li className="text-primary"><strong>Total Amount</strong> = 5000 + 1200 = Rs. 6200</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Compound Interest */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Compound Interest (CI): The "Snowball Effect" ❄️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Compound Interest is more powerful. The key idea is that the interest is calculated on the <strong>principal PLUS the accumulated interest</strong> from previous periods. It's "interest on interest," which causes the money to grow much faster over time.
      </p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Compound Interest Formulas</h3>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>To find Total Amount (compounded annually):</strong> `A = P * (1 + R/100)^T`</p>
        <p className="mt-2"><strong>To find Compound Interest:</strong> `CI = Amount - Principal`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: What is the compound interest on Rs. 5,000 for 3 years at a rate of 8% per annum?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>P</strong> = 5000, <strong>R</strong> = 8, <strong>T</strong> = 3</li>
            <li><strong>Amount</strong> = 5000 * (1 + 8/100)³ = 5000 * (1.08)³ ≈ Rs. 6298.56</li>
            <li className="text-primary"><strong>CI</strong> = 6298.56 - 5000 = Rs. 1298.56</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Compounding Frequency */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Compounding Frequency
      </h2>
      <p className="mb-2 text-muted-foreground">Sometimes, interest is compounded more than once a year. This makes the money grow even faster.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Half-yearly (Semi-annually)</h4>
            <p className="text-sm text-muted-foreground mt-1"><strong>Rule:</strong> Divide the Rate by 2 and Multiply the Time by 2.</p>
            <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400 text-sm">`A = P * (1 + (R/2)/100)^(2T)`</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Quarterly</h4>
            <p className="text-sm text-muted-foreground mt-1"><strong>Rule:</strong> Divide the Rate by 4 and Multiply the Time by 4.</p>
            <p className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400 text-sm">`A = P * (1 + (R/4)/100)^(4T)`</p>
        </div>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 5. Difference between SI and CI */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Difference Between SI and CI
      </h2>
      {/* FIX: Replaced ">" with "{'>'}" to be valid in JSX */}
      <p className="mb-2 text-muted-foreground">This is a very common question pattern. For any period longer than 1 year, <strong>CI {'>'} SI</strong>.</p>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Shortcut Formulas for the Difference</h3>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Difference for 2 Years:</strong> `Difference = P * (R/100)²`</p>
        <p className="mt-2"><strong>Difference for 3 Years:</strong> `Difference = P * (R/100)² * (3 + R/100)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Find the difference between CI and SI on Rs. 10,000 for 2 years at 5% p.a.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>P</strong> = 10000, <strong>R</strong> = 5, <strong>T</strong> = 2</li>
            <li><strong>Difference</strong> = 10000 * (5/100)² = 10000 * (1/400)</li>
            <li className="text-primary"><strong>Difference</strong> = Rs. 25</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 6. Important Shortcuts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Important Shortcuts & Concepts
      </h2>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Relating CI to Successive Percentage Change:</strong> Compound Interest is just a series of successive percentage increases. A 10% CI for 2 years on Rs. 1000 is the same as increasing 1000 by 10% and then increasing the new amount by 10% again.</li>
        <li><strong>Rule of 72 (for doubling money with CI):</strong> This is a quick mental math trick to estimate how many years it will take for an investment to double.
            <div className="p-2 mt-2 bg-green-500/10 rounded text-green-700 dark:text-green-400">
                `Years to Double ≈ 72 / Rate of Interest`
            </div>
            <p className="text-sm mt-1"><strong>Example:</strong> At an 8% CI, money will double in approximately 72 / 8 = <strong>9 years</strong>.</p>
        </li>
      </ul>

      <hr className="my-6 border-border" />
      <SimpleAndCompoundInterestQuiz />
    </div>
  );
};

export default SimpleAndCompoundInterest;

import React from "react";

// Assuming a quiz component for percentages will be created later.
// For now, it's a placeholder to prevent errors.
const PercentagesQuiz = () => {
    return (
        <div className="p-4 mt-6 bg-muted rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Test Your Knowledge</h2>
            <p className="text-muted-foreground">The interactive quiz for the Percentages chapter will appear here.</p>
        </div>
    );
};

export default function Percentages() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 3 Notes: Percentages</h1>

      <p className="mb-4 text-muted-foreground">
        Percentages are the heart of arithmetic and data interpretation. The word "per cent" comes from the Latin <i>per centum</i>, which literally means <strong>"for each 100"</strong>. Mastering this chapter is essential, as it's the foundation for Profit & Loss, Interest, and interpreting charts and graphs in placement exams.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. What is a Percentage? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. What is a Percentage? 🍕
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of a pizza cut into 100 equal slices. If you eat 25 slices, you've eaten <strong>25 per 100</strong> slices, or <strong>25 percent</strong> of the pizza. The symbol for percent is <strong>%</strong>, which is just a shorthand way of writing a fraction with a denominator of 100.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border text-center font-mono">
        <p>25% = 25/100</p>
        <p>80% = 80/100</p>
        <p>x% = x/100</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Percentage-Fraction Conversion */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Golden Skill: Percentage-Fraction Conversion 🚀
      </h2>
      <p className="mb-4 text-muted-foreground">
        This is the <strong>most important shortcut</strong> for aptitude tests. Calculating with fractions is almost always faster and easier than calculating with percentages directly. Your goal should be to memorize this table.
      </p>
      <div className="overflow-x-auto p-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-3 text-secondary-foreground text-center">Key Conversion Table</h3>
        <table className="w-full text-center">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 px-4">Fraction</th>
              <th className="py-2 px-4">Percentage</th>
              <th className="py-2 px-4">Fraction</th>
              <th className="py-2 px-4">Percentage</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr><td className="py-2 px-4">1/2</td><td className="py-2 px-4">50%</td><td className="py-2 px-4">1/8</td><td className="py-2 px-4">12.5%</td></tr>
            <tr><td className="py-2 px-4">1/3</td><td className="py-2 px-4">33.33%</td><td className="py-2 px-4">3/8</td><td className="py-2 px-4">37.5%</td></tr>
            <tr><td className="py-2 px-4">1/4</td><td className="py-2 px-4">25%</td><td className="py-2 px-4">1/9</td><td className="py-2 px-4">11.11%</td></tr>
            <tr><td className="py-2 px-4">1/5</td><td className="py-2 px-4">20%</td><td className="py-2 px-4">1/10</td><td className="py-2 px-4">10%</td></tr>
            <tr><td className="py-2 px-4">1/6</td><td className="py-2 px-4">16.66%</td><td className="py-2 px-4">1/11</td><td className="py-2 px-4">9.09%</td></tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Find 37.5% of 240.</strong></p>
        <p className="mt-2 text-muted-foreground"><strong>Slow Method:</strong> (37.5 / 100) × 240. This involves tricky decimal multiplication.</p>
        <p className="mt-2 text-primary"><strong>Fast Method:</strong> From the table, we know 37.5% is the same as 3/8.
          <br/>So, the problem becomes (3/8) × 240.
          <br/>240 ÷ 8 = 30.
          <br/>3 × 30 = 90. Easy and fast!
        </p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Percentage Change */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Percentage Change: Increase & Decrease 📈📉
      </h2>
      <p className="mb-2 text-muted-foreground">
        This concept measures how much a value has changed <strong>relative to its starting point (the original value)</strong>.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `Percentage Change = (Change in Value / Original Value) × 100`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The price of a movie ticket increased from Rs. 200 to Rs. 250. What is the percentage increase?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li><strong>Step 1 (Find the Change):</strong> The change is 250 - 200 = Rs. 50.</li>
          <li><strong>Step 2 (Identify the Original Value):</strong> The price started at Rs. 200.</li>
          <li><strong>Step 3 (Apply the Formula):</strong> Percentage Increase = (50 / 200) × 100 = (1/4) × 100 = 25%.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Successive Percentage Change */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Successive Percentage Change
      </h2>
      <p className="mb-2 text-muted-foreground">This is when a value is changed more than once, like a price being increased and then getting a discount.</p>
      <p className="p-2 text-red-700 dark:text-red-400 bg-red-500/10 rounded"><strong>The Trap:</strong> A 20% increase followed by a 20% decrease <strong>does not</strong> bring you back to the start!</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> If a value is changed by a% and then by b%, the net change is:</p>
        <p className="font-semibold mt-1">`Net % Change = (a + b + (ab/100)) %`</p>
        <p className="text-sm mt-1">(Use '+' for an increase and '-' for a decrease.)</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A salary is increased by 20% and then decreased by 10%.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li>a = +20, b = -10.</li>
          <li>Net Change = (20 - 10 + (20 × -10) / 100)</li>
          <li>Net Change = (10 - 200/100) = (10 - 2) = 8%.</li>
          <li className="text-primary">So, the final result is an <strong>8% increase</strong>.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. Constant Expenditure Rule */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Constant Expenditure Rule (A-B Rule) ⚖️
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is a classic problem pattern for questions like: "If the price of an item goes up, how much should I reduce my usage to keep my monthly bill the same?"
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Rule:</strong> If the price of an item increases by <strong>R%</strong>, the consumption must be reduced by:</p>
        <p className="font-semibold mt-1">`Reduction % = (R / (100 + R)) × 100 %`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The price of sugar increases by 25%. By what percentage must a family reduce consumption to keep expenditure the same?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li>Here, R = 25.</li>
          <li>Reduction % = (25 / (100 + 25)) × 100</li>
          <li>= (25 / 125) × 100 = (1/5) × 100 = 20%.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">The Fraction Shortcut (more intuitive):</h3>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Price increases by 25%, which is 1/4.</li>
            <li>The new price becomes 1 + 1/4 = 5/4 of the original.</li>
            <li>To keep the budget the same, consumption must be multiplied by the inverse, which is 4/5.</li>
            <li>If the new consumption is 4/5 of the original, it means it has been reduced by 1/5.</li>
            <li className="text-primary">From our table, we know 1/5 is <strong>20%</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      <PercentagesQuiz />
    </div>
  );
}

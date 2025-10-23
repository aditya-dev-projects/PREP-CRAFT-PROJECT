import React from 'react';
import ProfitAndLossQuiz from '../../Quizzes/ProfitAndLossQuiz';

const ProfitAndLoss: React.FC = () => {
 return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4 Notes: Profit and Loss</h1>

      <p className="mb-4 text-muted-foreground">
        Profit and Loss is a direct application of the <strong>Percentages</strong> chapter. It's one of the most practical and frequently asked topics in aptitude tests. These questions test your ability to understand transaction scenarios, calculate margins, and work with discounts, which are essential skills in any business context.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concepts: The Story of a Transaction 🛒
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every profit and loss problem is a story about a transaction. Let's meet the main characters:
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Cost Price (CP):</strong> This is the <strong>initial price</strong> a seller pays for an item. It's the total investment made by the seller. Think of it as the "birth cost" of the product for the shopkeeper.</li>
        <li><strong>Selling Price (SP):</strong> This is the price at which the seller <strong>sells the item</strong> to a customer.</li>
        {/* FIX: Replaced ">" with "{'>'}" to be valid in JSX */}
        <li><strong>Profit (or Gain):</strong> This is the happy ending! It happens when the seller sells the item for <strong>more</strong> than what it cost them. (Condition: <strong>SP {'>'} CP</strong>, Formula: `Profit = SP - CP`)</li>
        {/* FIX: Replaced ">" with "{'>'}" to be valid in JSX */}
        <li><strong>Loss:</strong> This is the sad ending. It happens when the seller is forced to sell the item for <strong>less</strong> than what it cost them. (Condition: <strong>CP {'>'} SP</strong>, Formula: `Loss = CP - SP`)</li>
      </ul>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Golden Rule:</strong> All calculations for profit or loss are <strong>always</strong> based on the <strong>Cost Price (CP)</strong>, unless the question specifically states otherwise.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Profit Percentage and Loss Percentage */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Profit Percentage and Loss Percentage %
      </h2>
      <p className="mb-4 text-muted-foreground">
        Expressing profit or loss as a percentage gives a clearer picture of the transaction's success, regardless of the actual amounts.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Profit Percentage</h4>
            <p className="p-2 mt-2 bg-green-500/10 rounded text-green-700 dark:text-green-400"><strong>Formula:</strong> `(Profit / CP) × 100`</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Loss Percentage</h4>
            <p className="p-2 mt-2 bg-red-500/10 rounded text-red-700 dark:text-red-400"><strong>Formula:</strong> `(Loss / CP) × 100`</p>
        </div>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A shopkeeper buys a watch for Rs. 800 and sells it for Rs. 1000.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li><strong>CP</strong> = 800, <strong>SP</strong> = 1000</li>
          {/* FIX: Replaced ">" with "{'>'}" to be valid in JSX */}
          <li>Since SP {'>'} CP, it's a profit.</li>
          <li><strong>Profit</strong> = 1000 - 800 = Rs. 200</li>
          <li className="text-primary"><strong>Profit %</strong> = (200 / 800) × 100 = (1/4) × 100 = <strong>25%</strong></li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Marked Price and Discount */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Price Tag: Marked Price and Discount 🏷️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Often, the story has another character: the price tag on the item, which might be different from the final selling price.
      </p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li><strong>Marked Price (MP):</strong> This is the price written on the item's label, also known as the list price.</li>
          <li><strong>Discount:</strong> This is a reduction offered by the seller on the <strong>Marked Price</strong>.</li>
          <li><strong>Relationship:</strong> `Selling Price = Marked Price - Discount`</li>
          <li><strong>Discount Percentage:</strong> `(Discount / Marked Price) × 100`</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A shirt has a price tag (MP) of Rs. 1500. The shopkeeper offers a 20% discount.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li><strong>MP</strong> = 1500, <strong>Discount %</strong> = 20%</li>
          <li><strong>Discount Amount</strong> = 20% of 1500 = (1/5) × 1500 = Rs. 300</li>
          <li className="text-primary"><strong>Selling Price (SP)</strong> = 1500 - 300 = Rs. 1200</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Formulas & Shortcuts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Important Formulas & Shortcuts
      </h2>
      <p className="mb-2 text-muted-foreground">These formulas help you find a missing value quickly using the Multiplying Factor (MF) method.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>To find SP:</strong></p>
        <p className="mt-1 font-semibold">`SP = CP × ((100 ± Profit/Loss %) / 100)`</p>
        <p className="text-sm mt-1">Shortcut: For a 20% profit, SP = CP × 1.2. For a 15% loss, SP = CP × 0.85.</p>
      </div>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>To find CP:</strong></p>
        <p className="font-semibold mt-1">`CP = SP × (100 / (100 ± Profit/Loss %))`</p>
        <p className="text-sm mt-1">Shortcut: If an item was sold for Rs. 120 at a 20% profit, CP = 120 / 1.2 = Rs. 100.</p>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. Common Problem Patterns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Common Problem Patterns
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Dishonest Seller (False Weights)</h3>
        <p className="mb-2 text-muted-foreground">A seller uses a weight that is less than the standard (e.g., uses an 800g weight but claims it's 1kg).</p>
        <div className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400">
            <strong>Formula:</strong> `Profit % = ((True Weight - False Weight) / False Weight) × 100`
        </div>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> A grocer sells rice at cost price but uses an 800g weight for 1kg. He saves 200g on every 800g he sells. Profit % = ((1000 - 800) / 800) × 100 = <strong>25%</strong>.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Successive Discounts</h3>
        <p className="mb-2 text-muted-foreground">When two or more discounts are applied one after another (e.g., "20% + 10% off"). This is a successive percentage change.</p>
        <div className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400">
            <strong>Net Discount Formula:</strong> `(a + b - (ab/100)) %`
        </div>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> Find the single discount equivalent to 20% and 10% off. Net Discount = (20 + 10 - (20 × 10)/100) = (30 - 2) = <strong>28%</strong>.</p>
      </div>

      <hr className="my-6 border-border" />
      <ProfitAndLossQuiz />
    </div>
  );
}

export default ProfitAndLoss;

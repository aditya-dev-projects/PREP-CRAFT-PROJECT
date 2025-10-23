import React from 'react';
import Partnershipss from '../../Quizzes/Partnershipss';

const Partnerships: React.FC = () => {
  return (
 
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 13 Notes: Partnership</h1>

      <p className="mb-4 text-muted-foreground">
        Partnership problems are a direct and practical application of <strong>Ratios and Proportions</strong>. They deal with scenarios where two or more people start a business together by investing money for certain periods. The core of this chapter is to understand how to distribute the profit or loss among the partners in a fair manner.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "Contribution" Principle 🤝
      </h2>
      <p className="mb-2 text-muted-foreground">
        A partnership is a business owned and run by two or more individuals. The profit or loss from the business is divided among them based on their contribution, which depends on both the money invested and the time it was invested for.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Partner:</strong> Each individual who has invested in the business.</li>
        <li><strong>Investment (or Capital):</strong> The amount of money contributed by each partner.</li>
        <li><strong>Time:</strong> The duration for which each partner's investment was used in the business.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. The Golden Rule of Partnership */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Golden Rule of Partnership
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the single most important formula for this chapter. The share of profit (or loss) for each partner is directly proportional to the product of their <strong>Investment</strong> and the <strong>Time</strong> period.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `Profit ∝ Investment × Time`</p>
        <p className="mt-2 font-semibold">`A's Profit : B's Profit = (A's Investment × A's Time) : (B's Investment × B's Time)`</p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Types of Partnerships */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Types of Partnerships
      </h2>
      <p className="mb-2 text-muted-foreground">
        Partnerships are generally classified into two types based on the duration of the investments.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Simple Partnership</h4>
        <p className="mt-1 text-muted-foreground">This is when all partners have invested their money for the <strong>same period of time</strong>. The profit or loss is shared in the <strong>ratio of their investments</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> Alice starts with Rs. 50,000 and Bob with Rs. 80,000 for one year. Profit is Rs. 26,000. Find Bob's share.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Ratio of Investments:</strong> `50,000 : 80,000` simplifies to `5 : 8`.</li>
            <li><strong>Sum of Ratio Parts:</strong> 5 + 8 = 13.</li>
            <li><strong>Value of One Part:</strong> Rs. 26,000 / 13 = Rs. 2,000.</li>
            <li className="text-primary"><strong>Bob's Share</strong> = 8 × 2000 = <strong>Rs. 16,000</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Compound Partnership</h4>
        <p className="mt-1 text-muted-foreground">This is when partners invest their money for <strong>different periods of time</strong>. The profit or loss is shared in the <strong>ratio of (Investment × Time)</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> Charlie starts with Rs. 20,000. After 4 months, David joins with Rs. 30,000. At the end of the year, profit is Rs. 13,000. Find David's share.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Charlie's Contribution:</strong> 20,000 × 12 months.</li>
            <li><strong>David's Contribution:</strong> 30,000 × 8 months (since he joined after 4 months).</li>
            <li><strong>Ratio of (Inv × Time):</strong> `(20,000 × 12) : (30,000 × 8)` which is `240,000 : 240,000` or `1 : 1`.</li>
            <li className="text-primary">Since the ratio is 1:1, they share equally. <strong>David's Share</strong> = 13,000 / 2 = <strong>Rs. 6,500</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Working vs. Sleeping Partners */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Working vs. Sleeping Partners
      </h2>
      <p className="mb-2 text-muted-foreground">Sometimes, one partner might be actively managing the business while another just provides capital.</p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li><strong>Working (Active) Partner:</strong> Manages the business and is often entitled to a <strong>salary</strong> or commission from the profit *before* it is distributed.</li>
          <li><strong>Sleeping (Dormant) Partner:</strong> Only invests money and does not participate in running the business.</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A invests Rs. 10,000, B invests Rs. 20,000. A is a working partner and gets a salary of Rs. 1,000/month. Total annual profit is Rs. 80,000. Find B's share.</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Total Profit:</strong> Rs. 80,000.</li>
            <li><strong>A's Annual Salary:</strong> 1,000 × 12 = Rs. 12,000.</li>
            <li><strong>Remaining Profit to be Distributed:</strong> 80,000 - 12,000 = Rs. 68,000.</li>
            <li><strong>Ratio of Investments:</strong> `10,000 : 20,000 = 1 : 2`. Sum of parts = 3.</li>
            <li><strong>Value of One Part:</strong> Rs. 68,000 / 3.</li>
            <li className="text-primary"><strong>B's Share:</strong> 2 × (68,000 / 3) ≈ <strong>Rs. 45,333.33</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify the type of partnership:</strong> Is the time period the same for everyone (Simple) or different (Compound)?</li>
        <li><strong>Calculate the stake</strong> for each partner by multiplying their <strong>Investment × Time</strong>.</li>
        <li><strong>Form the profit-sharing ratio</strong> based on these stakes and simplify it.</li>
        <li>If there's a working partner, <strong>subtract their salary/commission</strong> from the total profit before you start distributing.</li>
        <li><strong>Divide the profit</strong> according to the final ratio, just like a standard ratio problem.</li>
      </ol>

      <hr className="my-6 border-border" />
      <Partnershipss />
    </div>
  );
};


export default Partnerships;

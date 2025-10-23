import React from 'react';
import AllegationsAndMixturess from '../../Quizzes/AllegationsAndMixturess';

const AllegationsAndMixtures: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 14 Notes: Alligations and Mixtures</h1>

      <p className="mb-4 text-muted-foreground">
        This chapter introduces a powerful shortcut called the <strong>Rule of Alligation</strong>. While it might seem like a new topic, it's actually a visual and intuitive method for solving problems related to <strong>Weighted Averages</strong>. It's most commonly used for "Mixtures" problems, where you need to find the ratio in which two or more ingredients at different prices or concentrations are mixed to produce a mixture at a desired price or concentration.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: What is Alligation? ⚖️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Alligation is not a concept in itself, but rather a <strong>method or a rule</strong> for solving specific types of problems. It helps you find the ratio of two ingredients when you know their individual values and the desired "mean" or "average" value of the mixture.
      </p>
      <p className="mb-4 text-sm text-muted-foreground">
        <strong>Analogy:</strong> Imagine you have cheap rice (Rs. 20/kg) and premium rice (Rs. 30/kg). A customer wants a blend that costs exactly Rs. 24/kg. Alligation tells you the exact ratio to mix them in.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. The Alligation Rule & Diagram */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Alligation Rule & Diagram
      </h2>
      <p className="mb-2 text-muted-foreground">
        This visual diagram is the key to solving problems quickly.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Criss-Cross Method:</h4>
        <ol className="list-decimal ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>Write the value of the <strong>Cheaper</strong> ingredient on the left and the <strong>Dearer</strong> on the right.</li>
            <li>Write the <strong>Mean</strong> (desired average) value in the center.</li>
            <li>Subtract diagonally: `(Dearer - Mean)` gives the parts of the Cheaper.</li>
            <li>Subtract diagonally: `(Mean - Cheaper)` gives the parts of the Dearer.</li>
        </ol>
        <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Formula:</strong> `Ratio (Cheaper : Dearer) = (Dearer - Mean) : (Mean - Cheaper)`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Mix rice at Rs. 20/kg and Rs. 30/kg to get a mixture at Rs. 24/kg.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>Cheaper = 20, Dearer = 30, Mean = 24.</li>
            <li>Parts of Cheaper Rice = (30 - 24) = 6.</li>
            <li>Parts of Dearer Rice = (24 - 20) = 4.</li>
            <li className="text-primary">The required ratio is `6 : 4`, which simplifies to <strong>3 : 2</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Applying Alligation to Mixtures */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Applying Alligation to Mixtures
      </h2>
      <p className="mb-2 text-muted-foreground">
        The rule can be applied to any problem where two groups are mixed. The values can be prices, speeds, percentages, or any other measurable unit, but they must all be the same unit.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example (Percentage Concentration): A solution of 40% alcohol is mixed with a solution of 75% alcohol to get a mixture of 50% concentration. In what ratio should they be mixed?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Cheaper (C):</strong> 40%, <strong>Dearer (D):</strong> 75%, <strong>Mean (M):</strong> 50%.</li>
          <li>Parts of 40% solution = (D - M) = 75 - 50 = 25.</li>
          <li>Parts of 75% solution = (M - C) = 50 - 40 = 10.</li>
          <li className="text-primary">The ratio is `25 : 10`, which simplifies to <strong>5 : 2</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Mixtures: Replacement Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Mixtures: Replacement Problems
      </h2>
      <p className="mb-2 text-muted-foreground">This is another very common pattern where a part of the mixture is removed and replaced with another substance. The key is that when you remove a portion of a mixture, the <strong>ratio of the components in the remaining mixture stays the same</strong>.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A 40-liter mixture of milk and water contains 10% water. How much water should be added to make the water 20% in the new mixture?</strong></p>
        <h4 className="font-bold text-secondary-foreground mt-3">Method 1: Standard Approach</h4>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Initial Quantities:</strong> Water = 10% of 40L = 4L. Milk = 36L.</li>
            <li>Let `x` liters of water be added. New Water = `4 + x`, New Total = `40 + x`.</li>
            <li><strong>Form Equation:</strong> `(New Water / New Total Mixture) = 20% = 1/5`. So, `(4 + x) / (40 + x) = 1/5`.</li>
            {/* FIX: Replaced "=>" with "→" to avoid JSX parsing error */}
            <li><strong>Solve:</strong> `5(4 + x) = 40 + x` → `20 + 5x = 40 + x` → `4x = 20`.</li>
            <li className="text-primary">`x = 5`. So, <strong>5 liters</strong> of water should be added.</li>
        </ol>
        <h4 className="font-bold text-secondary-foreground mt-4">Method 2: Alligation on the Constant Substance (Milk)</h4>
         <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Initial Mixture:</strong> Milk is 90%. <strong>Substance Added:</strong> Pure water is 0% milk. <strong>Final Mixture:</strong> If water is 20%, milk must be 80%.</li>
            <li>Apply Alligation on Milk %: Cheaper (0%), Dearer (90%), Mean (80%).</li>
            <li>Ratio (Mixture : Water) = (90 - 80) : (80 - 0) = 10 : 80 = 1 : 8.</li>
            <li>This means for every 8 parts of mixture, 1 part of water is added.</li>
            <li>We know 8 parts = 40 liters (original mixture). So, 1 part = 5 liters.</li>
            <li className="text-primary">The amount of water to add is <strong>5 liters</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify the problem type.</strong> Is it a simple mixing problem or a replacement problem?</li>
        <li>For simple mixing, identify the <strong>Cheaper, Dearer, and Mean</strong> values. Ensure they are all in the same unit.</li>
        <li><strong>Apply the Alligation diagram</strong> to find the required ratio.</li>
        <li>For replacement problems, identify the component that <strong>remains constant</strong> and apply alligation to the percentages of that component.</li>
        <li>Always simplify the final ratio.</li>
      </ol>

      <hr className="my-6 border-border" />
      <AllegationsAndMixturess />
    </div>
  );
};



export default AllegationsAndMixtures;

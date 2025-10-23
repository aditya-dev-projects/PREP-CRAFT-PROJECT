import React from 'react';
import DataInterpretationQuiz from '../../Quizzes/DataInterpretationQuiz';

const DataInterpretation: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 18 Notes: Data Interpretation</h1>

      <p className="mb-4 text-muted-foreground">
        Data Interpretation (DI) is not a new topic with new formulas. Instead, it is the practical application of everything you have learned in <strong>Percentages, Averages, and Ratios</strong>. In placement tests, DI sets are given to test your ability to read and understand data presented in various formats, perform calculations quickly, and draw logical conclusions.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Skill */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Skill: Reading & Understanding the Data
      </h2>
      <p className="mb-2 text-muted-foreground">
        Before you even touch your pen, the most critical step is to spend 30-40 seconds understanding the data provided. Rushing this step is the most common cause of errors.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Your Pre-calculation Checklist:</h4>
        <ol className="list-decimal ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Read the Title:</strong> What is the data about?</li>
            <li><strong>Check the Axes (for graphs):</strong> What do the X-axis and Y-axis represent?</li>
            <li><strong>Note the Units:</strong> Are the values in thousands, lakhs, crores, millions, or tonnes? This is a common trap!</li>
            <li><strong>Read the Footnotes/Legends:</strong> Are there any special conditions or definitions mentioned?</li>
            <li><strong>Get a General Sense:</strong> What is the overall trend? Which category has the highest/lowest values?</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Type 1: Data Tables & Bar Charts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Type 1: Data Tables & Bar Charts
      </h2>
      <p className="mb-2 text-muted-foreground">
        These are the most common and straightforward formats for presenting data.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Data Tables:</strong> Data is presented in a structured format of rows and columns. Pay attention to the row and column headers to find specific values.</li>
        <li><strong>Bar Charts:</strong> Data is represented by rectangular bars, where the length of the bar is proportional to the value. They are excellent for comparing different categories.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 3. Type 2: Pie Charts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Type 2: Pie Charts
      </h2>
      <p className="mb-2 text-muted-foreground">
        A pie chart is a circular graph that represents a <strong>whole</strong> (100%). Each "slice" of the pie represents a part or a percentage of that whole.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Golden Rules of Pie Charts:</strong></p>
        <ul className="list-disc ml-4 mt-2">
            <li>The entire circle represents the total quantity, which is equal to <strong>100%</strong>.</li>
            <li>The entire circle also corresponds to <strong>360 degrees (°)</strong> at the center.</li>
            <li className="font-semibold">This gives the key conversion factor: `100% = 360°`, which means `1% = 3.6°`.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Common Pie Chart Questions:</h4>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Finding the value of a slice:</strong> If the total value is 5,000, a slice representing 20% would be `20% of 5000 = 1000`.</li>
            <li><strong>Finding the central angle:</strong> A slice representing 20% would have a central angle of `20 × 3.6° = 72°`.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Type 3: Line Graphs */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Type 3: Line Graphs
      </h2>
      <p className="mb-2 text-muted-foreground">
        A line graph is used to show how a value <strong>changes over a period of time</strong>. It's the best format for identifying <strong>trends, growth, and fluctuations</strong>.
      </p>
      <p className="mt-2 text-muted-foreground">
        The X-axis usually represents time (years, months, days), and the Y-axis represents the value being measured. Points are plotted for each time period, and a line connects them to show the trend.
      </p>

      <hr className="my-6 border-border" />

      {/* 5. Essential DI Calculations & Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Essential DI Calculations & Strategy
      </h2>
      <p className="mb-2 text-muted-foreground">Success in DI depends on how quickly and accurately you can perform a few key calculations.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`x` is what % of `y`?</h4>
            <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400 text-sm"><strong>Formula:</strong> `(x / y) × 100`</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Percentage Change</h4>
            <p className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400 text-sm"><strong>Formula:</strong> `((Final - Initial) / Initial) × 100`</p>
        </div>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The 4-Step Strategy for Any DI Set</h4>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Analyze (30s):</strong> Spend 30-40 seconds understanding the chart/table. Do not skip this.</li>
            <li><strong>Read the Question:</strong> Identify exactly what data you need to find.</li>
            <li><strong>Estimate & Eliminate:</strong> Before calculating, look at the options. Can you eliminate any obviously wrong answers?</li>
            <li><strong>Calculate:</strong> Perform the required calculation (percentage, average, ratio) using the extracted data.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />
      <DataInterpretationQuiz />
    </div>
  );
};


export default DataInterpretation;


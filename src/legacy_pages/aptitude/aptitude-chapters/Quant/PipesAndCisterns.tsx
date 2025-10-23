import React from 'react';
import PipesAndCisternsQuiz from '../../Quizzes/PipesAndCisternsQuiz';

const PipesAndCisterns: React.FC = () => {
  return (
   
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 7 Notes: Pipes and Cisterns</h1>

      <p className="mb-4 text-muted-foreground">
        Pipes and Cisterns problems are a classic variation of <strong>Time & Work</strong>. Instead of people completing a job, you have pipes filling or emptying a tank. The "work" is filling the tank, and the "cistern" is just another word for the tank or container. If you understand the logic of Time & Work, this chapter will be very intuitive.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. Core Concepts & Terminology */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. Core Concepts & Terminology 💧
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every Pipes and Cisterns problem revolves around a few key players. Understanding their roles is the first step.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Inlet Pipe:</strong> A pipe that <strong>fills</strong> the tank. It performs <strong>positive work</strong>, adding to the total volume.</li>
        <li><strong>Outlet Pipe / Leak:</strong> A pipe or a hole that <strong>empties</strong> the tank. It performs <strong>negative work</strong>, reducing the total volume.</li>
        <li><strong>Cistern / Tank:</strong> The container that is being filled or emptied.</li>
        <li><strong>Capacity:</strong> The total volume of the tank, which represents the total "work" to be done. We usually don't need the actual capacity in liters; we assume a convenient number to make calculations easy.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. The LCM Method & Pipe Efficiency */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The LCM Method & Pipe Efficiency
      </h2>
      <p className="mb-2 text-muted-foreground">
        Just like in Time & Work, the most efficient way to solve these problems is by assuming a convenient capacity for the tank.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Rule:</strong> The assumed capacity of the tank should be the <strong>LCM (Least Common Multiple)</strong> of all the individual times given in the problem.</p>
      </div>
      <p className="mt-4 text-muted-foreground">
        This ensures that the rate (or efficiency) of each pipe is a clean, whole number, avoiding complex fractions.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Efficiency of a Pipe:</h4>
        <p className="mt-1 text-muted-foreground">This is the amount of the tank it can fill or empty in one unit of time (e.g., liters per hour).</p>
        <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Formula:</strong> `Efficiency = Total Capacity (LCM) / Time taken by the pipe`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Combined Work: Inlets & Outlets Together */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Combined Work: Inlets & Outlets Together
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most important concept that separates this topic from standard Time & Work. When multiple pipes are open, their efficiencies combine.
      </p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li>Inlet pipes (filling) have a <strong>positive (+)</strong> efficiency.</li>
        <li>Outlet pipes (emptying) have a <strong>negative (-)</strong> efficiency.</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Pipe A fills a tank in 10 hours. Pipe B empties it in 15 hours.</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Find Capacity:</strong> LCM of 10 and 15 is <strong>30 units</strong>.</li>
          <li><strong>Find Individual Efficiencies:</strong>
            <ul className="list-circle ml-6">
              <li>Efficiency of A (Inlet) = 30 / 10 = <strong>+3 units/hour</strong>.</li>
              <li>Efficiency of B (Outlet) = 30 / 15 = <strong>-2 units/hour</strong>.</li>
            </ul>
          </li>
          <li className="text-primary"><strong>Find Combined Efficiency:</strong> (+3) + (-2) = <strong>+1 unit/hour</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Solving Standard Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Solving Standard Problems
      </h2>
      <p className="mb-2 text-muted-foreground">Most problems are a direct application of finding the combined efficiency and then calculating the total time.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Total Time Formula:</strong> `Total Time = Total Capacity / Combined Efficiency`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Pattern 1: Multiple Pipes Working Together</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> Pipe A fills in 12 mins, Pipe B fills in 15 mins. How long will they take together?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Capacity (LCM of 12, 15) = 60 units.</li>
            <li>Efficiency of A = 60 / 12 = +5.</li>
            <li>Efficiency of B = 60 / 15 = +4.</li>
            <li>Combined Efficiency = 5 + 4 = +9.</li>
            <li className="text-primary">Time = 60 / 9 = <strong>20/3 minutes</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Pattern 2: Effect of a Leak</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> A tap fills a tank in 8 hours, but due to a leak, it takes 10 hours. How long will the leak take to empty the full tank?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Capacity (LCM of 8, 10) = 40 units.</li>
            <li>Efficiency of Tap (T) alone = 40 / 8 = +5.</li>
            <li>Efficiency of (Tap + Leak) together = 40 / 10 = +4.</li>
            <li>We know `T + Leak = +4`. So, `(+5) + Leak = +4`.</li>
            <li>This means the Leak's efficiency is `4 - 5 = -1`.</li>
            <li className="text-primary">Time for leak to empty = Capacity / Leak's Efficiency = 40 / 1 = <strong>40 hours</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Advanced Scenario: Alternate Pipes */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Advanced Scenario: Alternate Pipes
      </h2>
      <p className="mb-2 text-muted-foreground">This pattern requires a bit more attention as you need to calculate the work done in cycles.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Problem: Pipe A fills in 10 hours, Pipe B fills in 20 hours. They are opened for one hour each, starting with A. When will the tank be full?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Capacity (LCM of 10, 20) = 20 units.</li>
            <li>Efficiency of A = +2, Efficiency of B = +1.</li>
            <li><strong>Work Cycle:</strong> In a 2-hour cycle (A for 1 hr, B for 1 hr), the work done is 2 + 1 = 3 units.</li>
            <li><strong>Find Full Cycles:</strong> We need to fill 20 units. We can fit 6 full cycles (6 × 3 = 18 units).</li>
            <li>Time after 6 cycles = 6 × 2 = 12 hours. Work done = 18 units.</li>
            <li><strong>Remaining Work:</strong> 20 - 18 = 2 units.</li>
            <li><strong>Whose turn is it?</strong> After 12 hours, it's A's turn on the 13th hour.</li>
            <li>A's efficiency is 2 units/hour, which is exactly what we need. Time taken by A = Remaining Work / Efficiency = 2 / 2 = 1 hour.</li>
            <li className="text-primary"><strong>Total Time</strong> = 12 hours (for cycles) + 1 hour (for A) = <strong>13 hours</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />
      <PipesAndCisternsQuiz />
    </div>
  );
};


export default PipesAndCisterns;
// without changing the tailwind css just add the notes of pipes and cisterns without missing anything

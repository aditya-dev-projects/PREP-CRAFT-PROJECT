import React from 'react';
import TimeAndWorkQuiz from '../../Quizzes/TimeAndWorkQuiz';

const TimeAndWork: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 8 Notes: Time and Work</h1>

      <p className="mb-4 text-muted-foreground">
        Time and Work problems are a staple of aptitude tests. They are essentially logic puzzles disguised as math problems. The core idea is to figure out how efficiently people (or machines) work and how that efficiency relates to the time it takes to complete a job. Mastering this topic is crucial as the same logic extends directly to <strong>Pipes and Cisterns</strong>.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concepts: Work, Time, and Efficiency ⚙️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every Time and Work problem is built on three fundamental ideas. If you understand their relationship, you can solve any question.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Work (W):</strong> This represents the <strong>total job to be done</strong>. It could be painting a wall, building a house, or typing a number of pages. In most problems, the total work is considered as <strong>1 unit</strong>.</li>
        <li><strong>Time (T):</strong> This is simply the <strong>duration</strong> taken to complete the work (days, hours, etc.).</li>
        <li><strong>Efficiency (E) or Rate of Work:</strong> This is the <strong>most important concept</strong>. Efficiency is the amount of work a person does in <strong>one unit of time</strong>.</li>
      </ul>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Golden Relationship:</strong> `Total Work = Efficiency × Time Taken`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The LCM Method */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The LCM Method: The Ultimate Shortcut
      </h2>
      <p className="mb-2 text-muted-foreground">
        Calculating with fractions (like 1/10, 1/15) can be slow. The LCM method allows us to work with clean, whole numbers.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Rule:</strong> Instead of assuming the total work is 1, we assume the total work is the <strong>LCM (Least Common Multiple)</strong> of all the individual times given in the problem.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A can paint a house in 10 days, and B can paint it in 15 days.</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Assume Total Work (LCM):</strong> The LCM of 10 and 15 is <strong>30 units</strong>.</li>
          <li><strong>Calculate Individual Efficiencies:</strong>
            <ul className="list-circle ml-6">
              <li>Efficiency of A = Total Work / Time = 30 / 10 = <strong>3 units/day</strong>.</li>
              <li>Efficiency of B = Total Work / Time = 30 / 15 = <strong>2 units/day</strong>.</li>
            </ul>
          </li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Combining Efforts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Combining Efforts & Solving Problems
      </h2>
      <p className="mb-2 text-muted-foreground">
        When people work together, their efficiencies add up.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
          <p><strong>Combined Efficiency = Sum of Individual Efficiencies</strong></p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Continuing the example: If A and B work together:</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Calculate Combined Efficiency:</strong> 3 + 2 = <strong>5 units/day</strong>.</li>
          <li><strong>Calculate Total Time Taken Together:</strong> Time = Total Work / Combined Efficiency = 30 / 5 = <strong>6 days</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Man-Days Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Concept of Man-Days (Group Work)
      </h2>
      <p className="mb-2 text-muted-foreground">This concept is used when groups of people are working on a job. The core idea is that the total work is the product of the number of people and the number of days they work.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `M₁ × D₁ × H₁ / W₁ = M₂ × D₂ × H₂ / W₂`</p>
        <p className="text-sm mt-1">(M=Men, D=Days, H=Hours, W=Work). If work and hours are constant, it simplifies to `M₁ × D₁ = M₂ × D₂`.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: If 10 men can complete a piece of work in 12 days, how many men are required to complete the same work in 8 days?</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>M₁ = 10, D₁ = 12</li>
            <li>M₂ = ?, D₂ = 8</li>
            <li>Using `M₁ × D₁ = M₂ × D₂`:  10 × 12 = M₂ × 8</li>
            <li className="text-primary">M₂ = 120 / 8 = <strong>15 men</strong>.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Common Problem Patterns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Common Problem Patterns
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Someone Leaves/Joins in the Middle</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> A can do a job in 10 days, B in 15 days. They start working together, but A leaves after 2 days. In how many days will B complete the remaining work?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Total Work (LCM of 10, 15) = 30 units.</li>
            <li>Efficiency: A = 3 units/day, B = 2 units/day.</li>
            <li>Combined Efficiency (A+B) = 5 units/day.</li>
            <li><strong>Work done in first 2 days:</strong> 5 × 2 = 10 units.</li>
            <li><strong>Remaining Work:</strong> 30 - 10 = 20 units.</li>
            <li className="text-primary"><strong>Time taken by B to finish:</strong> Remaining Work / B's Efficiency = 20 / 2 = <strong>10 days</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Alternate Days</h4>
        <p className="mt-2 text-muted-foreground">This is solved using the "cycle" method. Calculate work done in one cycle (e.g., a 2-day cycle for two people), find how many full cycles are needed, then calculate time for the remaining work.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Wages</h4>
        <p className="mt-2 text-muted-foreground">Wages are always distributed in the <strong>ratio of the work done</strong> by each person. If they work for the same amount of time, wages are distributed in the <strong>ratio of their efficiencies</strong>.</p>
      </div>

      <hr className="my-6 border-border" />
      <TimeAndWorkQuiz />
    </div>
  );
};


export default TimeAndWork;

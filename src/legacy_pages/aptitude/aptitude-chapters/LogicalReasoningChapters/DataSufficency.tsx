
import React from 'react';
const DataSufficency: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
    <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 14: Data Sufficiency</h1>

      <p className="mb-4 text-muted-foreground">
        Data Sufficiency is a unique type of logical reasoning question that tests your ability to determine what information is necessary to solve a problem, rather than actually solving the problem itself. Each question consists of a question followed by two statements, labeled (1) and (2). Your task is to decide whether the data provided in the statements is sufficient to answer the question.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: "Can it be solved?" not "What is the answer?"
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most important mindset shift required for Data Sufficiency. You are not required to find the final numerical answer. You only need to check if you *can* find a unique answer with the given information.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>The Golden Rule:</strong> If you can determine a single, unique answer to the question using the data in the statements, then the data is sufficient. If the data leads to multiple possible answers or no answer at all, it is insufficient.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Five Standard Options */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Five Standard Options
      </h2>
      <p className="mb-2 text-muted-foreground">
        The answer choices for every Data Sufficiency problem are always the same. You must memorize them.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li><strong>Statement (1) ALONE is sufficient,</strong> but statement (2) alone is not sufficient.</li>
            <li><strong>Statement (2) ALONE is sufficient,</strong> but statement (1) alone is not sufficient.</li>
            <li><strong>BOTH statements TOGETHER are sufficient,</strong> but NEITHER statement ALONE is sufficient.</li>
            <li><strong>EACH statement ALONE is sufficient.</strong></li>
            <li><strong>Statements (1) and (2) TOGETHER are NOT sufficient.</strong></li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Step-by-Step Solving Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Step-by-Step Solving Strategy (The AD/BCE Method)
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is a structured way to navigate the five options and avoid confusion.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: What is the value of x?</strong></p>
        <p className="mt-1 text-muted-foreground"><strong>Statement (1):</strong> 2x + 4 = 10</p>
        <p className="mt-1 text-muted-foreground"><strong>Statement (2):</strong> x is a positive integer.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Step 1: Analyze Statement (1) ALONE.</strong>
                <ul className="list-circle ml-6">
                    <li>From `2x + 4 = 10`, we can solve for x: `2x = 6`, so `x = 3`.</li>
                    <li>This gives a unique answer. Therefore, Statement (1) is <strong>SUFFICIENT</strong>.</li>
                    <li>At this point, the final answer must be either (A) or (D). We can eliminate options (B), (C), and (E). This is the "AD" part of the strategy.</li>
                </ul>
            </li>
            <li><strong>Step 2: Analyze Statement (2) ALONE.</strong> (Forget everything about Statement 1 for a moment).
                <ul className="list-circle ml-6">
                    <li>"x is a positive integer" means x could be 1, 2, 3, 4, ...</li>
                    <li>This does not give a unique value for x. Therefore, Statement (2) is <strong>INSUFFICIENT</strong>.</li>
                </ul>
            </li>
            <li className="text-primary"><strong>Step 3: Conclude.</strong> Since (1) is sufficient and (2) is not, the correct option is <strong>(A)</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Common Traps and Pitfalls */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Common Traps and Pitfalls
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Solving Too Much:</strong> Remember, you don't need the final answer. As soon as you are certain that a unique answer *can* be found, the statement is sufficient. Don't waste time on lengthy calculations.</li>
            <li><strong>"Yes/No" Questions:</strong> For questions that can be answered with a "Yes" or a "No" (e.g., "Is x an even number?"), a statement is sufficient if it gives a definite "Yes" or a definite "No". If the statement leads to a "maybe" situation, it is insufficient.</li>
            <li><strong>Assuming Information:</strong> Do not use information from Statement (1) when you are analyzing Statement (2) alone. This is the most common mistake. Treat them as completely separate worlds initially.</li>
            <li><strong>Square Root Trap:</strong> If an equation is `x² = 9`, the solution is `x = 3` or `x = -3`. This is not a unique answer. A statement like "x is a positive number" would be needed to make it sufficient.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Read the question carefully.</strong> Understand what you need to find.</li>
        <li><strong>Analyze Statement (1) alone.</strong> If it's sufficient, your answer is either A or D. If it's insufficient, your answer is either B, C, or E.</li>
        <li><strong>Analyze Statement (2) alone.</strong> Forget about Statement (1). If it's sufficient, your answer is either B or D. If it's insufficient, your answer is either A, C, or E.</li>
        <li><strong>Combine the statements only if necessary.</strong> If both statements were insufficient on their own, now check if you can find a unique answer by using them together. If yes, the answer is C. If no, the answer is E.</li>
      </ol>
    </div>
  );
};


export default DataSufficency;

import React from 'react';
const BloodRelations: React.FC = () => {
  return (

    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 5: Blood Relations</h1>

      <p className="mb-4 text-muted-foreground">
        Blood Relations are a common type of logical reasoning puzzle in placement tests. These questions test your ability to understand and map family relationships. The problems are designed to be confusing, but they become very simple if you use a visual approach, like drawing a family tree. The key is to break down complex statements into simple, direct relationships.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Family Tree Diagram 🌳
      </h2>
      <p className="mb-2 text-muted-foreground">
        To solve blood relation puzzles quickly and accurately, you must use a standard set of symbols to draw a family tree. This visual map helps you organize the information and see the relationships clearly.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Standard Symbols:</h4>
        <table className="w-full text-left mt-2 text-muted-foreground">
            <thead>
                <tr className="border-b border-border">
                    <th className="py-2">Relationship</th>
                    <th className="py-2 text-center">Symbol</th>
                    <th className="py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2"><strong>Male</strong></td>
                    <td className="py-2 text-center font-mono">+ / □</td>
                    <td>Place '+' above the person's initial.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2"><strong>Female</strong></td>
                    <td className="py-2 text-center font-mono">- / ○</td>
                    <td>Place '-' above the person's initial.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2"><strong>Married Couple</strong></td>
                    <td className="py-2 text-center font-mono">A ↔ B</td>
                    <td>A double-headed arrow connects husband and wife.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2"><strong>Parent-Child</strong></td>
                    <td className="py-2 text-center font-mono">A ↓ B</td>
                    <td>A vertical line connects parent (top) to child (bottom).</td>
                </tr>
                 <tr className="border-t border-border">
                    <td className="py-2"><strong>Siblings</strong></td>
                    <td className="py-2 text-center font-mono">A — B</td>
                    <td>A horizontal line connects brothers/sisters.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Understanding Key Relationships */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Understanding Key Relationships
      </h2>
      <p className="mb-2 text-muted-foreground">
        You need to be very clear about what different relationship terms mean.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Uncle:</strong> Father's brother (Paternal Uncle) or Mother's brother (Maternal Uncle).</li>
            <li><strong>Aunt:</strong> Father's sister (Paternal Aunt) or Mother's sister (Maternal Aunt). Also, Uncle's wife.</li>
            <li><strong>Cousin:</strong> Son or daughter of your uncle or aunt.</li>
            <li><strong>Nephew:</strong> Your brother's or sister's son.</li>
            <li><strong>Niece:</strong> Your brother's or sister's daughter.</li>
            <li><strong>In-laws:</strong> Spouse's family members (e.g., Father-in-law is your spouse's father).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Type 1: Direct Relationship Puzzles */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Type 1: Direct Relationship Puzzles
      </h2>
       <p className="mb-2 text-muted-foreground">
        These problems describe the relationships between a group of people in a jumbled way. The best approach is to build a family tree diagram step-by-step.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A is the father of C, but C is not his son. E is the daughter of C. F is the spouse of A. B is the brother of C. D is the son of B. G is the spouse of B. H is the father of G. Who is the grandmother of D?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>"A is the father of C"</strong> → `A⁺ ↓ C`.</li>
            <li><strong>"...but C is not his son"</strong> → C must be his daughter. Mark `C⁻`.</li>
            <li><strong>"E is the daughter of C"</strong> → `C⁻ ↓ E⁻`.</li>
            <li><strong>"F is the spouse of A"</strong> → `A⁺ ↔ F⁻`.</li>
            <li><strong>"B is the brother of C"</strong> → `B⁺ — C⁻`.</li>
            <li><strong>"D is the son of B"</strong> → `B⁺ ↓ D⁺`.</li>
            <li><strong>"G is the spouse of B"</strong> → `B⁺ ↔ G⁻`.</li>
            <li><strong>"H is the father of G"</strong> → `H⁺ ↓ G⁻`.</li>
            <li className="text-primary"><strong>Answer:</strong> D's father is B. B's parents are A (father) and F (mother). Therefore, D's paternal grandmother is <strong>F</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Type 2: Pointing & Coded Relationships */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Type 2: Pointing & Coded Relationships
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Pointing/Introducing Puzzles</h4>
        <p className="mt-1 text-muted-foreground">A person describes another by tracing a relationship. The strategy is to start from the end of the statement and work backward.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> Pointing to a man, a woman says, "His mother is the only daughter of my mother."</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>Start with "my mother" (from the woman's perspective).</li>
            <li>"The only daughter of my mother" is the <strong>woman herself</strong>.</li>
            <li>The statement becomes "His mother is <strong>me</strong> (the woman)."</li>
            <li className="text-primary">This means the woman is the <strong>mother</strong> of the man.</li>
        </ol>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Coded Blood Relations</h4>
        <p className="mt-1 text-muted-foreground">Relationships are represented by symbols.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> If `A + B` means A is the father of B, and `A × B` means A is the brother of B. What does `P + Q × R` mean?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Decode `Q × R`</strong>: Q is the brother of R.</li>
            <li><strong>Decode `P + Q`</strong>: P is the father of Q.</li>
            <li className="text-primary"><strong>Combine:</strong> If P is the father of Q, and Q is the brother of R, then P is also the <strong>father of R</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Draw a Family Tree:</strong> This is the most crucial step. Never try to solve complex relationship puzzles in your head.</li>
        <li><strong>Use Standard Symbols:</strong> Stick to a consistent set of symbols for male, female, marriage, siblings, and generations.</li>
        <li><strong>Break Down Sentences:</strong> Read each clue one by one and add it to your diagram.</li>
        <li><strong>Identify the Question:</strong> After building the tree, re-read the question to ensure you are solving for the correct relationship.</li>
        <li><strong>For Pointing Puzzles:</strong> Work backward from the end of the statement.</li>
        <li><strong>For Coded Puzzles:</strong> Decode each part of the expression separately and then combine them logically.</li>
      </ol>
    </div>
  );
};


export default BloodRelations;




// Remaning Chapters To ADD As New Files



// 
// WordPattern.tsx
// CodingDecoding.tsx
// MathematicalOperations.tsx
// VennDiagram.tsx
// VisualReasoning.tsx
// PaperCuttingAndAdding.tsx
// CubesAndDices.tsx
// DataSufficency.tsx
// StatementAndAssumptions.tsx
// StatementAndConclusion.tsx



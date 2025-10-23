
import React from 'react';
const VennDiagram: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 10: Venn Diagrams</h1>

      <p className="mb-4 text-muted-foreground">
        Venn diagrams are a visual way to represent the relationships between different groups or sets. In placement tests, these problems test your ability to understand set theory concepts like union, intersection, and complements. They are logic puzzles that require you to carefully place data into the correct regions of the diagram to find unknown quantities.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Sets and Regions 
      </h2>
      <p className="mb-2 text-muted-foreground">
        A Venn diagram consists of overlapping circles. Each circle represents a set (a group of items with a common property). The way the circles overlap shows how the sets are related.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Universal Set (U):</strong> Represented by a rectangle, this is the set of all items under consideration.</li>
            <li><strong>Set (A or B):</strong> Represented by a circle, this is a group of items within the universal set.</li>
            <li><strong>Intersection (A ∩ B):</strong> The overlapping area of the circles. It represents items that belong to <strong>both</strong> Set A AND Set B.</li>
            <li><strong>Union (A U B):</strong> The total area covered by all circles. It represents items that belong to Set A OR Set B OR both.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Key Formulas for Set Theory */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Key Formulas for Set Theory
      </h2>
      <p className="mb-2 text-muted-foreground">
        These formulas, derived from set theory, are the mathematical backbone for solving Venn diagram problems.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <h4 className="font-bold text-primary">For Two Sets (A and B):</h4>
        <p className="font-semibold mt-1">`n(A U B) = n(A) + n(B) - n(A ∩ B)`</p>
        <p className="text-sm mt-1">(Total = Group A + Group B - Both)</p>
      </div>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <h4 className="font-bold text-primary">For Three Sets (A, B, and C):</h4>
        <p className="font-semibold mt-1">`n(A U B U C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C)`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Solving Problems with Two Sets */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Solving Problems with Two Sets
      </h2>
       <p className="mb-2 text-muted-foreground">
        The key is to start from the most specific information, which is the intersection (the "both" region).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: In a class of 50 students, 30 like Tea, 25 like Coffee, and 12 like both. How many students like either Tea or Coffee?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Using the Formula:</strong>
                <ul className="list-circle ml-6">
                    <li>n(Tea) = 30, n(Coffee) = 25, n(Tea ∩ Coffee) = 12.</li>
                    <li>n(Tea U Coffee) = n(Tea) + n(Coffee) - n(Tea ∩ Coffee)</li>
                    <li>= 30 + 25 - 12 = 43.</li>
                </ul>
            </li>
            <li className="text-primary"><strong>Solution:</strong> <strong>43</strong> students like either Tea or Coffee.</li>
        </ol>
        <p className="mt-2 text-muted-foreground"><strong>Follow-up Question:</strong> How many students like only Tea?</p>
        <p className="text-primary ml-6">`Only Tea = n(Tea) - n(Both) = 30 - 12 = 18`.</p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Solving Problems with Three Sets */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Solving Problems with Three Sets
      </h2>
      <p className="mb-2 text-muted-foreground">For three sets, always start by filling the innermost region (the intersection of all three sets) and work your way outwards.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: In a survey of 100 people, 40 like brand A, 35 like brand B, and 50 like brand C. 10 like A and B, 12 like B and C, and 8 like A and C. 5 like all three. How many people like none of these brands?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Start with "All Three":</strong> The very center region `(A ∩ B ∩ C)` is 5.</li>
            <li><strong>Fill "Exactly Two" regions:</strong>
                <ul className="list-circle ml-6">
                    <li>Only A and B = `n(A ∩ B) - n(All three)` = 10 - 5 = 5.</li>
                    <li>Only B and C = `n(B ∩ C) - n(All three)` = 12 - 5 = 7.</li>
                    <li>Only A and C = `n(A ∩ C) - n(All three)` = 8 - 5 = 3.</li>
                </ul>
            </li>
             <li><strong>Fill "Only One" regions:</strong>
                <ul className="list-circle ml-6">
                    <li>Only A = `n(A) - (Only A&B) - (Only A&C) - (All three)` = 40 - 5 - 3 - 5 = 27.</li>
                    <li>Only B = `n(B) - (Only A&B) - (Only B&C) - (All three)` = 35 - 5 - 7 - 5 = 18.</li>
                    <li>Only C = `n(C) - (Only B&C) - (Only A&C) - (All three)` = 50 - 7 - 3 - 5 = 35.</li>
                </ul>
            </li>
            <li><strong>Find Total who like at least one:</strong> Sum up all the regions we calculated: 5 (all three) + 5 + 7 + 3 (exactly two) + 27 + 18 + 35 (only one) = 100.</li>
            <li className="text-primary"><strong>Find "None":</strong> Total People - Total who like at least one = 100 - 100 = <strong>0</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Draw the Diagram:</strong> Always start by drawing the required number of overlapping circles inside a rectangle.</li>
        <li><strong>Start from the Inside Out:</strong> The most important rule. Always fill the value for the innermost intersection first (`A ∩ B ∩ C`) and then work your way outwards to the "exactly two" and then "only one" regions.</li>
        <li><strong>Read Carefully:</strong> Pay close attention to the wording. "Likes A and B" is different from "Likes only A and B". The first includes people who might also like C, while the second does not.</li>
        <li><strong>Use the Formulas as a Check:</strong> You can solve most problems visually with the diagram, but use the set theory formulas to verify your answer if needed.</li>
      </ol>
    </div>
  );
};


export default VennDiagram;
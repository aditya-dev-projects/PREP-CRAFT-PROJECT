import React from 'react';
const WordPattern: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 7: Word Pattern (Analogy)</h1>

      <p className="mb-4 text-muted-foreground">
        Word Pattern, also known as Analogy, is a common type of verbal reasoning question in placement tests. These questions test your vocabulary and, more importantly, your ability to identify the logical <strong>relationship</strong> between a pair of words. Your task is to find a second pair of words that has the exact same relationship as the first pair.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Bridge Sentence 🌉
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every analogy problem follows the structure `A : B :: C : D`, which is read as "A is to B as C is to D". The key to solving these is to create a short, clear sentence, called a "bridge sentence," that perfectly describes the relationship between A and B. You then apply this exact sentence to find the correct D.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: `FISH : GILL :: HUMAN : ?`</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Step 1 (Find Relationship):</strong> A fish uses gills to breathe.</li>
            <li><strong>Step 2 (Form Bridge Sentence):</strong> "A <strong>FISH</strong> breathes using its <strong>GILLS</strong>."</li>
            <li><strong>Step 3 (Apply to Second Pair):</strong> "A <strong>HUMAN</strong> breathes using his/her <strong>LUNGS</strong>."</li>
            <li className="text-primary"><strong>Solution:</strong> The answer is <strong>LUNGS</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Common Relationship Types: Part 1 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Common Relationship Types: Part 1
      </h2>
      <p className="mb-2 text-muted-foreground">
        Recognizing these common patterns will help you form your bridge sentence much faster.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Synonym (Same Meaning):</strong> `Huge : Large :: Small : Tiny`</li>
            <li><strong>Antonym (Opposite Meaning):</strong> `Kind : Cruel :: Happy : Sad`</li>
            <li><strong>Cause and Effect:</strong> `Virus : Illness :: Spark : Fire` (A virus causes an illness).</li>
            <li><strong>Part to Whole:</strong> `Blade : Fan :: Petal : Flower` (A blade is a part of a fan).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Common Relationship Types: Part 2 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Common Relationship Types: Part 2
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Worker and Tool:</strong> `Carpenter : Saw :: Chef : Knife` (A carpenter uses a saw).</li>
            <li><strong>Worker and Workplace:</strong> `Doctor : Hospital :: Teacher : School` (A doctor works in a hospital).</li>
            <li><strong>Object and its Function:</strong> `Pen : Write :: Scissors : Cut` (The function of a pen is to write).</li>
            <li><strong>Category/Type:</strong> `Frog : Amphibian :: Whale : Mammal` (A frog is a type of amphibian).</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Advanced Relationship Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Advanced Relationship Types
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Intensity:</strong> `Warm : Hot :: Cool : Cold` (Hot is a higher intensity of warm).</li>
            <li><strong>Study and Topic:</strong> `Ornithology : Birds :: Botany : Plants` (Ornithology is the study of birds).</li>
            <li><strong>Symbol and Representation:</strong> `Dove : Peace :: White Flag : Surrender` (A dove is a symbol of peace).</li>
            <li><strong>Product and Raw Material:</strong> `Cloth : Fibre :: Paper : Pulp` (Cloth is made from fibre).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify the Relationship:</strong> First, determine the precise relationship between the given pair of words (A and B). Be as specific as possible.</li>
        <li><strong>Form a Bridge Sentence:</strong> Create a clear, simple sentence that connects A and B. This is the most critical step.</li>
        <li><strong>Test the Options:</strong> Apply the exact same bridge sentence to each of the answer choices.</li>
        <li><strong>Eliminate and Select:</strong> The correct answer will be the pair that fits your bridge sentence perfectly. Eliminate all other pairs that do not fit.</li>
      </ol>
    </div>
  );
};


export default WordPattern;
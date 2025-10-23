
import React from 'react';
const CodingDecoding: React.FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 8: Coding & Decoding</h1>

      <p className="mb-4 text-muted-foreground">
        Coding and Decoding is a classic logical reasoning topic that tests your ability to decipher a specific rule or pattern used to code a message. Your task is to identify this hidden pattern and apply it to either decode a given message or code a new one. These questions are designed to test your logical aptitude and pattern recognition skills, not your knowledge of real-world cryptography.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "EJOTY" Rule 🔡
      </h2>
      <p className="mb-2 text-muted-foreground">
        Most coding-decoding puzzles are based on the positions of letters in the English alphabet. The fastest way to solve these is to memorize the position number of each letter. The "EJOTY" rule is a simple mnemonic for this.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border text-center">
        <p className="text-xl font-bold tracking-widest">E - J - O - T - Y</p>
        <p className="text-xl font-bold tracking-widest">5 - 10 - 15 - 20 - 25</p>
        <p className="mt-2 text-muted-foreground">By remembering these five positions, you can quickly find the position of any other letter. For example, if you know J is 10, then K is 11 and H is 8.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Type 1: Letter Coding */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Type 1: Letter Coding (Shifting Letters)
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most common type, where letters of a word are replaced by other letters based on a fixed pattern.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Forward Shifting:</h4>
        <p className="mt-1 text-muted-foreground">Each letter is shifted a certain number of steps forward in the alphabet.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> If `TABLE` is coded as `UCEMF`, how is `CHAIR` coded?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Pattern:</strong> T → U (+1), A → C (+2), B → E (+3), L → P (+4), E → J (+5). The pattern is +1, +2, +3, +4, +5.</li>
            <li><strong>Apply to CHAIR:</strong>
                <ul className="list-circle ml-6">
                    <li>C + 1 = D</li>
                    <li>H + 2 = J</li>
                    <li>A + 3 = D</li>
                    <li>I + 4 = M</li>
                    <li>R + 5 = W</li>
                </ul>
            </li>
            <li className="text-primary"><strong>Solution:</strong> `DJDMW`.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Backward Shifting:</h4>
        <p className="mt-1 text-muted-foreground">Each letter is shifted a certain number of steps backward.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> If `MIND` is coded as `LHM`C, how is `GAME` coded?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Pattern:</strong> M → L (-1), I → H (-1), N → M (-1), D → C (-1). The pattern is a constant -1 shift.</li>
            <li className="text-primary"><strong>Solution:</strong> `FZLD`.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Type 2: Number Coding */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Type 2: Number Coding
      </h2>
       <p className="mb-2 text-muted-foreground">
        In this type, words are assigned numerical codes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Using Positional Values:</h4>
        <p className="mt-1 text-muted-foreground">The code is based on the alphabet position of the letters.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> If `CAT` is coded as `24` (3+1+20), what is the code for `DOG`?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Pattern:</strong> The code is the sum of the positional values of the letters.</li>
            <li><strong>DOG:</strong> D=4, O=15, G=7.</li>
            <li className="text-primary"><strong>Solution:</strong> 4 + 15 + 7 = <strong>26</strong>.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Direct Substitution:</h4>
        <p className="mt-1 text-muted-foreground">Each letter is assigned a specific number. This is a simple substitution cipher.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> If `WORK` is `4-5-9-2` and `LOVE` is `3-5-8-1`, what is the code for `ROVER`?</p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Pattern:</strong> Find the code for each letter from the given examples. R=9, O=5, V=8, E=1.</li>
            <li className="text-primary"><strong>Solution:</strong> `9-5-8-1-9`.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Type 3: Sentence Coding */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Type 3: Sentence Coding (Chinese Coding)
      </h2>
      <p className="mb-2 text-muted-foreground">In this type, a few sentences are given in a coded language, and you need to find the code for a specific word by finding common words and common codes.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: If 'sky is blue' is '8 1 5' and 'blue is beautiful' is '8 5 3', what is the code for 'is'?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Identify Common Words:</strong> The common words in both sentences are 'is' and 'blue'.</li>
            <li><strong>Identify Common Codes:</strong> The common codes are '8' and '5'.</li>
            <li className="text-primary"><strong>Conclusion:</strong> We know that the codes for 'is' and 'blue' must be '8' and '5'. We cannot determine the specific code for 'is' with certainty from this information alone, but it must be either <strong>8 or 5</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Analyze the Pair:</strong> Carefully observe the given word and its code. Write them down one above the other to make comparison easier.</li>
        <li><strong>Check for Simple Patterns First:</strong> Look for direct letter shifts (forward/backward), reversed letters, or direct substitution.</li>
        <li><strong>Use Positional Values:</strong> If letters are coded as numbers, immediately write down the alphabet position of each letter (using EJOTY) and look for a mathematical relationship (sum, product, etc.).</li>
        <li><strong>Look for Opposites:</strong> Check if letters are replaced by their opposites (A↔Z, B↔Y, C↔X, etc.).</li>
        <li><strong>For Sentence Coding:</strong> Find the common words between sentences and match them with the common codes to deduce the pattern.</li>
      </ol>

     
    </div>
  );
};


export default CodingDecoding;
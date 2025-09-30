import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.4: Arrays and Array Methods</h1> */}

      <p className="mb-4 text-muted-foreground">
        Arrays are a fundamental data structure in JavaScript and virtually every other programming language. They are a special type of object used to store an ordered list of values. Mastering how to create, access, and manipulate arrays is a critical skill, especially with the powerful "array methods" that allow you to loop, transform, and filter data with clean, modern syntax.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Labeled Shelf 📚
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of an array as a numbered shelf. You can store different items (values) on this shelf, and each position on the shelf has a specific number, called an **index**.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Arrays can hold any type of data: strings, numbers, booleans, objects, and even other arrays.</li>
            <li>The positions are **zero-indexed**, meaning the first item is at index 0, the second at index 1, and so on.</li>
            <li>The `length` of an array is the total number of items it contains.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Creating and Accessing Array Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Creating and Accessing Array Elements
      </h2>
       <p className="mb-2 text-muted-foreground">
        You create an array using square brackets `[]`.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'// Creating an array of strings'}<br/>
              {'const fruits = ["Apple", "Banana", "Cherry"];'}<br/><br/>
              {'// Accessing elements using their index'}<br/>
              {'console.log(fruits[0]); // "Apple"'}<br/>
              {'console.log(fruits[1]); // "Banana"'}<br/><br/>
              {'// Getting the total number of items'}<br/>
              {'console.log(fruits.length); // 3'}<br/><br/>
              {'// Modifying an element'}<br/>
              {'fruits[1] = "Blueberry";'}<br/>
              {'console.log(fruits); // ["Apple", "Blueberry", "Cherry"]'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Basic Array Methods (Mutating) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Basic Methods for Adding/Removing at the End
      </h2>
       <p className="mb-2 text-muted-foreground">
        These common methods modify the original array directly.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`push()` - Add to End</h4>
            <p className="text-sm text-muted-foreground mt-1">Adds one or more elements to the **end** of an array and returns the new length.</p>
            <pre className="text-xs mt-2"><code>{'fruits.push("Mango");\n// fruits is now ["Apple", "Blueberry", "Cherry", "Mango"]'}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`pop()` - Remove from End</h4>
            <p className="text-sm text-muted-foreground mt-1">Removes the **last** element from an array and returns that element.</p>
            <pre className="text-xs mt-2"><code>{'const lastFruit = fruits.pop();\n// lastFruit is "Mango"\n// fruits is now ["Apple", "Blueberry", "Cherry"]'}</code></pre>
        </div>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Adding/Removing at the Beginning */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Basic Methods for Adding/Removing at the Beginning
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`unshift()` - Add to Start</h4>
            <p className="text-sm text-muted-foreground mt-1">Adds one or more elements to the **beginning** of an array. (Often less performant than `push`).</p>
            <pre className="text-xs mt-2"><code>{'fruits.unshift("Strawberry");\n// fruits is now ["Strawberry", "Apple", ... ]'}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`shift()` - Remove from Start</h4>
            <p className="text-sm text-muted-foreground mt-1">Removes the **first** element from an array.</p>
            <pre className="text-xs mt-2"><code>{'const firstFruit = fruits.shift();\n// firstFruit is "Strawberry"'}</code></pre>
        </div>
      </div>
       
      <hr className="my-6 border-border" />

       {/* 5. Iterating Over Arrays */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Iterating Over Arrays: The Modern Way
      </h2>
       <p className="mb-2 text-muted-foreground">
        While you can use a classic `for` loop, modern JavaScript provides cleaner and more readable methods for looping.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">The `forEach` Method</h4>
           <p className="text-sm text-muted-foreground mt-1">Executes a provided function once for each array element. It's a simple way to loop without managing an index `i`.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'const numbers = [1, 2, 3];'}<br/>
             {'numbers.forEach(function(number, index) {'}<br/>
             {'  console.log(`Item at index ${index} is ${number}`);'}<br/>
             {'});'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 6. Transformative Array Methods */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Transformative Methods (The Big Three)
      </h2>
      <p className="mb-2 text-muted-foreground">
        These are the most powerful array methods in modern JavaScript. They **do not mutate** the original array; instead, they return a **new array**.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border space-y-4">
        <div>
          <h4 className="font-bold text-secondary-foreground">`map()` - To Transform</h4>
          <p className="text-sm text-muted-foreground mt-1">Creates a new array by applying a function to **every element** of the original array.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\n// doubled is [2, 4, 6]'}</code></pre>
        </div>
        <div>
          <h4 className="font-bold text-secondary-foreground">`filter()` - To Select</h4>
          <p className="text-sm text-muted-foreground mt-1">Creates a new array with all elements that **pass a test** (return `true`) from a given function.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(num => num % 2 === 0);\n// evens is [2, 4]'}</code></pre>
        </div>
        <div>
          <h4 className="font-bold text-secondary-foreground">`reduce()` - To Aggregate</h4>
          <p className="text-sm text-muted-foreground mt-1">Executes a "reducer" function on each element, resulting in a **single output value**.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((accumulator, current) => accumulator + current, 0);\n// sum is 15'}</code></pre>
        </div>
      </div>

      <hr className="my-6 border-border" />
      
       {/* 7. Finding Elements in an Array */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Finding Elements in an Array
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong>`find()`:</strong> Returns the **first element** in an array that satisfies a provided testing function.</li>
              <li><strong>`findIndex()`:</strong> Returns the **index** of the first element that satisfies the test.</li>
              <li><strong>`includes()`:</strong> Returns `true` or `false` if an array contains a certain value.</li>
          </ul>
           <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'const fruits = ["Apple", "Banana", "Cherry"];'}<br/>
            {'fruits.find(fruit => fruit === "Banana"); // "Banana"'}<br/>
            {'fruits.findIndex(fruit => fruit === "Cherry"); // 2'}<br/>
            {'fruits.includes("Apple"); // true'}
            </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Arrays
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Prefer Immutable Methods:</strong> Favor methods like `map` and `filter` that return new arrays over methods that mutate the original array. This leads to more predictable and bug-free code, which is a core principle in frameworks like React.</li>
        <li><strong>Chain Methods for Clean Code:</strong> You can chain these methods together to perform complex operations in a very readable way.</li>
        <li><strong>Use `forEach` for Side Effects:</strong> If you just need to do something for each element (like print it to the console) and don't need to create a new array, `forEach` is the perfect tool.</li>
        <li><strong>Know Your Data:</strong> Always be aware of what kind of data your array holds. This will determine which methods are most appropriate to use.</li>
       </ol>
    </div>
  );
};

export default TopicPage;

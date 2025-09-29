import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.5: Objects and Object Methods</h1> */}

      <p className="mb-4 text-muted-foreground">
        Objects are the most fundamental and versatile data structure in JavaScript. While primitive types store a single value (like a number or a string), objects are complex data types used to store a collection of related data and functionality. Almost everything in JavaScript is an object, so understanding them deeply is crucial for becoming a proficient developer.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Real-World Entity 🚗
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of an object in JavaScript just like an object in the real world—a car, a person, a dog. A real-world object has **properties** (like a car's color or a person's name) and **methods** (actions it can perform, like a car's ability to `start()` or a person's ability to `speak()`).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-muted-foreground">In JavaScript, an object is a collection of **key-value pairs**.</p>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Keys (or Properties):</strong> These are strings that act as the name or label for a piece of data.</li>
            <li><strong>Values:</strong> These can be any data type—a string, number, boolean, array, or even another object or a function.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Creating and Accessing Properties */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Creating Objects and Accessing Properties
      </h2>
       <p className="mb-2 text-muted-foreground">
        The most common way to create an object is using object literal syntax (`{}`).
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Creating an Object:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'const person = {'}<br/>
              {'  firstName: "John",'}<br/>
              {'  lastName: "Doe",'}<br/>
              {'  age: 30,'}<br/>
              {'  isStudent: false'}<br/>
              {'};'}
          </code></pre>
          <h4 className="font-bold text-secondary-foreground mt-4">Accessing Properties:</h4>
          <p className="text-sm text-muted-foreground mt-1">There are two ways to access the value of a property:</p>
           <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Dot Notation (Preferred):</strong> Clean and easy to read. `object.key`</li>
            <li><strong>Bracket Notation:</strong> Useful when the key is a variable or contains special characters. `object['key']`</li>
          </ul>
           <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'// Dot Notation'}<br/>
              {'console.log(person.firstName); // "John"'}<br/><br/>
              {'// Bracket Notation'}<br/>
              {'console.log(person["age"]); // 30'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Object Methods */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Object Methods: Giving Objects Behavior
      </h2>
       <p className="mb-2 text-muted-foreground">
        When the value of a property is a function, it is called a **method**. Methods define the actions that an object can perform.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'const person = {'}<br/>
             {'  name: "Alice",'}<br/>
             {'  greet: function() {'}<br/>
             {'    console.log("Hello, my name is " + this.name);'}<br/>
             {'  }'}<br/>
             {'};'}<br/><br/>
             {'// Calling the method'}<br/>
             {'person.greet(); // Outputs: "Hello, my name is Alice"'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The `this` Keyword */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `this` Keyword
      </h2>
      <p className="mb-2 text-muted-foreground">
        The `this` keyword is a special identifier in JavaScript that refers to the **object that is currently executing the code**. Inside an object method, `this` gives you access to the other properties of that same object. In the example above, `this.name` refers to the `name` property of the `person` object.
      </p>
      
       <hr className="my-6 border-border" />
       
       {/* 5. Modifying Objects */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Adding, Modifying, and Deleting Properties
      </h2>
      <p className="mb-2 text-muted-foreground">
        Even if an object is declared with `const`, you can still change, add, or delete its properties. The `const` declaration just means you cannot reassign the variable itself to a new object.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'const user = { name: "Bob" };'}<br/><br/>
            {'// Modifying a property'}<br/>
            {'user.name = "Charlie";'}<br/><br/>
            {'// Adding a new property'}<br/>
            {'user.age = 40;'}<br/><br/>
            {'// Deleting a property'}<br/>
            {'delete user.age;'}<br/><br/>
            {'console.log(user); // { name: "Charlie" }'}
        </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
       {/* 6. Built-in Object Methods */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Useful Built-in Object Methods
      </h2>
      <p className="mb-2 text-muted-foreground">
        JavaScript's global `Object` constructor provides several useful methods for working with objects.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>`Object.keys(obj)`:</strong> Returns an array of an object's own property names (the keys).</li>
            <li><strong>`Object.values(obj)`:</strong> Returns an array of an object's own property values.</li>
            <li><strong>`Object.entries(obj)`:</strong> Returns an array of an object's own `[key, value]` pairs.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'const car = { make: "Ford", model: "Mustang" };'}<br/>
             {'Object.keys(car);   // ["make", "model"]'}<br/>
             {'Object.values(car); // ["Ford", "Mustang"]'}<br/>
             {'Object.entries(car); // [["make", "Ford"], ["model", "Mustang"]]'}
          </code></pre>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Objects vs. Arrays */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. When to Use Objects vs. Arrays
      </h2>
      <p className="mb-2 text-muted-foreground">
        While both can store collections of data, their use cases are different.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Use an Array when:</h4>
            <p className="text-sm text-muted-foreground mt-1">The **order** of the items matters, and the items are a simple, ordered list (e.g., a list of users, a list of posts).</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Use an Object when:</h4>
            <p className="text-sm text-muted-foreground mt-1">You need to store unordered, labeled pieces of data that describe a single entity (e.g., the properties of a user, like `firstName`, `email`, `id`).</p>
        </div>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Objects
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Use Dot Notation by Default:</strong> It's cleaner and easier to read. Only use bracket notation when the property key is stored in a variable or contains special characters.</li>
        <li><strong>Use `const` for Declaration:</strong> Declare your objects with `const` to prevent accidental reassignment of the entire object, which is a common source of bugs.</li>
        <li><strong>Understand `this`:</strong> Remember that `this` in a method refers to the object itself, giving you access to its other properties and methods.</li>
        <li><strong>Leverage Built-in Methods:</strong> Use `Object.keys()`, `Object.values()`, and `Object.entries()` to easily iterate over an object's properties when you need to.</li>
       </ol>
    </div>
  );
};

export default TopicPage;

export interface TrickyQuestion {
  title: string;
  code: string;
  category?: string;
  output: string[];
  explanation: string;
}

export const TRICKY_QUESTIONS: TrickyQuestion[] = [
  // ...existing code...
  {
    title: "Multiplication vs Exponentiation",
    code: "var a = 12;\n\nconsole.log(a * 12);   // Multiplication: 12 * 12\nconsole.log(a ** 12);  // Exponentiation: 12 ^ 12 (12 power 12)",
    output: ["144", "8916100448256"],
    explanation: "* `*` multiplies two numbers.\n* `**` means 'raise to the power of' (equivalent to Math.pow())."
  },
  {
  // ...existing code...
    title: "Implicit Globals without strict mode",
    code: "function useStrict() {\n    salary = 1200;      // No var/let/const → becomes global variable (in non-strict mode)\n    console.log(salary);\n}\nuseStrict();",
    output: ["1200 (without strict)", "ReferenceError (with strict)"],
    explanation: "In strict mode, variables must be declared with let/const/var."
  },
  {
  // ...existing code...
    title: "Functions as Objects",
    code: "function test() {\n    console.log(test.abc);\n}\ntest();             // Logs undefined (property not yet set)\ntest.abc = 200;     \ntest.abc = 300;     \ntest();             // Logs 300",
    output: ["undefined", "300"],
    explanation: "Functions in JS are objects, so we can attach properties."
  },
  {
  // ...existing code...
    title: "Object Equality",
    code: "console.log({} == {});\nconsole.log({} === {});",
    output: ["false", "false"],
    explanation: "{} creates a new object each time → different references."
  },
  {
  // ...existing code...
    title: "Object Spread",
    code: "let one = { name: \"Ravi\" };\nlet two = { ...one };\ntwo.name = \"Raja\";\nconsole.log(one.name);",
    output: ["Ravi"],
    explanation: "Spread creates a shallow copy → `two` is independent from `one`."
  },
  {
  // ...existing code...
    title: "Primitives vs Objects",
    code: "let A = 10;\nlet B = new Number(10);\nlet C = 10;\n\nconsole.log(A === B);\nconsole.log(B === C);",
    output: ["false", "false"],
    explanation: "`new Number(10)` creates an object, not a primitive."
  },
  {
  // ...existing code...
    title: "Object Comparison",
    code: "function testRecord(record) {\n    if (record == { age: 28 }) {\n        console.log(\"You are an adult\");\n    } else if (record === { age: 28 }) {\n        console.log(\"You are still an adult\");\n    } else {\n        console.log(\"No Record\");\n    }\n}\ntestRecord({ age: 28 });",
    output: ["No Record"],
    explanation: "Two objects are never equal unless they reference the same memory."
  },
  {
  // ...existing code...
    title: "Type Coercion",
    code: "console.log(+true);\nconsole.log(!'test');",
    output: ["1", "false"],
    explanation: "`+true` → 1. `'test'` is truthy, so `!` makes it false."
  },
  {
  // ...existing code...
    title: "Object Keys as Strings",
    code: "var a = {};\nvar b = { key: 'b' };\nvar c = { key: 'C' };\n\na[b] = 600;\nb[c] = 700;\n\nconsole.log(a[c]);\nconsole.log(a[b]);\nconsole.log(b[b]);\nconsole.log(b[c]);",
    output: ["600", "600", "700", "700"],
    explanation: "When objects are used as keys, JS converts them to strings ('[object Object]')."
  },
  {
  // ...existing code...
    title: "Merging Strings",
    code: "let str = \"abc\";\nlet str2 = \"123456\";\n\nlet result = \"\";\nlet maxLen = Math.max(str.length, str2.length);\n\nfor (let i = 0; i < maxLen; i++) {\n  if (i < str.length) result += str[i];\n  if (i < str2.length) result += str2[i];\n}\nconsole.log(result);",
    output: ["a1b2c3456"],
    explanation: "Interleaves characters from two strings in order."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Hoisting: var vs let/const",
    "code": "// Hoisting example demonstrating differences between 'var' and 'let/const'\n\nconsole.log(a);   // 'var' is hoisted and initialized with undefined → prints 'undefined'\n// console.log(b); // ReferenceError if uncommented: 'b' is in the Temporal Dead Zone (TDZ)\n\nvar a = 10;       // 'var' declarations are hoisted to function scope & initialized to undefined\nlet b = 20;       // 'let' is block-scoped and not initialized until declaration (TDZ applies)\nconst c = 30;     // 'const' is also block-scoped; must be initialized at declaration\n\nconsole.log(a, b, c); // 10 20 30",
    "output": ["undefined", "10 20 30"],
    "explanation": "Hoisting is JavaScript’s compile-time behavior of registering declarations before code runs. With 'var', both the declaration and a default initialization to 'undefined' are hoisted, so reading 'a' before its line yields 'undefined' instead of throwing. With 'let'/'const', the binding is hoisted but left uninitialized in the Temporal Dead Zone (TDZ) until the declaration executes; any access in the TDZ throws a ReferenceError. 'const' further requires initialization at declaration. In practice, prefer 'let'/'const' to avoid accidental reliance on hoisting and to embrace block scoping."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Closures (State & Encapsulation)",
    "code": "// Closure: inner function retains access to variables of its lexical scope\n\nfunction makeCounter() {          // Outer function creates a private scope\n  let count = 0;                  // Private variable, not exposed directly\n  return function() {             // Returned function closes over 'count'\n    count++;                      // The same 'count' persists across calls\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3",
    "output": ["1", "2", "3"],
    "explanation": "A closure is the combination of a function and the lexical environment within which that function was declared. When 'makeCounter' returns the inner function, that function retains access to 'count' even after 'makeCounter' has finished executing. This enables data privacy (no direct access to 'count') and persistent state without classes. Interview tips: explain that closures underpin callbacks, module patterns, and async flows; mention memory considerations (closed-over variables stay alive) and debug tactics (log the environment or use devtools to inspect closures)."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Event Loop: Microtasks vs Macrotasks",
    "code": "// Demonstrates order: synchronous → microtasks (Promise) → macrotasks (setTimeout)\n\nconsole.log('A');                         // Synchronous\n\nsetTimeout(() => console.log('B'), 0);    // Macrotask (timer queue)\n\nPromise.resolve().then(() => console.log('C')); // Microtask (then job)\n\nconsole.log('D');                         // Synchronous\n// Expected order: A, D, C, B",
    "output": ["A", "D", "C", "B"],
    "explanation": "JavaScript executes in a single thread with an event loop that processes different queues. First, all synchronous code runs to completion. Then the engine drains the microtask queue (Promise reactions, queueMicrotask, MutationObserver). Only after microtasks are exhausted does it take the next macrotask (timers, I/O, postMessage). In this snippet: 'A' and 'D' log immediately, the Promise microtask logs 'C' next, and the 0 ms timer logs 'B' last. In interviews, articulate why microtasks can starve macrotasks if you schedule them in a loop, and how this affects UI responsiveness."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Promises vs async/await (equivalence & ergonomics)",
    "code": "// Same logic with Promises and async/await for readability comparison\n\nfunction fetchData(value) {                     // Simulated async work\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(value * 2), 100);  // resolve after 100ms\n  });\n}\n\n// Using Promises\nfetchData(10)\n  .then(v => fetchData(v))                      // chain\n  .then(v => console.log('Promise:', v));\n\n// Using async/await\n(async function() {\n  try {\n    const v1 = await fetchData(10);\n    const v2 = await fetchData(v1);\n    console.log('async/await:', v2);\n  } catch (e) {\n    console.error('Error:', e);\n  }\n})();",
    "output": ["Promise: 20", "async/await: 20"],
    "explanation": "Promises provide a composable API for representing eventual results. 'async/await' is syntax built on top of Promises that flattens control flow and improves readability. 'await' pauses within the async function until the Promise settles; errors propagate as rejections and can be handled with try/catch. For concurrency, use 'Promise.all' to run independent tasks in parallel and 'Promise.allSettled' when you must collect results regardless of failures. Mention pitfalls: forgetting 'return' in a '.then' chain, mixing callbacks with promises, or serializing independent awaits that could run concurrently."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Prototype & Inheritance (constructor function)",
    "code": "// Prototype-based inheritance: instances delegate to FunctionName.prototype\n\nfunction Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHi = function() {\n  return \"Hi, I'm \" + this.name;\n};\n\nconst p = new Person('Ravi');\nconsole.log(p.sayHi());\nconsole.log(Object.getPrototypeOf(p) === Person.prototype);",
    "output": ["Hi, I'm Ravi", "true"],
    "explanation": "JS uses prototype delegation: objects have an internal [[Prototype]] that forms a chain for property lookup. A function’s 'prototype' object becomes the [[Prototype]] of instances when invoked with 'new'. Methods on 'Person.prototype' are shared across all instances, saving memory versus defining methods per instance. ES6 'class' is syntactic sugar over this system. Interview angle: explain how method lookup traverses the chain, how to add shared methods, and when to use 'Object.create' for prototype-only patterns."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "The 'this' keyword + call/apply/bind",
    "code": "function greet(greeting, punctuation) {\n  console.log(greeting + ', ' + this.name + punctuation);\n}\n\nconst user = { name: 'Ravi' };\n\ngreet.call(user, 'Hello', '!');     // call: args individually\ngreet.apply(user, ['Hi', '!!']);    // apply: args as array\nconst bound = greet.bind(user, 'Namaste'); // bind: returns a new function\nbound('!!!');",
    "output": ["Hello, Ravi!", "Hi, Ravi!!", "Namaste, Ravi!!!"],
    "explanation": "'this' is determined by the call site. 'call' and 'apply' invoke a function immediately with an explicit receiver; 'apply' differs only in argument packaging. 'bind' returns a new function with 'this' and optional leading arguments fixed, which is handy for event handlers and callbacks. Note that arrow functions do not have their own 'this'; they capture the lexical 'this' from the surrounding scope. In strict mode, passing null/undefined to call/apply leaves 'this' as null/undefined; in sloppy mode it becomes the global object."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Shallow vs Deep Copy (and pitfalls)",
    "code": "const original = { name: 'Ravi', meta: { age: 28, skills: ['TS', 'Angular'] } };\n\n// Shallow copies\nconst copy1 = Object.assign({}, original);\nconst copy2 = { ...original };\n\ncopy1.meta.age = 29;   // Mutates original.meta because 'meta' reference is shared\nconsole.log(original.meta.age); // 29\n\n// Simple deep copy (lossy for functions/Date/Map/Set/etc.)\nconst deep = JSON.parse(JSON.stringify(original));\ndeep.meta.age = 30;\nconsole.log(original.meta.age); // 29",
    "output": ["29", "29"],
    "explanation": "Shallow copies duplicate only the first level; nested objects remain shared references. Mutating a nested structure in a shallow copy affects the source. For deep copies, JSON round-tripping is quick but lossy (drops functions, undefined, Dates, Maps/Sets). Use 'structuredClone' (where available) or libraries for robust cloning. In UI state management, prefer immutability: replace nested objects with new references rather than mutating in place, enabling cheap change detection."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Debounce vs Throttle (performance pattern)",
    "code": "// Debounce: run only after events stop for N ms\nfunction debounce(fn, delay) {\n  let t;\n  return function(...args) {\n    clearTimeout(t);\n    t = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\n// Throttle: run at most once every N ms\nfunction throttle(fn, interval) {\n  let last = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - last >= interval) {\n      last = now;\n      fn.apply(this, args);\n    }\n  };\n}",
    "output": [],
    "explanation": "Debounce groups bursts of events (like keypresses) and invokes the handler once after activity stops—great for search-as-you-type or resize. Throttle guarantees a maximum call rate—useful for scroll/mousemove. Discuss leading vs trailing edge options, how to cancel pending debounced calls, and ensuring 'this' and arguments are preserved. These patterns improve responsiveness and reduce unnecessary work."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Rest & Spread (arrays/objects)",
    "code": "const arr = [1,2,3];\nconst newArr = [...arr, 4];                // spread array\nconsole.log(newArr);                        // [1,2,3,4]\n\nfunction sum(...nums) {                     // rest: collects args\n  return nums.reduce((a,b) => a+b, 0);\n}\nconsole.log(sum(1,2,3));                   // 6\n\nconst obj = { a:1, b:2 };\nconst obj2 = { ...obj, b:99, c:3 };        // spread + override order matters\nconsole.log(obj2);                          // { a:1, b:99, c:3 }",
    "output": ["[1,2,3,4]", "6", "{ a: 1, b: 99, c: 3 }"],
    "explanation": "Spread expands arrays or object properties; rest gathers remaining parameters into an array. Spread is ideal for non-mutating updates (state), concatenation, and cloning (shallow). Order matters for object spread—later properties override earlier ones. Rest parameters replace the legacy 'arguments' object with a real array, making code clearer and safer."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Equality: == vs === (coercion)",
    "code": "console.log(0 == false);    // true (coerces false → 0)\nconsole.log(0 === false);   // false (number vs boolean)\nconsole.log('5' == 5);      // true (coerces '5' → 5)\nconsole.log('5' === 5);     // false (string vs number)",
    "output": ["true", "false", "true", "false"],
    "explanation": "'==' performs type coercion before comparison, leading to surprising results and edge cases (e.g., '' == 0 is true, null == undefined is true). '===' compares without coercion, ensuring both type and value match. Use '===' by default and convert types explicitly for clarity. In interviews, cite notable coercions and why strict equality avoids them."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Scope: Function vs Block vs Global",
    "code": "function demo() {\n  if (true) {\n    var x = 1;         // function-scoped\n    let y = 2;         // block-scoped\n    const z = 3;       // block-scoped\n  }\n  console.log(x);      // 1\n  // console.log(y);   // ReferenceError\n  // console.log(z);   // ReferenceError\n}\n demo();",
    "output": ["1"],
    "explanation": "'var' binds to the nearest function or global scope, leaking out of blocks; 'let' and 'const' are block-scoped, contained within braces. Block scoping reduces accidental shadowing and improves reasoning. Combine with 'const-by-default' to signal intent and prevent unintended reassignment."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Currying (partial application)",
    "code": "function add(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;  // uses outer variables via closure\n    };\n  };\n}\n\nconsole.log(add(1)(2)(3)); // 6",
    "output": ["6"],
    "explanation": "Currying transforms a function of N parameters into N nested single-parameter functions, enabling partial application: 'const add1 = add(1);'. It improves composability and reuse in functional programming. Be mindful of readability in imperative codebases and prefer helper utilities to curry automatically when desired."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Higher-Order Functions (map/filter/reduce mindset)",
    "code": "function map(arr, fn) {\n  const out = [];\n  for (const v of arr) out.push(fn(v));\n  return out;\n}\n\nconsole.log(map([1,2,3], x => x * 2)); // [2,4,6]",
    "output": ["[2,4,6]"],
    "explanation": "A higher‑order function takes functions as inputs and/or returns functions. This elevates behavior to first-class data, enabling powerful abstractions. Built-in HOFs include map, filter, reduce, some, every. Discuss benefits (declarative style, reuse) and trade-offs (allocation and callback overhead, debugging stack traces)."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "IIFE (Immediately Invoked Function Expression)",
    "code": "(function() {\n  const secret = 'scoped';\n  console.log('IIFE ran with', secret);\n})();",
    "output": ["IIFE ran with scoped"],
    "explanation": "Before modules and block scoping, IIFEs were a common pattern to create private scopes and avoid global pollution. Wrapping a function in parentheses forces it to be parsed as an expression, which can then be invoked immediately. Still useful for one-time initialization and isolating variables from the global scope."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Null vs Undefined vs NaN",
    "code": "console.log(typeof undefined); // 'undefined'\nconsole.log(typeof null);      // 'object' (historic quirk)\nconsole.log(Number('x'));      // NaN\nconsole.log(isNaN(NaN));       // true",
    "output": ["undefined", "object", "NaN", "true"],
    "explanation": "'undefined' means a variable exists but has no value; 'null' is an intentional 'no value'. 'typeof null' returning 'object' is a legacy bug preserved for compatibility. 'NaN' results from invalid numeric operations; note that NaN is not equal to itself. Prefer 'Number.isNaN' over 'isNaN' to avoid coercion pitfalls."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "ES6 Highlights: Arrow functions & Destructuring",
    "code": "const add = (a, b) => a + b;         // concise arrow\nconst person = { name: 'Ravi', age: 28 };\nconst { name, age } = person;              // object destructuring\nconst arr = [1,2,3];\nconst [first, ...rest] = arr;              // array destructuring + rest\n\nconsole.log(add(2,3));    // 5\nconsole.log(name, age);   // Ravi 28\nconsole.log(first, rest); // 1 [2,3]",
    "output": ["5", "Ravi 28", "1 [2,3]"],
    "explanation": "Arrows provide shorter syntax and lexical 'this' (no own 'this', 'arguments', or 'prototype'), making them ideal for callbacks but unsuitable as methods requiring dynamic receivers. Destructuring succinctly extracts properties and elements; combine with defaults and renaming for clarity. These features improve readability and reduce boilerplate."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Map, Set, WeakMap, WeakSet (when to use)",
    "code": "const m = new Map();\nm.set({id:1}, 'value');                 // object keys without coercion\nconsole.log(m.size);                     // 1\n\nconst s = new Set([1,2,2,3]);\nconsole.log([...s]);                     // [1,2,3]",
    "output": ["1", "[1,2,3]"],
    "explanation": "Map stores key→value with any key type (no string coercion), maintains insertion order, and offers predictable iteration. Set stores unique values. WeakMap/WeakSet hold weak references, allowing garbage collection when there are no other references; they are not iterable and don’t expose size—useful for caches and metadata. Prefer Map over plain objects when keys are not strings/symbols."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "for…in vs for…of (keys vs values)",
    "code": "const arr = [10, 20, 30];\nfor (const i in arr) {             // indexes as strings (enumerable keys)\n  // console.log(i);               // '0', '1', '2'\n}\nfor (const v of arr) {             // values from iterable\n  // console.log(v);               // 10, 20, 30\n}",
    "output": [],
    "explanation": "'for…in' iterates enumerable property names (including inherited ones) and is generally avoided for arrays. 'for…of' iterates values from any iterable (arrays, strings, Maps/Sets). Use Object.keys/values/entries for object iteration to avoid surprises from the prototype chain."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Primitive vs Reference Types (copy semantics)",
    "code": "let x = 5;\nlet y = x;\ny++;\nconsole.log(x, y); // 5 6\n\nconst o1 = { n: 1 };\nconst o2 = o1;\no2.n = 9;\nconsole.log(o1.n); // 9",
    "output": ["5 6", "9"],
    "explanation": "Primitives (number, string, boolean, null, undefined, symbol, bigint) are immutable and copied by value. Objects/arrays/functions are reference types; assignment copies the reference, so mutations through any alias affect the same object. This underpins immutability strategies in state management—you must replace objects rather than mutate them to signal changes."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Garbage Collection (reachability & leaks)",
    "code": "let temp = { data: new Array(1000).fill(0) };\n// ...use temp\ntemp = null; // drop last reference → eligible for GC",
    "output": [],
    "explanation": "JS runtimes use reachability analysis (often mark-and-sweep) to reclaim memory for objects no longer reachable from roots (global, current stack). Developers should still prevent leaks by clearing timers, removing event listeners, nulling large caches, and avoiding accidental global variables. Use devtools’ memory profiling and allocation timelines to track down leaks."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Type Coercion Gotchas (+true, []+{})",
    "code": "console.log(+true);        // 1 (boolean → number)\nconsole.log([] + {});      // '[object Object]' (string concatenation)\nconsole.log('5' - 2);      // 3 ('5' → 5, numeric subtraction)\nconsole.log('5' + 2);      // '52' (string concatenation)",
    "output": ["1", "[object Object]", "3", "52"],
    "explanation": "The '+' operator concatenates if either operand is a string, while '-' always attempts numeric conversion. Unary plus coerces to number. Arrays stringify to the result of 'join' (empty array → ''), and plain objects to '[object Object]'. Prefer explicit conversions (Number(), String()) and strict equality to keep intent clear and avoid coercion traps."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Arrow functions vs regular functions (this & usage)",
    "code": "const obj = {\n  value: 42,\n  regular() { return this.value; },            // 'this' depends on call-site\n  arrow: () => this                            // arrow captures lexical 'this' (likely global)\n};\n\nconsole.log(obj.regular());                 // 42\nconst f = obj.regular;\nconsole.log(f());                           // undefined in strict mode\nconst bound = obj.regular.bind(obj);\nconsole.log(bound());                       // 42",
    "output": ["42", "undefined", "42"],
    "explanation": "Regular functions have dynamic 'this' determined by how they’re called; extracting a method loses its receiver. 'bind' permanently associates a receiver. Arrow functions capture the 'this' of the surrounding lexical scope, making them ideal for callbacks where you don’t want 'this' to change, but unsuitable as methods that should act on different receivers."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Temporal Dead Zone (TDZ)",
    "code": "// console.log(x); // ReferenceError: Cannot access 'x' before initialization\nlet x = 1;",
    "output": [],
    "explanation": "The TDZ spans from the start of a scope to the declaration line for 'let'/'const' bindings. Accessing the identifier in this window throws a ReferenceError, even though the name is known to the engine. TDZ encourages predictable initialization order and prevents the 'use-before-declare' bugs common with 'var'."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "JSON.stringify quirks (undefined/functions/Date)",
    "code": "console.log(JSON.stringify({ a: 1, b: undefined }));     // '{\"a\":1}' (undefined omitted)\nconsole.log(JSON.stringify({ d: new Date('2020-01-01') })); // ISO string\nconsole.log(JSON.stringify({ f: () => 1 }));                 // '{}' (functions omitted)",
    "output": ["{\"a\":1}", "{\"d\":\"2020-01-01T00:00:00.000Z\"}", "{}"],
    "explanation": "'JSON.stringify' drops properties with undefined or function values (arrays get 'null' for 'undefined'). Date objects serialize to ISO strings. Customize with a replacer function or 'toJSON' method. JSON cannot represent Maps, Sets, BigInt, or circular references without special handling (e.g., replacers or libraries)."
  },
  {
  // ...existing code...
    "category": "JavaScript Core",
    "title": "Optional chaining (?.) & Nullish coalescing (??)",
    "code": "const api = { user: null };\nconst name = api.user?.profile?.name;   // safely access deep path → undefined\nconst display = name ?? 'Anonymous';     // default only if null/undefined\nconsole.log(display);                    // 'Anonymous'",
    "output": ["Anonymous"],
    "explanation": "Optional chaining short-circuits when a property access would hit null/undefined, returning undefined instead of throwing—ideal for uncertain API data. Nullish coalescing uses the right-hand default only when the left-hand side is null or undefined (unlike '||', which treats '', 0, and false as falsy). Together they reduce defensive code and clarify intent in data‑heavy applications."
  },
  {
  // ...existing code...
    "title": "Object Equality in JavaScript",
    "code": "// Each {} creates a new object in memory\nconsole.log({} == {});   // Comparing two different objects\nconsole.log({} === {});  // Strict equality still checks reference",
    "output": ["false", "false"],
    "explanation": "In JavaScript, objects are reference types. Even if two objects look identical, they occupy different places in memory. Equality (==) and strict equality (===) both check reference identity when it comes to objects. Hence, two different object literals are never equal."
  },
  {
  // ...existing code...
    "title": "Functions as Objects with Properties",
    "code": "function test() {\n    console.log(test.value); // Accessing a property attached to the function object\n}\n\ntest(); // At this point, no property exists on test\n\ntest.value = 100; // Adding a custom property to the function object\ntest(); // Now property is available",
    "output": ["undefined", "100"],
    "explanation": "Functions in JavaScript are first-class objects. This means they can have properties and methods like any other object. Here, 'test.value' is undefined at first, but after assigning, it retains the property just like an object would."
  },
  {
  // ...existing code...
    "title": "Implicit Globals without Declaration",
    "code": "function demo() {\n    implicitVar = 50; // No var/let/const, creates global variable in non-strict mode\n    console.log(implicitVar);\n}\ndemo();",
    "output": ["50"],
    "explanation": "If a variable is assigned without 'var', 'let', or 'const', it becomes a global property in non-strict mode. This is dangerous as it pollutes the global scope. With 'use strict', this would throw a ReferenceError instead."
  },
  {
  // ...existing code...
    "title": "Primitive vs Object Wrapper (Number)",
    "code": "let a = 10;             // Primitive number\nlet b = new Number(10); // Number object\n\nconsole.log(a === b);   // Strict equality between primitive and object\nconsole.log(b == a);    // Loose equality, object is coerced to primitive",
    "output": ["false", "true"],
    "explanation": "Primitive values like 10 are stored directly, while 'new Number(10)' creates an object wrapper. Strict equality (===) fails because the types differ, but loose equality (==) coerces the Number object to its primitive value, so it matches."
  },
  {
  // ...existing code...
    "title": "Objects as Keys",
    "code": "let obj = {};\nlet key1 = { id: 1 };\nlet key2 = { id: 2 };\n\nobj[key1] = \"value1\"; // key1 converted to string \"[object Object]\"\nobj[key2] = \"value2\"; // key2 also becomes \"[object Object]\"\n\nconsole.log(obj[key1]);",
    "output": ["value2"],
    "explanation": "When objects are used as keys in plain objects, they are automatically converted to strings ('[object Object]'). Since both key1 and key2 stringify to the same value, the second assignment overrides the first. To avoid this, use Map instead of plain objects for object keys."
  },
  {
  // ...existing code...
    "title": "Type Coercion with Booleans",
    "code": "console.log(+true);   // Unary + converts true to number\nconsole.log(!'hello'); // 'hello' is truthy, so ! makes it false",
    "output": ["1", "false"],
    "explanation": "The unary plus operator (+) attempts to convert its operand into a number. For true, that becomes 1. A non-empty string like 'hello' is truthy, so logical NOT (!) makes it false."
  },
  {
  // ...existing code...
    "title": "Array Holes",
    "code": "let arr = [1, , 3]; // Array with a 'hole' at index 1\n\nconsole.log(arr.length);\nconsole.log(arr[1]);\nconsole.log(1 in arr); // Checks if index exists",
    "output": ["3", "undefined", "false"],
    "explanation": "JavaScript arrays can have holes (missing elements). The length property still counts the highest index + 1, so [1, , 3] has length 3. Accessing arr[1] returns undefined, but it is not the same as an index explicitly holding 'undefined'. The 'in' operator shows the index does not exist."
  },
  {
  // ...existing code...
    "title": "typeof null",
    "code": "console.log(typeof null);",
    "output": ["object"],
    "explanation": "This is a long-standing JavaScript bug. 'null' is a primitive, not an object, but 'typeof null' incorrectly returns 'object'. It is kept this way for backward compatibility."
  },
  {
  // ...existing code...
    "title": "Floating Point Precision",
    "code": "console.log(0.1 + 0.2);",
    "output": ["0.30000000000000004"],
    "explanation": "JavaScript uses IEEE 754 floating-point arithmetic, which cannot precisely represent some decimals like 0.1 and 0.2. Adding them results in a tiny precision error, producing 0.30000000000000004 instead of exactly 0.3."
  },
  {
  // ...existing code...
    "title": "Destructuring with Defaults",
    "code": "let { x = 5, y = 10 } = { x: 20 };\n\nconsole.log(x, y);",
    "output": ["20", "10"],
    "explanation": "Object destructuring allows default values. Here, x gets 20 from the object, overriding the default, while y is missing, so it falls back to 10."
  },
  {
  // ...existing code...
    "title": "Deleting Properties vs Variables",
    "code": "let obj = { a: 1 };\ndelete obj.a; // Works, properties can be deleted\n\nvar x = 10;\ndelete x;    // Does not delete declared variables\n\nconsole.log(obj.a);\nconsole.log(x);",
    "output": ["undefined", "10"],
    "explanation": "The delete operator can remove properties from objects, but it cannot delete variables declared with var, let, or const. Variables remain unaffected."
  },
  {
  // ...existing code...
    "title": "Spread Operator Quirks",
    "code": "console.log([...'hi']); // Spread string into array of characters\nconsole.log({ ...{ a: 1 }, b: 2 }); // Spread properties of objects",
    "output": [`["h", "i"], { "a": 1, "b": 2 }`],
    "explanation": "Spread works on iterables like strings, breaking them into characters. For objects, spread copies own enumerable properties into a new object."
  },
  {
  // ...existing code...
    "title": "String Immutability",
    "code": "let str = \"hello\";\nstr[0] = \"H\";\nconsole.log(str);",
    "output": ["hello"],
    "explanation": "Strings in JavaScript are immutable. You cannot change a character by index. Attempting to do so has no effect."
  },
  {
  // ...existing code...
    "title": "arguments Object",
    "code": "function demo(a, b) {\n    console.log(arguments[0]); // First argument\n    console.log(arguments[1]); // Second argument\n}\ndemo(5, 10);",
    "output": ["5", "10"],
    "explanation": "The 'arguments' object provides access to all arguments passed to a function, even if parameters are not defined. It is array-like but not a true array."
  },
  {
  // ...existing code...
    "title": "Rest Parameter Precedence",
    "code": "function test(a, ...rest) {\n    console.log(a);\n    console.log(rest);\n}\ntest(1, 2, 3, 4);",
    "output": [`"1", [2, 3, 4]`],
    "explanation": "The first argument goes to 'a', and the rest of the arguments are collected into the 'rest' array. This is useful for variable-length parameter functions."
  },
  {
  // ...existing code...
    "title": "Promise Chain vs async/await",
    "code": "function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\n// Using .then()\ndelay(500).then(() => console.log('done with then'));\n\n// Using async/await\n(async () => {\n    await delay(500);\n    console.log('done with await');\n})();",
    "output": ["done with then", "done with await"],
    "explanation": "Both .then() and async/await handle promises. async/await is syntactic sugar for promises, making asynchronous code look synchronous."
  },
  {
  // ...existing code...
    "title": "setTimeout vs setImmediate vs process.nextTick",
    "code": "setTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nprocess.nextTick(() => console.log('nextTick'));",
    "output": ["nextTick", "promise", "timeout"],
    "explanation": "In Node.js, process.nextTick callbacks run before promise microtasks, and both run before the event loop's macrotasks like setTimeout. So the order is nextTick → promise → timeout."
  },
  {
  // ...existing code...
    "title": "Closures inside Loops",
    "code": "for (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);\n}\n\nfor (let j = 0; j < 3; j++) {\n    setTimeout(() => console.log(j), 100);\n}",
    "output": ["3", "3", "3", "0", "1", "2"],
    "explanation": "Using 'var', there is only one shared variable 'i', so by the time callbacks run, i = 3. Using 'let' creates a new binding per iteration, so outputs are 0, 1, 2 as expected."
  },
  {
  // ...existing code...
    "title": "Function Hoisting vs Arrow Function",
    "code": "console.log(normal());\n// console.log(arrow()); // Error if uncommented\n\nfunction normal() {\n    return 'I am hoisted';\n}\n\nconst arrow = () => 'I am not hoisted';",
    "output": ["I am hoisted"],
    "explanation": "Function declarations are hoisted, so they can be called before their definition. Arrow functions assigned to const/let are not hoisted the same way, and calling them before declaration results in a ReferenceError."
  },
  {
  // ...existing code...
    "title": "delete and Array Length",
    "code": "let arr = [1, 2, 3];\ndelete arr[1]; // Removes value but leaves a hole\nconsole.log(arr.length);",
    "output": ["3"],
    "explanation": "Deleting an array element leaves a hole, it does not reindex or reduce length. The array length remains unchanged."
  },
  {
  // ...existing code...
    "title": "NaN Comparisons",
    "code": "console.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));",
    "output": ["false", "true"],
    "explanation": "NaN is the only value in JavaScript that is not equal to itself. Object.is provides a more precise comparison, treating NaN equal to NaN."
  },
  {
  // ...existing code...
    "title": "Infinity Operations",
    "code": "console.log(1 / 0);\nconsole.log(-1 / 0);",
    "output": ["Infinity", "-Infinity"],
    "explanation": "Dividing by zero in JavaScript does not throw an error; it returns Infinity or -Infinity depending on the sign."
  },
  {
  // ...existing code...
    "title": "JSON.stringify Quirks",
    "code": "console.log(JSON.stringify({ a: undefined, b: function() {}, c: Symbol('id') }));",
    "output": ["{}"],
    "explanation": "JSON.stringify ignores properties with values undefined, functions, or symbols. They are omitted from the JSON string."
  },
  {
  // ...existing code...
  "title": "Array Sort with Numbers",
  "code": "let nums = [10, 1, 5];\nconsole.log(nums.sort());\nconsole.log(nums.sort((a, b) => a - b));",
  "output": ["[1,10,5]", "[1,5,10]"],
  "explanation": "By default, Array.sort converts elements to strings and sorts lexicographically. Passing a comparator ensures numeric sorting."
  },
  {
  // ...existing code...
    "title": "Template Literals with Expressions",
    "code": "let a = 5;\nlet b = 10;\nconsole.log(`Sum is ${a + b}`);",
    "output": ["Sum is 15"],
    "explanation": "Template literals allow embedded expressions using ${}. They make string concatenation easier and more readable."
  },
  {
  // ...existing code...
    "title": "What are Angular Lifecycle Hooks?",
    "code": "// Lifecycle Hooks Example\nimport { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit } from '@angular/core';\n\n@Component({ selector: 'app-demo', template: '<p>Demo Works!</p>' })\nexport class DemoComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit {\n  ngOnInit() { console.log('ngOnInit: Component initialized'); }\n  ngOnChanges() { console.log('ngOnChanges: Called when input properties change'); }\n  ngDoCheck() { console.log('ngDoCheck: Custom change detection logic'); }\n  ngAfterViewInit() { console.log('ngAfterViewInit: Component views initialized'); }\n  ngOnDestroy() { console.log('ngOnDestroy: Cleanup before component is destroyed'); }\n}",
    "output": ["ngOnInit: Component initialized", "ngOnChanges: Called when input properties change", "ngDoCheck: Custom change detection logic", "ngAfterViewInit: Component views initialized", "ngOnDestroy: Cleanup before component is destroyed"],
    "explanation": "Angular lifecycle hooks are special methods that allow developers to tap into key moments in a component's life. Common ones include ngOnInit (runs after data-bound properties are set), ngOnChanges (called whenever an input property changes), ngDoCheck (custom change detection), ngAfterViewInit (when component views are initialized), and ngOnDestroy (cleanup logic). These hooks are essential for managing data fetching, performance, and memory management."
  },
  {
  // ...existing code...
    "title": "What are Angular Directives?",
    "code": "// Attribute Directive Example\n<p [ngClass]=\"{ 'highlight': isActive }\">Highlight me if active</p>\n\n// Structural Directive Example\n<ul>\n  <li *ngFor=\"let item of items\">{{ item }}</li>\n</ul>",
    "output": ["Applies CSS class highlight conditionally", "Iterates through items and renders list"],
    "explanation": "Directives are classes that add additional behavior to elements in Angular applications. There are three types: (1) Components: directives with a template, used for UI building blocks. (2) Structural Directives like *ngIf, *ngFor, which change the DOM structure by adding/removing elements. (3) Attribute Directives like ngClass and ngStyle that modify the behavior or appearance of existing elements. They make Angular templates dynamic and interactive."
  },
  {
  // ...existing code...
    "title": "Explain Data Binding Types in Angular.",
    "code": "// Interpolation\n<p>{{ username }}</p>\n\n// Property Binding\n<img [src]=\"imageUrl\" />\n\n// Event Binding\n<button (click)=\"onClick()\">Click Me</button>\n\n// Two-way Binding\n<input [(ngModel)]=\"username\" />",
    "output": ["Displays username", "Binds image source", "Handles click events", "Two-way sync between input and model"],
    "explanation": "Angular supports four types of data binding: (1) Interpolation ({{}}) to display dynamic values. (2) Property Binding [ ] to bind DOM properties to component fields. (3) Event Binding ( ) to handle DOM events like clicks. (4) Two-way Binding [( )] using ngModel, which synchronizes data between the component and view. Together, these create a powerful reactive UI system that ensures seamless flow of data."
  },
  {
  // ...existing code...
    "title": "Explain Dependency Injection in Angular.",
    "code": "// Service\n@Injectable({ providedIn: 'root' })\nexport class DataService { getData() { return 'Some Data'; } }\n\n// Component\n@Component({ selector: 'app-root', template: '{{ data }}' })\nexport class AppComponent {\n  data: string;\n  constructor(private service: DataService) {\n    this.data = service.getData();\n  }\n}",
    "output": ["Displays 'Some Data'"],
    "explanation": "Dependency Injection (DI) in Angular is a design pattern that allows classes to request dependencies from external sources rather than creating them. Services are typically provided via Angular's injector. This improves modularity, reusability, and testing. Angular has a hierarchical injector system, so child injectors can override parent services, providing fine-grained control."
  },
  {
  // ...existing code...
    "title": "What are Angular Modules?",
    "code": "// app.module.ts\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, FormsModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}",
    "output": ["Bootstraps AppComponent"],
    "explanation": "An Angular module (NgModule) is a container for a cohesive block of code dedicated to an application domain, workflow, or closely related set of capabilities. Every Angular app has at least one root module (AppModule). Modules declare components, directives, and pipes, import other modules, and can export subsets of functionality. This modular approach allows large apps to be split into smaller, maintainable chunks."
  },
  {
  // ...existing code...
    "title": "Explain Angular Services.",
    "code": "@Injectable({ providedIn: 'root' })\nexport class DataService {\n  private items = ['Item1', 'Item2'];\n  getItems() { return this.items; }\n}",
    "output": ["Provides reusable data and logic"],
    "explanation": "Services are singleton classes in Angular designed to hold reusable logic, data, or functions. They can be injected into components, directives, and other services using Angular's DI. Common use cases include handling HTTP calls, sharing state between components, and encapsulating business logic. Keeping this logic in services rather than components helps keep components clean and focused on the view."
  },
  {
  // ...existing code...
    "title": "What is RxJS and how is it used in Angular?",
    "code": "import { of } from 'rxjs';\nconst obs$ = of(1, 2, 3);\nobs$.subscribe(value => console.log(value));",
    "output": ["1", "2", "3"],
    "explanation": "RxJS is a library for reactive programming using Observables. Angular uses RxJS extensively for asynchronous operations, including HTTP requests, forms, and event streams. Observables emit sequences of values over time, and consumers can subscribe to react to these values. RxJS operators like map, filter, switchMap, and debounceTime allow developers to transform and handle data streams in a declarative way."
  },
  {
  // ...existing code...
    "title": "Explain Angular Pipes.",
    "code": "// Built-in pipes\n<p>{{ today | date:'shortDate' }}</p>\n<p>{{ name | uppercase }}</p>\n\n// Custom pipe\n@Pipe({ name: 'exclaim' })\nexport class ExclaimPipe implements PipeTransform {\n  transform(value: string): string { return value + '!!!'; }\n}",
    "output": ["Formatted date", "NAME in uppercase", "Adds exclamation marks"],
    "explanation": "Pipes in Angular transform displayed data without altering the underlying object. Angular provides built-in pipes like date, currency, uppercase, lowercase, etc. Developers can also create custom pipes by implementing the PipeTransform interface. Pipes are pure by default, meaning they are executed only when input changes, but they can be marked impure to run more frequently."
  },
  {
  // ...existing code...
    "title": "Explain Angular Routing Basics.",
    "code": "const routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })\nexport class AppRoutingModule {}",
    "output": ["Navigates between Home and About components"],
    "explanation": "Angular Router allows developers to define routes to navigate between different views or components. A route maps a URL path to a component. RouterModule.forRoot() configures root-level routing, while RouterModule.forChild() is used for feature modules. Angular supports features like route parameters, guards, lazy loading, and nested routes for complex navigation scenarios."
  },
  {
  // ...existing code...
    "title": "What are Route Guards in Angular?",
    "code": "// Auth Guard Example\n@Injectable({ providedIn: 'root' })\nexport class AuthGuard implements CanActivate {\n  constructor(private authService: AuthService, private router: Router) {}\n  canActivate(): boolean {\n    if (this.authService.isLoggedIn()) return true;\n    this.router.navigate(['/login']);\n    return false;\n  }\n}",
    "output": ["Allows or denies access based on login state"],
    "explanation": "Route Guards control access to routes based on conditions. Types include CanActivate (before activating a route), CanDeactivate (before leaving a route), Resolve (pre-fetching data before navigation), and CanLoad (before loading lazy modules). They improve security and user experience by ensuring users only access allowed parts of the app."
  },
  {
  // ...existing code...
    "title": "What is Lazy Loading in Angular?",
    "code": "const routes: Routes = [\n  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }\n];",
    "output": ["Loads AdminModule only when navigating to /admin"],
    "explanation": "Lazy loading allows Angular to load feature modules on demand rather than at startup. This reduces the initial bundle size and improves app load performance. It is implemented using loadChildren in the route configuration. Lazy loading is often combined with route guards for securing modules, and is critical in large applications for performance optimization."
  },
  {
  // ...existing code...
    "title": "Explain Angular Forms: Template-driven vs Reactive.",
    "code": "// Template-driven\n<form #f=\"ngForm\">\n  <input name=\"username\" ngModel required />\n</form>\n\n// Reactive\nthis.form = new FormGroup({ username: new FormControl('', Validators.required) });",
    "output": ["Template-driven forms use ngModel", "Reactive forms use FormGroup and FormControl"],
    "explanation": "Angular provides two approaches to building forms: (1) Template-driven forms use directives like ngModel in templates, are easier for simple forms, but less scalable. (2) Reactive forms use explicit FormControl and FormGroup instances in the component class, providing better control, validation, and testability for complex forms. Reactive forms are preferred in large applications."
  },
  {
  // ...existing code...
    "title": "What are Angular Reactive Form Validators?",
    "code": "this.form = new FormGroup({\n  email: new FormControl('', [Validators.required, Validators.email])\n});",
    "output": ["Form control is invalid until email is valid"],
    "explanation": "Validators in Angular are used to enforce rules on form controls. Built-in validators include required, email, min, max, minLength, maxLength, and pattern. Custom validators can also be created to implement domain-specific rules. Validators work synchronously or asynchronously, and they are essential for ensuring data integrity before submission."
  },
  {
  // ...existing code...
    "title": "What are Angular Async Validators?",
    "code": "this.form = new FormGroup({\n  username: new FormControl('', null, this.uniqueValidator)\n});\n\nuniqueValidator(control: AbstractControl): Observable<ValidationErrors | null> {\n  return this.userService.checkUsername(control.value).pipe(\n    map(isTaken => (isTaken ? { usernameTaken: true } : null))\n  );\n}",
    "output": ["Validates asynchronously if username is taken"],
    "explanation": "Async validators perform validations that require asynchronous operations, like server calls. They return an Observable or Promise. Angular waits for them to complete before determining form validity. They are often used for checking unique usernames, email availability, etc. Async validators enhance user experience by providing real-time server-side validation."
  },
  {
  // ...existing code...
    "title": "Explain Angular Change Detection.",
    "code": "@Component({ selector: 'app-child', template: '{{ counter }}' })\nexport class ChildComponent { @Input() counter: number; }",
    "output": ["Re-renders component when counter changes"],
    "explanation": "Change Detection in Angular is the process of synchronizing the DOM with the component state. By default, Angular uses the zone.js library to detect asynchronous operations and trigger change detection. Angular compares old and new values of bindings and updates the DOM accordingly. Developers can optimize change detection with ChangeDetectionStrategy.OnPush, which checks only when input properties change, reducing unnecessary re-renders."
  },
  {
  // ...existing code...
    "title": "What is Angular Zone.js?",
    "code": "setTimeout(() => console.log('Executed inside Angular zone'), 1000);",
    "output": ["Executed inside Angular zone"],
    "explanation": "Zone.js is a library that patches async APIs (setTimeout, promises, events) to notify Angular when to run change detection. It enables Angular to automatically know when asynchronous tasks finish and update the view accordingly. Developers can run code outside Angular's zone using NgZone.runOutsideAngular for performance optimization in high-frequency events like scrolling."
  },
  {
  // ...existing code...
    "title": "What are Angular ViewChild and ContentChild?",
    "code": "@Component({ template: '<child-comp #child></child-comp>' })\nexport class ParentComponent {\n  @ViewChild('child') childComponent: ChildComponent;\n}",
    "output": ["Access to child component instance"],
    "explanation": "ViewChild and ContentChild are decorators that give access to child components, directives, or DOM elements. ViewChild is used to access elements in the template of the component itself, while ContentChild is used to access projected content inserted via ng-content. These are useful for direct DOM manipulations or invoking child component methods."
  },
  {
  // ...existing code...
    "title": "What is Angular ng-content?",
    "code": "// parent.component.html\n<app-child><p>Hello World</p></app-child>\n\n// child.component.html\n<ng-content></ng-content>",
    "output": ["Hello World"],
    "explanation": "ng-content is a directive that allows content projection in Angular. It enables developers to insert custom content into a component from the outside. This is useful for creating reusable components like modals, cards, or tabs, where the inner content is dynamic. Angular also supports multiple slots using select attribute with ng-content."
  },
  {
  // ...existing code...
    "title": "What are Angular Animations?",
    "code": "@Component({\n  animations: [\n    trigger('openClose', [\n      state('open', style({ height: '200px' })),\n      state('closed', style({ height: '100px' })),\n      transition('open <=> closed', [animate('0.5s')])\n    ])\n  ]\n})",
    "output": ["Animates height between 100px and 200px"],
    "explanation": "Angular Animations are built on top of the Web Animations API and use the @angular/animations package. They allow developers to define transitions and states for elements in templates. Animations can be triggered by state changes, events, or route changes. This improves user experience and makes apps more engaging."
  },
  {
  // ...existing code...
    "title": "Explain Angular Universal.",
    "code": "// server.ts (simplified)\nimport { ngExpressEngine } from '@nguniversal/express-engine';",
    "output": ["Renders Angular app on server"],
    "explanation": "Angular Universal is a technology for server-side rendering (SSR) of Angular applications. It renders the initial view of the app on the server, sending fully-rendered HTML to the client. This improves performance, SEO, and perceived load times. Afterward, Angular takes over on the client to make the app interactive."
  },
  {
  // ...existing code...
    "title": "What are Angular Guards vs Resolvers?",
    "code": "// Resolver Example\nresolve(): Observable<User> { return this.userService.getUser(); }",
    "output": ["Fetches data before navigating to route"],
    "explanation": "Guards and Resolvers are both used in Angular routing. Guards (like CanActivate) decide whether navigation is allowed. Resolvers fetch data before navigation occurs, ensuring that the target component has the necessary data before loading. Combining them improves route security and user experience."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "TypeScript Basics: Why use it?",
    "code": "// TypeScript adds static typing and tooling to JavaScript\n// No runtime example necessary; TS compiles to JS",
    "output": [],
    "explanation": "TypeScript is a statically-typed superset of JavaScript that compiles to plain JS. It provides compile-time checks, improved IDE support (autocomplete, refactorings), and self-documenting APIs via types and interfaces. In large codebases it prevents many classes of bugs, enables safer refactors, and improves collaboration by making contracts explicit. Discuss gradual typing, how to adopt TS incrementally, and trade-offs like build step and type-maintenance overhead. Mention how TS's structural typing differs from nominal typing and how that impacts API design."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Interface vs Type Alias",
    "code": "interface User { name: string; age?: number }\ntype Id = number | string; // union type",
    "output": [],
    "explanation": "Both 'interface' and 'type' can describe object shapes. Interfaces support declaration merging and are often preferred for public APIs. Type aliases can represent unions, tuples, and primitives in addition to object shapes. Use 'interface' for extensible object contracts and 'type' for more advanced compositions (unions/intersections). Explain examples: discriminate unions for exhaustive checks, and when to prefer one over the other for readability and tool support."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Generics in Functions and Interfaces",
    "code": "function identity<T>(x: T): T { return x; }\ninterface Box<T> { value: T }\nconst n = identity<number>(5);\nconst b: Box<string> = { value: 'hi' };",
    "output": [],
    "explanation": "Generics are type parameters that enable reusable, type-safe abstractions. They allow you to express relationships between inputs and outputs (e.g., identity<T> returns the same type it receives). Use bounded generics (T extends Some) to constrain types, and infer types from usage for ergonomics. Discuss variance (covariance/contravariance) where relevant (e.g., function parameter positions) and how generics improve library design (collections, repositories, utility types)."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Utility Types: Partial, Pick, Omit, Readonly",
    "code": "interface User { id: number; name: string; email?: string }\ntype UserPreview = Pick<User, 'id' | 'name'>;\ntype PartialUser = Partial<User>;\nconst u: PartialUser = { name: 'R' };",
    "output": [],
    "explanation": "TS ships utility types that transform types easily: 'Partial' makes properties optional, 'Pick' selects a subset of properties, 'Omit' removes properties, and 'Readonly' makes properties immutable at compile time. These utilities reduce boilerplate when composing APIs and building DTOs. Explain runtime implications: these are compile-time only and do not alter emitted JS. Show scenarios: API clients, form value shapes, and component props where utility types simplify intent."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Union & Intersection Types (Practical usage)",
    "code": "type A = { a: number }\ntype B = { b: string }\ntype U = A | B; // either\ntype I = A & B; // both\nfunction handle(x: U) { if ('a' in x) return x.a; else return x.b; }",
    "output": [],
    "explanation": "Unions represent values that may be one of several types; use discriminants to narrow types safely. Intersections combine multiple types into one (useful for mixins or composing capabilities). Demonstrate discriminated unions (e.g., type Shape = { kind: 'circle', r: number } | { kind: 'rect', w:number, h:number }) for exhaustive switches. Discuss runtime checks and narrowing strategies (in operator, typeof, custom type guards)."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Decorators and Metadata (Angular relevance)",
    "code": "@Component({ selector: 'app-x' })\nexport class XComponent {}\n// Note: experimental TS decorators are compiled by TS and used by Angular for DI & metadata",
    "output": [],
    "explanation": "Decorators are a TS/ECMAScript stage feature that annotate classes and members with metadata or behavior. Angular uses decorators (@Component, @Injectable, @NgModule) to attach metadata consumed by the framework (templates, DI). Explain decorator execution order, how Angular's DI reads metadata, and caveats: decorators are compile-time constructs that may emit metadata requiring 'emitDecoratorMetadata' and reflect-metadata in some setups. Mention migration toward more static analysis-friendly approaches in newer Angular."
  },
  {
  // ...existing code...
    "category": "TypeScript",
    "title": "Type Narrowing & Type Guards",
    "code": "function isString(x: unknown): x is string { return typeof x === 'string'; }\nfunction f(x: unknown) { if (isString(x)) { console.log(x.toUpperCase()); } }",
    "output": [],
    "explanation": "Type guards are runtime checks that refine types for the compiler. User-defined type predicates (x is T) enable precise narrowing across branches. Built-in narrowing works with typeof, instanceof, in, and discriminants. Explain designing robust guards, ensuring performance, and how they support safer code paths without excessive casting."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "NgModules vs Standalone Components",
    "code": "// Standalone component example (Angular 15+)\nimport { Component } from '@angular/core';\n@Component({ selector: 'app-hello', standalone: true, template: '<h1>Hello</h1>' })\nexport class HelloComponent {}",
    "output": [],
    "explanation": "Angular historically used NgModules to group declarations, providers, and exports. Standalone components remove the need for NgModule boilerplate by allowing components, directives, and pipes to be self-contained and imported directly in routes or other components. Explain migration strategies, compatibility with libraries, and how standalone simplifies small apps and libraries while still supporting NgModule-based architectures for large legacy projects."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Signals vs RxJS (state patterns)",
    "code": "// Signals example (pseudo): const count = signal(0); effect(() => console.log(count()));\n// RxJS: const count$ = new BehaviorSubject(0); count$.subscribe(v => console.log(v));",
    "output": [],
    "explanation": "Signals are a new reactive primitive focusing on synchronous, fine-grained change tracking (pull-based), which can simplify UI updates and avoid some cognitive overhead of streams. RxJS is a powerful library for async streams and complex compositions (operators, multicasting). Compare trade-offs: signals are lightweight and predictable for local component state; RxJS excels at orchestrating async flows, combining multiple sources, and complex event processing. In interviews, explain when to pick each and how they interoperate in modern Angular."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Angular Dependency Injection Hierarchy (providedIn scopes)",
    "code": "@Injectable({ providedIn: 'root' })\nexport class ApiService {}\n// Or providedIn: SomeModule or 'any' or use providers array",
    "output": [],
    "explanation": "Angular's DI has a hierarchical injector tree: application-level (root) and component-level injectors. 'providedIn: root' registers a singleton in the root injector. Providing a service in a component's providers creates a separate instance per component tree. 'providedIn: any' creates per-injector instances for lazy-loaded modules. Explain testability benefits, how to scope singletons properly, and pitfalls like accidentally creating multiple instances due to duplicate providers in lazy modules."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Change Detection: Zones vs Zone-less strategies",
    "code": "// Example: NgZone.runOutsideAngular(() => { /* heavy work */ })",
    "output": [],
    "explanation": "Angular historically uses Zone.js to detect async work and trigger change detection automatically. Zone-less strategies (manual change detection, signals, or Zone-less APIs) give finer control and potential performance gains. Explain how to run heavy non-DOM work outside Angular zones, manually trigger change detection via ChangeDetectorRef, and the trade-offs in developer ergonomics vs performance. Discuss how OnPush and immutability reduce unnecessary checks."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Http Interceptors for auth & error handling",
    "code": "import { HttpInterceptor } from '@angular/common/http';\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req, next) {\n    const cloned = req.clone({ setHeaders: { Authorization: 'Bearer xyz' } });\n    return next.handle(cloned);\n  }\n}",
    "output": [],
    "explanation": "Interceptors allow cross-cutting concerns for HTTP requests: adding auth headers, logging, caching, retry, and global error handling. They chain in registration order; each interceptor must return the result of next.handle. Discuss idempotency, side-effect limits, retry/backoff strategies using RxJS operators, and testing interceptors with HttpTestingController. Avoid performing UI navigation inside interceptors; instead surface errors to a centralized handler."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Lazy Loading & Preloading Strategies",
    "code": "{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }\n// PreloadStrategy: PreloadAllModules or custom strategy",
    "output": [],
    "explanation": "Lazy loading reduces initial bundle size by loading feature code on demand. Preloading strategies (PreloadAllModules or custom) can fetch lazily-loadable chunks after initial load to improve subsequent navigation speed. Discuss route-level splits, shared module duplication, and router configuration to balance first-load performance vs perceived navigation speed. Mention bundling analysis and splitting points."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Standalone Testing: ComponentFixture & TestBed",
    "code": "// Typical unit test pattern (Jasmine): TestBed.configureTestingModule({ declarations: [MyComponent] })\n// fixture = TestBed.createComponent(MyComponent); fixture.detectChanges();",
    "output": [],
    "explanation": "Angular testing uses TestBed to configure a testing module and create component fixtures for DOM assertions. For services, inject using TestBed.inject and mock backend with HttpTestingController. Explain isolation vs shallow integration tests, mocking strategies for child components, and best practices: avoid heavy integration for small units, use harnesses for material components, and prefer readable assertions over implementation coupling."
  },
  {
  // ...existing code...
    "category": "Angular",
    "title": "Reactive Forms: FormControl & Validators",
    "code": "const email = new FormControl('', [Validators.required, Validators.email]);\n// email.value, email.valid, email.errors",
    "output": [],
    "explanation": "Reactive forms define form structure and validators in code, enabling programmatic control, dynamic form composition, and easier testing. Discuss syncing with async validators, cross-field validation patterns, valueChanges subscriptions (and unsubscribing), and performance for large dynamic forms. Emphasize immutability patterns when updating nested FormGroups to avoid accidental state reuse."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": `Event Loop in Browser vs Node (timers & microtasks)`,
    "code": "// In Node: process.nextTick has higher priority than Promise.then\n// In browsers: microtasks (Promise.then) run before the next macrotask\n",
    "output": [],
    "explanation": "Event loop semantics differ across environments: Node provides process.nextTick and setImmediate with specific ordering differences from browser timers. In Node, process.nextTick runs before microtasks and can starve the loop if abused. In the browser, microtasks (Promise jobs) run after the current task and before rendering and macrotasks. Explain why this matters for cross-platform code, testing, and libraries that must interop between Node and the browser."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Memory Leak Patterns in SPAs",
    "code": "// Example leak sources: unsubscribed Observables, lingering timers, global caches, DOM references in closures",
    "output": [],
    "explanation": "Common SPA leaks: not unsubscribing from Observables or DOM events, holding onto large caches, creating accidental globals, and closures capturing large structures. In Angular, always unsubscribe or use the async pipe, takeUntil patterns, or use automatic unsubscription with hosts (untilDestroyed). Use browser devtools (Heap snapshots, allocation timelines) to identify retained objects and determine GC roots. Discuss mitigation, code review, and monitoring strategies."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Immutability Patterns & State Management",
    "code": "// Example immutable update: const next = { ...state, items: [...state.items, newItem] }",
    "output": [],
    "explanation": "Immutability simplifies reasoning about state changes, enables cheap change detection (by reference), and prevents accidental shared mutations. Discuss strategies: structural sharing, immer for ergonomic immutable updates, using Redux/NgRx or simpler service-based patterns. Explain when to pick global state vs component-local state and how selectors, memoization, and change detection strategies interplay for performance."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Security: XSS, CSP, and Angular's protections",
    "code": "// Avoid [innerHTML] with untrusted data; use DomSanitizer carefully",
    "output": [],
    "explanation": "XSS remains a major web risk. Angular sanitizes HTML and URLs by default. Avoid inserting raw HTML from untrusted sources; if necessary, sanitize on the server or use DomSanitizer with extreme caution and clear tests. Content Security Policy (CSP) reduces risk by restricting script sources. Also discuss CSRF protection patterns for APIs and secure storage of tokens (avoid localStorage for sensitive tokens without other protections)."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Performance Profiling & Lighthouse Metrics",
    "code": "// No code: use Chrome DevTools Performance panel and Lighthouse for audits",
    "output": [],
    "explanation": "Measure before optimizing. Use Lighthouse for metrics (LCP, FID/CLS), DevTools for flamecharts and memory snapshots, and WebPageTest for real-world network conditions. Prioritize fixes that improve user-perceived performance: reduce main-thread work, code-splitting, lazy-loading, compress assets, and use HTTP caching and service workers. Explain correlation between metrics and user experience and how to track regressions via CI."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Accessibility (a11y) basics",
    "code": "// Use semantic HTML, ARIA when necessary, ensure keyboard navigation and focus management",
    "output": [],
    "explanation": "Accessibility increases reach and usability. Use semantic elements (button, nav, header), proper labels, keyboard focus management, and ARIA roles only when necessary. Test with screen readers, keyboard-only navigation, and automated tools (axe). Discuss form labeling, color contrast, and skip-links. Accessibility also improves SEO and overall UX."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Progressive Web App (PWA) basics",
    "code": "// Service worker registration and manifest.json are core pieces",
    "output": [],
    "explanation": "PWAs combine service workers, manifests, and HTTPS to provide offline support, caching, and app-like behavior. Discuss cache strategies (network-first, cache-first), update lifecycle, background sync, and push notifications. Emphasize testing across network conditions and strategies to avoid stale data or update frustrations."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "CI/CD & Bundle Analysis",
    "code": "// Integrate build step, run tests, run linting, and produce artifacts. Use source-map-explorer for bundle analysis",
    "output": [],
    "explanation": "Automated pipelines ensure consistent builds and catch regressions early. Include linting, unit tests, E2E, and bundle size checks. Bundle analysis (source-map-explorer, webpack-bundle-analyzer) reveals large dependencies or duplicate code. Explain strategies to shrink bundles: dynamic imports, removing polyfills, and using lighter libraries. Discuss versioning and release gating for safe rollouts."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Code Reviews & Maintainability",
    "code": "// No code: discuss conventions, commit messages, PR size, single-responsibility",
    "output": [],
    "explanation": "Maintainable codebase practices: small PRs, descriptive commits, consistent style (ESLint/Prettier), architectural patterns (feature modules, domain-driven organization), and documentation. Discuss trade-offs between YAGNI and over-engineering. Good reviews focus on clarity, test coverage, and performance implications. Encourage mentorship and knowledge sharing."
  },
  {
  // ...existing code...
    "category": "Mixed",
    "title": "Interview Strategy: how to answer architecture & trade-off questions",
    "code": "// No code: guideline for interview answers",
    "output": [],
    "explanation": "When asked architecture or trade-off questions, structure your answer: clarify requirements and constraints, propose a solution with pros/cons, discuss alternatives and why you rejected them, and mention testing/monitoring and incremental rollout. Use examples from past experience, quantify where possible, and highlight how your choices map to priorities (performance, reliability, time-to-market). This demonstrates system thinking and pragmatic engineering judgment."
  }

];

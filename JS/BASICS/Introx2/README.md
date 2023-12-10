### **Variable Declarations:**

- **`var`:**
    - Used for traditional variable declaration.
    - Function-scoped, accessible within the function or globally if declared outside any function.
- **`let`:**
    - Introduced in ES6 for block-scoped variables.
    - Accessible within the block where defined, like inside loops or conditionals.
- **`const`:**
    - Also introduced in ES6 for constants.
    - Block-scoped, cannot be reassigned after initial value is set.

### **Variable Scopes:**

1. **Global Scope:**
    - Variables outside functions or blocks.
    - Accessible from anywhere in your code.
2. **Local/Function Scope:**
    - Variables inside functions or blocks.
    - Accessible only within that function or block.

### **Variable Scope Example:**

```javascript
var globalVar = 10;

function exampleFunction() {
  var localVar = 5; // Accessible within the function
  console.log(localVar);
  console.log(globalVar); // Also accessible (global scope)
}

console.log(localVar); // Error - localVar not defined outside the function
console.log(globalVar); // Accessible in global scope

```

---

### **Function Scope:**

1. **Definition:**
    - Variables declared with **`var`** are function-scoped.
    - Accessible within the function they are defined in.
2. **Access:**
    - Accessible throughout the entire function.
    - Not limited to the block within the function.
3. **Example:**
    
    ```javascript
    function exampleFunction() {
      var localVar = 5; // Accessible throughout the function
      if (true) {
        var innerVar = 10; // Accessible throughout the function
      }
      console.log(localVar); // Accessible
      console.log(innerVar); // Accessible
    }
    console.log(localVar); // Error - localVar not accessible outside the function
    console.log(innerVar); // Error - innerVar not accessible outside the function
    
    ```
    

### **Block Scope:**

1. **Definition:**
    - **`let`** and **`const`** introduce block-scoped variables.
    - Limited to the block they are defined in.
2. **Access:**
    - Accessible only within the block.
    - Not accessible outside that block.
3. **Example:**
    
    ```javascript
    if (true) {
      let blockScopedVar = 20; // Accessible within the block
      const constantVar = 30; // Accessible within the block
      console.log(blockScopedVar);
      console.log(constantVar);
    }
    console.log(blockScopedVar); // Error - not accessible outside the block
    console.log(constantVar); // Error - not accessible outside the block
    
    ```
    

In summary, function scope (with **`var`**) allows access throughout the function, while block scope (with **`let`** and **`const`**) confines variables to the block where they are defined, enhancing code predictability.

---

### **`var` vs `let`:**

### **`var`:**

1. **Scope:**
    - Function-scoped or globally if declared outside functions.
2. **Hoisting:**
    - Hoisted to the top, assignments not hoisted.
    - Can result in variable being accessible but with the value **`undefined`**.
3. **Reassignment:**
    - Can be reassigned.

### **`let`:**

1. **Scope:**
    - Block-scoped.
2. **Hoisting:**
    - Hoisted, but accessing before declaration results in a **`ReferenceError`**.
3. **Reassignment:**
    - Can be reassigned.

Examples:

```javascript
// `var` example
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Accessible, var is function-scoped
}

console.log(x); // Error - var not accessible outside the function

// `let` example
if (true) {
  let y = 20;
}
console.log(y); // Error - y not defined outside the block

let z = 30;
z = 40; // Allowed

```
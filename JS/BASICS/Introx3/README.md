# Compilers and Intrepreters

JS language English words use karti hain and computers english nahi samajhte , wo samajhte hain 0 and 1 or (in actual) they understand current flow or current by pass, and hum chaate hai hum english mein likhke computer se baat karle, to hum ek Translator lagaenge jo ki humara code english mein lega and usse 0 and 1 mein convert kardega

English Code ↔Translator ↔ 0 and 1

Both Compilers and interpreters are translators hain jo ki english code ko convert kar rahe hain machine code main

Differnce

△English Code → Compiler → Machine Code(Runs super fast) takes 1 second to convert for example

△English Code → Interpreter → Byte Code(Runs Slower) takes 0.5 second for example

Machine Code is more hardware specific with compare to Byte Code

**Q.What should we use ?**

We don’t have choice as JS mein inbuilt interpreter hota hain

Compiling using language - Java and more…

Google had developed “JIT Just-in-time compiler” - interpreter ki shuraati taakat use karta hain and compiler ki running taakat use karta hain

# Type Casting :)

Typecasting, also known as type conversion, involves changing the data type of a value from one type to another. In JavaScript, this process can be done explicitly or implicitly.

## 1. Explicit Type Conversion

Explicit type conversion, or type casting, is the manual conversion of a value from one data type to another using JavaScript functions or operators. Common methods include:

- **parseInt()**: Converts a string to an integer.
- **parseFloat()**: Converts a string to a floating-point number.
- **Number()**: Converts a value to a number, including converting strings to numbers.
- **String()**: Converts a value to a string.
- **Boolean()**: Converts a value to a boolean (true or false).

### Example:

````javascript
let numString = "42";
let num = parseInt(numString);
````
## 2.Implicit Type Conversion (Type Coercion)

Implicit type conversion, or type coercion, happens when JavaScript automatically converts values from one data type to another during an operation. JavaScript attempts to make sense of the operation and converts data types as needed.

### Example:

```javascript
let num = 5;
let str = "Hello, " + num; // Implicit conversion: num is coerced to a string
````

### Caution: 
Type coercion can lead to unexpected results. To avoid this, it's recommended to use explicit type conversion methods to ensure code behaves as expected.

# Expressions and Operators

## Assignment Operators:

Assignment operators are used to assign values to variables. JavaScript supports several assignment operators, including `=`, `+=`, `-=`, `*=`, `/=`, and more.

Example:

```jsx
let x = 10; // Assignment using =
x += 5; // x is now 15 (x = x + 5)
```

## Comparison Operators:

Comparison operators are used to compare values. They return a Boolean value (`true` or `false`) based on the comparison. Common comparison operators include `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, and `<=`.

Example:

```jsx
let a = 5;
let b = 10;
console.log(a > b); // false
```

## Arithmetic Operators:

Arithmetic operators perform mathematical operations on numeric values. They include `+`, `-`, `*`, `/`, `%` (modulo), and `**` (exponentiation).

Example:

```jsx
let num1 = 10;
let num2 = 3;
let result = num1 % num2; // result is 1 (remainder of division)
```

## Bitwise Operators:

Bitwise operators manipulate the individual bits of binary representations of numbers. They include `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), and `>>` (right shift).

Example:

```jsx
let x = 5; // Binary: 101
let y = 3; // Binary: 011
let result = x & y; // result is 1 (binary 001)
```

## Logical Operators:

Logical operators perform logical operations and return Boolean values. They include `&&` (AND), `||` (OR), and `!` (NOT).

Example:

```jsx
let isTrue = true;
let isFalse = false;
let result = isTrue && isFalse; // result is false
```

## BigInt Operators:

BigInt operators are used to perform operations on BigInt values, which are used for working with large integers. BigInt operators are similar to arithmetic operators.

Example:

```jsx
const bigNum1 = 1234567890123456789012345678901234567890n;
const bigNum2 = 9876543210987654321098765432109876543210n;
const result = bigNum1 + bigNum2; // BigInt addition
```

## String Operators:

String operators are used to concatenate strings. The `+` operator is commonly used for string concatenation.

Example:

```jsx
let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1 + str2; // "Hello, world!"
```

## Conditional Operators (Ternary Operator):

The conditional operator, `? :`, is a shorthand way to write an `if-else` statement in a single line.

Example:

```jsx
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a minor";
```

## Comma Operators:

Comma operators allow you to evaluate multiple expressions, separated by commas, in a single statement. The result is the value of the last expression.

Example:

```jsx
let a = 1,
  b = 2,
  c = 3;
let result = (a++, b++, c++); // result is 3
```

## Unary Operators:

Unary operators operate on a single operand. They include `++` (increment), `--` (decrement), `+` (unary plus), `-` (unary minus), and `typeof` (typeof operator).

Example:

```jsx
let num = 5;
num++; // Increment by 1
let negativeNum = -num; // Unary minus
```

## Relational Operators:

Relational operators are used to compare values and determine the relationship between them. They include `instanceof`, `in`, and `typeof`.

Example:

```jsx
let obj = {};
console.log(obj instanceof Object); // true
```

These operators are fundamental in JavaScript and are used extensively to manipulate data and control program flow. Understanding them is crucial for effective JavaScript development.

// Example of a generator function
// function* numberGenerator() {
//   for (let i = 1; i < 11; i++) {
//     yield i;
//   }
// }

// const iterator = numberGenerator();

// setInterval(() => {
//   console.log(iterator.next().value);
// }, 1000);
function* generatePrimes() {
  let num = 2;
  while (true) {
    if (isPrime(num)) {
      yield num;
    }
    num++;
  }
}

function isPrime(n) {
  //1 and negative numbers are not prime
  if (n <= 1) {
    return false;
  }
  //2 and 3 are prime
  if (n <= 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const primeGenerator = generatePrimes();
for (let i = 0; i < 10; i++) {
  console.log(primeGenerator.next().value);
}

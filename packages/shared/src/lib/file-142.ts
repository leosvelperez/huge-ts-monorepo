export function sharedFile142() {
        function calculateDistance(
  point1: { x: number; y: number },
  point2: { x: number; y: number }
): number {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function calculateSum(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate the distance between two points
const point1 = { x: 0, y: 0 };
const point2 = { x: 5, y: 5 };
const distance = calculateDistance(point1, point2);
console.log("Distance between two points:", distance);

function addNumbers(a: number, b: number): number {
  return a + b;
}

function subtractNumbers(a: number, b: number): number {
  return a - b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function divideNumbers(a: number, b: number): number {
  return a / b;
}

function calculateSquareRoot(a: number): number {
  return Math.sqrt(a);
}

function calculatePower(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrimeNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name: string): void {
  console.log(`Goodbye, ${name}!`);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

// Invoke functions
console.log(calculateSum([1, 2, 3, 4, 5]));
console.log(generateRandomNumber(1, 100));
console.log(addNumbers(5, 10));
console.log(subtractNumbers(10, 5));
console.log(multiplyNumbers(5, 5));
console.log(divideNumbers(10, 2));
console.log(calculateSquareRoot(9));
console.log(calculatePower(2, 3));
console.log(calculateFactorial(5));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(10));
console.log(greet("John"));
console.log(sayGoodbye("Jane"));
console.log(validateEmail("example@example.com"));
console.log(validateEmail("invalid"));
console.log(formatDate(new Date()));
      }
      
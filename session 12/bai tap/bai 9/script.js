// Nhập vào một vào một số n, in ra n số nguyên tố tăng dần

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNumbers(n) {
  let count = 0;
  let i = 2;
  while (count < n) {
    if (isPrime(i)) {
      console.log(i);
      count++;
    }
    i++;
  }
}

let n = Number(prompt("Nhập một số"));
printPrimeNumbers(n);

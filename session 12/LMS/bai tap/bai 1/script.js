// Kiểm tra xem một số nguyên bất kỳ có phải là số nguyên tố hay không
//  Sử dụng phương thức này để tìm tất cả các số nguyên tố nhỏ hơn 10000.

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
for (let i = 2; i < 10000; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

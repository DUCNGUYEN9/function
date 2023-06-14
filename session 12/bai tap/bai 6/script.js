// Viết function trả ra giá trị lớn nhất trong một mảng số

function maxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

let arrInt = [3, 6, 1, 8, 5];
let result = maxNumber(arrInt);
console.log(result);

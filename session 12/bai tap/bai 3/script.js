// Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ
// nhất tính từ năm 1 đến 100

let year = Number(prompt("enter a year "));
let centuryNumber = century(year);

function century(number) {
  let x = Math.floor(number / 100);
  if (number % 100 === 0) {
    return x;
  } else {
    return x + 1;
  }
}

console.log("thế kỷ : " + centuryNumber);

// Viết function trả ra trung bình cộng của một mảng số
function trungBinhCong(arrInt) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < arrInt.length; i++) {
    total += arrInt[i];
    count++;
  }

  return total / count;
}
let arrInt = [3, 1, 5, 8, 7, 9];
let result = trungBinhCong(arrInt);
console.log("trung bình cộng : ", result);

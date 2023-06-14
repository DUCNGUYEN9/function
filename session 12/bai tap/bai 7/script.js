// Viết function kiểm tra số chẵn-lẻ, nguyên tố, hoàn hảo

function kiemTraChanLeNguyenToHoanHao(number) {
  let isPrime = true;

  if (number % 2 === 0) {
    console.log("Số bạn vừa nhập là số chẵn: " + number);
    if (number === 2) {
      console.log("Số bạn vừa nhập là số nguyên tố: " + number);
    }
  } else {
    console.log("Số bạn vừa nhập là số lẻ: " + number);
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("Số bạn vừa nhập là số nguyên tố: " + number);
    }
  }

  let sum = 0;
  for (let k = 1; k < number; k++) {
    if (number % k === 0) {
      sum += k;
    }
  }
  if (sum === number) {
    console.log("Số bạn vừa nhập là số hoàn hảo: " + number);
  }
}

let number = Number(prompt("Nhập một số"));
kiemTraChanLeNguyenToHoanHao(number);

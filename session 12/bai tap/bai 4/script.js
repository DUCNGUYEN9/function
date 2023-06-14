// Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu tiên và
// thêm vào dấu “…” ở cuối chuỗi
let str = "qwertyuiopasdfghjklzxcvbnm";
function cutString(x) {
  let daCut = x.slice(0, 10) + "...";
  return daCut;
}
let result = cutString(str);
console.log(result);

// Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. Ví dụ: “rIkKEi”
// sau khi chuẩn hóa thành “Rikkei”

let str = "rikKeI";
let result = capitalization(str);

function capitalization(x) {
  return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}
console.log(result);

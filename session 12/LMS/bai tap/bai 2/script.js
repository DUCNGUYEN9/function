function footToMeter(foot) {
  return 0.305 * foot;
}
function meterToFoot(meter) {
  return 3.279 * meter;
}

let checkMeter = 20.0;
let checkFoot = 1.0;

console.log("foot: ", meterToFoot(checkMeter));
console.log("meter: ", footToMeter(checkFoot));

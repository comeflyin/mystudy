function calculateTax(amount, rate = 0.2 * amount) {
  return amount * rate;
}

console.log(calculateTax(1000)); // 输出 200

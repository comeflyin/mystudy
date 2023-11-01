function solveCubicEquation(a, b, c, d) {
  // 初始猜测值
  let x0 = 0;

  // 迭代次数
  const maxIterations = 100;
  
  for (let i = 0; i < maxIterations; i++) {
      const f = a * x0 * x0 * x0 + b * x0 * x0 + c * x0 + d;
      const fPrime = 3 * a * x0 * x0 + 2 * b * x0 + c;

      // 使用牛顿法更新猜测值
      x0 = x0 - f / fPrime;
  }

  return x0;
}

// 例子
const a = -741850;
const b = 2215.7;
const c = -0.316;
const d = 0.000133668;

const solution = solveCubicEquation(a, b, c, d);
console.log(solution); // 输出近似解



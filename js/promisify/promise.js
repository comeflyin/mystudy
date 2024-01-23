const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(callback) {
  // 初始化 Promise 状态、值、原因和回调数组
  this.status = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  // 定义 resolve 函数，用于将 Promise 状态变更为 FULFILLED
  const resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      // 触发所有成功回调
      this.onFulfilledCallbacks.forEach(callback => callback(this.value));
    }
  };

  // 定义 reject 函数，用于将 Promise 状态变更为 REJECTED
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      // 触发所有失败回调
      this.onRejectedCallbacks.forEach(callback => callback(this.reason));
    }
  };

  try {
    // 执行传入的回调函数，传入 resolve 和 reject 函数
    callback(resolve, reject);
  } catch (error) {
    // 若回调函数执行出错，将 Promise 状态变更为 REJECTED
    reject(error);
  }
}

// 定义 Promise 原型上的 then 方法
Promise.prototype.then = function (onFulfilled, onRejected) {
  // 处理回调函数，确保它们是函数类型
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

  // 定义处理回调的函数
  const handleCallback = (callback, resolve, reject) => {
    try {
      // 执行回调函数，并根据返回值处理 Promise 链
      const result = callback(this.value);
      if (result instanceof Promise) {
        // 若返回值是 Promise，则递归处理 Promise 链
        result.then(resolve, reject);
      } else {
        // 若返回值不是 Promise，则将其作为成功值传递给下一个 Promise
        resolve(result);
      }
    } catch (error) {
      // 若回调函数执行出错，将错误作为原因传递给下一个 Promise
      reject(error);
    }
  };

  return new Promise((resolve, reject) => {
    // 根据 Promise 当前状态进行处理
    if (this.status === FULFILLED) {
      // 若状态为 FULFILLED，则异步执行成功回调
      setTimeout(() => {
        handleCallback(onFulfilled, resolve, reject);
      });
    } else if (this.status === REJECTED) {
      // 若状态为 REJECTED，则异步执行失败回调
      setTimeout(() => {
        handleCallback(onRejected, resolve, reject);
      });
    } else if (this.status === PENDING) {
      // 若状态为 PENDING，则将回调函数加入对应的回调数组
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          handleCallback(onFulfilled, resolve, reject);
        });
      });

      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          handleCallback(onRejected, resolve, reject);
        });
      });
    }
  });
};
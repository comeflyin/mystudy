console.log(Foo.prototype.constructor === Foo) // ?
console.log(f1.__proto__ === Foo.prototype) // ?

// 难度中
console.log(Object.prototype.__proto__ === null) // ?
console.log(Function.prototype.__proto__ === Object.prototype) // ?

// 难度较大
console.log(Function.prototype === Object.__proto__) // ?
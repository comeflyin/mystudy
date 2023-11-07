// var a = 1
// function foo(){
//     console.log(this.a);
// }
// foo()



function sayName(name) {
  console.log(`Hello, ${name}`);
  console.log(this); // this 指向 window 对象
}

sayName("Alice");


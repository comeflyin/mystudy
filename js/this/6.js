// function foo(){}

// var bar = function(){
//   console.log(this.a);
// }

// bar()
var a = 1
var baz = () => {
  console.log(this.a);
}

baz()
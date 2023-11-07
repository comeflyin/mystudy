
function foo(){
  var a = 1
  bar.call(foo)
  function bar (){
    console.log(this.a);
  }
  bar()
}

foo()
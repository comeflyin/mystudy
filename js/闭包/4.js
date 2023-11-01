function a(){
  function b(){
    var bbb = 123
    console.log(aaa);
  }
  var aaa = 123
  return b
}

var c = a()
c()
function fn(a){
    console.log(a)
    var a = 123
    console.log(a)
    function a(){}
    console.log(a)
    var b = function(){}
    console.log(b)
    function d(){}
    var d = a
    console.log(d)
}

// AO:{
//   a: undefined 1 function a(){},
//   b: undefined ,
//   d: undefined function d(){},
// }

fn(1)



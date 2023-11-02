var arr = []

for(var i = 0; i < 10; i++) {
  function a(i){
    arr[i] = function() {
      console.log(i)
    }
  }
  a(i)
}

//

for(let j = 0; j < 10; j++) {
     arr[j]()
}

// var arr = []

// for(var i = 0; i < 10; i++) {
//     (function(i){
//       arr[i] = function() {
//         console.log(i)
//     }
//     })(i)
// }

// for(let j = 0; j < 10; j++) {
//      arr[j]()
//  }
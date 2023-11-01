// var arr = []
// var c = []
// for(var i = 0; i < 10; i++) {
//     arr[i] = function() {
//         var b = i
//         var a = function(){
//             console.log(b)
//         }
//        return a
//     }
//     c[i] = arr[i]()
// }

// //

// for(let j = 0; j < 10; j++) {
//      c[j]()
// }

var arr = []

for(var i = 0; i < 10; i++) {
    (function(i){
      arr[i] = function() {
        console.log(i)
    }
    })(i)
}

for(let j = 0; j < 10; j++) {
     arr[j]()
 }
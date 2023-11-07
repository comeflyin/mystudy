// console.log(this)

function identify() {
    return this.name.toUpperCase()
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this)
  console.log(greeting)
}

var me = {
  name: 'Tom'
}
var you = {
  name: 'Jerry'
}
// console.log(identify(you))
speak.call(me)
const secondHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')



function setTime() {
  const now = new Date()

  // 获取当前的秒数
  const seconds = now.getSeconds()
  const secDeg = seconds * 6 + 90
  secondHand.style.transform = `rotate(${secDeg}deg)`

  // 获取当前的分钟
  const minutes = now.getMinutes()
  const minDeg = minutes * 6 + 90
  minHand.style.transform = `rotate(${minDeg}deg)`

  // 获取当前的小时
  const hours = now.getHours()
  const hourDeg = hours * 30 + 90 + (minutes / 60) * 30
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setTime()
setInterval(setTime, 1000)


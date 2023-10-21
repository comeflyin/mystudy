var speed = document.querySelector('.speed')
var gspeed = document.querySelector('.gspeed')
var video = document.querySelector('.flex')

speed.addEventListener('mousemove', function (e) {
  var y = e.y - speed.offsetTop
  var percent = y / speed.offsetHeight
  var height = Math.round(percent * 100) + '%'
  gspeed.style.height = height
  
  var min = 0.4
  var max = 4
  var playbackRate = percent * (max - min) + min
  gspeed.textContent = playbackRate.toFixed(2) + 'x'

  video.playbackRate = playbackRate

})
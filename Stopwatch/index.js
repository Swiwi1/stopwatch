
//timer

let hourId = document.getElementById("hour-display")
let minuteId  = document.getElementById("minute-display")
let secondId  = document.getElementById("second-display")
let millisecondId  = document.getElementById("millisecond-display")

let hour = 0o0
let minute = 0o0
let second = 0o0
let millisecond = 0o0

let timer = false
let Interval ;

//buttons
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const stop = document.getElementById("stop")

start.addEventListener("click", function (){
    timer = true
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
    
})

stop.addEventListener("click", function(){
    clearInterval(Interval)
})

reset.addEventListener("click", function (){
    timer = false
    hour = 0o0
    minute = 0o0
    second = 0o0
    millisecond = 0o0
    hourId.innerHTML = `0${hour}:`
    minuteId.innerHTML = `0${minute}:`
    secondId.innerHTML = `0${second}:`
    millisecondId.innerHTML = `0${millisecond}`
})

function startTimer() {
    if (timer == true) {
        millisecond++
        if (millisecond <= 9){
            millisecondId.innerHTML = `0${millisecond}`
        }

        if (millisecond > 9){
            millisecondId.innerHTML = millisecond
        }

        if (millisecond > 99) {
            second ++
            secondId.innerHTML = `0${second}:`
            millisecond = 0o0
            millisecondId.innerHTML = `0${millisecond}`
        }

        if (second > 9){
            secondId.innerHTML = `${second}:`
        }

        if (second > 59) {
            minute ++
            minuteId.innerHTML = `0${minute}:`
            second = 0o0
            secondId.innerHTML = `0${second}:`
        }

        if (minute > 9){
            minuteId.innerHTML = `${minute}:`
        }
        if (minute > 59) {
            hour ++
            hourId.innerHTML = `0${hour}:`
            minute = 0o0
            minuteId.innerHTML = `0${minute}:`
        }
}
}
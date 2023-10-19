const squares = document.querySelectorAll('.square')
const score = document.querySelector('.score')
const timeLeft = document.querySelector('.time-left')
const fury = document.querySelector('.fury')

let kicks = 0
let hitPosition = 0
let setCurrentTime = 60
let timerId = null
let time = 1000


function squareRandom(){
    squares.forEach(square => {
        square.classList.remove('mole')    
    })
    let squareRandom = squares[Math.floor(Math.random()*9)]
    squareRandom.classList.add('mole')

    hitPosition = squareRandom.id
    // console.log('hitPosition: '+hitPosition)

}

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if (square.id == hitPosition){
            kicks ++
            score.textContent = kicks
            square.classList.add('damaged-mole')
            setTimeout(()=>{
                square.classList.remove('damaged-mole')
            },190) 
            // console.log('kick: '+kicks)
            hitPosition = null //es para que no se pueda volver a apretar en el mismo cuadrado que se fue the mole
        }
    })
})


let moveMole = setInterval(() => {
            clearInterval(timerId); // Detén el intervalo anterior
            if ( time >= 200 ) time -= Math.floor(Math.random() * (14 - 8 + 1) + 8); // Reduce el tiempo de 14 a 8 milisegundos por segundo (el topo se mueve mas rapido)
            if (time > 800) {
                fury.textContent = '(1)-2-3-4-5';
            } else if (time > 600) {
                fury.textContent = '1-(2)-3-4-5';
            } else if (time > 400) {
                fury.textContent = '1-2-(3)-4-5';
            } else if (time > 260) {
                fury.textContent = '1-2-3-(4)-5';
            } else if (time > 200) {
                fury.textContent = '1-2-3-4-(5)';
            }
            timerId = setInterval(squareRandom, time); // Establece el nuevo intervalo
            console.log(time)
        }, 1000);


function countDown(){
    setCurrentTime--
    timeLeft.textContent = setCurrentTime
    if (setCurrentTime == 0){
        alert('Juego terminado!, tu haz hecho '+kicks+' puntos totales')
        clearInterval(timerId)
        clearInterval(moveMole)
        clearInterval(counter)
        squares.forEach(className =>{
            className.classList.remove('mole')
        })
    }
}

let counter = setInterval(countDown, 1000)
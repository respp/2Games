document.addEventListener('DOMContentLoaded', ()=>{
    const cardsArray = [
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        }
    ]

    cardsArray.sort(() => 0.5 - Math.random())   

const grid = document.querySelector('.grid')
const result = document.querySelector('#result')
let chosenCardName = []
let chosenCardId = []
let score = []


//Create Board
function createBoard(){
for (let i=0; i<cardsArray.length; i++){
    let card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
}
}

//Flip Card
function flipCard(){
    let cardId = this.getAttribute('data-id')
    chosenCardName.push(cardsArray[cardId].name)
    chosenCardId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].image)
    console.log(chosenCardId)
    if(chosenCardId.length === 2){
        setTimeout(matchCard, 500);
    }
}

//Match Card
function matchCard(){
    const cards =document.querySelectorAll('img')
    let chosenCardIdOne = chosenCardId[0]
    let chosenCardIdTwo = chosenCardId[1]

    if (chosenCardIdOne == chosenCardIdTwo){
        alert('You played the same card')
        cards[chosenCardIdOne].setAttribute('src', 'images/blank.png')
    }
    else if (chosenCardName[0] === chosenCardName[1]){
        alert("You found matching cards!")
        cards[chosenCardIdOne].setAttribute('src', 'images/white.png')
        cards[chosenCardIdTwo].setAttribute('src', 'images/white.png')
        cards[chosenCardIdOne].removeEventListener('click', flipCard)
        cards[chosenCardIdTwo].removeEventListener('click', flipCard)
        score.push(chosenCardName)
    }
    else if (chosenCardName[0] !== chosenCardName[1]){
        alert("Wrong cards!")
        cards[chosenCardIdOne].setAttribute('src', 'images/blank.png')
        cards[chosenCardIdTwo].setAttribute('src', 'images/blank.png')
    }
    
    chosenCardName = []
    chosenCardId = []
    result.textContent = score.length*2
    if (score.length === 6){
        result.textContent = 'Gano Isabel!!!'
    }
}




createBoard()



})
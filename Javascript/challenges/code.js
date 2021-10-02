function ageindays() {
    var birthyear = prompt("Which year were you born...good friend?")
    var ageindayss = (2020 - birthyear) * 365.25
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageindayss + 'days old')
    h1.setAttribute('id', 'ageindayss')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    // console.log(ageindays )


}

function reset() {
    document.getElementById('ageindayss').remove()
}

let date = Date(10000)
// setInterval(updatetime, 1000);
// function updatetime() {
//     time.innerHTML=new Date()
// }
// // document.getElementById('da').innerHTML=date
// h1.setAttribute('id')
// let now=Date(9000)
// console.log(now)
console.log(date)
setInterval(updatetime, 1000);
function updatetime() {
    da.innerHTML = new Date()
}




// function image() {
//     // var image=image('var.jpg')
//     var images = document.images('var.jpg')
//     var answer=document.images()
//     var p = document.getElementById('abc', 'images')
//     p.appendChild(answer)
//     document.getElementById('abc')
// }


// challenge 2 generator
function generate() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-generator')
    image.src = "/var.jpg"
    div.appendChild(image)
}
function delet() {
    document.getElementById('flex-generator').remove()
}


// challenge 3 rock paper scissor

function rpsgame(yourchoice) {
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    console.log(yourchoice.id)
    botchoice = number_to_choice(random_number_for_bot());
    console.log('computer choice is ', botchoice);
    result = decide_winner(humanchoice, botchoice);
    console.log(result);
    message = finalmessage(result)
    console.log(message)
    frontend(yourchoice, botchoice, message)
}

function frontend(humanimagechoice, botimagechoice, finalmessage) {
    var imagedatabase = {
        'rock': document.getElementById('rock').src
        , 'paper': document.getElementById('paper').src
        , 'scissor': document.getElementById('scissor').src
    }
    

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissor').remove()


    var humandiv = document.createElement('div')
    var messagediv = document.createElement('div')
    var botdiv = document.createElement('div')


    humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "'height=150 ;width=150; style='box-shadow:0px 10px 50px green'>"
    document.getElementById('flex-box-rps-div').appendChild(humandiv)
    console.log(humandiv)

    messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + ";font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messagediv)

    botdiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] + "'style='box-shadow:0px 10px 50px red'>"
    document.getElementById('flex-box-rps-div').appendChild(botdiv)
    console.log(botdiv)
}

function random_number_for_bot() {
    return Math.floor(Math.random() * 3);
}
function number_to_choice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decide_winner(yourchoice, botchoice) {
    var database = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 },
    }
    
    var yourscore = database[yourchoice][botchoice];
     console.log(yourscore)
    var computerscore = database[botchoice][yourchoice];
     console.log(computerscore)
    return [yourscore, computerscore]
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore == 0) {
        return { 'message': 'You Lost!', 'color': 'red' }
    }
    else if (yourscore == 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' }
    }
    else {
        return { 'message': 'You Won!', 'color': 'green' }
    }
}




//challenge for change the color;

var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)

var copyofallbuttons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyofallbuttons.push(all_buttons[i].classList[1])
}
console.log(copyofallbuttons)


function buttoncolorchange(buttomthingy) {
    console.log(buttomthingy.value)
    if (buttomthingy.value == 'red') {
        buttonred();
    }
    else if (buttomthingy.value == 'green') {
        buttongreen();
    }
    else if (buttomthingy.value == 'reset') {
        buttonreset();
    }
    else if (buttomthingy.value == 'random') {
        buttonrandom();
    }
}

function buttonred() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
        console.log(all_buttons[i])
    }
}

function buttongreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
        console.log(all_buttons[i])
    }
}

function buttonreset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyofallbuttons[i])
        console.log(all_buttons[i])
    }
}

function buttonrandom() {
    var choice = ['btn-danger', 'btn-success', 'btn-warning', 'btn-primary']
    for (let i = 0; i < all_buttons.length; i++) {
        let random_number = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choice[random_number])
    }
}

//Challenge 5 BLACKJACK GAME
let blackjackgame = {
    'you': { 'scorespan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scorespan': '#sealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
}
const YOU = blackjackgame['you']
const DEALER = blackjackgame['dealer']
const hitsound = new Audio('swish.m4a')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit)

// document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackdeal)
function blackjackhit() {
    //  alert('hey you just click me')
    showcard(DEALER)
}
function showcard(activeplayer){
    
    let cardimage = document.createElement('img')
    cardimage.src = 'Q.png'
    document.querySelector(activeplayer['div']).appendChild(cardimage)
    hitsound.play()
}
// function blackjackdeal(){
//     let yourimage=document.querySelector('#your-box').querySelectorAll('img')
//     console.log(yourimage)
// }
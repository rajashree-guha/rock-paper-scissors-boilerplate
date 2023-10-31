// declaring variables 

var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var image1 = document.getElementById("player-img")
var image2 = document.getElementById("computer-img")
var playerScore=document.getElementById("player-score")
var computerScore=document.getElementById("computer-score")
var footer = document.getElementById("footer")
var winner = document.getElementById("footer-h1")
var playAgain =document.getElementById("playAgain")

let chooseOption=0
let player1=0
let player2=0


// adding EventListeners to buttons

rock.addEventListener("click" , ()=>{
    image1.setAttribute("src","./assets/rock-hand.png")
    random()
    if(chooseOption==3){
        player1++
    }else if(chooseOption==2){
        player2++
    }
    score()
    gameover()
})

paper.addEventListener("click" , ()=>{
    image1.setAttribute("src","./assets/paper-hand.png")
    random()
    if(chooseOption==1){
        player1++
    }else if(chooseOption==3){
        player2++
    }
    score()
    gameover()
})

scissor.addEventListener("click" , ()=>{
    image1.setAttribute("src","./assets/scissors-hand.png")
    random()
    if(chooseOption==2){
        player1++
    }else if(chooseOption==1){
        player2++
    }
    score()
    gameover()
})

// declaring functions 

function random(){ 
    chooseOption = Math.floor(Math.random()*3)

    switch(chooseOption){
        case 1:image2.setAttribute("src","./assets/rock-hand.png")
        break;
        case 2:image2.setAttribute("src","./assets/paper-hand.png")
        break;
        case 3:image2.setAttribute("src","./assets/scissors-hand.png")
        break;
    }
}

function score(){
playerScore.innerHTML= player1;
computerScore.innerHTML= player2;
} 

function gameover(){
    if(player1==5){
        hidden()
        winner.innerHTML= "You won the Game"
    }

    else if(player2==5){
       hidden()
        winner.innerHTML= "Computer won the Game"
    }

}

function hidden(){
    rock.style.visibility="hidden"
    paper.style.visibility="hidden"
    scissor.style.visibility="hidden"
    footer.style.visibility="visible"
}

// redirecting to gameover.html page when clicked on playAgain button

playAgain.addEventListener("click" , ()=>{
    window.location.reload();
})






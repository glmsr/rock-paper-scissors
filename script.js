const selections = ["Rock", "Paper", "Scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn =  document.getElementById("resetBtn");
const mainText = document.getElementById("mainText");
const textArea = document.getElementById("textArea");
const scoreArea = document.getElementById("scoreArea");
const manEmotes = document.getElementById("manEmotes");
const computerEmotes = document.getElementById("computerEmotes");
let buttonStr = '';
let playerScore = 0;
let computerScore = 0;

//functions
function playRound(playerSelection, computerSelection){
    function computerPlay(){
        aiSelect = selections[Math.floor(Math.random() * selections.length)];
        return(aiSelect);
    }
    playerSelection  = buttonStr;
    computerSelection = computerPlay();
    
    
    if(playerSelection === 'Rock'){
        if(computerSelection ==='Scissors'){
            textArea.innerHTML+= 'You won! Rock beats Scissors!';
            playerScore++;
            computerEmotes.innerHTML = `✂️`;
            
        } else if (computerSelection === 'Paper'){
            textArea.innerHTML+= 'You lost! Paper beats Rock!';
            computerScore++;
            computerEmotes.innerHTML = `📃`;
        }else if (playerSelection === computerSelection){
            textArea.innerHTML+= `It's a draw!~`;
            computerEmotes.innerHTML = `🗿`;
        }
        manEmotes.innerHTML = `✊`
    }
    if(playerSelection === 'Scissors'){
        if(computerSelection === 'Paper'){
            textArea.innerHTML+='You won! Scissors beats Paper!';
            playerScore++;
            computerEmotes.innerHTML = `📃`;
        } else if(computerSelection === 'Rock'){
            textArea.innerHTML+='You lost! Rock beats Scissors!';
            computerScore++;
            computerEmotes.innerHTML = `🗿`;
        }else if (playerSelection === computerSelection){
            textArea.innerHTML+= `It's a draw!~`;
            computerEmotes.innerHTML = `✂️`;
        }
        manEmotes.innerHTML = `✌`
    } if(playerSelection === 'Paper'){
        if(computerSelection === 'Rock'){
            textArea.innerHTML+='You won! Paper beats Rock!';
            playerScore++;
            computerEmotes.innerHTML = `🗿`;
        } else if(computerSelection === 'Scissors'){
            textArea.innerHTML+= 'You lost! Scissors beats Paper!';
            computerScore++;
            computerEmotes.innerHTML = `✂️`;
        } else if (playerSelection === computerSelection){
            textArea.innerHTML+=`It's a draw!~`;
            computerEmotes.innerHTML = `📃`;
        }
        manEmotes.innerHTML = `✋`
    }
    
}
function game() {
    if(playerScore < 4 && computerScore < 4){
        playRound();
    } else {
        if(playerScore > computerScore){
            playerScore++;
            textArea.innerHTML += 'You win the game!!';
            manEmotes.innerHTML = `🎉🥳`
            computerEmotes.innerHTML = `💀🗿`
            disableButtons();
            createResetBtn();
        } else if (playerScore < computerScore){
            computerScore++;
            textArea.innerHTML += 'You lost to the AI!!';
            manEmotes.innerHTML = `😭🥀`
            computerEmotes.innerHTML = `🦾😎`
            disableButtons();
            createResetBtn();
        }
    }
}

function updateScore(){
    scoreArea.innerHTML = ``;
    scoreArea.innerHTML += `${playerScore}/${computerScore}`
}

function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function createResetBtn(){
    let resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Play Again ?"
    resetBtn.setAttribute('id', 'resetBtn')
    mainText.appendChild(resetBtn);
    resetBtn.onclick = function reload() {
        reload = location.reload();
}
    }


//event listeners
rockBtn.addEventListener('click', function(){
    textArea.innerHTML = ``;
    buttonStr = rockBtn.textContent;
    game();
    updateScore();
});

paperBtn.addEventListener('click', function(){
    textArea.innerHTML = ``;
    buttonStr = paperBtn.textContent;
    game();
    updateScore();
});

scissorsBtn.addEventListener('click', function(){
    textArea.innerHTML = ``;
    buttonStr = scissorsBtn.textContent;
    game();
    updateScore();
});


let hScore = 0;
let cScore = 0;
let result = 0;

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random(2)*3);
    let choice = ["rock", "paper", "scissors"];

    return choice[choiceNum];
}

function getHumanChoice(){
        let correct = 0;
        let hChoice = "";
        
        hChoice = prompt("Whats your choice? [rock, paper, scissors]");

        while (correct === 0){
            hChoice = hChoice.toLowerCase();

            if (hChoice === "rock" || hChoice === "paper" || hChoice === "scissors"){ 
                return hChoice;
                correct = 1;
            }
            else {
                hChoice = prompt("You entered wrong value, try again. Whats your choice? [rock, paper, scissors]");
            }
        }
}

function judgement(cChoice, hChoice){
    if (cChoice === hChoice){
        return "Draw!";
    }
    else if(cChoice === "rock" && hChoice === "paper"){
        return "You won!"        
    }
    else if(cChoice === "paper" && hChoice === "rock"){
        return "Computer won!"        
    }
    
    else if(cChoice === "scissors" && hChoice === "rock"){
        return "You won!"        
    }
    else if(cChoice === "rock" && hChoice === "scissors"){
        return "Computer won!"        
    }
    
    else if(cChoice === "paper" && hChoice === "scissors"){
        return "You won!"        
    }
    else if(cChoice === "scissors" && hChoice === "paper"){
        return "Computer won!"        
    }
}

function playRound(){
    let score = 0;
    let cChoice = getComputerChoice();
    console.log(`Computer choice is: ${cChoice}`);
    let hChoice = getHumanChoice();
    console.log(`Human choice is ${hChoice}`);

    if (hChoice !== "Enter correct value.") {
        score = judgement(cChoice, hChoice);
        if (score === "Computer won!"){
            return "Computer"
        }
        else if (score === "You won!"){
            return "Human"
        }
    }
    else{
        console.log("Try one more time, you entered wrong value.")
    }
}

for (i=0; i<=4; i++){
    result = playRound();
    if (result === "Computer"){
        cScore++;
    }
    else if (result === "Human"){
        hScore++;
    }
    console.log(cScore + "," + hScore);
}

if (cScore>hScore) console.log("Computer won game.");
else if (cScore<hScore) console.log("Human won game.");
else console.log("Draw");
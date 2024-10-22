let hScore = 0;
let cScore = 0;
let result = 0;
let selection = "";

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random(2)*3);
    let choice = ["rock", "paper", "scissors"];

    
    cSelection.textContent = `Computer selection is: ${choice[choiceNum]}`;
    return choice[choiceNum];
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

    let result = "";
    let cChoice = getComputerChoice();
    console.log(`Computer choice is: ${cChoice}`);
    console.log(`Human choice is: ${selection}`);
    hSelection.textContent = `Human selection is: ${selection}`;

    result = judgement(cChoice, selection);
    //console.log(result);
    if (result === "You won!"){
        hScore++;
        console.log(hScore);
        humanField.textContent = `Human: ${hScore}`
        computerField.textContent = `Computer: ${cScore}`
    }
    else if (result === "Computer won!"){
        cScore++;
        console.log(cScore);
        computerField.textContent = `Computer: ${cScore}`
        humanField.textContent = `Human: ${hScore}`
    }

}


///////////////////////////DOM////////////////////////////////
const btnChoice = document.querySelectorAll("button");

btnChoice.forEach((button) => {
    button.addEventListener("click", () => {
        selection = button.id;
        playRound();

        if ((hScore<5) && (cScore <5)){
            winner.textContent = "";
        }
        else if (hScore === 5){
            winner.textContent = 'Winner is: Human';
            hScore = 0;
            cScore = 0;
            computerField.textContent = `Computer: ${cScore}`
            humanField.textContent = `Human: ${hScore}`
        } 
        else if (cScore === 5){
            winner.textContent = 'Winner is: Computer';
            hScore = 0;
            cScore = 0;
            computerField.textContent = `Computer: ${cScore}`
            humanField.textContent = `Human: ${hScore}`
        }
    });
});


/////////////////////////DOM METHODS///////////////////////////
const container = document.querySelector("#container");

const cSelection = document.createElement("div");
cSelection.classList.add("computerSelection");
cSelection.textContent = "Computer selection is:";

container.appendChild(cSelection);

const hSelection = document.createElement("div");
hSelection.classList.add("humanSelection");
hSelection.textContent = "Human selection is:";

container.appendChild(hSelection);


const dTitle = document.createElement("div");
dTitle.classList.add("title");
dTitle.textContent = "Result:"
dTitle.style.border = "2px, solid, black";
dTitle.style.width = "500px";
dTitle.style.margin = "20px auto";
dTitle.style.display = "flex";
dTitle.style.justifyContent = "center";

container.appendChild(dTitle);

const divider = document.createElement("div");

    divider.style.display = "flex";
    divider.style.justifyContent = "center";
    divider.style.margin = "0px auto";
    divider.style.width = "500px";

    const humanField = document.createElement("div")
    humanField.classList.add("hField");
    humanField.textContent = `Human: ${hScore}`
    humanField.style.width = "250px";

    divider.appendChild(humanField);

    const computerField = document.createElement("div")
    computerField.classList.add("cField");
    computerField.textContent = `Computer: ${cScore}`
    computerField.style.width = "250px";

    divider.appendChild(computerField);

container.appendChild(divider);

const winner = document.createElement("div");
winner.classList.add("winner");
//winner.textContent = 'Winner is:';

container.appendChild(winner);
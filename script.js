const winCondition = 2;
let player_wins=0;
let pc_wins=0;
let ties = 0;
const choices = ["rock", "paper", "scissors"];
let pc_choice;
let player_choice = "";
let round = 0;

console.log("Enter player name: ");
const player = prompt("Type in your name:");
console.log(`Get ready ${player}`);
alert(`Get ready ${player}`);
RockPaperScissors();

function RockPaperScissors(){   
    PlayRound();
    DecideRound(round, player_choice, pc_choice);
    if(DecideWinner()==="") RockPaperScissors();
    else {
        console.log("Winner is: " + DecideWinner());
        alert("Winner is: " + DecideWinner());
    }
}

function PlayRound()
{
    PlayerChoice();
    pc_choice = choices[Math.floor(Math.random() * choices.length)];
    round++;
}

function PlayerChoice()
{
    player_choice = (prompt(`Choose out of: ${choices[0]}, ${choices[1]}, ${choices[2]}`)).toLowerCase();
    if(!choices.includes(player_choice)){
        alert(`${player_choice} is an invalid choice!`);
        PlayerChoice(); 
    }
}

function DecideRound(r, p1, p2)
{
    if(p1===p2) {ties++; ConsoleOutput(r, ties, player_wins, pc_wins);}
    else if (p1==="rock" && p2 === "scissors" ||
             p1==="paper" && p2 === "rock" ||
             p1==="scissors" && p2 === "paper" )
            {player_wins++; ConsoleOutput(r, ties, player_wins, pc_wins);}
    else    {pc_wins++; ConsoleOutput(r, ties, player_wins, pc_wins);}
}

function DecideWinner()
{
    if (player_wins===winCondition) return player;
    else if (pc_wins===winCondition) return "COMPUTER";
    else return "";
}

function ConsoleOutput(r, ties , plWins, pcWins)
{
console.log(`${player} chooses: ${player_choice}. Computer chooses: ${pc_choice}.\n
Round: ${r}. Ties: ${ties}. ${player} wins: ${plWins}. Computer wins: ${pcWins}.`);
alert(`${player} chooses: ${player_choice}. Computer chooses: ${pc_choice}.\n
Round: ${r}. Ties: ${ties}. ${player} wins: ${plWins}. Computer wins: ${pcWins}.`);
}
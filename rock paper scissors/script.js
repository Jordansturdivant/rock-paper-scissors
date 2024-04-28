// This function is for the user choice and to determine the winner
function makeChoice(userChoice) {
    // This is the array of choices for the computer
    var choices = ['rock', 'paper', 'scissors'];
    // This will randomly select the computer's choice
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
    // This will tell us who the winner will be based off of both choices 
    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
  
    // Tells us the result on the page
    document.getElementById('result').innerText = `You chose ${userChoice}, and the computer chose ${computerChoice}. ${result}`;
  }
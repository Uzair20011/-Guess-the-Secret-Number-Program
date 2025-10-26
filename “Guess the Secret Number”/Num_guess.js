let playAgain = true; 

while (playAgain) {  
  let secret = 7; 
  let guess; 
  let maxTries = 3; 

  console.log("🎯 Guess the secret number between 1 and 10");

  for (let i = 1; i <= maxTries; i++) {
    guess = Number(prompt(`Attempt ${i}: Enter your guess:`)); 

    if (guess === secret) { 
      console.log("✅ Correct! You guessed the number!");
      break;
    } 
    else if (guess < secret) {
      console.log("Too low! Try a higher number.");
    } 
    else {
      console.log("Too high! Try a lower number.");
    }

    if (i === maxTries) {
      console.log("❌ Out of attempts! The correct number was " + secret);
    }
  }


  let choice = prompt("Do you want to play again? (yes/no):").toLowerCase();

  if (choice !== "yes") {
    playAgain = false; 
    console.log("👋 Thanks for playing!");
  }
}

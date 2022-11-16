//Play Score
let score = 0 

// Function to get Computers Choice
const getComputerChoice = () =>{
    let choice = ['rock','paper','scissor']
    let randomIndex = Math.floor(Math.random()*choice.length)
    let finalChoice = choice[randomIndex]
    return finalChoice
  }
  
 
// Function to generate result: does all the logical stuff
  const getResult = (humanChoice, computerChoice) =>{
    if((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')){
        score += 1
        return `Human: ${humanChoice} won over Computer: ${computerChoice}.\n You won!!! so your score was updated by 1`
    }
    else if(humanChoice === computerChoice){
       score += 0 
      return `Human: ${humanChoice} and Computer: ${computerChoice} were same.\n It was draw!!! no change in score.`
    }
    else{
      score -= 1
      return `Computer: ${computerChoice} won over Human: ${humanChoice}.\n You loss!!! so your score was reduce by -1`
    }
  }
  
  //Getting id from html file
  let endGame = document.getElementById('endGameButton')
  let result = document.getElementById('result')
  let playerScore = document.getElementById('player-score')
  
  // For click event on the button
  let playerChoice = document.querySelectorAll('.rpsButton')
  playerChoice.forEach(choice =>{
      choice.onclick = () =>{
        finalResult = getResult(choice.value.toLowerCase(), getComputerChoice())
        result.innerText = finalResult
        playerScore.innerText = `Score: ${score}`
      }
    }
  )
  
  // For click event on the endGame button
  endGame.onclick = () =>{
    score = 0
    playerScore.innerText = ''
    result.innerText =''
  }
// function Play() {
//   const homeSection = document.getElementById('home-screen');
//   //   console.log(homeSection.classList);
//   //hide home screen
//   homeSection.classList.add('hidden');

//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function removeBackgroundColorByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');

  const randomNumber = Math.random(alphabets) * alphabetString.length - 1;

  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  // console.log(alphabets);
  // console.log(index);

  return alphabet;
}

function setBackgrouncolorbyId(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function handleKeyUpPress(event) {
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);

  // stop the game
  if (playerPressed === 'Escape') {
    gameOver();
  }

  // get the expected to press
  const currentAlphabet = document.getElementById('current-alphabet');
  const currentText = currentAlphabet.innerText;
  const expectedAlphabet = currentText.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log('you got a point');

    const currentScore = getTextelementbyID('current-score');
    const updatedScore = currentScore + 1;
    setTextElementByID('current-score', updatedScore);

    // //update score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // //increase the score by   1
    // const newScore = currentScore + 1;
    // //show the updated score
    // currentScoreElement.innerText = newScore;
    removeBackgroundColorByID(expectedAlphabet);
    continueGame();
  } else {
    console.log('you missed to , you lost a life');

    const currentlife = getTextelementbyID('current-life');
    const updatedlife = currentlife - 1;
    setTextElementByID('current-life', updatedlife);

    if (updatedlife === 0) {
      console.log('game over');
      gameOver();
    }

    //get the life

    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // // decrease life by 1

    // const newLife = currentLife - 1;
    // // show the updated life
    // currentLifeElement.innerText = newLife;
  }
}

function getTextelementbyID(elementID) {
  const element = document.getElementById(elementID);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function getElementTextByID(elementID) {
  const element = document.getElementById(elementID);
  const text = element.innerText;
  return text;
}

function setTextElementByID(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}

document.addEventListener('keyup', handleKeyUpPress);

function continueGame() {
  const alphabet = getARandomAlphabet();

  //set random alphabet
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  // set background color
  setBackgrouncolorbyId(alphabet);
}

function Play() {
  elementHiddenbyID('home-screen');
  elementHiddenbyID('final-score');
  showElementbyID('play-ground');
  // reset life and score
  setTextElementByID('current-life', 5);
  setTextElementByID('current-score', 0);
  continueGame();
}

function gameOver() {
  elementHiddenbyID('play-ground');
  showElementbyID('final-score');

  // updated final score

  const lastScore = getTextelementbyID('current-score');
  setTextElementByID('last-score', lastScore);

  //clear the last selected alphabet
  const currentAlphabet = getElementTextByID('current-alphabet');
  removeBackgroundColorByID(currentAlphabet);
}

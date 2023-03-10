const gameDescText = '';
const gameDescription = document.querySelector('#gameDescription');

gameDescription.innerHTML = gameDescText;

document.querySelector('#startGameBtn').addEventListener('click', startGame);
document.querySelector('#questionContainer').classList.add('hidden');

let playerName = '';

const questions = [
  {
    questionText: 'Vilken populär karaktär heter Fifi Brindacier på franska?',
    answerOptions: [
      'Pippi Långstrump',
      'Lotta på Bråkmakargatan',
      'Emil i Lönneberga'
    ],
    correctAnswer: 'Pippi Långstrump',
  },
  {
    questionText: 'Vilket djur diskar bäst??',
    answerOptions: [
      'Zebran',
      'Disk-kon',
      'Gorillan'
    ],
    correctAnswer: 'Disk-kon',
  },
  {
    questionText: 'Vilken frukt är den farligaste?',
    answerOptions: [
      'Blodapelsinen',
      'Granatäpplet',
      'Vattenmelonen'
    ],
    correctAnswer: 'Granatäpplet',
  },
  {
    questionText: 'Heter det en rak kurva eller ett rak kurva?',
    answerOptions: [
      'En rak kurva',
      'Ett rak kurva',
      'Det finns inga raka kurvor'
    ],
    correctAnswer: 'Det finns inga raka kurvor',
  },
  {
    questionText: 'Vad heter karaktären som Alexandra nästan delar sitt namn med?',
    answerOptions: [
      'Daenerys',
      'Build',
      'Tamagochi'
    ],
    correctAnswer: 'Daenerys',
  }
];


function startGame() {
  console.log('startGame');
  // Spara spelarens nick
  playerName = document.querySelector('#playerNameInput').value;
  
  // Dölj HTML-elementen
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  document.querySelector('#questionContainer').classList.remove('hidden');
  nextQuestion();
}


const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');
const questionFeedback = document.querySelector('#questionFeedback');

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

let currentQuestion = 0;
let points = 0;

function checkAnswer(e) {
  const userAnswer = e.currentTarget.innerHTML; // vilket svarsalternativ
  // vilken som är den aktuella frågan
  //varför -1: - 1 för att vi i nextQuestion har redan "gått vidare" till nästa fråga
  // så vi vill ha rätt svar för föregående fråga
  const correctAnswer = questions[currentQuestion - 1].correctAnswer;
  if (userAnswer === correctAnswer) { // jämföra frågans rätt svar med tryckt knapp
    points++;
    questionFeedback.innerHTML = "Yay! Du är inte komplett korkad :D";
  } else {
    questionFeedback.innerHTML = "Ack ack! Besviken!";
  }
  nextQuestion();
}

function nextQuestion() {
  console.log(currentQuestion, questions.length)
  if (currentQuestion >= questions.length) { // > =
    gameOver();
    displayScoreBoard();
    return;
  }

  questionTextDiv.innerHTML = questions[currentQuestion].questionText;
  answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];

  currentQuestion++; // += 1, currentQuestion = currentQuestion + 1;
}

document.querySelector('#restartGameBtn').addEventListener('click', restartGame);

function restartGame() {
  document.querySelector('#gameOver').style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'block';
  document.querySelector('#scoreBoard').classList.add('hidden');
  document.querySelector('#restartGameBtn').classList.add('hidden');
  currentQuestion = 0;
  points = 0;
}

function gameOver() {
  questionFeedback.innerHTML = "";
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionContainer').classList.add('hidden');
  document.querySelector('#scoreBoard').classList.remove('hidden');
  document.querySelector('#restartGameBtn').classList.remove('hidden');
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng!`;
}

function displayScoreBoard() {
  let scoreBoard = document.querySelector('#scoreBoard')
  playerName = document.querySelector('#playerNameInput').value;

  scoreBoard.innerHTML += `      
  <ol>
    <li>Namn: ${playerName} Poäng: ${points}</li>
  </ol>`;


}

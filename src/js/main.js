const gameDescText = 'Välkommen till Sussies och Aurelias kluriga quiz!';
const gameDescription = document.querySelector('#gameDescription');

gameDescription.innerHTML = gameDescText;

document.querySelector('#startGameBtn').addEventListener('click', startGame);
document.querySelector('#questionContainer').classList.add('hidden');

let playerName = '';

const questions = [
  {
    questionText: 'Vad kallas resultatet i en division?',
    answerOptions: [
      'Nämnare',
      'Summa',
      'Kvot'
    ],
    correctAnswer: 'Kvot',
  },
  {
    questionText: 'Vad kallas de två sidorna på ett tyg?',
    answerOptions: [
      'Avig och räta',
      'Sträv och mjuk',
      'Insidan och utsidan'
    ],
    correctAnswer: 'Avig och räta',
  },
  {
    questionText: 'Hur många sekunder är det på ett dygn (24 h)?',
    answerOptions: [
      '86400',
      '92300',
      '72500'
    ],
    correctAnswer: '86400',
  },
  {
    questionText: 'Hur många gånger åker en upp och ner i bergochdalbanan Helix?',
    answerOptions: [
      'Åtta',
      'Fem',
      'Sju'
    ],
    correctAnswer: 'Sju',
  },
  {
    questionText: 'När stod slaget i Hastings?',
    answerOptions: [
      '1066',
      '1130',
      '1632'
    ],
    correctAnswer: '1066',
  },
  {
    questionText: 'Vad heter fotbollsspelaren som förolyckades över Engelska kanalen 2019?',
    answerOptions: [
      'Sala',
      'Ronaldo',
      'Lewandowski'
    ],
    correctAnswer: 'Sala',
  },
  {
    questionText: 'Vilket djur diskar bäst?',
    answerOptions: [
      'Disk-kon',
      'Lejonet',
      'Katten'
    ],
    correctAnswer: 'Disk-kon',
  },
  {
    questionText: 'Hur många stavar gick åt under inspelningen av Harry Potter?',
    answerOptions: [
      '80',
      '60',
      '70'
    ],
    correctAnswer: '80',
  },
  {
    questionText: 'Hur många månader är elefanten dräktig?',
    answerOptions: [
      '12 månader',
      '18 månader',
      '22 månader'
    ],
    correctAnswer: '22 månader',
  },
  {
    questionText: 'Vad betyder att ta långa benet före?',
    answerOptions: [
      'Mäta vilket ben som är längst',
      'Gå snabbare',
      'Hoppa på ett ben'
    ],
    correctAnswer: 'Gå snabbare',
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
    // ge ett poäng!
    points++;
  } else {
    // ge minus
  }
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestion >= questions.length) { // > =
    gameOver();
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
  currentQuestion = 0;
  points = 0;
}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionContainer').classList.add('hidden');
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng!`;
  // document.querySelector('#gameOver').classList.toggle('hidden');
}
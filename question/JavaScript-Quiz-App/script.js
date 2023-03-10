const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const next = document.querySelector('.next')
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    next.classList.remove('hide')
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Ng??y ch??ng ta b???t ?????u y??u ?',
    answers: [
      { text: '20/11/2021', correct: false },
      { text: '11/10/2021', correct: false },
      { text: '4/11/2020', correct: false },
      { text: '4/11/2021', correct: true }
    ]
  },
  {
    question: 'Bu???i ??i ch??i ?????u ti??n hai ?????a ??? ????u ?',
    answers: [
      { text: 'Home', correct: true },
      { text: 'Tony', correct: false },
      { text: 'Emy', correct: false },
      { text: 'HongKong', correct: false }
    ]
  },
  {
    question: 'Anh th??ch m??u g?? ?',
    answers: [
      { text: 'Tr???ng', correct: false },
      { text: '??en', correct: true },
      { text: 'X??m', correct: false },
      { text: 'Xanh', correct: false }
    ]
  },
  {
    question: 'Anh sinh ng??y bao nhi??u ?',
    answers: [
      { text: '22/11/2001', correct: false },
      { text: '21/1/2002', correct: false },
      { text: '4/11/2004', correct: false },
      { text: '22/10/2002', correct: true }
    ]
  },
  {
    question: 'Ai l?? ng?????i n??i l???i y??u tr?????c?',
    answers: [
      { text: 'Em', correct: false },
      { text: 'Anh', correct: true }
    ]
  },
  {
    question: 'Ng??y hai ?????a ??i ch??i DaLat l?? m??ng m???y t???t ?',
    answers: [
      { text: '1', correct: false },
      { text: '4', correct: true },
      { text: '3', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'Anh cao m??t bao nhi??u ?',
    answers: [
      { text: '1m84', correct: false },
      { text: '1m82', correct: false },
      { text: '1m83', correct: true },
      { text: '1m80', correct: false }
    ]
  },
  {
    question: 'Anh th??ch em m???c style nh???t?',
    answers: [
      { text: 'L???nh l??ng', correct: false },
      { text: 'V??y v?? d???u d??ng', correct: true },
      { text: 'Sexy', correct: false },
      { text: '????? t??y', correct: false }
    ]
  },
  {
    question: 'Anh th?????ng l??m g?? khi r???nh?',
    answers: [
      { text: '??i b???c ?????u', correct: false },
      { text: '??i cafe', correct: true },
      { text: 'L??m b??i', correct: false },
      { text: 'Ng???', correct: false }
    ]
  },
  {
    question: 'Anh th??ch mang lo???i n??o ?',
    answers: [
      { text: 'Boots', correct: true },
      { text: 'Gi??y th??? thao', correct: false }
    ]
  }
]
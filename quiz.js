const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    questionContainer.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${questions[currentQuestionIndex].question}</h5>
          <ul class="list-group">
            ${questions[currentQuestionIndex].answers.map((answer, index) => `
              <li class="list-group-item">
                <input type="radio" name="answer" value="${index}"> ${answer}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }
  
  function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer && parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("next-button").style.display = "none";
      document.getElementById("submit-button").style.display = "block";
    }
  }
  
  function submitQuiz() {
    $('#resultModal .modal-body').text(`You scored ${score} out of ${questions.length}`);
    $('#resultModal').modal('show');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
  });
  
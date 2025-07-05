const questions = [         // COMPUTER QUIZ QUESTIONS-----
{
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
},  
{
    question: "What does HTML stand for?",
    options: ["HyperText Machine Language", "HyperText Markup Language", "HighText Markdown Language", "None of the above"],
    answer: "HyperText Markup Language"
 },
{
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
},
{
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>"
},
{
    question: "Which method is used to output data in JavaScript?",
    options: ["console.log()", "print()", "echo()", "log.console()"],
    answer: "console.log()"
},
{
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    answer: "Netscape"
},
{
    question: "What is the correct syntax to declare a variable in JavaScript?",
    options: ["var x = 10;", "int x = 10;", "x := 10;", "declare x = 10;"],
    answer: "var x = 10;"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
},
{
    question: "How do you call a function named myFunction in JavaScript?",
    options: ["call myFunction()", "myFunction()", "function myFunction()", "Call.myFunction()"],
    answer: "myFunction()"
},
 {
    question: "Which HTML element is used to embed JavaScript code?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>"
},                            
//HISTORY QUESTIONS--------                     
{
  question: "Who was the first Prime Minister of independent India?",
  options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
  answer: "Jawaharlal Nehru"
},
{
  question: "In which year did the Battle of Plassey take place?",
  options: ["1757", "1857", "1764", "1707"],
  answer: "1757"
},
{
  question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
  options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Mahatma Gandhi"],
  answer: "Rabindranath Tagore"
},
{
  question: "Who was known as the 'Iron Man of India'?",
  options: ["Bhagat Singh", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri", "Dr. B.R. Ambedkar"],
  answer: "Sardar Vallabhbhai Patel"
},
{
  question: "Which Mughal emperor built the Taj Mahal?",
  options: ["Babur", "Akbar", "Jahangir", "Shah Jahan"],
  answer: "Shah Jahan"
},

// ENGLISH QUESTIONS------
{
  question: "Which part of speech is the word 'quickly'?",
  options: ["Adjective", "Noun", "Adverb", "Verb"],
  answer: "Adverb"
},
{
  question: "Choose the correct spelling:",
  options: ["Accomodation", "Acommodation", "Accommodation", "Accommadation"],
  answer: "Accommodation"
},
{
  question: "What is the plural form of 'child'?",
  options: ["Childs", "Childes", "Children", "Childrens"],
  answer: "Children"
},
{
  question: "Which tense is used in the sentence: 'She has been studying for two hours'?",
  options: ["Past continuous", "Present perfect continuous", "Future perfect", "Present simple"],
  answer: "Present perfect continuous"
},
{
  question: "Identify the synonym of the word 'happy':",
  options: ["Sad", "Joyful", "Tired", "Angry"],
  answer: "Joyful"
}
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    //Load the current question
    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      document.getElementById("question").textContent = currentQuestion.question;
      document.getElementById("options").innerHTML = "";

      currentQuestion.options.forEach((option, index) => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = option;
        radio.id = "option" + index;

        const label = document.createElement("label");
        label.htmlFor = radio.id;
        label.textContent = option;

        const br = document.createElement("br");

        document.getElementById("options").appendChild(radio);
        document.getElementById("options").appendChild(label);
        document.getElementById("options").appendChild(br);
      });

      document.getElementById("feedback").textContent = "";
    }

    
    function submitAnswer() { //Submit answer and give feedback
      const selectedOption = document.querySelector('input[name="option"]:checked');

      if (!selectedOption) {
        alert("Please select an answer!");
        return;
      }

      const userAnswer = selectedOption.value;
      const correctAnswer = questions[currentQuestionIndex].answer;

      if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "✅ Correct!";
        score++;
      } else {
        document.getElementById("feedback").textContent = "❌ Wrong! Correct answer: " + correctAnswer;
      }

      document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;

      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          loadQuestion();
        } else {
          showFinalResult();
        }
      }, 1500);
    }

    //Show final result --
    function showFinalResult() {
      document.getElementById("quiz-container").innerHTML = `
        <h2>🎉 Quiz Completed!</h2>
        <p>You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>
        <button onclick="location.reload()">🔁 Restart Quiz</button>
      `;
    }

   
    loadQuestion();
  
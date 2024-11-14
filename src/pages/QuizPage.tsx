import backgroundImage from "../assets/img/3.png";
import { useState } from "react";
import { questions } from "../data/quizQuestions";
import euro from "../assets/img/4e.png";
import { LoginProps } from "./LoginPage";

const QuizPage = ({ onLogin }: LoginProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(localStorage.getItem("balance") ?? 0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (answer: string) => {
    setAnswered(true);
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => {
        const newScore = +prevScore + 100;
        localStorage.setItem("balance", newScore.toString());
        return newScore;
      });
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer("");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Игра завершена! Ваш счет: ${score}`);
    }
  };

  const { question, options } = questions[currentQuestionIndex];
  const rightAnswer = selectedAnswer === questions[currentQuestionIndex].answer;
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex justify-around content-center w-3/4 p-3">
        <h1 className="m-3 p-3 bg-blue-600 rounded-3xl">
          Кто хочет стать миллионером?
        </h1>
        <button
          className="bg-red-500 h-3/4 m-2"
          onClick={() => {
            onLogin("");
          }}
        >
          EXIT
        </button>
      </div>

      <div className="flex-col self-end m-7">
        <div className={`w-48 ${rightAnswer ? "animate-bounce" : ""}`}>
          <img src={euro} alt="euro" />
        </div>
        <h2 className="p-4 border rounded-3xl border-l-amber-300 border-solid font-bold bg-red-600">
          Ваш счет: {score} Euro
        </h2>
      </div>

      <div className="m-8">
        <div>
          <h2 className="mb-2 p-6 rounded-3xl font-bold bg-blue-600">
            Вопрос {currentQuestionIndex + 1}: {question}
          </h2>
          <div className="m-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  height: "60px",
                  backgroundColor:
                    selectedAnswer === option
                      ? option === questions[currentQuestionIndex].answer
                        ? "green"
                        : "red"
                      : "#ddd",
                  color: "#000",
                  padding: "15px 50px",
                  margin: "0 10px",
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "monospace",
                  fontSize: "25px",
                }}
                disabled={answered}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {answered && (
          <div>
            <p
              style={{
                padding: "15px 50px",
                fontSize: "25px",
                border: "2px solid white",
              }}
            >
              Правильный ответ: {questions[currentQuestionIndex].answer}
            </p>
            <button
              onClick={handleNextQuestion}
              style={{
                padding: "20px 40px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "25px",
              }}
            >
              Следующий вопрос
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

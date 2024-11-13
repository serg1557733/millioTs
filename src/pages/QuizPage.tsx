import backgroundImage from "./assets/img/3.png";
import { useState } from "react";
import { questions } from "../data/quizQuestions";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (answer: string) => {
    setAnswered(true);
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 100);
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
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "10px",
        }}
      >
        Мишка хочет стать миллионером?
      </h1>
      <h2
        style={{
          padding: "10px",
          alignSelf: "flex-start",
          color: "green",
          background: "white",
          borderRadius: "20px",
        }}
      >
        Ваш счет: {score} Euro
      </h2>
      <div
        style={{
          margin: "40px",
          alignSelf: "center",
        }}
      >
        <div>
          <h2
            style={{
              padding: "10px",
              fontSize: "35px",
              background: "white",
              color: "blue",
              borderRadius: "20px",
            }}
          >
            Вопрос {currentQuestionIndex + 1}: {question}
          </h2>
          <div style={{ marginBottom: "20px" }}>
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
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

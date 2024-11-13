import QuizPage from "./pages/QuizPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

import QuizPage from "./pages/QuizPage";
import Login from "./pages/LoginPage";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("auth")
  );

  const handleTokenUpdate = (newToken: string) => {
    localStorage.setItem("auth", newToken);
    setToken(newToken);
  };
  return (
    <>
      {token ? (
        <QuizPage onLogin={handleTokenUpdate} />
      ) : (
        <Login onLogin={handleTokenUpdate} />
      )}
    </>
  );
};
export default App;

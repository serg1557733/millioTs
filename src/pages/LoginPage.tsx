import { useState } from "react";
export type LoginProps = {
  onLogin: (token: string) => void;
};
const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "mykhailo" && password === "admin") {
      localStorage.setItem("auth", "true");
      onLogin("true");
    } else {
      alert("Неверные имя пользователя или пароль"); //test
    }
  };
  return (
    <div className="flex-col content-center justify-items-center w-[100vw] h-[100vh]">
      <div className="m-2 w-1/3">
        <h1>Login</h1>
        <h2>Введите свое имя и пароль</h2>
      </div>

      <div className="flex flex-col content-between m-3 w-1/2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

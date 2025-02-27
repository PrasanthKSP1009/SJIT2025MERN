import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("https://sjit2025mern.onrender.com/login", {
      email,
      password,
    });
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/");
    } else {
      alert(req.data.message);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        Email:{" "}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /> <br />
        Password:{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <p>
        Create an account?<Link to="/signup">Signup</Link>
      </p>
    </section>
  );
}
export default Login;

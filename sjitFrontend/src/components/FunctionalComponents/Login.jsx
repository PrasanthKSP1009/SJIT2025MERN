import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required /><br />
        <button type="submit">Login</button>
      </form>
      <p>Create an account?<Link to='/signup'>Signup</Link></p>
    </section>
  );
}
export default Login;

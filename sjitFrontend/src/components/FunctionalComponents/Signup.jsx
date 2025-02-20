import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label htmlFor="name">First Name:</label>
        <input type="text" id="uname" required /><br />
        <label htmlFor="name">Last Name:</label>
        <input type="text" id="name" required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?<Link to='/login'>Login</Link></p>
    </div>
  );
}
export default Signup;

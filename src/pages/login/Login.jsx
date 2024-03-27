import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <form>
        <h2>Sign In</h2>
        <label htmlFor="email"></label>
        <input type="email" id="email" />
        <label htmlFor="password"></label>
        <input type="password" id="password" />
        <button type="submit" className="signInBtn">
          Sign In
        </button>
        <button>Forgot Password?</button>
      </form>
    </div>
  );
}

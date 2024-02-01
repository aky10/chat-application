import { useRef, useState } from "react";

const Login = () => {
  //   const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  //   const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <h1 className="sign in">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="name"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="email"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="password"
        />
        <button className="submit-btn">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {
          <p onClick={toggleSignInForm} className="paraStatus">
            {!isSignInForm
              ? "New to Chat App? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        }
      </form>
    </div>
  );
};
export default Login;

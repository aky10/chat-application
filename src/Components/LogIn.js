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

  //   const handleButtonCLick = () => {
  //     //validate form
  //     const msg = checkValidData(email.current.value, password.current.value);
  //     setErrorMessage(msg);

  //     if (msg) return;

  //     if (!isSignInForm) {
  //       // sign up logic
  //       createUserWithEmailAndPassword(
  //         auth,
  //         email.current.value,
  //         password.current.value
  //       )
  //         .then((userCredential) => {
  //           // Signed up
  //           const user = userCredential.user;
  //           updateProfile(user, {
  //             displayName: name.current.value,
  //             photoURL: USER_AVATAR,
  //           })
  //             .then(() => {
  //               const { uid, email, displayName, photoURL } = auth.currentUser;
  //               dispatch(
  //                 addUser({
  //                   uid: uid,
  //                   email: email,
  //                   displayName: displayName,
  //                   photoURL: photoURL,
  //                 })
  //               );
  //             })
  //             .catch((error) => {
  //               setErrorMessage(error.message);
  //             });
  //         })
  //         .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           setErrorMessage(errorCode + "-" + errorMessage);
  //         });
  //     } else {
  //       //sign in
  //       signInWithEmailAndPassword(
  //         auth,
  //         email.current.value,
  //         password.current.value
  //       )
  //         .then((userCredential) => {
  //           // Signed in
  //           const user = userCredential.user;
  //         })
  //         .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           setErrorMessage(errorCode + "-" + errorMessage);
  //         });
  //     }
  //   };

  return (
    <div className="login">
      {/* <Header /> */}
      {/* <div className="absolute">
        <img
          className="h-screen md:h-auto object-cover md:w-screen"
          alt="bg"
          src={BG_URL}
        />
      </div> */}

      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <h1 className="sign in">
          Sign In
          {/* {isSignInForm ? "Sign In" : "Sign Up"} */}
        </h1>
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
        {/* <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p> */}
        <button className="submit-btn">
          Sign In
          {/* {isSignInForm ? "Sign In" : "Sign Up"}
           */}
        </button>
        {/* <p onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Chat App? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p> */}
      </form>
    </div>
  );
};
export default Login;

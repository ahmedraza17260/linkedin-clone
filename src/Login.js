import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
// import { Link, useHistory } from "react-router-dom";

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    if (!name) {
      return alert("Name is Required");
    }
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                profileURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        alt="Linkedin Logo"
      />

      <form>
        <h5>Name</h5>
        <input
          required
          placeholder="Required if Registration"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h5>Profile Pic URL</h5>
        <input
          required
          placeholder="Profile Pic URL (Optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <h5>E-mail</h5>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          onClick={loginToApp}
          className="login__signInButton"
        >
          Sign In
        </button>
      </form>

      {/* <p>
        By clicking Agree & Join, you agree to the FAKE LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </p> */}
      <p className="login__button">
        Not a member ?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
      {/* <button onClick={register} className="login__registerButton">
          Create your Linkedin Account
        </button> */}
    </div>
  );
}

export default Login;

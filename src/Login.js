import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { fire } from "./firebase";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((fire) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((fire) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          class="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div class="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" class="login__signinbutton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazons Conditions of Use &amp; Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} class="login__registerbutton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

import React, { FormEvent, useState } from "react";
import auth from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form
        onSubmit={(e: FormEvent) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default signin;

import React, { useState } from 'react'
import {
    signInWithPhoneNumber,
    RecaptchaVerifier,
    getAuth,
  } from "firebase/auth";
  import { auth } from "../firebase";

const useLogin = (phoneNumber) => {
    const [user,setUser]= useState(false)

    const appVerifier = (window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    ));
    console.log("submit called");

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("message sent");
        confirmationResult.confirm("870066").then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log("signedin successfully")
          console.log(user)
          setUser(user)

          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        console.log("error--> ", error);
        // Error; SMS not sent
        // ...
      });

  return user
}

export default useLogin
import React, { useContext, useEffect } from "react";
import Auth from "../components/Auth";
import { searchContext } from "../context/searchContext";

const Signup = () => {
  const { showSearch, openSearchBar, closeSearchBar } =
    useContext(searchContext);
  useEffect(() => {
    closeSearchBar();
    return function () {
      openSearchBar();
    };
  }, []);
  return (
    <Auth
      type="signup"
      heading="Looks like you're new here!"
      subheading="Sign up with our mobile number to get started"
      mainbuttonText="Continue"
      secondbuttonText="Existing user?log in"
      googlebuttonText="Signup with Google"
      secondbuttonLink="/login"
      redirectafterAuth="/editprofile"
    />
  );
};

export default Signup;

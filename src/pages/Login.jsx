import Auth from "../components/Auth";
import React, { useContext, useEffect } from "react";
import { searchContext } from "../context/searchContext";
const Login = () => {
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
      heading="Login"
      subheading="Get access to your Orders,
      Wishlist and Recommendations"
      mainbuttonText="Request Otp"
      secondbuttonText="New to Flipkart?create an account"
      secondbuttonLink="/signup"
      redirectafterAuth="/editprofile"
    />
  );
};

export default Login;

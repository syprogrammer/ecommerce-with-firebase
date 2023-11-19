import AuthLeft from "../components/AuthLeft";
import { Link } from "react-router-dom";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = ({
  heading,
  subheading,
  mainbuttonText,
  secondbuttonText,
  secondbuttonLink,
  redirectafterAuth,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState();
  const [showOtpField, setShowOtpField] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const inPhoneNumber = `+91${phoneNumber}`;
    const appVerifier = (window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    ));
    console.log("submit called");

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      inPhoneNumber,
      appVerifier
    );
    // setShowOtpField(true);
    let otp = prompt("Enter the otp")
    const result = await confirmationResult.confirm(otp);
    if(result){
      navigate("/editprofile")
    }
    console.log(result)

  };
  
  return (
    <div className="min-h-[70vh] px-1 rounded-md h-full my-2 lg:my-4 flex flex-col lg:flex-row  lg:w-[60%]  mx-auto">
      <div className="lg:w-[40%] ">
        <AuthLeft heading={heading} subheading={subheading} />
      </div>
      <div className="right lg:w-[60%] bg-white ">
        <form onSubmit={submit} className="py-10 px-5">
          <input
            className="border-b p-1 w-full outline-none"
            placeholder="Enter Mobile number"
            required
            minLength={10}
            maxLength={10}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {showOtpField && (
            <input
              className="border-b p-1 mt-4 w-full outline-none"
              placeholder="Enter Your Otp"
              required
              minLength={6}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          <p className="mt-10 mb-2 text-gray-500 text-[10px] flex gap-1">
            <span>By continuing,you agree to Flipkart's</span>
            <span className="text-blue-500">Terms of Use</span>
            <span>and</span>
            <span className="text-blue-500">Privacy Policy</span>
          </p>
          <button
            type="submit"
            className="bg-[#fb641b] font-semibold  w-full text-center text-white my-2 py-2"
          >
            {showOtpField ? "Submit" : mainbuttonText}
          </button>

          <div id="recaptcha-container" className="recaptcha-container"></div>
          <Link to={secondbuttonLink}>
            <button
              id="sign-in-button"
              className="sign-in-button shadow-md font-semibold text-sm py-2 w-full text-[#2874f0] text-center my-1 "
            >
              {secondbuttonText}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Auth;

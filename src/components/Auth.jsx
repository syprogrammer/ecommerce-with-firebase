import AuthLeft from "../components/AuthLeft";
import { Link } from "react-router-dom";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Auth = ({
  heading,
  subheading,
  mainbuttonText,
  secondbuttonText,
  secondbuttonLink,
  redirectafterAuth,
}) => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const phoneNumber = "+917982561537";
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
        confirmationResult
          .confirm("870066")
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("signedin successfully");
            console.log(user);
            navigate(redirectafterAuth);
            // ...
          })
          .catch((error) => {
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
  };
  return (
    <div className="p-2 rounded-md h-full my-2 lg:my-4 flex flex-col lg:flex-row  lg:w-[60%]  mx-auto">
      <div className="lg:w-[40%] h-full">
        <AuthLeft heading={heading} subheading={subheading} />
      </div>
      <div className="right lg:w-[60%] bg-white ">
        <form className="py-10 px-5">
          <input
            className="border-b p-1 w-full outline-none"
            placeholder="Enter Mobile number"
          />
          <p className="mt-10 mb-2 text-gray-500 text-[10px] flex gap-1">
            <span>By continuing,you agree to Flipkart's</span>
            <span className="text-blue-500">Terms of Use</span>
            <span>and</span>
            <span className="text-blue-500">Privacy Policy</span>
          </p>
          <button
            onClick={submit}
            className="bg-[#fb641b] font-semibold  w-full text-center text-white my-2 py-2"
          >
            {mainbuttonText}
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

import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();

  return (
    <div className="bg-blue-100 w-screen h-screen flex flex-col lg:flex-row items-center justify-evenly">
      <div className="flex flex-col gap-4 text-2xl items-start">
       <p className="text-blue-700 text-4xl font-bold italic">Flipkart</p>
        <p className="flex  items-center gap-2">
          <span className="text-xl font-bold">404</span>
          <span>That's an error</span>
         
        </p>
        <span>Contact us if problem persist</span>
        <Link to="/" className="bg-orange-700 text-white py-2 px-4 rounded-md cursor-pointer">
        Go Home
        </Link>
      </div>
      <div className="w-[70%] lg:w-1/3">
        <img src="/bluerobot.svg" />
      </div>
    </div>
  );
}

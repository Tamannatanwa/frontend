import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSumitHandler = (e) => {
    e.preventDefault();
    if(currState === "Sign up" && !isDataSubmitted){
      console.log("Sign-up form submitted with data:", {
        fullName,
        email,
        password,
        bio,
      });
      setIsDataSubmitted(true);
    } else {
      console.log("Login form submitted with data:", {
        email,
        password,
      });
      setIsDataSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* left side */}
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw,250px)]" />
      {/* right */}
      <form
      onSubmit={onSumitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex
      flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          <img
            src={assets.arrow_icon}
            alt="arrow"
            className="w-5 h-5 cursor-pointer"
          />
        </h2>
        {currState === "Sign up" &&  !isDataSubmitted && (
          <input
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name..."
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}
        {
          !isDataSubmitted && (
            <>
            <input
              type="email"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {currState === "Sign up" && (
              <textarea
                className="p-2 border border-gray-500 rounded-md focus:outline-none resize-none"
                placeholder="Bio..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
            )}
             <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition-colors duration-300"
            >
              {currState === "Sign up" ? "Create Account" : "Login Now"}
            </button>
            <div className="flex items-center gap-2 text-smtext-gray-500">
              <input type = "checkbox" id="terms" className="mr-2" />
              <p>Agree to terms and conditions of use & privacy policy</p>
            </div>
            <div>
              {
                currState === "Sign up" ? (
                  <p>
                    Already have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {
                        setCurrState("Login");
                        setIsDataSubmitted(false);
                      }}
                    >
                      Login
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => {
                        setCurrState("Sign up");
                        setIsDataSubmitted(false);
                      }}
                    >
                      Sign up
                    </span>
                  </p>
                )
              }
            </div>
            </>
          )
        }
      </form>
    </div>
  );
};

export default LoginPage;

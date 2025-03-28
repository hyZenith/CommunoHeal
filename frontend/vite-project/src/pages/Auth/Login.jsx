import React, { useState } from "react";
import Authlayout from "../../components/layouts/Authlayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // navigation items data with handlers
  const navItems = [
    {
      label: "Home",
      onClick: () => navigate("/"),
      className: "text-white cursor-pointer hover:text-[#d1e9ff]"
    },
    {
      label: "Login",
      onClick: () => {},
      className: "text-black italic font-light"
    },
    {
      label: "Register",
      onClick: () => navigate("/signin"),
      className: "text-white cursor-pointer hover:text-[#d1e9ff]"
    },
  ];


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
    }

    setError("");

    // Call the login API here
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1512px] h-[982px] relative">
        <div className="absolute w-full h-full top-[-3px] left-0">
          <div className="absolute w-1/2 h-[965px] top-0 left-[724px] bg-[url(/src/assets/images/Rectangle3.png)] " />
          {/* Semi-transparent card background with blur effect */}
          <div className="absolute w-[605px] h-[767px] top-[111px] left-[822px] bg-[#81fcff82] rounded-[40px] border border-solid border-[#8e8e93] ">
            {/* creat form here */}

            <div className="flex flex-1 items-center justify-center px-8">
              <div className="w-full max-w-md rounded-lg bg-teal-400/30 p-8 backdrop-blur-sm">
                <h2 className="m-25 text-5xl font-['Syne',Helvetica] text-white">login</h2>
                <form action="">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@gmail.com"
                      className="w-full rounded-md border-0 bg-white/90 p-3 text-gray-800"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="password" className="text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border-0 bg-white/90 p-3 pr-10 text-gray-800"
                        placeholder="********"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        aria-label="Toggle password visibility"
                      >
                        {" "}
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-teal-800 p-3 text-white transition hover:bg-teal-700 mt-8 mb-8"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-md bg-white p-3 text-gray-700 transition hover:bg-gray-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/*  left side content*/}
          <h2 className="absolute w-[534px] h-[89px] top-[266px] left-[111px] font-['Syne',Helvetica] font-normal text-black text-[64px] tracking-[0] leading-[64px]">
            Welcome back!
          </h2>
          <p className="absolute w-[530px] h-[148px] top-[327px] left-[115px] font-['Noto_Sans_Symbols',Helvetica] font-normal text-black text-4xl tracking-[0] leading-9">
            to make use of our system, please login with your credentials.
          </p>

          {/* Hospital illustration */}
          <img
            className="absolute w-[983px] h-[605px] top-[380px] left-0 object-cover"
            alt="Hospital illustration"
            src="/src/assets/images/Hospital.png"
          />
          {/* Navigation menu */}
          <nav className="absolute top-[61px] left-[1013px] flex items-center">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={item.onClick}
                  className={`font-['Inter',Helvetica] text-2xl tracking-[0] leading-6 px-6 py-2 ${item.className}`}
                >
                  {item.label}
                </div>
              ))}
            </nav>

          {/* Logo */}
          <div className="absolute w-[282px] h-[226px] top-[13px] left-52">
            <div className="relative h-[212px] bg-[url(/src/assets/images/logo.png)] bg-cover bg-[50%_50%]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

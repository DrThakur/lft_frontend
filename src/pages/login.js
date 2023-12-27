import { useRef } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import logo from "../Images/LFT-Logo.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

const images = [
  "man_with_laptop.png",
  "man_with_laptop.png",
  "man_with_laptop.png",
];

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const userRef = useRef(); // email fetching refrence
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);


  const apiURL = process.env.REACT_APP_API_URL

  console.log("My url", apiURL)
  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log("Email", userRef.current.value);
    console.log("Pass", passwordRef.current.value);
    try {
      const res = await axios.post(apiURL+"/users/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("response from backend", res);
      console.log(res.data);
      const token = res.data;
      console.log(token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      //Accessimg user data from decoded token
      const userData = decodedToken;
      console.log("UserData", userData);

      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      console.log(userData);
      console.log(userData.role);
      return navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMsg("*Incorrect email or password.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <div className="relative">
          <div className="slideshow-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`slide ${index === currentImage ? "active" : ""}`}
                style={{
                  maxWidth: "80%",
                  maxHeight: "80%",
                  margin: "auto",
                }}
              />
            ))}
          </div>
          <div className="indicators flex justify-center mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImage ? "activeIndicator" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-96 bg-white p-10 rounded-md shadow-lg">
          <div className="w-full ml-8 mr-8 -mt-12">
            <img src={logo} alt="Logo" className="h-56 w-56 cursor-pointer" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center -mt-8">
            Welcome to <br />
            Logic Fruit Technologies!
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <p className="text-red-500 text-base font-bold mb-2">{errorMsg}</p>
            <button
              type="submit"
              disabled={isFetching}
              onClick={handleSignin}
              className={`w-full py-2 rounded-md ${
                isFetching
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .slideshow-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          overflow: hidden;
        }

        .slide {
          flex: 0 0 100%;
          transition: transform 0.5s ease-in-out;
          opacity: 0;
        }

        .active {
          opacity: 1;
          transform: translateX(-100%);
        }

        .carousel-control-prev,
        .carousel-control-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: #fff;
          transition: opacity 0.3s;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        .carousel-control-prev {
          left: 10px;
        }

        .carousel-control-prev-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
        }

        .carousel-control-next {
          right: 10px;
        }

        .carousel-control-next-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
        }

        .indicators {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          margin: 0 5px;
          cursor: pointer;
        }

        .activeIndicator {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Login;

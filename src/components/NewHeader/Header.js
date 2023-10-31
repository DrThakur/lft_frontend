import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { selectName, setLogin } from "../../redux/features/auth/authSlice";
// import { logoutUser } from "../../services/authService";

const Header = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const name = useSelector(selectName);

  //   const logout = async () => {
  //     await logoutUser();
  //     await dispatch(setLogin(false));
  //     navigate("/login");
  //   };
  const logout = () => {
    navigate("/");
  };

  return (
    <div className="max-w-full mx-auto py-8 header">
      <div className="flex justify-between items-center">
        <h3>
          <span className="font-thin">Welcome, </span>
          <span className="text-orangered">Ankit</span>
        </h3>
        <button
          onClick={logout}
          className="text-lg font-semibold px-4 py-2 mr-2 rounded border transition duration-300 ease-in-out focus:outline-none focus:border-opacity-0 focus:ring-2 focus:ring-orangered btn-danger text-white bg-orangered"
        >
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;

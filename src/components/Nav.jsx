import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Nav = () => {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleMenu());
  }
  return (
    <div className="w-full h-14 bg-red-600 flex items-center pl-96">
      <FaBars
        className="text-4xl"
        onClick={() => {
          handleToggle();
        }}
      />
    </div>
  );
};

export default Nav;

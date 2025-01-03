import React from "react";
import { useSelector } from "react-redux";

function Side() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  console.log(isMenuOpen);

  return isMenuOpen ? null : (
    <div className="w-72 bg-yellow-500">
      <h1 className="text-7xl uppercase">side</h1>
    </div>
  );
}

export default Side;

import React, { useContext } from "react";

import { MyContext } from "../context/context.jsx";

import { category } from "../utils/Category.js";

const SideBarItem = ({ text, icon, className, action }) => {
  return (
    <>
      <button
        className={
          "sidebar__btn sidebar__category flex items-center gap-3 hover:bg-slate-100" +
          className
        }
        onClick={action}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    </>
  );
};

export default SideBarItem;

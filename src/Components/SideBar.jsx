import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../utils/Category";
import { MyContext } from "../context/context";
import SideBarItem from "./SideBarItem";
import { Dropdown } from "flowbite";
import { AiOutlineDown } from "react-icons/ai";

import person1 from "../assets/Dollie-Blair.png";
import person2 from "../assets/Oval1.png";
import person3 from "../assets/Oval2.png";
import person4 from "../assets/Oval3.png";
import person5 from "../assets/Oval4.png";
import person6 from "../assets/Oval5.png";

import "./SideBar.scss";

const SideBar = () => {
  const { selectCategory, setSelectCategory } = useContext(MyContext);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name);
      case "home":
        return setSelectCategory(name);

      default:
        break;
    }
  };
  return (
    <div className="sidebar overflow-y-scroll bg-white  w-[230px]">
      <div className="container px-5">
        <div className="sidebar__elements flex flex-col gap-3">
          {category.map((item) => {
            return (
              <>
                <SideBarItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("./");
                  }}
                  className={`${
                    selectCategory === item.name ? "bg-white/[0.15]" : ""
                  }`}
                />
              </>
            );
          })}
          <button
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
            className="sidebar__btn sidebar__category flex items-center gap-3 hover:bg-slate-100"
            type="button"
          >
            <AiOutlineDown />
            Show more
          </button>
          <div
            id="dropdownUsers"
            class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
          >
            <ul
              class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <li>
                <h2 className="px-4 py-2">Subscriptions</h2>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person1}
                    alt="Jese image"
                  />
                  Gussie Singleton
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person2}
                    alt="Jese image"
                  />
                  Nora Francis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person3}
                    alt="Jese image"
                  />
                  Belle Briggs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person4}
                    alt="Jese image"
                  />
                  Eunice Cortez
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person5}
                    alt="Jese image"
                  />
                  Emma Hanson
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src={person6}
                    alt="Jese image"
                  />
                  Leah Berry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

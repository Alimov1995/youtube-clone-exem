import React, { useState, useContext } from "react";
import { MyContext } from "../context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import navLogo from "../assets/logo.svg";
import videoLogo from "../assets/video.svg";
import settingLogo from "../assets/setting.svg";
import notificationLogo from "../assets/notification.svg";
import user from "../assets/user.png";
import "./Navbar.scss";
const Navbar = () => {
  const [searchResult, setSearchResult] = useState("");
  const { loading } = useContext(MyContext);
  const navigate = useNavigate();
  const searchHandler = (e) => {
    if (searchResult.length > 0) {
      navigate(`/searchResult/${searchResult}`);
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="container pl-5 pt-5">
          <div className="navbar__elements flex items-center justify-between">
            <div className="navbar__left flex gap-6 items-center">
              <GiHamburgerMenu size="20px" />
              <Link to="/">
                <img src={navLogo} alt="" />
              </Link>
              <form className="flex items-center pl-10">
                <div class="navbar__search relative w-[830px]">
                  <div class="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    onChange={(e) => setSearchResult(e.target.value)}
                    value={searchResult}
                    onKeyUp={searchHandler}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="navbar__right flex gap-10 ">
              <img src={videoLogo} alt="" />
              <img src={settingLogo} alt="" />
              <img src={notificationLogo} alt="" />
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

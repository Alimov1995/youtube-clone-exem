import { useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import VideoCard from "./VideoCard";
import SideBar from "./SideBar";
import person1 from "../assets/Dollie-Blair.png";
import channel from "../assets/channel.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper";

import Recomended from "./Recomended";
import Channel from "./Channel";
import User from "./User";
import "./Main.scss";

const Main = () => {
  const { loading, searchResult } = useContext(MyContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="main flex overflow-hidden pt-10">
      <SideBar />
      <div className="main__video overflow-y-scroll ">
        <div className="main__user  flex items-center gap-3 pb-5">
          <img src={person1} alt="" />
          <span>Dollie Blair</span>
        </div>
        {/* grid grid-cols-4 gap-5 */}
        <User />

        {/* Recomended */}

        <h2>Recomended</h2>

        <Recomended />

        {/*channel  */}

        <div className="main__channel flex items-center pt-5">
          <div className="menu__left flex items-center gap-3">
            <img src={channel} alt="" />
            <span>Food & Drink</span>
            <span>Recommended channel for you</span>
          </div>
          <div className="menu__right px-96">
            <button className="p-3  bg-red-600 text-white rounded-3xl hover:bg-red-500 transition-all transition-0.3s">
              Subscribe 2.3m
            </button>
          </div>
        </div>

        <Channel />
      </div>
    </div>
  );
};

export default Main;

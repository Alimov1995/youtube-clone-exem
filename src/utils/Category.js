import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { type } from "@testing-library/user-event/dist/type";

export const category = [
  { icon: <HiOutlineHome />, name: "Home", type: "home" },
  { icon: <AiOutlineFire />, name: "Trending", type: "category" },
  { icon: <MdOutlineSubscriptions />, name: "Subscriptions", type: "category" },
  { icon: <AiOutlineFolder />, name: "Library", type: "category" },
  { icon: <RiFilePaper2Line />, name: "History", type: "category" },
  { icon: <TfiAlarmClock />, name: "Watch later", type: "category" },
  { icon: <AiOutlineStar />, name: "Favourites", type: "category" },
  { icon: <HiOutlineMusicalNote />, name: "Music", type: "category" },
  { icon: <AiOutlineHeart />, name: "Liked videos", type: "category" },
  { icon: <IoGameControllerOutline />, name: "Games", type: "category" },
];

export const videoUrl = "/video/GDa8kZLNhJ4";

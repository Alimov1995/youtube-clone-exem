import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchData } from "../utils/FetchApi";

import { MyContext } from "../context/context";
import PlayerVideo from "./PlayerVideo";
const VideoElement = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(MyContext);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)]">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://youtu.be/LMHTKj_trr8${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start"></div>
              <div className="flex flex-col mt-4">
                <div className="text-black/[0.7] text-sm">
                  {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </div>
              </div>
            </div>
            <div className="flex text-black mt-4 md:mt-0">
              <div className="flex items-center justify-center h-8 px-6 rounded-3xl bg-slate-400/[0.15]">
                <AiOutlineLike className="text-xl text-black mr-2" />
                {`${abbreviateNumber(video?.stats?.views, 2)}`}
              </div>
              <div className="flex items-center justify-center h-8 px-6 rounded-3xl bg-slate-400/[0.15] ml-4">
                <AiOutlineDislike className="text-xl text-black mr-2" />
                <span>435k</span>
              </div>
              <div className="flex items-center justify-center h-8 px-6 rounded-3xl bg-slate-400/[0.15] ml-4">
                <IoIosShareAlt className="text-xl text-black mr-2" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <PlayerVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoElement;

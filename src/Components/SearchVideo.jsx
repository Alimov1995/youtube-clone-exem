import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoMinute from "../video/VideoMinute";
const SearchVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex w-[700px] mb-3">
        <div className="relative flex shrink-0 h-48  rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <VideoMinute time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-4 mt-4 overflow-hidden">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-black">
            {video?.title}
          </span>
          <span className="empty:hidden text-sm line-clamp-1  text-black/[0.7] ">
            {video?.descriptionSnippet}
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-black/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                )}
              </span>
              <div className="flex text-sm font-semibold text-black/[0.7] truncate overflow-hidden">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchVideo;

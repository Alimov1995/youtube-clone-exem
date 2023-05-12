import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import VideoMinute from "../video/VideoMinute";

const PlayerVideo = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="w-[367px] mb-3">
        <div className="relative rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video.thumbnails[0].url}
          />
          {video?.lengthSeconds && <VideoMinute time={video.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
            {video.title}
          </span>

          <div className="flex items-center justify-between text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-whiblackte/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video.stats.views, 2)} views`}</span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  text-black/[0.7] flex items-center">
              {video.author.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerVideo;

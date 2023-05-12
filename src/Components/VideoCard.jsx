import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import VideoMinute from "../video/VideoMinute";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="video__card max-w-sm bg-white rounded-lg  h-[300px] w-[300px]">
        <div className="relative md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video.thumbnails[0].url}
          />
          {video.lengthSeconds && <VideoMinute time={video.lengthSeconds} />}
        </div>

        <div className="">
          <h5 className=" text-s font-semibold tracking-tight text-gray-900 dark:text-white">
            {video.title.slice(0, 30)}
          </h5>
          <div className="flex justify-between">
            <span>{`${abbreviateNumber(video.stats.views, 2)} views`}</span>
            <span> {video.publishedTimeText}</span>
            <span>{video.author.title}</span>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col mb-5">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video.thumbnails[0].url}
          />
          {video.lengthSeconds && <VideoMinute time={video.lengthSeconds} />}
        </div>
      </div> */}
    </Link>
  );
};

export default VideoCard;

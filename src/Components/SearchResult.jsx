import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../utils/FetchApi";
import { MyContext } from "../context/context";
import SideBar from "./SideBar";
import SearchVideo from "./SearchVideo";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(MyContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    SearchResults();
  }, [searchQuery]);

  const SearchResults = () => {
    setLoading(true);
    fetchData(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <SideBar />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item) => {
              if (item?.type !== "video") return false;
              let video = item.video;
              return <SearchVideo key={video.videoId} video={video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;

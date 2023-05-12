import { useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import UserVideo from "./UserVideo";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Navigation, FreeMode } from "swiper";
const User = () => {
  const { loading, searchResult } = useContext(MyContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        <div className="main__user flex gap-5 overflow-y-scroll md:flex flex-col">
          {!loading &&
            searchResult &&
            searchResult.map((item) => (
              <SwiperSlide
                className="top-10 h-[300px]"
                style={{ width: "300px" }}
              >
                <UserVideo key={item.video.videoId} video={item.video} />
              </SwiperSlide>
            ))}
          ;
        </div>
      </Swiper>
    </>
  );
};

export default User;

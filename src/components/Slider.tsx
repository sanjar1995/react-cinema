import React, { useEffect, useState } from "react";
import arrowImg from "@i/arrow.svg";
import sliderImg from "@i/slider-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useApi from "../hooks/useApi";
import useMovieTv from "../store/MovieTv";
import { Link } from "react-router-dom";
import InfoBlock from "./InfoBlock";

function Slider({ type }: { type: string }) {
  const { data } = useApi(`${type}/popular`);
  const { getMovieTv } = useMovieTv();
  const [infoblock, setinfoblock] = useState(false)
  const options = {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  };
  useEffect(() => {
    getMovieTv(data, type);
  }, [data]);
  return (
    <div className="slider">
      <h2 className="slider__title">
        {type === "movie" ? "Фильмы" : "Сереалы"} <img src={arrowImg} alt="" />
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper slider__swiper"
        slidesPerView={5}
        spaceBetween={25}
        breakpoints={options}
      >
        {data.map((movie: any, index: number) => {
          return (
            <SwiperSlide onClick={()=> setinfoblock(true)} key={index} className="slider__slide">
              <img
                src={import.meta.env.VITE_IMG + movie.poster_path}
                alt=""
                className="slider__img"
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="slider__slide">
          <Link to={`/${type}`}>
            Все {type === "movie" ? "Фильмы" : "Сереалы"}
            <img src={arrowImg} alt="" className="slider__icon" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <InfoBlock active={infoblock}/>
    </div>
  );
}

export default Slider;

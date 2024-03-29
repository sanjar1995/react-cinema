import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Btn from './UI/Btn';
import bgImg from "@i/bg.jpg";
import bgMiniImg from "@i/mini-bg.jpg";
export default function Upcoming() {
  const line = useRef<HTMLDivElement | null>(null);
  const onAutoplayTimeLeft = (s:any, time:any, progress:any) => {
    if(line.current){
      line.current.style.width = `${( 1 - progress) * 100}%`;
    }
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        
        navigation={
          {nextEl:'.upcoming__progress'}
        }
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming"
      >
        <SwiperSlide className='upcoming__slide'>
          <img src={bgImg} alt="" className="upcoming__slide-img" />
          <h2 className="upcoming__slide-title">Мир Юрского периода: Господство</h2>
          <p className="upcoming__slide-text">После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</p>
          <Btn/>
        </SwiperSlide>
        <SwiperSlide className='upcoming__slide'>
          <img src={bgImg} alt="" className="upcoming__slide-img" />
          <h2 className="upcoming__slide-title">Мир Юрского периода: Господство</h2>
          <p className="upcoming__slide-text">После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</p>
          <Btn/>
        </SwiperSlide>
        <SwiperSlide className='upcoming__slide'>
          <img src={bgImg} alt="" className="upcoming__slide-img" />
          <h2 className="upcoming__slide-title">Мир Юрского периода: Господство</h2>
          <p className="upcoming__slide-text">После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</p>
          <Btn/>
        </SwiperSlide>
        <div className="autoplay-progress upcoming__progress" slot="container-end">
          <span className="upcoming__progress-text">Следующий</span>
          <p className="upcoming__progress-title">Тор: Любовь и гром</p>
          <img src={bgMiniImg} alt="" className="upcoming__progress-img" />
          <div className="line" ref={line}></div>
        </div>
      </Swiper>
    </>
  );
}

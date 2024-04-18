import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Btn from './UI/Btn';
import useUpcoming from '../store/upcoming';
import useApi from '../hooks/useApi';
export default function Upcoming() {
  const {upcoming,getUpcoming} = useUpcoming()
  const line = useRef<HTMLDivElement | null>(null);
  const [nextSlide, setnextSlide] = useState(1)
  const { data } = useApi('movie/upcoming');
  useEffect(()=>{
    getUpcoming(data)
  },[data])
  
  
  const onAutoplayTimeLeft = (s:any, time:any, progress:any) => {
    if(line.current){
      line.current.style.width = `${( 1 - progress) * 100}%`;
    }
  };
  function getNextSlideIndex(swiper:any){
    if(swiper.activeIndex == 19){
      setnextSlide(0)
    }else{
      setnextSlide(swiper.activeIndex + 1)
    }
    console.log(swiper.activeIndex);
  }
  return (
    <>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={getNextSlideIndex}
        navigation={
          {nextEl:'.upcoming__progress'}
        }
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming"
      >
        <h1>Hellow world</h1>
        {
          upcoming.map((film:IUpcoming,index:number)=>{
            return <SwiperSlide key={index} className='upcoming__slide'>
            <img src={import.meta.env.VITE_IMG_FULL + film.backdrop_path} alt="" className="upcoming__slide-img" />
            <h2 className="upcoming__slide-title">{film.title}</h2>
            <p className="upcoming__slide-text">{film.overview || 'Izox topilmadi!'}</p>
            <Btn/>
          </SwiperSlide>
          })
        }
        
        <div className="autoplay-progress upcoming__progress" slot="container-end">
          <span className="upcoming__progress-text">Следующий</span>
          <p className="upcoming__progress-title">{upcoming[nextSlide]?.title}</p>
          <img src={import.meta.env.VITE_IMG + upcoming[nextSlide]?.backdrop_path} alt="" className="upcoming__progress-img" />
          <div className="line" ref={line}></div>
        </div>
      </Swiper>
    </>
  );
}

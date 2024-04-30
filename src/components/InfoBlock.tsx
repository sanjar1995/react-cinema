import closeIcon from "@i/close.svg";
import Cast from "./UI/Cast";
import Btn from "./UI/Btn";
import { useEffect } from "react";
import useApi from "../hooks/useApi";
import useFilmId from "../store/FilmById";
import { getRuntime, getYear } from "../store/helper";
import { useAxiosInterceptor } from "../api/ClientApi";
function InfoBlock({
  active,
  setinfoblock,
  movieId,
  type,
}: {
  active: boolean;
  setinfoblock: (bool: boolean) => void;
  movieId: number | null;
  type: string;
}) {
  const {getMovie} = useFilmId()
  const { data, getData } = useApi();
  const {loading} = useAxiosInterceptor()
  useEffect(() => {
    getMovie(data,type)
  }, [data]);
  useEffect(() => {
    getData(`${type}/${movieId}?append_to_response=credits`);
  }, [movieId]);
  if (loading) return "";
  return (
    <div className={`infoblock ${active ? "active" : ""}`}>
      <img src={import.meta.env.VITE_IMG_FULL + data.backdrop_path} alt="" className="infoblock__img" />
      <button className="infoblock__close" onClick={() => setinfoblock(false)}>
        <img src={closeIcon} alt="" />
      </button>
      <div className="infoblock__content">
        <h2 className="infoblock__title">{data.title || data.name}</h2>
        <p className="infoblock__text">
          {data.overview || 'Izox topilmadi'}
        </p>
        <ul className="infoblock__genres">
          <li>{data.release_date?.split('-')[0] || data.first_air_date?.split('-')[0]}</li>
          {
            data.genres?.map((genre:IGenres,index:number)=>{
              return <li key={index}>{genre.name}</li>
            })
          }
          <li>{getRuntime(data.runtime || data.episode_run_time, type)}</li>
        </ul>
        <ul className="infoblock__cast">
          {
            data.credits?.cast.map((actor:IActor,index:number)=>{
              if(index < 4) return <Cast key={index} actor={actor}/>
              
            })
          }
          
        </ul>
        <Btn type={type} movieId={movieId}/>
      </div>
    </div>
  );
}

export default InfoBlock;

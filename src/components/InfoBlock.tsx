import closeIcon from "@i/close.svg";
import Cast from "./UI/Cast";
import Btn from "./UI/Btn";
import { useEffect } from "react";
import useApi from "../hooks/useApi";
import useFilmId from "../store/FilmById";
import { getRuntime, getYear } from "../store/helper";
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
  const { data, getData }:{data:IMovieId[], getData:(url:string)=>void} = useApi();
  useEffect(() => {
    getMovie(data)
  }, [data]);
  useEffect(() => {
    getData(`${type}/${movieId}`);
  }, [movieId]);
  if (!active) return "";
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
          <li>{getYear(data.release_date || data.first_air_date)}</li>
          {
            data.genres?.map((genre:IGenres,index:number)=>{
              return <li key={index}>{genre.name}</li>
            })
          }
          <li>{getRuntime(data.runtime || data.episode_run_time, type)}</li>
        </ul>
        <ul className="infoblock__cast">
          <Cast />
        </ul>
        <Btn />
      </div>
    </div>
  );
}

export default InfoBlock;

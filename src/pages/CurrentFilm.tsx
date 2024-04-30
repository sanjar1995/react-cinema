import {useEffect} from "react";
import { useParams } from "react-router-dom";
import useFilmId from "../store/FilmById";
import useApi from "../hooks/useApi";

function CurrentFilm() {
  let { id, type } = useParams();
  const filmStore = useFilmId();
  const film = filmStore[type];
  const {getData,data} = useApi()
  useEffect(()=>{
    if(film.length === 0){
      getData(`${type}/${id}?append_to_response=credits`)
    }
  },[])
  useEffect(()=>{
    if(film.length === 0){
      filmStore.getMovie(data,type)
    }
  },[data])
  return (
    <div className="current-film">
      <h2>{film.title || film.name}</h2>
    </div>
  );
}

export default CurrentFilm;

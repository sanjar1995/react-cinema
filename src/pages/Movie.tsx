import { useEffect } from "react";
import useMovieTv from "../store/MovieTv";
import useApi from "../hooks/useApi";
import Paginate from "../components/UI/Paginate";
import { Link } from "react-router-dom";

function Movie() {
  const { movie, getMovieTv } = useMovieTv();
  const { getData, data,page,setpage } = useApi();
  useEffect(() => {
    if (movie.length === 0 || page > 1) {
      getData("movie/popular");
    }
  }, [page]);
  useEffect(() => {
    if (movie.length === 0 || page > 1) {
      getMovieTv(data, "movie");
    }
  }, [data]);
  return (
    <div className="container movie">
      <h2 className="movie__title">Все фильмы</h2>
      <div className="movie__content">
        {movie.map((film, index) => {
          return (
            <Link to={`/watch/movie/${film.id}`} key={index} className="movie__item">
              <img
                src={import.meta.env.VITE_IMG + film.poster_path}
                alt=""
                className="movie__img"
              />
              <h2 className="movie__name">{film.name || film.title}</h2>
            </Link>
          );
        })}
      </div>
      <Paginate setpage={setpage} page={page}/>
    </div>
  );
}

export default Movie;

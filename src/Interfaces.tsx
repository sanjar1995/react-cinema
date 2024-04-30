interface IRouter {
  path: string;
  element: JSX.Element;
  name?: JSX.Element | string;
}
interface IUpcoming {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}
interface upcomingStore {
  upcoming: IUpcoming[];
  getUpcoming: (data: IUpcoming[]) => void;
}
interface movieId {
  movie: IMovieId[];
  getMovie: (data: IMovieId[],type:string | undefined) => void;
}
interface IMovieTv extends IUpcoming {
  name:string
}

interface movieTvStore {
  movie: IMovieTv[];
  tv: IMovieTv[];
  getMovieTv: (data: IMovieTv[], type: string ) => void;
}
interface IGenres {
  id: number;
  name: string;
}
interface IMovieId extends IUpcoming {
  genres: IGenres[];
  original_title: string;
  status: string;
  budget: number;
  release_date: string;
  runtime: number;
}
interface IActor{
  profile_path:string,
  name:string
}
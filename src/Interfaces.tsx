interface IRouter {
  path: string;
  element: JSX.Element;
  name: JSX.Element | string;
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
interface IMovieTv extends IUpcoming{
  
}

interface movieTvStore {
  movie: IMovieTv[];
  tv: IMovieTv[];
  getMovieTv: (data: IMovieTv[],type:string) => void;
}
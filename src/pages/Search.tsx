import {useState,useEffect} from 'react'
import useApi from '../hooks/useApi'
import { Link } from 'react-router-dom'

function Search() {
  const [search, setsearch] = useState('')
  const {getData,data} = useApi()
  useEffect(()=>{
    if(search != ''){
      getData(`search/multi?query=${search}`)
    }
  },[search])
  return (
    <div className='container search'>
      <input type="text" value={search} onChange={(e:any)=>setsearch(e.target.value)}/>
     
      {search === '' ? "" : <div className="movie__content">
        {data.map((film:IMovieTv, index:number) => {
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
      </div>}
    </div>
  )
}

export default Search
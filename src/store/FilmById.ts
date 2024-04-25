import { create } from "zustand";
import useApi from "../hooks/useApi";
const {getData,data} = useApi()

const useFilmId = create<movieId>((set)=>({
    movie:[],
    casts:[],
    getMovie:(data:IMovieId[],type:string)=>{
        
        getData(`${type}/${id}/credits`)
        set({movie:data})
    }
}))

export default useFilmId
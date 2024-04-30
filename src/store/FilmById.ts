import { create } from "zustand";

const useFilmId = create<movieId>((set)=>({
    movie:[],
    tv:[],
    getMovie:(data:IMovieId[],type:string | undefined)=>{
        set({movie:data})
    }
}))

export default useFilmId
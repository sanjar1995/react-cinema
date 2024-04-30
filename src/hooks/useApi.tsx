import { useState } from "react"
import api from "../api/ClientApi"

function useApi() {
    const [data, setdata] = useState<any>([])
    const [page, setpage] = useState<number>(1)
    async function getData(url:string){
        let {data} = await api.get(`${url}`,{
          params:{
            page:page
          }
        })
        if(data.results){
          setdata(data.results)
        }else{
          setdata(data)
        }
    } 
  return {data,getData,page,setpage}
}

export default useApi 
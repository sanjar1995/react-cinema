import { useState } from "react"
import api from "../api/ClientApi"

function useApi() {
    const [data, setdata] = useState([])
    async function getData(url:string){
        let {data} = await api.get(url)
        if(data.results){
          setdata(data.results)
        }else{
          setdata(data)
        }
    } 
  return {data,getData}
}

export default useApi 
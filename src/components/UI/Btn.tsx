import React from 'react'
import { Link } from "react-router-dom";
import btnImg from "@i/btn.svg";
function Btn({type, movieId}:{type:string, movieId:number | null}) {
  return (
    <Link to={`/watch/${type}/${movieId}`} className='btn'><img src={btnImg} alt="" />Подробнее</Link>
  )
}

export default Btn
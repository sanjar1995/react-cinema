import castImg from "@i/cast-img.jpg";
function Cast() {
  return (
    <div className='cast'>
        <img src={castImg} alt="" className="cast__img" />
        <span>Simu Liu</span>
    </div>
  )
}

export default Cast
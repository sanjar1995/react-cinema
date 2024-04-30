
function Paginate({setpage,page}:any) {
  return (
    <div className='paginate'>
        <button disabled={page < 2} className="paginate__prev" onClick={()=>setpage(page -1)}>Prev</button>
        <span>{page}/500</span>
        <button className="paginate__next" onClick={()=>setpage(page +1)}>Next</button>
    </div>
  )
}

export default Paginate
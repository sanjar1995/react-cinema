import Slider from '../components/Slider'
import Upcoming from '../components/Upcoming'

function Home() {
  return (
    <>
    <Upcoming/>
    <Slider type="movie"/>
    <Slider type="tv"/>
    </>
  )
}

export default Home
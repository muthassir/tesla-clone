import Img from './Img'
import Video from './Video'


const Home = ({shareData }) => {
  return (
    <div>
        <Video shareData={shareData} />
        <Img shareData={shareData} />    
    </div>
  )
}

export default Home;
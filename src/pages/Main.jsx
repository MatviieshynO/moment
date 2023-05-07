import Slider from '../components/Slider'
import TeamSection from '../components/TeamSection'
import RewiewsSection from '../components/ReviewsSection'
import TimeWorksInf from '../components/TimeWorksInf'
import Bunner from '../components/Bunner'

const Home = () => {
  return (
    <div>
      <Slider />
      <Bunner />
      <TimeWorksInf />
      <TeamSection />
      <RewiewsSection />
    </div>
  )
}

export default Home

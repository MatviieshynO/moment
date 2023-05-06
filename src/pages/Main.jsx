import Slider from '../components/Slider'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'
import TimeWorksInf from '../components/TimeWorksInf'
import Bunner from '../components/Bunner'

const Home = () => {
  return (
    <div>
      <Slider />
      <Bunner />
      <TimeWorksInf />
      <TeamSection />
      <BlogSection />
    </div>
  )
}

export default Home

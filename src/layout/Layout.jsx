//Components

import Footer from '../components/Footer'
import Main from '../pages/Main'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Navbar from '../components/Navbar'

const layout = ({ children }) => {
  return (
    <div
      className="sm:w-[100%] sm:shadow-lg shadow-cyan-500"
      style={{ margin: '0px auto' }}
    >
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default layout

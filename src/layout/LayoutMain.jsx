//Components

import Footer from '../components/Footer'
import Main from '../pages/Main'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Navbar from '../components/Navbar'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default layout

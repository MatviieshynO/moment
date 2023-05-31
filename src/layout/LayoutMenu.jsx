//Components

import Footer from '../components/Footer'
import Menu from '../pages/Menu'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Navbar from '../components/Navbar'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Menu>{children}</Menu>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default layout

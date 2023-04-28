//Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../pages/Main'
import ScrollToTopButton from '../components/ScrollToTopButton'

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default layout

//Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../pages/Main'

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default layout

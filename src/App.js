import { Routes, Route } from 'react-router-dom'
//Layouts
import Layout from './layout/Layout'
//Pages
import Main from './pages/Main'
import Legal from './pages/Legal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Menu from './pages/Menu'
import Page404 from './pages/Page404'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import About from './pages/About'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Layout />} />
          <Route indexelement={<Main />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

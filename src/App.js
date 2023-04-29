import { Routes, Route } from 'react-router-dom'
//Layouts
import Layout from './layout/Layout'
//Pages
import Main from './pages/Main'
import Legal from './pages/Legal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Page404 from './pages/Page404'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Layout />} />
          <Route indexelement={<Main />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

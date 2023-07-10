import { Routes, Route } from 'react-router-dom'
//Layouts
import Layout from './layout/LayoutMain'
//Pages
import Main from './pages/Main'
import Legal from './pages/Legal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import LayoutMenu from './layout/LayoutMenu'
import Page404 from './pages/Page404'

function App() {
    return (
        <div className="sm:hidden">
            <Routes>
                <Route>
                    <Route index element={<Layout />} />
                    <Route indexelement={<Main />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfUse />} />
                    <Route path="/menu" element={<LayoutMenu />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App

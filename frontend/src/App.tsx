import { Navigate, Route, Routes } from 'react-router-dom'
import { ApiTester } from './components/home/ApiTester'
import { PostSection } from './components/home/PostSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Lnb } from './components/layout/Lnb'
import { ApiExplorerPage } from './pages/ApiExplorerPage'
import { BoardPage } from './pages/BoardPage'
import { ContactPage } from './pages/ContactPage'
import { GuidePage } from './pages/GuidePage'
import { PolicyPage } from './pages/PolicyPage'
import { PostDetailPage } from './pages/PostDetailPage'

function HomePage() {
  return <><ApiTester /><PostSection /></>
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Lnb />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apis" element={<ApiExplorerPage />} />
          <Route path="/community" element={<BoardPage />} />
          <Route path="/community/:category" element={<BoardPage />} />
          <Route path="/guides" element={<GuidePage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />
          <Route path="/terms" element={<PolicyPage type="terms" />} />
          <Route path="/privacy" element={<PolicyPage type="privacy" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

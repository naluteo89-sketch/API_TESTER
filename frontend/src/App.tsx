import { ApiTester } from './components/home/ApiTester'
import { PostSection } from './components/home/PostSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Lnb } from './components/layout/Lnb'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Lnb />
      <main>
        <ApiTester />
        <PostSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

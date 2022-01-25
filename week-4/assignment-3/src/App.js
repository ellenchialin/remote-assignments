import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/MainContent/HeroBanner'
import BoxSection from './components/MainContent/BoxSection'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroBanner />
        <BoxSection />
      </main>
    </div>
  )
}

export default App

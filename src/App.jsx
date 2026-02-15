import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ActivityCenter from "./Components/ActivityCenter"
import Hero from "./Components/Hero"

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Hero />
        <ActivityCenter />
      </main>
      <Footer />
    </div>
  )
}

export default App

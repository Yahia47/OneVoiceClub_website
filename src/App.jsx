import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ActivityCenter from "./Components/ActivityCenter"

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <ActivityCenter />
      </main>
      <Footer />
    </div>
  )
}

export default App

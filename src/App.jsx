import { Route, Routes } from "react-router-dom"
import { Header } from "./layouts/Header/Header.jsx"
import { Footer } from "./layouts/Footer/Footer.jsx"
import { Home } from "./pages/Home/Home.jsx"

export function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}


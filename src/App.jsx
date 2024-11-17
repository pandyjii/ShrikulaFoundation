
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./mainLayout"
import { Hero } from "./components/HeroSection"
import { ContactUs } from "./components/ContactUs"
export default function App() {
  return (
  <BrowserRouter>
    <Routes >
    <Route path='/' element={<MainLayout/>} >
     <Route index element={<Hero/>}/>
     <Route path="/contact" element={<ContactUs/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}



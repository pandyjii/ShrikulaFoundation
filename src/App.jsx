
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./mainLayout"
import { Hero } from "./components/HeroSection"
import { ContactUs } from "./components/ContactUs"
import { KLF2024 } from "./components/KLFPage/KLF2024"
export default function App() {
  return (
  <BrowserRouter>
    <Routes >
    <Route path='/' element={<MainLayout/>} >
     <Route index element={<Hero/>}/>
     <Route path="/contact" element={<ContactUs/>}/>
     <Route path="/klf2024" element={<KLF2024/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}



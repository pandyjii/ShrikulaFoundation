
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./mainLayout"
import { Hero } from "./components/HeroPage/HeroSection"
import { ContactUs } from "./components/ContactUs/ContactUs"
import { KLF2024 } from "./components/KLFPage/KLF2024"
import { ShrikulaDonation } from "./components/Donate/DonatePage"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { AboutHeroSection } from "./components/AboutUs/AboutHeroSection"
export default function App() {
  return (
  <BrowserRouter>
    <Routes >
    <Route path='/' element={<MainLayout/>} >
     <Route index element={<Hero/>}/>
     <Route path="/contact" element={<ContactUs/>}/>
     <Route path="/klf2024" element={<KLF2024/>}/>
     <Route path="/register" element={<ShrikulaDonation/>}/>
     <Route path="/about" element={<AboutHeroSection/>}/>



    </Route>
    </Routes>
  </BrowserRouter>
  )
}



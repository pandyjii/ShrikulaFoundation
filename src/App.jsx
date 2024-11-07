
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./mainLayout"
import { Dashboard } from "./components/Dashboard"
import { ContactUs } from "./components/ContactUs"
export default function App() {
  return (
  <BrowserRouter>
    <Routes >
    <Route path='/' element={<MainLayout/>} >
     <Route index element={<Dashboard/>}/>
     <Route path="/contact" element={<ContactUs/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}



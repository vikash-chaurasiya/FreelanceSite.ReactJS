import  React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
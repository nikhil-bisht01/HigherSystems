import React from 'react'
import Home from './Home'
import About from './About'
import Connect from './Connect'
import Contact from './Contactform'
import Sahuliyat from './Sahuliyat'
import Login from './Login'
import Signup from './Signup'
import Example from './Example'
import Employee from './Employee'
import Business from './Business' 
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sahuliyat' element={<Sahuliyat/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/Example' element={<Example/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/Business' element={<Business/>}/>
      </Routes>
      
  )
}

export default App
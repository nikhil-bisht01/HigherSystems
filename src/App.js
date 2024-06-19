import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Connect from './Connect'
import Contact from './Contactform'
import Sahuliyat from './Sahuliyat'
import Login from './Login'
import Signup from './Signup'
import Example from './Example'
import Employee from './Employee'
import Solution from './Solution'
import Business from './Business'
import Implementation from './Implementation'
import DMS from './DMS'
import Infra from './Infra'
import Navbar from './Navbar'
import Contactform from './Contactform'
import ChatBot from './chaatbot'
import Forget from './Forget'
import OTP from './OTP'
import Password from './Password'
import Registration from './Registration'
import Dashboard from './Dashboard'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/connect' element={<Connect />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sahuliyat' element={<Sahuliyat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Example' element={<Example />} />
      <Route path='/Employee' element={<Employee />} />
      <Route path='/Business' element={<Business />} />
      <Route path='/Infra' element={<Infra />} />
      <Route path='/DMS' element={<DMS />} />
      <Route path='/Solution' element={<Solution />} />
      <Route path='/Contactform' element={<Contactform />} />
      <Route path='/Implementation' element={<Implementation />} />
      <Route path='/Components/Navbar' element={<Navbar />} />
      <Route path='/chaatbot' element={<ChatBot />} />
      <Route path='/Forget' element={<Forget />} />
      <Route path='/OTP' element={<OTP />} />
      <Route path='/Password' element={<Password />} />
      <Route path='/Reg' element={<Registration />} />
      <Route path='/Dash' element={<Dashboard/>}/>
    
    </Routes>

  )
}

export default App
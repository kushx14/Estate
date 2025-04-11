import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRouter from './components/PrivateRouter'
import CreateListing from './pages/CreateListing'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign-in' element={<Signin />}></Route>
      <Route path='/sign-up' element={<Signup />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route element={<PrivateRouter/>}>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/create-listing' element={<CreateListing />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

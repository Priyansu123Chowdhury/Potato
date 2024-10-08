import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from "./components/Navbar/Navbar"
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (<>
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/order' element={<PlaceOrder />} /> </Routes>
    </div>
    <Footer></Footer></>
  )
}

export default App

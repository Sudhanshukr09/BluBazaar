import React from 'react'
import Home from './component/page/home/Home';
import Cart from './component/page/cart/Cart';
import Login from './component/page/Login/Login';
import Allproduct from './component/All Product/Allproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproduct' element={<Allproduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Mens' element={<Home/>}/>
        <Route path='/kids' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>   
  )
}

export default App

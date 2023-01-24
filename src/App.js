import './App.css';
import React  from 'react';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import Cart from './Component/Cart'
import Home from './Component/Home'
import ProductDetails from './Component/ProductDetail'
import Products from './Component/Products'
import Menu from './Header/Menu'
import Pnf from './util/Pnf'



function App() {
  return (
    <Router>
   <Menu/>
   <ToastContainer autoClose={4000} position={'top-right'}/>
    <Routes>       
       <Route path={`/`} element={<Home itemsPerpage={4} />} />
        <Route path={`/products/:catName`} element={<Products/>}/>
        <Route path={`/product/:id/category/:catname`} element={<ProductDetails/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
        </Routes>

   </Router>
  );
}

export default App;
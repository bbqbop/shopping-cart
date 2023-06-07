import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import './App.css';

export const CartContext = createContext();

export default function App(){
    const [cart, setCart] = useState({});

    useEffect(()=> {
    })
    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} /> 
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}
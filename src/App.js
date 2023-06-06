import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";

export const CartContext = React.createContext();

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
                    <Route path="/shop/cart" element={<ShoppingCart />} />
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}
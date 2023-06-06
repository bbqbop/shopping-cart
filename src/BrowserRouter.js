import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";

export default function PageRoutes(){
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} /> 
                <Route path="/shop/cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    )
}
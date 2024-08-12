import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/MainSlice";
import Card from "./Components/Card";
import Products from "./Pages/ProductPage/Products";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Cart from "./Pages/cart/Cart";
import About from "./Pages/About/About";
import MobPay from "./Pages/mobPay/MobPay";
import Signup from "./Pages/signup/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/payment" element={<MobPay />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default App;

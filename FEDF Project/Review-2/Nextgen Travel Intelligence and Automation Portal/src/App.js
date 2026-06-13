
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Seats from "./pages/Seats";
import Food from "./pages/Food";
import Hotels from "./pages/Hotels";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";


export default function App(){
  const [booking,setBooking]=useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home setBooking={setBooking} />} />
        <Route path="/flights" element={<Flights booking={booking} setBooking={setBooking} />} />
        <Route path="/seats" element={<Seats booking={booking} setBooking={setBooking} />} />
        <Route path="/food" element={<Food booking={booking} setBooking={setBooking} />} />
        <Route path="/hotels" element={<Hotels booking={booking} setBooking={setBooking} />} />
        <Route path="/payment" element={<Payment booking={booking} />} />
        <Route path="/ticket" element={<Ticket booking={booking} />} />
      </Routes>
    </BrowserRouter>
  );
}
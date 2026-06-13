import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Seats from "./pages/Seats";
import Food from "./pages/Food";
import Payment from "./pages/Payment";
import Ticket from "./pages/Ticket";
import AirportDetails from "./pages/AirportDetails";
import Hotels from "./pages/Hotels";


// ✅ ADD THIS
import FlightDetails from "./pages/TicketDetails";

function App() {
  const [booking, setBooking] = useState({
    from: "",
    to: "",
    flight: null,
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <Home
              booking={booking}
              setBooking={setBooking}
            />
          }
        />

        {/* FLIGHTS */}
        <Route
          path="/flights"
          element={
            <Flights
              booking={booking}
              setBooking={setBooking}
            />
          }
        />

        {/* SEATS */}
        <Route
          path="/seats"
          element={
            <Seats
              booking={booking}
              setBooking={setBooking}
            />
          }
        />

        {/* FOOD */}
        <Route
          path="/food"
          element={
            <Food
              booking={booking}
              setBooking={setBooking}
            />
          }
        />

        {/* PAYMENT */}
        <Route
          path="/payment"
          element={
            <Payment
              booking={booking}
              setBooking={setBooking}
            />
          }
        />

        {/* TICKET */}
        <Route
          path="/ticket"
          element={
            <Ticket booking={booking} />
          }
        />

        {/* ✅ QR DETAILS PAGE */}
        <Route
          path="/ticket-details"
          element={<FlightDetails />}
        />
        <Route
  path="/airport-details"
  element={<AirportDetails />}
/>
   

        {/* HOTELS */}
        <Route
          path="/hotels"
          element={<Hotels />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
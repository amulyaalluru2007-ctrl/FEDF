import MapView from "../components/MapView";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  // ✈️ GET DATA
  const flight =
    JSON.parse(localStorage.getItem("selectedFlight")) || {};

  const seatPrice =
    Number(localStorage.getItem("seatPrice")) || 0;

  const foodTotal =
    Number(localStorage.getItem("foodTotal")) || 0;

  // 💰 TOTAL
  const total =
    (flight?.price || 0) +
    seatPrice +
    foodTotal;

  // FORM DATA
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // 💳 PAYMENT METHOD
  const [paymentMethod, setPaymentMethod] =
    useState("Card");

  // ✅ PAYMENT
  const handlePayment = () => {
  if (!name || !email || !card || !expiry || !cvv) {
    alert("Please fill all fields");
    return;
  }

  // SAVE BOOKING DATA
  localStorage.setItem(
    "latestBooking",
    JSON.stringify({
      airline: flight.airline,

      passenger: name,

      pnr:
        "SKY" +
        Math.floor(Math.random() * 1000000),

      from: flight.from,

      to: flight.to,

      departure: flight.departure,

      arrival: flight.arrival,

      boardingTime:
        flight.boardingTime || "07:45 AM",

      gate: flight.gate || "T1-G5",

      route:
        flight.route || [
          "Entrance",
          "Check-in Counter",
          "Security Check",
          "Duty Free",
          "Terminal",
        ],
    })
  );

  alert("🎉 Payment Successful!");

  navigate("/ticket");
};
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "white", fontSize: "50px" }}>
          🔒 Secure Payment
        </h1>
        <p style={{ color: "#e5e7eb", fontSize: "19px" }}>
          Complete your booking payment
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            flex: 1,
            minWidth: "420px",
            background: "white",
            borderRadius: "24px",
            padding: "35px",
          }}
        >
          <h1 style={{ marginBottom: "28px" }}>
            👤 Passenger Details
          </h1>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Card Number"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handlePayment} style={payBtn}>
            🔒 Pay ₹{total}
          </button>
        </div>

        {/* RIGHT SUMMARY */}
        <div
          style={{
            width: "380px",
            background: "white",
            borderRadius: "24px",
            padding: "30px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            🧾 Booking Summary
          </h2>

          {/* ROUTE */}
          <div style={routeBox}>
            <h2>
              {flight?.from || "Delhi"} ✈️{" "}
              {flight?.to || "Mumbai"}
            </h2>
          </div>

          {/* 📍 LIVE MAP */}
          <MapView
            from={flight?.from || "Delhi"}
            to={flight?.to || "Mumbai"}
          />

          {/* PRICE */}
          <div style={priceRow}>
            <span>Flight</span>
            <span>₹{flight?.price || 0}</span>
          </div>

          <div style={priceRow}>
            <span>Seat</span>
            <span>₹{seatPrice}</span>
          </div>

          <div style={priceRow}>
            <span>Food</span>
            <span>₹{foodTotal}</span>
          </div>

          <hr />

          <h2 style={{ color: "green" }}>
            Total ₹{total}
          </h2>
        </div>
      </div>
    </div>
  );
}

// STYLES
const inputStyle = {
  width: "100%",
  padding: "14px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const payBtn = {
  width: "100%",
  padding: "16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  marginTop: "20px",
  fontSize: "18px",
};

const routeBox = {
  background: "#f1f5f9",
  padding: "15px",
  borderRadius: "12px",
  textAlign: "center",
  marginBottom: "15px",
};

const priceRow = {
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
};
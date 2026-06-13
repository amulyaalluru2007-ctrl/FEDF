import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Flights() {
  const navigate = useNavigate();

  // ✅ GET DATA FROM HOME PAGE
  const booking =
    JSON.parse(localStorage.getItem("booking")) || {};

  // ✅ SET FROM & TO FROM HOME PAGE
  const [from] = useState(booking.from || "");
  const [to] = useState(booking.to || "");
  const [time, setTime] = useState("");

  const [flights, setFlights] = useState([]);

  // ✈️ AIRLINES
  const airlines = [
    "IndiGo",
    "Air India",
    "SpiceJet",
    "Vistara",
  ];

  // ✈️ AIRCRAFT IMAGES
  const logos = {
    IndiGo:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",

    "Air India":
      "https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1200&q=80",

    SpiceJet:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80",

    Vistara:
      "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1200&q=80",
  };

  // ✅ LOGIN CHECK
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  // ⏰ TIME GENERATOR
  function generateTime(time) {
    if (time === "Morning") {
      return `${6 + Math.floor(Math.random() * 5)}:${
        Math.random() > 0.5 ? "30" : "00"
      } AM`;
    }

    if (time === "Afternoon") {
      return `${1 + Math.floor(Math.random() * 4)}:${
        Math.random() > 0.5 ? "30" : "00"
      } PM`;
    }

    return `${6 + Math.floor(Math.random() * 4)}:${
      Math.random() > 0.5 ? "30" : "00"
    } PM`;
  }

  // 💰 PRICE
  function generatePrice(time) {
    let base = 3000;

    if (time === "Morning") base += 500;
    if (time === "Afternoon") base += 1000;
    if (time === "Evening") base += 1500;

    return base + Math.floor(Math.random() * 2000);
  }

  // 📅 DATE
  function generateFlightDate() {
    const today = new Date();

    const randomDays = Math.floor(Math.random() * 7);

    today.setDate(today.getDate() + randomDays);

    return today.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

  // ✈️ GENERATE FLIGHTS
  function generateFlights(fromCity, toCity) {
    const flightDate = generateFlightDate();

    const times = [
      "Morning",
      "Afternoon",
      "Evening",
    ];

    let generatedFlights = [];

    times.forEach((t) => {
      for (let i = 0; i < 2; i++) {
        const airline =
          airlines[
            Math.floor(
              Math.random() * airlines.length
            )
          ];

        generatedFlights.push({
          id: Math.random(),

          from: fromCity,
          to: toCity,

          time: t,

          airline: airline,

          // ✅ ADD IMAGE
          image: logos[airline],

          // ✅ ADD FLIGHT NUMBER
          flightNumber: `AI-${Math.floor(
            100 + Math.random() * 900
          )}`,

          // ✅ ADD AIRCRAFT
          aircraft: "Boeing 737",

          price: generatePrice(t),

          departure: generateTime(t),

          date: flightDate,
        });
      }
    });

    return generatedFlights;
  }

  // ✅ LOAD FLIGHTS ONLY FROM HOME PAGE DATA
  useEffect(() => {
    if (from && to) {
      setFlights(generateFlights(from, to));
    }
  }, [from, to]);

  // 🔍 FILTER
  const filteredFlights = flights.filter((f) => {
    return !time || f.time === time;
  });

  return (
    <div
      style={{
        minHeight: "100vh",

        background:
          "linear-gradient(to bottom right,#eff6ff,#dbeafe)",

        padding: "40px 20px",

        fontFamily:
          "'Poppins', sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "64px",

            fontWeight: "800",

            marginBottom: "8px",

            color: "#1d4ed8",

            letterSpacing: "1px",

            textShadow:
              "0 4px 12px rgba(37,99,235,0.18)",
          }}
        >
          ✈ Available Flights
        </h1>

        {/* FROM TO */}
        <h2
          style={{
            fontSize: "42px",

            fontWeight: "600",

            color: "#334155",

            marginTop: "10px",
          }}
        >
          {from} ➝ {to}
        </h2>
      </div>

      {/* FILTER */}
      <div
        style={{
          display: "flex",

          justifyContent: "center",

          marginBottom: "35px",
        }}
      >
        <select
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          style={{
            padding: "14px 22px",

            borderRadius: "14px",

            border: "1px solid #cbd5e1",

            fontSize: "18px",

            outline: "none",

            background: "white",

            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <option value="">
            All Timings
          </option>

          <option value="Morning">
            Morning
          </option>

          <option value="Afternoon">
            Afternoon
          </option>

          <option value="Evening">
            Evening
          </option>
        </select>
      </div>

      {/* FLIGHT CARDS */}
      {filteredFlights.map((f) => (
        <div
          key={f.id}
          style={{
            background: "white",

            borderRadius: "26px",

            padding: "24px",

            margin: "24px auto",

            width: "88%",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            boxShadow:
              "0 12px 30px rgba(0,0,0,0.10)",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              width: "42%",
            }}
          >
            {/* IMAGE */}
            <img
              src={f.image}
              alt={f.airline}
              style={{
                width: "240px",
                height: "140px",

                borderRadius: "18px",

                objectFit: "cover",

                boxShadow:
                  "0 6px 18px rgba(0,0,0,0.15)",
              }}
            />

            {/* AIRLINE */}
            <div>
              <h1
                style={{
                  fontSize: "34px",

                  color: "#111827",

                  marginBottom: "8px",
                }}
              >
                {f.airline}
              </h1>

              <p
                style={{
                  color: "#64748b",

                  fontSize: "18px",
                }}
              >
                {f.aircraft}
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#334155",

                marginBottom: "12px",

                fontSize: "30px",

                fontWeight: "700",
              }}
            >
              📍 {f.from} ➝ {f.to}
            </h2>

            <h3
              style={{
                color: "#475569",

                marginBottom: "10px",

                fontSize: "23px",
              }}
            >
              ⏰ {f.time} ({f.departure})
            </h3>

            <p
              style={{
                color: "#64748b",

                fontSize: "18px",

                fontWeight: "600",
              }}
            >
              📅 {f.date}
            </p>
          </div>

          {/* RIGHT */}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#16a34a",

                fontSize: "44px",

                marginBottom: "16px",

                fontWeight: "800",
              }}
            >
              ₹{f.price}
            </h1>

            <button
              onClick={() => {
                // ✅ SAVE SELECTED FLIGHT
                localStorage.setItem(
                  "selectedFlight",
                  JSON.stringify(f)
                );

                // ✅ PASS DATA TO SEATS PAGE
                navigate("/seats", {
                  state: {
                    from: f.from,
                    to: f.to,
                    airline: f.airline,
                    flightNumber:
                      f.flightNumber,
                    aircraft: f.aircraft,
                    price: f.price,
                    date: f.date,
                    time: f.departure,

                    // ✅ IMPORTANT
                    image: f.image,
                  },
                });
              }}
              style={{
                border: "none",

                padding: "14px 30px",

                borderRadius: "14px",

                background:
                  "linear-gradient(to right,#2563eb,#3b82f6)",

                color: "white",

                fontSize: "18px",

                fontWeight: "700",

                cursor: "pointer",

                boxShadow:
                  "0 8px 20px rgba(37,99,235,0.30)",
              }}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
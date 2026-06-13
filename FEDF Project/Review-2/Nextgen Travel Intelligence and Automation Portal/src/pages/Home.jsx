import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const cities = [
    { name: "Hyderabad", icon: "🏰" },
    { name: "Delhi", icon: "🏛️" },
    { name: "Mumbai", icon: "🌆" },
    { name: "Chennai", icon: "🛕" },
    { name: "Bangalore", icon: "🏢" },
    { name: "Kolkata", icon: "🌉" },
    { name: "Pune", icon: "🏞️" },
    { name: "Ahmedabad", icon: "🕌" },
    { name: "Jaipur", icon: "🏰" },
    { name: "Lucknow", icon: "🕌" },
  ];

  // CITY SELECT
  const handleCityClick = (city) => {
    if (!from) {
      setFrom(city);
    } else if (!to && city !== from) {
      setTo(city);
    }
  };

  // RESET
  const handleReset = () => {
    setFrom("");
    setTo("");
  };

  // SEARCH
  const handleSearch = () => {
    if (!from || !to) {
      alert("Please select From and To cities");
      return;
    }

    localStorage.setItem(
      "booking",
      JSON.stringify({
        from,
        to,
      })
    );

    navigate("/flights");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#f8fbff,#eef4ff)",

        padding: "20px",

        fontFamily: "Arial",

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          background: "white",

          borderRadius: "24px",

          padding: "20px 30px",

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          boxShadow:
            "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",

              borderRadius: "18px",

              background:
                "linear-gradient(to right,#2563eb,#3b82f6)",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              color: "white",

              fontSize: "32px",
            }}
          >
            ✈️
          </div>

          <h1
            style={{
              color: "#0f172a",

              fontSize: "38px",

              margin: 0,
            }}
          >
            Flight Booking
          </h1>
        </div>

        {/* USER */}
        <div
          style={{
            width: "55px",
            height: "55px",

            borderRadius: "50%",

            background: "#f1f5f9",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            fontSize: "26px",
          }}
        >
          👤
        </div>
      </div>

      {/* AIRPLANE IMAGE */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
        alt="plane"
        style={{
          position: "absolute",

          right: "60px",

          top: "120px",

          width: "140px",

          opacity: 0.15,

          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          textAlign: "center",

          marginTop: "50px",

          position: "relative",

          zIndex: 2,
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "58px",

            marginBottom: "14px",

            fontWeight: "bold",

            lineHeight: "1.2",

            background:
              "linear-gradient(to right,#2563eb,#0f172a)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor:
              "transparent",
          }}
        >
          Search Flights
        </h1>

        {/* SUBTITLE */}
        <h2
          style={{
            color: "#475569",

            fontSize: "24px",

            marginBottom: "10px",
          }}
        >
          🌍 Interactive World Map Search
        </h2>

        <p
          style={{
            color: "#64748b",

            fontSize: "18px",

            marginBottom: "40px",
          }}
        >
          Click city → From → To
        </p>

        {/* CITY GRID */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(5,1fr)",

            gap: "22px",

            maxWidth: "1300px",

            margin: "auto",
          }}
        >
          {cities.map((city) => {
            const selected =
              city.name === from ||
              city.name === to;

            return (
              <div
                key={city.name}
                onClick={() =>
                  handleCityClick(city.name)
                }
                style={{
                  background: selected
                    ? "linear-gradient(to right,#3b82f6,#2563eb)"
                    : "white",

                  borderRadius: "22px",

                  padding: "22px",

                  cursor: "pointer",

                  transition: "0.3s",

                  boxShadow: selected
                    ? "0 10px 25px rgba(37,99,235,0.35)"
                    : "0 8px 20px rgba(0,0,0,0.08)",

                  display: "flex",

                  alignItems: "center",

                  gap: "15px",

                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "34px",

                    margin: 0,
                  }}
                >
                  {city.icon}
                </h1>

                <h2
                  style={{
                    color: selected
                      ? "white"
                      : "#0f172a",

                    fontSize: "22px",

                    margin: 0,
                  }}
                >
                  {city.name}
                </h2>
              </div>
            );
          })}
        </div>

        {/* FROM TO CARD */}
        <div
          style={{
            background: "white",

            width: "70%",

            margin: "50px auto",

            borderRadius: "28px",

            padding: "30px 40px",

            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08)",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",
          }}
        >
          {/* FROM */}
          <div
            style={{
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: "#64748b",

                fontSize: "20px",

                marginBottom: "5px",
              }}
            >
              From
            </p>

            <h1
              style={{
                color: "#0f172a",

                fontSize: "38px",

                margin: 0,
              }}
            >
              {from || "Select"}
            </h1>
          </div>

          {/* ARROW */}
          <div
            style={{
              fontSize: "38px",

              color: "#2563eb",
            }}
          >
            ✈️
          </div>

          {/* TO */}
          <div
            style={{
              textAlign: "right",
            }}
          >
            <p
              style={{
                color: "#64748b",

                fontSize: "20px",

                marginBottom: "5px",
              }}
            >
              To
            </p>

            <h1
              style={{
                color: "#0f172a",

                fontSize: "38px",

                margin: 0,
              }}
            >
              {to || "Select"}
            </h1>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          style={{
            border: "none",

            padding: "20px 60px",

            borderRadius: "18px",

            background:
              "linear-gradient(to right,#3b82f6,#2563eb)",

            color: "white",

            fontSize: "26px",

            fontWeight: "bold",

            cursor: "pointer",

            boxShadow:
              "0 8px 25px rgba(37,99,235,0.4)",
          }}
        >
          🔍 Search Flights
        </button>

        {/* RESET */}
        <div
          onClick={handleReset}
          style={{
            marginTop: "25px",

            color: "#2563eb",

            fontSize: "22px",

            cursor: "pointer",
          }}
        >
          🔄 Reset
        </div>
      </div>
    </div>
  );
}
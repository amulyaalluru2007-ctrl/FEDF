import React from "react";
import { useNavigate } from "react-router-dom";


export default function AirportDetails() {
  const navigate = useNavigate();

  const booking =
    JSON.parse(localStorage.getItem("latestBooking")) || {};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: "30px",
        }}
      >
        Airport Details (Detailed Structure)
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          alignItems: "start",
        }}
      >
        {/* LEFT SECTION */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "25px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
        >
         <img
  src="/images/airport-map.png"
  alt="Airport Map"
  style={{
    width: "100%",
    height: "700px",
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "15px",
              fontSize: "18px",
            }}
          >
            <span>🚻 Washrooms</span>
            <span>🍔 Food Court</span>
            <span>🛋 Lounge</span>
            <span>🔋 Charging Station</span>
            <span>🏥 Medical Help</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Gate */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2>✈️ Your Gate</h2>

            <h1
              style={{
                color: "#16a34a",
                fontSize: "60px",
                marginTop: "15px",
              }}
            >
              {booking.gate || "T1 - G5"}
            </h1>
          </div>

          {/* Route Details */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>
              📍 Route Details
            </h2>

            {(booking.route || [
  "Entrance",
  "Check-in Counter",
  "Security Check",
  "Duty Free",
  "Terminal T1",
]).map((step, index) => (
  <p key={index}>➡ {step}</p>
))}

            <p
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
             ✈ {booking.gate || "Gate G5"}
            </p>
          </div>

          {/* Flight Info */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2
  style={{
    color: "#0f4c81",
    marginBottom: "15px",
  }}
>
  {booking.airline || "IndiGo"}
</h2>

<p>
  <strong>Passenger:</strong>{" "}
  {booking.passenger || "Madhulika"}
</p>

<p>
  <strong>PNR:</strong>{" "}
  {booking.pnr || "SKY123456"}
</p>

<p>
  <strong>From:</strong>{" "}
  {booking.from || "DEL"}
</p>

<p>
  <strong>To:</strong>{" "}
  {booking.to || "BLR"}
</p>

<p>
  <strong>Departure:</strong>{" "}
  {booking.departure || "08:30 AM"}
</p>

<p>
  <strong>Arrival:</strong>{" "}
  {booking.arrival || "11:05 AM"}
</p>

<h3
  style={{
    color: "#0d47a1",
    marginTop: "15px",
  }}
>
  Boarding Time:{" "}
  {booking.boardingTime || "07:45 AM"}
</h3>
</div>

          {/* Hotel Button */}
          <button
            onClick={() => navigate("/hotels")}
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "15px",
              background:
                "linear-gradient(to right,#0d47a1,#1565c0)",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🏨 View Nearby Hotels
          </button>
        </div>
      </div>
    </div>
  );
}
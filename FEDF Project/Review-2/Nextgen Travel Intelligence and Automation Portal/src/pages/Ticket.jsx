import React from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function Ticket() {
  const navigate = useNavigate();

  // ✈️ GET DATA
  const flight =
    JSON.parse(localStorage.getItem("selectedFlight")) || {};

  const seats =
    JSON.parse(localStorage.getItem("seats")) || [];

  const seatPrice =
    Number(localStorage.getItem("seatPrice")) || 0;

  const foodTotal =
    Number(localStorage.getItem("foodTotal")) || 0;

  // 💰 TOTAL
  const total =
    (flight?.price || 0) +
    seatPrice +
    foodTotal;

    console.log(
  "Passenger Name Stored:",
  localStorage.getItem("passengerName")
);

console.log(
  "PNR Stored:",
  localStorage.getItem("pnr")
);
  // 🎫 RANDOM PNR
const pnr =
  localStorage.getItem("pnr") ||
  "SKY000000";

  // 📅 DATE
  const today = new Date();

  const formattedDate =
    today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  // ✅ QR DATA
  const qrData = `
SkyBook Flight Ticket

PNR: ${pnr}

Passenger Route:
${flight?.from} → ${flight?.to}

Airline:
${flight?.airline}

Seats:
${seats.join(", ")}

Departure:
${flight?.departure}

Total Paid:
₹${total}

Boarding Instructions:
Arrive 2 hours before departure.
Carry valid ID proof.
`;

const passengerName =
  localStorage.getItem("passengerName") || "";

const storedPnr =
  localStorage.getItem("pnr") || "SKY000000";
   
const qrUrl =
  `http://192.168.1.2:5173/ticket-details?` +
  `from=${encodeURIComponent(flight?.from || "")}` +
  `&to=${encodeURIComponent(flight?.to || "")}` +
  `&airline=${encodeURIComponent(flight?.airline || "")}` +
  `&departure=${encodeURIComponent(flight?.departure || "")}` +
  `&price=${encodeURIComponent(total)}` +
  `&seats=${encodeURIComponent(seats.join(","))}` +
  `&passengerName=${encodeURIComponent(passengerName)}` +
  `&pnr=${encodeURIComponent(storedPnr)}`;
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",

        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80')",

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "92%",
          maxWidth: "1400px",

          background: "white",

          borderRadius: "28px",

          overflow: "hidden",

          boxShadow:
            "0 12px 35px rgba(0,0,0,0.35)",
        }}
      >
        {/* TOP BLUE HEADER */}
        <div
          style={{
            background:
              "linear-gradient(to right,#0038b8,#0b57ff)",

            padding: "28px 40px",

            color: "white",

            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              ✈️ SkyBook Boarding Pass
            </h1>

            <p
              style={{
                fontSize: "22px",
                opacity: 0.9,
              }}
            >
              Your booking has been confirmed
            </p>
          </div>

          <h1
            style={{
              fontSize: "48px",
            }}
          >
            🛫
          </h1>
        </div>

        {/* BODY */}
        <div
          style={{
            padding: "40px",
          }}
        >
          {/* SUCCESS */}
          <div
            style={{
              background: "#ecfdf5",
              border:
                "1px solid #86efac",

              padding: "24px",

              borderRadius: "20px",

              marginBottom: "35px",

              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",

                borderRadius: "50%",

                background: "#16a34a",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "white",
                fontSize: "32px",
              }}
            >
              ✓
            </div>

            <div>
              <h2
                style={{
                  color: "#166534",
                  fontSize: "36px",
                  marginBottom: "6px",
                }}
              >
                Payment Successful
              </h2>

              <p
                style={{
                  color: "#166534",
                  fontSize: "20px",
                }}
              >
                Your ticket is confirmed and
                ready for boarding.
              </p>
            </div>
          </div>

          {/* ROUTE SECTION */}
          <div
            style={{
              background: "#f8fafc",

              border:
                "1px solid #dbeafe",

              padding: "35px",

              borderRadius: "24px",

              marginBottom: "35px",

              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            {/* FROM */}
            <div>
              <h1
                style={{
                  fontSize: "48px",
                  color: "#0f172a",
                  marginBottom: "5px",
                }}
              >
                {flight?.from?.slice(0, 3) ||
                  "DEL"}
              </h1>

              <p
                style={{
                  fontSize: "30px",
                  color: "#475569",
                }}
              >
                {flight?.from || "Delhi"}
              </p>
            </div>

            {/* CENTER */}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "180px",
                    borderTop:
                      "3px dashed #94a3b8",
                  }}
                ></div>

                <h1
                  style={{
                    fontSize: "70px",
                    color: "#2563eb",
                  }}
                >
                  ✈️
                </h1>

                <div
                  style={{
                    width: "180px",
                    borderTop:
                      "3px dashed #94a3b8",
                  }}
                ></div>
              </div>

              <h2
                style={{
                  color: "#2563eb",
                  marginTop: "10px",
                  fontSize: "34px",
                }}
              >
                {flight?.airline ||
                  "SkyBook Airlines"}
              </h2>

              <div
                style={{
                  marginTop: "10px",

                  display: "inline-block",

                  background: "#eff6ff",

                  padding: "10px 24px",

                  borderRadius: "30px",

                  color: "#1e40af",

                  fontWeight: "bold",

                  fontSize: "24px",
                }}
              >
                6E 123
              </div>
            </div>

            {/* TO */}
            <div
              style={{
                textAlign: "right",
              }}
            >
              <h1
                style={{
                  fontSize: "80px",
                  color: "#0f172a",
                  marginBottom: "5px",
                }}
              >
                {flight?.to?.slice(0, 3) ||
                  "BOM"}
              </h1>

              <p
                style={{
                  fontSize: "30px",
                  color: "#475569",
                }}
              >
                {flight?.to || "Mumbai"}
              </p>
            </div>
          </div>

          {/* DETAILS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",

              gap: "25px",
            }}
          >
            <DetailCard
              icon="📅"
              title="Journey Date"
              value={formattedDate}
              sub="Tuesday"
            />

            <DetailCard
              icon="🕒"
              title="Departure Time"
              value={
                flight?.departure ||
                "08:30 AM"
              }
              sub="On Time"
            />

            <DetailCard
              icon="💺"
              title="Selected Seats"
              value={
                seats.length > 0
                  ? seats.join(", ")
                  : "12A, 12B"
              }
              sub="Economy"
            />

            <DetailCard
              icon="🎫"
              title="PNR Number"
              value={pnr}
              sub="Booking Reference"
            />

            <DetailCard
              icon="🍴"
              title="Food Charges"
              value={`₹${foodTotal}`}
              sub="Added"
            />

            <DetailCard
              icon="💳"
              title="Total Paid"
              value={`₹${total}`}
              sub="Paid via Card"
            />
          </div>

          {/* BOARDING INFO */}
          <div
            style={{
              marginTop: "35px",

              background: "#f8fafc",

              border:
                "1px solid #dbeafe",

              borderRadius: "22px",

              padding: "30px",

              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",

                  borderRadius: "50%",

                  background: "#2563eb",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  color: "white",
                  fontSize: "38px",
                }}
              >
                i
              </div>

              <div>
                <h2
                  style={{
                    color: "#1d4ed8",
                    fontSize: "34px",
                    marginBottom: "10px",
                  }}
                >
                  Boarding Information
                </h2>

                <p
                  style={{
                    color: "#334155",
                    fontSize: "22px",
                    marginBottom: "8px",
                  }}
                >
                  Please arrive 2 hours before
                  departure.
                </p>

                <p
                  style={{
                    color: "#334155",
                    fontSize: "22px",
                  }}
                >
                  Carry valid ID proof for
                  verification.
                </p>
              </div>
            </div>

            {/* QR CODE */}
            <QRCodeCanvas
    value={qrUrl}
  size={150}
  bgColor="#ffffff"
  fgColor="#000000"
  level="H"
  includeMargin={true}
  style={{
    borderRadius: "10px",
    background: "white",
    padding: "10px",
  }}
/>

          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              marginTop: "35px",
            }}
          >
            <button
              onClick={() =>
                window.print()
              }
              style={btnStyle}
            >
              🖨️ Print Ticket
            </button>

            <button
              onClick={() =>
                navigate("/airport-details")
              }
              style={{
                ...btnStyle,

                background:
                  "linear-gradient(to right,#16a34a,#16c75a)",
              }}
            >
              🏠 Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✨ DETAIL CARD
function DetailCard({
  icon,
  title,
  value,
  sub,
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #dbeafe",
        borderRadius: "20px",
        padding: "25px",
        display: "flex",
        gap: "18px",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#eff6ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "34px",
        }}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <h3
          style={{
            color: "#475569",
            fontSize: "18px",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>

        <h2
          style={{
            color: "#0f172a",
            fontSize: "28px",
            marginBottom: "5px",
          }}
        >
          {value}
        </h2>

        <p
          style={{
            color: "#16a34a",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

// 🎨 BUTTON STYLE
const btnStyle = {
  flex: 1,
  padding: "18px",
  border: "none",
  borderRadius: "16px",
  background:
    "linear-gradient(to right,#2563eb,#3b82f6)",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow:
    "0 6px 18px rgba(37,99,235,0.4)",
};
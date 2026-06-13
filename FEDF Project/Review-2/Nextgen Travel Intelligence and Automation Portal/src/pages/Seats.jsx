import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Seats() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ GET FLIGHT DATA
  const flightData = location.state || {};

  const {
    from,
    to,
    airline,
    flightNumber,
    aircraft,
    price,
    date,
    time,
    image,
  } = flightData;

  // ✅ SELECTED SEATS
  const [selectedSeats, setSelectedSeats] =
    useState([]);

  // ✅ OCCUPIED SEATS
  const [occupiedSeats, setOccupiedSeats] =
    useState([]);

  // ✅ PASSENGERS
  const [passengers, setPassengers] =
    useState([]);

  // ✅ RANDOM OCCUPIED SEATS
  useEffect(() => {
    const allSeats = [];

    // FIRST CLASS
    for (let row = 1; row <= 2; row++) {
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
      ].forEach((col) => {
        allSeats.push(`${col}${row}`);
      });
    }

    // BUSINESS
    for (let row = 3; row <= 7; row++) {
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
      ].forEach((col) => {
        allSeats.push(`${col}${row}`);
      });
    }

    // ECONOMY
    for (let row = 8; row <= 15; row++) {
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
      ].forEach((col) => {
        allSeats.push(`${col}${row}`);
      });
    }

    const shuffled = [...allSeats].sort(
      () => 0.5 - Math.random()
    );

    setOccupiedSeats(shuffled.slice(0, 14));
  }, []);

  // ✅ AUTO CREATE PASSENGERS
  useEffect(() => {
    setPassengers((prev) =>
      selectedSeats.map(
        (_, index) =>
          prev[index] || {
            name: "",
            age: "",
          }
      )
    );
  }, [selectedSeats]);

  // ✅ PREMIUM SEATS
  const premiumSeats = [
    "A1",
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",

    "A2",
    "B2",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "H2",

    "D10",
  ];

  // ✅ SEAT CLICK
  const handleSeatClick = (seat) => {
    if (occupiedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  // ✅ CALCULATIONS
  const seatPrice =
    selectedSeats.length * 800;

  const totalAmount =
    (price || 0) + seatPrice;

  // ✅ CONTINUE
  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      alert(
        "Please select at least 1 seat"
      );
      return;
    }

    const incompletePassenger =
      passengers.some(
        (p) =>
          p.name.trim() === "" ||
          p.age.toString().trim() === ""
      );

    if (incompletePassenger) {
      alert(
        "Please fill all passenger details"
      );
      return;
    }
    // Save First Passenger Name
localStorage.setItem(
  "passengerName",
  passengers[0].name
);

localStorage.setItem(
  "passengers",
  JSON.stringify(passengers)
);

localStorage.setItem(
  "seatPrice",
  seatPrice
);

localStorage.setItem(
  "seats",
  JSON.stringify(selectedSeats)
);


// Generate PNR
const pnr =
  "SKY" +
  Math.floor(
    100000 + Math.random() * 900000
  );

localStorage.setItem(
  "pnr",
  pnr
);

console.log(
  "Saved Passenger:",
  localStorage.getItem("passengerName")
);

console.log(
  "Saved PNR:",
  localStorage.getItem("pnr")
);


    // ✅ PASS DATA
    navigate("/food", {
      state: {
        from,
        to,
        airline,
        flightNumber,
        aircraft,
        date,
        time,
        image,
        basePrice: price,
        selectedSeats,
        seatPrice,
        totalAmount,
        passengers,
      },
    });
  };

  // ✅ SEAT COLORS
  const getSeatColor = (seat) => {
    if (selectedSeats.includes(seat)) {
      return "linear-gradient(135deg,#2563eb,#1d4ed8)";
    }

    if (occupiedSeats.includes(seat)) {
      return "linear-gradient(135deg,#d1d5db,#cbd5e1)";
    }

    if (premiumSeats.includes(seat)) {
      return "linear-gradient(135deg,#ff6b6b,#ff4d4f)";
    }

    return "linear-gradient(135deg,#22c55e,#16a34a)";
  };

  // ✅ RENDER SEAT
  const renderSeat = (seat) => (
    <button
      key={seat}
      onClick={() => handleSeatClick(seat)}
      style={{
        width: "56px",
        height: "40px",
        border: "none",
        borderRadius: "12px",
        background: getSeatColor(seat),
        color: occupiedSeats.includes(seat)
          ? "#111827"
          : "white",
        fontWeight: "600",
        fontSize: "14px",
        cursor: occupiedSeats.includes(seat)
          ? "not-allowed"
          : "pointer",
        transition: "0.3s",
        boxShadow:
          selectedSeats.includes(seat)
            ? "0 8px 18px rgba(37,99,235,0.4)"
            : "0 4px 10px rgba(0,0,0,0.12)",
        transform:
          selectedSeats.includes(seat)
            ? "scale(1.05)"
            : "scale(1)",
      }}
    >
      {seat}
    </button>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#f8fbff,#eef4ff)",
        padding: "25px",
        fontFamily:
          "Poppins, sans-serif",
      }}
    >
      {/* TOP */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            navigate("/flights")
          }
          style={{
            border: "none",
            background: "transparent",
            fontSize: "18px",
            cursor: "pointer",
            color: "#334155",
          }}
        >
          ← Back to Flights
        </button>
      </div>

      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#0f2f6b",
            fontSize: "52px",
            marginBottom: "5px",
          }}
        >
          ✈️ Seat Selection
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "20px",
          }}
        >
          Choose your favorite seat
        </p>
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: "25px",
            padding: "25px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: "25px",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#0f2f6b",
                  fontSize: "42px",
                }}
              >
                {from} → {to}
              </h1>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "10px",
                }}
              >
                {airline} •{" "}
                {flightNumber} • {date}
              </p>
            </div>

            {/* LEGEND */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>🟩 Available</div>
              <div>🟦 Selected</div>
              <div>⬜ Occupied</div>
              <div>🟥 Premium</div>
            </div>
          </div>

          {/* AIRCRAFT */}
          <div
            style={{
              border:
                "2px solid #e2e8f0",
              borderRadius: "40px",
              padding: "35px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9,
              10, 11, 12, 13, 14, 15].map(
              (row) => (
                <div
                  key={row}
                  style={{
                    display: "flex",
                    justifyContent:
                      "center",
                    gap: "90px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    {[
                      "A",
                      "B",
                      "C",
                      "D",
                    ].map((col) =>
                      renderSeat(
                        `${col}${row}`
                      )
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    {[
                      "E",
                      "F",
                      "G",
                      "H",
                    ].map((col) =>
                      renderSeat(
                        `${col}${row}`
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            width: "420px",
          }}
        >
          {/* SUMMARY */}
          <div
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "25px",
              marginBottom: "20px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                color: "#0f172a",
                marginBottom: "20px",
              }}
            >
              Booking Summary
            </h2>

            <img
              src={image}
              alt={airline}
              style={{
                width: "100%",
                height: "160px",
                borderRadius: "18px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />

            <h2>{airline}</h2>

            <p
              style={{
                color: "#64748b",
                marginTop: "8px",
              }}
            >
              {flightNumber} •{" "}
              {aircraft}
            </p>

            <hr
              style={{
                margin: "20px 0",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Flight Price</span>

              <strong>
                ₹{price}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Seat Charges</span>

              <strong>
                ₹{seatPrice}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <span>Seat(s)</span>

              <strong>
                {selectedSeats.length}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "18px",
              }}
            >
              <span>Total Amount</span>

              <h1
                style={{
                  color: "#2563eb",
                }}
              >
                ₹{totalAmount}
              </h1>
            </div>
          </div>

          {/* PASSENGERS */}
          <div
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "25px",
              marginBottom: "20px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
                maxHeight: "500px",
    overflowY: "auto",
    position: "sticky",
  top: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Passenger Details
            </h2>

            {selectedSeats.length ===
            0 ? (
              <p
                style={{
                  color: "#64748b",
                }}
              >
                Select seats to add
                passengers
              </p>
            ) : (
              selectedSeats.map(
                (seat, index) => (
                  <div
                    key={seat}
                    style={{
                      marginBottom:
                        "22px",
                      padding: "18px",
                      borderRadius:
                        "16px",
                      background:
                        "#f8fafc",
                      border:
                        "1px solid #e2e8f0",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom:
                          "15px",
                        color: "#1e293b",
                      }}
                    >
                      Passenger{" "}
                      {index + 1} •
                      Seat {seat}
                    </h3>

                    <input
                      placeholder="Passenger Name"
                      style={inputStyle}
                      value={
                        passengers[
                          index
                        ]?.name || ""
                      }
                      onChange={(e) => {
                        const updated =
                          [
                            ...passengers,
                          ];

                        updated[index] =
                          {
                            ...updated[
                              index
                            ],
                            name:
                              e.target
                                .value,
                          };

                        setPassengers(
                          updated
                        );
                      }}
                    />

                    <input
                      placeholder="Age"
                      type="number"
                      style={inputStyle}
                      value={
                        passengers[
                          index
                        ]?.age || ""
                      }
                      onChange={(e) => {
                        const updated =
                          [
                            ...passengers,
                          ];

                        updated[index] =
                          {
                            ...updated[
                              index
                            ],
                            age: e.target
                              .value,
                          };

                        setPassengers(
                          updated
                        );
                      }}
                    />
                  </div>
                )
              )
            )}
          </div>

          {/* SELECTED SEATS */}
          <div
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "25px",
              marginBottom: "20px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Selected Seats
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {selectedSeats.length ===
              0 ? (
                <p
                  style={{
                    color: "#64748b",
                  }}
                >
                  No seats selected
                </p>
              ) : (
                selectedSeats.map(
                  (seat) => (
                    <div
                      key={seat}
                      style={{
                        background:
                          "#dbeafe",
                        color:
                          "#1d4ed8",
                        padding:
                          "10px 18px",
                        borderRadius:
                          "12px",
                        fontWeight:
                          "bold",
                      }}
                    >
                      {seat}
                    </div>
                  )
                )
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "18px",
              background:
                "linear-gradient(to right,#2563eb,#3b82f6)",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Continue to Food →
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  marginBottom: "15px",
  fontSize: "16px",
  outline: "none",
};
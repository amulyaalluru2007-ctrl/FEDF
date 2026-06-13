import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hotels() {
  const navigate = useNavigate();

  // 🏨 HOTEL DATA
  const hotels = [
    {
      id: 1,
      name: "Taj Palace Hotel",
      location: "Near Airport",
      distance: "2.5 km",
      time: "8 mins",
      price: 4500,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 2,
      name: "Grand Luxury Stay",
      location: "City Center",
      distance: "5 km",
      time: "15 mins",
      price: 3800,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 3,
      name: "Royal Inn",
      location: "Banjara Hills",
      distance: "7 km",
      time: "20 mins",
      price: 3200,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 4,
      name: "Airport Residency",
      location: "Airport Road",
      distance: "1.8 km",
      time: "5 mins",
      price: 2900,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 5,
      name: "Elite Comfort Hotel",
      location: "HiTech City",
      distance: "10 km",
      time: "25 mins",
      price: 5000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 6,
      name: "Sunrise Suites",
      location: "Gachibowli",
      distance: "12 km",
      time: "30 mins",
      price: 3500,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    },

    // ✨ EXTRA HOTELS

    {
      id: 7,
      name: "Blue Moon Hotel",
      location: "Madhapur",
      distance: "6 km",
      time: "18 mins",
      price: 4100,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 8,
      name: "Ocean View Stay",
      location: "Beach Road",
      distance: "15 km",
      time: "35 mins",
      price: 6200,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 9,
      name: "The Urban Nest",
      location: "Downtown",
      distance: "4 km",
      time: "12 mins",
      price: 3300,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 10,
      name: "Green Leaf Resort",
      location: "Lake View",
      distance: "18 km",
      time: "40 mins",
      price: 7200,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 11,
      name: "Comfort Grand",
      location: "Railway Station",
      distance: "3 km",
      time: "10 mins",
      price: 2700,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    },

    {
      id: 12,
      name: "Skyline Residency",
      location: "Financial District",
      distance: "9 km",
      time: "22 mins",
      price: 5400,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",

        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "58px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          🏨 Nearby Hotels
        </h1>

        <p
          style={{
            color: "#e2e8f0",
            fontSize: "24px",
          }}
        >
          Best hotels near your destination
        </p>
      </div>

      {/* HOTEL GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(360px,1fr))",
          gap: "28px",
        }}
      >
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)",

              transition: "0.3s",
            }}
          >
            {/* IMAGE */}
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            {/* DETAILS */}
            <div style={{ padding: "24px" }}>
              {/* TITLE */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h1
                  style={{
                    color: "#0f172a",
                    fontSize: "24px",
                  }}
                >
                  {hotel.name}
                </h1>

                <h3
                  style={{
                    color: "#f59e0b",
                    fontSize: "24px",
                  }}
                >
                  ⭐ {hotel.rating}
                </h3>
              </div>

              {/* LOCATION */}
              <p
                style={{
                  color: "#334155",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                📍 {hotel.location}
              </p>

              {/* DISTANCE + TIME */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",

                  paddingTop: "15px",
                  paddingBottom: "15px",

                  borderTop:
                    "1px solid #e2e8f0",

                  borderBottom:
                    "1px solid #e2e8f0",

                  marginBottom: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#64748b",
                      marginBottom: "6px",
                    }}
                  >
                    Distance
                  </p>

                  <h2
                    style={{
                      color: "#0f172a",
                    }}
                  >
                    🚖 {hotel.distance}
                  </h2>
                </div>

                <div>
                  <p
                    style={{
                      color: "#64748b",
                      marginBottom: "6px",
                    }}
                  >
                    Reach Time
                  </p>

                  <h2
                    style={{
                      color: "#0f172a",
                    }}
                  >
                    🕒 {hotel.time}
                  </h2>
                </div>
              </div>

              {/* PRICE + BUTTON */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1
                    style={{
                      color: "#16a34a",
                      fontSize: "42px",
                    }}
                  >
                    ₹{hotel.price}
                  </h1>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "18px",
                    }}
                  >
                    /night
                  </p>
                </div>

                <button
                 onClick={() => {
    alert(
      `🏨 ${hotel.name} booked successfully!`
    );
  }}
                  style={{
                    border: "none",

                    padding:
                      "14px 32px",

                    borderRadius: "14px",

                    background:
                      "linear-gradient(to right,#2563eb,#3b82f6)",

                    color: "white",

                    fontSize: "20px",

                    fontWeight: "bold",

                    cursor: "pointer",

                    boxShadow:
                      "0 4px 15px rgba(37,99,235,0.4)",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() =>
            navigate("/home")
          }
          style={{
            padding: "18px 45px",

            border: "none",

            borderRadius: "18px",

            background:
              "linear-gradient(to right,#16a34a,#4ade80)",

            color: "white",

            fontSize: "26px",

            fontWeight: "bold",

            cursor: "pointer",

            boxShadow:
              "0 6px 18px rgba(22,163,74,0.4)",
          }}
        >
          🏠 Back To Home
        </button>
      </div>
    </div>
  );
}
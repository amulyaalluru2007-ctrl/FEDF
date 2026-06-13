import React from "react";
import { useSearchParams } from "react-router-dom";

export default function TicketDetails() {
  const [searchParams] = useSearchParams();

  console.log("FULL URL:", window.location.href);

  console.log(
    "Passenger From URL:",
    searchParams.get("passengerName")
  );

  console.log(
    "PNR From URL:",
    searchParams.get("pnr")
  );

  console.log(
    "Passenger From LocalStorage:",
    localStorage.getItem("passengerName")
  );

  console.log(
    "PNR From LocalStorage:",
    localStorage.getItem("pnr")
  );

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const airline = searchParams.get("airline");
  const departure = searchParams.get("departure");
  const price = searchParams.get("price");
  const seats = searchParams.get("seats");
  const getBoardingTime = (departureTime) => {
  if (!departureTime) return "N/A";

  const [time, period] = departureTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const departureDate = new Date();
  departureDate.setHours(hours);
  departureDate.setMinutes(minutes);

  departureDate.setMinutes(
    departureDate.getMinutes() - 45
  );

  return departureDate.toLocaleTimeString(
    "en-IN",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );
};

const boardingTime =
  getBoardingTime(departure);

 const passengerName =
  searchParams.get("passengerName") ||
  "Passenger";

const pnr =
  searchParams.get("pnr") ||
  "SKY000000";

    console.log(
  "Passenger Name:",
  localStorage.getItem("passengerName")
);

console.log(
  "PNR:",
  localStorage.getItem("pnr")
);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#dbeafe,#eff6ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "850px",
          borderRadius: "30px",
          padding: "35px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
            fontSize: "42px",
          }}
        >
          ✈ Full Boarding Pass
        </h1>

        {/* BOARDING PASS */}
        <div
          style={{
            background: "#eff6ff",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "20px",
            lineHeight: "35px",
          }}
        >
          <p>
            <b>Passenger Name:</b>{" "}
            {passengerName}
          </p>

          <p>
            <b>PNR:</b> {pnr}
          </p>

          <p>
            <b>Flight Number:</b> SJ203
          </p>

          <p>
            <b>Route:</b> {from} ➜ {to}
          </p>

          <p>
            <b>Airline:</b> {airline}
          </p>

          <p>
            <b>Departure Time:</b>{" "}
            {departure}
          </p>

          <p>
  <b>Boarding Time:</b> {boardingTime}
</p>

          <p>
            <b>Terminal:</b> T2
          </p>

          <p>
            <b>Gate Number:</b> A12
          </p>

          <p>
            <b>Seat Numbers:</b>{" "}
            {seats}
          </p>

          <p>
            <b>Total Paid:</b> ₹{price}
          </p>

          <p
            style={{
              color: "green",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            ✅ VERIFIED FOR BOARDING
          </p>
        </div>

        {/* EMERGENCY */}
        <div
          style={{
            background: "#fff7ed",
            padding: "20px",
            borderRadius: "20px",
            border: "1px solid #fdba74",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#ea580c",
            }}
          >
            🚨 Emergency Instructions
          </h2>

          <ul
            style={{
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
            <li>
              Follow crew instructions at all
              times.
            </li>

            <li>
              Locate the nearest emergency
              exit.
            </li>

            <li>
              Fasten seat belt during takeoff
              and landing.
            </li>

            <li>
              Keep mobile devices in flight
              mode.
            </li>

            <li>
              Report suspicious activity
              immediately.
            </li>
          </ul>
        </div>

        {/* SECURITY */}
        <div
          style={{
            background: "#ecfdf5",
            padding: "20px",
            borderRadius: "20px",
            border: "1px solid #86efac",
          }}
        >
          <h2
            style={{
              color: "#166534",
            }}
          >
            🛡 Security Verification
          </h2>

          <p>
            Ticket Status:
            <b> VALID</b>
          </p>

          <p>
            Passenger Identity:
            <b> VERIFIED</b>
          </p>

          <p>
            Boarding Permission:
            <b> GRANTED</b>
          </p>

          <p>
            Verification Method:
            <b> QR Authentication</b>
          </p>
        </div>
      </div>
    </div>
  );
}
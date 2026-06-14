import { useState } from "react";

function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [travelClass, setTravelClass] = useState("Economy");
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `✅ Ticket Booked!
${source} → ${destination}
📅 ${travelDate}
⏰ ${travelTime}
🛫 Class: ${travelClass}
👥 Seats: ${seats}`
    );

    // Reset form
    setSource("");
    setDestination("");
    setTravelDate("");
    setTravelTime("");
    setTravelClass("Economy");
    setSeats(1);
  };

  return (
    <>
      {/* 🔝 TOP TITLE */}
      <div style={styles.topBar}>
        ✈ Airline System
      </div>

      {/* 🔝 HEADER */}
      <div style={styles.header}>
        <h1>Welcome to Airline Booking System</h1>
        <p>Book your flights easily and quickly ✈</p>
      </div>

      {/* 🔵 MAIN SECTION */}
      <div style={styles.page}>
        <div style={styles.card}>
          <h2 style={styles.heading}>✈ Book Flight</h2>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div style={styles.row}>
              <input
                type="text"
                placeholder="Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            {/* Row 2 */}
            <div style={styles.row}>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
                style={styles.input}
              />
              <input
                type="time"
                value={travelTime}
                onChange={(e) => setTravelTime(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            {/* Row 3 */}
            <div style={styles.row}>
              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                style={styles.input}
              >
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>

              <input
                type="number"
                min="1"
                max="10"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* ✅ Accessible Button (important for testing) */}
            <button
              type="submit"
              style={styles.button}
              aria-label="Book Ticket"
            >
              ✈ Book Ticket
            </button>
          </form>

          {/* Message */}
          {message && <pre style={styles.message}>{message}</pre>}
        </div>
      </div>
    </>
  );
}

const styles = {
  topBar: {
    background: "#222",
    color: "white",
    padding: "12px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold"
  },

  header: {
    textAlign: "center",
    padding: "20px",
    background: "white"
  },

  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "30px",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    width: "450px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "15px"
  },

  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#4facfe",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px"
  },

  message: {
    marginTop: "15px",
    background: "#e6ffe6",
    padding: "10px",
    borderRadius: "8px",
    whiteSpace: "pre-wrap"
  }
};

export default BookingForm;
import { useEffect, useState } from "react";

export default function MapView({ from, to }) {
  const [progress, setProgress] = useState(0);

  // ✈️ Smooth looping animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // reset (loop)
        return prev + 0.5; // smooth movement
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      {/* TITLE */}
      <h2 style={{ textAlign: "center" }}>
        ✈️ Live Flight Tracking
      </h2>

      {/* 🌍 MAP */}
      <iframe
        title="map"
        width="100%"
        height="300"
        style={{
          borderRadius: "15px",
          border: "none",
          marginTop: "10px",
        }}
        src={`https://www.google.com/maps?q=${from}+to+${to}&output=embed`}
      ></iframe>

      {/* TRACK BAR */}
      <div
        style={{
          marginTop: "20px",
          width: "90%",
          height: "12px",
          background: "#e5e7eb",
          borderRadius: "10px",
          marginInline: "auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* PROGRESS LINE */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#4f46e5,#22c55e)",
            borderRadius: "10px",
            transition: "width 0.1s linear",
          }}
        />

        {/* ✈️ PLANE */}
        <span
          style={{
            position: "absolute",
            left: `${progress}%`,
            top: "-10px",
            transform: "translateX(-50%)",
            fontSize: "20px",
          }}
        >
          ✈️
        </span>
      </div>

      {/* ROUTE TEXT */}
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "600",
        }}
      >
        {from} ➝ {to}
      </p>
    </div>
  );
}
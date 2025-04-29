import { useEffect, useState } from "react";

/* colors */
const navy = "#1d2556";
const lilac = "#e7e9ff";
const btnBg = "#464e9a";

export default function Section12() {
  const eventDate = new Date("2025-05-18T13:00:00"); // 18 May 1:00PM
  const [timeLeft, setTimeLeft] = useState({});
  const [seatsLeft, setSeatsLeft] = useState(63); // Example

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        padding: "80px 16px 100px",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Countdown Box */}
      <div
        style={{
          background: lilac,
          padding: "40px 24px",
          borderRadius: "20px",
          boxShadow: "0 8px 18px rgba(0,0,0,.05)",
          textAlign: "center",
          width: "100%",
          maxWidth: "480px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "26px",
            fontWeight: 700,
            color: navy,
            marginBottom: "24px",
          }}
        >
          Time Remaining
        </h3>

        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "12px",
            color: navy,
          }}
        >
          {timeLeft.days ?? 0}d : {timeLeft.hours ?? 0}h : {timeLeft.minutes ?? 0}m
        </div>

        <div
          style={{
            fontSize: "16px",
            color: navy,
            marginBottom: "28px",
          }}
        >
          until the event starts
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "16px 20px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "18px",
            color: navy,
            display: "inline-block",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          {seatsLeft} Seats Left
        </div>
      </div>
    </section>
  );
}

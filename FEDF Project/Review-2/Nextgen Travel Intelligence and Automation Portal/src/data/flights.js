export const cities = [
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow"
];

const timeSlots = [
  { time: "Morning", multiplier: 1 },
  { time: "Afternoon", multiplier: 1.25 },
  { time: "Evening", multiplier: 1.5 }
];

const airlines = ["IndiGo", "Air India", "Vistara", "SpiceJet"];

const getBasePrice = (from, to) => {
  const distance = Math.abs(from.charCodeAt(0) - to.charCodeAt(0));
  return 3000 + distance * 300 + Math.floor(Math.random() * 1000);
};

const generateFlights = () => {
  const data = [];

  cities.forEach((from, i) => {
    cities.forEach((to, j) => {
      if (from === to) return;

      timeSlots.forEach((slot, k) => {
        const base = getBasePrice(from, to);

        data.push({
          id: `${from}-${to}-${slot.time}-${i}-${j}-${k}`,
          from,
          to,
          airline: airlines[Math.floor(Math.random() * airlines.length)],
          time: slot.time,
          price: Math.round(base * slot.multiplier)
        });
      });
    });
  });

  return data;
};

export const flightsData = generateFlights();
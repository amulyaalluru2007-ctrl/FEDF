export const cities = [
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bangalore"
];

export const flightsData = [
  { id: 1, from: "Delhi", to: "Mumbai", airline: "IndiGo", time: "Morning", base: 4500 },
  { id: 2, from: "Delhi", to: "Mumbai", airline: "Air India", time: "Afternoon", base: 5200 },
  { id: 3, from: "Delhi", to: "Mumbai", airline: "SpiceJet", time: "Evening", base: 6000 },

  { id: 4, from: "Mumbai", to: "Delhi", airline: "Vistara", time: "Morning", base: 4800 },
  { id: 5, from: "Mumbai", to: "Delhi", airline: "IndiGo", time: "Evening", base: 5500 },

  { id: 6, from: "Hyderabad", to: "Delhi", airline: "Air India", time: "Morning", base: 4700 },
  { id: 7, from: "Hyderabad", to: "Delhi", airline: "IndiGo", time: "Afternoon", base: 5100 },

  { id: 8, from: "Hyderabad", to: "Mumbai", airline: "IndiGo", time: "Evening", base: 5600 },

  { id: 9, from: "Mumbai", to: "Hyderabad", airline: "Air India", time: "Evening", base: 6000 },

  { id: 10, from: "Delhi", to: "Hyderabad", airline: "SpiceJet", time: "Evening", base: 4900 },

  { id: 11, from: "Mumbai", to: "Hyderabad", airline: "Vistara", time: "Morning", base: 4600 },

  { id: 12, from: "Mumbai", to: "Hyderabad", airline: "IndiGo", time: "Afternoon", base: 5300 }
].map(f => ({
  ...f,
  price: f.base   // ✅ important upgrade (future dynamic pricing)
}));

export const foodItems = [
  {
    id: 1,
    name: "Burger",
    price: 200,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 2,
    name: "Pizza",
    price: 300,
    img: "https://images.unsplash.com/photo-1548365328-9f547fb0953d"
  }
];

export const hotels = [
  {
    id: 1,
    city: "Delhi",
    name: "Taj Hotel",
    price: 3000,
    km: "2km",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    id: 2,
    city: "Mumbai",
    name: "Oberoi",
    price: 4000,
    km: "3km",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
  }
];
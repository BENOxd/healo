import React from "react";
import { Search, Filter, User, Bell, Star } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    name: "Dr. Hamza Tariq",
    specialty: "Senior Surgeon",
    time: "10:30 AM–5:30 PM",
    fee: "$12",
    rating: 4.9,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Dr. Alina Fatima",
    specialty: "Senior Surgeon",
    time: "10:30 AM–3:30 PM",
    fee: "$12",
    rating: 5.0,
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    name: "Dr. Alfred Reijo",
    specialty: "Junior Neurologist",
    time: "09:30 PM–2:30 AM",
    fee: "$12",
    rating: 4.0,
    image: "./assets/p1.png", // Replace with actual image URL
  },
];

const PatientAppoint= () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9ACBD0] to-[#1e3a8a] p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <User size={24} />
          <Bell size={24} className="text-red-500" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">BOOK APPOINTMENT</h1>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 pl-10 rounded-lg shadow-md focus:outline-none"
        />
        <Search size={20} className="absolute left-3 top-3 text-gray-500" />
      </div>
      <div className="flex justify-end mb-4">
        <Filter size={24} className="cursor-pointer" />
      </div>
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-lg relative"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-1">
              <h2 className="font-bold text-lg">{doctor.name}</h2>
              <p className="text-gray-500 italic">{doctor.specialty}</p>
              <p className="text-sm text-gray-600">🕒 {doctor.time}</p>
              <p className="text-sm text-gray-600">Fee: {doctor.fee}</p>
            </div>
            <div className="flex items-center">
              <Star size={16} className="text-yellow-500" />
              <span className="ml-1 font-semibold">{doctor.rating}</span>
            </div>
            <button className="absolute right-4 bg-black text-white p-2 rounded-full">
              ➜
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PatientAppoint;

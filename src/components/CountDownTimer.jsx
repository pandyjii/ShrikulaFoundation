import React, { useEffect, useState } from "react";
import leftLeave from '../assets/leftLeaves.png';
import rightLeave from '../assets/rightLeaves.png';
export const CountDownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-07T00:00:00"); // Target date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center space-x-10 bg-white py-8">
      {/* Left Leaf */}
      <img
        src={leftLeave}
        alt="Leaf"
        className="w-24 h-32"
      />

      {/* Countdown Boxes */}
      <div className="flex items-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center justify-center w-20 h-24 border-2 border-[#893518] rounded-md shadow-lg"
          >
            <span className="text-3xl font-bold text-[#893518]">{value}</span>
            <span className="text-sm text-[#893518] capitalize">{unit}</span>
          </div>
        ))}
      </div>

      {/* Right Leaf */}
      <img
        src={rightLeave}
        alt="Leaf"
        className="w-24 h-32"
      />
    </div>
  );
};

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
    <div className="flex flex-col items-center justify-center bg-white py-8 space-y-6 md:flex-row md:space-y-0 md:space-x-10">
      {/* Left Leaf */}
      <img
        src={leftLeave}
        alt="Leaf"
        className="w-16 h-20 md:w-24 md:h-32"
      />

      {/* Countdown Boxes */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center justify-center w-16 h-20 border-2 border-[#893518] rounded-md shadow-lg md:w-20 md:h-24"
          >
            <span className="text-xl font-bold text-[#893518] md:text-3xl">{value}</span>
            <span className="text-xs text-[#893518] capitalize md:text-sm">{unit}</span>
          </div>
        ))}
      </div>

      {/* Right Leaf */}
      <img
        src={rightLeave}
        alt="Leaf"
        className="w-16 h-20 md:w-24 md:h-32"
      />
    </div>
  );
};

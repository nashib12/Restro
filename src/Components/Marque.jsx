import React from "react";

const Marque = () => {
  const words = ["Hotels", "Room", "Suits", "Resort"];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-[marquee_8s_linear_infinite] uppercase bg-black/90 py-6 text-white">

        {words.map((word, i) => (
          <span key={`first-${i}`} className="mx-24 text-5xl font-semibold">
            {word}
          </span>
        ))}

        {words.map((word, i) => (
          <span key={`second-${i}`} className="mx-24 text-5xl font-semibold">
            {word}
          </span>
        ))}
        
        {words.map((word, i) => (
          <span key={`second-${i}`} className="mx-24 text-5xl font-semibold">
            {word}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marque;

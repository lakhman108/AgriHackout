import React from 'react';

const Chakra = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-80 h-48 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Card Content */}
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default Chakra;
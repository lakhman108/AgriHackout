import React from 'react';
import { useLocation } from 'react-router-dom';

const PesticidesPage = () => {
  const location = useLocation();
  const { pesticides } = location.state || { pesticides: [] };

  return (

    <div className="p-6 max-w-3xl mx-auto">
    <h1 className='mb-20 text-6xl'>Recommended Pesticides that you can Use 👇</h1>
      {pesticides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pesticides.map((pesticide) => (
            <div
              key={pesticide.id}
              className="bg-zinc-800 shadow-2xl shadow-slate-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-green-400 mb-2">{pesticide.name}</h2>
              <p className="text-lg text-gray-300 mb-2">Dosage: {pesticide.dosage}</p>
              <p className="text-lg text-gray-300">Price: ${pesticide.price}</p>

            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No pesticides available.</p>
      )}
    </div>
  );
};

export default PesticidesPage;

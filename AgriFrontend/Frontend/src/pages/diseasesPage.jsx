import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const DiseasesPage = () => {
  const { id } = useParams();
  const [diseases, setDiseases] = useState([]);
  const [selectedPesticides, setSelectedPesticides] = useState([]);

  useEffect(() => {
    // Fetch diseases from API
    const token = Cookies.get('authToken');  // Replace with actual token retrieval method

    const fetchDiseases = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cropdiseasepesticide/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log(data);  // Uncomment for debugging purposes to see fetched data
        setDiseases(data);
      } catch (error) {
        console.error('Error fetching diseases:', error);
      }
    };

    fetchDiseases();
  }, [id]);

  const handleCheckboxChange = (pesticideId) => {
    setSelectedPesticides((prevSelected) =>
      prevSelected.includes(pesticideId)
        ? prevSelected.filter((id) => id !== pesticideId)
        : [...prevSelected, pesticideId]
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
  {diseases.length > 0 ? (
    diseases.map((disease) => (
      <div
        key={disease.id}
        className="bg-zinc-800 shadow-2xl shadow-slate-700 rounded-lg p-6 mb-10"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Diseases Name : <span className='text-green-400'>{disease.name}</span></h2>
        <p className="text-lg text-gray-300 mb-4">Diseases Type : <span className='text-green-400'>{disease.type}</span></p>

        <h3 className="text-2xl font-semibold text-green-500 mb-3 text-start">
          Recommended Pesticides:
        </h3>
        <ul>
          {disease.cropDiseasePesticides && disease.cropDiseasePesticides.length > 0 ? (
            disease.cropDiseasePesticides.map((pesticide) => (
              <li key={pesticide.id} className="mb-3">
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleCheckboxChange(pesticide.id)}
                    checked={selectedPesticides.includes(pesticide.id)}
                  />
                  <span>{`Pesticide ID: ${pesticide.id} - Dosage: ${pesticide.dosage}`}</span>
                </label>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No recommended pesticides found.</p>
          )}
        </ul>
      </div>
    ))
  ) : (
    <p className="text-gray-500">Loading disease data...</p>
  )}
</div>

  );
};

export default DiseasesPage;

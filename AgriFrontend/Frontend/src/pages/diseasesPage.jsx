import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const DiseasesPage = () => {
  const { id } = useParams();
  const [diseases, setDiseases] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const navigate = useNavigate();  // Use useNavigate hook

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

  const handleCheckboxChange = (diseaseId) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(diseaseId)
        ? prevSelected.filter((id) => id !== diseaseId)
        : [...prevSelected, diseaseId]
    );
  };

  const handleSubmit = async () => {
    const token = Cookies.get('authToken');  // Replace with actual token retrieval method
    const payload = selectedDiseases; // Directly use the array of IDs

    console.log(payload);  // For debugging purposes

    try {
      const response = await fetch(`http://localhost:8080/api/cropdiseasepesticide/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)  // Send the array directly as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);  // Handle the response as needed

      // Redirect to the PesticidesPage and pass data
      navigate(`/pesticides/${id}`, { state: { pesticides: result } });
    } catch (error) {
      console.error('Error submitting selected diseases:', error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {diseases.length > 0 ? (
        diseases.map((disease) => (
          <div
            key={disease.id}
            className="bg-zinc-800 shadow-2xl shadow-slate-700 rounded-lg p-6 mb-10"
          >
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(disease.id)}
                checked={selectedDiseases.includes(disease.id)}
              />
              <h2 className="text-3xl font-bold text-white">Disease : <span className='text-green-400'>{disease.name}</span></h2>
            </label>
            <p className="text-lg text-gray-300 mb-4 text-start pl-6">Type : <span className='text-green-400'>{disease.type}</span></p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading disease data...</p>
      )}
      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Selected Diseases
      </button>
    </div>
  );
};

export default DiseasesPage;

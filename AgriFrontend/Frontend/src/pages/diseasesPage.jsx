import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const DiseasesPage = () => {
  const { id } = useParams();
  const [diseases, setDiseases] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch diseases from API
    const token = Cookies.get('authToken');
    const fetchDiseases = async () => {
      try {
        const response = await fetch(`http://3.80.176.177:8080/api/cropdiseasepesticide/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log(data);
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
    const token = Cookies.get('authToken');
    const payload = selectedDiseases;
    console.log(payload);
    try {
      const response = await fetch(`http://3.80.176.177:8080/api/cropdiseasepesticide/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
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
            <label className="flex items-center mb-4 cursor-pointer">
              <div className="relative w-8 h-8 mr-4">
                <input
                  type="checkbox"
                  className="sr-only"
                  onChange={() => handleCheckboxChange(disease.id)}
                  checked={selectedDiseases.includes(disease.id)}
                />
                <div className={`absolute inset-0 bg-gray-600 border-2 border-gray-400 rounded-md transition-colors ${selectedDiseases.includes(disease.id) ? 'bg-blue-500 border-blue-600' : ''}`}></div>
                {selectedDiseases.includes(disease.id) && (
                  <svg className="absolute inset-0 w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white">Disease : <span className='text-green-400'>{disease.name}</span></h2>
            </label>
            <p className="text-lg text-gray-300 mb-4 text-start pl-12">Type : <span className='text-green-400'>{disease.type}</span></p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading disease data...</p>
      )}
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit Selected Diseases
      </button>
    </div>
  );
};

export default DiseasesPage;

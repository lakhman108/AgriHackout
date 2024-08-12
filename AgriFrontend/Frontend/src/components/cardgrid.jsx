import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Chakra from './ui/chakra'; // Ensure Chakra component is correctly imported

const CardGrid = () => {
  const [crops, setCrops] = useState([]);

  const fetchCrops = async () => {
    const token = Cookies.get('authToken');
    console.log(token);
    try {
      const response = await axios.get('http://3.80.176.177:8080/api/crops/all', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching crops:', error);
      throw error;
    }
  };

  useEffect(() => {
    const getCrops = async () => {
      const fetchedCrops = await fetchCrops();
      setCrops(fetchedCrops); // Set the fetched crops into state
    };

    getCrops();
  }, [crops]);

  return (
    <div className="container mx-auto p-8 min-h-screen">
      <h2 className="font-bold mb-8 text-center text-green-500 text-7xl">Crops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop, index) => (
          <Chakra key={index} id={crop.id} name={crop.name} imageUrl={crop.image} /> // Pass the name and imageUrl to Chakra
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

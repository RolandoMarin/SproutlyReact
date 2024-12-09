import React from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from '../services/dataSource';
import PlantList from './PlantList';

const Dashboard = ({ plantList }) => {
  const navigate = useNavigate();

  const handleDeletePlant = async (plantId) => {
    try {
      await dataSource.delete(`/plants/${plantId}`);
    } catch (error) {
      console.error("Error deleting plant:", error);
    }
  };

  const handleEditPlant = (plantId) => {
    navigate(`/edit/${plantId}`); 
  };

  const handleAddPlant = () => {
    navigate(`/add`);
  };

  return (
    <div className="container">
      <h1>Your Plants</h1>
      <button className="btn btn-success mb-3" onClick={handleAddPlant}>
        Add Plant
      </button>
      <PlantList
        plantList={plantList}
        onDeletePlant={handleDeletePlant}
        onEditPlant={handleEditPlant}
      />
    </div>
  );
};

export default Dashboard;

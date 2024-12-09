import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from '../services/dataSource';

const AddPlant = () => {
  const navigate = useNavigate();
  const [plant, setPlant] = useState({ user_id:1, name: '', last_watered: '', image_url: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlant({ ...plant, [name]: value });
  };

  const handleSave = async () => {
    try {
      await dataSource.post('/plants', plant);
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add New Plant</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="plantName" className="form-label">
            Plant Name
          </label>
          <input
            type="text"
            id="plantName"
            name="name"
            className="form-control"
            value={plant.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastWatered" className="form-label">
            Last Watered
          </label>
          <input
            type="date"
            id="lastWatered"
            name="last_watered"
            className="form-control"
            value={plant.last_watered}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="image_url"
            className="form-control"
            value={plant.image_url}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={handleSave}>
          Save Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;

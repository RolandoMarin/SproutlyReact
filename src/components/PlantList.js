import React from 'react';
import Card from './Card';

const PlantList = ({ plantList, onDeletePlant, onEditPlant  }) => {
  const plants = plantList.map((plant) => (
    <Card
      key={plant.id}
      plantId={plant.id}
      plantName={plant.name}
      lastWatered={plant.last_watered}
      imageURL={plant.image_url}
      onDeletePlant={onDeletePlant}
      onEditPlant={onEditPlant}
    />
  ));

  return <div className="row">{plants}</div>;
};

export default PlantList;

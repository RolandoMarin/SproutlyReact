import React from "react"
const Card = ({ plantId, plantName, lastWatered, imageURL, onDeletePlant, onEditPlant }) => {
    return (
        <div className="col-md-3" style={{ marginTop: "20px" }}>
            <div className="card" style={{ height: "100%" }}>
                <img src={imageURL} style={{ height: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{plantName}</h5>
                    <p className="card-text">{lastWatered}</p>
                    <button
                        onClick={() => onEditPlant(plantId)}
                        className="btn btn-primary"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDeletePlant(plantId)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card;

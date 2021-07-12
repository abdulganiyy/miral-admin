import React from "react";
import { Image } from "cloudinary-react";

const VehicleCard = ({ vehicle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
      }}
    >
      <p>{vehicle.name}</p>
      <Image
        cloudName="dequo8fxt"
        publicId={vehicle.photos[0]}
        width="100"
        crop="scale"
      />
      <p>{vehicle.maker}</p>
      <p>{vehicle.type}</p>
      <p>Manufactured {vehicle.yearBuilt}</p>
    </div>
  );
};

export default VehicleCard;

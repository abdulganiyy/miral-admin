import React from "react";
import { Image } from "cloudinary-react";
import DeletePropertyButton from "../../../Components/DeletePropertyButton";

const PropertyCard = ({ property }) => {
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
      <p>{property.name}</p>
      <Image
        cloudName="dequo8fxt"
        publicId={property.photos[0]}
        width="100"
        crop="scale"
      />
      <p>{`${property.city},${property.state},${property.country} `}</p>
      <p>{property.type}</p>
      {/* <p>posted by {property.user.username}</p> */}
      <p>Built {property.yearBuilt}</p>
      <DeletePropertyButton />
    </div>
  );
};

export default PropertyCard;

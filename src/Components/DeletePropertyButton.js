import React from "react";
import { deleteProperty } from "../redux/actions/propertyActions";

const deleteButton = ({ id }) => {
  return (
    <button
      style={{
        color: "red",
        backgroundColor: "transparent",
        display: "block",
        border: "none",
        padding: "1rem 2rem",
        cursor: "pointer",
      }}
      onClick={() => deleteProperty(id)}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default deleteButton;

import React, { useState } from "react";
import { connect } from "react-redux";
import { addProperty } from "../../redux/actions/propertyActions";
import "./AddProperty.css";

const AddProperty = ({ onAdd, loading }) => {
  const [values, setValues] = useState({
    name: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    price: "",
    rooms: "",
    baths: "",
    yearBuilt: "",
    condition: "",
    propertyType: "",
    description: "",
    photos: [],
    latitude: "",
    longitude: "",
  });

  const inputHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const fileInputHandler = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", (ev) => {
              resolve(ev.target.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then((images) => {
        setValues(
          {
            ...values,
            photos: images,
          },
          (error) => {
            console.error(error);
          }
        );
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    onAdd(values);
  };

  const { photos } = values;
  return (
    <div className="formWrapper">
      {photos.map((photo) => (
        <img src={photo} alt="chosen images" style={{ height: "50px" }} />
      ))}
      <form>
        <div className="form-control">
          <label>Property Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={values.city}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={values.state}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>postalcode</label>
          <input
            type="text"
            name="postalCode"
            value={values.postalCode}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={values.latitude}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={values.longitude}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Photos</label>
          <input
            type="file"
            name="photos"
            multiple
            onChange={fileInputHandler}
            value=""
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={values.price}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Number of Bathrooms</label>
          <input
            type="number"
            name="baths"
            value={values.baths}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Number of rooms</label>
          <input
            type="number"
            name="rooms"
            value={values.rooms}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Year Built</label>
          <input
            type="date"
            name="yearBuilt"
            value={values.yearBuilt}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Condition</label>
          <select
            name="condition"
            value={values.condition}
            onChange={inputHandler}
          >
            <option value="old">Old</option>
            <option value="new">New</option>
          </select>
        </div>
        <div className="form-control">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={values.propertyType}
            onChange={inputHandler}
          >
            <option value="bungalow">Bungalow</option>
            <option value="Duplex">Duplex</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={inputHandler}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.propertyReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (data) => dispatch(addProperty(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);

import React, { useState } from "react";
import { connect } from "react-redux";
import { addVehicle } from "../../redux/actions/vehicleActions";
import "../AddProperty/AddProperty.css";

const AddVehicle = ({ onAdd, loading }) => {
  const [values, setValues] = useState({
    name: "",
    user: "",
    photos: [],
    price: "",
    type: "",
    maker: "",
    interiorColor: "",
    exteriorColor: "",
    yearBuilt: "",
    condition: "",
    description: "",
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
          <label>Vehicle Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
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
          <label>Vehicle Type</label>
          <select name="type" value={values.type} onChange={inputHandler}>
            <option value="car">Car</option>
            <option value="yacht">Yacht</option>
            <option value="aeroplane">Aeroplane</option>
            <option value="helicopter">Helicopter</option>
            <option value="boat">Boat</option>
          </select>
        </div>
        <div className="form-control">
          <label>Maker</label>
          <input
            type="text"
            name="maker"
            value={values.maker}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Interior Color</label>
          <input
            type="text"
            name="interiorColor"
            value={values.interiorColor}
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label>Exterior Color</label>
          <input
            type="text"
            name="exteriorColor"
            value={values.exteriorColor}
            onChange={inputHandler}
          />
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
    loading: state.vehicleReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (data) => dispatch(addVehicle(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);

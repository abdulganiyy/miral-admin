import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVehicles } from "../../redux/actions/vehicleActions";
import VehicleCard from "./VehicleCard/VehicleCard";

function Vehicles() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicleReducer.vehicles);
  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  //   console.log(properties);

  return (
    <div>
      {vehicles ? (
        vehicles.map((vehicle) => (
          <Link key={vehicle._id} to={`/vehicles/${vehicle._id}`}>
            <VehicleCard vehicle={vehicle} />
          </Link>
        ))
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
}

export default Vehicles;

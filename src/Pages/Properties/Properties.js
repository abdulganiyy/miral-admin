import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProperties } from "../../redux/actions/propertyActions";
import PropertyCard from "./PropertyCard/PropertyCard";

function Properties() {
  // const [properties,setProperties] = useState();

  const dispatch = useDispatch();
  const properties = useSelector((state) => state.propertyReducer.properties);
  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  console.log(properties);

  return (
    <div>
      {properties ? (
        properties.map((property) => (
          <Link key={property._id} to={`/properties/${property._id}`}>
            <PropertyCard property={property} />
          </Link>
        ))
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     properties: state.propertyReducer.properties,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetch: () => dispatch(fetchProperties()),
//   };
// };

export default Properties;

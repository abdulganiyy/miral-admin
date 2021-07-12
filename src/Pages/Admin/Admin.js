import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AddProperty from "../AddProperty/AddProperty";
import Properties from "../Properties/Properties";
import Vehicles from "../Vehicles/Vehicles";
import AddVehicle from "../AddVehicle/AddVehicle";

import "./Admin.css";

function SubPages() {
  let { pagename } = useParams();

  if (pagename === "properties") {
    return (
      <>
        <Properties />
      </>
    );
  } else if (pagename === "vehicles") {
    return (
      <>
        <Vehicles />
      </>
    );
  } else if (pagename === "addvehicle") {
    return (
      <>
        <AddVehicle />
      </>
    );
  } else {
    return (
      <>
        <AddProperty />
      </>
    );
  }
}

function Admin() {
  const { path, url } = useRouteMatch();

  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <Link to={`${url}/addproperty`}>Add Property</Link>
          </li>
          <li>
            <Link to={`${url}/properties`}>Properties</Link>
          </li>
          <li>
            <Link to={`${url}/addvehicle`}>Add Vehicle</Link>
          </li>
          <li>
            <Link to={`${url}/vehicles`}>Vehicles</Link>
          </li>
        </ul>
      </div>
      <div className="mainbar">
        <Switch>
          <Route path={path} exact={true}>
            <p>Home page</p>
          </Route>
          <Route path={`${path}/:pagename`}>
            <SubPages />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Admin;

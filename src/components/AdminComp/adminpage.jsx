import React from "react";
import {NavLink} from "react-router-dom";

function Adminpage() {
  return (
    <React.Fragment>
      <h1>Admin Page</h1>
      <div className="container h1">
        click here to<NavLink to="/addproduct">Add New Product items </NavLink>
      </div>
    </React.Fragment>
  );
}

export default Adminpage;

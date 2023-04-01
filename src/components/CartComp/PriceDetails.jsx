import React from "react";

function PriceDetails(props) {
  return (
    <div className="row ms-3 bg-secondary">
      <h1 className="col text-danger">{props.pname}</h1>
      <h1 className="col">Rs/-{props.pprice}</h1>
      <hr />
    </div>
  );
}

export default PriceDetails;

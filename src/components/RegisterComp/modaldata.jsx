import React from "react";

function MOdalData(props) {
  return (
    <div className="row">
      <h1 className="col">{props.key}</h1>
      <h1 className="col">{props.value}</h1>
    </div>
  );
}

export default MOdalData;

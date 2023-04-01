import React from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

function Ordereditems({product, PriceCheck, PDDT, ODT, Name}) {
  //   let dest = product[0];
  let {pid, pimg, pname, pprice} = {...product};
  console.log("ordereditem is", pname);
  const path = `/products/${pname}`;
  const dateordered = new Date().toString().slice(4, 24);

  return (
    <>
      <div className="col m-2 p-2 shadowl-lg">
        <div className="card h-100">
          <img src={pimg} className="card-img-top h-50 w-auto" alt={pname} />

          <div className="card-body h5 text-dark ">
            {Name && <h5 className="card-title">Product Name-{pname}</h5>}
            {PriceCheck && (
              <p className="card-text shadow-sm text-danger">Price- {pprice}</p>
            )}
            {ODT && <p>Ordered Date--{dateordered}</p>}
            {PDDT && <p>Delivered Date--{"will be updated in a hour"}</p>}
            {/* <button className="btn btn-primary" onClick={() => remove(pname)}>
              Remove
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordereditems;


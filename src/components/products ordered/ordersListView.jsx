import React from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

function OrdereditemsList({product, PriceCheck, PDDT, ODT, Name}) {
  //   let dest = product[0];
  let {pid, pimg, pname, pprice} = {...product};
  console.log("ordereditem is", pname);
  const path = `/products/${pname}`;
  const dateordered = new Date().toString().slice(4, 24);

  return (
    <>
      <div className="row w-100 h2 m-2 shadow container-fluid bg-dark">
        <div className="col-sm-1  ">
          <img src={pimg} className="w-75 rounded" alt={pname} />
        </div>
        {Name && <div className="col-sm-2">{pname}</div>}
        {PriceCheck && <div className="col-sm-1">{pprice}</div>}
        {ODT && <div className="col-sm-2">{dateordered} </div>}
        {PDDT && <div className="col">Will be notified soon...</div>}
      </div>
    </>
  );
}

export default OrdereditemsList;

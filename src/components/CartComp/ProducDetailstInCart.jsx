import React from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

function CartProductView({product, remove}) {
  let dest = product[0];
  if (dest.pid) {
    var {pid, pimg, pname, pprice, pquantity} = {...dest};
  } else {
    var {PId, ProductName, price, url} = {...dest};
  }
  // let {pid, pimg, pname, pprice, pquantity} = {...dest};
  //   console.log(product[0], "destructe", pname);
  console.log("product page", dest);
  const path = `/products/${pname || ProductName}`;

  return (
    <>
      <div className="col text-dark">
        <div className="card h-100">
          <img
            src={pimg || url}
            className="card-img-top"
            alt={pname || ProductName}
          />

          <div className="card-body ">
            <h5 className="card-title">
              Product Name-
              <NavLink to={path}>{pname || ProductName}</NavLink>
            </h5>
            <p className="card-text shadow-sm text-danger">
              Price- {pprice || price}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => remove(pname || ProductName)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProductView;


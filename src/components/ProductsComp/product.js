import React, { useState } from "react";
import { NavLink, Prompt, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ElcCartAction as EC } from "../features/ElectronicsCart/ElecSlice";
import { deleteProducts as DC } from "../features/productslice";
// import Fade from "react-reveal";

const Product = (props) => {
  const [leave, setleave] = useState(true);
  let imgsize = {
    heigt: "400px",
    backgroundColor: "rgba(181, 174, 174, 0.1)",
    opacity: "1",
  };
  const path = `/products/${props.pname}`;
  const restockpath = `/updateproduct/${props.pname}`;
  const dispatch = useDispatch();
  const history = useHistory();
  const isloggedin = useSelector((state) => state.Auth.loggedin);
  const isAdminLoggedin = useSelector((state) => state.Auth.adminloggedin);

  const handelDelete = () => {
    if (window.confirm(`Are u sure to delete the product ${props.pname}`)) {
      dispatch(DC(props.pid));
    }
  };

  return (
    <>
      <div className="col">
        <div
          className="card h-100"
          style={{
            backgroundColor: "rgba(181, 174, 174, 1)",
            color: "black",
          }}
        >
          <img
            src={props.pimg}
            className="card-img-top"
            alt={props.pname}
            style={imgsize}
          />

          <div className="card-body ">
            <h5 className="card-title">
              Product Name-
              <NavLink to={isloggedin || isAdminLoggedin ? path : "/login"}>
                {props.pname}
              </NavLink>
            </h5>
            <p className="card-text">Price- {props.pprice}</p>
            {isloggedin && (
              <button
                className="btn btn-primary"
                onClick={() =>
                  isloggedin
                    ? dispatch(EC.AddToElcCart([props]))
                    : history.push("/login")
                }
              >
                Add To Cart
              </button>
            )}

            {isAdminLoggedin && (
              <>
                <button className=" btn-warning me-2">
                  <NavLink
                    to={restockpath}
                    className="btn btn-text text-white "
                  >
                    Update
                  </NavLink>
                </button>
                <button
                  className="btn btn-danger "
                  onClick={() => handelDelete()}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

/* <tr>
        <td>{props.pid}</td>
        <td></td>
        <td>{props.pquantity}</td>
        <td>{props.pprice}</td>
      </tr>

      
<Prompt
when={leave}
message={(location) =>
  `Are You Sure to Leave this Page?...${location.pathname}`
}
/> */

import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchproducts as fectchaction} from "../features/productslice";
import {ElcCartAction as EC} from "../features/ElectronicsCart/ElecSlice";

function ProductDetails(props) {
  const data = useSelector((state) => state.PL);
  // const isloggedin = useSelector((state) => state.Auth.loggedin);
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fectchaction());
  // }, [data]);

  const p = data.products.filter((d) => {
    if (d.ProductName === props.match.params.pName) {
      return d;
    }
  });
  console.log("entered Details page", props, "data", data, p[0]);
  return (
    <div className=" m-3 container text-primary shadow w-75">
      <div className="container row w-75 m-3">
        <div className="col-4"></div>
        {/* crousal effect */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide text-primary col"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={p[0].url}
                className="d-block w-100"
                alt={p[0].ProductName}
              />
            </div>
            <div className="carousel-item">
              <img
                src={p[0].url}
                className="d-block w-100"
                alt={p[0].ProductName}
              />
            </div>
            <div className="carousel-item">
              <img
                src={p[0].url}
                className="d-block w-100"
                alt={p[0].ProductName}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              // className="carousel-control-prev-icon "
              aria-hidden="true"
            >
              <i className="bi bi-caret-left-fill text-white display-6" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container card   w-50 ">
        <h4>
          Product Name-&nbsp;
          <span className="text-dark ms-2">{p[0].ProductName}</span>
        </h4>
        <ul className="list-group list-group-flush ">
          <h4 className="list-group-item col">Product Id-&nbsp; {p[0].id}</h4>

          <h4 className="list-group-item">ProductID-&nbsp;{p[0].PId}</h4>
          <h4 className="list-group-item">Price- &nbsp;{p[0].price}</h4>
          <h4 className="list-group-item">
            Quantity Available- &nbsp;{p[0].Quantity}
          </h4>

          <h4 className="list-group-item">Manufacturer- &nbsp;{p[0].Manu}</h4>
          <h4 className="list-group-item">Description- &nbsp;{p[0].desc}</h4>
        </ul>
      </div>
      <div className="container text-center">
        {/* <button
          className="btn-lg btn-primary m-3 "
          onClick={() => dispatch(EC.AddToElcCart([p[0]]))}
        >
          Add To Cart
        </button> */}

        <NavLink to="/products">
          <button className="btn-lg m-3 btn-primary float-start">
            Back to Products
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductDetails;


  /* <div className="m-3 p-3 text-muted">
<h1>It's a Product Details View</h1>
<br />
<p>
  <b className="text-danger">Product Details:</b>&nbsp;
  {props.match.params.pName}
</p>


</div> */


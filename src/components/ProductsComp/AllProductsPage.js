import React, {useEffect, useState} from "react";
import ProductList from "./productList";
// import productApi from "../data/productApi";
import {NavLink, Prompt} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchproducts as fectchaction} from "../features/productslice";
import {MostVisitedActions as MVA} from "../features/mostvisited/mostvisitedSlice";

function AllProductsPage(props) {
  const [productsnav, setNav] = useState("Electronics");
  const [search, setsearch] = useState("");
  const sidenav = {
    // background: "linear-gradient(to bottom ,#03001e,#7303c0,#ec38bc,#fdeff9)",
    background: "linear-gradient(to bottom ,#0575e6,#021b79,#ec38bc,#fdeff9)",
  };

  const data = useSelector((state) => state.PL);
  console.log("In products Listt", data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsnav == "Electronics") {
      dispatch(fectchaction("Electronics"));
      dispatch(MVA.IncElc());
    } else if (productsnav == "Fruits") {
      dispatch(fectchaction("Fruits"));
      dispatch(MVA.IncFruits());
    } else {
      dispatch(fectchaction("Grocerys"));
      dispatch(MVA.IncGrocerys());
    }
  }, [productsnav, data.del]);

  // useEffect(() => {
  //   productApi.getAllProducts((data) => setProduct(data));
  // }, []);

  return (
    <>
      <div className="row ">
        {/* <h1>product List-(using Functional Components and React-redux):</h1> */}
        <div
          className="col-sm-2 border border-secondary shadow-lg mt-5 p-4"
          style={sidenav}
        >
          <h1>Products Available</h1>
          <hr />
          <hr />
          <button
            className="btn  btn-text text-primary"
            onClick={() => setNav("Electronics")}
          >
            <h1> Electronics</h1>
          </button>
          <hr />
          <button
            className="btn  btn-text text-warning"
            onClick={() => setNav("Grocerys")}
          >
            <h1> Grocerys</h1>
          </button>
          <hr />
          <button
            className="btn  btn-text text-success"
            onClick={() => setNav("Fruits")}
          >
            <h1>Fruits</h1>
          </button>
          <hr />
          More Product will be Added Soon
        </div>
        <div className="col m-3 p-3">
          <div className="row">
            <h1 className="col-8">Currently viewing {productsnav} Page</h1>
            <div className="col ">
              <input
                type="search"
                placeholder="&#10053;Search Here"
                onChange={(e) => setsearch(e.target.value)}
                className="w-75"
              />
            </div>
          </div>
          <ProductList products={data.products} search={search} />
        </div>
      </div>
      <Prompt
        message={(location, action) =>
          location.pathname.startsWith("/products")
            ? `Are U sure to go to view the Details`
            : null
        }
      />
      {/* click here to
      <NavLink
        to="/addProducts"
        onClick={() => (document.title = "you are on ADD PRODUCTS Page")}
      >
        AddProducts
      </NavLink> */}
    </>
  );
}

export default AllProductsPage;
// {data.loading && (
//   <>
//     <div className="spinner-border text-primary text-center"></div>
//     <h3>Loading</h3>
//   </>
// )}

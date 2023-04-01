import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddProduct } from "./components/AddProduct/addproduct";
import AllProductsPage from "./components/ProductsComp/AllProductsPage";
import ProductDetails from "./components/ProductsComp/producDetailsPage";
import Links from "./components/NavLinksComp/NavLinks";
import React, { Suspense } from "react";

// import "./index.css";
import Chart from "./components/ChartsComp/Chart";
import Singup from "./components/LoginComponent/LoginPage";
import CreateAccount from "./components/RegisterComp/RegisterPage";
import Profile from "./components/ProfileComp/ProfilePage";
import ProductCart from "./components/CartComp/ProductsCart";

import { useSelector } from "react-redux";
import Adminpage from "./components/AdminComp/adminpage";
import UpdateProduct from "./components/AdminComp/updateproduct";

// lazy loading
const OrderedProducts = React.lazy(() =>
  import("./components/products ordered/orderDetails")
);
const About = () => {
  return (
    <div className="h-100">
      <h1 className="h-50 ">
        About: <br />
        &nbsp;&nbsp;&nbsp;This Application is About Online Shopping platform
        Named Frutopia Where All Home needs At One Place
      </h1>
      <br />
      <br />
      <div className="container display-6 mb-3 p-3">
        <h1 className="text-info">Additional features:-</h1>
        <p>
          <b>
            <i>
              Singed in as a <mark>registered user</mark>{" "}
            </i>
          </b>
          then custmization of fields available in Orders Page and can add your
          products to Cart and can see the no of products in navbar...
        </p>
        <br />
        <p>
          <b>
            <mark>Singed in as a Admin </mark>
          </b>
          then Admin can UPDATE DELETE, and ADD New Products in the store
        </p>
      </div>

      <h2 className="text-center bg-secondary">
        Welcome to our and Your need Frutopia Online Shopping Store
      </h2>
      <h3 className="text-center bg-primary">
        Have A Nice Shopping Day With Frutopia
      </h3>
      <h3 className="text-center bg-dark">
        **** Keep Shopping ****<b className="text-warning">&#9786;</b>
      </h3>
    </div>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Suspense
            fallback={
              <div className="d-flex justify-content-center h1">
                Your orders are on the way.....
                <span className="spinner-border text-warning h1"></span>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/products/:pName" component={ProductDetails} />
              <Route path="/products" component={AllProductsPage} />
              <Route path="/admin" component={Adminpage} />
              <Route path="/chart" component={Chart} />
              <Route path="/login" component={Singup} />
              <Route path="/createAccount" component={CreateAccount} />
              <Route path="/signout" component={Singup} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={ProductCart} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/updateproduct/:pname" component={UpdateProduct} />
              <Route path="/orders" component={OrderedProducts} />
              <Route path="**" component={() => <h1>page not found</h1>} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

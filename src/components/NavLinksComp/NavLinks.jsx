import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useDocTitle from "../utilities/customhookdoctitle";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions as AA } from "../features/Authentication/Authslice";
// import Zoom from "react-reveal/Zoom";

export default function Links() {
  const [Title, setTitle] = useState("React demo App");
  const navcolor = {
    // background: "linear-gradient(to right, #780206 ,#061161 )",
    // background: "linear-gradient(to left ,#061161 2%,#c21500 100%)",
    background: "linear-gradient(to right ,#0575e6 ,#021b79 )",
  };
  useDocTitle(Title);
  const NoOfProductsInCart = useSelector(
    (state) => state.ElcCart.NoOfElcProducts
  );
  const isLoggedin = useSelector((state) => state.Auth.loggedin);
  const isAdminLoggedin = useSelector((state) => state.Auth.adminloggedin);

  const dispatch = useDispatch();

  return (
    <>
      <nav
        style={navcolor}
        className="navbar navbar-expand-sm fixed bg-primary"
      >
        <div className="container-fluid">
          <h5 className="">
            <img src="./frutopiatransparent.png" style={{ width: "5rem" }} />
          </h5>
          <button
            className="navbar-toggler  text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <h2> &#8942;</h2>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          
            <div className="collapse navbar-collapse " id="mynavbar">
              <ul className="navbar-nav me-auto  ">
                <NavLink
                  to="/"
                  className="  nav-link text-white  h3"
                  onClick={() => setTitle("About Page")}
                >
                  <i className="bi bi-house-door-fill text-danger"></i>
                  About
                </NavLink>

                <li className=" nav-item">
                  <NavLink
                    to="/products"
                    className="nav-link text-white h3"
                    onClick={() => setTitle("Main Products Page")}
                  >
                    <i className="bi bi-collection-fill">Products</i>
                  </NavLink>
                </li>

                <li className=" nav-item ">
                  <NavLink
                    to="/chart"
                    className="nav-link text-white h3 "
                    onClick={() => setTitle("Chart")}
                  >
                    <i className="bi bi-pie-chart-fill text-warning"></i>Chart
                  </NavLink>
                </li>
                {!isAdminLoggedin && !isLoggedin ? (
                  <li className=" nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-white h3 "
                      onClick={() => setTitle("Login")}
                    >
                      <i className="bi bi-box-arrow-in-right">Login</i>
                    </NavLink>
                  </li>
                ) : null}

                {!isLoggedin && !isAdminLoggedin ? (
                  <li className=" nav-item">
                    <NavLink
                      to="/createAccount"
                      className="nav-link text-white h3 "
                      onClick={() => setTitle("Register")}
                    >
                      <i className="bi bi-blockquote-right "></i>
                      Create Account
                    </NavLink>
                  </li>
                ) : null}
                {isLoggedin || isAdminLoggedin ? (
                  <li className=" nav-item ">
                    <NavLink
                      to="/login"
                      className="nav-link text-white h3 "
                      onClick={() => {
                        setTitle("Logout");

                        dispatch(AA.Login(false));
                        dispatch(AA.Admin(false));
                      }}
                    >
                      <i className="bi bi-box-arrow-right">Singout</i>
                    </NavLink>
                  </li>
                ) : null}
                {isLoggedin || isAdminLoggedin ? (
                  <li className=" nav-item">
                    <NavLink
                      to="/profile"
                      className="nav-link text-white h3"
                      onClick={() => setTitle("Profile")}
                    >
                      <i className="bi bi-person text-warning"></i>Profile
                    </NavLink>
                  </li>
                ) : null}

                {isLoggedin && (
                  <li className=" nav-item">
                    <NavLink
                      to="/orders"
                      className="nav-link text-white h3"
                      onClick={() => setTitle("ORdered Products")}
                    >
                      <i className="bi bi-box">Yours Orders</i>
                    </NavLink>
                  </li>
                )}

                <li className=" nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link text-white h3"
                    onClick={() => setTitle("Logout")}
                  >
                    <i className="bi-cart4 text-warning" />
                    Cart
                    <span className="badge bg-danger">
                      {NoOfProductsInCart.length}
                    </span>
                  </NavLink>
                </li>
                {isAdminLoggedin && (
                  <li className=" nav-item">
                    <NavLink
                      to="/admin"
                      className="nav-link text-white h3 "
                      onClick={() => setTitle("Admin")}
                    >
                      <i className="bi bi-person-circle text-warning"></i>Admin
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
         
        </div>
      </nav>
    </>
  );
}

// It's previous nav links page
// export default class Links extends Component {
//   state = {active: true};
//   style = {};
//   render() {
//     return (
//       <nav>
//         <NavLink
//           exact
//           activeClassName="active"
//           to="/"
//           onClick={() => {
//             this.setState({active: true});
//             document.title = "you are on About Page";
//           }}
//           className={this.state.active == true ? "text-danger" : undefined}
//         >
//           About
//         </NavLink>
//         <span className="mx-2" />
//         <NavLink
//           activeClassName="active"
//           to="/products"
//           onClick={() => {
//             this.setState({active: false});
//             document.title = "you are on Product Page";
//           }}
//           className={this.state.active == false ? "text-danger" : undefined}
//         >
//           Products
//         </NavLink>
//       </nav>
//     );
//   }
// }

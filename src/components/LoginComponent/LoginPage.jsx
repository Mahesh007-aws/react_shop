import React, { useEffect, useState } from "react";
import "./loginpage.css";
import { fetchproducts as FA } from "../features/productslice";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions as AA } from "../features/Authentication/Authslice";
import { useHistory, NavLink } from "react-router-dom";
// import Fade from "react-reveal";

function Singup() {
  // const width = window.screen.width < 576 ? {width: "auto"} : {width: "30%"};
  // console.log(window.screen.width, width);
  const [check, setcheck] = React.useState(true);
  const [user, setuser] = React.useState(false);
  useEffect(() => {
    if (user) {
      dispatch(FA("register"));
      console.log("getting user data");
    } else {
      dispatch(FA("admin"));
      console.log("fetching admin data");
    }
  }, [user]);

  const [Invalid, setInvalid] = useState(false);
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.PL.products);
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const logindetails = Object.fromEntries(formData);
    console.log("e", e, "formData", formData, "obj", logindetails);
    const userdetails = userdata.filter((data) => {
      let username = data.Fname + data.Lname;
      if (
        logindetails.username == username &&
        logindetails.password == data.Password
      ) {
        dispatch(AA.UserData(data));
        user ? dispatch(AA.Login(true)) : dispatch(AA.Admin(true));
        return data;
      }
    });
    const v = userdetails.length ? history.push("/products") : setInvalid(true);
    console.log("logindetails", userdetails);
  };
  console.log(check);
  return (
    <>
      <div className="backg">
        <div className="h-25"></div>
        <form
          onSubmit={submitForm}
          className={check ? "needs-validation" : "was-validated"}
        >
          <div className="container  mx-auto  justifycenter gray">
            <h3 className="text-center h1 my-3  Shadow">Login </h3>
            <div className="form-floating row mb-3 mt-3">
              <input
                placeholder="enter your username"
                id="username"
                type="text"
                className="form-control"
                name="username"
                required
                minLength={5}
              />

              <div className="invalid-feedback">Enter valid Username</div>
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating row mb-3 mt-3">
              <input
                placeholder="enter your password"
                id="password"
                type="password"
                className="form-control"
                name="password"
                required
                minLength={8}
              />
              <div className="invalid-feedback">Enter valid Password</div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="my-3 row form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                name="remember"
                onChange={() => setuser(!user)}
              />
              <label className="form-check-label">
                I agree the Terms and Conditions
                <b className="text-danger">(Only if USER)</b>
              </label>
              <div className="invalid-feedback">
                plz agree the terms and conditions before submitting
              </div>
            </div>
            {Invalid && (
              <h5 className="text-danger">
                **Enter Valid UserName and Password**
              </h5>
            )}

            <NavLink to="/createAccount" className="nav-link text-warning h4">
              <u>Click here to Create Account</u>
            </NavLink>
            <div className="text-center ">
              <button
                type="submit"
                className="btn btn-lg my-3 p-3 h1 btn-primary"
                onClick={() => setcheck(false)}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Singup;

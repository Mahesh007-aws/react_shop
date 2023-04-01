import React, { useRef, useState } from "react";
import "./register.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MOdalData from "./modaldata";
import { updateProducts as UA } from "../features/productslice";
import { useDispatch } from "react-redux";
import { NavLink, useHistory, Prompt } from "react-router-dom";
import useDocTitle from "../utilities/customhookdoctitle";

// import Fade from "react-reveal";

const initialValues = {
  Fname: "",
  Lname: "",
  Email: "",
  Phone: "",
  Address: "",
  Password: "",
  CPassword: "",
};
const validationSchema = Yup.object({
  Fname: Yup.string()
    .min(3, "Must be atleast 8 Characters")
    .required("* Required,Enter your Name"),
  Lname: Yup.string()
    .min(8, "Must be atleast 8 Characters")
    .required("* Required,Enter your Name"),
  Email: Yup.string()
    .email("* Invalid Email Address")
    .required("* Required,Enter your Email"),
  // phone: Yup.required("Enter 10 digits Mobile Number"),
  //   .min(10, "Must have 10 digits"),

  Address: Yup.string().required("* Enter Address with Zip Code"),
  Password: Yup.string()
    .required("* Enter your Password")
    .min(8, "Must be 8 characters Long"),
  CPassword: Yup.string().oneOf(
    [Yup.ref("Password"), null],
    "Passwords must match"
  ),
});

const CreateAccount = () => {
  useDocTitle("REgistER");
  const phoneref = useRef();
  const [Userdata, setUserdata] = useState();
  const dispatch = useDispatch();
  let newdata;
  let path;
  let history = useHistory();

  const handlepost = () => {
    dispatch(UA({ newdata: Userdata, path: "register" }));
    setTimeout(() => history.push("/login"), 2000);
  };

  return (
    <>
      <h1>Create u r Account Here</h1>

      {/* class="was-validated" */}
      <div className="container mx-auto w-75 text-center  glass">
        <h2 className="text-center">Register Form</h2>
        {/* <!-- fname and LastName  */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setUserdata(values);
            setSubmitting(false);
          }}
        >
          {(formik) => {
            // console.log("formikprops", formik);

            return (
              <Form className="needs-validation">
                <div className="row ">
                  <div className="form-floating mb-3 mt-3 col-sm shadow ">
                    <Field
                      type="text"
                      className="form-control ib bd"
                      placeholder="Enter first username"
                      name="Fname"
                    />
                    <label htmlFor="Fname">Firstname:</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="Fname" />
                    </h5>
                  </div>

                  <div className="form-floating mb-3 mt-3 col-sm shadow">
                    <Field
                      type="text"
                      className="form-control ib bd "
                      placeholder="Enter Lastname"
                      name="Lname"
                    />
                    <label htmlFor="Lname">LastName:</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="Lname" />
                    </h5>
                  </div>
                </div>

                {/* <!-- email and phone no --> */}
                <div className="row ">
                  <div className="form-floating mb-3 mt-3 col-sm-6">
                    <Field
                      type="email"
                      className="form-control ib bd"
                      placeholder="Enter username"
                      name="Email"
                    />
                    <label htmlFor="Email">Email Address</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="Email" />
                    </h5>
                  </div>

                  <div className="form-floating mb-3 mt-3 col-sm-6">
                    <Field
                      type="tel"
                      className="form-control ib bd"
                      placeholder="Enter username"
                      name="Phone"
                      pattern="[0-9]{1}[0-9]{9,}"
                      required
                      maxLength={10}
                      title="enter 10 digits mobile number"
                    />
                    <label htmlFor="ph">Contact No</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="Phone" />
                    </h5>
                  </div>
                </div>
                {/* <!-- addressdetails --> */}
                <div className="form-floating ">
                  <Field
                    className="form-control ib bd"
                    name="Address"
                    placeholder="Comment goes here"
                    as="textarea"
                  />
                  <label htmlFor="comment">Address Details </label>
                  <h5 className="text-danger">
                    <ErrorMessage name="Address" />
                  </h5>
                </div>

                {/* <!-- password and confirm password --> */}

                <div className="row my-3">
                  <div className="form-floating  col-sm-6">
                    <Field
                      type="password"
                      className="form-control ib bd"
                      placeholder="Enter password"
                      name="Password"
                    />
                    <label htmlFor="Password">Password:</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="Password" />
                    </h5>
                  </div>

                  <div className="form-floating  col-sm-6">
                    <Field
                      type="password"
                      className="form-control ib bd"
                      placeholder="Re-Enter password"
                      name="CPassword"
                    />
                    <label htmlFor="cpwd">Confirm Password:</label>
                    <h5 className="text-danger">
                      <ErrorMessage name="CPassword" />
                    </h5>
                  </div>
                </div>
                <br />
                <Prompt
                  when={formik.dirty}
                  message="Form Data Will be Lost Are U Sure Leaving?"
                />

                <button
                  type="submit"
                  className="btn-lg btn-primary mx-3"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

      {/* modal */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}

            <div className="modal-header text-center">
              <h1 className="modal-title text-danger modal-dialog-centered">
                Preview Pane
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body text-primary my-3 row ">
              {Userdata && (
                <>
                  <h5 className="col">
                    UserName&#10146;{Userdata.Fname}
                    {Userdata.Lname}
                  </h5>
                  <hr />
                  <h5 className="col">Email&#10146;{Userdata.Email}</h5>
                  <hr />
                  <h5 className="col">Mobile NO&#10146;{Userdata.Phone}</h5>
                  <hr />
                  <h5 className="col">Password&#10146;{Userdata.Password}</h5>
                  <hr />
                  <h5 className="col">Address&#10146;{Userdata.Address}</h5>
                  <hr />
                </>
              )}

              <pre className="text-danger displat-1 my-4">
                I here by Declare That the above information is true as per my
                knowledge then click on Ok
              </pre>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                EDIT
              </button>
              <button
                type="button"
                className="btn btn-danger btn-text"
                data-bs-dismiss="modal"
                onClick={handlepost}
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Button trigger modal -->
       */}
    </>
  );
};

export default CreateAccount;

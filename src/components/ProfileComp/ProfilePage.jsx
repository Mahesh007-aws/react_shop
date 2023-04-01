import React from "react";
import {useSelector} from "react-redux";

const Profile = () => {
  const userdata = useSelector((state) => state.Auth.userdata);
  return (
    <>
      <div className="container bg-dark-50 shadow-lg mt-5">
        <h1 className="text-center text-primary h1 "> Profile Details Page</h1>
        <div
          className="row text-center mb-2 "
          style={{background: " linear-gradient(to top ,#061161,#c21500)"}}
        >
          <i
            className="bi bi-person-circle"
            style={{color: "#fff", fontSize: "10rem"}}
          ></i>
        </div>
        <div className="row mb-2 bg-secondary " style={{color: "#fc4a1a"}}>
          <h3 className="col">
            Username-{userdata.Fname}
            {userdata.Lname}
          </h3>
          <h3 className="col">Email -{userdata.Email}</h3>
        </div>
        <div className="row mb-2 text-white">
          <h3 className="col">Mobile No -{userdata.Phone}</h3>
          <h3 className="col">Password -{userdata.Password}</h3>
        </div>
        <div className="row mb-2" style={{color: "#24fe41"}}>
          <h3 className="col">Address-{userdata.Address}</h3>
        </div>
      </div>
    </>
  );
};
//

export default Profile;

import "./viewDonations.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function viewReservation() {
  return (
    <div className="viewReservationContainor">
      <div className="leftViewReservationContainor">
        <SideBar />
      </div>
      <div className="rightViewPurchaisesContainor">
        <Welcome />
        <div className="viewPurchaisesRightContainor">
          <h6>
            <b>View Book Donations</b>
          </h6>
          <div>
            <div className="divViewPurchaisesBookFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookDonation">
                    <Button variant="success">
                      Add Donation
                    </Button>{" "}
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default viewReservation;

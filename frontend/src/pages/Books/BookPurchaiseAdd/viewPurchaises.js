import "./viewPurchaises.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function viewPurchaises() {
  return (
    <div className="viewPurchaisesContainor">
      <div className="leftViewPurchaisesContainor">
        <SideBar />
      </div>
      <div className="rightViewPurchaisesContainor">
        <Welcome />
        <div className="viewPurchaisesRightContainor">
          <h6>
            <b>View Book Purchases</b>
          </h6>
          <div>
            <div className="divViewPurchaisesBookFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookReturn">
                    <Button variant="success">
                      Add Purchase
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
export default viewPurchaises;

import "./viewBookDamages.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function viewBookDamages() {
  return (
    <div className="viewBookDamagesContainor">
      <div className="leftViewBookDamagesContainor">
        <SideBar />
      </div>
      <div className="rightViewBookDamagesContainor">
        <Welcome />
        <div className="viewBookDamagesRightContainor">
          <h6>
            <b>View Book Damages</b>
          </h6>
          <div>
            <div className="divViewBookDamagesFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookDamage">
                    <Button variant="success">
                      Add Damage
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
export default viewBookDamages;

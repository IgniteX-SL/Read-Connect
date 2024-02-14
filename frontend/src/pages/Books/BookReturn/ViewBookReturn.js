import "./viewReturns.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function ViewReturns() {
  return (
    <div className="viewReturnsContainor">
      <div className="leftViewReturnContainor">
        <SideBar />
      </div>
      <div className="rightViewReturnContainor">
        <Welcome />
        <div className="viewReturnRightContainor">
          <h6>
            <b>View Book Returnings</b>
          </h6>
          <div>
            <div className="divViewReturnBookFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookReturn">
                    <Button variant="success">
                      Add Returning
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
export default ViewReturns;

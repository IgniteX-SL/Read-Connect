import "./viewBorrowals.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function ViewBorrowals() {
  return (
    <div className="viewBorrowalsContainor">
      <div className="leftViewBorrowContainor">
        <SideBar />
      </div>
      <div className="rightViewBorrowContainor">
        <Welcome />
        <div className="viewBorrowalRightContainor">
          <h6>
            <b>View Book Borrowals</b>
          </h6>
          <div>
            <div className="divViewBorrowBookFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookBorrow">
                    <Button variant="success">
                      Add Borrowal
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
export default ViewBorrowals;

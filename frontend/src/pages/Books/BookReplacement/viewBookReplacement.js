import "./viewBookReplacement.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function viewBookReplacement() {
  return (
    <div className="viewBookReplacementContainor">
      <div className="leftviewBookReplacementContainor">
        <SideBar />
      </div>
      <div className="rightviewBookReplacementContainor">
        <Welcome />
        <div className="viewBookReplacementRightContainor">
          <h6>
            <b>View Book Replacement</b>
          </h6>
          <div>
            <div className="divviewBookReplacementBookFormContainor">
            <div className="buttonDiv">
                  <Link to="/bookReplacement">
                    <Button variant="success">
                      Add Book Replacement
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
export default viewBookReplacement;

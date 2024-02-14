import "./viewBooks.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function viewBooks() {
  return (
    <div className="viewBooksContainor">
      <div className="leftViewBooksContainor">
        <SideBar />
      </div>
      <div className="rightViewBooksContainor">
        <Welcome />
        <div className="viewBooksRightContainor">
          <h6>
            <b>View Books</b>
          </h6>
          <div>
            <div className="divViewBooksFormContainor">
            <div className="buttonDiv">
                  <Link to="/booksAdd">
                    <Button variant="success">
                      Add Book
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
export default viewBooks;

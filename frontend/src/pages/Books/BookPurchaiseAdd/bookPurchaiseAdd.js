import "./bookPurchaiseAdd.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function BookPurchaiseAdd() {
  const [bookID, setBookID] = useState("");
  const [bookName, setBookName] = useState("");
  const [dateOfPurchaseAdd, setDateOfPuchaiseAdd] = useState("");
  const [price, setPrice] = useState("");

  function addButton() {}
  function viewButton() {}
  return (
    <div className="bookPurchaiseContainor">
      <div className="leftPurchaiseContainor">
        <SideBar />
      </div>
      <div className="rightPurchaiseContainor">
        <Welcome />
        <div className="bookPurchaiseRightContainor">
          <h6>
            <b>Add Book Purchaise</b>
          </h6>
          <div>
            <div className="divPuchaiseFormContainor">
              <Form>
                <Row className="mb-3">
                  <Form.Label>Book ID</Form.Label>
                  <Form.Control
                    id="memberIDInput"
                    onChange={(e) => setBookID(e.target.value)}
                    value={bookID}
                  />
                </Row>
                <Row className="mb-3">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control
                    id="memberIDInput"
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                  />
                </Row>
                <Row className="mb-3" id="dateContainor">
                  <Form.Label>Date of Purchaise Add</Form.Label>
                  <Form.Control
                    type="date"
                    name="arrivaldate"
                    id="dateOfPuchaiseAddInput"
                    value={dateOfPurchaseAdd}
                    onChange={(e) => setDateOfPuchaiseAdd(e.target.value)}
                  />
                </Row>
                <br />
                <Row className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    id="memberIDInput"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <br />
                <br />
                <div className="buttonDiv">
                  <Link to="/bookManagement">
                    <Button variant="success" onClick={viewButton}>
                      Book Management
                    </Button>{" "}
                  </Link>
                  <Button variant="success" onClick={addButton}>
                    Add Purchaise
                  </Button>{" "}
                  <Link to="/viewPurchaises">
                    <Button variant="success" onClick={viewButton}>
                    View Purchaises
                    </Button>{" "}
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPurchaiseAdd;

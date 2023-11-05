import "./bookBorrow.css";
import SideBar from "../../../../components/SideBar/Sidebar";
import Welcome from "../../../../components/Welcome/Welcome";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function BookReturn() {
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [dateOfBorrowal, setDateOfBorrowal] = useState("");
    const [dateOfReturnToBe, setDateOfReturnToBe] = useState("");
    const [borrowalStaffID, setBorrowalStaffID] = useState("");

    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookBorrowContainor">
            <div className="leftContainor">
                <SideBar />
            </div>
            <div className="rightContainor">
                <Welcome />
                <div className="bookBorrowRightContainor">
                    <h6><b>Return Books</b></h6>
                    <div>
                        <div className="divFormContainor">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Label>Member ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setMemberID(e.target.value)} value={memberID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Member Name</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setMemberName(e.target.value)} value={memberName} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Book ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setBookID(e.target.value)} value={bookID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setBookName(e.target.value)} value={bookName} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Borrowal</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="arrivaldate"
                                            id='dateOfArrivalInput'
                                            value={dateOfBorrowal}
                                            onChange={(e) => setDateOfBorrowal(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Date of Return To Be</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="arrivaldate"
                                            id='dateOfArrivalInput'
                                            value={dateOfReturnToBe}
                                            onChange={(e) => setDateOfReturnToBe(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <div className="buttonDiv">
                                    <Button variant="success" onClick={addButton}>Add Return</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Returns</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReturn;
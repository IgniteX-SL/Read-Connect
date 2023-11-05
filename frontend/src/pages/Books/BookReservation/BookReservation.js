import "./bookReservation.css";
import SideBar from "../../../components/SideBar/Sidebar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function BookReservation() {
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [dateOfBookReservationStart, setDateOfReservationStart] = useState("");
    const [dateOfBookReservationEnd, setDateOfReservationEnd] = useState("");
    const [reservationStaffID, setReservationStaffID] = useState("");


    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookReservationContainor">
            <div className="leftReservationContainor">
                <SideBar />
            </div>
            <div className="rightReservationContainor">
                <Welcome />
                <div className="bookReservationRightContainor">
                    <h6><b>Books Reservations</b></h6>
                    <div>
                        <div className="divReservationBookFormContainor">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Label>Member ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setMemberID(e.target.value)} value={memberID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Member Name</Form.Label>
                                    <Form.Control id='memberNameInput' onChange={(e) => setMemberName(e.target.value)} value={memberName} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Book ID</Form.Label>
                                    <Form.Control id='bookIDInput' onChange={(e) => setBookID(e.target.value)} value={bookID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control id='bookNameInput' onChange={(e) => setBookName(e.target.value)} value={bookName} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Reservation Starting</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="bookReservationStartDate"
                                            id='dateOfBookReservationStartInput'
                                            value={dateOfBookReservationStart}
                                            onChange={(e) => setDateOfReservationStart(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Date of Reservation Ending</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="bookReservationEndDate"
                                            id='dateOfBookReservationEndInput'
                                            value={dateOfBookReservationEnd}
                                            onChange={(e) => setDateOfReservationEnd(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Reservation</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Reservations</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReservation;

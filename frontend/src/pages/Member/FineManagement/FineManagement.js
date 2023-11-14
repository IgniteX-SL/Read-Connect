import "./fineManagement.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function FineManagement() {
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [borrowalID, setBorrowalID] = useState("");
    const [returnID, setReturnID] = useState("");
    const [fineAmount, setFineAmount] = useState("");
    const [paidAmount, setPaidAmount] = useState("");
    const [dateOfPaid, setDateOfPaid] = useState("");
    const [dateOfDue, setDateOfDue] = useState("");
    

    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="fineManagementContainor">
            <div className="leftfineManagementContainor">
                <SideBar />
            </div>
            <div className="rightfineManagementContainor">
                <Welcome />
                <div className="fineManagementRightContainor">
                    <h6><b>Pay Fines</b></h6>
                    <div>
                        <div className="divfineManagementFormContainor">
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
                                <Row className="mb-3">
                                    <Form.Label>Borrowal ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setBorrowalID(e.target.value)} value={borrowalID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Return ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setReturnID(e.target.value)} value={returnID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Fine Amount</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setFineAmount(e.target.value)} value={fineAmount} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Paid Amount</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setPaidAmount(e.target.value)} value={paidAmount} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Borrowal ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setBorrowalID(e.target.value)} value={borrowalID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Return ID</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setReturnID(e.target.value)} value={returnID} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Due</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dueDate"
                                            id='dateOfDueInput'
                                            value={dateOfDue}
                                            onChange={(e) => setDateOfDue(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Date of Paid</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="paidDate"
                                            id='dateOfArrivalInput'
                                            value={dateOfPaid}
                                            onChange={(e) => setDateOfPaid(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Paid Fine</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Paid Fines</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FineManagement;

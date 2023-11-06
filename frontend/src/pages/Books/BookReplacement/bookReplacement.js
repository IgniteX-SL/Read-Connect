import "./bookReplacement.css";
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


function BookReplacement() {
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [dateOfReplacement, setDateOfReplacement] = useState("");
    const [replacementStaffID, setReplacementStaffID] = useState("");
    const [replacementReason, setReplacementReason] = useState("");
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookReplacementContainor">
            <div className="leftReplacementContainor">
                <SideBar />
            </div>
            <div className="rightReplacementContainor">
                <Welcome />
                <div className="bookReplacementRightContainor">
                    <h6><b>Book Replacement</b></h6>
                    <div>
                        <div className="divReplacementBookFormContainor">
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
                                    <Form.Label>Replacement Reason</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setReplacementReason(e.target.value)} value={replacementReason} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Replacement</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="replacementdate"
                                            id='dateOfReplacementInput'
                                            value={dateOfReplacement}
                                            onChange={(e) => setDateOfReplacement(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Replacement</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Replacements</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookReplacement;

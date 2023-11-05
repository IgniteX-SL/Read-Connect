import "./bookDamages.css";
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


function BookDamages() {
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [damageID, setDamageID] = useState("");
    const [dateOfBookDamage, setDateOfDamage] = useState("");
    const [damageStaffID, setDamageStaffID] = useState("");

    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookDamageContainor">
            <div className="leftDamageContainor">
                <SideBar />
            </div>
            <div className="rightDamageContainor">
                <Welcome />
                <div className="bookDamageRightContainor">
                    <h6><b>Books Damage Report</b></h6>
                    <div>
                        <div className="divDamageBookFormContainor">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Label>Book ID</Form.Label>
                                    <Form.Control id='bookIDInput' onChange={(e) => setBookID(e.target.value)} value={bookID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control id='bookNameInput' onChange={(e) => setBookName(e.target.value)} value={bookName} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Member ID</Form.Label>
                                    <Form.Control id='damageMemberIDInput' onChange={(e) => setMemberID(e.target.value)} value={memberID} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Member Name</Form.Label>
                                    <Form.Control id='damageMemberNameInput' onChange={(e) => setMemberName(e.target.value)} value={memberName} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Damage ID</Form.Label>
                                    <Form.Control id='damageIDInput' onChange={(e) => setDamageID(e.target.value)} value={damageID} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Damage Report</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="bookDamageDate"
                                            id='dateOfBookDamageInput'
                                            value={dateOfBookDamage}
                                            onChange={(e) => setDateOfDamage(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Damage</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Damages</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDamages;

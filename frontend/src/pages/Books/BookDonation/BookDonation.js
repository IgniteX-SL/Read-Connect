import "./bookDonation.css";
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


function BookDonation() {
    const [bookID, setBookID] = useState("");
    const [bookName, setBookName] = useState("");
    const [donatorName, setDonatorName] = useState("");
    const [donatorEmail, setDonatorEmail] = useState("");
    const [price, setPrice] = useState("");
    const [dateOfBookDonation, setDateOfDonation] = useState("");
    const [donationStaffID, setDonationStaffID] = useState("");

    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookDonationContainor">
            <div className="leftDonationContainor">
                <SideBar />
            </div>
            <div className="rightDonationContainor">
                <Welcome />
                <div className="bookDonationRightContainor">
                    <h6><b>Books Donations</b></h6>
                    <div>
                        <div className="divDonationBookFormContainor">
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
                                    <Form.Label>Donator Name</Form.Label>
                                    <Form.Control id='donatorNameInput' onChange={(e) => setDonatorName(e.target.value)} value={donatorName} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Donator Email</Form.Label>
                                    <Form.Control id='donatorEmailInput' onChange={(e) => setDonatorEmail(e.target.value)} value={donatorEmail} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control id='priceInput' onChange={(e) => setPrice(e.target.value)} value={price} />
                                </Row>
                                <Row className="mb-3" id="dateContainor">
                                    <Col>
                                        <Form.Label>Date of Book Donation</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="bookDonationDate"
                                            id='dateOfBookDonationInput'
                                            value={dateOfBookDonation}
                                            onChange={(e) => setDateOfDonation(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Donation</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Donations</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDonation;

import "./registerMember.css";
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


function RegisterMember() {
    const [memberID, setMemberID] = useState("");
    const [memberName, setMemberName] = useState("");
    const [registrationNumber, setMemberRegistrationNumber] = useState("");
    const [nic, setNIC] = useState("");
    const [grade, setGrade] = useState("");
    const [classRoom, setClassRoom] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="memberRegisterContainor">
            <div className="leftmemberRegisterContainor">
                <SideBar />
            </div>
            <div className="rightmemberRegisterContainor">
                <Welcome />
                <div className="memberRegisterRightContainor">
                    <h6><b>Register Members</b></h6>
                    <div>
                        <div className="divmemberRegisterFormContainor">
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
                                    <Form.Label>Registration Number</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setMemberRegistrationNumber(e.target.value)} value={registrationNumber} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>NIC</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setNIC(e.target.value)} value={nic} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Grade</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setGrade(e.target.value)} value={grade} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Class </Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setClassRoom(e.target.value)} value={classRoom} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setAge(e.target.value)} value={age} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Whatsapp Number</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setWhatsappNumber(e.target.value)} value={whatsappNumber} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setAddress(e.target.value)} value={address} />
                                </Row>
                                <Row className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id='memberIDInput' onChange={(e) => setEmail(e.target.value)} value={email} />
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
                                    <Button variant="success" onClick={addButton}>Add Member</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Members</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterMember;

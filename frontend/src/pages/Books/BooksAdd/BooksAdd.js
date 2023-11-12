import "./booksAdd.css";
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


function BooksAdd() {
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [additionalContributors, setAdditionalContributors] = useState("");
    const [publisherName, setPublisherName] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [price, setPrice] = useState("");
    const [noOfPages, setNoOfPages] = useState("");
    const [language, setLanguage] = useState("");
    const [edition, setEdition] = useState("");
    const [isbn, setISBN] = useState("");
    const [genresAndCategories, setGenresAndCategories] = useState("");
    const [tagsAndKeywords, setTagsAndKeywords] = useState("");
    const [accessionNumber, setAccessionNumber] = useState("");
    const [supplyID, setSupplyID] = useState("");
    const [donationID, setDonationID] = useState("");
    const [replacementID, setReplacementID] = useState("");
    const [governmentGrantsID, setGovernmentGrantsID] = useState("");
    const [purchasingID, setPurchasingID] = useState("");
    const [removalID, setremovalID] = useState("");
    const [noteID, setNoteID] = useState("");
    const [cupboardNo, setcupboardNo] = useState("");
    const [rowNumber, setrowNumber] = useState("");
    const [condition, setcondition] = useState("");
    const [damageID, setDamageID] = useState("");
    const [reservationID, setreservationID] = useState("");
    const [dateOfEntry, setDateOfEntry] = useState("");


    const [searchResult, setSearchResult] = useState(null);

    function addButton() {

    }
    function viewButton() {

    }
    return (
        <div className="bookAddContainor">
            <div className="leftAddContainor">
                <SideBar />
            </div>
            <div className="rightAddContainor">
                <Welcome />
                <div className="bookAddRightContainor">
                    <h6><b>Add Books</b></h6>
                    <div>
                        <div className="divAddBookFormContainor">
                            <Form>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>ISBN</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setISBN(e.target.value)} value={isbn} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Genres And Categories</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setGenresAndCategories(e.target.value)} value={genresAndCategories} />
                                    </Col>

                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Language</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setLanguage(e.target.value)} value={language} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Tags And Keywords</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setTagsAndKeywords(e.target.value)} value={tagsAndKeywords} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setEdition(e.target.value)} value={edition} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Accession Number</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setAccessionNumber(e.target.value)} value={accessionNumber} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Author Name</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setAuthorName(e.target.value)} value={authorName} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Additional Contributors</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setAdditionalContributors(e.target.value)} value={additionalContributors} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Book Name</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setBookName(e.target.value)} value={bookName} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Publisher Name</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setPublisherName(e.target.value)} value={publisherName} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Published Year</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setPublishedYear(e.target.value)} value={publishedYear} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setPrice(e.target.value)} value={price} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>No Of Pages</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setNoOfPages(e.target.value)} value={noOfPages} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Supply ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setSupplyID(e.target.value)} value={supplyID} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Donation ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setDonationID(e.target.value)} value={donationID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Replacement ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setReplacementID(e.target.value)} value={replacementID} />
                                    </Col>

                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Government Grants ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setGovernmentGrantsID(e.target.value)} value={governmentGrantsID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Purchasing ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setPurchasingID(e.target.value)} value={purchasingID} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Removal ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setremovalID(e.target.value)} value={removalID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Note ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setNoteID(e.target.value)} value={noteID} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Government Grants ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setGovernmentGrantsID(e.target.value)} value={governmentGrantsID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Purchasing ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setPurchasingID(e.target.value)} value={purchasingID} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Removal ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setremovalID(e.target.value)} value={removalID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Note ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setNoteID(e.target.value)} value={noteID} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Cupboard No</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setcupboardNo(e.target.value)} value={cupboardNo} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Row Number</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setrowNumber(e.target.value)} value={rowNumber} />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Condition</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setcondition(e.target.value)} value={condition} />
                                    </Col>
                                    <Col >
                                        <Form.Label>Damage ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setDamageID(e.target.value)} value={damageID} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Label>Reservation ID</Form.Label>
                                        <Form.Control id='memberIDInput' onChange={(e) => setreservationID(e.target.value)} value={reservationID} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Date of Entry</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dateOfEntry"
                                            id='dateOfEntryInput'
                                            value={dateOfEntry}
                                            onChange={(e) => setDateOfEntry(e.target.value)}
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
                                    <Button variant="success" onClick={addButton}>Add Borrowal</Button>{' '}
                                    <Button variant="success" onClick={viewButton}>View Borrowals</Button>{' '}
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksAdd;

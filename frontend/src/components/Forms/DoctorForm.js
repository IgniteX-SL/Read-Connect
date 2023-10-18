import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

function DoctorForm() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [medicalLicenseNo, setMedicalLicenseNumber] = useState("");
  const [specialization, setSpecilization] = useState("");
  const [professionalExperience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [avalibleDays, setAvalibleDays] = useState("");
  const [emergencycontactNumber, setEmergencycontactNumber] = useState("");
  const [gender, setGender] = useState('Male');
  const [relationship, setRelationship] = useState("Married");
  const [skillsAndTraining, setSkills] = useState(null);

  const [searchResult, setSearchResult] = useState(null);
  const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Doctor!',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  };
  const successfullyUpdated = () => {
    Swal.fire({
      title: 'You successfully Updated a Doctor!',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  };
  const successfullyDeleted = () => {
    Swal.fire({
      title: 'Are you sure to delete doctor?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    })
  };

  //add Doctor
  function sendData(e) {
    e.preventDefault();
    const newDoctor = {
      firstName, lastName, doctorID, phoneNumber, email, medicalLicenseNo, specialization, professionalExperience, address, avalibleDays, emergencycontactNumber, gender, relationship, skillsAndTraining
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.post("http://localhost:8070/doctor/add", newDoctor,config).then(() => {
      successfullyAdded();
      setFirstName("")
      setLastName("")
      setDoctorID("")
      setPhoneNumber("")
      setEmail("")
      setMedicalLicenseNumber("")
      setSpecilization("")
      setExperience("")
      setAddress("")
      setAvalibleDays("")
      setEmergencycontactNumber("")
      setGender("Male")
      setRelationship("Married")
      setSkills(null)
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Doctor.',
        'error'
      )
    })
  }

  //serach doctor
  function populateFormWithFetchedData() {
    if (searchResult) {
      setFirstName(searchResult.user.firstName);
      setLastName(searchResult.user.lastName);
      setDoctorID(searchResult.user.doctorID);
      setPhoneNumber(searchResult.user.phoneNumber);
      setEmail(searchResult.user.email);
      setMedicalLicenseNumber(searchResult.user.medicalLicenseNo);
      setSpecilization(searchResult.user.specialization);
      setExperience(searchResult.user.professionalExperience);
      setAddress(searchResult.user.address);
      setAvalibleDays(searchResult.user.avalibleDays);
      setEmergencycontactNumber(searchResult.user.emergencycontactNumber);
      setGender(searchResult.user.gender);
      setRelationship(searchResult.user.relationship);
      setSkills(searchResult.user.skills);
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.get(`http://localhost:8070/doctor/get/${doctorID}`,config)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Doctor!',
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          console.log(response.data);
          populateFormWithFetchedData();
        } else {
          Swal.fire(
            'Error!',
            'Doctor not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Doctor.',
          'error'
        )
      });
  }
  // delete doctor
  
  function handleDelete() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.delete(`http://localhost:8070/doctor/delete/${doctorID}`,config)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Doctor!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setFirstName("")
        setLastName("")
        setDoctorID("")
        setPhoneNumber("")
        setEmail("")
        setMedicalLicenseNumber("")
        setSpecilization("")
        setExperience("")
        setAddress("")
        setAvalibleDays("")
        setEmergencycontactNumber("")
        setGender("Male")
        setRelationship("Married")
        setSkills(null)
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire(
          'Deleted!',
          'Error Deleting Doctor.',
          'error'
        )
        console.error(error);
      });
  }
  //update doctor details
  function handleUpdate() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    const updatedDoctor = {
      firstName,
      lastName,
      phoneNumber,
      email,
      medicalLicenseNo,
      specialization,
      professionalExperience,
      address,
      avalibleDays,
      emergencycontactNumber,
      gender,
      relationship,
      skillsAndTraining,
    };
    axios.put(`http://localhost:8070/doctor/update/${doctorID}`, updatedDoctor,config)
      .then((response) => {
        successfullyUpdated();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Did not Update!',
          'Error updating Dcctor.',
          'error'
        )
      });
  }

  //clear data
  function clearForm() {
    setFirstName("");
    setLastName("");
    setDoctorID("");
    setPhoneNumber("");
    setEmail("");
    setDoctorID("");
    setMedicalLicenseNumber("");
    setSpecilization("");
    setExperience("");
    setAddress("");
    setAvalibleDays("");
    setEmergencycontactNumber("");
    setGender("");
    setRelationship("");
    setSkills(null);
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control id='firstNameInput' onChange={(e) => setFirstName(e.target.value)}  value={firstName} />
        </Col>
        <Col>
          <Form.Label>Last name</Form.Label>
          <Form.Control id='lastNameInput'  onChange={(e) => setLastName(e.target.value)}  value={lastName} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Doctor ID</Form.Label>
          <Form.Control id='doctorIDInput' onChange={(e) => setDoctorID(e.target.value)}  value={doctorID} />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control id='phoneNumberInput' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  id='emailInput' onChange={(e) => setEmail(e.target.value)} value={email}  />
        </Form.Group>

        <Col>
          <Form.Label>Medical license Number</Form.Label>
          <Form.Control id='medicalLicenseNoInput' onChange={(e) => setMedicalLicenseNumber(e.target.value)}  value={medicalLicenseNo} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Specialization</Form.Label>
          <Form.Control id='specializationInput' onChange={(e) => setSpecilization(e.target.value)} value={specialization}  />
        </Col>
        <Col>
          <Form.Label>Professional Experience</Form.Label>
          <Form.Control id='professionalExperienceInput' onChange={(e) => setExperience(e.target.value)} value={professionalExperience}  />
        </Col>
      </Row>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control id='addressInput' onChange={(e) => setAddress(e.target.value)} value={address}/>
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>Available Days</Form.Label>
          <Form.Control id='avalibleDaysInput' onChange={(e) => setAvalibleDays(e.target.value)}  value={avalibleDays} />
        </Col>
        <Col>
          <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control onChange={(e) => setEmergencycontactNumber(e.target.value)} value={emergencycontactNumber}  />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender}id='genderInput' onChange={(e) => setGender(e.target.value)}>
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Relationship</Form.Label>

            <Form.Select value={relationship}id='relationshipInput' onChange={(e) => setRelationship(e.target.value)}>
              <option value="" disabled>Select relationship type</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter skills, Training, and Certification details in pdf format</Form.Label>
        <Form.Control type="file"id='skillsInput' onChange={(e) => setSkills(e.target.files[0])} />
      </Form.Group>
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
      <Button variant="success" onClick={sendData}>Enter</Button>{' '}
      <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
      <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
      <Button variant="danger" onClick={successfullyDeleted}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default DoctorForm;
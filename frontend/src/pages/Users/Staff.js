import '../../css file/Staff.css';
import NavBar from "../../components/NavBar";
import StaffForm from "../../components/Forms/StaffForm";
import Footer from '../../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Staff() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    async function fetchStaffs() {
      try {
        const response = await axios.get('http://localhost:8070/staff', config);
        setStaffs(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStaffs();
  }, []);
  console.log(user);
  const navigate = useNavigate();
  if (!user || ((user.role !== 'admin'))) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="StaffDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Staff Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorStaff">
          <div className="staffForm">
            <StaffForm />
          </div>
          <div className="existingStaff">
            <div className='scrollablePanel'>
              <ul>
                {staffs.map((staff) => (
                  <div key={staff.nurseID} className="existingStaffCard">
                    <p>{staff.firstName} {staff.lastName}</p>
                    <p>{staff.staffID}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContainorStaff">
        <Footer />
      </div>
    </div>
  );
}
export default Staff;
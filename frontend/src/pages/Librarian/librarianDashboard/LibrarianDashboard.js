import "./librarianDashboard.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function LibrarianDashboard() {
    return (
        <div className="librarianDashboardContainor">
            <div className="leftLibrarianDashboardContainor">
                <SideBar />
            </div>
            <div className="rightLibrarianDashboardContainor">
                <Welcome />
                <div className="bookLibrarianDashboardRightContainor">
                    <h6><b>Librarian Dashboard</b></h6>
                </div>
            </div>
        </div>
    );
}

export default LibrarianDashboard;

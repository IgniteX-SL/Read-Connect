import "./librarianDashboard.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Chart1 from './Chart1';
//var CanvasJSReact = require('@canvasjs/react-charts');

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
                    <div className="dashboardTilesRow">
                        <div className="dashboardTile">
                            100 Users Today
                        </div>
                        <div className="dashboardTile">
                            5000 Books
                        </div>
                        <div className="dashboardTile">
                            1000 Members
                        </div>
                        <div className="dashboardTile">
                            5 Staff Members
                        </div>
                    </div>
                    <div className="firstRow">
                        <div className="chart1Containor">
                            <h6><b>Borrowing And Returning Books</b></h6>
                            <Chart1 />
                        </div>
                        <div className="tableContainor">
                            
                        </div>
                        <div className="tableContainor">

                        </div>
                    </div>
                    <div className="firstRow">
                        <div className="tableContainor">

                        </div>
                        <div className="tableContainor">

                        </div>
                        <div className="tableContainor">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LibrarianDashboard;

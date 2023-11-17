import "./librarianDashboard.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
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
                        <div className="dashboardTableContainor">
                            <h6><b>Trending Books</b></h6>
                            <div className="librarianDashboardTableHeader">
                                <div className="librarianDashboardTableHeaderItem">N.Copies</div>
                                <div className="librarianDashboardTableHeaderItem">B. Name</div>
                                <div className="librarianDashboardTableHeaderItem">Author</div>
                                <div className="librarianDashboardTableHeaderItem">Category</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">7</div>
                                <div className="librarianDashboardTableHeaderItem">S. Holmes</div>
                                <div className="librarianDashboardTableHeaderItem">A.C.Doyle</div>
                                <div className="librarianDashboardTableHeaderItem">Short</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">5</div>
                                <div className="librarianDashboardTableHeaderItem">B. Name</div>
                                <div className="librarianDashboardTableHeaderItem">Author</div>
                                <div className="librarianDashboardTableHeaderItem">Category</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">7</div>
                                <div className="librarianDashboardTableHeaderItem">S. Holmes</div>
                                <div className="librarianDashboardTableHeaderItem">A.C.Doyle</div>
                                <div className="librarianDashboardTableHeaderItem">Short</div>
                            </div>                            
                        </div>
                        <div className="dashboardTableContainor">
                            <h6><b>Damaged Books</b></h6>
                            <div className="librarianDashboardTableHeader">
                                <div className="librarianDashboardTableHeaderItem">B. ID</div>
                                <div className="librarianDashboardTableHeaderItem">B. Name</div>
                                <div className="librarianDashboardTableHeaderItem">M. ID</div>
                                <div className="librarianDashboardTableHeaderItem">M. Name</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                        </div>
                    </div>
                    <div className="firstRow">
                        <div className="dashboardTableContainor">
                            <h6><b>Overdue Books</b></h6>
                            <div className="librarianDashboardTableHeader">
                                <div className="librarianDashboardTableHeaderItem">B. ID</div>
                                <div className="librarianDashboardTableHeaderItem">B. Name</div>
                                <div className="librarianDashboardTableHeaderItem">M. ID</div>
                                <div className="librarianDashboardTableHeaderItem">M. Name</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                        </div>
                        <div className="dashboardTableContainor">
                            <h6><b>Book Status and Condition</b></h6>
                            <div className="librarianDashboardTableHeader">
                                <div className="librarianDashboardTableHeaderItem">B. ID</div>
                                <div className="librarianDashboardTableHeaderItem">B. Name</div>
                                <div className="librarianDashboardTableHeaderItem">Status</div>
                                <div className="librarianDashboardTableHeaderItem">Condition</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">10</div>
                                <div className="librarianDashboardTableHeaderItem">Madolduwa</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick.</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">6</div>
                                <div className="librarianDashboardTableHeaderItem">Apegama</div>
                                <div className="librarianDashboardTableHeaderItem">M. Wick</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                            <div className="librarianDashboardTableItem">
                                <div className="librarianDashboardTableHeaderItem">9</div>
                                <div className="librarianDashboardTableHeaderItem">Hathpana</div>
                                <div className="librarianDashboardTableHeaderItem">Munidasa</div>
                                <div className="librarianDashboardTableHeaderItem">Novel</div>
                            </div>
                        </div>
                        <div className="chart1Containor">
                            <h6><b>Reserved And Not Reserved Books</b></h6>
                            <Chart2 />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LibrarianDashboard;

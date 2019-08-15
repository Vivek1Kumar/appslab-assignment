import React, { Component, Fragment } from 'react'

class SideNav extends Component {
    render() {
        return(
            <Fragment>
                <nav className="side-navbar">
                {/* <!-- Sidebar Header--> */}
                <div className="sidebar-header d-flex align-items-center">
                    <div className="pr-1"><img src={ require("../../img/left-sidebar-icons/logo.png")} alt=""  className="size" /></div>
                    <div className="read-analytics">Read Analytics</div>
                </div>
                {/* <!-- Sidebar Navidation Menus--> */}
                <div className="avatar">
                    <div className="header">
                        <nav className="navbar">
                            <div className="navbar-header">
                                <a id="toggle-btn" href="/" className="menu-btn active">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a> 
                            </div>
                        </nav>
                    </div>
                    <img src={ require("../../img/user-profile-pic.jpg")} alt="" className="rounded-circle round" /></div>
                    <div className="title">
                        <h1 className="h4">Meena Kumari</h1>
                        <p>Teacher</p>
                    </div>
                    <ul className="list-unstyled">
                        <li><a href="students_dashboard.html">
                            <img src={ require("../../img/left-sidebar-icons/dashboard.png")} className="hiddenNone" alt="Dashboard"/>Dashboard</a></li>
                        <li><a href="A2_session_attendance.html">
                            <img src={ require("../../img/left-sidebar-icons/attendance.png")}  className="hiddenNone" alt="Attendance" /> Attendance </a></li>
                        <li><a href="A4_performance.html">
                            <img src={ require("../../img/left-sidebar-icons/performance.png")}  className="hiddenNone" alt="Performance" /> Performance </a></li>
                        <li className="active"> <a href="session.html">
                            <img src={ require("../../img/left-sidebar-icons/session.png")}  className="hiddenNone" alt="Session" /> Session </a></li>
                        <li><a href="A7_students.html">
                            <img src={ require("../../img/left-sidebar-icons/students.png")} className="hiddenNone" alt="Students" /> Students </a></li>
                        <li><a href="reports_teacher.html">
                            <img src={ require("../../img/left-sidebar-icons/reports.png")}  className="hiddenNone" alt="Reports" /> Reports </a></li>
                    </ul>
                    <div className="footer-bottom">
                        <ul className="list-unstyled">
                        <li> <a href="login.html">
                            <img src={ require("../../img/left-sidebar-icons/logout.png")} className="hiddenNone" alt="Logout" /> Logout</a></li>
                        </ul>
                        <div className="footer-copyright">
                        <p className="copyright">2018 &copy; Read analytics</p>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
export default SideNav
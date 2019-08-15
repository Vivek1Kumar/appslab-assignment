import React, { Component, Fragment  } from 'react'

// assets lib
import "./SideNavbar.css"
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.default.css'
import '../../css/custom.css'
import '../../css/layout.css'
import '../../css/media.css'

// Reusable components
import SideNav from './SideNav'
import Header from './Header'
import Session from './Session'
import DynamicSession from './DynamicSession'
import Questions from './Questions'
import UserTab from './UserTab'
import QuestionDetails from './QuestionDetails';
import AnswerOption from './AnswerOption';

class DashBoard extends Component {
    render() {
        return(
            <Fragment>
                <div className="page home-page">
                    {/* ==================== Collection of Sub Components =========================*/}
                    <div className="page-content d-flex align-items-stretch">
                        {/* ==================== Side Navbar Component =========================*/}
                        <SideNav />
                        <div className="content-inner">
                        {/* ==================== Page Header Component =========================*/}
                            <Header />
                        {/* ==================== Session Section  =========================*/}
                            <div className="A6-session_details">
                                <Session />
                                {/* ==================== Dynamical Systems Component  =========================*/}
                                <DynamicSession />

                                {/* ====================  Sections  =========================*/}

                                <section className="no-padding-bottom">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="scrolling-tabs">
                                                    <div className="bg-white has-shadow py-3 px-3">
                                                    {/* ==================== Questions Component =========================*/}
                                                
                                                        <Questions />
                                                        <hr/>
                                                        {/* ==================== QuestionDetails Component  =========================*/}

                                                        <QuestionDetails />
                                                    </div>
                                                </div>
                                                {/* ==================== AnswerOption Component  =========================*/}

                                                <AnswerOption />
                                            </div>
                                            {/* ==================== User List Component  =========================*/}

                                            <UserTab />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default DashBoard
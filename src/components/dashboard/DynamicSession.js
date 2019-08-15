import React, { Fragment } from 'react'

const DynamicSession = () => {
    return(
        <Fragment>
            <section className="session-one no-padding-bottom">
                <div className="container-fluid">
                    <div className="bg-white has-shadow py-3 px-3">
                    <div className="row">
                        <div className="col-lg-8 col-12 col-sm-8">
                        <div className="dynamical-systems"> Dynamical systems and differential equations <a href="/" className="view-performance">View Performance</a> </div>
                        <div className="pt-2"> <span className="gery-box">S# 121</span> <span className="gery-box">S# 125</span> <span className="topic-active">S# 254</span> <span className="gery-box">S# 258</span> <span className="gery-box">S# 267</span> </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-4">
                        <div className="row">
                            <div className="col-lg-4 col-4 col-sm-4 py-2 text-center"><img src={ require("../../img/read-velocity.png")} alt="Read Velocity" /><br/>
                            <span  className="read-velocity">Read Velocity</span></div>
                            <div className="col-lg-4 col-4 col-sm-4">
                            <div className="light-gery-box">
                                <div className="number">4.45</div>
                                <div className="tagline">Session</div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-4 col-sm-4">
                            <div className="light-gery-box">
                                <div className="number">4.34</div>
                                <div className="tagline">Topic</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 divider"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-12 col-sm-2">
                        <div className="studio-session"> <img src={ require("../../img/studio.png")} alt="Studio Session" className="img" /> <span className="studio-session-txt">Studio<br/>
                            Session</span> </div>
                        </div>
                        <div className="col-lg-10 col-12 col-sm-10">
                        <div className="row">
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">ClassNaclassName</span><br/>
                            <span className="custom-lg-fnt">10th</span> </div>
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">Subject</span><br/>
                            <span className="custom-lg-fnt">Science</span> </div>
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">Sub Subject</span><br/>
                            <span className="custom-lg-fnt">Science</span> </div>
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">Studio</span><br/>
                            <span className="custom-lg-fnt">Bengaluru</span> </div>
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">Studio Teacher</span><br/>
                            <span className="custom-lg-fnt">Vivek Sharma</span> </div>
                            <div className="col-lg-2 col-sm-2 col-6"> <span className="custom-sm-fnt">Time</span><br/>
                            <span className="custom-lg-fnt">08:30 am - 09:20am</span> </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default DynamicSession
import React, { Fragment } from 'react'

const header = () => {
    return(
        <Fragment>
            <header className="page-header">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-5 col-sm-6">
                        <h2 className="no-margin-bottom py-2 top-page-title">Session 
                            <a href="/" className="px-3">
                                <i className="fa fa-angle-right arrow-small-font" aria-hidden="true"></i>
                            </a> 
                            <span>S# 254</span> 
                        </h2>
                    </div>
                    <div className="col-lg-6 col-5 col-sm-5 text-right">
                        <a href="/">
                            <img src={ require("../../img/poornaprajnap-college.png")} alt="Poornaprajna College And Post Graduate Center" width="100%" />
                        </a></div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
export default header
import React, { Component, Fragment } from 'react'

class UserTab extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-4 col-12 mtop-15">
                    <div className="bg-white has-shadow py-3 px-3">
                    <div className="right-sidebar">
                        <div className="border-btm5">
                        <div className="row">
                            <div className="col-lg-3 col-3">
                                <span className="r-n-s-t" style={{color: "#fc8802"}}>R#</span> 
                                <a href="/" style={{color: "#fc8802"}}>
                                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                </a> 
                                <a href="/" style={{color: "#fc8802"}}>
                                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                </a> 
                            </div>
                            <div className="col-lg-3 col-3">
                                <span className="r-n-s-t">Name</span> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                </a> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                </a> 
                            </div>
                            <div className="col-lg-3 col-3">
                                <span className="r-n-s-t">Session</span> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                </a> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                </a> 
                            </div>
                            <div className="col-lg-3 col-3">
                                <span className="r-n-s-t">Topic</span> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                </a> 
                                <a href="/">
                                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                </a> 
                            </div>
                        </div>
                        </div>
                        <div className="content mCustomScrollbar">                                        
                            <div className="row">
                                <div className="col-lg-2 col-2 col-sm-1"> 
                                    <img src={require("../../img/avatar-1.jpg")} alt="" className="user-picture"/><br/>
                                    <div className="text-center"> 
                                        <a href="/">
                                            <img src={require("../../img/user-rd.png")} alt="" />
                                        </a><br/>
                                        <a href="/">
                                            <img src={require("../../img/gery-hand.png")} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-10 col-sm-11">
                                    <div className="number">R# 004 </div>
                                    <div className="user-name">K. Kavitha</div>
                                    <div className="square-boxes"> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="gery-box0">&nbsp;</span> 
                                        <span className="blue-box">&nbsp;</span>
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="gery-box0">&nbsp;</span> 
                                        <span className="blue-box">&nbsp;</span> 
                                        <span className="gery-box0">&nbsp;</span> 
                                        <span className="blue-box">&nbsp;</span> 
                                    </div>
                                    <div className="margin-left">
                                        <div className="border-top"></div>
                                        <div className="clearfix"> 
                                            <span className="pull-left">
                                                <small className="session">Session</small>
                                                <small className="session-value">4.45</small>
                                            </span> 
                                            <span className="pull-right">
                                                <small className="session">Topic</small>
                                                <small className="session-value">88.36%</small>
                                            </span> 
                                        </div>
                                        <div className="pull-left margin-top-minus">
                                            <small className="session-value p-0">Velocity icon</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-2 col-2 col-sm-1"> 
                                <img src={require("../../img/avatar-2.jpg" )}alt="" className="user-picture"/><br/>
                                <div className="text-center"> 
                                    <a href="/">
                                        <img src={require("../../img/user-bl.png")} alt="" />
                                    </a><br/>
                                    <a href="/">
                                        <img src={require("../../img/rd-hand.png")} alt="" />
                                    </a> 
                                </div>
                            </div>
                            <div className="col-lg-10 col-10 col-sm-11">
                                <div className="number">R# 004 </div>
                                <div className="user-name">Sharat Chandran</div>
                                <div className="square-boxes"> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                </div>
                                <div className="margin-left-none">
                                    <div className="border-top"></div>
                                    <div className="clearfix"> 
                                        <span className="pull-left">
                                            <small className="session">Session</small>
                                            <small className="session-value">87.25%</small>
                                        </span> 
                                        <span className="pull-right">
                                            <small className="session">Topic</small>
                                            <small className="session-value">88.36%</small>
                                        </span> 
                                    </div>
                                    <div className="pull-left margin-top-minus">
                                        <small className="session-value p-0">Velocity icon</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-2 col-2 col-sm-1"> 
                                <img src={require("../../img/avatar-3.jpg" )}alt="" className="user-picture"/><br/>
                                <div className="text-center"> 
                                    <a href="/"><img src={require("../../img/user-rd.png")} alt="" /></a><br/>
                                    <a href="/"><img src={require("../../img/rd-hand.png")} alt="" /></a> 
                                </div>
                            </div>
                            <div className="col-lg-10 col-10 col-sm-11">
                                <div className="number">R# 004 </div>
                                <div className="user-name">Majid Hammed</div>
                                <div className="square-boxes"> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                </div>
                                <div className="margin-left-none">
                                <div className="border-top"></div>
                                <div className="clearfix"> 
                                    <span className="pull-left">
                                        <small className="session">Session</small>
                                        <small className="session-value">87.25%</small>
                                    </span> <span className="pull-right">
                                        <small className="session">Topic</small>
                                        <small className="session-value">88.36%</small>
                                    </span> 
                                </div>
                                <div className="pull-left margin-top-minus">
                                    <small className="session-value p-0">Velocity icon</small>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-2 col-2 col-sm-1"> 
                                <img src={require("../../img/avatar-4.jpg" )}alt="" className="user-picture"/><br/>
                                <div className="text-center"> 
                                    <a href="/">
                                        <img src={require("../../img/user-yl.png")} alt="" />
                                    </a><br/>
                                    <a href="/">
                                        <img src={require("../../img/gery-hand.png")} alt="" />
                                    </a> 
                                </div>
                            </div>
                            <div className="col-lg-10 col-10 col-sm-11">
                                <div className="number">R# 004 </div>
                                <div className="user-name">Rahul</div>
                                <div className="square-boxes"> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="red-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="blue-box">&nbsp;</span> 
                                    <span className="gery-box0">&nbsp;</span> 
                                    <span className="green-box">&nbsp;</span> 
                                </div>
                                <div className="margin-left-none">
                                    <div className="border-top"></div>
                                    <div className="clearfix"> 
                                        <span className="pull-left">
                                            <small className="session">Session</small>
                                            <small className="session-value">87.25%</small>
                                        </span> 
                                        <span className="pull-right">
                                            <small className="session">Topic</small>
                                            <small className="session-value">88.36%</small>
                                        </span> 
                                    </div>
                                    <div className="pull-left margin-top-minus">
                                        <small className="session-value p-0">Velocity icon</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-2 col-sm-1"> 
                                    <img src={require("../../img/avatar-4.jpg" )}alt="" className="user-picture"/><br/>
                                    <div className="text-center"> 
                                        <a href="/">
                                            <img src={require("../../img/user-rd.png")} alt="" />
                                        </a><br/>
                                        <a href="/">
                                            <img src={require("../../img/gery-hand.png")} alt="" />
                                        </a> 
                                    </div>
                                </div>
                                <div className="col-lg-10 col-10 col-sm-11">
                                    <div className="number">R# 004 </div>
                                    <div className="user-name">Kuldeep</div>
                                    <div className="square-boxes"> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="green-box">&nbsp;</span> 
                                        <span className="red-box">&nbsp;</span> 
                                        <span className="red-box">&nbsp;</span> 
                                        <span className="red-box">&nbsp;</span> 
                                        <span className="gery-box0">&nbsp;</span> 
                                        <span className="blue-box">&nbsp;</span> 
                                        <span className="gery-box0">&nbsp;</span> 
                                        <span className="green-box">&nbsp;</span> 
                                    </div>
                                    <div className="margin-left-none">
                                        <div className="border-top"></div>
                                        <div className="clearfix"> 
                                        <span className="pull-left">
                                            <small className="session">Session</small>
                                            <small className="session-value">87.25%</small>
                                        </span> 
                                        <span className="pull-right">
                                            <small className="session">Topic</small>
                                            <small className="session-value">88.36%</small>
                                        </span> 
                                    </div>
                                    <div className="pull-left margin-top-minus">
                                        <small className="session-value p-0">Velocity icon</small></div>
                                    </div>
                                </div>
                            </div>                                        
                        </div>
                    </div>
                    </div>
                </div>                                
            </Fragment>
        )
    }
}
export default UserTab
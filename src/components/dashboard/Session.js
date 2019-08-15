import React, { Fragment, Component } from 'react'
import Calendar from './DatePicker'

class Session extends Component {
    render() {
        return(
            <Fragment>
                <section className="session-one no-padding-bottom">
                    <div className="container-fluid">
                        <div className="bg-white has-shadow py-3 px-3">
                        <div className="row">
                            <div className="col-lg-9 col-12 col-sm-6">
                                <div className="session-slide-div"> 
                                    <span id="next">
                                        <img src={ require("../../img/prev-arrow.png")} alt="Next" />
                                    </span>
                                    <span className="session-slide"> 
                                    <span className="s-number">S# 266</span> 
                                    
                                    </span> <span id="prev">
                                        <img src={ require("../../img/next-arrow.png")} alt="Prev" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12 col-sm-6">                        
                                    <div className="session-calender-slider"> 
                                        <span id="next1">
                                            <img src={require("../../img/prev-arrow.png")} alt="Next" style={{opacity: "0.5"}} />
                                        </span> 
                                        <span className="session-calender">                                            
                                            <Calendar />
                                        </span> 
                                        <span id="prev1">
                                            <img src={require("../../img/next-arrow.png")} alt="Prev" style={{opacity: "0.5"}} />
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default Session
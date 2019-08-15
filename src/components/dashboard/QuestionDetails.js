import React, { Component, Fragment } from 'react'

class QuestionDetails extends Component {
    render() {
        return(
            <Fragment>
                    <div className="tab-content" id="myTabContent">
                    <div role="tabpanel" className="tab-pane active" id="tab1">
                        <div className="row">
                            <div className="col-lg-2 col-sm-2">
                                <div className="q4">Q4</div>
                            </div>
                            <div className="col-lg-10 col-sm-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Integer imperdiet vulputate dignissim. Nam eget accumsan erat.
                                    c purus nunc, luctus in placerat non, tempus sed tellus.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <img src={require("../../img/gandhi.png")} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="q-four"><span className="blue-circle">A</span> Integer imperdiet vulputate.</div>
                                        <div className="q-four"><span className="blue-circle">B</span> Nam eget accumsan erat.</div>
                                        <div className="q-four"><span className="blue-circle">C</span> Lorem ipsum dolor.</div>
                                        <div className="q-four"><span className="blue-circle">D</span> Luctus in placerat non.</div>
                                        <div className="q-four"><span className="blue-circle">E</span> Consectetur adipiscing elit</div>
                                        <div className="q-four"><span className="blue-circle">F</span> Nam eget accumsan erat.</div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div class="row mt-4">
                            <div class="col-lg-6 col-sm-6">
                                <div class="row">
                                <div class="col-lg-4 col-4 col-sm-4 pr-0">
                                    <div class="light-blue-box">Remember</div>
                                </div>
                                <div class="col-lg-4 col-4 col-sm-4 pr-0">
                                    <div class="light-blue-box">Difficulty : 4</div>
                                </div>
                                <div class="col-lg-4 col-4 col-sm-4">
                                    <div class="light-blue-box">JEE15</div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 text-right"> <img src={require("../../img/web-icon.png")} alt="" /> <a href="/" class="anchor-tag">By: Govindaraj  - Anantapur, AP</a> <a href="/" class="anchor-tag">Q# 2343546</a> </div>
                        </div>                                             
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab2">Tab 2 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab3">Tab 3 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab4">Tab 4 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab5">Tab 5 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab6">Tab 6 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab7">Tab 7 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab8">Tab 8 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab9">Tab 9 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab10">Tab 10 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab11">Tab 11 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab12">Tab 12 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab13">Tab 13 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab14">Tab 14 content...</div>
                    <div role="tabpanel" className="tab-pane" id="tab15">Tab 15 content...</div>
                </div>
                                    
            </Fragment>
        )
    }
}
export default QuestionDetails
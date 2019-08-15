
import React, { Fragment } from 'react'

const Questions = () => {
    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-2 col-sm-2 col-12">
                    <small className="questionss">Questions</small>
                </div>
                <div className="col-lg-10 col-sm-10 col-12 pl-0">
                    <div className="tab-card-header">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#tab1" role="tab" data-toggle="tab">1</a> </li>
                            <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab">2</a> </li>
                            <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab">3</a> </li>
                            <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab">4</a> </li>
                            <li role="presentation"><a href="#tab5" role="tab" data-toggle="tab">5</a> </li>
                            <li role="presentation"><a href="#tab6" role="tab" data-toggle="tab">6</a> </li>
                            <li role="presentation"><a href="#tab7" role="tab" data-toggle="tab">7</a> </li>
                            <li role="presentation"><a href="#tab8" role="tab" data-toggle="tab">8</a> </li>
                            <li role="presentation"><a href="#tab9" role="tab" data-toggle="tab">9</a> </li>
                            <li>
                                <img className="mt-3 ml-4" src={require('../../img/dark-prev-arrow.png')}  alt="arrow-left"/>
                                <img className="mt-3 ml-2"  src={require('../../img/dark-next-arrow.png')} alt="arrow-right"/>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}
export default Questions;
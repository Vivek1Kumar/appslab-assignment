import React, { Fragment } from 'react'

export default () => {
    return(
        <Fragment>
              <div className="bg-white has-shadow py-2 px-3 mt-3">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12 brd-right"> 
                            <span className="correct-options">Correct Options</span> 
                            <span className="a-green">A</span> 
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12"> 
                            <span className="near-correct-options">Near Correct Options</span> 
                            <span className="c-blue">C</span> 
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
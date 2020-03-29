import React, { Fragment } from 'react'

const results = () => {
    return (
        <Fragment>
            <div className="container">
                <label className="mb-4">Results</label>
                {/* loop through containers */}
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p>Title</p>
                            <p>Aurthor</p>
                        </div>
                        <div className="col">
                            <button className="btn btn-info mr-2">View</button>
                            <button className="btn btn-success">Save</button>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <p>Description</p>
                        </div>
                    </div>
                </div>

                {/* duplicate */}

                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <p>Title</p>
                            <p>Aurthor</p>
                        </div>
                        <div className="col">
                            <button className="btn btn-info mr-2">View</button>
                            <button className="btn btn-success">Save</button>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <p>Description</p>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default results;
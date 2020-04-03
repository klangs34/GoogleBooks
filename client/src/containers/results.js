import React, { Fragment, useEffect, useState } from 'react'
import { useStoreContext } from '../util/globalContext';
import Div from './div';
import P from './p';
import { API } from '../util/api';
import './results.css'

const results = () => {

    const [state, dispatch] = useStoreContext();
    //console.log(state.results.items)

    const [toastClass, setToastClass] = useState("");

    const handleView = (e, link) => {
        e.preventDefault();
        //console.log(link)
        window.location.href = link;
    }

    const handleSave = (resultObj) => {
        //clear toastClass
        setToastClass("");
        //saves search in database
        const { id } = resultObj;
        const { title, authors, infoLink, description } = resultObj.volumeInfo;
        const { thumbnail } = resultObj.volumeInfo.imageLinks;

        API.postBook({ id, title, authors, infoLink, description, thumbnail })
            .then(data => {
                //console.log(data)
                setToastClass("success");
            });
    }

    return (
        <Fragment>
            <div className="mb-4 container h-2">Results</div>
            {state.results.items ?
                state.results.items.map((val) => (
                    <Div key={val.id}>
                        <div className="row d-flex justify-content-between">
                            <div className="col">
                                <p>{val.volumeInfo.title}</p>
                                {val.volumeInfo.authors && val.volumeInfo.authors.map((val, index) => (
                                    <P key={index}>{val}</P>
                                ))}
                            </div>
                            <div className="col">
                                <button onClick={(e) => handleView(e, val.volumeInfo.infoLink)} className="btn btn-info mr-2">View</button>
                                <button onClick={() => handleSave(val)} className="btn btn-success">Save</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={val.volumeInfo.imageLinks && val.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={val.volumeInfo.title} />
                                </div>
                            </div>
                            <div className="col">
                                <p>{val.volumeInfo.description}</p>
                            </div>
                        </div>
                    </Div>
                )) : <div className="container text-center h2">Please search for a book</div>
            }
            <div className={toastClass && toastClass} id="toast">
                Book Saved Successfully!
            </div>
        </Fragment>
    )
}

export default results;
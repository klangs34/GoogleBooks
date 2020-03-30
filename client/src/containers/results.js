import React, { Fragment } from 'react'
import { useStoreContext } from '../util/globalContext';
import { API } from '../util/api';

const results = () => {
    const [state, dispatch] = useStoreContext();
    console.log(state.results.items)

    const handleView = (e, link) => {
        e.preventDefault();
        //console.log(link)
        window.location.href = link;
    }

    const handleSave = (resultObj) => {
        //saves search in database
        const { id } = resultObj;
        const { title, authors, infoLink, description } = resultObj.volumeInfo;
        const { thumbnail } = resultObj.volumeInfo.imageLinks;

        API.postBook({ id, title, authors, infoLink, description, thumbnail })
            .then(data => console.log(data));
    }

    return (
        <Fragment>
            <div className="mb-4 container h-2">Results</div>
            {state.results.items ?
                state.results.items.map((val) => (
                    <div key={val.id} className="container border p-3" style={{ backgroundColor: '#e9ecef' }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col">
                                <p>{val.volumeInfo.title}</p>
                                {val.volumeInfo.authors.map(val => (
                                    <p>{val}</p>
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
                                    <img src={val.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={val.volumeInfo.title} />
                                </div>
                            </div>
                            <div className="col">
                                <p>{val.volumeInfo.description}</p>
                            </div>
                        </div>
                    </div>
                )) : <div className="container text-center h2">Please search for a book</div>
            }
        </Fragment>
    )
}

export default results;
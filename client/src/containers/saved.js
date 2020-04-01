import React, { Fragment, useEffect } from 'react';
import { useStoreContext } from '../util/globalContext';
import { API } from '../util/api';
import P from './p';
import { GET_SAVED_BOOKS } from '../util/actions';

const saved = () => {

    const [state, dispatch] = useStoreContext();
    //console.log(state)

    useEffect(() => {
        API.getSavedBooks().then(results => dispatch({ type: GET_SAVED_BOOKS, post: results.data }))
    }, [])

    const handleView = (e, link) => {
        e.preventDefault();
        //console.log(link)
        window.location.href = link;
    }

    const handleDelete = (id) => {
        API.deleteSaved(id)
            .then(data => window.location.reload());
        //reload page.
    }

    return (
        <Fragment>
            <div className="mb-4 container h-2">Saved Books</div>
            {state.saved ?
                state.saved.map((val) => (
                    <div key={val._id} className="container border p-3" style={{ backgroundColor: '#e9ecef' }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col">
                                <p>{val.title}</p>
                                {val.authors.map((val, index) => (
                                    <P key={index}>{val}</P>
                                ))}
                            </div>
                            <div className="col">
                                <button onClick={(e) => handleView(e, val.infoLink)} className="btn btn-info mr-2">View</button>
                                <button onClick={() => handleDelete(val._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={val.thumbnail} className="card-img-top" alt={val.title} />
                                </div>
                            </div>
                            <div className="col">
                                <p>{val.description}</p>
                            </div>
                        </div>
                    </div>
                )) : <div className="container text-center h2">Please search for a book</div>
            }
        </Fragment>
    )
}

export default saved;
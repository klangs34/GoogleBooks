import React, { useState, Fragment } from 'react';
import { useStoreContext } from '../util/globalContext';
import { LOADING, ADD_RESULTS } from '../util/actions';
import { API } from '../util/api';

const search = (props) => {

    const [search, setSearch] = useState("");

    const [state, dispatch] = useStoreContext();
    const handleSearch = (e) => {
        e.preventDefault();
        const newSearch = search.trim()
        dispatch({ type: LOADING })
        API.getBooks(newSearch).then(result => dispatch({
            type: ADD_RESULTS,
            post: result.data
        }))
    }

    return (
        <Fragment>
        {props.location.pathname === "/" || props.location.pathname === '/search' ? 
        <div className="container mb-4">
            <label htmlFor="search">Book Search</label>
            <div className="input-group mb-3">
                <input type="text"
                    id="search" 
                    className="form-control" 
                    placeholder="Search Book" 
                    aria-label="Search Book" 
                    aria-describedby="search-button"
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)}/>
                <div className="input-group-append">
                    <button onClick={e => handleSearch(e)} className="btn btn-outline-secondary" type="button" id="search-button">Button</button>
                </div>
            </div>
        </div>
        : ""}
        </Fragment>
    )
}

export default search;
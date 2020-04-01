import React, { useState, Fragment, useEffect } from 'react';
import { useStoreContext } from '../util/globalContext';
import { LOADING, ADD_RESULTS } from '../util/actions';
import { API } from '../util/api';
import { useLocation } from 'react-router-dom'

const search = () => {

    const [search, setSearch] = useState("");

    const router = useLocation();

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
        {router.pathname === "/" || router.pathname === '/search' ? 
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
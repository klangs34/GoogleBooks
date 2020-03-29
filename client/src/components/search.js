import React, { useState } from 'react';

const search = () => {

    const [searchInput, setSearchInput ] = useState("");

    return (
        <div className="container mb-4">
            <label htmlFor="search">Book Search</label>
            <div className="input-group mb-3">
                <input type="text"
                    id="search" 
                    className="form-control" 
                    placeholder="Search Book" 
                    aria-label="Search Book" 
                    aria-describedby="search-button"
                    value={searchInput} 
                    onChange={(e)=> setSearchInput(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="search-button">Button</button>
                </div>
            </div>
        </div>
    )
}

export default search;
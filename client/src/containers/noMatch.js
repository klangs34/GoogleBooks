import React from "react";
import Banner from './banner';

const NoMatch = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>404 Page Not Found</h1>
                    <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄 Oops, Try Again!
                    </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;
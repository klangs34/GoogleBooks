import React from "react";
import Banner from './banner';

const NoMatch = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <Banner>
                <h1>404 Page Not Found</h1>
                    <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
                    </span>
                    </h1>
                </Banner>
            </div>
        </div>
    </div>
  );
};

export default NoMatch;
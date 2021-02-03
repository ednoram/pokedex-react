import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./page_not_found_container.scss";

const PageNotFoundContainer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content={"404 Page Not Found | Pokédex"} />
        <title>404 Page Not Found | Pokédex</title>
      </Helmet>
      <div className="page_not_found_container">
        <div className="container">
          <h2 className="page_title">404 Page not found</h2>
          <div>
            <Link to="/">
              <div className="return_to_homepage_btn" role="button">
                Return to homepage
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFoundContainer;

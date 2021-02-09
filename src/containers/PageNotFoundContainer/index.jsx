import React from "react";
import { Link } from "react-router-dom";

import "./page_not_found_container.scss";

import HelmetLayout from "../../layouts/HelmetLayout";

const PageNotFoundContainer = () => {
  return (
    <HelmetLayout
      title="404 Page Not Found | Pokédex"
      metaDescription="404 Page Not Found | Pokédex"
    >
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
    </HelmetLayout>
  );
};

export default PageNotFoundContainer;

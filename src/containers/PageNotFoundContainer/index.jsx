import React from "react";
import { Link } from "react-router-dom";

import styles from "./page_not_found_container.module.scss";

import HelmetLayout from "../../layouts/HelmetLayout";

const PageNotFoundContainer = () => {
  return (
    <HelmetLayout
      title="404 Page Not Found | Pokédex"
      metaDescription="404 Page Not Found | Pokédex"
    >
      <div className={styles.page_not_found_container}>
        <div className="container">
          <h2 className={styles.page_title}>404 Page not found</h2>
          <div className="flex_center">
            <Link to="/">
              <div className={styles.return_to_homepage_btn} role="button">
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

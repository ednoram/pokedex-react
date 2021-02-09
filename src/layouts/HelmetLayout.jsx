import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const HelmetLayout = ({ children, title, metaDescription }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    {children}
  </>
);

HelmetLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  metaDescription: PropTypes.string.isRequired,
};

export default HelmetLayout;

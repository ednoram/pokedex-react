import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const StatBlocks = ({ percentage }) => {
  const statBlocksArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="stat_blocks">
      <div
        style={{
          opacity: "1",
        }}
      ></div>
      {statBlocksArr.map((n) => (
        <div
          key={nanoid()}
          style={{
            opacity: Math.round((percentage / 100) * 15) >= n ? "1" : "0.2",
          }}
        ></div>
      ))}
    </div>
  );
};

StatBlocks.propTypes = {
  percentage: PropTypes.number,
};

StatBlocks.defaultProps = {
  percentage: 0,
};

export default StatBlocks;

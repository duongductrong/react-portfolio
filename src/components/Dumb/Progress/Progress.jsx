import React from "react";
import PropTypes from "prop-types";
import "./Progress.scss";

function Progress({ progress, reF, ...props }) {
  return (
    <div
      ref={reF}
      {...props}
      className="progress"
      style={{ width: `${progress}%` }}
    ></div>
  );
}

Progress.propTypes = {
  progress: PropTypes.number,
};

export default Progress;

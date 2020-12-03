import React from "react";
import PropTypes from 'prop-types';
import "./Progress.scss";

function Progress({ progress, ...props }) {
  return (
    <div {...props} className="progress" style={{ width: `${progress}%` }}></div>
  );
}

Progress.propTypes = {
    progress: PropTypes.number
}

export default Progress;

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Separate.scss";

function Separate({ variant, className, ...props }) {
  return (
    <div
      {...props}
      className={classNames("separate", [variant], className)}
    ></div>
  );
}

Separate.defaultProps = {
  variant: "solid",
};

Separate.propTypes = {
  variant: PropTypes.oneOf(["solid", "dashed"]),
  className: PropTypes.string,
};

export default Separate;

import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Typography.scss";

function Typography({
  block,
  className,
  variant,
  fontWeight,
  letterSpacing,
  children,
  ...props
}) {
  return (
    <span
      className={classNames(
        "text",
        [variant],
        [fontWeight],
        { block: block },
        className
      )}
      {...props}
    >
      {Children.toArray(children)}
    </span>
  );
}

Typography.defaultProps = {
  variant: "p",
  fontWeight: "normal",
};

Typography.propTypes = {
  letterSpacing: PropTypes.number,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
  fontWeight: PropTypes.oneOf(["normal", "lighter", "bold", "bolder"]),
  block: PropTypes.bool,
};

export default Typography;

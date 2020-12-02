import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Picture.scss";

function Picture({
  width,
  height,
  fullWidth = false,
  className,
  alt,
  ...props
}) {
  return (
    <img
      {...props}
      className={classNames(
        "image-component",
        { fullWidth: fullWidth },
        className
      )}
      alt={alt}
    />
  );
}

Picture.propTypes = {
  src: PropTypes.string,
  fullWidth: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Picture;

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Loading.scss";

function Loading({
  percent = 10,
  text = "Coding builder, wait a second",
  fixed,
  ...props
}) {
  return (
    <div className={classNames("loading", { fixed: fixed })} {...props}>
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="14">
          <textPath xlinkHref="#circle">{text}</textPath>
        </text>
      </svg>

      <div className="percent">{percent}</div>
    </div>
  );
}

Loading.defaultProps = {
  percent: 10,
  text: "Coding builder, wait a second",
  fixed: false,
};

Loading.propTypes = {
  percent: PropTypes.number,
  text: PropTypes.string,
  fixed: PropTypes.bool,
};

export default Loading;

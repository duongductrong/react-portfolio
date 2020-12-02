import React from "react";
import "./Loading.scss";

function Loading({
  percent = 10,
  text = "Coding builder, wait a second",
  ...props
}) {
  return (
    <div className="loading" {...props}>
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

export default Loading;

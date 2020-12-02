import React from "react";
import classNames from 'classnames';
import "./Bar.scss";

const Bar = ({ active, className, ...props }) => {
  return (
    <div
      className={classNames("bar-dumb", { active: active }, className)}
      {...props}
    >
      <div className="bar-item">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="bar-item">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="bar-item">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Bar;

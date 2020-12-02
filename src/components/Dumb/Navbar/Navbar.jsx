import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./Navbar.scss";

import Bar from "../Bar/Bar";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarRef = useRef(null);
  const [show, setShow] = useState(false);

  const onChangeShow = () => {
    setShow(!show);
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbarHeight",
      `${navbarRef.current.clientHeight}px`
    );
  }, []);

  return (
    <div
      ref={navbarRef}
      className={classNames("navbar", { hidden: !show, show: show })}
    >
      <h1 className="brand">
        <Link to="/">T.R</Link>
      </h1>
      <Bar className="navbar-bars" active={show} onClick={onChangeShow} />

      <div className={classNames("navbar-items")}>
        <div className="overlay">
          <Link onClick={onChangeShow} to="/about">About</Link>
        </div>

        <div className="overlay">
          <Link onClick={onChangeShow} to="/about">Expertise</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

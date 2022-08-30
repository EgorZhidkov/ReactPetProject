import React from "react";
import { ReactComponent as ArrowBack } from "../../assets/img/arrow_back.svg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./sideBar.scoped.scss";
const SideBar = (props) => {
  const [sideBarStatus, setSideBarStatus] = useState(true);
  const toggleSideBar = () => {
    sideBarStatus === true ? setSideBarStatus(false) : setSideBarStatus(true);
  };
  return (
    <>
      <div className="window">
        <div
          className={`sideBar ${sideBarStatus === true ? "open" : "closed"}`}
        >
          <button onClick={toggleSideBar}>
            <ArrowBack />
          </button>
          <ul className="sideBar-list">
            <li className="sideBar-list__cell">
              <Link to="/calculator">Калькулятор</Link>
            </li>
            <li className="sideBar-list__cell">
              <Link to="/test">Окно с оповещениями</Link>
            </li>
          </ul>
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default SideBar;

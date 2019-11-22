import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  const [isShowNav, setIsShowNav] = useState(false);
  const [selected, setSelected] = useState(null);
  const [fill, setFill] = useState("#ff5600");
  let {
    location: { pathname }
  } = props;
  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelected("salmonRun");
        setFill("#ff5600");
        break;
      case "/turfWar":
        setSelected("turfWar");
        setFill("#18d618");
        break;
      case "/rankBattle":
        setSelected("rankBattle");
        setFill("#a51de1");
        break;
      case "/leagueBattle":
        setSelected("leagueBattle");
        setFill("#ef2d7c");
        break;
      case "/splatNetGear":
        setSelected("splatNetGear");
        setFill("#ffcd00");
        break;
      default:
        setSelected(null);
    }
  }, [pathname]);
  return (
    <header>
      <div className="header-wrapper main-container">
        <ul className="sm-hidden">
          <li>
            <Link
              to="/"
              className={selected === "salmonRun" ? "font-origin" : ""}
            >
              Salmon Run
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/turfWar"
              }}
              className={selected === "turfWar" ? "font-green" : ""}
            >
              Regular Battle
            </Link>
          </li>
          <li>
            <Link
              to="/rankBattle"
              className={selected === "rankBattle" ? "font-purple" : ""}
            >
              Rank Battle
            </Link>
          </li>
          <li>
            <Link
              to="/leagueBattle"
              className={selected === "leagueBattle" ? "font-pink" : ""}
            >
              League Battle
            </Link>
          </li>
          <li>
            <Link
              to="/splatNetGear"
              className={selected === "splatNetGear" ? "font-yellow" : ""}
            >
              SplatNet Gear
            </Link>
          </li>
        </ul>
        <div className="sm-show nav">
          <div
            className={isShowNav ? "header-more show-bg" : "header-more"}
            onClick={() => {
              setIsShowNav(!isShowNav);
            }}
          >
            <svg fill={fill} viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M3.5 5h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          {isShowNav ? (
            <ul
              onClick={() => {
                setIsShowNav(!isShowNav);
              }}
            >
              <li id="nav-salmonRun">
                <Link
                  to="/"
                  className={selected === "salmonRun" ? "font-origin" : ""}
                >
                  Salmon Run
                </Link>
              </li>
              <li id="nav-turfWar">
                <Link
                  to="/turfWar"
                  className={selected === "turfWar" ? "font-green" : ""}
                >
                  Regular Battle
                </Link>
              </li>
              <li id="nav-rankBattle">
                <Link
                  to="/rankBattle"
                  className={selected === "rankBattle" ? "font-purple" : ""}
                >
                  Rank Battle
                </Link>
              </li>
              <li id="nav-leagueBattle">
                <Link
                  to="/leagueBattle"
                  className={selected === "leagueBattle" ? "font-pink" : ""}
                >
                  League Battle
                </Link>
              </li>
              <li id="nav-splatNetGear">
                <Link
                  to="/splatNetGear"
                  className={selected === "splatNetGear" ? "font-yellow" : ""}
                >
                  SplatNet Gear
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);

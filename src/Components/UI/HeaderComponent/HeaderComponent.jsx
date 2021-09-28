import React, { Component } from "react";
import  Logo  from "../../../Images/Icons/footballLogo.png";
import { PAGE_URLS } from "../../../Utils/Constants";
const { Link } = require("react-router-dom");

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark text-light fixed-top">
        <div className="container-fluid fs-5">
          <Link className="navbar-brand text-light" to={PAGE_URLS.HOME}>
            <img
              src={Logo}
              alt="icon"
              style={{ maxHeight: "45px", maxWidth: "45px" }}
              className="rounded-1"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item pl-2 pr-4">
                <Link
                  className="nav-link active text-light fs-3"
                  aria-current="page"
                  to={PAGE_URLS.HOME}
                >
                  Offsiede
                </Link>
              </li>
              <li className="nav-item pt-2 mx-2">
                <Link className="nav-link text-light" to={PAGE_URLS.HOME}>
                  Home
                </Link>
              </li>
              <li className="nav-item pt-2">
                <Link className="nav-link text-light" to={PAGE_URLS.GET_ALL_FIXTURES}>
                  Fixtures
                </Link>
              </li>
              <li className="nav-item pt-2">
                <Link
                  className="nav-link text-light"
                  to={PAGE_URLS.GET_ALL_LEAGUES}
                >
                  Leagues
                </Link>
              </li>
              <li className="nav-item pt-2">
                <Link className="nav-link text-light" to={PAGE_URLS.GET_ALL_SEASONS}>
                  Seasons
                </Link>
              </li>
              <li className="nav-item pt-2 dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to={PAGE_URLS.HOME}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul
                  className="dropdown-menu  bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      className="dropdown-item bg-dark text-light"
                      to={PAGE_URLS.GET_ALL_IN_PLAY}
                    >
                      In Play
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-dark text-light"
                      to={PAGE_URLS.GET_ALL_UPCOMING}
                    >
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-dark text-light"
                      to={PAGE_URLS.GET_ALL_COUNTRIES}
                    >
                      Countries
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;

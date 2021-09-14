import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PAGE_URLS } from '../../../Utils/Constants';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      return (
        <div className="container">
          <>
            <h1>Home</h1>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link className="text-dark fs-4 fw-bold" to={PAGE_URLS.HOME}>
                Home
              </Link>
            </div>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_COUNTRIES}
              >
                All Countries
              </Link>
            </div>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_LEAGUES}
              >
                All Leagues
              </Link>
            </div>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_SEASONS}
              >
                All Seasons
              </Link>
            </div>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_FIXTURES}
              >
                All Fixtures
              </Link>
            </div>
            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_IN_PLAY}
              >
                All In Play
              </Link>
            </div>

            <div className="btn btn-info p-3 m-5 text-dark">
              <Link
                className="text-dark fs-4 fw-bold"
                to={PAGE_URLS.GET_ALL_UPCOMING}
              >
                All Upcoming
              </Link>
            </div>
          </>
        </div>
      );  
    }
}
 
export default HomePage;
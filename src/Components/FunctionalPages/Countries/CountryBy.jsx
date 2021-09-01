import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class CountryBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.match.params,
    };
  }
    render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <div className="btn btn-info p-3 m-5 text-dark">
          <Link className="text-dark fs-4 fw-bold" to={PAGE_URLS.HOME}>
            Home
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID.replace(
              ":id",
              this.state.country.by
            )}
          >
            Get country info by country id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_LEAGUES_BY_COUNTRY_ID.replace(
              ":id",
              this.state.country.by
            )}
          >
            Get leagues info by country id
          </Link>
        </div>
      </div>
    );
  }
}

export default CountryBy;

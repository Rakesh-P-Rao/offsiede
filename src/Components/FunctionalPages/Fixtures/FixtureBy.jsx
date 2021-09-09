import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class FixtureBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixture: this.props.match.params,
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
            to={PAGE_URLS.GET_EVENTS_BY_FIXTURE_ID.replace(
              ":id",
              this.state.fixture.by
            )}
          >
            Get events info by fixture id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_STATS_BY_FIXTURE_ID.replace(
              ":id",
              this.state.fixture.by
            )}
          >
            Get stats info by fixture id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_LINEUPS_BY_FIXTURE_ID.replace(
              ":id",
              this.state.fixture.by
            )}
          >
            Get lineups info by fixture id
          </Link>
        </div>
      </div>
    );
  }
}

export default FixtureBy;

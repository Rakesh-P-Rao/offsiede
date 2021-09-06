import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class LeagueBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: this.props.match.params,
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
            to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(
              ":id",
              this.state.league.by
            )}
          >
            Get league info by league id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_SEASON_BY_LEAGUE_ID.replace(
              ":id",
              this.state.league.by
            )}
          >
            Get season info by league id
          </Link>
        </div>
      </div>
    );
  }
}

export default LeagueBy;

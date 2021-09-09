import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class SeasonBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: this.props.match.params,
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
            to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get season info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_FIXTURES_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get fixtures info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_ALL_UPCOMING_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get upcoming info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_ALL_IN_PLAY_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get in-play info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TEAMS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get teams playing in a season info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_PLAYERS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get players playing in a season info by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_SCORERS_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get Top scorers info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_YELLOW_CARDS_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get yellow cards info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_RED_CARDS_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get red cards info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_SUBBED_ON_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get Top subbed on info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_SUBBED_OFF_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get Top subbed off info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_APPEARANCES_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get Top appearances info in a season by season id
          </Link>
        </div>
        <div class="btn btn-info p-3 m-5 text-dark">
          <Link
            className="text-dark fs-4 fw-bold"
            to={PAGE_URLS.GET_TOP_OWN_GOALS_BY_SEASON_ID.replace(
              ":id",
              this.state.season.by
            )}
          >
            Get Top own goals info in a season by season id
          </Link>
        </div>
      </div>
    );
  }
}

export default SeasonBy;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopOwnGoalsBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopOwnGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topOwnGoalsList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopOwnGoals();
  }

  getListOfTopOwnGoals = (id) => {
    getTopOwnGoalsBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topOwnGoalsList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                aria-current="true"
                to={PAGE_URLS.GET_TOP_SCORERS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Top Scorers
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_RED_CARDS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Red Cards
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_YELLOW_CARDS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Yellow Cards
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_APPEARANCES_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Appearances
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_SUBBED_ON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Subbed On
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_SUBBED_OFF_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Subbed Off
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 active"
                to={PAGE_URLS.GET_TOP_OWN_GOALS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Own Goals
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
                to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.topOwnGoalsList.map((togList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{togList.idPlayer}</li>
                    <li class="list-group-item">{togList.playerName}</li>
                    <li class="list-group-item">{togList.tot}</li>
                    <li class="list-group-item">{togList.rank}</li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.HOME}
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default TopOwnGoals;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTeamsPlayingInASeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class TeamsPlayingInASeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsPlayingInASeasonListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getTeamsPlayingInASeasonInfoBySeasonId();
  }

  getTeamsPlayingInASeasonInfoBySeasonId = (id) => {
    getTeamsPlayingInASeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        teamsPlayingInASeasonListBySeasonId: response.data,
        pagination: response.pagination,
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
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                aria-current="true"
                to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Season Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_FIXTURES_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Fixtures
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_ALL_IN_PLAY_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                In play
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_ALL_UPCOMING_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Upcoming
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 active"
                to={PAGE_URLS.GET_TEAMS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_PLAYERS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Players
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_SCORERS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                More Stats
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.teamsPlayingInASeasonListBySeasonId.map((tpiasList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <div className="card-body">
                    <Link
                      class="fw-bold fs-4 text-dark"
                      to={PAGE_URLS.GET_TEAM_BY_TEAM_ID.replace(
                        ":id",
                        tpiasList.id
                      )}
                    >
                      Team Info
                    </Link>
                  </div>  
                  <img
                    src={tpiasList.badgeurl}
                    className="card-img-top"
                    alt="badge dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tpiasList.id}</li>
                    <li class="list-group-item">{tpiasList.name}</li>
                    <li class="list-group-item">{tpiasList.fullName}</li>
                    <li class="list-group-item">{tpiasList.country}</li>
                    <li class="list-group-item">{tpiasList.founded}</li>
                    <li class="list-group-item">{tpiasList.officialPage}</li>
                    <li class="list-group-item">{tpiasList.phone}</li>
                    <li class="list-group-item">{tpiasList.email}</li>
                    <li class="list-group-item">{tpiasList.address}</li>
                    <li class="list-group-item">
                      last five matches form:{tpiasList.form}
                    </li>
                    <li class="list-group-item">
                      {tpiasList.badgeurl}badge url not working{" "}
                    </li>
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

export default TeamsPlayingInASeasonBySeasonId;

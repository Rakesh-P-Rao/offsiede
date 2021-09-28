import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllInPlayBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class InPlayBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlayListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getInPlayInfoBySeasonId();
  }

  getInPlayInfoBySeasonId = (id) => {
    getAllInPlayBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        inPlayListBySeasonId: response.data,
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
                class="nav-link fw-bold fs-4 active"
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
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
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
          {this.state.inPlayListBySeasonId.map((ipList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.GET_STANDINGS_BY_STAGE_ID.replace(
                        ":id",
                        ipList.idStage
                      )}
                    >
                      Standings
                    </Link>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{ipList.id}</li>
                    <li class="list-group-item">{ipList.idCountry}</li>
                    <li class="list-group-item">{ipList.countryName}</li>
                    <li class="list-group-item">{ipList.idLeague}</li>
                    <li class="list-group-item">{ipList.leagueName}</li>
                    <li class="list-group-item">{ipList.idSeason}</li>
                    <li class="list-group-item">{ipList.seasonName}</li>
                    <li class="list-group-item">{ipList.idHome}</li>
                    <li class="list-group-item">{ipList.homeName}</li>
                    <li class="list-group-item">{ipList.idAway}</li>
                    <li class="list-group-item">{ipList.awayName}</li>
                    <li class="list-group-item">{ipList.idStage}</li>
                    <li class="list-group-item">{ipList.idVenue}</li>
                    <li class="list-group-item">{ipList.venueName}</li>
                    <li class="list-group-item">{ipList.date}</li>
                    <li class="list-group-item">{ipList.status}</li>
                    <li class="list-group-item">{ipList.round}</li>
                    <li class="list-group-item">{ipList.attendance}</li>
                    <li class="list-group-item">
                      {ipList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">{ipList.team_home_ET_goals}</li>
                    <li class="list-group-item">{ipList.team_away_ET_goals}</li>
                    <li class="list-group-item">
                      {ipList.team_home_PEN_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_PEN_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_home_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{ipList.elapsed}</li>
                    <li class="list-group-item">{ipList.elapsedPlus}</li>
                    <li class="list-group-item">{ipList.eventsHash}</li>
                    <li class="list-group-item">{ipList.lineupsHash}</li>
                    <li class="list-group-item">{ipList.statsHash}</li>
                    <li class="list-group-item">{ipList.referees}</li>
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

export default InPlayBySeasonId;

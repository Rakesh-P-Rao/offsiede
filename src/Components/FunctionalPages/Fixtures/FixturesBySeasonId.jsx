import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getFixturesBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class FixturesBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixturesListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getFixturesInfoBySeasonId();
  }

  getFixturesInfoBySeasonId = (id) => {
    getFixturesBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        fixturesListBySeasonId: response.data,
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
                class="nav-link fw-bold fs-4 active"
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
          {this.state.fixturesListBySeasonId.map((fList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{fList.id}</li>
                    <li class="list-group-item">{fList.idCountry}</li>
                    <li class="list-group-item">{fList.countryName}</li>
                    <li class="list-group-item">{fList.idLeague}</li>
                    <li class="list-group-item">{fList.leagueName}</li>
                    <li class="list-group-item">{fList.idSeason}</li>
                    <li class="list-group-item">{fList.seasonName}</li>
                    <li class="list-group-item">{fList.idHome}</li>
                    <li class="list-group-item">{fList.homeName}</li>
                    <li class="list-group-item">{fList.idAway}</li>
                    <li class="list-group-item">{fList.awayName}</li>
                    <li class="list-group-item">{fList.idStage}</li>
                    <li class="list-group-item">{fList.idVenue}</li>
                    <li class="list-group-item">{fList.venueName}</li>
                    <li class="list-group-item">{fList.date}</li>
                    <li class="list-group-item">{fList.status}</li>
                    <li class="list-group-item">{fList.round}</li>
                    <li class="list-group-item">{fList.attendance}</li>
                    <li class="list-group-item">
                      {fList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">{fList.team_home_ET_goals}</li>
                    <li class="list-group-item">{fList.team_away_ET_goals}</li>
                    <li class="list-group-item">{fList.team_home_PEN_goals}</li>
                    <li class="list-group-item">{fList.team_away_PEN_goals}</li>
                    <li class="list-group-item">
                      {fList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_home_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{fList.elapsed}</li>
                    <li class="list-group-item">{fList.elapsedPlus}</li>
                    <li class="list-group-item">{fList.eventsHash}</li>
                    <li class="list-group-item">{fList.lineupsHash}</li>
                    <li class="list-group-item">{fList.statsHash}</li>
                    <li class="list-group-item">
                      fList.referees will give refree array
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

export default FixturesBySeasonId;

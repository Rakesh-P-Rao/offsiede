import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllUpcomingBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class UpcomingBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getUpcomingInfoBySeasonId();
  }

  getUpcomingInfoBySeasonId = (id) => {
    getAllUpcomingBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        upcomingListBySeasonId: response.data,
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
                class="nav-link fw-bold fs-4 active"
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
          {this.state.upcomingListBySeasonId.map((uList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{uList.id}</li>
                    <li class="list-group-item">{uList.idCountry}</li>
                    <li class="list-group-item">{uList.countryName}</li>
                    <li class="list-group-item">{uList.idLeague}</li>
                    <li class="list-group-item">{uList.leagueName}</li>
                    <li class="list-group-item">{uList.idSeason}</li>
                    <li class="list-group-item">{uList.seasonName}</li>
                    <li class="list-group-item">{uList.idHome}</li>
                    <li class="list-group-item">{uList.homeName}</li>
                    <li class="list-group-item">{uList.idAway}</li>
                    <li class="list-group-item">{uList.awayName}</li>
                    <li class="list-group-item">{uList.idStage}</li>
                    <li class="list-group-item">{uList.idVenue}</li>
                    <li class="list-group-item">{uList.venueName}</li>
                    <li class="list-group-item">{uList.date}</li>
                    <li class="list-group-item">{uList.status}</li>
                    <li class="list-group-item">{uList.round}</li>
                    <li class="list-group-item">{uList.attendance}</li>
                    <li class="list-group-item">
                      {uList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {uList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">{uList.team_home_ET_goals}</li>
                    <li class="list-group-item">{uList.team_away_ET_goals}</li>
                    <li class="list-group-item">{uList.team_home_PEN_goals}</li>
                    <li class="list-group-item">{uList.team_away_PEN_goals}</li>
                    <li class="list-group-item">
                      {uList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {uList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {uList.team_home_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {uList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{uList.elapsed}</li>
                    <li class="list-group-item">{uList.elapsedPlus}</li>
                    <li class="list-group-item">{uList.eventsHash}</li>
                    <li class="list-group-item">{uList.lineupsHash}</li>
                    <li class="list-group-item">{uList.statsHash}</li>
                    <li class="list-group-item">{uList.referees}</li>
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

export default UpcomingBySeasonId;

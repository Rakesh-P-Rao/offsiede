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
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={1}>Season: </td>
                    <td colSpan={1}>{uList.seasonName}</td>
                    <td colSpan={1}>League: </td>
                    <td colSpan={1}>{uList.leagueName}</td>
                    <td colSpan={1}>Country: </td>
                    <td colSpan={1}>{uList.countryName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home: </td>
                    <td colSpan={2}>{uList.homeName}</td>
                    <td colSpan={1}>Away: </td>
                    <td colSpan={2}>{uList.awayName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Venue: </td>
                    <td colSpan={2}>{uList.venueName}</td>
                    <td colSpan={1}>Date: </td>
                    <td colSpan={2}>{uList.date}</td>
                  </tr>
                  <tr>
                    <td>Status: </td>
                    <td>{uList.status}</td>
                    <td>Round: </td>
                    <td>{uList.round}</td>
                    <td>Attendance: </td>
                    <td>{uList.attendance}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home goals: </td>
                    <td colSpan={2}>{uList.team_home_90min_goals}</td>
                    <td colSpan={1}>Away goals: </td>
                    <td colSpan={2}>{uList.team_away_90min_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home extra time goals: </td>
                    <td colSpan={2}>{uList.team_home_ET_goals}</td>
                    <td colSpan={1}>Away extra time goals: </td>
                    <td colSpan={2}>{uList.team_away_ET_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home penalty goals: </td>
                    <td colSpan={2}>{uList.team_home_PEN_goals}</td>
                    <td colSpan={1}>Away penalty goals: </td>
                    <td colSpan={2}>{uList.team_away_PEN_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home first half goals: </td>
                    <td colSpan={2}>{uList.team_home_1stHalf_goals}</td>
                    <td colSpan={1}>Away first half goals: </td>
                    <td colSpan={2}>{uList.team_away_1stHalf_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home second half goals: </td>
                    <td colSpan={2}>{uList.team_home_2ndHalf_goals}</td>
                    <td colSpan={1}>Away second half goals: </td>
                    <td colSpan={2}>{uList.team_away_2ndHalf_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(
                          ":id",
                          uList.idLeague
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        &nbsp; League Info
                      </Link>
                    </td>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                          ":id",
                          uList.idSeason
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        &nbsp;Season Info
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default UpcomingBySeasonId;

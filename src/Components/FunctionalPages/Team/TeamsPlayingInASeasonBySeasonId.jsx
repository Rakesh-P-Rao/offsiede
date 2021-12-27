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
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={6}>
                      <img src={tpiasList.badgeurl} alt="badge url" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Team: </td>
                    <td colSpan={2}>{tpiasList.name}</td>
                    <td colSpan={1}>Full Name: </td>
                    <td colSpan={2}>{tpiasList.fullName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Country: </td>
                    <td colSpan={2}>{tpiasList.country}</td>
                    <td colSpan={1}>Founded: </td>
                    <td colSpan={2}>{tpiasList.founded}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Official Page: </td>
                    <td colSpan={2}>{tpiasList.officialPage}</td>
                    <td colSpan={1}>Phone: </td>
                    <td colSpan={2}>{tpiasList.phone}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Email: </td>
                    <td colSpan={2}>{tpiasList.email}</td>
                    <td colSpan={1}>Address: </td>
                    <td colSpan={2}>{tpiasList.address}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_ALL_FIXTURES}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-left-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        &nbsp;All Fixtures
                      </Link>
                    </td>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_TEAM_BY_TEAM_ID.replace(
                          ":id",
                          tpiasList.id
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
                        &nbsp;Team Info
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

export default TeamsPlayingInASeasonBySeasonId;

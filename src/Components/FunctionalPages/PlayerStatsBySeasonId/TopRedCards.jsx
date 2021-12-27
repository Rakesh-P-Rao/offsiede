import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopRedCardsBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopRedCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRedCardsList: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopRedCards();
  }

  getListOfTopRedCards = (id) => {
    getTopRedCardsBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topRedCardsList: response.data,
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
                class="nav-link fw-bold fs-5 active"
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
                class="nav-link fw-bold fs-5 btn btn-outline-dark"
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
          {this.state.topRedCardsList.map((trcList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={2}>Player: </td>
                    <td colSpan={6}>{trcList.playerName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Total Goals: </td>
                    <td colSpan={2}>{trcList.tot}</td>
                    <td colSpan={1}>Rank: </td>
                    <td colSpan={2}>{trcList.rank}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                          ":id",
                          this.state.seasonId.id
                        )}
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
                        &nbsp;Season Info
                      </Link>
                    </td>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_PLAYER_BY_PLAYER_ID.replace(
                          ":id",
                          trcList.idPlayer
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
                        &nbsp;Player Info
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

export default TopRedCards;

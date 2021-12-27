import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getSeasonByLeagueId } from "../FunctionalApiActions/Leagues/faaLeagues";

class SeasonByLeagueId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonListByLeagueId: [],
      pagination: {},
      leagueId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getSeasonInfoByLeagueId();
  }

  getSeasonInfoByLeagueId = (id) => {
    getSeasonByLeagueId(this.state.leagueId.id).then((response) => {
      this.setState({
        seasonListByLeagueId: response.data,
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
                class="nav-link fw-bold fs-4 text-dark"
                aria-current="true"
                to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(
                  ":id",
                  this.state.leagueId.id
                )}
              >
                League Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_SEASON_BY_LEAGUE_ID.replace(
                  ":id",
                  this.state.leagueId.id
                )}
              >
                Season Info
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.seasonListByLeagueId.map((sList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={2}>League: </td>
                    <td colSpan={2}>{sList.leagueName}</td>
                  </tr>
                  <tr>
                    <td>Start: </td>
                    <td>{sList.start}</td>
                    <td>End: </td>
                    <td>{sList.end}</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_ALL_LEAGUES}
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
                        &nbsp; All Leagues
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

export default SeasonByLeagueId;

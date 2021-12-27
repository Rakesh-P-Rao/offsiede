import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getStatsByFixtureId } from "../FunctionalApiActions/Fixtures/faaFixtures";

class StatsByFixtureId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsListByFixtureId: [],
      pagination: {},
      fixtureId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStatsInfoByFixtureId();
  }

  getStatsInfoByFixtureId = (id) => {
    getStatsByFixtureId(this.state.fixtureId.id).then((response) => {
      this.setState({
        statsListByFixtureId: response.data,
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
                to={PAGE_URLS.GET_EVENTS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Events Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_STATS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Stats Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_LINEUPS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Lineups Info
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.statsListByFixtureId.map((sList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={2}>Team: </td>
                    <td colSpan={4}>{sList.teamName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Label: </td>
                    <td colSpan={2}>{sList.label}</td>
                    <td colSpan={1}>Value: </td>
                    <td colSpan={2}>{sList.value}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                          ":id",
                          sList.idSeason
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
                        &nbsp; Season Info
                      </Link>
                    </td>
                    <td colSpan={2}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_TEAM_BY_TEAM_ID.replace(
                          ":id",
                          sList.idTeam
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
                    <td colSpan={2}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_FIXTURE_BY_FIXTURE_ID.replace(
                          ":id",
                          sList.idFixture
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
                        &nbsp;Fixture Info
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

export default StatsByFixtureId;

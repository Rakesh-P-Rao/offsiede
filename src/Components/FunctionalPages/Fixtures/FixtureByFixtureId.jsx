import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getFixtureByFixtureId } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class FixtureByFixtureId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtureList: [],
      pagination: {},
      fixtureId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfFixtures();
  }

  getListOfFixtures = (id) => {
    getFixtureByFixtureId(this.state.fixtureId.id).then((response) => {
      this.setState({
        fixtureList: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Fixtures Info</h1>
        <div className="row">
          {this.state.fixtureList.map((fList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={1}>Season: </td>
                    <td colSpan={2}>{fList.seasonName}</td>
                    <td colSpan={1}>League: </td>
                    <td colSpan={2}>{fList.leagueName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home: </td>
                    <td colSpan={2}>{fList.homeName}</td>
                    <td colSpan={1}>Away: </td>
                    <td colSpan={2}>{fList.awayName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Venue: </td>
                    <td colSpan={2}>{fList.venueName}</td>
                    <td colSpan={1}>Date: </td>
                    <td colSpan={2}>{fList.date}</td>
                  </tr>
                  <tr>
                    <td>Status: </td>
                    <td>{fList.status}</td>
                    <td>Round: </td>
                    <td>{fList.round}</td>
                    <td>Attendance: </td>
                    <td>{fList.attendance}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home goals: </td>
                    <td colSpan={2}>{fList.team_home_90min_goals}</td>
                    <td colSpan={1}>Away goals: </td>
                    <td colSpan={2}>{fList.team_away_90min_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home extra time goals: </td>
                    <td colSpan={2}>{fList.team_home_ET_goals}</td>
                    <td colSpan={1}>Away extra time goals: </td>
                    <td colSpan={2}>{fList.team_away_ET_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home penalty goals: </td>
                    <td colSpan={2}>{fList.team_home_PEN_goals}</td>
                    <td colSpan={1}>Away penalty goals: </td>
                    <td colSpan={2}>{fList.team_away_PEN_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home first half goals: </td>
                    <td colSpan={2}>{fList.team_home_1stHalf_goals}</td>
                    <td colSpan={1}>Away first half goals: </td>
                    <td colSpan={2}>{fList.team_away_1stHalf_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Home second half goals: </td>
                    <td colSpan={2}>{fList.team_home_2ndHalf_goals}</td>
                    <td colSpan={1}>Away second half goals: </td>
                    <td colSpan={2}>{fList.team_away_2ndHalf_goals}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(
                          ":id",
                          fList.idLeague
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
                          fList.idSeason
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

export default FixtureByFixtureId;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTeamByTeamId } from "../FunctionalApiActions/Teams/faaTeams";

class TeamByTeamId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamListByTeamId: [],
      pagination: {},
      teamId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getTeamInfoByTeamId();
  }

  getTeamInfoByTeamId = (id) => {
    getTeamByTeamId(this.state.teamId.id).then(
      (response) => {
        this.setState({
          teamListByTeamId: response.data,
          pagination: response.pagination,
        });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 active"
                to={PAGE_URLS.GET_TEAM_BY_TEAM_ID.replace(
                  ":id",
                  this.state.teamId.id
                )}
              >
                Team Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_ALL_FIXTURES}
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.teamListByTeamId.map((tList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={6}>
                      <img src={tList.badgeurl} alt="badge url" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Team: </td>
                    <td colSpan={2}>{tList.name}</td>
                    <td colSpan={1}>Full Name: </td>
                    <td colSpan={2}>{tList.fullName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Country: </td>
                    <td colSpan={2}>{tList.country}</td>
                    <td colSpan={1}>Founded: </td>
                    <td colSpan={2}>{tList.founded}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Official Page: </td>
                    <td colSpan={2}>{tList.officialPage}</td>
                    <td colSpan={1}>Phone: </td>
                    <td colSpan={2}>{tList.phone}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Email: </td>
                    <td colSpan={2}>{tList.email}</td>
                    <td colSpan={1}>Address: </td>
                    <td colSpan={2}>{tList.address}</td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
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

export default TeamByTeamId;

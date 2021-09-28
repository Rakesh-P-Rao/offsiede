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
                to={PAGE_URLS.HOME}
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.teamListByTeamId.map((tList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={tList.badgeurl}
                    className="card-img-top"
                    alt="badge dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tList.id}</li>
                    <li class="list-group-item">{tList.name}</li>
                    <li class="list-group-item">{tList.fullName}</li>
                    <li class="list-group-item">{tList.country}</li>
                    <li class="list-group-item">{tList.founded}</li>
                    <li class="list-group-item">{tList.officialPage}</li>
                    <li class="list-group-item">{tList.phone}</li>
                    <li class="list-group-item">{tList.email}</li>
                    <li class="list-group-item">{tList.address}</li>
                    <li class="list-group-item">
                      last five matches form:{tList.form}
                    </li>
                    <li class="list-group-item">
                      {tList.badgeurl}badge url not working{" "}
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

export default TeamByTeamId;

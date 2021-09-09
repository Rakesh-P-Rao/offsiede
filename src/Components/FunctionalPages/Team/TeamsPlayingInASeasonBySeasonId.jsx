import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTeamsPlayingInASeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class TeamsPlayingInASeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsPlayingInASeasonListBySeasonId: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getTeamsPlayingInASeasonInfoBySeasonId();
  }

  getTeamsPlayingInASeasonInfoBySeasonId = (id) => {
    getTeamsPlayingInASeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        teamsPlayingInASeasonListBySeasonId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">
          Teams Playing In A Season By Season Id Info
        </h1>
        <div className="row">
          {this.state.teamsPlayingInASeasonListBySeasonId.map((tpiasList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={tpiasList.badgeurl}
                    className="card-img-top"
                    alt="badge dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tpiasList.id}</li>
                    <li class="list-group-item">{tpiasList.name}</li>
                    <li class="list-group-item">{tpiasList.fullName}</li>
                    <li class="list-group-item">{tpiasList.country}</li>
                    <li class="list-group-item">{tpiasList.founded}</li>
                    <li class="list-group-item">{tpiasList.officialPage}</li>
                    <li class="list-group-item">{tpiasList.phone}</li>
                    <li class="list-group-item">{tpiasList.email}</li>
                    <li class="list-group-item">{tpiasList.address}</li>
                    <li class="list-group-item">
                      last five matches form:{tpiasList.form}
                    </li>
                    <li class="list-group-item">{tpiasList.badgeurl}badge url not working </li>
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

export default TeamsPlayingInASeasonBySeasonId;

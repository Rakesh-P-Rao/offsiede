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
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{sList.id}</li>
                    <li class="list-group-item">{sList.idLeague}</li>
                    <li class="list-group-item">{sList.leagueName}</li>
                    <li class="list-group-item">{sList.start}</li>
                    <li class="list-group-item">{sList.end}</li>
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

export default SeasonByLeagueId;

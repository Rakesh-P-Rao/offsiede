import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getSeasonByLeagueId } from "../FunctionalApiActions/Leagues/faaLeagues";

class SeasonByLeagueId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonListByLeagueId: [],
      leagueId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getSeasonInfoByLeagueId();
  }

  getSeasonInfoByLeagueId = (id) => {
    getSeasonByLeagueId(this.state.leagueId.id).then((response) => {
      this.setState({
        seasonListByLeagueId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Season Info</h1>
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

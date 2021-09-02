import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getLeagueByLeagueId } from "../FunctionalApiActions/Leagues/faaLeagues";

class LeagueByLeagueId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaguesListByLeagueId: [],
      leagueId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getLeaguesInfoByLeagueId();
  }

  getLeaguesInfoByLeagueId = (id) => {
    getLeagueByLeagueId(this.state.leagueId.id).then((response) => {
      this.setState({
        leaguesListByLeagueId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">League Info</h1>
        <div className="row">
          {this.state.leaguesListByLeagueId.map((lList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{lList.id}</li>
                    <li class="list-group-item">{lList.idCountry}</li>
                    <li class="list-group-item">{lList.countryName}</li>
                    <li class="list-group-item">{lList.name}</li>
                    <li class="list-group-item">
                      {lList.nationalLeague} nationalLeague boolean value
                    </li>
                    <li class="list-group-item">
                      {lList.clubsLeague} clubsLeague boolean value
                    </li>
                    <li class="list-group-item fw-bold">{lList.name}</li>
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

export default LeagueByLeagueId;

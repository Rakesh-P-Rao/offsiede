import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllInPlayBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class InPlayBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlayListBySeasonId: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getInPlayInfoBySeasonId();
  }

  getInPlayInfoBySeasonId = (id) => {
    getAllInPlayBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        inPlayListBySeasonId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">In Play By Season Id Info</h1>
        <div className="row">
          {this.state.inPlayListBySeasonId.map((ipList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{ipList.id}</li>
                    <li class="list-group-item">{ipList.idCountry}</li>
                    <li class="list-group-item">{ipList.countryName}</li>
                    <li class="list-group-item">{ipList.idLeague}</li>
                    <li class="list-group-item">{ipList.leagueName}</li>
                    <li class="list-group-item">{ipList.idSeason}</li>
                    <li class="list-group-item">{ipList.seasonName}</li>
                    <li class="list-group-item">{ipList.idHome}</li>
                    <li class="list-group-item">{ipList.homeName}</li>
                    <li class="list-group-item">{ipList.idAway}</li>
                    <li class="list-group-item">{ipList.awayName}</li>
                    <li class="list-group-item">{ipList.idStage}</li>
                    <li class="list-group-item">{ipList.idVenue}</li>
                    <li class="list-group-item">{ipList.venueName}</li>
                    <li class="list-group-item">{ipList.date}</li>
                    <li class="list-group-item">{ipList.status}</li>
                    <li class="list-group-item">{ipList.round}</li>
                    <li class="list-group-item">{ipList.attendance}</li>
                    <li class="list-group-item">
                      {ipList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">{ipList.team_home_ET_goals}</li>
                    <li class="list-group-item">{ipList.team_away_ET_goals}</li>
                    <li class="list-group-item">{ipList.team_home_PEN_goals}</li>
                    <li class="list-group-item">{ipList.team_away_PEN_goals}</li>
                    <li class="list-group-item">
                      {ipList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_home_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {ipList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{ipList.elapsed}</li>
                    <li class="list-group-item">{ipList.elapsedPlus}</li>
                    <li class="list-group-item">{ipList.eventsHash}</li>
                    <li class="list-group-item">{ipList.lineupsHash}</li>
                    <li class="list-group-item">{ipList.statsHash}</li>
                    <li class="list-group-item">{ipList.referees}</li>
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

export default InPlayBySeasonId;

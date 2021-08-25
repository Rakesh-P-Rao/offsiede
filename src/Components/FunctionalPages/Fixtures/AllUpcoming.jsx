import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllUpcomingList } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class AllUpcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUpcomingList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfUpcoming();
  }

  getAllListOfUpcoming = () => {
    getAllUpcomingList().then((response) => {
      this.setState({
        allUpcomingList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Upcoming</h1>
        <div className="row">
          {this.state.allUpcomingList.map((auList) => (
            <>
              <>
                <div className="col-3">
                  <div className="card h-90 my-3">
                    <img
                      src={auList.flag}
                      className="card-img-top"
                      alt="player dp"
                    />
                    <div class="card-body"></div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{auList.id}</li>
                      <li class="list-group-item">{auList.idCountry}</li>
                      <li class="list-group-item">{auList.countryName}</li>
                      <li class="list-group-item">{auList.idLeague}</li>
                      <li class="list-group-item">{auList.leagueName}</li>
                      <li class="list-group-item">{auList.idSeason}</li>
                      <li class="list-group-item">{auList.seasonName}</li>
                      <li class="list-group-item">{auList.idHome}</li>
                      <li class="list-group-item">{auList.homeName}</li>
                      <li class="list-group-item">{auList.idAway}</li>
                      <li class="list-group-item">{auList.awayName}</li>
                      <li class="list-group-item">{auList.idStage}</li>
                      <li class="list-group-item">{auList.idVenue}</li>
                      <li class="list-group-item">{auList.venueName}</li>
                      <li class="list-group-item">{auList.date}</li>
                      <li class="list-group-item">{auList.status}</li>
                      <li class="list-group-item">{auList.round}</li>
                      <li class="list-group-item">{auList.attendance}</li>
                      <li class="list-group-item">
                        {auList.team_home_90min_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_away_90min_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_home_ET_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_away_ET_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_home_PEN_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_away_PEN_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_home_1stHalf_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_away_1stHalf_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_home_2ndHalf_goals}
                      </li>
                      <li class="list-group-item">
                        {auList.team_away_2ndHalf_goals}
                      </li>
                      <li class="list-group-item">{auList.elapsed}</li>
                      <li class="list-group-item">{auList.elapsedPlus}</li>
                      <li class="list-group-item">{auList.eventsHash}</li>
                      <li class="list-group-item">{auList.lineupsHash}</li>
                      <li class="list-group-item">{auList.statsHash}</li>
                      <li class="list-group-item">
                        refree array object is sent
                      </li>
                    </ul>
                    <div class="card-body">
                      <Link
                        className="text-dark fs-4 fw-bold"
                        to={PAGE_URLS.HOME}
                      >
                        {auList.leagueName}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default AllUpcoming;

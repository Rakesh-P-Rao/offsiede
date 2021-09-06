import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllFixturesList } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class AllFixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFixtureList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfFixtures();
  }

  getAllListOfFixtures = () => {
    getAllFixturesList().then((response) => {
      this.setState({
        allFixtureList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Fixtures</h1>
        <div className="row">
          {this.state.allFixtureList.map((fList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{fList.id}</li>
                    <li class="list-group-item">{fList.idCountry}</li>
                    <li class="list-group-item">{fList.countryName}</li>
                    <li class="list-group-item">{fList.idLeague}</li>
                    <li class="list-group-item">{fList.leagueName}</li>
                    <li class="list-group-item">{fList.idSeason}</li>
                    <li class="list-group-item">{fList.seasonName}</li>
                    <li class="list-group-item">{fList.idHome}</li>
                    <li class="list-group-item">{fList.homeName}</li>
                    <li class="list-group-item">{fList.idAway}</li>
                    <li class="list-group-item">{fList.awayName}</li>
                    <li class="list-group-item">{fList.idStage}</li>
                    <li class="list-group-item">{fList.idVenue}</li>
                    <li class="list-group-item">{fList.venueName}</li>
                    <li class="list-group-item">{fList.date}</li>
                    <li class="list-group-item">{fList.status}</li>
                    <li class="list-group-item">{fList.round}</li>
                    <li class="list-group-item">{fList.attendance}</li>
                    <li class="list-group-item">
                      {fList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">{fList.team_home_ET_goals}</li>
                    <li class="list-group-item">{fList.team_away_ET_goals}</li>
                    <li class="list-group-item">{fList.team_home_PEN_goals}</li>
                    <li class="list-group-item">{fList.team_away_PEN_goals}</li>
                    <li class="list-group-item">
                      {fList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {fList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{fList.elapsed}</li>
                    <li class="list-group-item">{fList.elapsedPlus}</li>
                    <li class="list-group-item">{fList.eventsHash}</li>
                    <li class="list-group-item">{fList.lineupsHash}</li>
                    <li class="list-group-item">{fList.statsHash}</li>
                    <li class="list-group-item">
                      refrees array is there but not rendered
                    </li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.HOME}
                    >
                      {fList.id}
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

export default AllFixtures;

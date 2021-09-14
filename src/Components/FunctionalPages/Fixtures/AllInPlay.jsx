import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllInPlayList } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class AllInPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allInPlayList: [],
      pagination: {},
    };
  }

  componentDidMount() {
    this.getAllListOfAllInPlay();
  }

  getAllListOfAllInPlay = () => {
    getAllInPlayList().then((response) => {
      this.setState({
        allInPlayList: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All In Play</h1>
        <div className="row">
          {this.state.allInPlayList.map((aipList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={aipList.flag}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <div class="card-body"></div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{aipList.id}</li>
                    <li class="list-group-item">{aipList.idCountry}</li>
                    <li class="list-group-item">{aipList.countryName}</li>
                    <li class="list-group-item">{aipList.idLeague}</li>
                    <li class="list-group-item">{aipList.leagueName}</li>
                    <li class="list-group-item">{aipList.idSeason}</li>
                    <li class="list-group-item">{aipList.seasonName}</li>
                    <li class="list-group-item">{aipList.idHome}</li>
                    <li class="list-group-item">{aipList.homeName}</li>
                    <li class="list-group-item">{aipList.idAway}</li>
                    <li class="list-group-item">{aipList.awayName}</li>
                    <li class="list-group-item">{aipList.idStage}</li>
                    <li class="list-group-item">{aipList.idVenue}</li>
                    <li class="list-group-item">{aipList.venueName}</li>
                    <li class="list-group-item">{aipList.date}</li>
                    <li class="list-group-item">{aipList.status}</li>
                    <li class="list-group-item">{aipList.round}</li>
                    <li class="list-group-item">{aipList.attendance}</li>
                    <li class="list-group-item">
                      {aipList.team_home_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_away_90min_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_home_ET_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_away_ET_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_home_PEN_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_away_PEN_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_home_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_away_1stHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_home_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">
                      {aipList.team_away_2ndHalf_goals}
                    </li>
                    <li class="list-group-item">{aipList.elapsed}</li>
                    <li class="list-group-item">{aipList.elapsedPlus}</li>
                    <li class="list-group-item">{aipList.eventsHash}</li>
                    <li class="list-group-item">{aipList.lineupsHash}</li>
                    <li class="list-group-item">{aipList.statsHash}</li>
                    <li class="list-group-item">refree array object is sent</li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.HOME}
                    >
                      {aipList.leagueName}
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

export default AllInPlay;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllInPlayList } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class AllInPlayHomePage extends Component {
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
        <div className="row">
          {this.state.allInPlayList.map((aipList) => (
            <>
              <div className="col-4">
                <div className="card my-3" style={{ height: "260px" }}>
                  <div className="card-body pb-1">
                    <div className="row ">
                      <div className="col">
                        <h5 class="card-subtitle  mb-3 text-muted">
                          {aipList.leagueName}
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h4 class="card-title">{aipList.homeName}</h4>
                      </div>
                      <div className="col">
                        <h4 class="card-title fw-bolder fs-1 pt-0 mt-0">
                          {aipList.team_home_90min_goals}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h4 class="card-title">{aipList.awayName}</h4>
                      </div>
                      <div className="col">
                        <h4 class="card-title fw-bolder fs-1 pt-0 mt-0">
                          {aipList.team_away_90min_goals}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer ">
                    <Link
                      to={PAGE_URLS.GET_ALL_IN_PLAY_BY_SEASON_ID.replace(
                        ":id",
                        aipList.idSeason
                      )}
                      className="text-dark btn"
                    >
                      More Info
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

export default AllInPlayHomePage;

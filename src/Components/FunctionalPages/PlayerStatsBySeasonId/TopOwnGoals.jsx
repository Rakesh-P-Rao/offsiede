import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopOwnGoalsBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopOwnGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topOwnGoalsList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopOwnGoals();
  }

  getListOfTopOwnGoals = (id) => {
    getTopOwnGoalsBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topOwnGoalsList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Own Goals</h1>
        <div className="row">
          {this.state.topOwnGoalsList.map((togList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{togList.idPlayer}</li>
                    <li class="list-group-item">{togList.playerName}</li>
                    <li class="list-group-item">{togList.tot}</li>
                    <li class="list-group-item">{togList.rank}</li>
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

export default TopOwnGoals;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopScorersBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopScorers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topScorersList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopScorers();
  }

  getListOfTopScorers = (id) => {
    getTopScorersBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topScorersList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Scorers</h1>
        <div className="row">
          {this.state.topScorersList.map((tsList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tsList.idPlayer}</li>
                    <li class="list-group-item">{tsList.playerName}</li>
                    <li class="list-group-item">{tsList.totalGoals}</li>
                    <li class="list-group-item">{tsList.penaltiesScored}</li>
                    <li class="list-group-item">{tsList.penaltiesMissed}</li>
                    <li class="list-group-item">{tsList.rank}</li>
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

export default TopScorers;

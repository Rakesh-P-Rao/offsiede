import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopRedCardsBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopRedCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRedCardsList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopRedCards();
  }

  getListOfTopRedCards = (id) => {
    getTopRedCardsBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topRedCardsList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Red Cards</h1>
        <div className="row">
          {this.state.topRedCardsList.map((trcList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{trcList.idPlayer}</li>
                    <li class="list-group-item">{trcList.playerName}</li>
                    <li class="list-group-item">{trcList.tot}</li>
                    <li class="list-group-item">{trcList.rank}</li>
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

export default TopRedCards;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopYellowCardsBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopYellowCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topYellowCardsList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopYellowCards();
  }

  getListOfTopYellowCards = (id) => {
    getTopYellowCardsBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topYellowCardsList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Yellow Cards</h1>
        <div className="row">
          {this.state.topYellowCardsList.map((tycList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tycList.idPlayer}</li>
                    <li class="list-group-item">{tycList.playerName}</li>
                    <li class="list-group-item">{tycList.tot}</li>
                    <li class="list-group-item">{tycList.rank}</li>
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

export default TopYellowCards;

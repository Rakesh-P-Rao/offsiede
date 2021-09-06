import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopApperancesBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopApperances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topAppearancesList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopAppearances();
  }

  getListOfTopAppearances = (id) => {
    getTopApperancesBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topAppearancesList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Apperances</h1>
        <div className="row">
          {this.state.topAppearancesList.map((taList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{taList.idPlayer}</li>
                    <li class="list-group-item">{taList.playerName}</li>
                    <li class="list-group-item">{taList.tot}</li>
                    <li class="list-group-item">{taList.rank}</li>
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

export default TopApperances;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getTopSubbedOnBySeasonId } from "./../FunctionalApiActions/Seasons/faaSeasons";

class TopSubbedOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSubbedOnList: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getListOfTopSubbedOn();
  }

  getListOfTopSubbedOn = (id) => {
    getTopSubbedOnBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        topSubbedOnList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Top Subbed On</h1>
        <div className="row">
          {this.state.topSubbedOnList.map((tsoList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{tsoList.idPlayer}</li>
                    <li class="list-group-item">{tsoList.playerName}</li>
                    <li class="list-group-item">{tsoList.tot}</li>
                    <li class="list-group-item">{tsoList.rank}</li>
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

export default TopSubbedOn;

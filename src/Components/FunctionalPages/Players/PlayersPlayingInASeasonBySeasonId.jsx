import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getPlayersPlayingInASeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class PlayersPlayingInASeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersPlayingInASeasonListBySeasonId: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getPlayersPlayingInASeasonInfoBySeasonId();
  }

  getPlayersPlayingInASeasonInfoBySeasonId = (id) => {
    getPlayersPlayingInASeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        playersPlayingInASeasonListBySeasonId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">
          Players Playing In A Season By Season Id Info
        </h1>
        <div className="row">
          {this.state.playersPlayingInASeasonListBySeasonId.map((ppiasList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={ppiasList.photoURL}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{ppiasList.id}</li>
                    <li class="list-group-item">{ppiasList.name}</li>
                    <li class="list-group-item">{ppiasList.nationalities}</li>
                    <li class="list-group-item">{ppiasList.fullName}</li>
                    <li class="list-group-item">{ppiasList.pob}</li>
                    <li class="list-group-item">{ppiasList.dob}</li>
                    <li class="list-group-item">{ppiasList.height}</li>
                    <li class="list-group-item">{ppiasList.weight}</li>
                    <li class="list-group-item">{ppiasList.foot}</li>
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

export default PlayersPlayingInASeasonBySeasonId;

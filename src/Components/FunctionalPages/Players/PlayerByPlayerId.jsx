import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getPlayerByPlayerId } from "../FunctionalApiActions/Players/faaPlayers";

class PlayerByPlayerId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersByPlayerId: [],
      pagination: {},
      playerId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getPlayerInfoByPlayerId();
  }

  getPlayerInfoByPlayerId = (id) => {
    getPlayerByPlayerId(this.state.playerId.id).then(
      (response) => {
        this.setState({
          playersByPlayerId: response.data,
          pagination: response.pagination,
        });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 active"
                aria-current="true"
                to={PAGE_URLS.GET_PLAYER_BY_PLAYER_ID.replace(
                  ":id",
                  this.state.playerId.id
                )}
              >
                Player Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.HOME}
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.playersByPlayerId.map((pList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={pList.photoURL}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{pList.id}</li>
                    <li class="list-group-item">{pList.name}</li>
                    <li class="list-group-item">{pList.nationalities}</li>
                    <li class="list-group-item">{pList.fullName}</li>
                    <li class="list-group-item">{pList.pob}</li>
                    <li class="list-group-item">{pList.dob}</li>
                    <li class="list-group-item">{pList.height}</li>
                    <li class="list-group-item">{pList.weight}</li>
                    <li class="list-group-item">{pList.foot}</li>
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

export default PlayerByPlayerId;

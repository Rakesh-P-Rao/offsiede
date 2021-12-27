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
    getPlayerByPlayerId(this.state.playerId.id).then((response) => {
      this.setState({
        playersByPlayerId: response.data,
        pagination: response.pagination,
      });
    });
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
                to={PAGE_URLS.GET_ALL_FIXTURES}
              >
                Back
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.playersByPlayerId.map((pList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={6}>
                      <img src={pList.photoURL} alt="photos url" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Player: </td>
                    <td colSpan={2}>{pList.name}</td>
                    <td colSpan={1}>Full Name: </td>
                    <td colSpan={2}>{pList.fullName}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Nationalities: </td>
                    <td colSpan={2}>{pList.nationalities}</td>
                    <td colSpan={1}>Foot: </td>
                    <td colSpan={2}>{pList.foot}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Height: </td>
                    <td colSpan={2}>{pList.height}</td>
                    <td colSpan={1}>Weight: </td>
                    <td colSpan={2}>{pList.weight}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Place of Birth: </td>
                    <td colSpan={2}>{pList.pob}</td>
                    <td colSpan={1}>Date Of Birth: </td>
                    <td colSpan={2}>{pList.dob}</td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_ALL_FIXTURES}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-left-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        &nbsp;All Fixtures
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default PlayerByPlayerId;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getPlayersPlayingInASeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class PlayersPlayingInASeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersPlayingInASeasonListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getPlayersPlayingInASeasonInfoBySeasonId();
  }

  getPlayersPlayingInASeasonInfoBySeasonId = (id) => {
    getPlayersPlayingInASeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        playersPlayingInASeasonListBySeasonId: response.data,
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
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                aria-current="true"
                to={PAGE_URLS.GET_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Season Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_FIXTURES_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Fixtures
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_ALL_IN_PLAY_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                In play
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_ALL_UPCOMING_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Upcoming
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_TEAMS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 active"
                to={PAGE_URLS.GET_PLAYERS_PLAYING_IN_A_SEASON_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                Players
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
                to={PAGE_URLS.GET_TOP_SCORERS_BY_SEASON_ID.replace(
                  ":id",
                  this.state.seasonId.id
                )}
              >
                More Stats
              </Link>
            </li>
          </ul>
        </div>
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

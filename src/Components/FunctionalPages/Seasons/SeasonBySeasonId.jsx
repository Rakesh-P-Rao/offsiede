import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import BackButton from "../../UI/Buttons/BackButton";
import { getSeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class SeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getSeasonInfoBySeasonId();
  }

  getSeasonInfoBySeasonId = (id) => {
    getSeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        seasonListBySeasonId: response.data,
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
                class="nav-link fw-bold fs-4 text-dark active"
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
                class="nav-link fw-bold fs-4 btn btn-outline-dark"
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
          {this.state.seasonListBySeasonId.map((sList) => (
            <>
              <div className="container">
                <table className="table table-bordered my-4">
                  <tr>
                    <td>League: </td>
                    <td>{sList.leagueName}</td>
                  </tr>
                  <tr>
                    <td>Start: </td>
                    <td>{sList.start}</td>
                  </tr>
                  <tr>
                    <td>End: </td>
                    <td>{sList.end}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_ALL_SEASONS}
                      >
                        <BackButton />All Seasons
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

export default SeasonBySeasonId;

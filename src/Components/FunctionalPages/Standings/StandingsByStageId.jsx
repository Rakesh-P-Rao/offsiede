import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getStandingsByStageId } from "../FunctionalApiActions/Stages/faaStages";

class StandingsByStageId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standingsListByStageId: [],
      pagination: {},
      stageId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStandingsInfoByStageId();
  }

  getStandingsInfoByStageId = (id) => {
    getStandingsByStageId(this.state.stageId.id).then((response) => {
      this.setState({
        standingsListByStageId: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item ">
              <Link
                class="nav-link fw-bold fs-4 active"
                aria-current="true"
                to={PAGE_URLS.GET_STANDINGS_BY_STAGE_ID.replace(
                  ":id",
                  this.state.standingsListByStageId.idStage
                )}
              >
                Standings Info
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
          {this.state.standingsListByStageId.map((stdList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td colSpan={2}>Team: </td>
                    <td colSpan={4}>{stdList.teamName}</td>
                  </tr>
                  <tr>
                    <td>Ga: </td>
                    <td>{stdList.ga}</td>
                    <td>Ga away: </td>
                    <td>{stdList.ga_away}</td>
                    <td>Ga home: </td>
                    <td>{stdList.ga_home}</td>
                  </tr>
                  <tr>
                    <td>Gf: </td>
                    <td>{stdList.gf}</td>
                    <td>Gf away: </td>
                    <td>{stdList.gf_away}</td>
                    <td>Gf home: </td>
                    <td>{stdList.gf_home}</td>
                  </tr>
                  <tr>
                    <td>Gd: </td>
                    <td>{stdList.gd}</td>
                    <td>Gd away: </td>
                    <td>{stdList.gd_away}</td>
                    <td>Gd home: </td>
                    <td>{stdList.gd_home}</td>
                  </tr>
                  <tr>
                    <td>P: </td>
                    <td>{stdList.p}</td>
                    <td>P away: </td>
                    <td>{stdList.p_away}</td>
                    <td>P home: </td>
                    <td>{stdList.p_home}</td>
                  </tr>
                  <tr>
                    <td>W: </td>
                    <td>{stdList.w}</td>
                    <td>W away: </td>
                    <td>{stdList.w_away}</td>
                    <td>W home: </td>
                    <td>{stdList.w_home}</td>
                  </tr>
                  <tr>
                    <td>D: </td>
                    <td>{stdList.d}</td>
                    <td>D away: </td>
                    <td>{stdList.d_away}</td>
                    <td>D home: </td>
                    <td>{stdList.d_home}</td>
                  </tr>
                  <tr>
                    <td>L: </td>
                    <td>{stdList.l}</td>
                    <td>L away: </td>
                    <td>{stdList.l_away}</td>
                    <td>L home: </td>
                    <td>{stdList.l_home}</td>
                  </tr>
                  <tr>
                    <td>Points: </td>
                    <td>{stdList.pts}</td>
                    <td>Points away: </td>
                    <td>{stdList.pts_away}</td>
                    <td>Points home: </td>
                    <td>{stdList.pts_home}</td>
                  </tr>
                  <tr>
                    <td colSpan={1}>Position: </td>
                    <td colSpan={2}>{stdList.pos}</td>
                    <td colSpan={1}>Note: </td>
                    <td colSpan={2}>{stdList.note}</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_STAGE_BY_STAGE_ID.replace(
                          ":id",
                          stdList.idStage
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        &nbsp; Stage Info
                      </Link>
                    </td>
                    <td colSpan={3}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_TEAM_BY_TEAM_ID.replace(
                          ":id",
                          stdList.idTeam
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        &nbsp;Team Info
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

export default StandingsByStageId;

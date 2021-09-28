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
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{stdList.idStage}</li>
                    <li class="list-group-item">{stdList.idTeam}</li>
                    <li class="list-group-item">{stdList.teamName}</li>
                    <li class="list-group-item">{stdList.ga}</li>
                    <li class="list-group-item">{stdList.ga_away}</li>
                    <li class="list-group-item">{stdList.ga_home}</li>
                    <li class="list-group-item">{stdList.gf}</li>
                    <li class="list-group-item">{stdList.gf_away}</li>
                    <li class="list-group-item">{stdList.gf_home}</li>
                    <li class="list-group-item">{stdList.gd}</li>
                    <li class="list-group-item">{stdList.gd_away}</li>
                    <li class="list-group-item">{stdList.gd_home}</li>
                    <li class="list-group-item">{stdList.p}</li>
                    <li class="list-group-item">{stdList.p_away}</li>
                    <li class="list-group-item">{stdList.p_home}</li>
                    <li class="list-group-item">{stdList.w}</li>
                    <li class="list-group-item">{stdList.w_away}</li>
                    <li class="list-group-item">{stdList.w_home}</li>
                    <li class="list-group-item">{stdList.d}</li>
                    <li class="list-group-item">{stdList.d_away}</li>
                    <li class="list-group-item">{stdList.d_home}</li>
                    <li class="list-group-item">{stdList.l}</li>
                    <li class="list-group-item">{stdList.l_away}</li>
                    <li class="list-group-item">{stdList.l_home}</li>
                    <li class="list-group-item">{stdList.pts}</li>
                    <li class="list-group-item">{stdList.pts_away}</li>
                    <li class="list-group-item">{stdList.pts_home}</li>
                    <li class="list-group-item">{stdList.pos}</li>
                    <li class="list-group-item">{stdList.note}</li>
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

export default StandingsByStageId;

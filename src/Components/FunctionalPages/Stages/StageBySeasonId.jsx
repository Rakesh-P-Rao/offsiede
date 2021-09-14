import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getStageBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class StageBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageListBySeasonId: [],
      pagination: {},
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStageInfoBySeasonId();
  }

  getStageInfoBySeasonId = (id) => {
    getStageBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        stageListBySeasonId: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Stage Info</h1>
        <div className="row">
          {this.state.stageListBySeasonId.map((sList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{sList.id}</li>
                    <li class="list-group-item">{sList.idSeason}</li>
                    <li class="list-group-item">{sList.name}</li>
                    <li class="list-group-item">{sList.hasStanding} boolean value for has standing</li>
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

export default StageBySeasonId;

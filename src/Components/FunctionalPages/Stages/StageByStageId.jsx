import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getStageByStageId } from "../FunctionalApiActions/Stages/faaStages";

class StageByStageId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageListByStageId: [],
      pagination: {},
      stageId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStageInfoByStageId();
  }

  getStageInfoByStageId = (id) => {
    getStageByStageId(this.state.stageId.id).then((response) => {
      this.setState({
        stageListByStageId: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Stage Info</h1>
        <div className="row">
          {this.state.stageListByStageId.map((sList) => (
            <>
              <div className="container my-3">
                <table className="table table-bordered fs-3">
                  <tr>
                    <td>Name: </td>
                    <td>{sList.name}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
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
                        &nbsp; All Fixtures
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

export default StageByStageId;

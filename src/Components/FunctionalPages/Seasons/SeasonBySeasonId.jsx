import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getSeasonBySeasonId } from "../FunctionalApiActions/Seasons/faaSeasons";

class SeasonBySeasonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonListBySeasonId: [],
      seasonId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getSeasonInfoBySeasonId();
  }

  getSeasonInfoBySeasonId = (id) => {
    getSeasonBySeasonId(this.state.seasonId.id).then((response) => {
      this.setState({
        seasonListBySeasonId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Season Info</h1>
        <div className="row">
          {this.state.seasonListBySeasonId.map((sList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{sList.id}</li>
                    <li class="list-group-item">{sList.idLeague}</li>
                    <li class="list-group-item">{sList.leagueName}</li>
                    <li class="list-group-item">{sList.start}</li>
                    <li class="list-group-item">{sList.end}</li>
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

export default SeasonBySeasonId;

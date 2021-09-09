import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getStatsByFixtureId } from "../FunctionalApiActions/Fixtures/faaFixtures";

class StatsByFixtureId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsListByFixtureId: [],
      fixtureId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStatsInfoByFixtureId();
  }

  getStatsInfoByFixtureId = (id) => {
    getStatsByFixtureId(this.state.fixtureId.id).then((response) => {
      this.setState({
        statsListByFixtureId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Stats By Fixture Id Info</h1>
        <div className="row">
          {this.state.statsListByFixtureId.map((sList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{sList.id}</li>
                    <li class="list-group-item">{sList.idFixture}</li>
                    <li class="list-group-item">{sList.idSeason}</li>
                    <li class="list-group-item">{sList.idTeam}</li>
                    <li class="list-group-item">{sList.teamName}</li>
                    <li class="list-group-item">{sList.label}</li>
                    <li class="list-group-item">{sList.value}</li>
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

export default StatsByFixtureId;

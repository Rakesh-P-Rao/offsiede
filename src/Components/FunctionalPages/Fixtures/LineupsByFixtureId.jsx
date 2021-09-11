import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getLineupsByFixtureId } from "../FunctionalApiActions/Fixtures/faaFixtures";

class LineupsByFixtureId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineupsListByFixtureId: [],
      fixtureId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getLineupsInfoByFixtureId();
  }

  getLineupsInfoByFixtureId = (id) => {
    getLineupsByFixtureId(this.state.fixtureId.id).then((response) => {
      this.setState({
        lineupsListByFixtureId: response,
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
                class="nav-link fw-bold fs-4 text-dark"
                aria-current="true"
                to={PAGE_URLS.GET_EVENTS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Events Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_STATS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Stats Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_LINEUPS_BY_FIXTURE_ID.replace(
                  ":id",
                  this.state.fixtureId.id
                )}
              >
                Lineups Info
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          {this.state.lineupsListByFixtureId.map((luList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{luList.id}</li>
                    <li class="list-group-item">{luList.idFixture}</li>
                    <li class="list-group-item">{luList.idSeason}</li>
                    <li class="list-group-item">{luList.idTeam}</li>
                    <li class="list-group-item">{luList.teamName}</li>
                    <li class="list-group-item">{luList.idPlayer}</li>
                    <li class="list-group-item">{luList.playerName}</li>
                    <li class="list-group-item">{luList.row} row is here</li>
                    <li class="list-group-item">{luList.col} col is here</li>
                    <li class="list-group-item">{luList.position}</li>
                    <li class="list-group-item">{luList.shirtNumber}</li>
                    <li class="list-group-item">
                      {luList.isStartingXI} is in starting 11 is here
                    </li>
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

export default LineupsByFixtureId;

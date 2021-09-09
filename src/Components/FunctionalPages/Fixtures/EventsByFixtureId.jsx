import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getEventsByFixtureId } from "../FunctionalApiActions/Fixtures/faaFixtures";

class EventsByFixtureId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsListByFixtureId: [],
      fixtureId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getEventsInfoByFixtureId();
  }

  getEventsInfoByFixtureId = (id) => {
    getEventsByFixtureId(this.state.fixtureId.id).then((response) => {
      this.setState({
        eventsListByFixtureId: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Events By Fixture Id Info</h1>
        <div className="row">
          {this.state.eventsListByFixtureId.map((eList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{eList.id}</li>
                    <li class="list-group-item">{eList.idFixture}</li>
                    <li class="list-group-item">{eList.idSeason}</li>
                    <li class="list-group-item">{eList.idTeam}</li>
                    <li class="list-group-item">{eList.teamName}</li>
                    <li class="list-group-item">{eList.idPlayer1}</li>
                    <li class="list-group-item">{eList.player1Name}</li>
                    <li class="list-group-item">{eList.idPlayer2}</li>
                    <li class="list-group-item">{eList.player2Name}</li>
                    <li class="list-group-item">{eList.elapsed}</li>
                    <li class="list-group-item">{eList.elapsedPlus}</li>
                    <li class="list-group-item">{eList.type}</li>
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

export default EventsByFixtureId;

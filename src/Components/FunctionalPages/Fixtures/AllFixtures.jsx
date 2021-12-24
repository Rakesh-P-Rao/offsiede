import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllFixturesList } from "./../FunctionalApiActions/Fixtures/faaFixtures";

class AllFixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFixtureList: [],
      pagination: {},
    };
  }

  componentDidMount() {
    this.getAllListOfFixtures();
  }

  getAllListOfFixtures = () => {
    getAllFixturesList().then((response) => {
      this.setState({
        allFixtureList: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Fixtures</h1>
        <div className="row">
          {this.state.allFixtureList.map((fList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">League: {fList.leagueName}</li>
                    <li class="list-group-item">Season: {fList.seasonName}</li>
                    <li class="list-group-item">Home: {fList.homeName}</li>
                    <li class="list-group-item">Away: {fList.awayName}</li>
                    <li class="list-group-item">Venue: {fList.venueName}</li>
                    <li class="list-group-item">Date: {fList.date}</li>
                    <li class="list-group-item">Status: {fList.status}</li> 
                    <li class="list-group-item">Attendance: {fList.attendance}</li>
                    <li class="list-group-item">
                      <div className="row">
                        <div className="col-8 fw-bold fs-5">Stage Info</div>
                        <div className="col-4">
                          <Link
                            className="text-dark fs-5 badge"
                            to={PAGE_URLS.GET_STAGE_BY_STAGE_ID.replace(
                              ":id",
                              fList.idStage
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
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div className="row">
                        <div className="col-8 fw-bold fs-5">Venue Info</div>
                        <div className="col-4">
                          <Link
                            className="text-dark fs-5 badge"
                            to={PAGE_URLS.GET_VENUE_BY_VENUE_ID.replace(
                              ":id",
                              fList.idVenue
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
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-4">
                          <Link
                            className="text-dark fs-5 badge"
                            to={PAGE_URLS.HOME}
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
                          </Link>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                          <Link
                            className="text-dark fs-5 badge"
                            to={PAGE_URLS.GET_EVENTS_BY_FIXTURE_ID.replace(
                              ":id",
                              fList.id
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
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default AllFixtures;

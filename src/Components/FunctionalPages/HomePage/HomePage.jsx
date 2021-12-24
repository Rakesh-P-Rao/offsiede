import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import AllInPlayHomePage from "../Fixtures/AllInPlayHomePage";
import homePage from "../../../Images/HomePage/homePage.jpg";
import allCountries from "../../../Images/HomePage/allCountries.jpg";
import allSeasons from "../../../Images/HomePage/allSeasons.jpg";
import allInPlay from "../../../Images/HomePage/allInPlay.jpg";
import allLeagues from "../../../Images/HomePage/allLeagues.jfif";
import allFixtures from "../../../Images/HomePage/allFixtures.jpg";
import allUpcoming from "../../../Images/HomePage/allUpcoming.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      function refreshPage() {
        window.scrollTo(0, 0);
      }
    return (
      <div className="container">
        <>
          <h1 className="card-header">Home</h1>
          <AllInPlayHomePage />
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link className="text-dark fs-4 fw-bold" to={PAGE_URLS.HOME}>
              Home
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_COUNTRIES}
            >
              All Countries
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_LEAGUES}
            >
              All Leagues
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_SEASONS}
            >
              All Seasons
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_FIXTURES}
            >
              All Fixtures
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_IN_PLAY}
            >
              All In Play
            </Link>
          </div>

          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_ALL_UPCOMING}
            >
              All Upcoming
            </Link>
          </div>
          <div className="btn btn-info p-3 m-5 text-dark">
            <Link
              className="text-dark fs-4 fw-bold"
              to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_NAME}
            >
              Search Country
            </Link>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-8">
                <img
                  src={allCountries}
                  class="img-fluid rounded-start"
                  alt="All Countries pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
              <div class="col-md-4">
                <div class="card-body ">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">
                        Browse through all countries.
                      </p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_COUNTRIES}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-2 fs-2"
                      >
                        All Countries
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">Check out season details...</p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_SEASONS}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-4 fs-1"
                      >
                        All Seasons
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <img
                  src={allSeasons}
                  class="img-fluid rounded-start"
                  alt="Home Page pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-8">
                <img
                  src={allLeagues}
                  class="img-fluid rounded-start"
                  alt="All Leagues pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">
                        Find more about your favourite leagues...
                      </p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_LEAGUES}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-4 fs-1"
                      >
                        All Leagues
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">Know about all the fixtures</p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_FIXTURES}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-4 fs-1"
                      >
                        All Fixtures
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <img
                  src={allFixtures}
                  class="img-fluid rounded-start"
                  alt="All Fixtures pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-8">
                <img
                  src={allInPlay}
                  class="img-fluid rounded-start"
                  alt="All In Play pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">
                        Get all live scores and in play info...
                      </p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_IN_PLAY}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-4 fs-1"
                      >
                        All In Play
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">
                        Find all the upcoming matchups
                      </p>
                    </div>
                    <Link to={PAGE_URLS.GET_ALL_UPCOMING}>
                      <button
                        type="button"
                        class="btn btn-outline-dark p-2 fs-1"
                      >
                        All Upcoming
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <img
                  src={allUpcoming}
                  class="img-fluid rounded-start"
                  alt="All Upcoming pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
            </div>
          </div>
          <div
            class="card mb-3"
            style={{ maxWidth: "540px;", maxHeight: "360px" }}
          >
            <div class="row g-0">
              <div class="col-md-8">
                <img
                  src={homePage}
                  class="img-fluid rounded-start"
                  alt="Home Page pic"
                  style={{ maxHeight: "360px" }}
                />
              </div>
              <div class="col-md-4">
                <div class="card-body mt-5">
                  <div class="card-body text-dark">
                    <div class="card-body text-dark">
                      <p class="card-text fs-5">
                        Go back to top, refresh your page...
                      </p>
                    </div>
                    <Link to={PAGE_URLS.HOME}>
                      <button
                        onClick={refreshPage}
                        type="button"
                        class="btn btn-outline-dark p-4 fs-1"
                      >
                        Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default HomePage;

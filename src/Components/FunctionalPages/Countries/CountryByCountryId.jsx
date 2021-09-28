import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getCountryByCountryId } from "../FunctionalApiActions/Countries/faaCountries";

class CountryByCountryId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryByIdList: [],
      pagination: {},
      countryId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getCountryInfoById();
  }

  getCountryInfoById = (id) => {
    getCountryByCountryId(this.state.countryId.id).then((response) => {
      this.setState({
        countryByIdList: response.data,
        pagination: response.pagination,
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
                class="nav-link active fw-bold fs-4 text-dark"
                aria-current="true"
                to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID.replace(
                  ":id",
                  this.state.countryId.id
                )}
              >
                Country Info
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link fw-bold fs-4 text-dark"
                to={PAGE_URLS.GET_LEAGUES_BY_COUNTRY_ID.replace(
                  ":id",
                  this.state.countryId.id
                )}
              >
                League Info
              </Link>
            </li>
          </ul>
        </div>
        <>
          <div className="card border-top-0 mb-3">
            <div class="row g-0" style={{ height: "270px" }}>
              <div class="col-4">
                <img src="flag dp" className="card-img-top" alt="flag dp" />
              </div>
              <div class="col-8">
                <div class="card-body mt-5">
                  <h1 class="card-title">Name</h1>
                  <p class="card-text">
                    <small class="text-muted">alpha3code</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body" style={{ height: "240px" }}>
              <div className="row">
                <div className="col">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Capital: </li>
                    <li class="list-group-item">Region: </li>
                  </ul>
                </div>
                <div className="col">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">alpha2code</li>
                    <li class="list-group-item">Subregion: </li>
                    <li class="list-group-item">Timezones: </li>
                  </ul>
                </div>
              </div>
              
              <Link className="text-dark fs-4 fw-bold btn mb-0" to={PAGE_URLS.HOME}>
                Home
              </Link>
            </div>
          </div>
        </>
        <div className="row">
          {this.state.countryByIdList.map((cList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={cList.flag}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <div class="card-body"></div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{cList.id}</li>
                    <li class="list-group-item">{cList.name}</li>
                    <li class="list-group-item">{cList.alpha2code}</li>
                    <li class="list-group-item">{cList.alpha3code}</li>
                    <li class="list-group-item">{cList.capital}</li>
                    <li class="list-group-item">{cList.region}</li>
                    <li class="list-group-item">{cList.subregion}</li>
                    <li class="list-group-item">{cList.timezones}</li>
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

export default CountryByCountryId;

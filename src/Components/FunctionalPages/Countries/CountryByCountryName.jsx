import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getCountryByCountryName } from "../FunctionalApiActions/Countries/faaCountries";

class CountryByCountryName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryByNameList: [],
      pagination: {},
      countryId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getCountryInfoByName();
  }

  getCountryInfoByName = (name) => {
    getCountryByCountryName(this.state.countryId.name).then((response) => {
      this.setState({
        countryByNameList: response.data,
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
        <div className="row">
          {this.state.countryByNameList.map((cList) => (
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

export default CountryByCountryName;

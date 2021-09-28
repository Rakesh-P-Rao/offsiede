import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getCountryByCountryName } from "../FunctionalApiActions/Countries/faaCountries";

class CountryByCountryName extends Component {
  constructor(props) {
    super(props);

    let countryName = {
      name : props.val ? props.countryName.name : "",
    }

    this.state = {
      countryByNameList: [],
      pagination: {},
      countryId: "",
      countryName: countryName,
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.getCountryInfoByName();
  // }

  getCountryInfoByName = (name) => {
    getCountryByCountryName(this.state.countryName).then((response) => {
      this.setState({
        countryByNameList: response.data,
        pagination: response.pagination,
      });
    });
  };

  handleChange(event) {
    this.setState({ countryName: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.countryName);
    event.preventDefault();
    this.getCountryInfoByName();
  }

  render() {
    console.log(this.state.countryName);
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
        <div>
          <h1>Search country by name</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  className="border-teal rounded-pill"
                  type="text"
                  name="name"
                  placeholder="enter country name"
                  value={this.state.countryName}
                  onChange={this.handleChange}
                />
              </label>
              <input
                className="btn btn-primary my-1"
                type="submit"
                value="Search"
              />
            </form>
          </div>
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

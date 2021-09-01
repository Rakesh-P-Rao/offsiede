import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getCountryByCountryId } from "../FunctionalApiActions/Countries/faaCountries";

class CountryByCountryId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryByIdList: [],
      countryId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getCountryInfoById();
  }

  getCountryInfoById = (id) => {
    getCountryByCountryId(this.state.countryId.id).then((response) => {
      this.setState({
        countryByIdList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">Country Info</h1>
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

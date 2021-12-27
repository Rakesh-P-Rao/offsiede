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
        <div className="row">
          {this.state.countryByIdList.map((cList) => (
            <>
              <div className="container my-3">
                <div className="card">
                  <div className="row">
                    <div className="col-8 mt-5">
                      <h1>{cList.name}</h1>
                      <h3>{cList.alpha3code}</h3>
                    </div>
                    <div className="col-4">
                      <img
                        src={cList.flag}
                        className="card-img-top"
                        alt="player dp"
                      />
                    </div>
                  </div>
                </div>
                <table
                  className="table table-bordered fs-3"
                >
                  <tr>
                    <td>Capital: </td>
                    <td>{cList.capital}</td>
                    <td>Alpha code: </td>
                    <td>{cList.alpha2code}</td>
                  </tr>
                  <tr>
                    <td>Region: </td>
                    <td>{cList.region}</td>
                    <td>Subregion: </td>
                    <td>{cList.subregion}</td>
                  </tr>
                  <tr>
                    <td>Timezone: </td>
                    <td>{cList.timezones}</td>
                    <td colSpan={2}>
                      <Link
                        className="text-dark fs-5 badge"
                        to={PAGE_URLS.GET_ALL_COUNTRIES}
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
                        </svg>&nbsp;
                        All Countries
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default CountryByCountryId;

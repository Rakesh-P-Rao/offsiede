import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllCountriesList } from "../FunctionalApiActions/Countries/faaCountries";

class AllCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountryList: [],
      pagination: {},
    };
  }

  componentDidMount() {
    this.getAllListOfCountries();
  }

  getAllListOfCountries = () => {
    getAllCountriesList().then((response) => {
      this.setState({
        allCountryList: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Countries</h1>
        <div className="row">
          {this.state.allCountryList.map((cList) => (
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
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID.replace(
                        ":id",
                        cList.id
                      )}
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="row">
          <div className="col-4">
            <h1>This is footer and pagination</h1>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination mr-5">
                <li class="page-item disabled">
                  <Link class="page-link" to="#">
                    Previous
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#">
                    1
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#">
                    2
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#">
                    3
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCountries;

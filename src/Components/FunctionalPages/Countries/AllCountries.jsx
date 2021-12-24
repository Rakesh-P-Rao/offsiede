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
        <h1
          className="card-footer container fixed-top"
          style={{ marginTop: "74px", backgroundColor: "whitesmoke" }}
        >
          All Countries
        </h1>
        <div className="row" style={{ marginTop: "172px" }}>
          {this.state.allCountryList.map((cList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={cList.flag}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item fs-5 fw-bold"
                      style={{ maxHeight: "100px" }}
                    >
                      <div className="row">
                        <div className="col-8">{cList.name}</div>
                        <div className="col-4">{cList.alpha3code}</div>
                      </div>
                    </li>
                    <li className="list-group-item">{cList.capital}</li>
                    <li class="list-group-item">
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
                            to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID.replace(
                              ":id",
                              cList.id
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

export default AllCountries;

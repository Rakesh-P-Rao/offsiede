import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllCountriesList } from "../FunctionalApiActions/Countries/faaCountries";

class AllCountries extends Component {
  constructor(props) {
    super(props);
    this.handleHasNextPage = this.handleHasNextPage.bind(this);
    this.handleHasPrevPage = this.handleHasPrevPage.bind(this);
    this.state = {
      allCountryList: [],
      pagination: {},
      currentPage: "",
      page:"",
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
        currentPage: response.pagination.page,
      });
    });
  };

  handleHasPrevPage() {
    // this.setState({ page: this.state.pagination.page});
    this.setState({ page: this.state.currentPage - 1 });
    console.log(this.state.page, "=> this.state.page in hasPrevPage");
  }

  handleHasNextPage() {
    // this.setState({ page: this.state.pagination.page});
    this.setState({ page: this.state.currentPage + 1 });
    console.log(this.state.page, "=> this.state.page in hasNextPage");
  }

  render() {
    console.log(this.state.currentPage);
    console.log(this.state.page);
    return (
      <div className="container">
        <div
          className="card-footer fixed-top container"
          style={{ marginTop: "73px", backgroundColor: "lightgray" }}
        >
          <div className="row">
            <div className="col-1 mt-3">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary fw-bold"
                onClick={this.handleHasPrevPage}
              >
                Previous
              </button>
            </div>
            <div className="col-10">
              <h1>All Countries</h1>
            </div>
            <div className="col-1 mt-3">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary fw-bold"
                onClick={this.handleHasNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <>
            <div className="col-3" style={{ marginTop: "72px" }}>
              <div className="card h-90 my-3">
                <div class="card">
                  <img src="" className="card-img-top" alt="flag dp" />
                  <div class="card-body">
                    <h5 class="card-title">Name</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">capital</li>
                    <li class="list-group-item">
                      <div className="row">
                        <div className="col-8">subregion</div>
                        <div className="col-4">alpha3code</div>
                      </div>
                    </li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-muted fs-4 fw-bold mr-3"
                      to={PAGE_URLS.HOME}
                    >
                      Home
                    </Link>
                    <Link
                      className="text-muted fs-4 fw-bold"
                      to={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID}
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
          {this.state.allCountryList.map((cList) => (
            <>
              <div className="col-3" style={{ marginTop: "72px" }}>
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
      </div>
    );
  }
}

export default AllCountries;

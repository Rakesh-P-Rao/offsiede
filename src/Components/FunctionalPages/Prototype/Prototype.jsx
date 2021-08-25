import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllCountriesList } from './../FunctionalApiActions/Countries/faaCountries';

class Prototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prototypeList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfCountries();
  }

  getAllListOfCountries = () => {
    getAllCountriesList().then((response) => {
      this.setState({
        allCountryList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Prototypes</h1>
        <div className="row">
          {this.state.allCountryList.map((cList) => (
            <>
              <div className="col-3">
                <div
                  className="card h-90 my-3"
                >
                  <img
                    src={cList.flag}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <div class="card-body">
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">item</li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.HOME}
                    >
                      {cList.name}
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

export default Prototype;
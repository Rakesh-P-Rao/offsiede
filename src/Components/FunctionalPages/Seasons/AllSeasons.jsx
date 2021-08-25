import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getAllSeasonsList } from "./../FunctionalApiActions/Seasons/faaSeasons";

class AllSeasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSeasonList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfSeasons();
  }

  getAllListOfSeasons = () => {
    getAllSeasonsList().then((response) => {
      this.setState({
        allSeasonList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Seasons</h1>
        <div className="row">
          {this.state.allSeasonList.map((sList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <img
                    src={sList.flag}
                    className="card-img-top"
                    alt="player dp"
                  />
                  <div class="card-body"></div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{sList.id}</li>
                    <li class="list-group-item">{sList.idLeague}</li>
                    <li class="list-group-item">{sList.leagueName}</li>
                    <li class="list-group-item">{sList.start}</li>
                    <li class="list-group-item">{sList.end}</li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.HOME}
                    >
                      {sList.leagueName}
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

export default AllSeasons;

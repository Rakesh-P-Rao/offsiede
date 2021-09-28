import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getLeaguesByCountryId } from "../FunctionalApiActions/Countries/faaCountries";

class LeaguesByCountryId extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      leaguesListByCountryId: [],
      pagination: {},
      countryId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getLeaguesInfoByCountryId();
  }

  getLeaguesInfoByCountryId = (id) => {
    getLeaguesByCountryId(this.state.countryId.id).then((response) => {
      this.setState({
        leaguesListByCountryId: response.data,
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
                class="nav-link fw-bold fs-4 text-dark"
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
                class="nav-link active fw-bold fs-4 text-dark"
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
          {this.state.leaguesListByCountryId.map((lList) => (
            <>
              <div className="col-3">
                <div className="card h-90 my-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{lList.id}</li>
                    <li class="list-group-item">{lList.idCountry}</li>
                    <li class="list-group-item">{lList.countryName}</li>
                    <li class="list-group-item">{lList.name}</li>
                    <li class="list-group-item">
                      {lList.nationalLeague} nationalLeague boolean value
                    </li>
                    <li class="list-group-item">
                      {lList.clubsLeague} clubsLeague boolean value
                    </li>
                    <li class="list-group-item fw-bold">{lList.name}</li>
                  </ul>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.GET_SEASON_BY_LEAGUE_ID.replace(
                        ":id",
                        lList.id
                      )}
                    >
                      Season info
                    </Link>
                  </div>
                  <div class="card-body">
                    <Link
                      className="text-dark fs-4 fw-bold"
                      to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(
                        ":id",
                        lList.id
                      )}
                    >
                      League info
                    </Link>
                  </div>
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

export default LeaguesByCountryId;

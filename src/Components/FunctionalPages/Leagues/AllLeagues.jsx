import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PAGE_URLS } from '../../../Utils/Constants';
import { getAllLeaguesList } from '../FunctionalApiActions/Leagues/faaLeagues';

class AllLeagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLeaguesList: [],
      pagination: {},
    };
  }

  componentDidMount() {
    this.getAllListOfLeagues();
  }

  getAllListOfLeagues = () => {
    getAllLeaguesList().then((response) => {
      this.setState({
        allLeaguesList: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="card-footer">All Leagues</h1>
        <div className="row">
          {this.state.allLeaguesList.map((lList) => (
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
                      to={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID.replace(":id", lList.id)}
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
 
export default AllLeagues;
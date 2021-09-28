import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getVenueByVenueId } from "../FunctionalApiActions/Venues/faaVenues";

class VenueByVenueId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venueListByVenueId: [],
      pagination: {},
      venueId: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getVenueInfoByVenueId();
  }

  getVenueInfoByVenueId = (id) => {
    getVenueByVenueId(this.state.venueId.id).then((response) => {
      this.setState({
        venueListByVenueId: response.data,
        pagination: response.pagination,
      });
    });
  };

  render() {
      return (
          <div className="container">
              <h1 className="card-footer">Venue Info</h1>
              <div className="row">
                  {this.state.venueListByVenueId.map((sList) => (
                      <>
                          <div className="col-3">
                              <div className="card h-90 my-3">
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">{sList.id}</li>
                                      <li class="list-group-item">{sList.name}</li>
                                      <li class="list-group-item">{sList.capacity}</li>
                                      <li class="list-group-item">{sList.city}</li>
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

export default VenueByVenueId;

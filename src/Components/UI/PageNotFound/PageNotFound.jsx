import React, { Component } from 'react';
import PageNotFoundImage from "../../../Images/PageNotFound/pageNotFound.png"

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="container my-5">
                <img src={PageNotFoundImage} alt="page not found" />
                <h1 className="text-dark font-weight-bolder fs-1">Page Not Found!</h1>
          </div>
        );
    }
}
 
export default PageNotFound;
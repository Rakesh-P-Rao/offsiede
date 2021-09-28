import React, { Component } from "react";
import { getAllFeedList } from "./../FunctionalApiActions/Feed/faaFeed";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFeedList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfFeed();
  }

  getAllListOfFeed = () => {
    getAllFeedList().then((response) => {
      this.setState({
        allFeedList: response,
      });
    });
  };

    render() {
        console.log(this.state.allFeedList);
        return (
          <div className="container">
            <div className="row list-group-item">
              <div className="col-4 fw-bold fs-2">News Feed</div>
            </div>
            <div className="row">
              <div className="col">
                {this.state.allFeedList.map((fList) => (
                  <>
                    <div className="card my-3">
                      <div className="card-body">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">{fList.title}</li>
                          <embed src={fList.embed} type="text/html" />
                          <img
                            src={fList.thumbnail}
                                        className="card-img-top list-group-item"
                                        style={{maxHeight:"300px", maxWidth:"500px"}}
                            alt="thumbnail"
                          />
                          <li class="list-group-item">
                            <a href={fList.url}>Live stream</a>
                          </li>
                          {/* <li class="list-group-item">{fList.thumbnail}</li> */}
                          <li class="list-group-item">{fList.date}</li>
                          <li class="list-group-item">{fList.side1.name}</li>
                          <li class="list-group-item">
                            <a href={fList.side1.url}>go to url</a>
                          </li>
                          <li class="list-group-item">{fList.side2.name}</li>
                          <li class="list-group-item">
                            <a href={fList.side2.url}>go to url</a>
                          </li>
                          <li class="list-group-item">
                            {fList.competition.name}
                          </li>
                          <li class="list-group-item">
                            {fList.competition.id}
                          </li>
                          <li class="list-group-item">
                            <a href={fList.competition.url}>go to url</a>
                          </li>
                                    {/* <li class="list-group-item">{fList.videos}</li> */}
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        );
  }
}

export default Feed;

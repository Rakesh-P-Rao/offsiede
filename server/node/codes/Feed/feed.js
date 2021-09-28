const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let RAPID_API_KEY_FEED = process.env.RAPID_API_KEY_FEED;

const feed = {
  getAllFeedList: app.get("/get-feed", (req, res) => {
    var options = {
      method: "GET",
      url: "https://free-football-soccer-videos.p.rapidapi.com/",
      headers: {
        "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
        "x-rapidapi-key": RAPID_API_KEY_FEED,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),
};

module.exports = feed;

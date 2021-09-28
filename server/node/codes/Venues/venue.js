const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let AUTHORIZATION = process.env.AUTHORIZATION;

const venues = {
  getVenueByVenueId: app.get("/get-venue-by-venue-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/venues/${id}`,
      qs: {},
      headers: {
        Authorization: AUTHORIZATION,
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

module.exports = venues;

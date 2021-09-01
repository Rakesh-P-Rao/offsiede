const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let AUTHORIZATION = process.env.AUTHORIZATION;

const countries = {
  getAllCountries: app.get("/get-all-countries", (req, res) => {
    var options = {
      method: "GET",
      url: "https://football.elenasport.io/v2/countries",
      qs: {
        expand: "***expand***",
        name: "***name***",
        page: "***page***",
      },
      headers: {
        Authorization: AUTHORIZATION,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getCountryByCountryId: app.get(
    "/get-country-by-country-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/countries/${id}`,
        qs: {
          expand: "***expand***",
        },
        headers: {
          Authorization: AUTHORIZATION,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getLeaguesByCountryId: app.get(
    "/get-leagues-by-country-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/countries/${id}/leagues`,
        qs: {
          expand: "***expand***",
        },
        headers: {
          Authorization: AUTHORIZATION,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),
};

module.exports = countries;

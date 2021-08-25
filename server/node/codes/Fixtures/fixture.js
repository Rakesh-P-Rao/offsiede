const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let AUTHORIZATION = process.env.AUTHORIZATION;

const fixtures = {
  getAllFixtures: app.get("/get-all-fixtures", (req, res) => {
    var options = {
      method: "GET",
      url: "https://football.elenasport.io/v2/fixtures",
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
};

module.exports = fixtures;

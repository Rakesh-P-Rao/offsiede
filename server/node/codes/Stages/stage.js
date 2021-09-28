const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let AUTHORIZATION = process.env.AUTHORIZATION;

const stages = {
  getStandingsByStageId: app.get(
    "/get-standings-by-stage-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/stages/${id}/standing`,
        qs: {
          expand: "***expand***",
          fromDate: "***fromDate***",
          fromRound: "***fromRound***",
          toDate: "***toDate***",
          toRound: "***toRound***",
        },
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
    }
  ),

  getStageByStageId: app.get("/get-stage-by-stage-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/stages/${id}`,
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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),
};

module.exports = stages;

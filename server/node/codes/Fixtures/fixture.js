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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getAllInPlay: app.get("/get-all-in-play", (req, res) => {
    var options = {
      method: "GET",
      url: "https://football.elenasport.io/v2/inplay",
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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getAllUpcoming: app.get("/get-all-upcoming", (req, res) => {
    var options = {
      method: "GET",
      url: "https://football.elenasport.io/v2/upcoming",
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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getEventsByFixtureId: app.get("/get-events-by-fixture-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/fixtures/${id}/events`,
      qs: {
        expand: "***expand***",
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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getStatsByFixtureId: app.get("/get-stats-by-fixture-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/fixtures/${id}/stats`,
      qs: {
        expand: "***expand***",
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
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }),

  getLineupsByFixtureId: app.get(
    "/get-lineups-by-fixture-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/fixtures/${id}/lineups`,
        qs: {
          expand: "***expand***",
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
          res.send(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getFixtureByFixtureId: app.get(
    "/get-fixture-by-fixture-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/fixtures/${id}`,
        qs: {
          events: "***events***",
          expand: "***expand***",
          lineups: "***lineups***",
          stats: "***stats***",
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
};

module.exports = fixtures;

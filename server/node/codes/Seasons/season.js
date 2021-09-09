const express = require("express");
const app = express();
var axios = require("axios").default;

require("dotenv").config();
let AUTHORIZATION = process.env.AUTHORIZATION;

const seasons = {
  getAllSeasons: app.get("/get-all-seasons", (req, res) => {
    var options = {
      method: "GET",
      url: "https://football.elenasport.io/v2/seasons",
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
  getSeasonBySeasonId: app.get("/get-season-by-season-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/seasons/${id}`,
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
  }),
  getStageBySeasonId: app.get("/get-stage-by-season-id/:id", (req, res) => {
    const id = req.params.id;
    var options = {
      method: "GET",
      url: `https://football.elenasport.io/v2/seasons/${id}/stages`,
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
  }),
  getTopScorersBySeasonId: app.get(
    "/get-top-scorers-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topscorers`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopYellowCardsBySeasonId: app.get(
    "/get-top-yellow-cards-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topyellowcards`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopRedCardsBySeasonId: app.get(
    "/get-top-red-cards-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topredcards`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopSubbedOnBySeasonId: app.get(
    "/get-top-subbed-on-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topsubbedon`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopSubbedOffBySeasonId: app.get(
    "/get-top-subbed-off-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topsubbedoff`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopApperancesBySeasonId: app.get(
    "/get-top-apperances-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topappearances`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTopOwnGoalsBySeasonId: app.get(
    "/get-top-own-goals-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/topowngoals`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getFixturesBySeasonId: app.get(
    "/get-fixtures-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/fixtures`,
        qs: {
          expand: "***expand***",
          from: "***from***",
          idTeam1: "***idTeam1***",
          idTeam2: "***idTeam2***",
          page: "***page***",
          round: "***round***",
          to: "***to***",
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

  getAllUpcomingBySeasonId: app.get(
    "/get-all-upcoming-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/upcoming`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getAllInPlayBySeasonId: app.get(
    "/get-all-in-play-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/inplay`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getTeamsPlayingInASeasonBySeasonId: app.get(
    "/get-teams-playing-in-a-season-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/teams`,
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
          res.send(response.data.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  ),

  getPlayersPlayingInASeasonBySeasonId: app.get(
    "/get-players-playing-in-a-season-by-season-id/:id",
    (req, res) => {
      const id = req.params.id;
      var options = {
        method: "GET",
        url: `https://football.elenasport.io/v2/seasons/${id}/players`,
        qs: {
          idTeam: "***idTeam***",
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
    }
  ),
};

module.exports = seasons;

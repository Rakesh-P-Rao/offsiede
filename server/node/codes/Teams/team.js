// const express = require("express");
// const app = express();
// var axios = require("axios").default;

// require("dotenv").config();
// let API_KEY = process.env.API_KEY;

// const teams = {
//   getTeamsByLeague: app.get("/get-team-by-league/:id", (req, res) => {
//     const id = req.params.id;

//     var options = {
//       method: "GET",
//       url: `https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`,
//       headers: {
//         "x-rapidapi-key": API_KEY,
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data.api.teams);
//         res.send(response.data.api.teams);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }),
// };

// module.exports = teams;

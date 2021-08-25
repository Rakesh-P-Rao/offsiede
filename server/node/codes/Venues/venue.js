// const express = require("express");
// const app = express();
// var axios = require("axios").default;

// require("dotenv").config();
// let API_KEY = process.env.API_KEY;

// const venues = {
//   getVenuesByCountry: app.get("/venue-by-country/:name", (req, res) => {
//     const name = req.params.name;

//       var options = {
//         method: "GET",
//         url: "https://api-football-v1.p.rapidapi.com/v3/venues",
//         params: { country: name },
//         headers: {
//           "x-rapidapi-key": API_KEY,
//           "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         },
//       };

//       axios
//         .request(options)
//         .then(function (response) {
//           console.log(response.data);
//           res.send(response.data.response);
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//   }),
// };

// module.exports = venues;




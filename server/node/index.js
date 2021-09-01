const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const AllFiles = require("./layout");
app.use(
  AllFiles.allCountries.getAllCountries,
  AllFiles.allLeagues.getAllLeagues,
  AllFiles.allSeasons.getAllSeasons,
  AllFiles.allFixtures.getAllFixtures,
  AllFiles.allFixtures.getAllUpcoming,
  AllFiles.allCountries.getCountryByCountryId,
  AllFiles.allCountries.getLeaguesByCountryId,
  // AllFiles.venueByCountry.getVenuesByCountry,
  // AllFiles.teamByLeague.getTeamsByLeague,
);

require("dotenv").config();
let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("^^^^^^^^^^^^offsiede_running^^^^^^^^^^^");
});

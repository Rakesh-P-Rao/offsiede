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
  AllFiles.allLeagues.getLeagueByLeagueId,
  AllFiles.allLeagues.getSeasonByLeagueId,
  AllFiles.allSeasons.getSeasonBySeasonId,
  AllFiles.allSeasons.getStageBySeasonId,
  AllFiles.allSeasons.getTopScorersBySeasonId,
  AllFiles.allSeasons.getTopYellowCardsBySeasonId,
  AllFiles.allSeasons.getTopRedCardsBySeasonId,
  AllFiles.allSeasons.getTopSubbedOnBySeasonId,
  AllFiles.allSeasons.getTopSubbedOffBySeasonId,
  AllFiles.allSeasons.getTopApperancesBySeasonId,
  AllFiles.allSeasons.getTopOwnGoalsBySeasonId,
  AllFiles.allSeasons.getFixturesBySeasonId,
  AllFiles.allSeasons.getAllInPlayBySeasonId,
  AllFiles.allSeasons.getAllUpcomingBySeasonId,
  AllFiles.allSeasons.getTeamsPlayingInASeasonBySeasonId,
  AllFiles.allSeasons.getPlayersPlayingInASeasonBySeasonId,
  AllFiles.allFixtures.getEventsByFixtureId,
  AllFiles.allFixtures.getStatsByFixtureId,
  AllFiles.allFixtures.getLineupsByFixtureId,
  AllFiles.allCountries.getCountryByCountryName,
);

require("dotenv").config();
let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("^^^^^^^^^^^^offsiede_running^^^^^^^^^^^");
});

const AllFiles = {
  allCountries: require("./codes/Countries/country"),
  allLeagues: require("./codes/Leagues/league"),
  allSeasons: require("./codes/Seasons/season"),
  allFixtures: require("./codes/Fixtures/fixture"),
  allUpcoming: require("./codes/Fixtures/fixture"),
  getCountryByCountryId: require("./codes/Countries/country"),
  getLeaguesByCountryId: require("./codes/Countries/country"),
  getLeagueByLeagueId: require("./codes/Leagues/league"),
  getSeasonByLeagueId: require("./codes/Leagues/league"),
  getSeasonBySeasonId: require("./codes/Seasons/season"),
  getStageBySeasonId: require("./codes/Seasons/season"),
  getTopScorersBySeasonId: require("./codes/Seasons/season"),
  getTopYellowCardsBySeasonId: require("./codes/Seasons/season"),
  getTopRedCardsBySeasonId: require("./codes/Seasons/season"),
  getTopSubbedOnBySeasonId: require("./codes/Seasons/season"),
  getTopSubbedOffBySeasonId: require("./codes/Seasons/season"),
  getTopApperancesBySeasonId: require("./codes/Seasons/season"),
  getTopOwnGoalsBySeasonId: require("./codes/Seasons/season"),
};

module.exports = AllFiles;

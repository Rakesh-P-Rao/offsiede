import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import HeaderComponent from "../UI/HeaderComponent/HeaderComponent";
import FooterComponent from "../UI/FooterComponent/FooterComponent";
import { PAGE_URLS } from "../../Utils/Constants";
import PageNotFound from "../UI/PageNotFound/PageNotFound";
import HomePage from "../FunctionalPages/HomePage/HomePage";
import AllCountries from "./../FunctionalPages/Countries/AllCountries";
import AllLeagues from '../FunctionalPages/Leagues/AllLeagues';
import AllSeasons from "../FunctionalPages/Seasons/AllSeasons";
import AllFixtures from "../FunctionalPages/Fixtures/AllFixtures";
import AllInPlay from "../FunctionalPages/Fixtures/AllInPlay";
import AllUpcoming from "../FunctionalPages/Fixtures/AllUpcoming";
import CountryByCountryId from "../FunctionalPages/Countries/CountryByCountryId";
import LeaguesByCountryId from "../FunctionalPages/Leagues/LeaguesByCountryId";
import LeagueByLeagueId from "../FunctionalPages/Leagues/LeagueByLeagueId";
import SeasonBySeasonId from "../FunctionalPages/Seasons/SeasonBySeasonId";
import SeasonByLeagueId from "../FunctionalPages/Seasons/SeasonByLeagueId";
import StageBySeasonId from "../FunctionalPages/Stages/StageBySeasonId";
import TopOwnGoals from "../FunctionalPages/PlayerStatsBySeasonId/TopOwnGoals";
import TopApperances from "../FunctionalPages/PlayerStatsBySeasonId/TopAppearances";
import TopSubbedOff from "../FunctionalPages/PlayerStatsBySeasonId/TopSubbedOff";
import TopSubbedOn from "../FunctionalPages/PlayerStatsBySeasonId/TopSubbedOn";
import TopRedCards from "../FunctionalPages/PlayerStatsBySeasonId/TopRedCards";
import TopYellowCards from "../FunctionalPages/PlayerStatsBySeasonId/TopYellowCards";
import TopScorers from "../FunctionalPages/PlayerStatsBySeasonId/TopScorers";
import PlayersPlayingInASeasonBySeasonId from "../FunctionalPages/Players/PlayersPlayingInASeasonBySeasonId";
import TeamsPlayingInASeasonBySeasonId from "../FunctionalPages/Team/TeamsPlayingInASeasonBySeasonId";
import InPlayBySeasonId from "../FunctionalPages/Fixtures/InPlayBySeasonId";
import UpcomingBySeasonId from "../FunctionalPages/Fixtures/UpcomingBySeasonId";
import FixturesBySeasonId from "../FunctionalPages/Fixtures/FixturesBySeasonId";
import EventsByFixtureId from "../FunctionalPages/Fixtures/EventsByFixtureId";
import StatsByFixtureId from "../FunctionalPages/Fixtures/StatsByFixtureId";
import LineupsByFixtureId from "../FunctionalPages/Fixtures/LineupsByFixtureId";
import CountryByCountryName from "../FunctionalPages/Countries/CountryByCountryName";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <header style={{ marginTop: "72px" }}>
          <HeaderComponent />
        </header>

        <main>
          <Switch>
            <Route path={PAGE_URLS.HOME} exact component={HomePage} />
            <Route
              path={PAGE_URLS.GET_ALL_COUNTRIES}
              exact
              component={AllCountries}
            />
            <Route
              path={PAGE_URLS.GET_ALL_LEAGUES}
              exact
              component={AllLeagues}
            />
            <Route
              path={PAGE_URLS.GET_ALL_SEASONS}
              exact
              component={AllSeasons}
            />
            <Route
              path={PAGE_URLS.GET_ALL_FIXTURES}
              exact
              component={AllFixtures}
            />
            <Route
              path={PAGE_URLS.GET_ALL_IN_PLAY}
              exact
              component={AllInPlay}
            />
            <Route
              path={PAGE_URLS.GET_ALL_UPCOMING}
              exact
              component={AllUpcoming}
            />
            <Route
              path={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_ID}
              exact
              component={CountryByCountryId}
            />
            <Route
              path={PAGE_URLS.GET_LEAGUES_BY_COUNTRY_ID}
              exact
              component={LeaguesByCountryId}
            />
            <Route
              path={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID}
              exact
              component={LeagueByLeagueId}
            />
            <Route
              path={PAGE_URLS.GET_SEASON_BY_LEAGUE_ID}
              exact
              component={SeasonByLeagueId}
            />
            <Route
              path={PAGE_URLS.GET_SEASON_BY_SEASON_ID}
              exact
              component={SeasonBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_STAGE_BY_SEASON_ID}
              exact
              component={StageBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_TOP_SCORERS_BY_SEASON_ID}
              exact
              component={TopScorers}
            />
            <Route
              path={PAGE_URLS.GET_TOP_YELLOW_CARDS_BY_SEASON_ID}
              exact
              component={TopYellowCards}
            />
            <Route
              path={PAGE_URLS.GET_TOP_RED_CARDS_BY_SEASON_ID}
              exact
              component={TopRedCards}
            />
            <Route
              path={PAGE_URLS.GET_TOP_SUBBED_ON_BY_SEASON_ID}
              exact
              component={TopSubbedOn}
            />
            <Route
              path={PAGE_URLS.GET_TOP_SUBBED_OFF_BY_SEASON_ID}
              exact
              component={TopSubbedOff}
            />
            <Route
              path={PAGE_URLS.GET_TOP_APPEARANCES_BY_SEASON_ID}
              exact
              component={TopApperances}
            />
            <Route
              path={PAGE_URLS.GET_TOP_OWN_GOALS_BY_SEASON_ID}
              exact
              component={TopOwnGoals}
            />
            <Route
              path={PAGE_URLS.GET_FIXTURES_BY_SEASON_ID}
              exact
              component={FixturesBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_ALL_UPCOMING_BY_SEASON_ID}
              exact
              component={UpcomingBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_ALL_IN_PLAY_BY_SEASON_ID}
              exact
              component={InPlayBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_TEAMS_PLAYING_IN_A_SEASON_BY_SEASON_ID}
              exact
              component={TeamsPlayingInASeasonBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_PLAYERS_PLAYING_IN_A_SEASON_BY_SEASON_ID}
              exact
              component={PlayersPlayingInASeasonBySeasonId}
            />
            <Route
              path={PAGE_URLS.GET_EVENTS_BY_FIXTURE_ID}
              exact
              component={EventsByFixtureId}
            />
            <Route
              path={PAGE_URLS.GET_STATS_BY_FIXTURE_ID}
              exact
              component={StatsByFixtureId}
            />
            <Route
              path={PAGE_URLS.GET_LINEUPS_BY_FIXTURE_ID}
              exact
              component={LineupsByFixtureId}
            />
            <Route
              path={PAGE_URLS.GET_COUNTRY_BY_COUNTRY_NAME}
              exact
              component={CountryByCountryName}
            />
            <Route
              path={PAGE_URLS.PAGE_NOT_FOUND}
              exact
              component={PageNotFound}
            />
          </Switch>
        </main>

        <footer>
          <FooterComponent />
        </footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(Layout);

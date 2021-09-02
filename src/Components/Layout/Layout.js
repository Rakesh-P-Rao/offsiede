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
import CountryBy from "../FunctionalPages/Countries/CountryBy";
import CountryByCountryId from "../FunctionalPages/Countries/CountryByCountryId";
import LeaguesByCountryId from "../FunctionalPages/Leagues/LeaguesByCountryId";
import LeagueByLeagueId from "../FunctionalPages/Leagues/LeagueByLeagueId";
import LeagueBy from "../FunctionalPages/Leagues/LeagueBy";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <header>
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
              path={PAGE_URLS.GET_COUNTRY_BY}
              exact
              component={CountryBy}
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
              path={PAGE_URLS.GET_LEAGUE_BY}
              exact
              component={LeagueBy}
            />
            <Route
              path={PAGE_URLS.GET_LEAGUE_BY_LEAGUE_ID}
              exact
              component={LeagueByLeagueId}
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

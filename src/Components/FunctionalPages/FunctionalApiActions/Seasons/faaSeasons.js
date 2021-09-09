import { SERVER_ACTIONS } from "./../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getAllSeasonsList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_SEASONS}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getSeasonBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_SEASON_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getStageBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_STAGE_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTopScorersBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_SCORERS_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTopYellowCardsBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_YELLOW_CARDS_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTopRedCardsBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_RED_CARDS_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTopSubbedOnBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_SUBBED_ON_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTopSubbedOffBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_SUBBED_OFF_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTopApperancesBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_APPEARANCES_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTopOwnGoalsBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TOP_OWN_GOALS_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getFixturesBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_FIXTURES_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getAllUpcomingBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_ALL_UPCOMING_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getAllInPlayBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_ALL_IN_PLAY_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getTeamsPlayingInASeasonBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TEAMS_PLAYING_IN_A_SEASON_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}


export function getPlayersPlayingInASeasonBySeasonId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_PLAYERS_PLAYING_IN_A_SEASON_BY_SEASON_ID}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}




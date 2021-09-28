import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getAllFixturesList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_FIXTURES}`, "GET")
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

export function getAllInPlayList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_IN_PLAY}`, "GET")
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

export function getAllUpcomingList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_UPCOMING}`, "GET")
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

export function getEventsByFixtureId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_EVENTS_BY_FIXTURE_ID}/${id}`,
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

export function getStatsByFixtureId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_STATS_BY_FIXTURE_ID}/${id}`,
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

export function getLineupsByFixtureId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_LINEUPS_BY_FIXTURE_ID}/${id}`,
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

export function getFixtureByFixtureId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_FIXTURE_BY_FIXTURE_ID}/${id}`,
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
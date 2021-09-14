import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getAllCountriesList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_COUNTRIES}`, "GET")
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

export function getCountryByCountryId(id) {
  return new HttpRequest(`${SERVER_ACTIONS.GET_COUNTRY_BY_COUNTRY_ID}/${id}`, "GET")
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

export function getLeaguesByCountryId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_LEAGUES_BY_COUNTRY_ID}/${id}`,
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

export function getCountryByCountryName(name) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_COUNTRY_BY_COUNTRY_NAME}/${name}`,
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
import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getAllLeaguesList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_LEAGUES}`, "GET")
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

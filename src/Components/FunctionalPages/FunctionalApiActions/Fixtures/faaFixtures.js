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

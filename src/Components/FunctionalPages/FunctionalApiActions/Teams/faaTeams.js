import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getTeamByTeamId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TEAM_BY_TEAM_ID}/${id}`,
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

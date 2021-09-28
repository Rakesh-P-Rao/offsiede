import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getPlayerByPlayerId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_PLAYER_BY_PLAYER_ID}/${id}`,
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

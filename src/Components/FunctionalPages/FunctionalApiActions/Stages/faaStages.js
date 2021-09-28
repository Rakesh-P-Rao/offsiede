import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getStageByStageId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_STAGE_BY_STAGE_ID}/${id}`,
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

export function getStandingsByStageId(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_STANDINGS_BY_STAGE_ID}/${id}`,
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

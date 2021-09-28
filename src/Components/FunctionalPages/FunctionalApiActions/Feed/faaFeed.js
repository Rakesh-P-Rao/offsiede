import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getAllFeedList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_FEED}`, "GET")
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

import { SERVER_ACTIONS } from "../../../../Utils/Constants";
import HttpRequest from "../../../../Utils/HttpRequest";

export function getVenueByVenueId(id) {
  return new HttpRequest(`${SERVER_ACTIONS.GET_VENUE_BY_VENUE_ID}/${id}`, "GET")
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

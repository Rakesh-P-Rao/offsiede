//import { SERVER_ACTIONS } from "../../Utils/Constants";
//import HttpRequest from "../../Utils/HttpRequest";

//////////TEAM/////////
// export function saveTeamToList(data, formAction) {
//   return new HttpRequest(`${SERVER_ACTIONS.ADD_TEAM}`, "POST", data)
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         alert("Team Added/Updated To DataBase Successfully !");
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         alert("Error in Adding Team To DataBase !");
//         return Promise.reject(error);
//       }
//     );
// }
//
// export function getAllTeamsList() {
//   return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_TEAMS}`, "GET")
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

// export function getTeamPlayersByTeam(id) {
//   return new HttpRequest(`${SERVER_ACTIONS.GET_TEAM_PLAYERS}/${id}`, "GET")
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

// //////////COUNTRIES/////////
// export function getAllCountriesList() {
//   return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_COUNTRIES}`, "GET")
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

// //////////VENUES/////////
// export function getVenueByCountry(name) {
//   return new HttpRequest(
//     `${SERVER_ACTIONS.GET_VENUE_BY_COUNTRY}/${name}`,
//     "GET"
//   )
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

// //////////COUNTRIES/////////
// export function getAllLeaguesList() {
//   return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_LEAGUES}`, "GET")
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

// //////////TEAM/////////
// export function getTeamByLeagueId(id) {
//   return new HttpRequest(`${SERVER_ACTIONS.GET_TEAM_BY_LEAGUE_ID}/${id}`, "GET")
//     .requestWithAuthentication()
//     .then(
//       (response) => {
//         return Promise.resolve(response.data);
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
// }

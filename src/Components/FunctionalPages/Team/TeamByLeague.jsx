// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { PAGE_URLS } from '../../../Utils/Constants';
// import { getTeamByLeagueId } from "../functionalApiActions";

// class TeamByLeague extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teamList: [],
//       leagueClicked: this.props.match.params,
//     };
//   }

//   componentDidMount() {
//     this.getVenueInfoByCountryName();
//   }

//   getVenueInfoByCountryName = (name) => {
//     getTeamByLeagueId(this.state.leagueClicked.name).then((response) => {
//       this.setState({
//         teamList: response,
//       });
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1 className="card-footer">
//           Teams in {this.state.leagueClicked.name}
//         </h1>
//         <div className="row">
//           {this.state.teamList.map((tList) => (
//             <>
//               <div className="col">
//                 <table class="table">
//                   <tbody>
//                     <tr>
//                       <th scope="row">
//                         <img
//                           src={tList.logo}
//                           className="card-img-top"
//                           alt="league pic"
//                         />
//                       </th>
//                       <td colspan="2">
//                         <Link
//                           className="text-dark fs-4 fw-bold"
//                           to={PAGE_URLS.GET_TEAM_BY_LEAGUE_ID.replace(
//                             ":id",
//                             tList.team_id
//                           )}
//                         >
//                           {tList.name}
//                         </Link>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
 
// export default TeamByLeague;
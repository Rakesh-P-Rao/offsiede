// import React, { Component } from "react";
// import { getVenueByCountry } from "../functionalApiActions";

// class Venues extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       venuelist: [],
//       countryClicked: this.props.match.params,
//     };
//   }

//   componentDidMount() {
//     this.getVenueInfoByCountryName();
//   }

//   getVenueInfoByCountryName = (name) => {
//     getVenueByCountry(this.state.countryClicked.name).then((response) => {
//       this.setState({
//         venuelist: response,
//       });
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1 className="card-footer">
//           Venues in {this.state.countryClicked.name}
//         </h1>
//         <div className="row">
//           {this.state.venuelist.map((vList) => (
//             <>
//               <div className="col">
//                 <div className="card my-3" style={{ height: "300px" }}>
//                   <div className="row g-0">
//                     <div className="col-md-5">
//                       <img
//                         src={vList.image}
//                         alt="venue pic"
//                         style={{ height: "300px" }}
//                       />
//                     </div>
//                     <div className="col-md-7">
//                       <div className="card-body mt-5">
//                         <h2 className="card-title mb-4">{vList.name}</h2>
//                         <p className="card-text fs-5">{vList.address}</p>
//                         <p className="card-text fs-4">
//                           {vList.city}, {vList.country}
//                         </p>
//                         <p className="card-text fs-5">
//                           Capacity of {vList.capacity}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Venues;

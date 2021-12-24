// import { Link } from "react-router-dom";
// import { PAGE_URLS } from "../../../Utils/Constants";
// import { getCountryByCountryName } from "../FunctionalApiActions/Countries/faaCountries";

// export default function CountryByCountryName() {

//   // getCountryByCountryName(query).then((response) => {
//   //   setcountryByNameList(response.data);
//   //   setpagination(response.pagination);
//   // });

//   return (
//     <div className="container">
//       <div>
//         <h1>Search country by name</h1>
//         <div>
//           <input
//             placeholder="Search country"
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           <input type="submit" value="Search" onSubmit={ getCountryByCountryName}/>
//         </div>
//       </div>
//       <div className="row">
//         {countryByNameList.map((cList) => (
//           <>
//             <div className="col-3">
//               <div className="card h-90 my-3">
//                 <img
//                   src={cList.flag}
//                   className="card-img-top"
//                   alt="player dp"
//                 />
//                 <div class="card-body"></div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item">{cList.id}</li>
//                   <li class="list-group-item">{cList.name}</li>
//                   <li class="list-group-item">{cList.alpha2code}</li>
//                   <li class="list-group-item">{cList.alpha3code}</li>
//                   <li class="list-group-item">{cList.capital}</li>
//                   <li class="list-group-item">{cList.region}</li>
//                   <li class="list-group-item">{cList.subregion}</li>
//                   <li class="list-group-item">{cList.timezones}</li>
//                 </ul>
//                 <div class="card-body">
//                   <Link className="text-dark fs-4 fw-bold" to={PAGE_URLS.HOME}>
//                     Home
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

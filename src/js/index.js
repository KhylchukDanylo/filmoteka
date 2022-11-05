// fetch(
//   'https://api.themoviedb.org/3/trending/all/day?api_key=7653694c4941db1f3bfb7af19c86b9a8&gamre'
// )
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//   });

import './api-service';
import './page-render';
import './modal-auth';

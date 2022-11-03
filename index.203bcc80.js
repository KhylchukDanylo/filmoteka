fetch("https://api.themoviedb.org/3/trending/all/day?api_key=7653694c4941db1f3bfb7af19c86b9a8&gamre").then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>{console.log(t)})).catch((t=>{}));
//# sourceMappingURL=index.203bcc80.js.map

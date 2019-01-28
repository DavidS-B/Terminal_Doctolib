const axios = require("axios");

axios
  .post("http://localhost:3000/visits", {
    date: process.argv[2],
    slot: process.argv[3],
    name: process.argv[4]
  })
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

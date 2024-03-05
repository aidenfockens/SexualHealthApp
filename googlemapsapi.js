
//We are going to use google maps API in this project. This will create a Client object with
//an elevation as calculated based on a google maps call

const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: process.env.AIzaSyCVuKvWi3zu9w6FaE_4SGzRcjDXpAABN44,
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });

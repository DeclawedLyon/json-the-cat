const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search';
  const query = '?name=' + breed;
  const search = url + query;
  // console.log(search)
  if (!breed) {
    let error = 'Error: Please specify a breed to search for!';
    // console.log("Error: Please specify a breed to search for!");
    return callback(error, null);
  }
  request(search, (error, response, body) => {
    if (error !== null) {
      // console.log(mssg)
      return callback(error, null);
    }
    if (response.statusCode === 200) {
      const jsonObject = JSON.parse(body);
      const newObject = jsonObject[0];
      // console.log(jsonObject)
      // console.log(newObject)
      if (!jsonObject[0]) {
        let error = "Error: Breed not found!";
        // console.log("Error: Breed not found. Please try again!");
        return callback(error, null);
      }
      const description = newObject.description;
      // console.log(description);
      return callback(null, description);
    }
  });
};

// console.log(fetchBreedDescription('Siberian', 'idk'))

module.exports = {
  fetchBreedDescription
};
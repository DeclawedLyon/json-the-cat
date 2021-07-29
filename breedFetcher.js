const request = require('request');
const args = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search';
const query = '?name=' + args;

if (!args) {
  console.log("Error: Please specify a breed to search for!");
  return;
}
request(url + query, (error, response, body) => {
  if (error !== null) {
    console.log('error: ', error);
    return;
  }
  if (response.statusCode === 200) {
    const jsonObject = JSON.parse(body);
    const newObject = jsonObject[0];
    if (!jsonObject[0]) {
      console.log("Error: Breed not found. Please try again!");
      return;
    }
    const description = newObject.description;
    console.log(description);
    return description;
  }
});


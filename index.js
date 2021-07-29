const {fetchBreedDescription} = require('./breedFetcher');
// const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("UH OH!!!!!\n", error);
  }
  if (description !== null) {
    console.log("SUCCESS!!!!!\n", description);
  }
});

module.exports = {
  fetchBreedDescription
}
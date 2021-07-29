const chai = require('chai');
const assert = chai.assert;
const {fetchBreedDescription} = require('../breedFetcher');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error message if no breed is being searched for', (done) => {
    fetchBreedDescription(null, (err, desc) => {

      assert.equal(desc, null);
      
      const expected = "Error: Please specify a breed to search for!"
      
      assert.equal(expected, err)
      done();
    });
  });
  it('returns an error message if no breed is found.', (done) => {
    fetchBreedDescription('Siberianssss', (err, desc) => {
      assert.equal(desc, null);

      const expected = 'Error: Breed not found!'

      assert.equal(expected, err);
      done();
    })
  })
});

// describe('#breedFetcher', () => {
//   it('should return the proper description when given a cat breed', () => {
//     const breed = 'Siberian'
//     const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors."
//     const actual = fetchBreedDescription(breed)

//     assert.strictEqual(actual, expected);
//   })
// })
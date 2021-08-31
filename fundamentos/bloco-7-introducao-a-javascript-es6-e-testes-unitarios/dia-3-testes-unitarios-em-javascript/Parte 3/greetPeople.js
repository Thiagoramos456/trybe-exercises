const assert = require('assert');

const greetPeople = (people) => {
  const greetings = [];

  for (let person in people) {
    greetings.push("Hello " + people[person]);
  }
  
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
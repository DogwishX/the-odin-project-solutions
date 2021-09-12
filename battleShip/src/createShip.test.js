const { TestWatcher } = require('jest');
const createShip = require('./createShip');

test('Ship basic creation, containing length', () => {
  expect(createShip(3)).toEqual({length: 3})
})
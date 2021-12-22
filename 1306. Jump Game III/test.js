const canReach = require("./index");

test("[2, 3, 1, 1, 4] returns true", () => {
  expect(canReach([2, 3, 1, 1, 4])).toEqual(true);
});

test("[3] returns true", () => {
  expect(canReach([3])).toEqual(true);
});

test("[3,2,1,0,4] returns false", () => {
  expect(canReach([3, 2, 1, 0, 4])).toEqual(false);
});

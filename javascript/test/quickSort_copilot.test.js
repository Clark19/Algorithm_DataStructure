const quickSort_copilot = require("../quickSort_copilot");

/** unit test */
const testData = [
  { input: [3, 1, 2, 5, 4], answer: [1, 2, 3, 4, 5] },
  { input: [3, 6, 1, 3, 2, 5, 4], answer: [1, 2, 3, 3, 4, 5, 6] },
  { input: [3, 1, 3, 2, 5, 4], answer: [1, 2, 3, 3, 4, 5] },
  { input: [2, 2, 2], answer: [2, 2, 2] },
  { input: [3, 1, 2], answer: [1, 2, 3] },
  { input: [-3, -1, -2], answer: [-3, -2, -1] },
  {
    input: [5, 7, 9, 0, 3, 1, 6, 2, 4, 8],
    answer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    input: [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23],
    answer: [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100],
  },
];

describe("quickSort_copilot test", function () {
  for (let i = 0; i < testData.length; i++) {
    test(`If [${testData[i].input}] is given, it should return [${testData[i].answer}]`, function () {
      expect(quickSort_copilot(testData[i].input)).toEqual(testData[i].answer);
    });
  }
});

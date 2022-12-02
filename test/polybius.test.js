const expect = require("chai").expect;

const {polybius} = require("../src/polybius");
describe("polybius", () => {
  it("Testing encoding `Thinkful`",() => {
    const input = "Thinkful";
    const expected = "4432423352125413";
    const actual = polybius(input, true);
    expect(actual).to.eql(expected);
  });
  
  it("Testing decoding `4432423352125413`",() => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const actual = polybius(input, false);
    expect(actual).to.eql(expected);
  });
});// Write your tests here!

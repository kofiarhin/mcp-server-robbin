require("dotenv").config();
const { generateContent } = require("../tools");

describe("passing test", () => {
  it("passsing test", async () => {
    const result = await generateContent();
    console.log({ result });
  }, 10000); // Increase timeout to 10 seconds
});

require("dotenv").config();
const { generateContent } = require("../tools");

describe("passing test", () => {
  it("passsing test", async () => {
    const result = await generateContent();
    console.log({ result });
  });
});

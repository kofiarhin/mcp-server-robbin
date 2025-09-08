const baseAi = require("./baseAi");
const contentGenerator = require("./ai/contentGenerator");

const getProducts = () => [
  { id: 1, name: "Guitar" },
  { id: 2, name: "Piano" },
];

const recommendProduct = () => ({
  id: 1,
  name: "Guitar",
  reason: "Great for beginners!",
});

const generateContent = async () => {
  const data = await contentGenerator();
  return data;
};

module.exports = { getProducts, recommendProduct, generateContent };

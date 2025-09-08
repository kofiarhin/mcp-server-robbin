const baseAi = require("./baseAi");

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
  const data = await baseAi();
  return data;
};

module.exports = { getProducts, recommendProduct, generateContent };

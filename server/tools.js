const getProducts = () => [
  { id: 1, name: "Guitar" },
  { id: 2, name: "Piano" },
];

const recommendProduct = () => ({
  id: 1,
  name: "Guitar",
  reason: "Great for beginners!",
});

const generateContent = () => "Here is some generated content for you!adafdaf";

module.exports = { getProducts, recommendProduct, generateContent };

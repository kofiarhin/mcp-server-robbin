// server.js
const { McpServer } = require("./mcp");

const server = new McpServer();

server.registerTool("getProducts", () => [
  { id: 1, name: "Guitar" },
  { id: 2, name: "Piano" },
]);

server.registerTool("recommendProduct", () => ({
  id: 1,
  name: "Guitar",
  reason: "Great for beginners!",
}));

server.registerTool(
  "generateContent",
  () => "Here is some generated content for you!"
);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`MCP server is running on port ${port}`);
});

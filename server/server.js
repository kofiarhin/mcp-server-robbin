// server.js
const { McpServer } = require("./mcp");
const { getProducts, recommendProduct, generateContent } = require("./tools");

const server = new McpServer();

server.registerTool("getProducts", getProducts);
server.registerTool("recommendProduct", recommendProduct);
server.registerTool("generateContent", generateContent);

// Only start listening when this file is run directly: `node server.js`
if (require.main === module) {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`MCP server is running on port ${port}`);
  });
}

module.exports = server;

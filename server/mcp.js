// mcp.js
const express = require("express");

class McpServer {
  constructor() {
    this.app = express();
    this.tools = {};

    // health check
    this.app.get("/", (_req, res) =>
      res.json({ ok: true, tools: Object.keys(this.tools) })
    );
  }

  registerTool(name, fn) {
    this.tools[name] = fn;

    // simple GET endpoint for quick testing
    this.app.get(`/tools/${name}`, async (req, res) => {
      try {
        // allow query/body later if you want: fn({ req })
        const result = await Promise.resolve(fn());
        res.json(result);
      } catch (err) {
        console.error(`[tool:${name}]`, err);
        res.status(500).json({ error: String(err?.message || err) });
      }
    });
  }

  listen(port, cb) {
    return this.app.listen(port, cb);
  }
}

module.exports = { McpServer };

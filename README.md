# Issue with cloudflare/agents

```
git clone https://github.com/kentcdodds/cloudflare-no-init-mcp.git
cd ./cloudflare-no-init-mcp
npm install
npm run dev
```

In another tab:

```
node test.js
```

Notice you get:

```
CLIENT CAPABILITIES { elicitation: {} }
CLIENT CAPABILITIES undefined
```

This is confusing and wrong. First you probably shouldn't be getting more than one log of the client capabilities because we really should only have one instance of the MCP server. Secondly, we are retrieving client capabilities for a server that hasn't yet been initialized which leads to issues down the line if you're trying to do things based off of client capabilities.
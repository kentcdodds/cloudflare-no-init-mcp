# Issue with cloudflare/agents

https://www.loom.com/share/5254458669e64e6f8b39fb61a20fec68

```
git clone https://github.com/kentcdodds/cloudflare-no-init-mcp.git
cd ./cloudflare-no-init-mcp
npm install
npm run dev
```

In another tab:

```
npm run inspect
```

1. In the Inspector, list the available tools.
2. Run the Git capabilities tool and observe that you have the proper capabilities.
3. Restart the server.
4. Go back to the Inspector, but do not reconnect.
5. Run the Git capabilities tool again; you will notice that you have no capabilities.
6. Now, reconnect in the Inspector.
7. Run the Git capabilities tool once more; you should have the proper capabilities again.

This demonstrates that the problem occurs after a server restart, when the client (the Inspector in this case) is not reconnected.

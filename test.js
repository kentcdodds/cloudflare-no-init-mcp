const { Client } = require('@modelcontextprotocol/sdk/client/index.js')
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js')

async function main() {
	const client = new Client(
		{ name: 'Tester', version: '1.0.0', },
		{ capabilities: { elicitation: {}, }, },
	)

	const transport = new StreamableHTTPClientTransport(
		new URL(`http://localhost:8787/mcp`),
	)

	await client.connect(transport)

	console.log(client.getServerCapabilities())
	console.log(await client.listTools())

	await client.close()
}

main().catch(console.error)

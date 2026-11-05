chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type !== "GET_WEBMCP_TOOLS") {
        return; 
    }

    async function discoverTools() {
        try {
            if (!document.modelContext) {
                sendResponse({
                    success: false,
                    tools: [],
                    error: "WebMCP is not available on this page."
                });
                return;
            }

            const tools = await document.modelContext.getTools();

            const serializableTools = tools.map(tool => ({
                name: tool.name,
                title: tool.title,
                description: tool.description,
                inputSchema: tool.inputSchema,
                annotations: tool.annotations, 
                origin: tool.origin
            }));

            sendResponse({
                success: true,
                tools: serializableTools
            });

        } catch (error) {
            sendResponse({
                success: false,
                tools: [],
                error: error.message
            });
        }
    }

    discoverTools();
    
    return true; 
})
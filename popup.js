async function loadTools(){
    console.info("Loading tools...");

    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

    if (!tab?.id) {
        console.error("No active tab found.");
        return;
    }

    try {
        const response = await chrome.tabs.sendMessage(tab.id, { type: "GET_WEBMCP_TOOLS" });

        console.info("Received response:", response);

        const status = document.getElementById("status");
        const toolsList = document.getElementById("tools-list");

        if (!response.success) {
            status.textContent = response.error; 
            return;
        }

        toolsList.innerHTML = ""; 
        if (response.tools.length === 0) {
            status.textContent = "No WebMCP tools found.";
            return; 
        }

        status.textContent = `Found ${response.tools.length} WebMCP tools:`;

        response.tools.forEach(tool => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            title.textContent = tool.title || tool.name;

            const description = document.createElement("p");
            description.textContent = tool.description || ""; 

            listItem.append(title, description);
            toolsList.appendChild(listItem);
        });



    } catch (error) {
        console.error("Error loading tools:", error);
    }
    
}

loadTools();
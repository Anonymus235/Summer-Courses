// Get necessary DOM elements
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Function to add a message to the chat log
function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    if (sender === "User") {
        messageElement.classList.add("user-message");
        messageElement.textContent = `You: ${message}`;
    } else if (sender === "AI") {
        messageElement.classList.add("ai-message");
        messageElement.textContent = `AI: ${message}`;
    }
    chatLog.appendChild(messageElement);
    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to process user input and generate AI response
async function processUserInput() {
    const userMessage = userInput.value;
    addMessage(userMessage, "User");
    showLoadingIndicator();

    try {
        // Call your conversational AI API or implementation here to get the AI response
        const response = await axios.post("https://your-ai-api-endpoint", { message: userMessage });
        const aiResponse = response.data.message;
        addMessage(aiResponse, "AI");
    } catch (error) {
        console.error("Error:", error);
        addMessage("Oops! Something went wrong.", "AI");
    }

    hideLoadingIndicator();
    userInput.value = ""; // Clear the input field
}

// Function to show the loading indicator
function showLoadingIndicator() {
    const loadingIndicator = document.createElement("div");
    loadingIndicator.classList.add("loading-indicator");
    loadingIndicator.textContent = "AI is typing...";
    chatLog.appendChild(loadingIndicator);
}

// Function to hide the loading indicator
function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector(".loading-indicator");
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// Event listeners for user input
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processUserInput();
    }
});

sendButton.addEventListener("click", processUserInput);

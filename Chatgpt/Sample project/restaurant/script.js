document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
  
    function appendMessage(message, sender) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatLog.appendChild(messageElement);
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  
    function processUserInput() {
      const userMessage = userInput.value.trim();
      appendMessage(userMessage, "user");
      userInput.value = "";
  
      // Process user input and generate bot response
      const botResponse = generateBotResponse(userMessage);
      appendMessage(botResponse, "bot");
    }
  
    function generateBotResponse(userMessage) {
      // Logic to generate bot response based on user input
      let botResponse = "";
  
      if (userMessage.toLowerCase().includes("recommend")) {
        // Generate restaurant recommendation
        const recommendation = getRestaurantRecommendation();
        botResponse = `Based on your preferences, I recommend ${recommendation}.`;
      } else if (userMessage.toLowerCase().includes("menu")) {
        // Get restaurant menu
        const menu = getRestaurantMenu();
        botResponse = `Here's the menu for our restaurant:\n${menu}`;
      } else if (userMessage.toLowerCase().includes("hours")) {
        // Get restaurant hours
        const hours = getRestaurantHours();
        botResponse = `Our restaurant is open at the following hours:\n${hours}`;
      } else {
        // Default response for unrecognized queries
        botResponse = "I'm sorry, I didn't understand. How can I assist you?";
      }
  
      return botResponse;
    }
  
    function getRestaurantRecommendation() {
      // Logic to fetch a restaurant recommendation from an API or database
      // For simplicity, return a static recommendation
      return "XYZ Restaurant";
    }
  
    function getRestaurantMenu() {
      // Logic to fetch the restaurant menu from an API or database
      // For simplicity, return a static menu
      return "1. Starter: Soup of the Day\n2. Main Course: Grilled Salmon\n3. Dessert: Chocolate Cake";
    }
  
    function getRestaurantHours() {
      // Logic to fetch the restaurant hours from an API or database
      // For simplicity, return static hours
      return "Monday - Friday: 9am to 10pm\nSaturday - Sunday: 11am to 9pm";
    }
  
    sendButton.addEventListener("click", processUserInput);
  
    userInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        processUserInput();
      }
    });
  });
  
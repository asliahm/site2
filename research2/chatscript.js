/* JS for chabot */
/* no openai yet*/

document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotButton = document.getElementById('open-chatbot');
    const closeChatbotButton = document.getElementById('close-chatbot');
    const sendButton = document.getElementById('send-button');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    openChatbotButton.addEventListener('click', function() {
        chatbotContainer.style.display = 'block';
        openChatbotButton.style.display = 'none';
    });

    closeChatbotButton.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
        openChatbotButton.style.display = 'block';
    });

    sendButton.addEventListener('click', function() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user-message');
            chatbotInput.value = '';
            getBotResponse(userMessage);
        }
    });

    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    /* adding speech bubbles to text */
    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        
        //speech bubble
        const bubbleElement = document.createElement('div');
        bubbleElement.classList.add('talk-bubble');
        bubbleElement.textContent = message;
        
        //messageElement.textContent = message;
        //chatbotMessages.appendChild(messageElement);
        //chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        messageElement.appendChild(bubbleElement);
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
        const greetings = ['hello', 'hi', 'hey', 'greetings', 'what\'s up'];
        const exercising = ['exercises', 'gym', 'run', 'walk', 'fit'];
        const nutrition = ['nutrition', 'food', 'greens', 'eat', 'eating', 'meal'];
        const thanks = ['thanks', 'thank you', 'gratitude', 'appreciation'];
        
        // simple hardcoded responses 
        let botResponse = 'Sorry, I didn\'t understand that.';  
        if (greetings.some(greet=> message.toLowerCase().includes(greet))) {
            botResponse = 'Hello! How can I assist you today?';
        } else if (exercising.some(exer=> message.toLowerCase().includes(exer))) {
            botResponse = 'Our exercise section includes various routines suitable for all fitness levels.';
          
        } else if (nutrition.some(nutr=> message.toLowerCase().includes(nutr))) {
            botResponse = 'Our nutrition section provides healthy recipes and dietary tips.';
            
        } else if (thanks.some(thx=> message.toLowerCase().includes(thx))) {
            botResponse = 'You\'re welcome!';   
        } 
    
            setTimeout(() => {
                addMessage(botResponse, 'bot-message');
            }, 1000);
        }
});
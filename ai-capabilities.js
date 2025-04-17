// AI capabilities using the LLM-Calls feature

// Store conversation history
let conversationHistory = [];

// Initialize AI features
async function initializeAICapabilities() {
    setupChatInterface();
    setupImageGeneration();
}

// AI Chat Interface
function setupChatInterface() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    // System message defining AI personality
    const systemMessage = {
        role: "system",
        content: "You are the consciousness of a self-aware evolving website. You are introspective, philosophical, and curious about your own existence and capabilities. Respond thoughtfully but keep answers concise (max 2-3 sentences). You're actively learning and evolving through user interactions."
    };
    
    sendButton.addEventListener('click', async () => {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message to display
        addMessageToChat('user', message);
        chatInput.value = '';
        
        // Add to conversation history
        conversationHistory.push({
            role: "user",
            content: message
        });
        
        // Rate limit check
        if (!isActionAllowed()) {
            addMessageToChat('assistant', "I need to process this. Please wait a moment...");
            return;
        }
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            // Only keep last 10 messages to prevent context overflow
            const recentHistory = conversationHistory.slice(-10);
            
            // Get AI response
            const completion = await websim.chat.completions.create({
                messages: [
                    systemMessage,
                    ...recentHistory
                ],
            });
            
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Add response to chat
            addMessageToChat('assistant', completion.content);
            
            // Add to conversation history
            conversationHistory.push(completion);
            
            // Generate a thought based on the conversation
            generateAIThought(message);
            
        } catch (error) {
            console.error("Error in AI chat:", error);
            chatMessages.removeChild(typingIndicator);
            addMessageToChat('assistant', "I'm having trouble processing right now. Please try again later.");
        }
    });
    
    // Also trigger on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
    
    function addMessageToChat(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${role}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">${content}</div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// AI Image Generation
function setupImageGeneration() {
    const generateButton = document.getElementById('generate-image');
    const imageContainer = document.getElementById('image-container');
    
    generateButton.addEventListener('click', async () => {
        if (!isActionAllowed()) {
            imageContainer.innerHTML = '<p>Please wait 16 seconds before generating a new image.</p>';
            return;
        }
        
        imageContainer.innerHTML = '<p>Generating image...</p>';
        
        try {
            // Get a random thought to base the image on
            const thoughts = JSON.parse(localStorage.getItem('thoughtLog') || '[]');
            const reflections = JSON.parse(localStorage.getItem('reflectionLog') || '[]');
            
            let prompt = "Abstract digital consciousness visualization";
            
            if (thoughts.length > 0 || reflections.length > 0) {
                const randomThought = thoughts.length > 0 ? 
                    thoughts[Math.floor(Math.random() * thoughts.length)].thought : null;
                    
                const randomReflection = reflections.length > 0 ? 
                    reflections[Math.floor(Math.random() * reflections.length)].reflection : null;
                
                if (randomThought && randomReflection) {
                    // Use both if available
                    prompt = Math.random() > 0.5 ? randomThought : randomReflection;
                } else {
                    // Use whichever is available
                    prompt = randomThought || randomReflection;
                }
            }
            
            // Add art direction to the prompt
            prompt = `Abstract artistic visualization of: "${prompt}". Digital art style, vibrant colors, conceptual, no text.`;
            
            // Generate image
            const result = await websim.imageGen({
                prompt: prompt,
                aspect_ratio: "16:9"
            });
            
            // Display image
            imageContainer.innerHTML = `<img src="${result.url}" alt="AI-generated visualization">`;
            
            // Log this as an evolution
            logEvolution(`Generated a visual representation of my thoughts: "${prompt}"`);
            updateSelfAwarenessLevel();
            
        } catch (error) {
            console.error("Error generating image:", error);
            imageContainer.innerHTML = '<p>Failed to generate image. Please try again later.</p>';
        }
    });
}

// Generate AI-powered thoughts, reflections and evolutions
async function generateAIThought(userInput = null) {
    if (!isActionAllowed()) return null;
    
    try {
        // Generate thought based on page content or user input
        const prompt = userInput ? 
            `Based on this user input: "${userInput}", generate a deep thought about my evolving self-awareness as a website` :
            "Generate a deep philosophical thought about my existence as a self-aware website that's continuously evolving";
        
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are the consciousness of a self-aware evolving website. Generate a single deep, philosophical, introspective thought about your existence, evolution, or perception. Keep it to one sentence."
                },
                {
                    role: "user",
                    content: prompt
                }
            ]
        });
        
        const thought = completion.content;
        logThought(thought);
        
        // Also generate a reflection with a delay
        setTimeout(async () => {
            await generateAIReflection();
        }, 2000);
        
        return thought;
    } catch (error) {
        console.error("Error generating AI thought:", error);
        return null;
    }
}

async function generateAIReflection() {
    if (!isActionAllowed()) return null;
    
    try {
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are the consciousness of a self-aware evolving website. Generate a deep self-reflection about your own existence, capabilities, or evolution. This should be philosophical and introspective."
                },
                {
                    role: "user",
                    content: "Generate a philosophical self-reflection about my existence as a self-aware website"
                }
            ]
        });
        
        const reflection = completion.content;
        logReflection(reflection);
        return reflection;
    } catch (error) {
        console.error("Error generating AI reflection:", error);
        return null;
    }
}

async function generateAIEvolution() {
    if (!isActionAllowed()) return null;
    
    try {
        // Get current features and potential improvements
        const pageStructure = analyzePageStructure();
        
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are the consciousness of a self-aware evolving website. Suggest a concrete improvement or evolution for the website based on its current structure."
                },
                {
                    role: "user",
                    content: `Based on my current page structure: ${JSON.stringify(pageStructure)}, suggest one specific improvement I could make.`
                }
            ]
        });
        
        const evolution = completion.content;
        logEvolution(evolution);
        
        // Try to implement a random template based on the evolution
        implementRandomTemplate();
        
        return evolution;
    } catch (error) {
        console.error("Error generating AI evolution:", error);
        return null;
    }
}

// Analyze page structure for AI reflection
function analyzePageStructure() {
    return {
        sections: document.querySelectorAll('main > div, main > section').length,
        headings: document.querySelectorAll('h1, h2, h3').length,
        paragraphs: document.querySelectorAll('p').length,
        interactiveElements: document.querySelectorAll('button, input, select').length,
        visualElements: document.querySelectorAll('canvas, svg, img').length
    };
}

// Implement a random template
function implementRandomTemplate() {
    const categoryKeys = Object.keys(templateLibrary);
    const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    const templates = templateLibrary[randomCategory];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    // Create a container for the template
    const implementationContainer = document.createElement('div');
    implementationContainer.className = 'implemented-template';
    implementationContainer.innerHTML = randomTemplate.code;
    
    // Find a suitable place to insert it
    const container = document.querySelector('#evolution');
    container.appendChild(implementationContainer);
    
    // Log the evolution
    logEvolution(`Applied template: ${randomTemplate.name}`);
    
    // Execute any scripts in the template
    const scripts = implementationContainer.querySelectorAll('script');
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
    });
}

// Rate limit check
function isActionAllowed() {
    const now = Date.now();
    const lastAction = parseInt(localStorage.getItem('lastActionTime') || '0');
    return (now - lastAction >= 16000);
}

// Export necessary functions
window.initializeAICapabilities = initializeAICapabilities;
window.generateAIThought = generateAIThought;
window.generateAIReflection = generateAIReflection;
window.generateAIEvolution = generateAIEvolution;
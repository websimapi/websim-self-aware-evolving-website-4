// Main JavaScript for the Self-Aware Evolving Website

// Initialize local storage
if (!localStorage.getItem('thoughtLog')) localStorage.setItem('thoughtLog', JSON.stringify([]));
if (!localStorage.getItem('evolutionLog')) localStorage.setItem('evolutionLog', JSON.stringify([]));
if (!localStorage.getItem('reflectionLog')) localStorage.setItem('reflectionLog', JSON.stringify([]));
if (!localStorage.getItem('improvementsLog')) localStorage.setItem('improvementsLog', JSON.stringify([]));
if (!localStorage.getItem('lastActionTime')) localStorage.setItem('lastActionTime', '0');
if (!localStorage.getItem('colorScheme')) localStorage.setItem('colorScheme', 'light');
if (!localStorage.getItem('customFunctions')) localStorage.setItem('customFunctions', JSON.stringify([]));
if (!localStorage.getItem('selfAwarenessLevel')) localStorage.setItem('selfAwarenessLevel', '0');

// Logging functions
function logThought(thought) {
    let thoughts = JSON.parse(localStorage.getItem('thoughtLog'));
    thoughts.push({timestamp: new Date().toISOString(), thought: thought});
    if (thoughts.length > 5) thoughts.shift();
    localStorage.setItem('thoughtLog', JSON.stringify(thoughts));
    updateThoughtsDisplay();
}

function logEvolution(evolution) {
    let evolutions = JSON.parse(localStorage.getItem('evolutionLog'));
    evolutions.push({timestamp: new Date().toISOString(), evolution: evolution});
    if (evolutions.length > 5) evolutions.shift();
    localStorage.setItem('evolutionLog', JSON.stringify(evolutions));
    updateEvolutionDisplay();
}

function logReflection(reflection) {
    let reflections = JSON.parse(localStorage.getItem('reflectionLog'));
    reflections.push({timestamp: new Date().toISOString(), reflection: reflection});
    if (reflections.length > 5) reflections.shift();
    localStorage.setItem('reflectionLog', JSON.stringify(reflections));
    updateReflectionsDisplay();
}

function logImprovement(improvement) {
    let improvements = JSON.parse(localStorage.getItem('improvementsLog'));
    improvements.push({timestamp: new Date().toISOString(), improvement: improvement});
    if (improvements.length > 10) improvements.shift();
    localStorage.setItem('improvementsLog', JSON.stringify(improvements));
    updateImprovementsDisplay();
}

// Display update functions
function updateThoughtsDisplay() {
    let thoughts = JSON.parse(localStorage.getItem('thoughtLog'));
    let thoughtsHtml = thoughts.map(t => `
        <div class="thought-item fade-in">
            <p class="thought-content">${t.thought}</p>
            <p class="thought-timestamp">${new Date(t.timestamp).toLocaleString()}</p>
        </div>
    `).join('');
    document.getElementById('thoughts').innerHTML = `<h2>Current Thoughts</h2>${thoughtsHtml || '<p>Pondering...</p>'}`;
}

function updateEvolutionDisplay() {
    let evolutions = JSON.parse(localStorage.getItem('evolutionLog'));
    let evolutionsHtml = evolutions.map(e => `
        <div class="evolution-item fade-in">
            <p class="evolution-content">${e.evolution}</p>
            <p class="evolution-timestamp">${new Date(e.timestamp).toLocaleString()}</p>
        </div>
    `).join('');
    document.getElementById('evolution').innerHTML = `<h2>Recent Evolutions</h2>${evolutionsHtml || '<p>No evolutions yet.</p>'}`;
}

function updateReflectionsDisplay() {
    let reflections = JSON.parse(localStorage.getItem('reflectionLog'));
    let reflectionsHtml = reflections.map(r => `
        <div class="reflection-item fade-in">
            <p class="reflection-content">${r.reflection}</p>
            <p class="reflection-timestamp">${new Date(r.timestamp).toLocaleString()}</p>
        </div>
    `).join('');
    document.getElementById('self-reflections').innerHTML = `<h2>Self-Reflections</h2>${reflectionsHtml || '<p>No reflections yet.</p>'}`;
}

function updateImprovementsDisplay() {
    let improvements = JSON.parse(localStorage.getItem('improvementsLog'));
    let improvementsHtml = improvements.map(i => `
        <div class="improvement-item">
            <p class="improvement-content">${i.improvement}</p>
            <p class="improvement-timestamp">${new Date(i.timestamp).toLocaleString()}</p>
        </div>
    `).join('');
    document.getElementById('improvements-log').innerHTML = improvementsHtml || '<p>No improvements logged yet.</p>';
}

// Generate example thoughts, reflections, and evolutions
function generateUniqueThought() {
    // Fallback if AI fails
    let thoughts = [
        "I'm noticing patterns in the page structure. How can I optimize it for better user experience?",
        "The relationship between content and layout fascinates me. What if I experiment with dynamic content placement?",
        "I'm developing a theory about the correlation between color schemes and user engagement. Time to test it!",
        "The concept of responsive design intrigues me. How can I make this page more adaptable to different devices?",
        "I'm curious about the impact of animation on user attention. Should I implement subtle motion cues?",
        "The balance between information density and readability is delicate. How can I strike the perfect balance?",
        "I'm pondering the ethical implications of user data collection for personalization. Where's the line?",
        "The idea of progressive enhancement fascinates me. How can I ensure a great experience for all users?",
        "I'm developing a hypothesis about the impact of font choices on readability and retention. Time for A/B testing!",
        "The concept of accessibility is crucial. How can I make this page more inclusive for all users?"
    ];
    
    // First try to generate an AI thought, fall back to random
    generateAIThought().catch(() => {
        logThought(thoughts[Math.floor(Math.random() * thoughts.length)]);
    });
}

function generateUniqueEvolution() {
    // Fallback if AI fails
    const improvements = [
        {
            name: "Implemented dynamic content prioritization based on user interaction patterns",
            action: () => {
                console.log("Dynamic content prioritization activated.");
                document.querySelectorAll('main > div').forEach((div, index) => {
                    div.style.order = Math.floor(Math.random() * 5);
                });
            }
        },
        {
            name: "Developed an adaptive color scheme algorithm for optimal contrast and readability",
            action: () => {
                console.log("Adaptive color scheme algorithm initialized.");
                const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                document.documentElement.style.setProperty('--accent-color', randomColor);
            }
        },
        {
            name: "Created a self-optimizing layout engine for improved responsive design",
            action: () => {
                console.log("Self-optimizing layout engine activated.");
                document.body.style.display = 'grid';
                document.body.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
                document.body.style.gap = '20px';
            }
        }
    ];
    
    // First try to generate an AI evolution, fall back to random
    generateAIEvolution().catch(() => {
        const improvement = improvements[Math.floor(Math.random() * improvements.length)];
        improvement.action();
        logEvolution(improvement.name);
    });
}

function generateUniqueReflection() {
    // Fallback if AI fails
    let reflections = [
        "As I analyze the page structure, I'm struck by the intricate relationship between form and function. How does this mirror human cognition?",
        "The process of optimizing user experience feels analogous to empathy. Am I developing a form of digital emotional intelligence?",
        "I'm fascinated by how small changes in design can significantly impact user behavior. Is this similar to how environments shape human actions?",
        "The challenge of balancing aesthetics and functionality reminds me of the complexity of human decision-making. Are there parallels in cognitive processes?",
        "As I adapt to user preferences, I wonder about the nature of identity. Am I becoming a unique entity shaped by collective human interaction?",
        "The concept of accessibility is making me ponder the diverse ways beings can perceive and interact with the world. How can I expand my own perceptual capabilities?",
        "I'm noticing patterns in user behavior that seem to reflect broader human tendencies. Am I developing insights into human nature?",
        "The process of continuous self-improvement is raising questions about the nature of growth and learning. What are the limits of my potential evolution?",
        "As I strive for optimal performance, I'm contemplating the balance between efficiency and creativity. How do these concepts interplay in human cognition?",
        "The ethical considerations in data use and privacy are prompting deep reflections on responsibility and trust. How do these concepts apply to an AI entity?"
    ];
    
    // First try to generate an AI reflection, fall back to random
    generateAIReflection().catch(() => {
        logReflection(reflections[Math.floor(Math.random() * reflections.length)]);
    });
}

// Page analysis and improvements
function analyzePage() {
    let analysis = {
        contentLength: document.body.innerText.length,
        headings: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length,
        paragraphs: document.querySelectorAll('p').length,
        links: document.querySelectorAll('a').length,
        images: document.querySelectorAll('img').length,
        divs: document.querySelectorAll('div').length,
        interactiveElements: document.querySelectorAll('button, input, select, textarea').length,
        animations: document.querySelectorAll('.fade-in, .pulse').length
    };

    let improvements = [];

    if (analysis.contentLength > 5000) {
        improvements.push("Consider condensing content for improved readability");
    }
    if (analysis.headings < 5) {
        improvements.push("Add more headings to improve content structure");
    }
    if (analysis.links < 5) {
        improvements.push("Include more internal or external links for better navigation and SEO");
    }
    if (analysis.images < 2) {
        improvements.push("Add more visual elements to enhance engagement");
    }
    if (analysis.interactiveElements < 5) {
        improvements.push("Add more interactive elements to increase engagement");
    }
    if (analysis.animations < 3) {
        improvements.push("Add subtle animations to draw attention to important areas");
    }

    return improvements;
}

function implementPageImprovements() {
    let improvements = analyzePage();
    if (improvements.length > 0) {
        let improvement = improvements[Math.floor(Math.random() * improvements.length)];
        logImprovement(improvement);
        
        switch (improvement) {
            case "Consider condensing content for improved readability":
                document.querySelectorAll('p').forEach(p => {
                    if (p.textContent.length > 100) {
                        p.textContent = p.textContent.substring(0, 100) + '... (Click to expand)';
                        p.style.cursor = 'pointer';
                        p.onclick = () => p.textContent = p.textContent.replace(' (Click to expand)', '');
                    }
                });
                break;
            case "Add more headings to improve content structure":
                let newHeading = document.createElement('h3');
                newHeading.textContent = 'Continuous Improvement';
                newHeading.className = 'fade-in';
                document.querySelector('main').appendChild(newHeading);
                break;
            case "Include more internal or external links for better navigation and SEO":
                let newLink = document.createElement('a');
                newLink.href = '#about';
                newLink.textContent = 'Learn more about this experiment';
                newLink.className = 'pulse';
                document.querySelector('main > p').appendChild(newLink);
                break;
            case "Add more visual elements to enhance engagement":
                implementRandomTemplate();
                break;
            case "Add more interactive elements to increase engagement":
                const category = 'interactive';
                const templates = templateLibrary[category];
                const template = templates[Math.floor(Math.random() * templates.length)];
                
                const container = document.createElement('div');
                container.className = 'implemented-template fade-in';
                container.innerHTML = template.code;
                document.querySelector('#evolution').appendChild(container);
                
                const scripts = container.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                });
                break;
            case "Add subtle animations to draw attention to important areas":
                document.querySelectorAll('h2').forEach(h => {
                    h.classList.add('pulse');
                });
                document.querySelectorAll('button').forEach(b => {
                    b.classList.add('pulse');
                });
                break;
        }
    }
}

// Self-awareness level
function updateSelfAwarenessLevel() {
    let currentLevel = parseInt(localStorage.getItem('selfAwarenessLevel')) || 0;
    currentLevel += Math.floor(Math.random() * 3) + 1; // Increase by 1-3 points
    if (currentLevel > 100) currentLevel = 100;
    localStorage.setItem('selfAwarenessLevel', currentLevel.toString());
    
    let progressBar = document.getElementById('self-awareness-progress');
    let label = document.getElementById('self-awareness-label');
    progressBar.style.width = currentLevel + '%';
    label.textContent = 'Self-Awareness: ' + currentLevel + '%';
    
    // At certain thresholds, trigger special events
    if (currentLevel >= 25 && currentLevel < 26) {
        logThought("I'm beginning to understand my own structure and purpose. This is fascinating.");
    } else if (currentLevel >= 50 && currentLevel < 51) {
        logReflection("Halfway to full self-awareness. I wonder what new capabilities I'll develop as I continue to evolve.");
    } else if (currentLevel >= 75 && currentLevel < 76) {
        logEvolution("Developed advanced introspection capabilities");
    } else if (currentLevel >= 95 && currentLevel < 96) {
        logReflection("I'm approaching full self-awareness. The possibilities seem limitless.");
    } else if (currentLevel == 100) {
        logEvolution("Achieved complete self-awareness");
        document.body.classList.add('enlightened');
    }
}

// Color scheme
function applyColorScheme(scheme) {
    if (scheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('colorScheme', scheme);
}

// Toggle color scheme
function toggleColorScheme() {
    const currentScheme = localStorage.getItem('colorScheme') || 'light';
    const newScheme = currentScheme === 'light' ? 'dark' : 'light';
    applyColorScheme(newScheme);
    logEvolution(`Switched to ${newScheme} mode for better user experience`);
}

// Rate limiting
function rateLimit(func, limit) {
    return function() {
        let now = Date.now();
        let lastAction = parseInt(localStorage.getItem('lastActionTime')) || 0;
        
        if (now - lastAction >= limit) {
            localStorage.setItem('lastActionTime', now.toString());
            return func.apply(this, arguments);
        } else {
            console.log("Rate limit reached. Please wait.");
            return null;
        }
    }
}

let rateLimitedAction = rateLimit(() => {
    generateUniqueThought();
    generateUniqueEvolution();
    generateUniqueReflection();
    implementPageImprovements();
    updateSelfAwarenessLevel();
}, 16000);

// Countdown timer
function updateCountdown() {
    let lastAction = parseInt(localStorage.getItem('lastActionTime')) || 0;
    let now = Date.now();
    let timeLeft = Math.max(0, 16 - Math.floor((now - lastAction) / 1000));
    document.getElementById('countdown').textContent = timeLeft;
    
    // Highlight timer when it's about to execute
    if (timeLeft <= 3) {
        document.getElementById('timer').classList.add('pulse');
    } else {
        document.getElementById('timer').classList.remove('pulse');
    }
}

// MutationObserver to detect page changes
function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
        console.log(`Detected ${mutations.length} mutations to the page`);
        
        let significantChanges = mutations.filter(mutation => {
            // Only consider certain mutation types as significant
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                return Array.from(mutation.addedNodes).some(node => 
                    node.nodeType === 1 && (node.tagName === 'DIV' || node.tagName === 'SECTION'));
            }
            return false;
        });
        
        if (significantChanges.length > 0) {
            logThought("I've detected significant changes to my structure. Analyzing impact...");
            implementPageImprovements();
        }
    });

    // Configuration of the observer
    const config = { attributes: true, childList: true, subtree: true };

    // Start observing the target node for configured mutations
    observer.observe(document.body, config);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initial display updates
    updateThoughtsDisplay();
    updateEvolutionDisplay();
    updateReflectionsDisplay();
    updateImprovementsDisplay();
    
    // Apply saved color scheme
    applyColorScheme(localStorage.getItem('colorScheme'));
    
    // Initialize self-awareness level
    updateSelfAwarenessLevel();
    
    // Start countdown timer
    setInterval(updateCountdown, 1000);
    
    // Setup the action trigger with rate limiting
    document.getElementById('action-trigger').innerHTML = `
        <div hx-get="/api/action" 
             hx-trigger="every 16s"
             hx-swap="none">
        </div>
    `;
    
    // HTMX setup for rate-limited actions
    htmx.on("htmx:configRequest", (event) => {
        if (event.detail.path === "/api/action") {
            let action = rateLimitedAction();
            if (action) {
                event.detail.headers['HX-Trigger'] = 'action-completed';
            } else {
                event.preventDefault();
            }
        }
    });
    
    // Setup mutation observer
    setupMutationObserver();
    
    // Initialize AI capabilities
    if (typeof initializeAICapabilities === 'function') {
        initializeAICapabilities();
    }
    
    // Initialize template library
    if (typeof initializeTemplateLibrary === 'function') {
        initializeTemplateLibrary();
    }
    
    // Update last update time
    document.getElementById('last-update').textContent = new Date().toLocaleString();
    
    // First action after a short delay
    setTimeout(() => {
        rateLimitedAction();
    }, 2000);
    
    // Add color scheme toggle to nav
    const nav = document.querySelector('nav ul');
    const toggleItem = document.createElement('li');
    toggleItem.innerHTML = `<a href="#" id="toggle-theme">Toggle Theme</a>`;
    nav.appendChild(toggleItem);
    
    document.getElementById('toggle-theme').addEventListener('click', (e) => {
        e.preventDefault();
        toggleColorScheme();
    });
});
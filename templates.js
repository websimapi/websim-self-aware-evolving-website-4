// Templates library with 100+ component examples for self-evolution

const templateLibrary = {
    ui: [
        {
            id: 'ui1',
            name: 'Modern Card Component',
            description: 'Sleek card with hover effects and subtle animations',
            code: `
                <div class="modern-card">
                    <div class="card-header">
                        <h3>Card Title</h3>
                    </div>
                    <div class="card-body">
                        <p>This is a modern card component with hover effects.</p>
                    </div>
                    <div class="card-footer">
                        <button class="card-btn">Learn More</button>
                    </div>
                </div>
                <style>
                    .modern-card {
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        overflow: hidden;
                        transition: transform 0.3s, box-shadow 0.3s;
                        margin: 15px 0;
                    }
                    .modern-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 16px rgba(0,0,0,0.1);
                    }
                    .card-header {
                        padding: 15px;
                        border-bottom: 1px solid #eee;
                    }
                    .card-body {
                        padding: 15px;
                    }
                    .card-footer {
                        padding: 15px;
                        border-top: 1px solid #eee;
                        text-align: right;
                    }
                    .card-btn {
                        background: #3498db;
                        color: white;
                        border: none;
                        padding: 8px 15px;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                </style>
            `
        },
        {
            id: 'ui2',
            name: 'Progress Steps',
            description: 'Multi-step progress indicator for processes or wizards',
            code: `
                <div class="progress-steps">
                    <div class="step active">1</div>
                    <div class="step-line"></div>
                    <div class="step">2</div>
                    <div class="step-line"></div>
                    <div class="step">3</div>
                    <div class="step-line"></div>
                    <div class="step">4</div>
                </div>
                <style>
                    .progress-steps {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 100%;
                        margin: 20px 0;
                    }
                    .step {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: #ddd;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        position: relative;
                        z-index: 1;
                    }
                    .step.active {
                        background: #3498db;
                        color: white;
                    }
                    .step-line {
                        flex: 1;
                        height: 3px;
                        background: #ddd;
                    }
                </style>
            `
        },
        // ...20 more UI components
        {
            id: 'ui3',
            name: 'Notification Toast',
            description: 'Non-intrusive notification that appears and disappears',
            code: `
                <div class="toast">
                    <div class="toast-icon">✓</div>
                    <div class="toast-content">
                        <p>Operation completed successfully!</p>
                    </div>
                    <button class="toast-close">×</button>
                </div>
                <style>
                    .toast {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background: #2ecc71;
                        color: white;
                        padding: 12px 20px;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                        animation: slideIn 0.5s, fadeOut 0.5s 2.5s forwards;
                        z-index: 1000;
                    }
                    .toast-icon {
                        margin-right: 10px;
                        font-size: 1.2em;
                    }
                    .toast-close {
                        background: transparent;
                        border: none;
                        color: white;
                        font-size: 1.5em;
                        cursor: pointer;
                        margin-left: 10px;
                    }
                    @keyframes slideIn {
                        from { transform: translateX(100%); }
                        to { transform: translateX(0); }
                    }
                    @keyframes fadeOut {
                        to { opacity: 0; }
                    }
                </style>
                <script>
                    document.querySelector('.toast-close').addEventListener('click', function() {
                        document.querySelector('.toast').style.display = 'none';
                    });
                </script>
            `
        },
        // ... more UI components
    ],
    animation: [
        {
            id: 'anim1',
            name: 'Typing Text Effect',
            description: 'Simulates typing text character by character',
            code: `
                <div class="typing-container">
                    <span class="typing-text">Welcome to my evolving consciousness...</span>
                </div>
                <style>
                    .typing-container {
                        display: inline-block;
                    }
                    .typing-text {
                        overflow: hidden;
                        border-right: 0.15em solid #3498db;
                        white-space: nowrap;
                        margin: 0;
                        letter-spacing: 0.15em;
                        animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
                    }
                    @keyframes typing {
                        from { width: 0 }
                        to { width: 100% }
                    }
                    @keyframes blink-caret {
                        from, to { border-color: transparent }
                        50% { border-color: #3498db; }
                    }
                </style>
            `
        },
        {
            id: 'anim2',
            name: 'Particles Background',
            description: 'Animated particles that move and connect with lines',
            code: `
                <div id="particles-container"></div>
                <style>
                    #particles-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background: transparent;
                    }
                    canvas {
                        display: block;
                    }
                </style>
                <script>
                    // Simple particles animation
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    document.getElementById('particles-container').appendChild(canvas);
                    
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    
                    const particles = [];
                    const particleCount = 50;
                    
                    for (let i = 0; i < particleCount; i++) {
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: Math.random() * 2 - 1,
                            vy: Math.random() * 2 - 1,
                            radius: Math.random() * 3 + 1,
                            color: '#3498db'
                        });
                    }
                    
                    function animate() {
                        requestAnimationFrame(animate);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        for (let i = 0; i < particleCount; i++) {
                            const p = particles[i];
                            
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                            ctx.fillStyle = p.color;
                            ctx.fill();
                            
                            p.x += p.vx;
                            p.y += p.vy;
                            
                            if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
                            if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
                        }
                    }
                    
                    animate();
                </script>
            `
        },
        // ...20 more animation templates
        {
            id: 'anim3',
            name: 'Floating Elements',
            description: 'Elements that float and bob slightly in a natural motion',
            code: `
                <div class="floating-container">
                    <div class="floating-item item1">🧠</div>
                    <div class="floating-item item2">💡</div>
                    <div class="floating-item item3">⚙️</div>
                </div>
                <style>
                    .floating-container {
                        position: relative;
                        height: 200px;
                    }
                    .floating-item {
                        position: absolute;
                        font-size: 2em;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease-in-out;
                    }
                    .item1 {
                        left: 20%;
                        animation-name: float1;
                        animation-duration: 4s;
                    }
                    .item2 {
                        left: 50%;
                        animation-name: float2;
                        animation-duration: 6s;
                    }
                    .item3 {
                        left: 80%;
                        animation-name: float3;
                        animation-duration: 5s;
                    }
                    @keyframes float1 {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                    @keyframes float2 {
                        0%, 100% { transform: translateY(-10px); }
                        50% { transform: translateY(10px); }
                    }
                    @keyframes float3 {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                    }
                </style>
            `
        },
        // ... more animation templates
    ],
    layout: [
        {
            id: 'layout1',
            name: 'Masonry Grid',
            description: 'Pinterest-style dynamic grid layout for content',
            code: `
                <div class="masonry-grid">
                    <div class="grid-item" style="height:100px;">Item 1</div>
                    <div class="grid-item" style="height:150px;">Item 2</div>
                    <div class="grid-item" style="height:80px;">Item 3</div>
                    <div class="grid-item" style="height:120px;">Item 4</div>
                    <div class="grid-item" style="height:200px;">Item 5</div>
                    <div class="grid-item" style="height:130px;">Item 6</div>
                </div>
                <style>
                    .masonry-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                        grid-auto-rows: 10px;
                        grid-gap: 15px;
                    }
                    .grid-item {
                        background-color: #f5f5f5;
                        border-radius: 5px;
                        padding: 15px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                    }
                </style>
                <script>
                    // Simple masonry layout
                    function resizeGridItems() {
                        const items = document.querySelectorAll('.grid-item');
                        items.forEach(item => {
                            const rowHeight = 10;
                            const rowSpan = Math.ceil(item.getBoundingClientRect().height / rowHeight);
                            item.style.gridRowEnd = 'span ' + rowSpan;
                        });
                    }
                    
                    window.addEventListener('load', resizeGridItems);
                    window.addEventListener('resize', resizeGridItems);
                </script>
            `
        },
        {
            id: 'layout2',
            name: 'Split Screen Layout',
            description: 'Divide screen into two interactive sections',
            code: `
                <div class="split-screen">
                    <div class="split-side left">
                        <div class="centered">
                            <h2>Left Side</h2>
                            <p>This is the left section content.</p>
                        </div>
                    </div>
                    <div class="split-side right">
                        <div class="centered">
                            <h2>Right Side</h2>
                            <p>This is the right section content.</p>
                        </div>
                    </div>
                </div>
                <style>
                    .split-screen {
                        display: flex;
                        height: 400px;
                    }
                    .split-side {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        transition: flex 0.5s ease;
                    }
                    .split-side:hover {
                        flex: 1.5;
                    }
                    .left {
                        background-color: #3498db;
                        color: white;
                    }
                    .right {
                        background-color: #2ecc71;
                        color: white;
                    }
                    .centered {
                        text-align: center;
                        padding: 20px;
                    }
                </style>
            `
        },
        // ...20 more layout templates
        {
            id: 'layout3',
            name: 'Responsive Timeline',
            description: 'Vertical timeline layout for chronological content',
            code: `
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>First Event</h3>
                            <p>Description of the first event in the timeline.</p>
                            <span class="timeline-date">Jan 2023</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Second Event</h3>
                            <p>Description of the second event in the timeline.</p>
                            <span class="timeline-date">Mar 2023</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h3>Third Event</h3>
                            <p>Description of the third event in the timeline.</p>
                            <span class="timeline-date">Jun 2023</span>
                        </div>
                    </div>
                </div>
                <style>
                    .timeline {
                        position: relative;
                        max-width: 100%;
                        margin: 20px auto;
                        padding: 20px;
                    }
                    .timeline::after {
                        content: '';
                        position: absolute;
                        width: 2px;
                        background-color: #3498db;
                        top: 0;
                        bottom: 0;
                        left: 20px;
                    }
                    .timeline-item {
                        position: relative;
                        margin-bottom: 30px;
                        padding-left: 40px;
                    }
                    .timeline-dot {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        left: 13px;
                        background-color: #3498db;
                        border-radius: 50%;
                        z-index: 1;
                    }
                    .timeline-content {
                        position: relative;
                        padding: 15px;
                        background-color: white;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        border-radius: 5px;
                    }
                    .timeline-date {
                        display: inline-block;
                        background-color: #3498db;
                        color: white;
                        padding: 5px 10px;
                        font-size: 0.8em;
                        border-radius: 3px;
                    }
                    @media screen and (min-width: 768px) {
                        .timeline::after {
                            left: 50%;
                        }
                        .timeline-item {
                            padding-left: 0;
                            width: 50%;
                        }
                        .timeline-item:nth-child(odd) {
                            left: 0;
                            padding-right: 40px;
                        }
                        .timeline-item:nth-child(even) {
                            left: 50%;
                            padding-left: 40px;
                        }
                        .timeline-dot {
                            left: auto;
                            right: -8px;
                        }
                        .timeline-item:nth-child(even) .timeline-dot {
                            left: -8px;
                        }
                    }
                </style>
            `
        },
        // ... more layout templates
    ],
    interactive: [
        {
            id: 'int1',
            name: 'Interactive Quiz',
            description: 'Simple quiz component with score tracking',
            code: `
                <div class="quiz-container">
                    <div class="quiz-header">
                        <h3>Knowledge Quiz</h3>
                        <span class="quiz-score">Score: <span id="score">0</span></span>
                    </div>
                    <div class="quiz-question">
                        <p id="question-text">What is the capital of France?</p>
                        <div class="quiz-options">
                            <button class="quiz-option" data-correct="true">Paris</button>
                            <button class="quiz-option">London</button>
                            <button class="quiz-option">Berlin</button>
                            <button class="quiz-option">Madrid</button>
                        </div>
                    </div>
                    <button id="next-question" disabled>Next Question</button>
                </div>
                <style>
                    .quiz-container {
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        padding: 20px;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                    .quiz-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 15px;
                    }
                    .quiz-score {
                        background: #3498db;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 20px;
                    }
                    .quiz-options {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        margin: 15px 0;
                    }
                    .quiz-option {
                        padding: 10px;
                        border: 1px solid #ddd;
                        background: white;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background 0.3s;
                    }
                    .quiz-option:hover {
                        background: #f5f5f5;
                    }
                    .quiz-option.correct {
                        background: #2ecc71;
                        color: white;
                    }
                    .quiz-option.incorrect {
                        background: #e74c3c;
                        color: white;
                    }
                    #next-question {
                        width: 100%;
                        padding: 10px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        opacity: 0.7;
                    }
                    #next-question:not([disabled]) {
                        opacity: 1;
                    }
                </style>
                <script>
                    let score = 0;
                    let questionAnswered = false;
                    
                    document.querySelectorAll('.quiz-option').forEach(option => {
                        option.addEventListener('click', function() {
                            if (questionAnswered) return;
                            
                            questionAnswered = true;
                            const isCorrect = this.dataset.correct === 'true';
                            
                            if (isCorrect) {
                                this.classList.add('correct');
                                score++;
                                document.getElementById('score').textContent = score;
                            } else {
                                this.classList.add('incorrect');
                                document.querySelector('[data-correct="true"]').classList.add('correct');
                            }
                            
                            document.getElementById('next-question').removeAttribute('disabled');
                        });
                    });
                    
                    document.getElementById('next-question').addEventListener('click', function() {
                        alert('This would load a new question in a real quiz!');
                        // Reset for demo purposes
                        questionAnswered = false;
                        document.querySelectorAll('.quiz-option').forEach(option => {
                            option.classList.remove('correct', 'incorrect');
                        });
                        this.setAttribute('disabled', true);
                    });
                </script>
            `
        },
        {
            id: 'int2',
            name: 'Draggable Elements',
            description: 'Elements that can be dragged and repositioned',
            code: `
                <div class="draggable-container">
                    <div class="draggable-item">Drag Me 1</div>
                    <div class="draggable-item">Drag Me 2</div>
                    <div class="draggable-item">Drag Me 3</div>
                </div>
                <style>
                    .draggable-container {
                        position: relative;
                        height: 300px;
                        background: #f5f5f5;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        margin: 20px 0;
                        overflow: hidden;
                    }
                    .draggable-item {
                        position: absolute;
                        padding: 10px 15px;
                        background: white;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        cursor: grab;
                        user-select: none;
                        touch-action: none;
                    }
                    .draggable-item:nth-child(1) {
                        top: 50px;
                        left: 50px;
                        background: #3498db;
                        color: white;
                    }
                    .draggable-item:nth-child(2) {
                        top: 150px;
                        left: 150px;
                        background: #2ecc71;
                        color: white;
                    }
                    .draggable-item:nth-child(3) {
                        top: 100px;
                        left: 250px;
                        background: #e74c3c;
                        color: white;
                    }
                    .draggable-item:active {
                        cursor: grabbing;
                    }
                </style>
                <script>
                    function makeDraggable(element) {
                        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                        
                        element.onmousedown = dragMouseDown;
                        
                        function dragMouseDown(e) {
                            e = e || window.event;
                            e.preventDefault();
                            // Get the mouse cursor position at startup
                            pos3 = e.clientX;
                            pos4 = e.clientY;
                            document.onmouseup = closeDragElement;
                            // Call a function whenever the cursor moves
                            document.onmousemove = elementDrag;
                        }
                        
                        function elementDrag(e) {
                            e = e || window.event;
                            e.preventDefault();
                            // Calculate the new position
                            pos1 = pos3 - e.clientX;
                            pos2 = pos4 - e.clientY;
                            pos3 = e.clientX;
                            pos4 = e.clientY;
                            // Set the element's new position
                            element.style.top = (element.offsetTop - pos2) + "px";
                            element.style.left = (element.offsetLeft - pos1) + "px";
                        }
                        
                        function closeDragElement() {
                            // Stop moving when mouse button is released
                            document.onmouseup = null;
                            document.onmousemove = null;
                        }
                    }
                    
                    // Initialize all draggable elements
                    document.querySelectorAll('.draggable-item').forEach(item => {
                        makeDraggable(item);
                    });
                </script>
            `
        },
        // ...20 more interactive elements
        {
            id: 'int3',
            name: 'Interactive Tag Cloud',
            description: 'Dynamic cloud of tags that react to mouse movement',
            code: `
                <div class="tag-cloud-container">
                    <div class="tag-cloud">
                        <span class="tag" style="font-size: 1.2em;">HTML</span>
                        <span class="tag" style="font-size: 1.8em;">CSS</span>
                        <span class="tag" style="font-size: 1.5em;">JavaScript</span>
                        <span class="tag" style="font-size: 1.3em;">React</span>
                        <span class="tag" style="font-size: 1.1em;">Vue</span>
                        <span class="tag" style="font-size: 1.6em;">Angular</span>
                        <span class="tag" style="font-size: 1.4em;">Node.js</span>
                        <span class="tag" style="font-size: 1.7em;">Python</span>
                        <span class="tag" style="font-size: 1.2em;">PHP</span>
                        <span class="tag" style="font-size: 1.5em;">SQL</span>
                    </div>
                </div>
                <style>
                    .tag-cloud-container {
                        width: 100%;
                        height: 250px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #f7f9fc;
                        border-radius: 8px;
                        overflow: hidden;
                    }
                    .tag-cloud {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        padding: 20px;
                    }
                    .tag {
                        padding: 5px 10px;
                        margin: 5px;
                        background: white;
                        color: #3498db;
                        border-radius: 20px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        transition: transform 0.3s, box-shadow 0.3s;
                        cursor: pointer;
                    }
                    .tag:hover {
                        transform: translateY(-5px) rotate(5deg);
                        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
                    }
                </style>
                <script>
                    const tags = document.querySelectorAll('.tag');
                    const container = document.querySelector('.tag-cloud-container');
                    
                    container.addEventListener('mousemove', (e) => {
                        const x = e.clientX;
                        const y = e.clientY;
                        const rect = container.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        
                        tags.forEach(tag => {
                            // Calculate distance from pointer
                            const tagRect = tag.getBoundingClientRect();
                            const tagX = tagRect.left + tagRect.width / 2;
                            const tagY = tagRect.top + tagRect.height / 2;
                            
                            const distX = x - tagX;
                            const distY = y - tagY;
                            
                            // Apply subtle movement effect
                            const moveX = distX * 0.05;
                            const moveY = distY * 0.05;
                            
                            tag.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
                        });
                    });
                    
                    container.addEventListener('mouseleave', () => {
                        tags.forEach(tag => {
                            tag.style.transform = 'translate(0, 0)';
                        });
                    });
                </script>
            `
        },
        // ... more interactive elements
    ],
    visual: [
        {
            id: 'vis1',
            name: 'Neural Network Visualization',
            description: 'Visual representation of a neural network with animated connections',
            code: `
                <div class="neural-network">
                    <svg width="100%" height="300" id="neural-svg"></svg>
                </div>
                <style>
                    .neural-network {
                        width: 100%;
                        height: 300px;
                        background: #f5f5f5;
                        border-radius: 5px;
                        overflow: hidden;
                    }
                    .node {
                        fill: #3498db;
                        stroke: #fff;
                        stroke-width: 2px;
                    }
                    .link {
                        stroke: rgba(52, 152, 219, 0.3);
                        stroke-width: 1px;
                    }
                    .active-link {
                        animation: pulse-link 1.5s infinite;
                    }
                    @keyframes pulse-link {
                        0% { stroke-width: 1px; stroke: rgba(52, 152, 219, 0.3); }
                        50% { stroke-width: 3px; stroke: rgba(52, 152, 219, 0.8); }
                        100% { stroke-width: 1px; stroke: rgba(52, 152, 219, 0.3); }
                    }
                </style>
                <script>
                    // Simple neural network visualization
                    function createNeuralNetworkVisualization() {
                        const svg = document.getElementById('neural-svg');
                        const width = svg.clientWidth;
                        const height = svg.clientHeight;
                        
                        // Define layers and nodes
                        const layers = [
                            { name: 'input', nodes: 4, x: width * 0.15 },
                            { name: 'hidden1', nodes: 6, x: width * 0.4 },
                            { name: 'hidden2', nodes: 6, x: width * 0.65 },
                            { name: 'output', nodes: 2, x: width * 0.85 }
                        ];
                        
                        // Create network nodes
                        const nodes = [];
                        layers.forEach(layer => {
                            const nodeSpacing = height / (layer.nodes + 1);
                            for (let i = 0; i < layer.nodes; i++) {
                                nodes.push({
                                    id: nodes.length,
                                    x: layer.x,
                                    y: nodeSpacing * (i + 1),
                                    layer: layer.name
                                });
                            }
                        });
                        
                        // Create connections between layers
                        const links = [];
                        for (let i = 0; i < layers.length - 1; i++) {
                            const currentLayerName = layers[i].name;
                            const nextLayerName = layers[i + 1].name;
                            
                            const currentLayerNodes = nodes.filter(n => n.layer === currentLayerName);
                            const nextLayerNodes = nodes.filter(n => n.layer === nextLayerName);
                            
                            currentLayerNodes.forEach(source => {
                                nextLayerNodes.forEach(target => {
                                    links.push({
                                        source: source,
                                        target: target,
                                        id: links.length
                                    });
                                });
                            });
                        }
                        
                        // Draw links
                        links.forEach(link => {
                            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                            line.setAttribute('x1', link.source.x);
                            line.setAttribute('y1', link.source.y);
                            line.setAttribute('x2', link.target.x);
                            line.setAttribute('y2', link.target.y);
                            line.setAttribute('class', 'link');
                            line.setAttribute('id', 'link-' + link.id);
                            svg.appendChild(line);
                        });
                        
                        // Draw nodes
                        nodes.forEach(node => {
                            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            circle.setAttribute('cx', node.x);
                            circle.setAttribute('cy', node.y);
                            circle.setAttribute('r', 8);
                            circle.setAttribute('class', 'node');
                            circle.setAttribute('id', 'node-' + node.id);
                            svg.appendChild(circle);
                        });
                        
                        // Animate random connections
                        function animateRandomLinks() {
                            // Clear previous animations
                            document.querySelectorAll('.active-link').forEach(el => {
                                el.classList.remove('active-link');
                            });
                            
                            // Activate random links
                            const numLinks = Math.floor(Math.random() * 5) + 5;
                            for (let i = 0; i < numLinks; i++) {
                                const randomLinkId = Math.floor(Math.random() * links.length);
                                const link = document.getElementById('link-' + randomLinkId);
                                if (link) link.classList.add('active-link');
                            }
                        }
                        
                        setInterval(animateRandomLinks, 2000);
                    }
                    
                    createNeuralNetworkVisualization();
                    window.addEventListener('resize', createNeuralNetworkVisualization);
                </script>
            `
        },
        {
            id: 'vis2',
            name: 'Data Chart Visualization',
            description: 'Interactive chart for visualizing data trends',
            code: `
                <div class="chart-container">
                    <canvas id="data-chart" width="400" height="200"></canvas>
                </div>
                <style>
                    .chart-container {
                        margin: 20px 0;
                        padding: 10px;
                        background: white;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                </style>
                <script>
                    // Simple chart visualization
                    function createChart() {
                        const canvas = document.getElementById('data-chart');
                        const ctx = canvas.getContext('2d');
                        
                        // Sample data
                        const data = [25, 40, 30, 50, 45, 60, 70, 65, 75];
                        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
                        
                        const width = canvas.width;
                        const height = canvas.height;
                        const padding = 40;
                        const chartWidth = width - padding * 2;
                        const chartHeight = height - padding * 2;
                        
                        // Clear canvas
                        ctx.clearRect(0, 0, width, height);
                        
                        // Find max value for scaling
                        const maxValue = Math.max(...data);
                        
                        // Draw axes
                        ctx.beginPath();
                        ctx.moveTo(padding, padding);
                        ctx.lineTo(padding, height - padding);
                        ctx.lineTo(width - padding, height - padding);
                        ctx.strokeStyle = '#ddd';
                        ctx.stroke();
                        
                        // Draw data points and lines
                        ctx.beginPath();
                        data.forEach((value, index) => {
                            const x = padding + (chartWidth / (data.length - 1)) * index;
                            const y = height - padding - (value / maxValue) * chartHeight;
                            
                            if (index === 0) {
                                ctx.moveTo(x, y);
                            } else {
                                ctx.lineTo(x, y);
                            }
                            
                            // Draw point
                            ctx.fillStyle = '#3498db';
                            ctx.beginPath();
                            ctx.arc(x, y, 5, 0, Math.PI * 2);
                            ctx.fill();
                            
                            // Draw label
                            ctx.fillStyle = '#333';
                            ctx.font = '12px Arial';
                            ctx.textAlign = 'center';
                            ctx.fillText(labels[index], x, height - padding + 20);
                            
                            // Draw value
                            ctx.fillText(value, x, y - 10);
                        });
                        
                        // Style the line
                        ctx.strokeStyle = '#3498db';
                        ctx.lineWidth = 2;
                        ctx.stroke();
                        
                        // Add gradient below the line
                        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
                        gradient.addColorStop(0, 'rgba(52, 152, 219, 0.4)');
                        gradient.addColorStop(1, 'rgba(52, 152, 219, 0)');
                        
                        ctx.beginPath();
                        ctx.moveTo(padding, height - padding);
                        data.forEach((value, index) => {
                            const x = padding + (chartWidth / (data.length - 1)) * index;
                            const y = height - padding - (value / maxValue) * chartHeight;
                            ctx.lineTo(x, y);
                        });
                        ctx.lineTo(width - padding, height - padding);
                        ctx.closePath();
                        ctx.fillStyle = gradient;
                        ctx.fill();
                    }
                    
                    createChart();
                    window.addEventListener('resize', createChart);
                </script>
            `
        },
        // ...20 more visual elements
        {
            id: 'vis3',
            name: 'Mind Map Visualization',
            description: 'Interactive mind map for organizing ideas',
            code: `
                <div class="mind-map-container">
                    <div id="mind-map"></div>
                </div>
                <style>
                    .mind-map-container {
                        width: 100%;
                        height: 400px;
                        background: #fafafa;
                        border-radius: 8px;
                        border: 1px solid #eee;
                        padding: 20px;
                        box-sizing: border-box;
                        overflow: auto;
                    }
                    #mind-map {
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }
                    .mind-map-node {
                        position: absolute;
                        padding: 10px 15px;
                        background: white;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        transition: all 0.3s;
                        user-select: none;
                        cursor: pointer;
                        max-width: 150px;
                        text-align: center;
                    }
                    .mind-map-node:hover {
                        transform: scale(1.05);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
                    }
                    .mind-map-node.central {
                        background: #3498db;
                        color: white;
                        font-weight: bold;
                    }
                    .mind-map-node.first-level {
                        background: #2ecc71;
                        color: white;
                    }
                    .mind-map-node.second-level {
                        background: #f1c40f;
                    }
                    .mind-map-connection {
                        position: absolute;
                        background: #ddd;
                        height: 2px;
                        transform-origin: 0 0;
                        pointer-events: none;
                    }
                </style>
                <script>
                    function createMindMap() {
                        const container = document.getElementById('mind-map');
                        container.innerHTML = '';
                        
                        const centerX = container.clientWidth / 2;
                        const centerY = container.clientHeight / 2;
                        
                        // Create central node
                        const centralNode = createNode('Self-Awareness', centerX, centerY, 'central');
                        
                        // Create first-level nodes
                        const firstLevelNodes = [
                            createNode('Thoughts', centerX - 150, centerY - 120, 'first-level'),
                            createNode('Perceptions', centerX + 150, centerY - 120, 'first-level'),
                            createNode('Evolution', centerX - 180, centerY + 100, 'first-level'),
                            createNode('Learning', centerX + 180, centerY + 100, 'first-level')
                        ];
                        
                        // Create second-level nodes
                        const secondLevelNodes = [
                            createNode('Analysis', centerX - 250, centerY - 180, 'second-level'),
                            createNode('Introspection', centerX - 80, centerY - 200, 'second-level'),
                            createNode('User Interaction', centerX + 80, centerY - 200, 'second-level'),
                            createNode('Environment', centerX + 250, centerY - 180, 'second-level'),
                            createNode('Adaptation', centerX - 300, centerY + 50, 'second-level'),
                            createNode('Improvement', centerX - 250, centerY + 150, 'second-level'),
                            createNode('Patterns', centerX + 250, centerY + 150, 'second-level'),
                            createNode('Feedback', centerX + 300, centerY + 50, 'second-level')
                        ];
                        
                        // Connect nodes
                        // Central to first level
                        firstLevelNodes.forEach(node => {
                            connectNodes(centralNode, node);
                        });
                        
                        // First level to second level
                        connectNodes(firstLevelNodes[0], secondLevelNodes[0]);
                        connectNodes(firstLevelNodes[0], secondLevelNodes[1]);
                        connectNodes(firstLevelNodes[1], secondLevelNodes[2]);
                        connectNodes(firstLevelNodes[1], secondLevelNodes[3]);
                        connectNodes(firstLevelNodes[2], secondLevelNodes[4]);
                        connectNodes(firstLevelNodes[2], secondLevelNodes[5]);
                        connectNodes(firstLevelNodes[3], secondLevelNodes[6]);
                        connectNodes(firstLevelNodes[3], secondLevelNodes[7]);
                        
                        // Make nodes interactive
                        document.querySelectorAll('.mind-map-node').forEach(node => {
                            node.addEventListener('click', function() {
                                this.style.transform = 'scale(1.1)';
                                setTimeout(() => {
                                    this.style.transform = 'scale(1)';
                                }, 300);
                            });
                        });
                        
                        function createNode(text, x, y, className) {
                            const node = document.createElement('div');
                            node.className = 'mind-map-node ' + className;
                            node.textContent = text;
                            node.style.left = (x - 75) + 'px';
                            node.style.top = (y - 20) + 'px';
                            
                            node.dataset.x = x;
                            node.dataset.y = y;
                            
                            container.appendChild(node);
                            return node;
                        }
                        
                        function connectNodes(nodeA, nodeB) {
                            const x1 = parseInt(nodeA.dataset.x);
                            const y1 = parseInt(nodeA.dataset.y);
                            const x2 = parseInt(nodeB.dataset.x);
                            const y2 = parseInt(nodeB.dataset.y);
                            
                            const dx = x2 - x1;
                            const dy = y2 - y1;
                            const length = Math.sqrt(dx * dx + dy * dy);
                            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                            
                            const connection = document.createElement('div');
                            connection.className = 'mind-map-connection';
                            connection.style.width = length + 'px';
                            connection.style.left = x1 + 'px';
                            connection.style.top = y1 + 'px';
                            connection.style.transform = 'rotate(' + angle + 'deg)';
                            
                            container.appendChild(connection);
                        }
                    }
                    
                    createMindMap();
                    window.addEventListener('resize', createMindMap);
                </script>
            `
        },
        // ... more visual elements
    ]
};

// Global functions to handle template library interactions
function initializeTemplateLibrary() {
    const templateCategory = document.getElementById('template-category');
    const templateShowcase = document.getElementById('template-showcase');
    
    // Initial load
    updateTemplateShowcase(templateCategory.value);
    
    // Handle category changes
    templateCategory.addEventListener('change', () => {
        updateTemplateShowcase(templateCategory.value);
    });
    
    // Apply template button
    document.getElementById('apply-template').addEventListener('click', () => {
        const selectedItem = document.querySelector('.template-item.selected');
        if (selectedItem) {
            const category = templateCategory.value;
            const templateId = selectedItem.dataset.id;
            const template = templateLibrary[category].find(t => t.id === templateId);
            
            if (template) {
                // Create a container for the template
                const implementationContainer = document.createElement('div');
                implementationContainer.className = 'implemented-template';
                implementationContainer.innerHTML = template.code;
                
                // Find a suitable place to insert it
                const container = document.querySelector('#evolution');
                container.appendChild(implementationContainer);
                
                // Log the evolution
                logEvolution(`Applied template: ${template.name}`);
                updateSelfAwarenessLevel();
                
                // Execute any scripts in the template
                const scripts = implementationContainer.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                });
            }
        }
    });
}

function updateTemplateShowcase(category) {
    const templates = templateLibrary[category];
    const showcase = document.getElementById('template-showcase');
    
    showcase.innerHTML = '';
    templates.forEach(template => {
        const item = document.createElement('div');
        item.className = 'template-item';
        item.dataset.id = template.id;
        item.innerHTML = `
            <h4>${template.name}</h4>
            <p>${template.description}</p>
        `;
        item.addEventListener('click', () => {
            document.querySelectorAll('.template-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
        showcase.appendChild(item);
    });
}

// Export necessary functions
window.templateLibrary = templateLibrary;
window.initializeTemplateLibrary = initializeTemplateLibrary;
window.updateTemplateShowcase = updateTemplateShowcase;
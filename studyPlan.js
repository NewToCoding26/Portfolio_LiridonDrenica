const roadmapData = [
    {
        title: "1. Fundamentals",
        skills: [
            { name: "HTML", details: "Structure, semantics, forms", status: "completed" },
            { name: "CSS", details: "Styling, box model, Flexbox, basic selectors", status: "completed" },
            { name: "JavaScript Basics", details: "Variables, functions, loops, arrays, objects", status: "progress" }
        ]
    },
    {
        title: "2. Object-Oriented Programming",
        skills: [
            { name: "Core Concepts", details: "Classes, objects, inheritance, encapsulation, polymorphism", status: "pending" },
            { name: "JavaScript Implementation", details: "Prototypes, class syntax, this keyword", status: "pending" },
            { name: "Practical Application", details: "Build simple OOP projects", status: "pending" }
        ]
    },
    {
        title: "3. Projects",
        skills: [
            { name: "Portfolio Website", details: "Combine HTML/CSS with basic JavaScript", status: "completed" },
            { name: "To-Do List App", details: "Implement using OOP principles", status: "pending" },
            { name: "Weather App", details: "Fetch API data and display using OOP structure", status: "pending" }
        ]
    },
    {
        title: "4. Advanced HTML & CSS",
        skills: [
            { name: "Accessibility", details: "ARIA, semantic HTML", status: "pending" },
            { name: "Responsive Design", details: "Media queries, mobile-first", status: "pending" },
            { name: "CSS Grid", details: "Advanced layouts", status: "pending" },
            { name: "Animations", details: "CSS transitions and animations", status: "pending" },
            { name: "CSS Preprocessors", details: "Sass/SCSS", status: "pending" }
        ]
    },
    {
        title: "5. Backend Development",
        skills: [
            { name: "Node.js", details: "Runtime environment fundamentals", status: "pending" },
            { name: "Express.js", details: "Building APIs and server applications", status: "pending" },
            { name: "Working with APIs", details: "Fetch, async/await, REST principles", status: "pending" },
            { name: "Middleware", details: "Understanding middleware concepts", status: "pending" }
        ]
    },
    {
        title: "6. Databases",
        skills: [
            { name: "SQL Basics", details: "MySQL/PostgreSQL fundamentals", status: "pending" },
            { name: "NoSQL", details: "MongoDB and document databases", status: "pending" },
            { name: "ORMs/ODMs", details: "Sequelize, Mongoose", status: "pending" }
        ]
    },
    {
        title: "7. TypeScript",
        skills: [
            { name: "Basic Types", details: "Types, interfaces, basic syntax", status: "pending" },
            { name: "TypeScript with OOP", details: "Classes and inheritance in TypeScript", status: "pending" },
            { name: "TypeScript Backend", details: "Node.js/Express with TypeScript", status: "pending" }
        ]
    },
    {
        title: "8. Frontend Frameworks",
        skills: [
            { name: "React", details: "Components, state management, hooks", status: "pending" },
            { name: "Next.js", details: "SSR, SSG, API routes", status: "pending" }
        ]
    },
    {
        title: "9. Security Essentials",
        skills: [
            { name: "Authentication", details: "User authentication and authorization", status: "pending" },
            { name: "Data Validation", details: "Input validation and sanitization", status: "pending" },
            { name: "Common Vulnerabilities", details: "OWASP Top 10", status: "pending" }
        ]
    },
    {
        title: "10. Networking Basics",
        skills: [
            { name: "HTTP/HTTPS", details: "Protocol fundamentals", status: "pending" },
            { name: "REST API", details: "REST principles and best practices", status: "pending" },
            { name: "DNS", details: "Domain Name System basics", status: "pending" }
        ]
    },
    {
        title: "11. Deployment & DevOps",
        skills: [
            { name: "Cloud Platforms", details: "AWS, Vercel, deployment strategies", status: "pending" },
            { name: "Containerization", details: "Docker fundamentals", status: "pending" },
            { name: "CI/CD", details: "Continuous integration and deployment", status: "pending" }
        ]
    },
    {
        title: "12. Advanced Topics",
        skills: [
            { name: "Design Patterns", details: "Common software design patterns", status: "pending" },
            { name: "Testing", details: "Unit testing, integration testing", status: "pending" },
            { name: "Performance", details: "Optimization techniques", status: "pending" }
        ]
    }
];

function calculateProgress(skills) {
    const completed = skills.filter(skill => skill.status === 'completed').length;
    const inProgress = skills.filter(skill => skill.status === 'progress').length;
    
    const totalProgress = (completed * 100) + (inProgress * 50);
    const maxProgress = skills.length * 100;
    
    return Math.round(totalProgress / maxProgress * 100);
}

function getStatusIcon(status) {
    const icons = {
        completed: '✓',
        progress: '', 
        pending: '✕'
    };
    return icons[status] || '';
}

function createSkillItem(skill) {
    return `
        <div class="skill-item">
            <div class="skill-info">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-details">${skill.details}</div>
            </div>
            <div class="status-icon status-${skill.status}">
                ${getStatusIcon(skill.status)}
            </div>
        </div>
    `;
}

function createCategory(category, index) {
    const progress = calculateProgress(category.skills);
    const completedCount = category.skills.filter(skill => skill.status === 'completed').length;
    const totalCount = category.skills.length;
    
    const skillsHtml = category.skills.map(skill => createSkillItem(skill)).join('');
    
    return `
        <div class="category" data-category="${index}">
            <div class="category-header" onclick="toggleCategory(${index})">
                <div class="category-title">${category.title}</div>
                <div class="category-status">
                    <div class="progress-info">${completedCount}/${totalCount} (${progress}%)</div>
                    <div class="expand-icon">▼</div>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="category-content">
                <div class="skill-list">
                    ${skillsHtml}
                </div>
            </div>
        </div>
    `;
}

function toggleCategory(index) {
    const category = document.querySelector(`[data-category="${index}"]`);
    if (category) {
        category.classList.toggle('expanded');
    }
}

function initRoadmap() {
    const container = document.getElementById('roadmap-categories');
    if (container) {
        const categoriesHtml = roadmapData.map((category, index) => 
            createCategory(category, index)
        ).join('');
        
        container.innerHTML = categoriesHtml;
        
        addKeyboardSupport();
    }
}

function addKeyboardSupport() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach((header, index) => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-label', `Toggle ${roadmapData[index].title} section`);
        
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCategory(index);
                updateAriaExpanded(header, index);
            }
        });
        
        header.addEventListener('click', () => {
            setTimeout(() => updateAriaExpanded(header, index), 100);
        });
    });
}

function updateAriaExpanded(header, index) {
    const category = document.querySelector(`[data-category="${index}"]`);
    const isExpanded = category.classList.contains('expanded');
    header.setAttribute('aria-expanded', isExpanded.toString());
}



document.addEventListener('DOMContentLoaded', () => {
    initRoadmap();
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
});

function smoothScrollToCategory(index) {
    const category = document.querySelector(`[data-category="${index}"]`);
    if (category && category.classList.contains('expanded')) {
        setTimeout(() => {
            category.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 300); 
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        roadmapData,
        calculateProgress,
        toggleCategory,
        initRoadmap
    };
}
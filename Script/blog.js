const articles = [
    { id: 1, title: "Python Basics for Beginners", summary: "A comprehensive step-by-step guide to learning Python. You will learn syntax, variables, loops, functions, and how to write your first practical program.", date: "2025-01-10" },
    { id: 2, title: "Building UI with Flutter", summary: "How to build beautiful, fast apps with minimal effort using the Flutter framework. Covers popular libraries and responsive design for all screens.", date: "2025-01-12" },
    { id: 3, title: "Introduction to Artificial Intelligence", summary: "What is AI and how is it changing our world? A simple explanation of machine learning concepts, neural networks, and real-life examples.", date: "2025-01-15" },
    { id: 4, title: "Cybersecurity Best Practices", summary: "Protect your data from breaches with simple, effective steps. Tips on passwords, two-factor authentication, and phishing awareness.", date: "2025-01-18" },
    { id: 5, title: "Game Development with Unity", summary: "Basics of building your first 3D game using Unity and C#. Includes physics, character controls, and level design.", date: "2025-01-20" },
    { id: 6, title: "SQL vs NoSQL: Key Differences", summary: "Which one is right for your next project? A comprehensive comparison of performance, flexibility, scalability, and use cases for each type.", date: "2025-01-22" },
    { id: 7, title: "Search Engine Optimization (SEO)", summary: "How to rank at the top of Google in 2025? Strategies for content optimization, link building, and keyword analysis tools.", date: "2025-01-25" },
    { id: 8, title: "Cloud Computing Basics", summary: "Learn about AWS, Azure, and Google Cloud and how to benefit from their services. Explanation of the three models: IaaS, PaaS, and SaaS.", date: "2025-01-27" },
    { id: 9, title: "React.js Framework", summary: "Why React is the top choice for modern frontends? Introduction to JSX, components, state, and effects for building dynamic applications.", date: "2025-01-30" },
    { id: 10, title: "Learning MySQL Databases", summary: "Essential SQL commands you need to create and manage databases. Explains SELECT, INSERT, UPDATE, DELETE, and table joins.", date: "2025-02-01" },
    { id: 11, title: "Git & GitHub Basics", summary: "Easily manage project versions with Git. Learn commit, push, pull, branch commands, and how to collaborate with your team on GitHub.", date: "2025-02-03" },
    { id: 12, title: "Responsive Design with CSS Flexbox", summary: "Modern techniques to make your site work on all devices using Flexbox. Covers axes, ordering, and spacing for flexible layouts.", date: "2025-02-05" },
    { id: 13, title: "Data Analysis with Pandas", summary: "Easily process large tables with Python. Learn how to read, clean, transform, and extract basic statistics from data.", date: "2025-02-07" },
    { id: 14, title: "Building APIs with Node.js", summary: "How to create professional APIs using Express.js. Explains RESTful routes, request handling, and database integration.", date: "2025-02-10" },
    { id: 15, title: "Java Fundamentals", summary: "Learn object-oriented programming from scratch. Covers classes, objects, inheritance, and basic patterns in Java.", date: "2025-02-12" },
    { id: 16, title: "Docker for Beginners", summary: "Software containers to run your applications safely and consistently. Learn how to build a Dockerfile, manage containers, and use Docker Compose.", date: "2025-02-14" },
    { id: 17, title: "Introduction to Blockchain", summary: "How do cryptocurrencies and decentralized technologies work? A simple explanation of blocks, cryptography, consensus mechanisms, and smart contracts.", date: "2025-02-16" },
    { id: 18, title: "Task Automation with Python", summary: "Increase productivity by writing simple scripts to automate repetitive tasks like organizing files, sending emails, and web scraping.", date: "2025-02-18" },
    { id: 19, title: "User Experience (UX) Design", summary: "Principles to make users happy while using your product. Covers research, persona creation, testing, and prototyping tools.", date: "2025-02-20" },
    { id: 20, title: "Django Web Framework", summary: "Build powerful web applications with minimal code using Django. Explains models, admin interfaces, and built-in app security.", date: "2025-02-22" },
    { id: 21, title: "TypeScript Essentials", summary: "Why add types to JavaScript? Learn basic types, interfaces, generics, and compiling TypeScript to JavaScript.", date: "2025-02-24" },
    { id: 22, title: "Introduction to IoT", summary: "How to control devices over the internet? Explains microcontrollers like Arduino and Raspberry Pi, sensors, and cloud connectivity.", date: "2025-02-26" },
    { id: 23, title: "Web Performance Optimization", summary: "Ways to speed up page load times and reduce latency. Tips on image compression, lazy loading, and using CDNs.", date: "2025-02-28" },
    { id: 24, title: "Learning Vue.js Step by Step", summary: "A progressive and easy framework for beginners. Explains data binding, directives, components, and state management with Pinia.", date: "2025-03-01" },
    { id: 25, title: "Software Testing Basics", summary: "Types of tests and how to write them: unit, integration, and system tests. Introduction to tools like Jest and Selenium.", date: "2025-03-03" },
    { id: 26, title: "Introduction to Quantum Computing", summary: "How qubits work and the future of computing. Explains principles of superposition, entanglement, and simplified quantum algorithms.", date: "2025-03-05" },
    { id: 27, title: "Building Chatbots with Rasa", summary: "Create an open-source smart assistant for your project. Learn intent recognition, entity extraction, and training language models.", date: "2025-03-07" },
    { id: 28, title: "Ruby on Rails Basics", summary: "A famous framework for rapid application development focusing on convention over configuration. Explains MVC pattern, routes, and migrations.", date: "2025-03-09" },
    { id: 29, title: "Image Processing with OpenCV", summary: "Techniques for face and shape detection, image enhancement, and computer vision applications using Python and OpenCV.", date: "2025-03-11" },
    { id: 30, title: "Introduction to Swift", summary: "Build iOS apps from scratch using Swift. Explains optionals, closures, and building UI with SwiftUI.", date: "2025-03-13" },
    { id: 31, title: "Effective Database Design", summary: "Relations and normalization to avoid duplication and ensure data integrity. Practical examples from real-world projects.", date: "2025-03-15" },
    { id: 32, title: "Kubernetes Fundamentals", summary: "Manage containers at scale. Explains pods, clusters, services, and continuous deployment with K8s.", date: "2025-03-17" },
    { id: 33, title: "Introduction to GraphQL", summary: "A flexible alternative to REST APIs that allows developers to request exactly the data they need, no more and no less.", date: "2025-03-19" },
    { id: 34, title: "Functional Programming in JavaScript", summary: "Use map, filter, reduce correctly along with pure functions, closures, and avoiding side effects.", date: "2025-03-21" }
];


const container = document.getElementById('articles-container');
const CardsHTML = articles.map(article => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-4 text-center">
        <div class="card h-100">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.summary}</p>
                <p class="text-muted small mt-auto"> ${article.date}</p>
                <button class="btn btn-primary  " onclick="alert('✨ سيتم فتح المقال: ${article.title} ✨')">  Read More ..</button>
            </div>
        </div>
    </div>
`).join('');
container.innerHTML = CardsHTML;
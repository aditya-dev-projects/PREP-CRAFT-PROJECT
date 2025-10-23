// src/data/courseData.ts

// --- TypeScript Interfaces for our Data ---
export interface SubChapter {
  id: string;
  title: string;
  file: string; // The exact filename (without .tsx extension)
}

export interface Chapter {
  id: string;
  title: string;
  folder: string; // The exact folder name
  subChapters: SubChapter[];
}

// --- The Main Course Data Object ---
// This is now the single source of truth. The folder and file names
// here MUST EXACTLY MATCH your file system. This removes all guesswork.
export const developmentCourse: { title: string; chapters: Chapter[] } = {
  title: 'MERN Stack Development - Beginner to Advanced',
  chapters: [
    // Chapter 1: Uses PascalCase as per your file system
    { 
      id: 'chapter-1', 
      title: 'Chapter 1: Foundation & Setup',
      folder: '01-Foundation-and-Setup',
      subChapters: [ 
        { id: '1.1', title: 'What is Web Development?', file: '01-What-is-Web-Development' },
        { id: '1.2', title: 'Client-Server Architecture', file: '02-Client-Server-Architecture' },
        { id: '1.3', title: 'Frontend vs Backend vs Full Stack', file: '03-Frontend-vs-Backend-vs-Full-Stack' },
        { id: '1.4', title: 'Introduction to the MERN Stack', file: '04-Introduction-to-the-MERN-Stack' },
        { id: '1.5', title: 'Development Environment Setup', file: '05-Development-Environment-Setup' },
        { id: '1.6', title: 'Code Editors & Extensions', file: '06-Code-Editors-and-Extensions' },
        { id: '1.7', title: 'Terminal/Command Line Basics', file: '07-Terminal-and-Command-Line-Basics' } 
      ] 
    },
    // Chapter 2: Uses PascalCase as per your file system
    { 
      id: 'chapter-2', 
      title: 'Chapter 2: Version Control with Git & GitHub',
      folder: '02-Version-Control-with-Git-and-GitHub',
      subChapters: [ 
        { id: '2.1', title: 'Introduction to Version Control', file: '01-Introduction-to-Version-Control' },
        { id: '2.2', title: 'Git Installation & Configuration', file: '02-Git-Installation-and-Configuration' },
        { id: '2.3', title: 'Git Basics (Init, Add, Commit, Status, Log)', file: '03-Git-Basics' },
        { id: '2.4', title: 'Working with Branches & Merging', file: '04-Working-with-Branches-and-Merging' },
        { id: '2.5', title: 'GitHub Introduction & Account Setup', file: '05-GitHub-Introduction-and-Account-Setup' },
        { id: '2.6', title: 'Remote Repositories (Push, Pull, Clone, Fetch)', file: '06-Remote-Repositories' },
        { id: '2.7', title: 'Collaboration Workflows (Forks, Pull Requests, Issues)', file: '07-Collaboration-Workflows' },
        { id: '2.8', title: 'Git Best Practices & .gitignore', file: '08-Git-Best-Practices-and-gitignore' }
      ] 
    },
    // Chapter 3 onwards: Uses lowercase (kebab-case) as per your file system
    { 
      id: 'chapter-3', 
      title: 'Chapter 3: Frontend Fundamentals',
      folder: '03-Frontend-Fundamentals',
      subChapters: [ 
        { id: '3.1', title: 'HTML5 Essentials & Semantic Elements', file: '01-html5-essentials-and-semantic-elements' },
        { id: '3.2', title: 'HTML Complete Guide', file: '02-html-complete-guide' },
        { id: '3.3', title: 'CSS3 Complete Guide', file: '03-css-complete-guide' },
        { id: '3.4', title: 'CSS Layout (Flexbox & Grid)', file: '04-css-layout-(flexbox-and-grid)' },
        { id: '3.5', title: 'CSS Animations & Transitions', file: '05-css-animations-and-transitions' },
        { id: '3.6', title: 'Responsive Design & Media Queries', file: '06-responsive-design-and-media-queries' },
        { id: '3.7', title: 'CSS Preprocessors (Sass/SCSS)', file: '07-css-preprocessors-(sass-scss)' },
        { id: '3.8', title: 'Browser Developer Tools', file: '08-browser-developer-tools' }
      ] 
    },
    {
      id: 'chapter-4',
      title: 'Chapter 4: JavaScript Fundamentals',
      folder: '04-JavaScript-Fundamentals',
      subChapters: [
        { id: '4.1', title: 'JavaScript Basics (Variables, Data Types, Operators)', file: '01-javascript-basics-(variables-data-types-operators)' },
        { id: '4.2', title: 'Control Structures (Conditionals, Loops)', file: '02-control-structures-(conditionals-loops)' },
        { id: '4.3', title: 'Functions & Scope', file: '03-functions-and-scope' },
        { id: '4.4', title: 'Arrays & Array Methods', file: '04-arrays-and-array-methods' },
        { id: '4.5', title: 'Objects & Object Methods', file: '05-objects-and-object-methods' },
        { id: '4.6', title: 'DOM Manipulation & Events', file: '06-dom-manipulation-and-events' },
        { id: '4.7', title: 'ES6+ Features (Arrow Functions, Destructuring, Modules)', file: '07-es6-features-(arrow-functions-destructuring-modules)' },
        { id: '4.8', title: 'Asynchronous JavaScript (Promises, Async/Await)', file: '08-asynchronous-javascript-(promises-async-await)' },
        { id: '4.9', title: 'Error Handling & Debugging', file: '09-error-handling-and-debugging' },
        { id: '4.10', title: 'Js-MiniProject(Stone,Paper,Scissor)', file: '10-javascript-mini-projects' },
        { id: '4.11', title: 'Mini Project Preview' , file: '11-mini-project-preview'}
      ]
    },
    {
      id: 'chapter-5',
      title: 'Chapter 5: CSS Frameworks & UI Libraries',
      folder: '05-CSS-Frameworks-and-UI-Libraries',
      subChapters: [
        { id: '5.1', title: 'Introduction to CSS Frameworks', file: '01-introduction-to-css-frameworks' },
        { id: '5.2', title: 'Bootstrap Fundamentals', file: '02-bootstrap-fundamentals' },
        { id: '5.3', title: 'Tailwind CSS Setup & Configuration', file: '03-tailwind-css-setup-and-configuration' },
        { id: '5.4', title: 'Tailwind CSS Utility Classes', file: '04-tailwind-css-utility-classes' },
        { id: '5.5', title: 'Tailwind CSS Responsive Design', file: '05-tailwind-css-responsive-design' },
        { id: '5.6', title: 'Tailwind CSS Components & Custom Styles', file: '06-tailwind-css-components-and-custom-styles' },
        { id: '5.7', title: 'CSS Framework Comparison & Best Practices', file: '07-css-framework-comparison-and-best-practices' }
      ]
    },
    {
      id: 'chapter-6',
      title: 'Chapter 6: React.js - Frontend Framework',
      folder: '06-React-js-Frontend-Framework',
      subChapters: [
        { id: '6.1', title: 'Introduction to React & Virtual DOM', file: '01-introduction-to-react-and-virtual-dom' },
        { id: '6.2', title: 'Create React App & Project Structure', file: '02-create-react-app-and-project-structure' },
        { id: '6.3', title: 'JSX Syntax & Components', file: '03-jsx-syntax-and-components' },
        { id: '6.4', title: 'Props & Component Communication', file: '04-props-and-component-communication' },
        { id: '6.5', title: 'State Management with useState', file: '05-state-management-with-usestate' },
        { id: '6.6', title: 'Event Handling in React', file: '06-event-handling-in-react' },
        { id: '6.7', title: 'Conditional Rendering & Lists', file: '07-conditional-rendering-and-lists' },
        { id: '6.8', title: 'React Hooks (useEffect, useContext, useRef)', file: '08-react-hooks-(useeffect-usecontext-useref)' },
        { id: '6.9', title: 'React Router for Navigation', file: '09-react-router-for-navigation' },
        { id: '6.10', title: 'Forms & Form Validation in React', file: '10-forms-and-form-validation-in-react' },
        { id: '6.11', title: 'Component Lifecycle & Cleanup', file: '11-component-lifecycle-and-cleanup' },
        { id: '6.12', title: 'React Mini Projects', file: '12-react-mini-projects' }
      ]
    },
    {
      id: 'chapter-7',
      title: 'Chapter 7: Backend Development with Node.js',
      folder: '07-Backend-Development-with-Node-js',
      subChapters: [
        { id: '7.1', title: 'Introduction to Node.js & Runtime Environment', file: '01-introduction-to-node-js-and-runtime-environment' },
        { id: '7.2', title: 'Node.js Core Modules (fs, path, http, url)', file: '02-node-js-core-modules-(fs-path-http-url)' },
        { id: '7.3', title: 'npm & Package Management', file: '03-npm-and-package-management' },
        { id: '7.4', title: 'Creating Your First Node.js Server', file: '04-creating-your-first-node-js-server' },
        { id: '7.5', title: 'Understanding Modules & Module.exports', file: '05-understanding-modules-and-module-exports' },
        { id: '7.6', title: 'Asynchronous Programming in Node.js', file: '06-asynchronous-programming-in-node-js' },
        { id: '7.7', title: 'File System Operations', file: '07-file-system-operations' },
        { id: '7.8', title: 'Environment Variables & dotenv', file: '08-environment-variables-and-dotenv' }
      ]
    },
    {
      id: 'chapter-8',
      title: 'Chapter 8: Express.js - Backend Framework',
      folder: '08-Express-js-Backend-Framework',
      subChapters: [
        { id: '8.1', title: 'Introduction to Express.js', file: '01-introduction-to-express-js' },
        { id: '8.2', title: 'Express Setup & Basic Server', file: '02-express-setup-and-basic-server' },
        { id: '8.3', title: 'Routing & Route Parameters', file: '03-routing-and-route-parameters' },
        { id: '8.4', title: 'Middleware Concepts & Usage', file: '04-middleware-concepts-and-usage' },
        { id: '8.5', title: 'Built-in Middleware (express.json, express.static)', file: '05-built-in-middleware-(express-json-express-static)' },
        { id: '8.6', title: 'Custom Middleware Development', file: '06-custom-middleware-development' },
        { id: '8.7', title: 'Request & Response Objects', file: '07-request-and-response-objects' },
        { id: '8.8', title: 'Error Handling Middleware', file: '08-error-handling-middleware' },
        { id: '8.9', title: 'Express Router & Modular Routing', file: '09-express-router-and-modular-routing' },
        { id: '8.10', title: 'Template Engines (EJS, Handlebars)', file: '10-template-engines-(ejs-handlebars)' }
      ]
    },
    {
      id: 'chapter-9',
      title: 'Chapter 9: REST API Development',
      folder: '09-REST-API-Development',
      subChapters: [
        { id: '9.1', title: 'REST Architecture Principles', file: '01-rest-architecture-principles' },
        { id: '9.2', title: 'HTTP Methods & Status Codes', file: '02-http-methods-and-status-codes' },
        { id: '9.3', title: 'API Design Best Practices', file: '03-api-design-best-practices' },
        { id: '9.4', title: 'CRUD Operations Implementation', file: '04-crud-operations-implementation' },
        { id: '9.5', title: 'Request Validation & Sanitization', file: '05-request-validation-and-sanitization' },
        { id: '9.6', title: 'API Documentation with Swagger/Postman', file: '06-api-documentation-with-swagger-postman' },
        { id: '9.7', title: 'File Uploads & Handling (Multer)', file: '07-file-uploads-and-handling-(multer)' },
        { id: '9.8', title: 'API Versioning Strategies', file: '08-api-versioning-strategies' },
        { id: '9.9', title: 'REST API Mini Project', file: '09-rest-api-mini-project' }
      ]
    },
    {
      id: 'chapter-10',
      title: 'Chapter 10: MongoDB - Database Layer',
      folder: '10-MongoDB-Database-Layer',
      subChapters: [
        { id: '10.1', title: 'Database Fundamentals (SQL vs NoSQL)', file: '01-database-fundamentals-(sql-vs-nosql)' },
        { id: '10.2', title: 'MongoDB Introduction & Installation', file: '02-mongodb-introduction-and-installation' },
        { id: '10.3', title: 'MongoDB Compass & Shell Basics', file: '03-mongodb-compass-and-shell-basics' },
        { id: '10.4', title: 'CRUD Operations in MongoDB', file: '04-crud-operations-in-mongodb' },
        { id: '10.5', title: 'MongoDB Data Types & Schema Design', file: '05-mongodb-data-types-and-schema-design' },
        { id: '10.6', title: 'Mongoose ODM Introduction', file: '06-mongoose-odm-introduction' },
        { id: '10.7', title: 'Mongoose Schemas & Models', file: '07-mongoose-schemas-and-models' },
        { id: '10.8', title: 'Data Validation with Mongoose', file: '08-data-validation-with-mongoose' },
        { id: '10.9', title: 'Data Relationships (Referenced & Embedded)', file: '09-data-relationships-(referenced-and-embedded)' },
        { id: '10.10', title: 'Mongoose Middleware & Hooks', file: '10-mongoose-middleware-and-hooks' },
        { id: '10.11', title: 'Indexing & Query Optimization', file: '11-indexing-and-query-optimization' },
        { id: '10.12', title: 'Aggregation Pipeline Basics', file: '12-aggregation-pipeline-basics' },
        { id: '10.13', title: 'Database Mini Project', file: '13-database-mini-project' }
      ]
    },
    {
      id: 'chapter-11',
      title: 'Chapter 11: Authentication & Authorization',
      folder: '11-Authentication-and-Authorization',
      subChapters: [
        { id: '11.1', title: 'Authentication vs Authorization Concepts', file: '01-authentication-vs-authorization-concepts' },
        { id: '11.2', title: 'Password Hashing with bcrypt', file: '02-password-hashing-with-bcrypt' },
        { id: '11.3', title: 'JSON Web Tokens (JWT) Theory', file: '03-json-web-tokens-(jwt)-theory' },
        { id: '11.4', title: 'JWT Implementation in Node.js', file: '04-jwt-implementation-in-node-js' },
        { id: '11.5', title: 'User Registration & Login System', file: '05-user-registration-and-login-system' },
        { id: '11.6', title: 'Protected Routes & Middleware', file: '06-protected-routes-and-middleware' },
        { id: '11.7', title: 'Role-Based Access Control (RBAC)', file: '07-role-based-access-control-(rbac)' },
        { id: '11.8', title: 'Password Reset & Email Verification', file: '08-password-reset-and-email-verification' },
        { id: '11.9', title: 'OAuth & Third-Party Authentication', file: '09-oauth-and-third-party-authentication' },
        { id: '11.10', title: 'Security Best Practices', file: '10-security-best-practices' }
      ]
    },
    {
      id: 'chapter-12',
      title: 'Chapter 12: Frontend-Backend Integration',
      folder: '12-Frontend-Backend-Integration',
      subChapters: [
        { id: '12.1', title: 'Connecting React to Express API', file: '01-connecting-react-to-express-api' },
        { id: '12.2', title: 'HTTP Clients (Fetch API vs Axios)', file: '02-http-clients-(fetch-api-vs-axios)' },
        { id: '12.3', title: 'Handling API Responses & Errors', file: '03-handling-api-responses-and-errors' },
        { id: '12.4', title: 'Loading States & User Feedback', file: '04-loading-states-and-user-feedback' },
        { id: '12.5', title: 'JWT Authentication in React', file: '05-jwt-authentication-in-react' },
        { id: '12.6', title: 'Protected Routes in React Router', file: '06-protected-routes-in-react-router' },
        { id: '12.7', title: 'Context API for Global State', file: '07-context-api-for-global-state' },
        { id: '12.8', title: 'CORS Configuration & Handling', file: '08-cors-configuration-and-handling' },
        { id: '12.9', title: 'Proxy Setup for Development', file: '09-proxy-setup-for-development' },
        { id: '12.10', title: 'Full MERN Integration: To-Do App', file: '10-full-mern-integration-to-do-app' }
      ]
    },
    {
      id: 'chapter-13',
      title: 'Chapter 13: Advanced State Management',
      folder: '13-Advanced-State-Management',
      subChapters: [
        { id: '13.1', title: 'State Management Patterns', file: '01-state-management-patterns' },
        { id: '13.2', title: 'Redux Fundamentals', file: '02-redux-fundamentals' },
        { id: '13.3', title: 'Redux Toolkit (RTK) Setup', file: '03-redux-toolkit-(rtk)-setup' },
        { id: '13.4', title: 'RTK Query for API Integration', file: '04-rtk-query-for-api-integration' },
        { id: '13.5', title: 'Zustand - Lightweight State Management', file: '05-zustand-lightweight-state-management' },
        { id: '13.6', title: 'React Query/TanStack Query', file: '06-react-query-tanstack-query' },
        { id: '13.7', title: 'Choosing the Right State Management Solution', file: '07-choosing-the-right-state-management-solution' }
      ]
    },
    {
      id: 'chapter-14',
      title: 'Chapter 14: Performance Optimization',
      folder: '14-Performance-Optimization',
      subChapters: [
        { id: '14.1', title: 'React Performance Optimization Techniques', file: '01-react-performance-optimization-techniques' },
        { id: '14.2', title: 'React.memo & useMemo', file: '02-react-memo-and-usememo' },
        { id: '14.3', title: 'useCallback & Performance Hooks', file: '03-usecallback-and-performance-hooks' },
        { id: '14.4', title: 'Code Splitting & Lazy Loading', file: '04-code-splitting-and-lazy-loading' },
        { id: '14.5', title: 'Bundle Optimization with Webpack', file: '05-bundle-optimization-with-webpack' },
        { id: '14.6', title: 'Database Query Optimization', file: '06-database-query-optimization' },
        { id: '14.7', title: 'API Caching Strategies', file: '07-api-caching-strategies' },
        { id: '14.8', title: 'Image Optimization & CDNs', file: '08-image-optimization-and-cdns' },
        { id: '14.9', title: 'Performance Monitoring & Profiling', file: '09-performance-monitoring-and-profiling' }
      ]
    },
    {
      id: 'chapter-15',
      title: 'Chapter 15: Real-Time Applications',
      folder: '15-Real-Time-Applications',
      subChapters: [
        { id: '15.1', title: 'Introduction to Real-Time Communication', file: '01-introduction-to-real-time-communication' },
        { id: '15.2', title: 'WebSockets vs Server-Sent Events', file: '02-websockets-vs-server-sent-events' },
        { id: '15.3', title: 'Socket.io Server Setup', file: '03-socket-io-server-setup' },
        { id: '15.4', title: 'Socket.io Client Integration with React', file: '04-socket-io-client-integration-with-react' },
        { id: '15.5', title: 'Building a Real-Time Chat Application', file: '05-building-a-real-time-chat-application' },
        { id: '15.6', title: 'Room Management & Broadcasting', file: '06-room-management-and-broadcasting' },
        { id: '15.7', title: 'Real-Time Notifications', file: '07-real-time-notifications' },
        { id: '15.8', title: 'Scaling Real-Time Applications', file: '08-scaling-real-time-applications' }
      ]
    },
    {
      id: 'chapter-16',
      title: 'Chapter 16: Testing MERN Applications',
      folder: '16-Testing-MERN-Applications',
      subChapters: [
        { id: '16.1', title: 'Testing Fundamentals & Types', file: '01-testing-fundamentals-and-types' },
        { id: '16.2', title: 'Unit Testing with Jest', file: '02-unit-testing-with-jest' },
        { id: '16.3', title: 'React Testing Library', file: '03-react-testing-library' },
        { id: '16.4', title: 'Testing React Components', file: '04-testing-react-components' },
        { id: '16.5', title: 'API Testing with Supertest', file: '05-api-testing-with-supertest' },
        { id: '16.6', title: 'Database Testing Strategies', file: '06-database-testing-strategies' },
        { id: '16.7', title: 'Integration Testing', file: '07-integration-testing' },
        { id: '16.8', title: 'End-to-End Testing with Cypress', file: '08-end-to-end-testing-with-cypress' },
        { id: '16.9', title: 'Test-Driven Development (TDD) Basics', file: '09-test-driven-development-(tdd)-basics' }
      ]
    },
    {
      id: 'chapter-17',
      title: 'Chapter 17: Security & Best Practices',
      folder: '17-Security-and-Best-Practices',
      subChapters: [
        { id: '17.1', title: 'Web Security Fundamentals', file: '01-web-security-fundamentals' },
        { id: '17.2', title: 'OWASP Top 10 Vulnerabilities', file: '02-owasp-top-10-vulnerabilities' },
        { id: '17.3', title: 'Input Validation & Sanitization', file: '03-input-validation-and-sanitization' },
        { id: '17.4', title: 'SQL Injection & NoSQL Injection Prevention', file: '04-sql-injection-and-nosql-injection-prevention' },
        { id: '17.5', title: 'Cross-Site Scripting (XSS) Protection', file: '05-cross-site-scripting-(xss)-protection' },
        { id: '17.6', title: 'Cross-Site Request Forgery (CSRF) Prevention', file: '06-cross-site-request-forgery-(csrf)-prevention' },
        { id: '17.7', title: 'Rate Limiting & DDoS Protection', file: '07-rate-limiting-and-ddos-protection' },
        { id: '17.8', title: 'Helmet.js for Security Headers', file: '08-helmet-js-for-security-headers' },
        { id: '17.9', title: 'Data Encryption & Secure Communication', file: '09-data-encryption-and-secure-communication' },
        { id: '17.10', title: 'Security Auditing & Monitoring', file: '10-security-auditing-and-monitoring' }
      ]
    },
    {
      id: 'chapter-18',
      title: 'Chapter 18: Deployment & DevOps',
      folder: '18-Deployment-and-Devops',
      subChapters: [
        { id: '18.1', title: 'Deployment Strategies & Environments', file: '01-deployment-strategies-and-environments' },
        { id: '18.2', title: 'MongoDB Atlas Setup & Configuration', file: '02-mongodb-atlas-setup-and-configuration' },
        { id: '18.3', title: 'Backend Deployment (Render, Railway, Heroku)', file: '03-backend-deployment-(render-railway-heroku)' },
        { id: '18.4', title: 'Frontend Deployment (Netlify, Vercel)', file: '04-frontend-deployment-(netlify-vercel)' },
        { id: '18.5', title: 'Environment Variables in Production', file: '05-environment-variables-in-production' },
        { id: '18.6', title: 'Domain Setup & SSL Certificates', file: '06-domain-setup-and-ssl-certificates' },
        { id: '18.7', title: 'CI/CD with GitHub Actions', file: '07-ci-cd-with-github-actions' },
        { id: '18.8', title: 'Docker Containerization Basics', file: '08-docker-containerization-basics' },
        { id: '18.9', title: 'AWS Deployment Fundamentals', file: '09-aws-deployment-fundamentals' },
        { id: '18.10', title: 'Monitoring & Logging in Production', file: '10-monitoring-and-logging-in-production' }
      ]
    },
    {
      id: 'chapter-19',
      title: 'Chapter 19: Advanced Topics',
      folder: '19-Advanced-Topics',
      subChapters: [
        { id: '19.1', title: 'GraphQL Introduction & Concepts', file: '01-graphql-introduction-and-concepts' },
        { id: '19.2', title: 'GraphQL with Apollo Server', file: '02-graphql-with-apollo-server' },
        { id: '19.3', title: 'GraphQL Client with Apollo Client', file: '03-graphql-client-with-apollo-client' },
        { id: '19.4', title: 'Server-Side Rendering (SSR) with Next.js', file: '04-server-side-rendering-(ssr)-with-next-js' },
        { id: '19.5', title: 'Static Site Generation (SSG)', file: '05-static-site-generation-(ssg)' },
        { id: '19.6', title: 'Progressive Web Apps (PWA)', file: '06-progressive-web-apps-(pwa)' },
        { id: '19.7', title: 'Microservices Architecture Basics', file: '07-microservices-architecture-basics' },
        { id: '19.8', title: 'API Gateway Concepts', file: '08-api-gateway-concepts' },
        { id: '19.9', title: 'Caching Strategies (Redis, Memcached)', file: '09-caching-strategies-(redis-memcached)' },
        { id: '1ax.10', title: 'Message Queues & Background Jobs', file: '10-message-queues-and-background-jobs' }
      ]
    },
    {
      id: 'chapter-20',
      title: 'Chapter 20: Capstone Projects',
      folder: '20-Capstone-Projects',
      subChapters: [
        { id: '20.1', title: 'Project Planning & Requirements Analysis', file: '01-project-planning-and-requirements-analysis' },
        { id: '20.2', title: 'Full-Stack E-Commerce Platform', file: '02-full-stack-e-commerce-platform' },
        { id: '20.3', title: 'Social Media Application', file: '03-social-media-application' },
        { id: '20.4', title: 'Real-Time Chat Application', file: '04-real-time-chat-application' },
        { id: '20.5', title: 'Blog/CMS Platform', file: '05-blog-cms-platform' },
        { id: '20.6', title: 'Task Management System', file: '06-task-management-system' },
        { id: '20.7', title: 'Learning Management System (LMS)', file: '07-learning-management-system-(lms)' },
        { id: '20.8', title: 'Project Deployment & Presentation', file: '08-project-deployment-and-presentation' }
      ]
    },
    {
      id: 'chapter-21',
      title: 'Chapter 21: Career Development',
      folder: '21-Career-Development',
      subChapters: [
        { id: '21.1', title: 'Full-Stack Developer Roadmap', file: '01-full-stack-developer-roadmap' },
        { id: '21.2', title: 'Building a Professional Portfolio', file: '02-building-a-professional-portfolio' },
        { id: '21.3', title: 'GitHub Profile Optimization', file: '03-github-profile-optimization' },
        { id: '21.4', title: 'Resume Writing for Developers', file: '04-resume-writing-for-developers' },
        { id: '21.5', title: 'Technical Interview Preparation', file: '05-technical-interview-preparation' },
        { id: '21.6', title: 'Common MERN Stack Interview Questions', file: '06-common-mern-stack-interview-questions' },
        { id: '21.7', title: 'System Design Interview Basics', file: '07-system-design-interview-basics' },
        { id: '21.8', title: 'Coding Challenge Platforms & Practice', file: '08-coding-challenge-platforms-and-practice' },
        { id: '21.9', title: 'Networking & Community Building', file: '09-networking-and-community-building' },
        { id: '21.10', title: 'Continuous Learning & Staying Updated', file: '10-continuous-learning-and-staying-updated' }
      ]
    }
  ]
};

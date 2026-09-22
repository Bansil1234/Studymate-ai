# StudyMate AI

StudyMate AI is a planned AI-powered study assistant for college students.

This repository currently contains only the initial project structure. Application features, dependencies, and configuration will be added in later development phases.

## Project Structure

```text
project/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── backend/
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   │   └── com/studymate/
│       │   │       └── .gitkeep
│       │   └── resources/
│       │       └── .gitkeep
│       └── test/
│           └── java/
│               └── com/studymate/
│                   └── .gitkeep
├── database/
│   └── .gitkeep
├── docs/
│   └── .gitkeep
├── .gitignore
└── README.md
```

## Directory and File Purposes

- `frontend/`: Contains the browser-side application.
- `frontend/index.html`: Landing page that introduces StudyMate AI.
- `frontend/login.html`: Static login form for the frontend prototype.
- `frontend/register.html`: Static registration form for the frontend prototype.
- `frontend/dashboard.html`: Static preview of the student dashboard.
- `frontend/css/`: Will contain CSS stylesheets for the user interface.
- `frontend/css/styles.css`: Shared responsive styles for all frontend pages.
- `frontend/js/`: Will contain vanilla JavaScript for browser behavior and API communication.
- `frontend/js/app.js`: Provides the mobile navigation toggle and demo form messages. It does not connect to a backend.
- `backend/`: Contains the Java Spring Boot server application.
- `backend/src/main/java/com/studymate/`: Will contain Java source code, such as controllers and services, when backend development begins.
- `backend/src/main/resources/`: Will contain backend resources and configuration files, such as application configuration, when needed.
- `backend/src/test/java/com/studymate/`: Will contain backend tests.
- `database/`: Will contain MySQL database scripts, such as table creation and sample data scripts.
- `docs/`: Will contain project documentation, design notes, diagrams, and setup instructions.
- `.gitignore`: Lists local files and generated files that Git should not track.
- `.gitkeep`: An empty placeholder that keeps an otherwise empty directory in Git.
- `README.md`: Introduces the project and explains its structure.

## Technology Choices

- Frontend: HTML, CSS, and vanilla JavaScript
- Backend: Java Spring Boot
- Database: MySQL

No frameworks or libraries have been added yet. This keeps the starting point small and makes each later addition understandable.

## Current Status

Initial static frontend prototype completed. The pages have no backend, database, authentication, or AI API integration yet.

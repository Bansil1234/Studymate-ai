# StudyMate AI

StudyMate AI is a planned AI-powered study assistant for college students.

This repository currently contains only the initial project structure. Application features, dependencies, and configuration will be added in later development phases.

## Project Structure

```text
project/
├── frontend/
│   ├── css/
│   │   └── .gitkeep
│   └── js/
│       └── .gitkeep
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
- `frontend/css/`: Will contain CSS stylesheets for the user interface.
- `frontend/js/`: Will contain vanilla JavaScript for browser behavior and API communication.
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

Initial folder structure only. No application features have been implemented.

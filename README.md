# Vehicle Inspection and Maintenance Web Application

## Project Description
This web application aims to streamline the vehicle inspection and maintenance process for the 1100th TASMG MD Army National Guard Unit. 

Our objective is to automate manual workflows, replacing paper forms with user-friendly digital interfaces. Soldiers and mechanics can efficiently input, access, and manage data related to vehicle inspections, ensuring fleet readiness and reducing downtime.

### Key Features
- **Role-Based Authentication**: Secure access tailored to different user roles.
- **Real-Time Vehicle Status Updates**: Keep stakeholders informed with up-to-date information.
- **API Integrations**:
  - Google Drive: File sharing and storage for inspection manuals and maintenance documents.
  - Google Calendar: Maintenance scheduling and task reminders.
  - IP Stack: Track and ensure secure access by location.
- **Dynamic Inspection Forms**: Tailored fields based on vehicle types to streamline data entry.

## Target Browsers
The application is designed to work seamlessly across the following platforms:
- **iOS**: Latest versions of Safari and Chrome.
- **Android**: Latest versions of Chrome and Samsung Internet.
- **Desktop Browsers**: Modern versions of Chrome, Edge, and Firefox.

## Developer Manual

## Introduction
This manual provides the necessary steps to set up, run, and maintain the **IP Logger and Web Application System**. The system includes:
- A frontend served via Live Server for user interactions.
- A backend Node.js server to log IP addresses and provide REST API functionality.
- Integration with the IPStack API for geolocation services.

The document is intended for developers taking over this system.

---

### System Setup

### Dependencies
Ensure the following dependencies are installed:
- **Node.js** (v18.x or higher)
  - Includes npm (Node Package Manager).
- **Live Server** extension for VS Code (for serving static files).

### Installation
1. Clone the repository:
   git clone <repository-url>

Install Node.js dependencies:
  npm install
Insure the following files exist in the root directory:
server.js: Backend server script.
ip_logs.txt: Log file for IP data (automatically created if missing).

### Running the Application
Backend Server
  Start the backend server:
    node server.js

### Verify the server is running:
You should see:
    Server running on http://localhost:3000

Frontend Application
  Open GroupProject.html in VS Code.
  Start Live Server:
  Right-click GroupProject.html and select Open with Live Server.

Ip addresses from a user will be listed in “ip_logs.txt” every time a user opens the website.




   

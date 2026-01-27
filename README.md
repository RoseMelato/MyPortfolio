# Rose Lerato Melato | Portfolio Website

## Overview
This is my personal portfolio website, showcasing my journey from Biochemistry to Software Development, my technical skills, and the projects I have worked on. The site includes a fully functional contact form with backend integration, allowing visitors to submit messages that are securely stored in a database.

The frontend is built with HTML, CSS, and JavaScript, while the backend is powered by Node.js, Express, and PostgreSQL, deployed on Render.

## Features
**Responsive Design** – Mobile-first layout optimized for desktop, tablet, and mobile devices.
**Interactive Sections** – Hero introduction, learning journey, skills overview, and featured projects with GitHub links.
**Backend Functionality** – Contact form submissions are validated and stored in a PostgreSQL database.
**Smooth Navigation** – Mobile menu toggle, smooth scrolling for anchor links, and enhanced user experience.

## Technologies
**Frontend:** HTML5, CSS3, JavaScript
**Backend**: Node.js, Express.js
**Database:** PostgreSQL (Render)
**Environment Management:** dotenv
**Deployment**: Render (Backend), GitHub Pages (Frontend)
**Version Control**: Git, GitHub

## Project Structure
MyPortfolio/
│
├── backend/
│   ├── server.js       # Express server and API routes
│   ├── db.js           # PostgreSQL database connection
│   ├── package.json    # Backend dependencies
│   └── node_modules/
│
├── index.html          # Frontend main page
├── style.css           # Frontend styles
├── script.js           # Frontend JavaScript
├── profilephoto.jpg    # Profile image
├── .gitignore
└── README.md

## Backend Architecture
- The contact form sends data from the frontend using a POST request.
- The Express backend validates the incoming request.
- Valid messages are stored in a PostgreSQL database.
- A success response is returned to the frontend.
The backend is designed to store messages reliably without relying on email services, ensuring stability in production.

## Usage
- Browse featured projects and explore linked GitHub repositories.
- Submit a message via the contact form, which is securely stored in the database for review.
  
## License
This project is for personal portfolio use

## Contact
- **Github:** github.com/RoseMelato
- **Location:** Johannesburg, South Africa

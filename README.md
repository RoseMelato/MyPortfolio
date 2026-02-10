**Rose Lerato Melato | Portfolio Website**

**Overview**
This is my personal portfolio website showcasing my transition from Biochemistry to Software Development, my technical skill set, and the projects I have worked on. The website demonstrates both frontend and backend capabilities, including a fully functional contact form with database integration.

The frontend is built using HTML, CSS, and JavaScript, while the backend is powered by Node.js, Express, and PostgreSQL, all deployed and managed on Render.

**Features**
- Responsive Design – Mobile-first layout optimized for desktop, tablet, and mobile devices.
- Interactive Sections – Hero introduction, learning journey, skills overview, and featured projects with GitHub links.
- Backend Integration – Contact form submissions are validated and securely stored in a PostgreSQL database.
- User Experience Enhancements – Smooth scrolling, mobile navigation toggle, and clear form feedback.
- Production-Ready Setup – Environment variables, structured backend, and database persistence.

**Technologies**
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL (hosted on Render)
- Environment Management: dotenv
- Deployment: Render (Backend), GitHub Pages (Frontend)
- Version Control: Git, GitHub

**Project Structure**
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

**Backend Architecture**
- The contact form sends data from the frontend via a POST request.
- The Express backend performs basic validation on incoming data.
- Valid submissions are persisted in a PostgreSQL database.
- A success or error response is returned to the frontend.
- Messages are stored reliably without relying on third-party email services, ensuring stability and data consistency.

**Usage**
- Explore featured projects and access linked GitHub repositories.
- Submit a message using the contact form; all messages are securely stored in the database for later review.

**License**
This project is intended for personal portfolio use.

**Contact**
- GitHub: https://github.com/RoseMelato
- Location: Johannesburg, South Africa
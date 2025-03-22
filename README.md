User Dashboard Panel
A React.js-based user dashboard with authentication, profile display, and logout functionality. Built using Redux Toolkit, React Router, and Tailwind CSS for state management, navigation, and styling.

🚀 Features
✅ User Authentication – Displays the logged-in user's profile.
✅ Logout Functionality – Secure logout with state reset.
✅ Profile Section – Shows profile picture, name, and email.
✅ Responsive UI – Built with Tailwind CSS for mobile-friendly design.
✅ Redux State Management – Efficient data handling using Redux Toolkit.

🛠️ Technologies Used
Frontend:
React.js (Functional Components, Hooks)
Redux Toolkit (State Management)
React Router (Navigation)
Tailwind CSS (Styling)
Backend (Optional, for Authentication):
Node.js & Express.js
MongoDB (for user data storage)
JWT (for authentication tokens)


📌 Installation & Setup
1️⃣ Clone the Repository

Install Dependencies
npm install

⚠️ Important Configuration
Before running the project, ensure that the CORS policy is properly configured in the backend server.

In your Express.js server's index.js file, update the CORS origin settings by replacing "*" with your frontend's URL:

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Update this with your frontend's actual URL
    credentials: true,
  })
);


Start the Development Server
npm run dev



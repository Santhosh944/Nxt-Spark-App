# 📺 Nxt Spark App

**Nxt Spark App** is a YouTube-inspired video streaming platform built using **React JS** as part of the **NxtWave CCBP curriculum**.  
The application provides secure authentication, protected routes, theme switching, and multiple video sections such as Trending, Gaming, and Saved Videos.

🔗 **Live Demo:** https://nxtsparkapp.ccbp.tech/login

---

## 🔑 Demo Login Credentials

Username: rahul
Password: rahul@2021
---

## ✨ Features

### 🔐 Authentication
- Secure user login using JWT
- Protected routes for authenticated users
- Redirects unauthenticated users to the Login page

### 🏠 Home
- Displays all videos
- Search functionality
- Handles loading, failure, and empty states

### 🔥 Trending
- Displays trending videos
- API status handling (loader, success, failure)

### 🎮 Gaming
- Displays gaming-related videos
- Clean grid-based UI

### 🎬 Video Details
- Video playback using `react-player`
- Like and Dislike toggle functionality
- Save and Unsave videos
- Channel information and video description

### 💾 Saved Videos
- View all saved videos
- Displays an empty state when no videos are saved

### 🌗 Theme Toggle
- Light and Dark mode support
- Implemented using React Context API

### 🚪 Logout
- Logout confirmation popup
- Clears authentication token

---

## 🛠️ Tech Stack

- **Frontend:** React JS
- **Routing:** React Router
- **State Management:** React Context API
- **Styling:** Styled Components, CSS
- **Authentication:** JWT (Cookies)
- **Video Player:** react-player
- **Date Utilities:** date-fns
- **APIs:** REST APIs

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Login
│   ├── Home
│   ├── Trending
│   ├── Gaming
│   ├── VideoItemDetails
│   ├── SavedVideos
│   ├── Header
│   ├── Sidebar
│   ├── ProtectedRoute
│   └── NotFound
├── context/
│   └── ThemeAndVideoContext
├── App.js
└── index.js
```
---

## ⚙️ Installation & Setup (Local)

Clone the repository:
git clone https://github.com/Santhosh944/Nxt-Spark-App.git

Navigate to the project directory:
cd Nxt-Spark-App

Install dependencies:
npm install

Start the development server:
npm start

---

## 🧪 Key Concepts Implemented
JWT Authentication
Protected Routes
Conditional Rendering
API Status Handling
Context API for Global State
Responsive Design
Styled Components
Component Reusability
---

## 📚 Learning Outcomes
Built a real-world React application
Implemented authentication and authorization
Integrated REST APIs with proper error handling
Used Context API for global state management
Improved UI/UX with theme switching
Structured a scalable React project


---

## 📸 Screenshots
<img width="1918" height="971" alt="Home Page" src="https://github.com/user-attachments/assets/c0aad42e-1141-4ec5-a9dc-84a0eeef6960" />

---

## 👨‍💻 Author
Santhosh
GitHub: https://github.com/Santhosh944

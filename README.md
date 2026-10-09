# 🏥 MadicoCare – Hospital Management System

MadicoCare is a full-stack hospital management web application designed to simplify doctor appointments, patient management, and administrative operations. It provides separate interfaces for patients, doctors, and administrators to manage healthcare services efficiently.

## ✨ Features

- **Patient Portal:** Browse doctors, view profiles, book appointments, and manage appointments.
- **Doctor Panel:** Manage doctor profiles, view appointments, and update appointment status.
- **Admin Dashboard:** Manage doctors, monitor appointments, and view dashboard statistics.
- **Authentication:** User authentication and role-based access control.
- **Appointment Management:** Book, view, and manage doctor appointments.
- **Cloud Image Storage:** Upload and manage doctor profile images using Cloudinary.
- **Responsive UI:** User-friendly interface for different screen sizes.

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Axios

### Admin Panel
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Multer
- Cloudinary
- dotenv

### Development Tools
- Git & GitHub
- npm
- ESLint
- Postman

## 📁 Project Structure

```text
MadicoCare/
├── admin/       # Admin and doctor dashboard
├── backend/     # REST API and database integration
├── frontend/    # Patient-facing web application
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites
- Node.js and npm
- MongoDB database
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/dilshad322/Hospital-Management-System.git
cd Hospital-Management-System
```

### 2. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3. Configure Environment Variables

Create the required `.env` files inside the `backend`, `frontend`, and `admin` directories as required by the application.

Add the appropriate MongoDB connection string, JWT secret, Cloudinary credentials, API base URL, and other required configuration values.

**Important:** Never commit `.env` files or expose secret keys in a public repository.

### 4. Run the Application

Open separate terminals for each application and run:

**Backend**
```bash
cd backend
npm run server
```

**Frontend**
```bash
cd frontend
npm run dev
```

**Admin Panel**
```bash
cd admin
npm run dev
```

Check the `package.json` in each directory for the exact available scripts.

## 🎯 Project Objective

The goal of MadicoCare is to provide a centralized platform for doctor discovery, appointment booking, and hospital administration while demonstrating full-stack web development skills, REST API integration, authentication, and database management.

## 👨‍💻 Author

**Md Dilshad Anwar**

- GitHub: [@dilshad322](https://github.com/dilshad322)
- 
   Contact: 6202340325

  email: dilshadanwar322@gmail.com
---

*MadicoCare – Simplifying Healthcare Management.*


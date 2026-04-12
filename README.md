# 🎤 RapNation Event Website

A modern, full-stack event website built with **Node.js, Express, EJS, and MySQL**, designed to showcase a hip-hop and rap festival experience.

This project has been fully upgraded with a **modern UI/UX redesign**, improved structure, and a scalable backend architecture.

---

## 🚀 Features

### 🎨 Frontend (UI/UX)

* Modern dark-themed festival design
* Responsive layout (mobile-friendly)
* Reusable UI components (cards, buttons, sections)
* Sticky navigation bar with CTA
* Hero-based landing page
* Artist lineup with visual cards
* Stages and schedule layout
* Contact form with improved UX
* Community comments display

### ⚙️ Backend

* Built with **Express.js**
* MVC-style structure:

  * Routes
  * Controllers
  * Models
* MySQL database integration using `mysql2`
* Environment-based configuration (`.env`)
* Error handling middleware
* Clean routing system

### 💬 Comments System

* Users can submit comments
* Data stored in MySQL
* Comments displayed dynamically
* Empty state handling

---

## 🧠 Project Structure

```bash
rap-event-website-main/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   ├── pageController.js
│   └── commentController.js
├── models/
│   └── commentModel.js
├── routes/
│   ├── pageRoutes.js
│   └── commentRoutes.js
├── middleware/
│   └── errorHandler.js
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
│   ├── pages/
│   └── partials/
├── sql/
│   └── schema.sql
├── .env
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3 (custom design system)
* EJS (templating engine)

### Backend

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd rap-event-website-main
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Set up environment variables

Create a `.env` file in the root:

```env
PORT=9000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=rapnation
```

---

### 4. Set up the database

Run the SQL file:

```sql
sql/schema.sql
```

This will create:

* database: `rapnation`
* table: `comments`

---

### 5. Run the application

```bash
node app.js
```

---

### 6. Open in browser

```text
http://localhost:9000
```

---

## 📄 Pages Overview

| Route       | Description                          |
| ----------- | ------------------------------------ |
| `/`         | Homepage (hero, artists, highlights) |
| `/line`     | Artist lineup                        |
| `/stages`   | Event stages and schedule            |
| `/Advice`   | Visitor guide / FAQ                  |
| `/contact`  | Contact form                         |
| `/comments` | User comments                        |

---

## 🎯 UI/UX Improvements

The project was upgraded from a basic layout to a **modern event platform design**:

* Improved visual hierarchy
* Consistent spacing system
* Dark theme with accent colors
* Reusable components (cards, buttons)
* Better mobile experience
* Cleaner navigation and page structure

---

## 🔐 Security & Best Practices

* `.env` used for sensitive data
* `node_modules` excluded via `.gitignore`
* Structured backend (MVC pattern)
* Input validation on forms

---

## 🧪 Future Improvements

* User authentication (login/signup)
* Admin dashboard for managing comments
* Ticket booking system
* Payment integration
* Live event countdown timer
* Artist detail pages
* Image gallery
* API-based frontend (React upgrade)

---

## 👨‍💻 Author

## Tyrone Ekhator

[GitHub Profile](https://github.com/Tyroneekhator)

## 📜 License

This project is open-source and available under the MIT License.

---

## ⭐ Acknowledgements

* Design inspiration from modern music festival websites
* UI/UX concept generated using Figma AI
* Built as a full-stack learning and portfolio project

---

## 💡 Final Note

This project demonstrates:

* Full-stack development
* UI/UX transformation
* Clean architecture
* Real-world web application structure

It is designed to be both a **functional application** and a **portfolio-ready project**.

# 🌐 URL Shortener

A simple and secure URL shortening service built with **Node.js**, **Express**, **MongoDB**, and **EJS**. This app allows users to generate shortened URLs for long links. Authenticated users can manage their own URLs via a dashboard, while the admin has access to view all generated URLs.

---

## 🚀 Features

- 🔗 Shortens any valid URL using `uuid`
- 👤 User dashboard to view only their own URLs
- 🔐 Admin access to view all shortened URLs
- 🧱 Modular structure for clean and scalable codebase

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: MongoDB
- **Authentication**: JWT
- **UUID Generator**: [`uuid` npm package](https://www.npmjs.com/package/uuid)

---

## 📂 Folder Structure

```

📦 url_Shortner/
├── 📂config/           # Configuration files (DB, environment)
│   ├── 📄 db.js
├── 📂controller/       # Handles business logic
│   ├── 📄 url.js
│   ├── 📄 user.js
├── 📂middleware/       # Authentication and other middleware
│   ├── 📄 auth.js
├── 📂model/            # Mongoose models
│   ├── 📄 url.js
│   ├── 📄 user.js
├── 📂routes/           # API route definitions
│   ├── 📄 staticRouter.js
│   ├── 📄 url.js
│   ├── 📄 user.js
├── 📂service/          # Helper services and utilities
│   ├── 📄 auth.js
├── 📂views/            # EJS template files
│   ├── 📄 home.ejs
│   ├── 📄 signup.ejs
│   ├── 📄 login.ejs
├── 📄.env.example
├── 📄.gitignore
├── 📄index.js          # Main entry point
├── 📄package.json
├── 📄package-lock.json
├── 📜 LICENSE
└── 📘 README.md


````

---

## ⚙️ Installation

Make sure you have **Node.js**, **npm**, and **MongoDB** installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/url_shortner.git
   cd url_shortner

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   * Make sure MongoDB is running locally or provide a remote URI in your `.env` file.

4. **Start the server:**

   ```bash
   npm start
   ```

---

## 🔗 Routes

### 📁 URL Routes

* `GET /api/url/:shortUrl` → Redirect to the original URL
* `GET /api/url/analytics/:shortUrl` → Fetch analytics for the short URL

### 👤 User Routes

* `POST /user` → Register a new user

* `POST /user/login` → Log in an existing user

### 🖥️ Static Routes

* `GET /` → Home page
* `GET /signup` → Signup page
* `GET /login` → Login page
* `GET /admin/urls` → Admin dashboard to view all URLs (accessible only by admin)

---

## 🧪 Usage

Once the server is running:

1. Visit `http://localhost:PORT/` in your browser.
2. Register or log in to your account.
3. Enter the original URL to shorten it.
4. View your shortened URLs and their analytics.
5. Admins can visit `/admin/urls` to see all user-generated URLs.

---

## 📌 Future Improvements

* Support for custom aliases
* Expiry for short links
* Rate limiting and spam prevention
  
---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author
**Anjali**

Feel free to contribute by submitting issues or pull requests! 🚀



# Expense Tracker

An app for tracking and managing your daily expenses. Built using modern technologies such as React, TypeScript, Node.js, Express, JWT, tsyringe, and MongoDB.

## Features

- Users can create, update, and delete expenses.
- Expenses are tracked with their category, total amount, date and additional notes.
- Secure user authentication using JSON Web Tokens (JWT).
- Dependency Injection with tsyringe for maintainability and testability.

## Tech Stack

- Frontend: React + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: MongoDB
- Authentication: JWT
- Dependency Injection: tsyringe

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/Arad1234/home-assignment.git
```

**2. Navigate into the directory**

```bash
cd <directory-name>
```

**3. Install dependencies**

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd server
npm install
```

**4. Setup your environment variables**

Create a `.env` file in your server directory and add the following:

```bash
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_uri
```

**5. Run the project**

For the frontend:

```bash
cd client
npm start
```

For the backend:

```bash
cd server
npx nodemon
```

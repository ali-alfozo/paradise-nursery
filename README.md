# 🌿 Paradise Nursery - React Shopping Cart

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive_Design-1572B6?logo=css3&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live-Demo-2E8B57?style=for-the-badge&logo=githubpages&logoColor=white)](https://ali-alfozo.github.io/paradise-nursery/)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ali-alfozo/paradise-nursery)

A modern, fully responsive e-commerce web application for an online plant shop. Built with **React**, **Redux Toolkit**, and **React Router**, this project simulates a real-world shopping experience for plant lovers.

![Paradise Nursery](https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop)

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Author](#author)
---

## 🌱 About the Project

**Paradise Nursery** is a fully functional shopping cart application that allows users to browse a curated collection of houseplants, add them to a shopping cart, and manage their order before checkout. The application is built with a focus on **clean code**, **scalability**, and an **exceptional user experience**.

This project was developed as the **Final Capstone Project** for the [Developing Front-End Apps with React](https://www.coursera.org/learn/developing-frontend-apps-with-react) course by **IBM** on **Coursera**.

---

## 🚀 Live Demo

> 🔗 **[View Live Demo](https://ali-alfozo.github.io/paradise-nursery/)**

---

## ✨ Features

### 🛍️ Shopping Experience
- **Browse Plants:** Explore 18+ unique houseplants organized into 3 categories (Indoor, Outdoor, Succulents).
- **Product Details:** Click any plant to view detailed information including image, price, category, and description.
- **Add to Cart:** Add plants to your cart with a single click.
- **Smart Button State:** The "Add to Cart" button automatically disables and shows "Added" after adding a product.

### 🛒 Shopping Cart Management
- **View Cart:** See all items in your cart with images, names, and unit prices.
- **Adjust Quantity:** Increase or decrease quantities with `+` and `-` buttons.
- **Remove Items:** Delete any item from the cart instantly.
- **Real-time Totals:** The total number of plants and total cost are calculated dynamically.
- **Persistent Cart:** Your cart is saved to `localStorage` and persists even after refreshing the page.

### 🎨 Design & UX
- **Fully Responsive:** Optimized for mobile, tablet, and desktop devices.
- **Modern UI:** Clean, green-themed design with smooth animations.
- **Interactive Navigation:** Header with dynamic cart icon showing total items.
- **Toast Notifications:** Beautiful toast notifications when adding/removing items.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI Library |
| **Redux Toolkit** | State Management |
| **React Router v6** | Client-side Routing |
| **React Hot Toast** | Toast Notifications |
| **Vite** | Build Tool & Dev Server |
| **CSS3** | Styling & Responsive Design |
| **LocalStorage API** | Cart Persistence |

---

## 📂 Project Structure

```text
paradise-nursery/
├── public/
├── src/
│   ├── assets/                 # Images and static assets
│   ├── components/             # Reusable UI components
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.css
│   │   ├── CartItem.jsx
│   │   ├── CartItem.css
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductList.css
│   ├── pages/                  # Application pages
│   │   ├── CartPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── ProductDetails.jsx
│   │   ├── ProductDetails.css
│   │   └── ProductListPage.jsx
│   ├── redux/                  # Redux store and slices
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx                 # Main application and routing
│   ├── App.css                 # Application styles
│   ├── data.js                 # Plant product data (18 plants)
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
## 🏁 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ali-alfozo/paradise-nursery.git
   ```
2. Navigate to the project folder:
```bash
cd paradise-nursery
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and navigate to:
```bash
 http://localhost:5173/paradise-nursery/
 ```
6.Build for Production
```bash
npm run build
```
## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](https://raw.githubusercontent.com/ali-alfozo/paradise-nursery/main/landing-page.png)

### 🌿 Product List
![Product List](https://raw.githubusercontent.com/ali-alfozo/paradise-nursery/main/product-list.png)

### 🛒 Shopping Cart
![Shopping Cart](https://raw.githubusercontent.com/ali-alfozo/paradise-nursery/main/shopping-cart.png)

## 👨‍💻 Author
**Ali Alfozo**
- GitHub: [@ali-alfozo](https://github.com/ali-alfozo)
- LinkedIn: [Ali Alfozo](https://www.linkedin.com/in/ali-alfozo)

⭐ **If you found this project helpful, please give it a star!** ⭐

# 📊 KoinX - Crypto Tax Calculator

KoinX is a crypto tax calculator that helps users find out their capital gains and the amount of tax they need to pay based on their crypto transactions in Australia.  
Users just need to enter the purchase price, sale price, expenses, investment type (short or long term), and annual income — and the tool will do the math.

---
## 📸 Preview of the App

Here's how the KoinX Crypto Tax Calculator looks:

![App Screenshot](./public/photo.png)
___


## 🔗 Live Demo

👉 [KoinX Live Demo](https://koin-x-react.vercel.app/)

---

## 🚀 Features

- **Dynamic Tax Rate** — Changes based on selected annual income.
- **Capital Gains Calculation** — Calculates gains using purchase, sale price, and expenses.
- **Investment Type (Short/Long Term)** — Applies long-term discount if applicable.
- **Tax Estimation** — Calculates tax based on net gains and income bracket.
- **Responsive Design** — Clean UI using Tailwind CSS.

---

## 🧠 Overview of the Task

The goal of the project was to build a single-page tax calculator that:
- Converts Figma UI into working React components.
- Accepts user input for purchase, sale, and expense values.
- Calculates short-term and long-term capital gains.
- Applies the appropriate Australian income tax slab.
- Displays the capital gain, discount, and tax owed clearly.

---
## 🛠 Tech Stack

- **React** – JavaScript library for UI and logic
- **Tailwind CSS** – Utility-first CSS framework
- **React Icons** – For using icons like dropdowns, arrows, etc.
- **JavaScript (ES6+)** – To handle logic and calculations

---

## 📈 How It Works

### 1. Select Annual Income
- Choose your income range from dropdown.
- The tax rate will update based on the selected range.

### 2. Calculate Capital Gains
Formula used: Capital Gains = Sale Price - Purchase Price - Expenses

### 3. Choose Investment Type
- **Short Term**: Full capital gains are considered for tax.
- **Long Term**: 
  - If gains are positive, 50% discount is applied.
  - Net Capital Gains = Capital Gains - 50% of Capital Gains

### 4. Tax Calculation
- Tax is calculated using: Tax = (Net Capital Gains × Applicable Tax Rate) / 100
_ _ _

## 🛠️ Functionalities Implemented

- ✅ Purchase, Sale, and Expense inputs
- ✅ Short-Term vs Long-Term toggle
- ✅ Income-based tax slab selection
- ✅ Tax auto-calculation based on user data
- ✅ Clean UI with Tailwind for fast responsiveness
- ✅ Dropdown component for flexible options
- ✅ Read-only output fields for final tax breakdown
- ✅ Fully responsive for mobile and desktop screens

---

## 📦 Extra Packages/Libraries Used

| Package       | Purpose                         |
|---------------|----------------------------------|
| `react-icons` | Icons (optional enhancement)     |
| `tailwindcss` | Utility-first CSS framework      |
| `vite`        | Fast React development build     |

---

## 📚 Learnings from the Project

- 🔁 How to convert a Figma design into reusable and responsive React components.
- 🧮 How tax slabs and progressive tax rates work in Australia.
- ✍️ Managing state and side-effects using `useState` and `useEffect`.
- 🧠 Creating a user-friendly UX with dynamic conditionals.
- 🎯 Designing scalable input forms and conditionally rendered UI sections.

---

## 🚀 Future Improvements

- [ ] Add support for **Indian Tax Calculation**.
- [ ] Integrate **real-time crypto price APIs** (e.g., CoinGecko).
- [ ] Add **currency selection** (AUD, INR, USD).
- [ ] Implement **authentication** and user dashboards.
- [ ] Store and track **user transactions history**.
- [ ] Mobile-first performance optimization.

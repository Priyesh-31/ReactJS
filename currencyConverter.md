💱 Currency Converter App

A modern React-based Currency Converter that fetches live exchange rates using an API and converts currencies instantly.
This project demonstrates the power of React Custom Hooks, reusable components, and efficient state management.

🚀 Features

🌍 Live Currency Conversion using a public exchange rate API

⚛️ Custom React Hook (useCurrencyInfo) for fetching currency data

🔁 Swap Functionality to quickly interchange currencies

♻️ Reusable Components for clean and maintainable code

🆔 useId Hook for accessibility and unique IDs

⚡ Optimized API Calls with efficient data handling

🎨 Clean and responsive UI

🧠 Concepts Used

This project covers several important React development concepts:

1️⃣ Custom Hooks

A custom hook useCurrencyInfo is created to handle API calls and manage currency data.

It uses:

useEffect → for fetching API data

useState → for managing exchange rate data

This makes the logic reusable and modular.

2️⃣ API Integration

The app fetches real-time currency exchange rates from a public API and updates the UI dynamically.

Example API response includes exchange rates like:

USD → INR
USD → EUR
USD → GBP
3️⃣ Reusable Components

The project uses a reusable component:

InputBox Component

Used for both:

From Currency

To Currency

This reduces duplication and keeps the code clean and scalable.

4️⃣ State Management

React useState manages:

Amount entered

From currency

To currency

Converted amount

5️⃣ useId Hook

useId is used to generate unique IDs for form elements, improving:

Accessibility

Label linking

Clean DOM structure

🔁 Swap Feature

The Swap button allows users to quickly interchange currencies.

Example:

USD → INR

becomes

INR → USD

This improves user experience and usability.

📂 Project Structure
currency-converter/
│
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
├── package.json
└── README.md
⚙️ Installation

Clone the repository:

git clone https://github.com/your-username/currency-converter.git

Navigate to the project folder:

cd currency-converter

Install dependencies:

npm install

Start the development server:

npm run dev
🎥 Project Walkthrough
Section	Timestamp
Intro & Setup	0:00 – 9:17
Custom Hook (useCurrencyInfo)	9:17 – 22:15
UI Components	22:16 – 37:46
useId Hook & Styling	39:10 – 43:28
Functionality & Optimization	43:28 – 58:13
Debugging	58:13 – 1:01:37
📌 Future Improvements

Some improvements that can be added:

🖼 Add images/icons for currencies

🌙 Dark mode support

⭐ Favorite currencies

📊 Historical exchange rate chart

💾 Local storage for last used currencies

🌍 Multi-language support

🎯 Default Configuration

Example default conversion:

USD → INR

Users can change currencies anytime using the dropdown.

🛠 Tech Stack

React.js

JavaScript (ES6+)

Vite

CSS / Tailwind (optional)

Exchange Rate API

👨‍💻 Author

Priyesh Raj

Student at RGIPT
Interested in Web Development, React, and Full Stack Projects

⭐ If you like this project, consider starring the repository!
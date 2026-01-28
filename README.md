# 🏡 Satvik’s Stays – Vacation Rental UI (React)

A modern vacation rental and property booking UI built with **React** and **Tailwind CSS**.  
This project focuses on a smooth user experience for searching, filtering, and viewing detailed property listings similar to Airbnb-style platforms.

---

## ✨ Features

- 🔍 **Advanced Search Bar**
  - Location selector
  - Date range picker
  - Guest selector (Adults, Children, Pets)
  - Filters modal (Price, Property Type, Rooms, Amenities)

- 🏘️ **Property Listings**
  - Responsive property grid
  - Property cards with images, ratings, and pricing
  - Click-to-view detailed property page

- 📄 **Property Detail Page**
  - Image gallery with modal view
  - Amenities, meals, policies, and host info
  - Reviews section
  - Booking summary card with guest controls

- 📅 **Custom Date Picker**
  - Range selection
  - Auto-close on selection
  - Visual range highlighting

- 🎨 **Modern UI**
  - Tailwind CSS styling
  - Responsive layout
  - Clean, production-ready components

---

## 🛠️ Tech Stack

- **React** (Vite-based setup)
- **Tailwind CSS**
- **React Icons**
- **JavaScript (ES6+)**

---

## 📂 Project Structure
```
rental-management-system-web_development/
├── public/
│   ├── ...
├── src/
│   ├── components/
│   │   ├── BookingCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── PhotoGalleryModal.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── search/
│   │       ├── DateDropdown.jsx
│   │       ├── FiltersModal.jsx
│   │       ├── GuestsDropdown.jsx
│   │       └── LocationDropdown.jsx
│   │
│   ├── data/
│   │   └── properties.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PropertyDetail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── ...
```
---

## 🚀 Getting Started

### 1️. Clone the repository
```bash
git clone https://github.com/gayatri012shelar/rental-management-system-web_development.git
```

### 2. Install dependencies
```bash
npm instal
```

### 3. Run the development server
```bash
npm run dev
```

---

## 🧪 Data Source
- Property data is currently static and stored in:
`src/data/properties.js`

- Designed to be easily replaceable with an API or backend service.

## 🔮 Future Improvements
- Backend integration (Node.js / Firebase / Supabase)
- Authentication (Login / Signup)
- Real booking flow & payment gateway
- Map integration (Google Maps / Mapbox)
- Admin dashboard for hosts

## 👤 Author
Gayatri Shelar
B. Sc. (I. T.), N. M. College, Mumbai
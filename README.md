# CurrentView

A modern, responsive news aggregator application that helps you stay connected with current events from around the world. Built with React and powered by NewsAPI.

![CurrentView](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Real-time News**: Browse the latest headlines from multiple sources
- **Category Filtering**: Quickly filter news by categories (General, Business, Technology, Sports, Entertainment, Health, Science)
- **Smart Search**: Search for specific topics with debounced search functionality
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark Mode Support**: Toggle between light and dark themes for comfortable reading
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Smooth loading indicators for better user experience
- **External Links**: Direct links to original news articles

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **UI Library**: React Bootstrap 2.10.10
- **State Management**: React Hooks
- **Data Fetching**: TanStack React Query (React Query) 5.90.3
- **HTTP Client**: Axios 1.12.2
- **Icons**: FontAwesome & Lucide React
- **Styling**: CSS3 with Bootstrap 5.3.8

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- NewsAPI Key (Get it free at [newsapi.org](https://newsapi.org))

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd currentview
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your NewsAPI key:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features Overview

### Category Navigation

Browse news by categories with a clean, intuitive interface. Switch between different news categories seamlessly.

### Search Functionality

Search for specific news topics with real-time results. The search feature includes debouncing to optimize API calls.

### Responsive Cards

News articles are displayed in beautiful, responsive cards showing:

- Article image (with fallback placeholder)
- Source name
- Published date and time
- Article title and description
- Link to original article

### Error Handling

Robust error handling with user-friendly error messages and retry functionality for failed requests.

## 🌐 API Integration

This application uses the [NewsAPI](https://newsapi.org) to fetch real-time news data. The API provides:

- Top headlines by category and country
- Search functionality across thousands of sources
- Article metadata including images, descriptions, and publication dates

## 📄 Project Structure

```
currentview/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── No-Image-Placeholder.jpg
│   ├── components/
│   │   ├── CardComp.jsx
│   │   ├── CategoryComp.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ErrorDisplay.jsx
│   │   ├── HeroComp.jsx
│   │   ├── NavbarComp.jsx
│   │   └── SpinnerLoading.jsx
│   ├── hooks/
│   │   └── useNewsQuery.js
│   ├── services/
│   │   └── newsServices.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Yash**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- GitHub: [Your GitHub URL]

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org) for providing the news data
- [React Bootstrap](https://react-bootstrap.github.io/) for UI components
- [FontAwesome](https://fontawesome.com/) for icons

---

⭐ If you found this project interesting, please consider giving it a star!

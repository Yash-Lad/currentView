# CurrentView 📰

A modern, responsive news aggregator built with React and powered by NewsAPI. Stay up-to-date with real-time headlines, smart search, and beautiful dark mode interface.

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?style=flat&logo=vite)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.90.3-ff4154?style=flat&logo=react-query)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952b3?style=flat&logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

</div>

---

## ✨ Features

- 🔍 **Smart Search** - Debounced search with real-time results
- 🗂️ **7 News Categories** - General, Technology, Business, Science, Entertainment, Sports, Health
- 🌓 **Dark Mode** - Persistent theme toggle with localStorage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Optimized Performance** - TanStack Query caching and background refetching
- 🛡️ **Error Handling** - Graceful error states with retry functionality
- 🖼️ **Image Fallbacks** - Automatic placeholder for missing images
- 🔗 **Direct Links** - Quick access to original news articles

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- NewsAPI Key ([Get free key](https://newsapi.org))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/currentview.git
cd currentview

# Install dependencies
npm install

# Create .env file and add your API key
echo "VITE_NEWS_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🛠️ Tech Stack

| Category          | Technology                                |
| ----------------- | ----------------------------------------- |
| **Framework**     | React 19.1.1                              |
| **Build Tool**    | Vite 7.1.7                                |
| **UI Library**    | React Bootstrap 2.10.10 + Bootstrap 5.3.8 |
| **Data Fetching** | TanStack React Query 5.90.3               |
| **HTTP Client**   | Axios 1.12.2                              |
| **Icons**         | FontAwesome 7.1.0, Lucide React 0.545.0   |
| **Theme Toggle**  | React Switch 7.1.0                        |

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CardComp.jsx           # News article card
│   ├── CategoryComp.jsx       # Search & category filters
│   ├── DarkModeToggle.jsx     # Theme toggle
│   ├── ErrorDisplay.jsx       # Error messages
│   ├── HeroComp.jsx           # Hero section
│   ├── NavbarComp.jsx         # Navigation bar
│   └── SpinnerLoading.jsx     # Loading spinner
├── hooks/               # Custom React hooks
│   └── useNewsQuery.js        # TanStack Query hooks
├── services/            # API services
│   └── newsServices.js        # NewsAPI integration
├── utils/               # Utilities
│   └── categoryTabColor.js    # Category color mappings
├── assets/              # Static assets
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

---

## 🏗️ Key Architecture

### Data Fetching with React Query

Custom hooks abstract the API logic with built-in caching:

```javascript
// hooks/useNewsQuery.js
export const useNewsByCategory = (category, country = "us", pageSize = 12) => {
  return useQuery({
    queryKey: ["news", "category", category, country, pageSize],
    queryFn: () => newsServices.getNewsByCategory(category, country, pageSize),
    select: (data) => data.articles,
  });
};
```

### Debounced Search

Search queries are debounced (500ms) to optimize API calls:

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearchQuery(searchQuery);
  }, 500);
  return () => clearTimeout(timer);
}, [searchQuery]);
```

### API Service Layer

Centralized Axios instance with interceptors for authentication and error handling:

```javascript
// services/newsServices.js
export const newsAPI = axios.create({
  baseURL: import.meta.env.DEV ? "/api" : "https://newsapi.org/v2",
  timeout: 10000,
});

// Auto-inject API key
newsAPI.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey: API_KEY };
  return config;
});
```

---

## 🎨 Category System

7 color-coded categories for easy navigation:

| Category      | Color                                       |
| ------------- | ------------------------------------------- |
| General       | <span style="color:#3b82f6">● Blue</span>   |
| Technology    | <span style="color:#8b5cf6">● Purple</span> |
| Business      | <span style="color:#10b981">● Green</span>  |
| Science       | <span style="color:#f59e0b">● Orange</span> |
| Entertainment | <span style="color:#ef4444">● Red</span>    |
| Sports        | <span style="color:#06b6d4">● Cyan</span>   |
| Health        | <span style="color:#ec4899">● Pink</span>   |

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🌐 API Configuration

This app uses [NewsAPI](https://newsapi.org) for fetching news data.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_api_key_here
```

### API Endpoints Used

- `GET /v2/top-headlines` - Latest news by category
- `GET /v2/everything` - Search all articles

**Rate Limits:** Free tier allows 100 requests/day.

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Important:** Add `VITE_NEWS_API_KEY` as an environment variable in your hosting platform.

---

## 🎯 Features in Detail

### Responsive Design

Bootstrap grid system ensures optimal display across devices:

- **Mobile (xs)**: 1 column
- **Tablet (sm)**: 2 columns
- **Desktop (md)**: 3 columns
- **Large Desktop (lg)**: 4 columns

### Dark Mode

Theme preference persists using localStorage and React Switch for smooth toggling.

### Error Recovery

Failed requests show user-friendly error messages with retry buttons. Image load failures automatically display placeholders.

### Performance Optimizations

- TanStack Query for intelligent caching
- Debounced search (500ms)
- Automatic background refetching
- Query deduplication

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is [MIT](LICENSE) licensed.

---

## 👨‍💻 Author

**Yash**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org) - News data provider
- [TanStack Query](https://tanstack.com/query) - Data fetching library
- [React Bootstrap](https://react-bootstrap.github.io/) - UI components
- [FontAwesome](https://fontawesome.com/) - Icons

---

## 📚 Documentation

For detailed documentation on specific components:

- **App.jsx** - Main application logic and state management
- **useNewsQuery.js** - Custom React Query hooks
- **newsServices.js** - API service layer with Axios
- **CardComp.jsx** - News article card component
- **CategoryComp.jsx** - Search and category filtering
- **DarkModeToggle.jsx** - Theme toggle implementation

---

<div align="center">

⭐ **Star this repo if you found it helpful!** ⭐

Made with ❤️ using React + Vite

</div>

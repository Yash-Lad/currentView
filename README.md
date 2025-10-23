# <img src="public/favicon_io/favicon-32x32.png" alt="CurrentView" width="32" height="32"> CurrentView

A modern, responsive news aggregator built with React that delivers real-time news updates from trusted sources worldwide. Features intelligent search, category filtering, and a beautiful dark/light mode interface.

## ✨ Features

- **Real-time News**: Get the latest headlines from multiple categories
- **Smart Search**: Optimized search with intelligent input delay to reduce API calls
- **Category Filtering**: Browse news by General, Technology, Business, Science, Entertainment, Sports, and Health
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: Graceful error states with retry functionality
- **Performance Optimized**: React Query for efficient data caching and management

## 🚀 Tech Stack

- **Frontend**: React 19.1.1 with Vite
- **Styling**: Bootstrap 5.3.8 + Custom CSS
- **State Management**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Icons**: FontAwesome + Lucide React
- **Build Tool**: Vite with SWC
- **Linting**: ESLint

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd currentView
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_NEWS_API_KEY=your_news_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📋 API Setup

This application uses the News API. To get started:

1. Visit [News API](https://newsapi.org/) and create a free account
2. Get your API key from the dashboard
3. Add it to your `.env` file as `VITE_NEWS_API_KEY`

## 🎨 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CardComp.jsx    # News article card component
│   ├── CategoryComp.jsx # Search and category filter
│   ├── DarkModeToggle.jsx # Theme switcher
│   ├── ErrorDisplay.jsx # Error state component
│   ├── HeroComp.jsx    # Landing section
│   ├── NavbarComp.jsx  # Navigation bar
│   └── SpinnerLoading.jsx # Loading indicator
├── hooks/              # Custom React hooks
│   └── useNewsQuery.js # News data fetching hooks
├── services/           # API service layer
│   └── newsServices.js # News API integration
├── utils/              # Utility functions
│   └── categoryTabColor.js # Category color mapping
├── assets/             # Static assets
├── App.jsx            # Main application component
├── App.css            # Global styles and themes
└── main.jsx           # Application entry point
```

## 🔧 Key Features Implementation

### Smart Search

- Intelligent input delay (500ms) to optimize API performance
- Automatic category clearing when searching
- Real-time search results

### Category System

- Color-coded category tabs
- Smooth underline animations
- Responsive tab layout

### Dark Mode

- CSS custom properties for theming
- LocalStorage persistence
- Smooth transitions

### Performance

- React Query for data caching
- Optimized re-renders
- Image error handling with fallbacks

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

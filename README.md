# <img src="public/favicon_io/favicon-32x32.png" alt="CurrentView" width="32" height="32"> CurrentView

A modern, responsive news aggregator built with React that delivers real-time news updates from trusted sources worldwide. Features intelligent search, category filtering, and a beautiful dark/light mode interface.

## ✨ Features

- **Real-time News**: Latest headlines from 9 categories using GNews API
- **Smart Search**: Optimized search with intelligent input delay (500ms)
- **Category Filtering**: General, World, Nation, Technology, Business, Science, Entertainment, Sports, and Health
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Enhanced card design with gradient backgrounds and smooth animations
- **Performance Optimized**: React Query for efficient data caching and management
- **Error Handling**: Graceful error states with user-friendly messages and retry functionality

## 🚀 Tech Stack

- **Frontend**: React with Vite
- **Styling**: Bootstrap + Custom CSS with CSS Variables
- **State Management**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Icons**: FontAwesome + Lucide React
- **UI Components**: React Bootstrap + React Switch
- **Build Tool**: Vite with SWC
- **Deployment**: Vercel with Serverless Functions

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
   VITE_GNEWS_API_KEY=your_news_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This app is optimized for Vercel deployment with serverless functions:

1. **Connect your repository to Vercel**
2. **Set environment variable**: Add `GNEWS_API_KEY` in Vercel dashboard
3. **Deploy**: Vercel auto-detects Vite config and handles the rest

The `vercel.json` file configures the API proxy to handle CORS issues in production.

## 📋 API Setup

This application uses the GNews API with a proxy server to avoid CORS issues:

1. Visit [GNews API](https://gnews.io/) and create a free account
2. Get your API key from the dashboard
3. Add it to your `.env` file as `VITE_GNEWS_API_KEY`
4. For production deployment on Vercel, add the API key as `GNEWS_API_KEY` in your Vercel environment variables

### API Proxy Configuration

The application includes a Vercel serverless function (`api/gnews.js`) that acts as a proxy to the GNews API:

- Handles CORS headers automatically
- Validates API keys server-side
- Provides error handling and logging
- Supports both search and top-headlines endpoints

## 🎨 Project Structure

```
├── api/                # Vercel serverless functions
│   └── gnews.js       # GNews API proxy for CORS handling
├── public/             # Static assets and favicons
│   └── favicon_io/    # Favicon files
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── CardComp.jsx    # News article card component
│   │   ├── CategoryComp.jsx # Search and category filter
│   │   ├── DarkModeToggle.jsx # Theme switcher
│   │   ├── ErrorDisplay.jsx # Error state component
│   │   ├── HeroComp.jsx    # Landing section
│   │   ├── NavbarComp.jsx  # Navigation bar
│   │   └── SpinnerLoading.jsx # Loading indicator
│   ├── hooks/          # Custom React hooks
│   │   └── useNewsQuery.js # News data fetching hooks
│   ├── services/       # API service layer
│   │   └── newsServices.js # GNews API integration
│   ├── utils/          # Utility functions
│   │   └── categoryTabColor.js # Category color mapping
│   ├── assets/         # Static assets
│   │   └── No-Image-Placeholder.jpg # Fallback image
│   ├── App.jsx        # Main application component
│   ├── App.css        # Global styles and themes
│   └── main.jsx       # Application entry point
├── vercel.json        # Vercel deployment configuration
├── vite.config.js     # Vite configuration with proxy
├── eslint.config.js   # ESLint configuration
└── package.json       # Dependencies and scripts
```

## 🔧 Key Features

### Smart Search

- Intelligent input delay (500ms) to optimize API performance
- Automatic category clearing when searching
- Real-time search results with GNews API integration

### Category System

- Color-coded category tabs with 9 distinct categories
- Smooth underline animations with CSS transitions
- Responsive tab layout with mobile optimization

### Dark Mode

- CSS custom properties for comprehensive theming
- LocalStorage persistence for user preferences
- Smooth transitions between light and dark modes

### Performance

- React Query for efficient data caching and management
- Optimized re-renders with proper dependency management
- Image error handling with placeholder fallbacks
- Vercel serverless function proxy for optimal API performance

### API Integration

- **CORS-Free API Access**: Vercel serverless function proxy eliminates CORS issues
- **Secure API Key Handling**: API keys stored server-side, not exposed to client
- **Smart Error Handling**: Comprehensive error handling with user-friendly messages
- **Rate Limit Management**: Automatic handling of API rate limits and timeouts

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

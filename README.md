# <img src="public/favicon_io/favicon-32x32.png" alt="CurrentView" width="32" height="32"> CurrentView

A modern, responsive news aggregator built with React that delivers real-time news updates from trusted sources worldwide. Features intelligent search, category filtering, and a beautiful dark/light mode interface.

## ✨ Features

- **Real-time News**: Get the latest headlines from multiple categories using GNews API
- **Smart Search**: Optimized search with intelligent input delay (500ms) to reduce API calls
- **Category Filtering**: Browse news by 9 categories: General, World, Nation, Technology, Business, Science, Entertainment, Sports, and Health
- **Dark/Light Mode**: Seamless theme switching with persistent preferences and smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices with enhanced touch targets
- **Error Handling**: Graceful error states with retry functionality and user-friendly messages
- **Performance Optimized**: React Query for efficient data caching and management
- **Modern UI**: Enhanced card design with gradient backgrounds, hover effects, and improved typography

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

This application uses the GNews API. To get started:

1. Visit [GNews API](https://gnews.io/) and create a free account
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
│   └── newsServices.js # GNews API integration
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
- Real-time search results with GNews API integration
- Enhanced search experience with better error handling

### Category System

- Color-coded category tabs with 9 distinct categories
- Smooth underline animations with CSS transitions
- Responsive tab layout with mobile optimization
- Dynamic color theming for each category with improved visual hierarchy

### Dark Mode

- CSS custom properties for comprehensive theming
- LocalStorage persistence for user preferences
- Smooth transitions between light and dark modes
- Enhanced card styling with gradient backgrounds and improved contrast

### Performance

- React Query for efficient data caching and management
- Optimized re-renders with proper dependency management
- Image error handling with placeholder fallbacks
- GNews API integration with improved timeout and error handling

### UI Enhancements

- Modern card design with gradient backgrounds and hover effects
- Enhanced typography with improved font weights and spacing
- Better responsive design with optimized mobile layouts
- Improved visual hierarchy with enhanced contrast and readability
- Smooth animations and transitions throughout the interface

## 🆕 Recent Updates

### Enhanced Category System

- **9 distinct categories** with unique color coding: General, World, Nation, Technology, Business, Science, Entertainment, Sports, and Health
- **Improved responsive design** for category tabs with better mobile optimization
- **Enhanced visual hierarchy** with smooth underline animations and better contrast

### UI/UX Improvements

- **Modern card design** with gradient backgrounds and sophisticated hover effects
- **Enhanced typography** with improved font weights and spacing for better readability
- **Optimized mobile experience** with improved touch targets and responsive layouts
- **Smooth animations** and transitions throughout the interface

### Technical Improvements

- **Enhanced error handling** with user-friendly error messages and retry functionality
- **Improved image fallbacks** with placeholder images and robust error handling
- **Better performance** with optimized re-renders and efficient data management
- **Enhanced accessibility** with focus states and keyboard navigation

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

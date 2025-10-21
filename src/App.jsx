import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import CategoryComp from "./components/CategoryComp";
import CardComp from "./components/CardComp";
import { categoryTabColor } from "./utils/categoryTabColor";
import Spinner from "./components/SpinnerLoading";
import ErrorDisplay from "./components/ErrorDisplay";
import { useNewsByCategory, useSearchNews } from "./hooks/useNewsQuery";

//Main App component that manages the news application
function App() {
  const [selectedCategory, setSelectedCategory] = useState("general"); // Tracking the currently selected news category (default: general)
  const [searchQuery, setSearchQuery] = useState(""); // State for the current search query
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // State for the debounced search query to avoid excessive API calls while typing

  // Find the color associated with the selected category
  const selectedCategoryColor =
    categoryTabColor.find((category) => category.name === selectedCategory)
      ?.color || "#3b82f6";

  // Handles category selection changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); // Clear search when switching categories
  };

  // Handles search input changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Refetches the appropriate data based on whether user is searching or browsing categories
  const handleRetry = () => {
    if (isSearching) {
      refetchSearch();
    } else {
      refetchCategory();
    }
  };

  // Debounce effect for search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Custom hook to fetch news articles by category
  const {
    data: categoryNews = [],
    isLoading: categoryLoading,
    error: categoryError,
    refetch: refetchCategory,
  } = useNewsByCategory(selectedCategory, "us", 12);

  //Custom hook to fetch news articles based on search query
  const {
    data: searchResults = [],
    isLoading: searchLoading,
    error: searchError,
    refetch: refetchSearch,
  } = useSearchNews(debouncedSearchQuery, "en", "publishedAt", 12);

  const isSearching = debouncedSearchQuery.trim().length > 0; // Determine if the user is currently searching
  const articlesToDisplay = isSearching ? searchResults : categoryNews; // Display based on search or category mode
  const isLoading = isSearching ? searchLoading : categoryLoading;
  const error = isSearching ? searchError : categoryError;

  // Map articles to CardComp components
  const newsCards = articlesToDisplay.map((article, index) => (
    <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex">
      <CardComp
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        title={article.title}
        description={article.description}
        url={article.url}
        category={article.source}
        newsSource={article.source}
        categoryColor={selectedCategoryColor}
      />
    </Col>
  ));

  return (
    <>
      <NavbarComp />
      <HeroComp />

      {/* Category selection and search component */}
      <CategoryComp
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main content container for news cards */}
      <Container className="card_container">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          // Show error message with retry option if data fetch fails
          <ErrorDisplay
            message={error?.message || "An error occurred"}
            onRetry={handleRetry}
          />
        ) : (
          // Display news cards
          <Row className="g-4 justify-content-center">{newsCards}</Row>
        )}
      </Container>
    </>
  );
}

export default App;

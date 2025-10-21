import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Form } from "react-bootstrap";
import { categoryTabColor } from "../utils/categoryTabColor";

/**
 * CategoryComp - Search bar and category filter tabs component
 * Allows users to search news articles and filter by category
 */
export default function CategoryComp({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="search_category">
      <Form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper ">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <Form.Control
            type="search"
            placeholder="Search news..."
            aria-label="Search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </Form>

      {/* Category filter tabs */}
      <div className="underline-tabs-container">
        {categoryTabColor.map((category) => (
          <button
            key={category.name}
            className={`underline-tab ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category.name)}
            style={{
              "--tab-color": category.color,
            }}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </button>
        ))}
      </div>
    </Container>
  );
}

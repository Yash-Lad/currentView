import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import placeHolder_Image from "../assets/No-Image-Placeholder.jpg";

// Formats the published date into a readable format (e.g., "Jan 15, 2024 | 10:30 AM")
const formatPublishedDate = (publishedDate) => {
  const date = new Date(publishedDate);

  // Format the date part
  const dateFormat = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Format the time part
  const timeFormat = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${dateFormat} | ${timeFormat}`;
};

/**
 * CardComp - Displays a single news article in a card format
 * Shows article image, category badge, publication date, title, description, and link to full article
 */
export default function CardComp({
  urlToImage,
  category,
  publishedAt,
  title,
  description,
  url,
  newsSource,
  categoryColor,
}) {
  const [imgSrc, setImgSrc] = useState(urlToImage || placeHolder_Image); // Manage the image source, defaulting to placeholder if no image provided
  const [hasError, setHasError] = useState(false); // Track if image loading has failed

  // Update image when urlToImage prop changes
  useEffect(() => {
    setImgSrc(urlToImage || placeHolder_Image);
    setHasError(false);
  }, [urlToImage]);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(placeHolder_Image);
    }
  };

  return (
    <Card className="card_style" border="dark">
      {/* Article image with error handling */}
      <Card.Img
        className="card_image"
        variant="top"
        src={imgSrc}
        alt="Card Image"
        onError={handleImageError}
      ></Card.Img>
      <Card.Body>
        {/* Header section with category badge and publication date */}
        <div className="card_header">
          <span>
            <Badge
              className="card_badge"
              style={{ "--badge-color": categoryColor }}
            >
              {category.name}
            </Badge>
          </span>
          <span>{formatPublishedDate(publishedAt)}</span>
        </div>

        {/* Article title and description */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        {/* Link to full article on source website */}
        <div>
          <Card.Link
            className="card_footer"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--badge-color": categoryColor }}
          >
            Read on {newsSource?.name || "Source"}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

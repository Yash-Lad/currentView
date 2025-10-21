import React from "react";
import { Container } from "react-bootstrap";

// Main application heading with description
export default function HeroComp() {
  return (
    <Container className="hero_text">
      <h1>News That Matters, Right Now.</h1>
      <p>
        Get real-time updates from trusted sources worldwide. We deliver the
        essential stories you need, precisely when you need them.
      </p>
    </Container>
  );
}

import React from "react";
import { Navbar, Container } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";

// NavbarComp - Displays the application logo/brand name and dark mode toggle
export default function NavbarComp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container className="nav_container" fluid>
        <Navbar.Brand className="navbar-brand-centered">
          CurrentView
        </Navbar.Brand>

        {/* Dark mode toggle positioned absolutely */}
        <div className="dark-mode-toggle-container">
          <DarkModeToggle />
        </div>
      </Container>
    </Navbar>
  );
}

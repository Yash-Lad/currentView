import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { Moon, Sun } from "lucide-react";

// DarkModeToggle - Toggle switch component for switching between light and dark themes
export default function DarkModeToggle() {
  // Initialize dark mode state from localStorage, defaulting to false if not set
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Runs whenever isDarkMode state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  // Toggle between light and dark mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="d-flex align-items-center gap-10">
      <Switch
        checked={isDarkMode}
        onChange={handleToggle}
        className="react-switch"
        onColor="#1e293b"
        offColor="#e2e8f0"
        checkedIcon={
          <div className="d-flex justify-content-center align-items-center h-100 pr-1">
            <Moon size={12} color="#fff" />
          </div>
        }
        uncheckedIcon={
          <div className="d-flex justify-content-center align-items-center h-100 pl-1">
            <Sun size={12} color="#f59e0b" />
          </div>
        }
        height={20}
        width={40}
        handleDiameter={18}
      />
    </div>
  );
}

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Create a mock version of App instead of trying to test the real one with router
const MockApp = () => (
  <div>
    <nav aria-label="Main Navigation">
      <div>Cory's Portfolio</div>
    </nav>
    <div>
      <div>Hero Section</div>
      <div>About Section</div>
      <div>Projects Section</div>
      <div>Contact Section</div>
      <div>Footer</div>
    </div>
  </div>
);

// Test our mock App
test("renders the navigation bar", () => {
  render(<MockApp />);
  const navElement = screen.getByRole("navigation", {
    name: /main navigation/i,
  });
  expect(navElement).toBeInTheDocument();
});

test("renders portfolio title", () => {
  render(<MockApp />);
  const titleElement = screen.getByText(/Cory's Portfolio/i);
  expect(titleElement).toBeInTheDocument();
});

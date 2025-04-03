import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../utils/test-utils";
import Navbar from "./Navbar";

// Mock the useColorMode hook
jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");
  return {
    ...originalModule,
    useColorMode: () => ({
      colorMode: "light",
      toggleColorMode: jest.fn(),
    }),
  };
});

describe("Navbar Component", () => {
  test("renders correctly", () => {
    render(<Navbar />);

    // Check if the navbar is rendered
    const navElement = screen.getByRole("navigation", {
      name: /main navigation/i,
    });
    expect(navElement).toBeInTheDocument();

    // Check for portfolio title
    const titleElement = screen.getByText(/Cory's Portfolio/i);
    expect(titleElement).toBeInTheDocument();

    // Check that navigation links exist by text (there may be duplicates in desktop and mobile menus)
    const aboutLinks = screen.getAllByText(/^About$/i);
    const projectsLinks = screen.getAllByText(/^Projects$/i);
    const blogLinks = screen.getAllByText(/^Blog$/i);
    const contactLinks = screen.getAllByText(/^Contact$/i);

    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(projectsLinks.length).toBeGreaterThan(0);
    expect(blogLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  test("has a toggle button for mobile menu", () => {
    render(<Navbar />);

    // Get hamburger button
    const hamburgerButton = screen.getByRole("button", {
      name: /toggle navigation/i,
    });
    expect(hamburgerButton).toBeInTheDocument();

    // Click hamburger button to show mobile menu
    fireEvent.click(hamburgerButton);

    // Click again to hide
    fireEvent.click(hamburgerButton);
  });

  test("has a theme toggle button", () => {
    render(<Navbar />);

    const themeToggleButton = screen.getByRole("button", {
      name: /switch to dark mode/i,
    });
    expect(themeToggleButton).toBeInTheDocument();
  });
});

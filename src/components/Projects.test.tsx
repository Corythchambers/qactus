import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/test-utils";
import Projects from "./Projects";

describe("Projects Component", () => {
  test("renders heading and projects section", () => {
    render(<Projects />);

    // Check for main heading
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Projects/i);
  });

  test("renders project cards with correct information", () => {
    render(<Projects />);

    // Check for project titles (h3 headings)
    const projectTitles = screen.getAllByRole("heading", { level: 3 });
    expect(projectTitles.length).toBeGreaterThanOrEqual(4); // At least 4 projects

    // Check for specific project
    const a11yProject = screen.getByText(
      /E-commerce Accessibility Testing Framework/i,
    );
    expect(a11yProject).toBeInTheDocument();

    // Check for CV/Resume Application project
    const cvProject = screen.getByText(/CV\/Resume Application/i);
    expect(cvProject).toBeInTheDocument();

    // Check for tools badges (using getAllByText to handle multiple matches)
    const reactBadges = screen.getAllByText(/^React$/i);
    expect(reactBadges.length).toBeGreaterThan(0);

    const typescriptBadges = screen.getAllByText(/^TypeScript$/i);
    expect(typescriptBadges.length).toBeGreaterThan(0);
  });

  test("renders external links correctly", () => {
    render(<Projects />);

    // Check for repository links
    const repoLinks = screen.getAllByText(/Repository/i);
    expect(repoLinks.length).toBeGreaterThanOrEqual(4);

    // Check for demo links (not all projects have demo links)
    const demoLinks = screen.getAllByText(/Live Demo/i);
    expect(demoLinks.length).toBeGreaterThanOrEqual(2);

    // Check that links have correct attributes
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      // External links should have these attributes
      expect(link).toHaveAttribute("target", "_blank");
      const relAttribute = link.getAttribute("rel");
      expect(relAttribute).toContain("noopener");
    });
  });
});

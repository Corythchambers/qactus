import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/test-utils";
import Contact from "./Contact";

describe("Contact Component", () => {
  test("renders heading and description", () => {
    render(<Contact />);

    // Check heading
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Get In Touch/i);

    // Check description text
    const description = screen.getByText(
      /I'm currently open to new opportunities/i,
    );
    expect(description).toBeInTheDocument();
  });

  test("renders contact buttons with correct links", () => {
    render(<Contact />);

    // Check Email button
    const emailButton = screen.getByRole("link", { name: /Email Me/i });
    expect(emailButton).toBeInTheDocument();
    expect(emailButton).toHaveAttribute("href", "mailto:hello@qactus.io");

    // Check GitHub button
    const githubButton = screen.getByRole("link", { name: /GitHub/i });
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute(
      "href",
      "https://github.com/Corythchambers",
    );
    expect(githubButton).toHaveAttribute("target", "_blank");
    expect(githubButton).toHaveAttribute("rel", "noopener noreferrer");

    // Check Resume button
    const resumeButton = screen.getByRole("link", { name: /Download Resume/i });
    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton).toHaveAttribute("href", "/resume.pdf");
    expect(resumeButton).toHaveAttribute("target", "_blank");
    expect(resumeButton).toHaveAttribute("rel", "noopener noreferrer");
  });
});

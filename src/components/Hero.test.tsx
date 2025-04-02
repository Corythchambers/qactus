import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../utils/test-utils";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders correctly", () => {
    render(<Hero />);

    // Check for main heading
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Hi, I'm Cory/i);

    // Check for subtitle
    const subtitle = screen.getByText(
      /QA Automation \+ Accessibility Engineering/i,
    );
    expect(subtitle).toBeInTheDocument();

    // Check for profile image
    const profileImage = screen.getByAltText(/Cory's profile picture/i);
    expect(profileImage).toBeInTheDocument();
  });
});

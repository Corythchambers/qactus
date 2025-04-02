import theme from "./theme";

describe("Theme Configuration", () => {
  test("has the expected color configuration", () => {
    // Check if brand colors exist
    expect(theme.colors.brand).toBeDefined();
    expect(theme.colors.brand[500]).toBe("#0080ff");

    // Check if we have specific brand shades
    expect(Object.keys(theme.colors.brand).length).toBe(10); // 50-900
  });

  test("has the expected font configuration", () => {
    expect(theme.fonts).toBeDefined();
    expect(theme.fonts.heading).toBe('"Inter", sans-serif');
    expect(theme.fonts.body).toBe('"Inter", sans-serif');
  });

  test("has the expected color mode configuration", () => {
    expect(theme.config).toBeDefined();
    expect(theme.config.initialColorMode).toBe("light");
    expect(theme.config.useSystemColorMode).toBe(false);
  });

  test("has the expected component configurations", () => {
    expect(theme.components).toBeDefined();

    // Button component configuration
    expect(theme.components.Button).toBeDefined();
    expect(theme.components.Button.baseStyle.fontWeight).toBe("medium");
    expect(theme.components.Button.baseStyle.borderRadius).toBe("md");

    // Heading component configuration
    expect(theme.components.Heading).toBeDefined();
    expect(theme.components.Heading.baseStyle.fontWeight).toBe("bold");
  });
});

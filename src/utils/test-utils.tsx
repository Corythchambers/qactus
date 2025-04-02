import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  withRouter?: boolean;
}

const customRender = (
  ui: ReactElement,
  { withRouter = false, ...options }: CustomRenderOptions = {},
) => {
  // Define a basic wrapper that only includes ChakraProvider
  const BasicWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return <ChakraProvider>{children}</ChakraProvider>;
  };

  // Only use router if specifically requested
  if (withRouter) {
    try {
      // Dynamic import for BrowserRouter
      const { BrowserRouter } = require("react-router-dom");

      const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({
        children,
      }) => {
        return (
          <BrowserRouter>
            <ChakraProvider>{children}</ChakraProvider>
          </BrowserRouter>
        );
      };

      return render(ui, { wrapper: RouterWrapper, ...options });
    } catch (error) {
      console.warn(
        "react-router-dom not available, falling back to basic render",
      );
      return render(ui, { wrapper: BasicWrapper, ...options });
    }
  }

  return render(ui, { wrapper: BasicWrapper, ...options });
};

// Re-export everything from testing-library
export * from "@testing-library/react";

// Override render method
export { customRender as render };

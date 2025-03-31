import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Blog routes
import AxePlaywrightBlog from "./pages/blog/axe-playwright-framework";
import A11yPitfallsBlog from "./pages/blog/a11y-pitfalls";
import DebuggingFlakyTestsBlog from "./pages/blog/debugging-flaky-tests";

// Main homepage component that contains all sections
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
  </>
);

function App() {
  // The height of our navbar is 60px, so we add it as top padding to the main content
  return (
    <Box minH="100vh">
      <Navbar />
      <Box pt="60px">
        {" "}
        {/* Add padding top equal to navbar height */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/blog/axe-playwright-framework"
            element={<AxePlaywrightBlog />}
          />
          <Route path="/blog/a11y-pitfalls" element={<A11yPitfallsBlog />} />
          <Route
            path="/blog/debugging-flaky-tests"
            element={<DebuggingFlakyTestsBlog />}
          />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;

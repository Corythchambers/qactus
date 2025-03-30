import React from "react";
import { Box } from "@chakra-ui/react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // The height of our navbar is 60px, so we add it as top padding to the main content
  return (
    <Box minH="100vh">
      <Navbar />
      <Box pt="60px">
        {" "}
        {/* Add padding top equal to navbar height */}
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;

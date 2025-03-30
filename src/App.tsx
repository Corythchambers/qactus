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
  return (
    <Box minH="100vh">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;

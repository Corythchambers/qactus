import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  OrderedList,
  Code,
  VStack,
  Flex,
  Tag,
  useColorModeValue,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const A11yPitfallsBlog = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const tagBg = useColorModeValue("cactus.50", "cactus.900");
  const tagColor = useColorModeValue("cactus.700", "cactus.200");
  const codeBg = useColorModeValue("gray.50", "gray.700");
  const warningBg = useColorModeValue("red.50", "red.900");
  const warningBorder = useColorModeValue("red.200", "red.700");
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle back to blogs button click
  const handleBackToBlogsClick = () => {
    navigate("/");
    // Use a short timeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Box as="section" py={12} bg={bgColor} color={textColor}>
      <Container maxW="container.md">
        <Button
          onClick={handleBackToBlogsClick}
          leftIcon={<ArrowBackIcon />}
          mb={8}
          size="sm"
          colorScheme="cactus"
          variant="outline"
        >
          Back to blogs
        </Button>

        <Heading as="h1" size="xl" mb={4} color={headingColor}>
          5 A11y Pitfalls to Catch Before You Launch
        </Heading>

        <Flex wrap="wrap" mb={4} gap={2}>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            Accessibility
          </Tag>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            WCAG
          </Tag>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            Testing
          </Tag>
        </Flex>

        <Text fontStyle="italic" mb={8} color="gray.500">
          Published on February 2, 2023 • 6 min read
        </Text>

        <VStack spacing={6} align="stretch">
          <Text>
            Building an accessible website is not just about following a
            checklist; it's about understanding the common pitfalls that can
            make your site unusable for people with disabilities. In this
            article, I'll cover five critical accessibility issues that are
            often overlooked but should be addressed before launching your
            website.
          </Text>

          <Image
            src="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Person using a screen reader and Braille display"
            borderRadius="md"
            mb={4}
          />

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            1. Missing or Inadequate Keyboard Navigation
          </Heading>

          <Text>
            One of the most common accessibility issues is poor keyboard
            navigation. Many users can't use a mouse and rely entirely on a
            keyboard or alternative input devices that emulate keyboard input.
          </Text>

          <Box
            p={4}
            bg={warningBg}
            borderRadius="md"
            borderWidth="1px"
            borderColor={warningBorder}
            my={4}
          >
            <Text fontWeight="bold" mb={2}>
              Common Problems:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>
                Missing focus indicators or focus states that are difficult to
                see
              </ListItem>
              <ListItem>
                Interactive elements that can't be activated with the keyboard
              </ListItem>
              <ListItem>
                Focus traps that prevent users from navigating through the page
              </ListItem>
              <ListItem>
                Skip navigation links that don't work or are hidden from all
                users
              </ListItem>
            </UnorderedList>
          </Box>

          <Text>
            To test this, put your mouse aside and navigate your entire site
            using only Tab, Shift+Tab, Enter, and arrow keys. You should be able
            to access all interactive elements, and there should always be a
            visible indicator of which element has focus.
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            2. Poor Color Contrast
          </Heading>

          <Text>
            Insufficient color contrast between text and its background can make
            content difficult or impossible to read for many users, including
            those with low vision or color blindness.
          </Text>

          <Text mt={4}>
            WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text
            and 3:1 for large text. For user interface components and graphical
            objects, the contrast ratio should be at least 3:1 against adjacent
            colors.
          </Text>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`/* Example of fixing low contrast text */
/* Bad */
.low-contrast {
  color: #999; /* Gray text on white background - insufficient contrast */
  background-color: #fff;
}

/* Good */
.good-contrast {
  color: #595959; /* Darker gray on white - passes WCAG AA */
  background-color: #fff;
}`}</Code>
          </Box>

          <Text>
            Tools like the{" "}
            <Link
              href="https://webaim.org/resources/contrastchecker/"
              color="cactus.500"
              isExternal
            >
              WebAIM Contrast Checker
            </Link>{" "}
            or browser extensions like{" "}
            <Link
              href="https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"
              color="cactus.500"
              isExternal
            >
              axe DevTools
            </Link>{" "}
            can help you identify contrast issues.
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            3. Missing or Improper Form Labels
          </Heading>

          <Text>
            Forms without properly associated labels are a significant barrier
            for screen reader users. Each input field should have an explicit
            label that's programmatically associated with it.
          </Text>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`<!-- Bad Example -->
<div>
  Email: <input type="email" />
</div>

<!-- Good Example -->
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" />
</div>

<!-- Also Good (Using aria-label when visual label isn't possible) -->
<input type="email" aria-label="Email Address" />`}</Code>
          </Box>

          <Text>
            Placeholder text is not a substitute for labels, as it disappears
            when users start typing, and some assistive technologies may not
            announce it properly.
          </Text>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            4. Non-Descriptive Links and Buttons
          </Heading>

          <Text>
            Links and buttons with vague text like "click here," "read more," or
            "learn more" don't provide enough context for screen reader users
            who may navigate by scanning a list of links on the page.
          </Text>

          <Box
            p={4}
            bg={warningBg}
            borderRadius="md"
            borderWidth="1px"
            borderColor={warningBorder}
            my={4}
          >
            <Text fontWeight="bold" mb={2}>
              Examples of Poor Link Text:
            </Text>
            <OrderedList spacing={2} pl={4}>
              <ListItem>"Click here to read our privacy policy"</ListItem>
              <ListItem>"More" (at the end of multiple articles)</ListItem>
              <ListItem>"Read this" (pointing to different documents)</ListItem>
            </OrderedList>
          </Box>

          <Text>
            Instead, use descriptive text that makes sense out of context:
          </Text>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`<!-- Bad -->
<a href="/privacy">Click here</a> to read our privacy policy.

<!-- Good -->
Read our <a href="/privacy">privacy policy</a>.

<!-- Even Better -->
<a href="/privacy">Read our privacy policy</a>.`}</Code>
          </Box>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            5. Missing Alternative Text for Images
          </Heading>

          <Text>
            Images without alternative text are inaccessible to screen reader
            users and also fail to display any information if the image cannot
            be loaded.
          </Text>

          <Text mt={4}>
            Every meaningful image should have an alt attribute that describes
            the image's content and function. Decorative images should have an
            empty alt attribute (alt="") so screen readers can skip them.
          </Text>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`<!-- Meaningful image with descriptive alt text -->
<img src="chart-q4-sales.png" alt="Bar chart showing Q4 sales increased by 27%" />

<!-- Logo that links to homepage -->
<a href="/">
  <img src="logo.png" alt="Company Name Homepage" />
</a>

<!-- Decorative image that should be ignored by screen readers -->
<img src="decorative-divider.png" alt="" />`}</Code>
          </Box>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Conclusion
          </Heading>

          <Text>
            Addressing these common accessibility pitfalls before launching your
            website will significantly improve the experience for users with
            disabilities. Remember that accessibility is not a one-time task but
            an ongoing commitment to inclusive design.
          </Text>

          <Text mt={2}>
            For a more comprehensive guide to web accessibility, check out the{" "}
            <Link
              href="https://www.w3.org/WAI/WCAG21/quickref/"
              color="cactus.500"
              isExternal
            >
              WCAG 2.1 Quick Reference
            </Link>{" "}
            or use automated testing tools like{" "}
            <Link
              href="https://www.deque.com/axe/"
              color="cactus.500"
              isExternal
            >
              axe
            </Link>{" "}
            to identify potential issues.
          </Text>

          <Divider my={6} />

          <Box>
            <Text fontWeight="bold" mb={2}>
              Share this article:
            </Text>
            <Flex gap={2}>
              <Link href="#" color="cactus.500">
                Twitter
              </Link>
              <Link href="#" color="cactus.500">
                LinkedIn
              </Link>
              <Link href="#" color="cactus.500">
                Email
              </Link>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default A11yPitfallsBlog;

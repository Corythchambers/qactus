import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Code,
  VStack,
  Flex,
  Tag,
  useColorModeValue,
  Button,
  Image,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const DebuggingFlakyTestsBlog = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const tagBg = useColorModeValue("cactus.50", "cactus.900");
  const tagColor = useColorModeValue("cactus.700", "cactus.200");
  const codeBg = useColorModeValue("gray.50", "gray.700");
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
          Debugging Flaky Tests in CI/CD Pipelines
        </Heading>

        <Flex wrap="wrap" mb={4} gap={2}>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            CI/CD
          </Tag>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            Testing
          </Tag>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            Debugging
          </Tag>
          <Tag size="md" bg={tagBg} color={tagColor} borderRadius="full">
            GitHubActions
          </Tag>
        </Flex>

        <Text fontStyle="italic" mb={8} color="gray.500">
          Published on December 10, 2024 • 10 min read
        </Text>

        <VStack spacing={6} align="stretch">
          <Text>
            Flaky tests—tests that sometimes pass and sometimes fail without any
            changes to the code—are the bane of every developer's existence.
            They undermine confidence in your test suite, waste valuable
            developer time, and can block releases if they occur in critical
            CI/CD pipelines. In this article, I'll share strategies for
            identifying, isolating, and fixing flaky tests that only seem to
            fail in CI/CD environments.
          </Text>

          <Image
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Computer code on screen with debugging tools"
            borderRadius="md"
            mb={4}
          />

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            The Challenge of Flaky Tests
          </Heading>

          <Text>
            One of the most frustrating aspects of flaky tests is that they
            often can't be reproduced locally. You run the test 10 times on your
            machine, and it passes every time. But in your CI/CD pipeline, it
            fails randomly, causing your builds to fail and blocking your
            releases.
          </Text>

          <Text mt={4}>
            This discrepancy usually stems from differences between your local
            environment and the CI environment, which can include:
          </Text>

          <UnorderedList spacing={2} pl={4} mt={2}>
            <ListItem>Different operating systems or versions</ListItem>
            <ListItem>Resource constraints (CPU, memory, disk I/O)</ListItem>
            <ListItem>Network conditions and timeouts</ListItem>
            <ListItem>Concurrency and race conditions</ListItem>
            <ListItem>Dependencies on external services</ListItem>
            <ListItem>Time zone and locale differences</ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Step 1: Gather Evidence
          </Heading>

          <Text>
            The first step in debugging flaky tests is to gather as much
            information as possible about the failures. In GitHub Actions, you
            can enhance your workflow file to provide more context:
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
            <Code>{`name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests with increased verbosity
        run: npm test -- --verbose
        env:
          CI: true
          # Add environment variables to help debugging
          DEBUG: true
          LOG_LEVEL: debug
          
      - name: Archive test artifacts
        if: \${{ failure() }}
        uses: actions/upload-artifact@v3
        with:
          name: test-logs
          path: |
            logs/
            screenshots/
            test-results/`}</Code>
          </Box>

          <Alert status="info" borderRadius="md" mb={4}>
            <AlertIcon />
            Always ensure your tests generate detailed logs, screenshots, or
            video recordings when they fail in CI. These artifacts are
            invaluable for debugging.
          </Alert>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Step 2: Reproduce Locally
          </Heading>

          <Text>
            Once you've identified a flaky test, try to reproduce it in an
            environment that mimics your CI/CD pipeline as closely as possible:
          </Text>

          <UnorderedList spacing={2} pl={4} mt={2}>
            <ListItem>
              Use Docker to create an environment similar to your CI runner
            </ListItem>
            <ListItem>
              Throttle CPU and memory resources to match CI limitations
            </ListItem>
            <ListItem>
              Simulate network conditions using tools like <Code>throttle</Code>{" "}
              or <Code>tc</Code>
            </ListItem>
            <ListItem>
              Run the test in a loop to increase chances of failure:
            </ListItem>
          </UnorderedList>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`#!/bin/bash
# A script to run a specific test multiple times to identify flakiness

TEST_PATH="path/to/flaky.test.js"
ITERATIONS=100
FAILURES=0

for i in $(seq 1 $ITERATIONS); do
  echo "Running iteration $i/$ITERATIONS"
  if ! npm test -- $TEST_PATH; then
    FAILURES=$((FAILURES+1))
    echo "Test failed on iteration $i"
  fi
done

echo "Test completed with $FAILURES failures out of $ITERATIONS runs"
echo "Flakiness rate: $(($FAILURES * 100 / $ITERATIONS))%"`}</Code>
          </Box>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Step 3: Identify Root Causes
          </Heading>

          <Text>Common causes of flakiness in tests include:</Text>

          <UnorderedList spacing={4} pl={4} mt={2}>
            <ListItem>
              <Text fontWeight="bold">Race conditions:</Text>
              <Text>
                Tests that depend on specific timing or ordering of asynchronous
                operations.
              </Text>
              <Box
                as="pre"
                p={4}
                bg={codeBg}
                borderRadius="md"
                overflowX="auto"
                fontSize="sm"
                my={2}
              >
                <Code>{`// Problematic test with race condition
test('user profile loads correctly', async () => {
  await page.click('#profile-button');
  // This might fail if the navigation hasn't completed
  const userName = await page.textContent('.user-name');
  expect(userName).toBe('John Doe');
});

// Fixed version with proper waiting
test('user profile loads correctly', async () => {
  await page.click('#profile-button');
  // Wait for navigation or element to be visible
  await page.waitForSelector('.user-name', { state: 'visible' });
  const userName = await page.textContent('.user-name');
  expect(userName).toBe('John Doe');
});`}</Code>
              </Box>
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">Time dependencies:</Text>
              <Text>
                Tests that rely on specific dates, times, or timeouts.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">Resource limitations:</Text>
              <Text>
                Tests that need more CPU, memory, or disk I/O than available in
                CI environments.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">Shared state or environment:</Text>
              <Text>
                Tests that modify global state without proper cleanup, affecting
                other tests.
              </Text>
            </ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Step 4: Fix the Flakiness
          </Heading>

          <Text>
            Once you've identified the cause, here are strategies to fix flaky
            tests:
          </Text>

          <UnorderedList spacing={2} pl={4} mt={2}>
            <ListItem>
              <Text fontWeight="bold">For race conditions:</Text> Add explicit
              waits, use proper async/await patterns, and ensure your test waits
              for the correct conditions before proceeding.
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">For time dependencies:</Text> Mock the
              system clock using libraries like{" "}
              <Code>jest.useFakeTimers()</Code> or{" "}
              <Code>sinon.useFakeTimers()</Code>.
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">For resource limitations:</Text> Optimize
              the test, mock heavy operations, or increase resources in your CI
              environment if possible.
            </ListItem>

            <ListItem>
              <Text fontWeight="bold">For shared state:</Text> Ensure proper
              setup and teardown between tests, isolate test environments, or
              use database transactions that rollback after each test.
            </ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Step 5: Prevent Future Flakiness
          </Heading>

          <Text>
            To prevent flaky tests from impacting your CI/CD pipeline in the
            future:
          </Text>

          <UnorderedList spacing={2} pl={4} mt={2}>
            <ListItem>
              Implement a retry mechanism for tests in CI (but not locally to
              avoid masking issues):
            </ListItem>
          </UnorderedList>

          <Box
            as="pre"
            p={4}
            bg={codeBg}
            borderRadius="md"
            overflowX="auto"
            fontSize="sm"
            my={4}
          >
            <Code>{`// Jest configuration with retries in CI only
// jest.config.js
module.exports = {
  // Other configurations...
  retryTimes: process.env.CI ? 3 : 0,
  // Only retry on CI, not locally
};`}</Code>
          </Box>

          <UnorderedList spacing={2} pl={4} mt={2}>
            <ListItem>
              Implement a quarantine mechanism for known flaky tests
            </ListItem>
            <ListItem>
              Set up monitoring to track test reliability over time
            </ListItem>
            <ListItem>
              Create a cultural expectation that test flakiness should be
              addressed as a priority
            </ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt={6} mb={4} color={headingColor}>
            Conclusion
          </Heading>

          <Text>
            Flaky tests in CI/CD pipelines can significantly slow down
            development and erode trust in your testing process. By following a
            systematic approach to identifying, reproducing, and fixing these
            issues, you can build a more reliable test suite that provides the
            confidence your team needs to deliver quality software.
          </Text>

          <Text mt={2}>
            Remember that eliminating flakiness completely is often impossible,
            but managing it effectively ensures that it doesn't hamper your
            development process. Invest the time to fix flaky tests as they
            arise, and you'll save countless hours of frustration down the road.
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

export default DebuggingFlakyTestsBlog;

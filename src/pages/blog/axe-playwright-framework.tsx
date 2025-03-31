import React from "react";
import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  Code,
  Box,
  Image,
} from "@chakra-ui/react";
import BlogPostLayout from "../../components/BlogPostLayout";
import { blogPosts } from "../../data/blogPosts";
import { useColorModeValue } from "@chakra-ui/react";

const AxePlaywrightBlog = () => {
  // Find this blog post's data
  const blogData = blogPosts.find(
    (post) => post.id === "axe-playwright-framework"
  );
  const codeBg = useColorModeValue("gray.50", "gray.700");

  if (!blogData) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPostLayout
      title={blogData.title}
      date={blogData.date}
      readTime={blogData.readTime}
      tags={blogData.tags}
    >
      <Text>
        Accessibility testing is crucial for creating inclusive web
        applications, but it can be challenging to integrate into your
        development workflow. In this article, I'll share how I built an
        automated accessibility testing framework using Playwright and Axe-core.
      </Text>

      <Image
        src={blogData.imageUrl}
        alt={blogData.imageAlt}
        borderRadius="md"
        mb={4}
      />

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Why Playwright and Axe-core?
      </Text>

      <Text>
        Playwright is Microsoft's answer to browser automation, offering
        cross-browser support with a unified API. Axe-core, developed by Deque
        Systems, is the industry-standard JavaScript library for automated
        accessibility testing. Combining these tools creates a powerful
        framework for detecting accessibility issues early.
      </Text>

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Setting Up the Framework
      </Text>

      <Text>First, we need to install the necessary dependencies:</Text>

      <Box
        as="pre"
        p={4}
        bg={codeBg}
        borderRadius="md"
        overflowX="auto"
        fontSize="sm"
        my={4}
      >
        <Code>npm install playwright @axe-core/playwright</Code>
      </Box>

      <Text>
        Next, we create a helper function to run Axe-core against any page
        loaded in Playwright:
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
        <Code>{`// a11yHelper.ts
import { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export async function runA11yScan(page: Page, name: string) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  
  return {
    violations: results.violations,
    passes: results.passes,
    name,
    url: page.url()
  };
}`}</Code>
      </Box>

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Integrating into Test Suites
      </Text>

      <Text>We can now integrate this into our Playwright test suites:</Text>

      <Box
        as="pre"
        p={4}
        bg={codeBg}
        borderRadius="md"
        overflowX="auto"
        fontSize="sm"
        my={4}
      >
        <Code>{`// example.spec.ts
import { test, expect } from '@playwright/test';
import { runA11yScan } from './a11yHelper';

test('Homepage should have no accessibility violations', async ({ page }) => {
  await page.goto('https://example.com');
  
  const a11yResults = await runA11yScan(page, 'Homepage');
  
  // Fail the test if any violations are found
  expect(a11yResults.violations.length).toBe(0);
});`}</Code>
      </Box>

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Generating Useful Reports
      </Text>

      <Text>
        To make the test results more actionable, I created a custom reporter
        that:
      </Text>

      <UnorderedList spacing={2} pl={4} mt={2}>
        <ListItem>
          Generates HTML reports with screenshots of violations
        </ListItem>
        <ListItem>Groups violations by type and severity</ListItem>
        <ListItem>Provides links to accessibility guidelines</ListItem>
        <ListItem>Tracks improvements over time</ListItem>
      </UnorderedList>

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Best Practices and Lessons Learned
      </Text>

      <UnorderedList spacing={4} pl={4} mt={2}>
        <ListItem>
          <Text fontWeight="bold">Start early in development:</Text>
          <Text>
            Fixing accessibility issues is much easier before components are
            widely used.
          </Text>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Combine automated and manual testing:</Text>
          <Text>
            Automated tests catch about 30-40% of issues. Manual testing with
            screen readers and keyboard navigation is still essential.
          </Text>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Customize rules when necessary:</Text>
          <Text>
            Sometimes you need to disable specific rules or customize thresholds
            based on your application's specific requirements.
          </Text>
        </ListItem>
      </UnorderedList>

      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Conclusion
      </Text>

      <Text>
        Integrating Axe-core with Playwright has significantly improved our
        team's ability to catch accessibility issues early. By making
        accessibility testing part of our CI/CD pipeline, we've seen a dramatic
        reduction in accessibility-related bugs in production.
      </Text>

      <Text mt={2}>
        If you're interested in learning more about accessible web development,
        I highly recommend checking out the{" "}
        <Link href="https://www.w3.org/WAI/" color="cactus.500" isExternal>
          W3C Web Accessibility Initiative
        </Link>{" "}
        and{" "}
        <Link href="https://www.deque.com/axe/" color="cactus.500" isExternal>
          Deque's Axe
        </Link>{" "}
        resources.
      </Text>
    </BlogPostLayout>
  );
};

export default AxePlaywrightBlog;

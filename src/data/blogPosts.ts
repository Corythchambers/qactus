import { BlogTag } from "../components/BlogPostLayout";

// Interface for blog post metadata
export interface BlogPostMeta {
  id: string; // unique identifier used in URLs
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: BlogTag[];
  imageUrl: string;
  imageAlt: string;
}

// Blog post data
export const blogPosts: BlogPostMeta[] = [
  {
    id: "axe-playwright-framework",
    title: "How I Built an Axe-core Automation Framework in Playwright",
    description:
      "A deep dive into creating an accessibility testing framework using Playwright and Axe-core, with code examples and best practices.",
    date: "March 15, 2023",
    readTime: "8 min",
    tags: [
      { label: "Accessibility" },
      { label: "Playwright" },
      { label: "Automation" },
      { label: "Axe-core" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Person using a laptop with code on screen, focused on accessibility testing",
  },
  {
    id: "a11y-pitfalls",
    title: "5 A11y Pitfalls to Catch Before You Launch",
    description:
      "Common accessibility issues that are often overlooked and how to detect them early in the development process.",
    date: "February 2, 2023",
    readTime: "6 min",
    tags: [{ label: "Accessibility" }, { label: "WCAG" }, { label: "Testing" }],
    imageUrl:
      "https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person using a screen reader and Braille display",
  },
  {
    id: "debugging-flaky-tests",
    title: "Debugging Flaky Tests in CI/CD Pipelines",
    description:
      "Strategies for identifying, isolating, and fixing flaky tests that only fail in CI/CD environments.",
    date: "December 10, 2022",
    readTime: "10 min",
    tags: [
      { label: "CI/CD" },
      { label: "Testing" },
      { label: "Debugging" },
      { label: "GitHubActions" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Computer code on screen with debugging tools",
  },
];

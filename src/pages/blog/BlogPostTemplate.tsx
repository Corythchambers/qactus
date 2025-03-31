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

/**
 * TEMPLATE FOR NEW BLOG POSTS
 *
 * To create a new blog post:
 * 1. Copy this file and rename it to match your blog post ID
 * 2. Add your blog post metadata to the blogPosts array in src/data/blogPosts.ts
 * 3. Update the ID in the find function below to match your blog post ID
 * 4. Replace the content between the <BlogPostLayout> tags with your own content
 * 5. Add your new blog post to the routes in App.tsx
 */

const BlogPostTemplate = () => {
  // Replace "your-blog-post-id" with your actual blog post ID
  const blogData = blogPosts.find((post) => post.id === "your-blog-post-id");
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
      {/* Introduction */}
      <Text>
        Your introduction paragraph goes here. This should give a brief overview
        of what the blog post is about and why it matters.
      </Text>

      {/* Featured Image */}
      <Image
        src={blogData.imageUrl}
        alt={blogData.imageAlt}
        borderRadius="md"
        mb={4}
      />

      {/* Section 1 */}
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        First Section Heading
      </Text>

      <Text>
        Content for your first section. You can use paragraphs, lists, code
        blocks, and other elements as needed.
      </Text>

      {/* Code Block Example */}
      <Box
        as="pre"
        p={4}
        bg={codeBg}
        borderRadius="md"
        overflowX="auto"
        fontSize="sm"
        my={4}
      >
        <Code>{`// Example code block
function helloWorld() {
  console.log("Hello, world!");
}

helloWorld();`}</Code>
      </Box>

      {/* Section 2 */}
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="bold"
        mt={6}
        mb={4}
        color="cactus.700"
      >
        Second Section Heading
      </Text>

      <Text>Content for your second section.</Text>

      {/* List Example */}
      <UnorderedList spacing={2} pl={4} mt={2}>
        <ListItem>First item in your list</ListItem>
        <ListItem>Second item in your list</ListItem>
        <ListItem>Third item in your list</ListItem>
      </UnorderedList>

      {/* Conclusion */}
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
        Your conclusion paragraph goes here. This should summarize the key
        points and possibly include a call to action or next steps.
      </Text>

      {/* External Links */}
      <Text mt={2}>
        For more information, check out these resources:{" "}
        <Link href="https://example.com" color="cactus.500" isExternal>
          Example Link
        </Link>{" "}
        and{" "}
        <Link href="https://example.com" color="cactus.500" isExternal>
          Another Example Link
        </Link>
        .
      </Text>
    </BlogPostLayout>
  );
};

export default BlogPostTemplate;

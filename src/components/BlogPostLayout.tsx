import React, { useEffect, ReactNode } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

// TypeScript interface for blog post tags
export interface BlogTag {
  label: string;
}

// TypeScript interface for BlogPostLayout props
export interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  tags: BlogTag[];
  children: ReactNode;
}

/**
 * A reusable layout component for blog posts.
 * This component handles the common structure, styling, and functionality shared across all blog posts.
 */
const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  date,
  readTime,
  tags,
  children,
}) => {
  // Theme colors
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const tagBg = useColorModeValue("cactus.50", "cactus.900");
  const tagColor = useColorModeValue("cactus.700", "cactus.200");

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
          {title}
        </Heading>

        <Flex wrap="wrap" mb={4} gap={2}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              size="md"
              bg={tagBg}
              color={tagColor}
              borderRadius="full"
            >
              {tag.label}
            </Tag>
          ))}
        </Flex>

        <Text fontStyle="italic" mb={8} color="gray.500">
          Published on {date} • {readTime} read
        </Text>

        <VStack spacing={6} align="stretch">
          {children}

          <Divider my={6} />

          {/* Share section at the bottom of every blog post */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Share this article:
            </Text>
            <Flex gap={2}>
              <Button
                as="a"
                href="#"
                size="sm"
                colorScheme="cactus"
                variant="ghost"
              >
                Twitter
              </Button>
              <Button
                as="a"
                href="#"
                size="sm"
                colorScheme="cactus"
                variant="ghost"
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href="#"
                size="sm"
                colorScheme="cactus"
                variant="ghost"
              >
                Email
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default BlogPostLayout;

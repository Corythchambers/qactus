import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Link,
  Flex,
  Tag,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { GiPlantRoots } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogPost: React.FC<{
  title: string;
  description: string;
  date: string;
  tags: { label: string }[];
  url: string;
}> = ({ title, description, date, tags, url }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorderColor = useColorModeValue("sand.200", "gray.600");
  const tagBg = useColorModeValue("cactus.50", "cactus.900");
  const tagColor = useColorModeValue("cactus.700", "cactus.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const dateColor = useColorModeValue("sand.600", "sand.300");

  return (
    <Box
      borderWidth="2px"
      borderRadius="2xl"
      overflow="hidden"
      bg={cardBg}
      borderColor={cardBorderColor}
      shadow="md"
      p={6}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
        borderColor: "cactus.400",
      }}
      position="relative"
    >
      <Box
        position="absolute"
        top="-12px"
        right="-8px"
        opacity={0.05}
        zIndex={0}
      >
        <Icon as={BiHappy} w={12} h={12} color="cactus.500" />
      </Box>

      <Box position="relative" zIndex={1}>
        <Text fontSize="sm" color={dateColor} mb={2} fontStyle="italic">
          {date}
        </Text>

        <Flex align="center" mb={3}>
          <Icon as={BiHappy} mr={2} color="cactus.500" w={4} h={4} />
          <Heading as="h3" size="md" color={headingColor}>
            {title}
          </Heading>
        </Flex>

        <Text mb={4}>{description}</Text>

        <Flex wrap="wrap" mb={4} gap={2}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              size="sm"
              bg={tagBg}
              color={tagColor}
              borderRadius="full"
            >
              {tag.label}
            </Tag>
          ))}
        </Flex>

        <Link
          as={RouterLink}
          to={url}
          color="cactus.500"
          fontWeight="medium"
          display="flex"
          alignItems="center"
          _hover={{ color: "cactus.600" }}
        >
          Read Article <ArrowForwardIcon ml={2} />
        </Link>
      </Box>
    </Box>
  );
};

const Blog = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");

  return (
    <Box
      as="section"
      py={16}
      bg={bgColor}
      color={textColor}
      id="blog"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box position="absolute" bottom="5%" left="2%" opacity={0.05} zIndex={0}>
        <Icon as={GiPlantRoots} w={32} h={32} color="cactus.500" />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex align="center" mb={8}>
          <Icon as={BiHappy} mr={3} w={6} h={6} color="cactus.500" />
          <Heading as="h2" size="xl" color={headingColor}>
            Blog & Articles
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              url={`/blog/${post.id}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blog;

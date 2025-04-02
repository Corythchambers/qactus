import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Link,
  Badge,
  Image,
  Flex,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { GiPlantRoots } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";

interface ProjectProps {
  title: string;
  description: string;
  role: string;
  tools: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  role,
  tools,
  repoUrl,
  demoUrl,
  imageUrl,
}) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("sand.200", "gray.600");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");

  return (
    <Box
      borderWidth="2px"
      borderRadius="2xl"
      overflow="hidden"
      bg={cardBg}
      borderColor={borderColor}
      shadow="md"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
        borderColor: "cactus.400",
      }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          height="200px"
          width="100%"
          objectFit="cover"
        />
      )}

      <Box p={6}>
        <Flex align="center" mb={2}>
          <Icon as={BiHappy} mr={2} color="cactus.500" aria-hidden="true" />
          <Heading as="h3" size="md" color={headingColor}>
            {title}
          </Heading>
        </Flex>

        <Text mb={4}>{description}</Text>

        <Text fontWeight="bold" mb={2} color="cactus.600">
          My Role:
        </Text>
        <Text mb={4}>{role}</Text>

        <Text fontWeight="bold" mb={2} color="cactus.600">
          Tools & Technologies:
        </Text>
        <Flex wrap="wrap" mb={4} gap={2}>
          {tools.map((tool, index) => (
            <Badge
              key={index}
              colorScheme="cactus"
              px={2}
              py={1}
              borderRadius="full"
            >
              {tool}
            </Badge>
          ))}
        </Flex>

        <Stack direction="row" spacing={4} mt={4}>
          {repoUrl && (
            <Link
              href={repoUrl}
              isExternal
              color="cactus.500"
              _hover={{ color: "cactus.600" }}
              display="flex"
              alignItems="center"
              aria-label={`${title} repository link`}
            >
              Repository <ExternalLinkIcon mx="2px" aria-hidden="true" />
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              isExternal
              color="sun.600"
              _hover={{ color: "sun.700" }}
              display="flex"
              alignItems="center"
              aria-label={`${title} live demo link`}
            >
              Live Demo <ExternalLinkIcon mx="2px" aria-hidden="true" />
            </Link>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const Projects = () => {
  const bgColor = useColorModeValue("sand.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");

  const projects: ProjectProps[] = [
    {
      title: "E-commerce Accessibility Testing Framework",
      description:
        "A comprehensive testing framework that automates accessibility checks for an e-commerce platform, ensuring WCAG 2.1 compliance.",
      role: "Designed and implemented an end-to-end accessibility testing framework using Playwright and Axe-core to validate WCAG 2.1 compliance.",
      tools: [
        "Playwright",
        "TypeScript",
        "Axe-core",
        "GitHub Actions",
        "WCAG 2.1",
      ],
      repoUrl: "https://github.com/Corythchambers/a11y-automation",
      demoUrl: "https://example.com/a11y-report",
    },
    {
      title: "CV/Resume Application",
      description:
        "A modern, responsive web application for creating and showcasing professional resumes and portfolios with customizable sections and themes.",
      role: "Developed the full application from design to deployment, implementing responsive UI components and data management.",
      tools: [
        "React",
        "TypeScript",
        "Chakra UI",
        "React Router",
        "GitHub Pages",
      ],
      repoUrl: "https://github.com/Corythchambers/qactus",
    },
    {
      title: "API Testing Microservice",
      description:
        "A microservice for continuous API testing that integrates with CI/CD pipelines to provide real-time validation of API endpoints.",
      role: "Lead developer for testing microservice that monitors API performance, reliability, and contract compliance.",
      tools: [
        "Node.js",
        "Jest",
        "Supertest",
        "Docker",
        "Kubernetes",
        "Swagger",
      ],
      repoUrl: "https://github.com/Corythchambers/api-integration-testing",
    },
    {
      title: "Visual Regression Testing Pipeline",
      description:
        "An automated visual regression testing pipeline that captures and compares screenshots across different browser dimensions.",
      role: "Created a visual testing pipeline that integrates with CI/CD to catch UI regressions before deployment.",
      tools: ["Cypress", "Percy", "JavaScript", "Jenkins", "AWS Lambda"],
      repoUrl: "https://github.com/username/visual-regression-pipeline",
      demoUrl: "https://example.com/visual-tests-dashboard",
    },
  ];

  return (
    <Box
      as="section"
      py={16}
      bg={bgColor}
      color={textColor}
      id="projects"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box position="absolute" top="10%" right="2%" opacity={0.05} zIndex={0}>
        <Icon
          as={GiPlantRoots}
          w={28}
          h={28}
          color="cactus.500"
          aria-hidden="true"
        />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex align="center" mb={8}>
          <Icon
            as={BiHappy}
            mr={3}
            w={6}
            h={6}
            color="cactus.500"
            aria-hidden="true"
          />
          <Heading as="h2" size="xl" color={headingColor}>
            Projects
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;

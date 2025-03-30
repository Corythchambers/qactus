import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Tag,
  Wrap,
  WrapItem,
  VStack,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { GiPlantRoots } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";

const About = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const boxBg = useColorModeValue("sand.50", "gray.700");

  const skills = [
    "Playwright",
    "Cypress",
    "Jest",
    "TypeScript",
    "JavaScript",
    "Axe-core",
    "Selenium",
    "API Testing",
    "CI/CD",
    "Git",
    "Accessibility Testing",
    "Test Automation",
    "Performance Testing",
    "Python",
    "Docker",
    "Jenkins",
    "GitHub Actions",
  ];

  return (
    <Box
      as="section"
      py={16}
      bg={bgColor}
      color={textColor}
      id="about"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative succulents */}
      <Box position="absolute" bottom="5%" right="2%" opacity={0.05} zIndex={0}>
        <Icon as={GiPlantRoots} w={32} h={32} color="cactus.500" />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={8} align="flex-start">
          <Flex align="center">
            <Icon as={BiHappy} mr={3} w={6} h={6} color="cactus.500" />
            <Heading as="h2" size="xl" color={headingColor}>
              About Me
            </Heading>
          </Flex>

          <Text fontSize="lg">
            I'm a passionate SDET/QAAE with extensive experience in building
            robust test automation frameworks that ensure software quality and
            accessibility. My background in both development and testing allows
            me to create effective testing solutions that integrate seamlessly
            with development workflows.
          </Text>

          <Box w="100%" p={6} bg={boxBg} borderRadius="xl" boxShadow="sm">
            <Flex align="center" mb={4}>
              <Icon as={GiPlantRoots} mr={3} w={5} h={5} color="cactus.500" />
              <Heading as="h3" size="md" color={headingColor}>
                Skills & Technologies
              </Heading>
            </Flex>
            <Wrap spacing={3}>
              {skills.map((skill, index) => (
                <WrapItem key={index}>
                  <Tag
                    size="lg"
                    colorScheme="cactus"
                    borderRadius="full"
                    variant="solid"
                  >
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Box w="100%" p={6} bg={boxBg} borderRadius="xl" boxShadow="sm">
            <Flex align="center" mb={4}>
              <Icon as={BiHappy} mr={3} w={5} h={5} color="cactus.500" />
              <Heading as="h3" size="md" color={headingColor}>
                My Testing Philosophy
              </Heading>
            </Flex>
            <Text fontSize="lg">
              I believe in a holistic approach to testing that combines
              automation, accessibility, and user experience. My testing
              strategies focus on finding the right balance between unit,
              integration, and end-to-end tests to provide maximum coverage
              while maintaining efficiency and speed. I'm particularly
              passionate about ensuring digital accessibility, as I believe
              software should be usable by everyone.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;

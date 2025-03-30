import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaFilePdf } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";

const Contact = () => {
  const bgColor = useColorModeValue("sand.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("cactus.700", "cactus.300");
  const buttonColorScheme = "cactus";

  return (
    <Box
      as="section"
      py={16}
      bg={bgColor}
      color={textColor}
      id="contact"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box position="absolute" top="10%" right="5%" opacity={0.05} zIndex={0}>
        <Icon as={BiHappy} w={32} h={32} color="cactus.500" />
      </Box>

      <Box position="absolute" bottom="10%" left="5%" opacity={0.05} zIndex={0}>
        <Icon as={GiPlantRoots} w={24} h={24} color="cactus.500" />
      </Box>

      <Container maxW="container.md" position="relative" zIndex={1}>
        <VStack spacing={8} align="center" textAlign="center">
          <Flex align="center">
            <Icon as={BiHappy} mr={3} w={6} h={6} color="cactus.500" />
            <Heading as="h2" size="xl" color={headingColor}>
              Get In Touch
            </Heading>
          </Flex>

          <Text fontSize="lg" maxW="lg">
            I'm currently open to new opportunities in QA automation and
            testing. Feel free to reach out if you'd like to discuss a project
            or position.
          </Text>

          <Box
            p={8}
            bg={cardBg}
            borderRadius="2xl"
            shadow="md"
            w="100%"
            borderWidth="2px"
            borderColor={useColorModeValue("sand.200", "gray.600")}
            transition="all 0.3s"
            _hover={{
              shadow: "lg",
              borderColor: "cactus.400",
            }}
          >
            <VStack spacing={6}>
              <HStack spacing={4}>
                <Button
                  leftIcon={<Icon as={FaEnvelope} />}
                  colorScheme={buttonColorScheme}
                  size="lg"
                  as="a"
                  href="mailto:cory.email@example.com"
                  shadow="md"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  Email Me
                </Button>

                <Button
                  leftIcon={<Icon as={FaGithub} />}
                  colorScheme={buttonColorScheme}
                  variant="outline"
                  size="lg"
                  as="a"
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "md",
                    bg: useColorModeValue("cactus.50", "transparent"),
                  }}
                  transition="all 0.2s"
                >
                  GitHub
                </Button>
              </HStack>

              <Button
                leftIcon={<Icon as={FaFilePdf} />}
                colorScheme={buttonColorScheme}
                variant="outline"
                size="lg"
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "md",
                  bg: useColorModeValue("cactus.50", "transparent"),
                }}
                transition="all 0.2s"
                w={{ base: "full", md: "auto" }}
              >
                Download Resume
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;

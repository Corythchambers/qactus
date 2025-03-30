import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { GiCactus, GiDesert } from "react-icons/gi";

const Hero = () => {
  const bgColor = useColorModeValue("sand.50", "gray.900");
  const textColor = useColorModeValue("cactus.800", "white");
  const accentColor = useColorModeValue("cactus.500", "cactus.300");

  return (
    <Box
      as="section"
      py={20}
      bg={bgColor}
      color={textColor}
      id="hero"
      position="relative"
      overflow="hidden"
    >
      {/* Desert decorative elements */}
      <Box position="absolute" bottom="-5%" right="5%" opacity={0.1} zIndex={0}>
        <Icon as={GiDesert} w={40} h={40} color="sand.300" />
      </Box>

      <Box position="absolute" top="15%" left="5%" opacity={0.1} zIndex={0}>
        <Icon as={GiCactus} w={20} h={20} color="cactus.500" />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={6} align="flex-start">
          <Flex align="center">
            <Icon as={GiCactus} mr={3} w={8} h={8} color={accentColor} />
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              lineHeight="shorter"
              bgGradient={`linear(to-r, ${accentColor}, sand.400)`}
              bgClip="text"
            >
              Hi, I'm Cory — I build automated, scalable, and accessible testing
              systems.
            </Heading>
          </Flex>
          <Text
            fontSize="2xl"
            color={accentColor}
            fontWeight="medium"
            pl={11} // Aligns with the heading after the cactus icon
          >
            QA Automation + Accessibility Engineering
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;

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
  Image,
  keyframes,
} from "@chakra-ui/react";
import { GiDesert } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Hero = () => {
  const bgColor = useColorModeValue("sand.50", "gray.900");
  const textColor = useColorModeValue("cactus.800", "white");
  const accentColor = useColorModeValue("cactus.500", "cactus.300");
  const bounceAnimation = `${bounce} 3s ease-in-out infinite`;

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
        <Icon as={GiDesert} w={40} h={40} color="sand.300" aria-hidden="true" />
      </Box>

      <Box position="absolute" top="15%" left="5%" opacity={0.1} zIndex={0}>
        <Icon
          as={GiDesert}
          w={20}
          h={20}
          color="cactus.500"
          aria-hidden="true"
        />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <VStack spacing={6} align="flex-start">
            <Flex align="center">
              <Icon
                as={BiHappy}
                mr={3}
                w={8}
                h={8}
                color={accentColor}
                aria-hidden="true"
              />
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="shorter"
                bgGradient={`linear(to-r, ${accentColor}, sand.400)`}
                bgClip="text"
              >
                Hi, I'm Cory — I build automated, scalable, and accessible
                testing systems.
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

          <Box
            animation={bounceAnimation}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              height: "10px",
              borderRadius: "50%",
              bg: "rgba(0,0,0,0.1)",
              filter: "blur(3px)",
              zIndex: -1,
            }}
          >
            <Image
              src="/profile-pic.jpeg"
              alt="Cory's profile picture"
              borderRadius="full"
              boxSize={{ base: "200px", md: "220px" }}
              objectFit="cover"
              border="4px solid"
              borderColor={accentColor}
              boxShadow="xl"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "2xl",
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
